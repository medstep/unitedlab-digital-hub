# Deployment Guide for United Laboratories Nepal Website

## SPA Routing Configuration

This React application uses client-side routing. To ensure all routes work correctly in production, you need to configure your hosting provider to serve `index.html` for all routes.

## Hosting Provider Configurations

### Netlify
- The `public/_redirects` file is already configured
- No additional setup required

### Vercel
- The `vercel.json` file is already configured
- No additional setup required

### Apache Server
- The `public/.htaccess` file is already configured
- Ensure mod_rewrite is enabled on your server

### Nginx
Add this configuration to your nginx.conf:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Firebase Hosting
Add to your `firebase.json`:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### AWS S3 + CloudFront
1. Set up S3 bucket for static website hosting
2. Configure CloudFront with custom error pages:
   - Error Code: 404
   - Response Page Path: /index.html
   - HTTP Response Code: 200

## Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Environment Variables

Make sure to set up the following environment variables in your hosting provider:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Troubleshooting

### 404 Errors on Direct Route Access
- Ensure your hosting provider is configured to serve index.html for all routes
- Check that the appropriate configuration file is present and correctly configured

### Auth Page Issues
- Verify Supabase configuration
- Check environment variables are set correctly
- Ensure redirect URLs are configured in Supabase dashboard

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npm run type-check`
- Verify all dependencies are installed

## Testing Production Build Locally

```bash
# Build the project
npm run build

# Serve the build locally
npm run preview

# Test all routes manually:
# - http://localhost:4173/
# - http://localhost:4173/about
# - http://localhost:4173/products
# - http://localhost:4173/auth
# - http://localhost:4173/admin
```

All routes should work without 404 errors when accessed directly.