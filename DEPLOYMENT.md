# Deployment Instructions

## Environment Variables Setup

### For Vercel Deployment:

1. **Go to your Vercel dashboard** (https://vercel.com/dashboard)
2. **Import your GitHub repository** (`drexflows/drexflows`)
3. **Before deploying, go to Settings > Environment Variables**
4. **Add each variable individually:**

**Variable Name:** `VITE_TELEGRAM_BOT_TOKEN`
**Value:** `7961020846:AAHxJI6TdsZmY87A1u5FwOgvZL8bcthkoXs`
**Environment:** Production, Preview, Development

**Variable Name:** `VITE_TELEGRAM_CHAT_ID`
**Value:** `1296558158`
**Environment:** Production, Preview, Development

**Variable Name:** `VITE_SUPABASE_PROJECT_ID`
**Value:** `mtqrsazgmbymbfdmurpa`
**Environment:** Production, Preview, Development

**Variable Name:** `VITE_SUPABASE_PUBLISHABLE_KEY`
**Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10cXJzYXpnbWJ5bWJmZG11cnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4MjA4NjAsImV4cCI6MjA4MzM5Njg2MH0.Q9UdmMDvVUhG-rG09Z1nlObElu0G1ANk00DNLusLbIU`
**Environment:** Production, Preview, Development

**Variable Name:** `VITE_SUPABASE_URL`
**Value:** `https://mtqrsazgmbymbfdmurpa.supabase.co`
**Environment:** Production, Preview, Development

5. **Click "Save" after adding each variable**
6. **Deploy your project**

### For Other Hosting Platforms:

Copy the values from `.env` file and add them to your hosting platform's environment variables section.

## Telegram Bot Setup

- **Bot Token**: `7961020846:AAHxJI6TdsZmY87A1u5FwOgvZL8bcthkoXs`
- **Chat ID**: `1296558158`
- **Bot Username**: `@drexflows_bot`

## Deployment Steps:

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy
5. Test Telegram bot functionality on live site

## Testing:

After deployment, test all forms to ensure Telegram notifications are working:
- Contact form
- Plan selection form
- Meeting booking form
- Automation requirement form
