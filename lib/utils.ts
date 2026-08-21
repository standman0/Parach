import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_PHONE_NUMBER = "+2347055247562";

export function getWhatsAppEnrollmentUrl(courseTitle: string) {
  const message = encodeURIComponent(
    `Hello, I'm interested in enrolling in the 10X Academy ${courseTitle} course. I'd like to know more about the course details, schedule, duration, fees, and how to get started.`
  );

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${message}`;
}
