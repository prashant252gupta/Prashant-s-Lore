'use server';

import { contactFormSchema } from '@/lib/schemas';
import type { z } from 'zod';

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.errors.map(e => e.message).join(' ');
    return { success: false, message: errorMessages };
  }

  // In a real application, you would integrate with an email service
  // or save the message to a database.
  console.log('New contact form submission:', result.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'Thank you for your message! I will get back to you soon.' };
}
