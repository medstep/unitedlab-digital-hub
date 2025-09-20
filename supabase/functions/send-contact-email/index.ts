import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    // Send email to company
    const emailResponse = await resend.emails.send({
      from: "United Lab Nepal <noreply@unitedlab.com>",
      to: ["unitedlabnepal@gmail.com"],
      subject: subject,
      html: emailContent,
      replyTo: email,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to user
    const confirmationResponse = await resend.emails.send({
      from: "United Lab Nepal <noreply@unitedlab.com>",
      to: [email],
      subject: "Thank you for contacting United Laboratories Nepal",
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
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
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