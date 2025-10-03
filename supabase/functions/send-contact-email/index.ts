// @ts-ignore
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// @ts-ignore
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  type: "contact" | "quote";
  productName?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check if API key is available
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Email service not configured");
    }

    const {
      name,
      email,
      phone,
      company,
      message,
      type,
      productName,
    }: ContactRequest = await req.json();

    console.log("Received contact request:", { name, email, type, productName });

    // Validate required fields
    if (!name || !email || !message) {
      throw new Error("Missing required fields: name, email, or message");
    }

    const subject = type === "quote"
      ? `Price Quote Request for ${productName}`
      : "New Contact Form Submission";

    const emailContent = `
      <h2>${subject}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${productName ? `<p><strong>Product:</strong> ${productName}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      
      <hr>
      <p><em>This message was sent from the United Laboratories Nepal website contact form.</em></p>
    `;

    // Log API key status (first 10 chars only for security)
    console.log("API Key available:", RESEND_API_KEY ? `${RESEND_API_KEY.substring(0, 10)}...` : 'NOT SET');

    const emailPayload = {
      from: 'United Lab Nepal <onboarding@resend.dev>',
      to: ['medstep.official@gmail.com'],
      subject: subject,
      html: emailContent,
      reply_to: email,
    };

    console.log("Sending email with payload:", JSON.stringify(emailPayload, null, 2));

    // Send email to company using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    console.log("Email response status:", emailResponse.status);
    console.log("Email response headers:", Object.fromEntries(emailResponse.headers.entries()));

    const emailResult = await emailResponse.json();
    console.log("Email response body:", JSON.stringify(emailResult, null, 2));

    if (!emailResponse.ok) {
      console.error("Failed to send email:", emailResult);
      throw new Error(`Failed to send email: ${JSON.stringify(emailResult)}`);
    }

    console.log("Email sent successfully to sank.raun@gmail.com");

    // Send confirmation email to user
    const confirmationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'United Lab Nepal <onboarding@resend.dev>',
        to: [email],
        subject: 'Thank you for contacting United Laboratories Nepal',
        html: `
          <h2>Thank you for your inquiry!</h2>
          <p>Dear ${name},</p>
          <p>We have received your ${type === 'quote' ? 'price quote request' : 'message'} and will get back to you within 24 hours.</p>
          ${productName ? `<p>Product: ${productName}</p>` : ''}
          <p>Our team at United Laboratories Nepal will review your request and respond promptly.</p>
          <br>
          <p>Best regards,<br>
          United Laboratories Nepal Team<br>
          📞 +977-9851112329<br>
          ✉️ unitedlabnepal@gmail.com</p>
        `,
      }),
    });

    const confirmationResult = await confirmationResponse.json();
    console.log("Confirmation email response:", confirmationResult);

    if (!confirmationResponse.ok) {
      console.error("Failed to send confirmation email:", confirmationResult);
      // Don't throw error here, main email was sent successfully
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Function executed successfully",
        debug: {
          apiKeySet: !!RESEND_API_KEY,
          apiKeyPrefix: RESEND_API_KEY ? RESEND_API_KEY.substring(0, 10) : 'NOT_SET',
          emailResponseStatus: emailResponse.status,
          emailResult: emailResult,
          confirmationResult: confirmationResult,
          formData: { name, email, phone, company, type }
        }
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({
        error: error.message,
        success: false
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders
        },
      }
    );
  }
};

serve(handler);