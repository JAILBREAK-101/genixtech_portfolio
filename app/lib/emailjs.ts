import emailjs from 'emailjs-com';

const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const INQUIRY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_INQUIRY!;
const RESPONSE_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_RESPONSE!;

export const sendContactEmails = async (data: Record<string, unknown>) => {
  try {
    // Send inquiry notification
    await emailjs.send(
      SERVICE_ID,
      INQUIRY_TEMPLATE_ID,
      data,
      USER_ID
    );

    // Send auto-response
    await emailjs.send(
      SERVICE_ID,
      RESPONSE_TEMPLATE_ID,
      data,
      USER_ID
    );

    return true;
  } catch (error) {
    console.error('Email error:', error);
    throw new Error('Failed to send email');
  }
};