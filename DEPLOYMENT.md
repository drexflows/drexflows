# Deployment Instructions

## Environment Variables Setup

### For Vercel Deployment:

1. **Go to your Vercel dashboard**
2. **Select your project**
3. **Go to Settings > Environment Variables**
4. **Add the following variables:**

```
VITE_TELEGRAM_BOT_TOKEN = 7961020846:AAHxJI6TdsZmY87A1u5FwOgvZL8bcthkoXs
VITE_TELEGRAM_CHAT_ID = 1296558158
VITE_SUPABASE_PROJECT_ID = mtqrsazgmbymbfdmurpa
VITE_SUPABASE_PUBLISHABLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10cXJzYXpnbWJ5bWJmZG11cnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4MjA4NjAsImV4cCI6MjA4MzM5Njg2MH0.Q9UdmMDvVUhG-rG09Z1nlObElu0G1ANk00DNLusLbIU
VITE_SUPABASE_URL = https://mtqrsazgmbymbfdmurpa.supabase.co
```

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
