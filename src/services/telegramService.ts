const TELEGRAM_BOT_TOKEN = '7961020846:AAHxJI6TdsZmY87A1u5FwOgvZL8bcthkoXs';
// Correct chat ID found from bot updates
const TELEGRAM_CHAT_ID = '1296558158';

// Test function to try sending a message and identify working chat ID
export const testTelegramConnection = async (): Promise<string | null> => {
  const testMessage = "🤖 Testing Telegram bot connection from Drex-flows website";
  
  const chatIds = [
    '@drexflows_bot',
    'drexflows_bot',
    // Add your personal chat ID if you know it
  ];

  for (const chatId of chatIds) {
    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: testMessage,
        }),
      });

      if (response.ok) {
        console.log(`✅ Test message sent successfully with chat ID: ${chatId}`);
        return chatId;
      } else {
        const errorData = await response.json();
        console.error(`❌ Failed with chat ID ${chatId}:`, errorData);
      }
    } catch (error) {
      console.error(`❌ Error with chat ID ${chatId}:`, error);
    }
  }

  return null;
};

// Helper function to get chat ID from bot updates
export const getBotUpdates = async () => {
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`);
    const data = await response.json();
    console.log('Bot updates:', data);
    return data;
  } catch (error) {
    console.error('Error getting bot updates:', error);
    return null;
  }
};

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budgetAmount: string;
  currency: string;
  message: string;
}

interface MeetingFormData {
  name: string;
  number: string;
  purpose: string;
  gmail: string;
}

interface AutomationRequirementData {
  name: string;
  email: string;
  contactNumber: string;
  usecase: string;
}

interface PlanSelectionData {
  name: string;
  email: string;
  number: string;
  country: string;
  selectedPlan: string;
  pricingType: string;
}

export const sendContactFormToTelegram = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const message = `
🔔 New Contact Form Submission

👤 Name: ${formData.name}
📧 Email: ${formData.email}
🏢 Company: ${formData.company || 'Not provided'}
🛠️ Service Interest: ${formData.service || 'Not specified'}
💰 Budget: ${formData.budgetAmount ? `${formData.budgetAmount} ${formData.currency}` : 'Not specified'}

📝 Message:
${formData.message}

---
📅 Submitted: ${new Date().toLocaleString()}
    `;

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    if (response.ok) {
      console.log('✅ Contact form sent successfully to Telegram');
      return true;
    } else {
      const errorData = await response.json();
      console.error('❌ Telegram API Error:', errorData);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending contact form to Telegram:', error);
    return false;
  }
};

export const sendMeetingRequestToTelegram = async (formData: MeetingFormData): Promise<boolean> => {
  try {
    const message = `
📅 New Meeting Request

👤 Name: ${formData.name}
📱 Phone Number: ${formData.number}
📧 Gmail: ${formData.gmail}
🎯 Purpose: ${formData.purpose}

---
📅 Requested: ${new Date().toLocaleString()}
    `;

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    if (response.ok) {
      console.log('✅ Meeting request sent successfully to Telegram');
      return true;
    } else {
      const errorData = await response.json();
      console.error('❌ Telegram API Error:', errorData);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending meeting request to Telegram:', error);
    return false;
  }
};

export const sendAutomationRequirementToTelegram = async (formData: AutomationRequirementData): Promise<boolean> => {
  try {
    const message = `
🤖 New Automation Requirement

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Contact Number: ${formData.contactNumber}

💡 Use Case:
${formData.usecase}

---
📅 Submitted: ${new Date().toLocaleString()}
    `;

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    if (response.ok) {
      console.log('✅ Automation requirement sent successfully to Telegram');
      return true;
    } else {
      const errorData = await response.json();
      console.error('❌ Telegram API Error:', errorData);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending automation requirement to Telegram:', error);
    return false;
  }
};

export const sendPlanSelectionToTelegram = async (formData: PlanSelectionData): Promise<boolean> => {
  try {
    const message = `
💳 New Plan Selection

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.number}
🌍 Country: ${formData.country}

📋 Selected Plan: ${formData.selectedPlan}
💰 Pricing Type: ${formData.pricingType === 'monthly' ? 'Monthly Retainer' : 'One-time Project'}

---
📅 Submitted: ${new Date().toLocaleString()}
    `;

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    if (response.ok) {
      console.log('✅ Plan selection sent successfully to Telegram');
      return true;
    } else {
      const errorData = await response.json();
      console.error('❌ Telegram API Error:', errorData);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending plan selection to Telegram:', error);
    return false;
  }
};
