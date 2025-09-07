'use client';

export interface GuestInfo {
  name?: string;
  location?: string;
}

export function getGuestInfoFromUrl(): GuestInfo {
  if (typeof window === 'undefined') {
    return {};
  }

  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    name: urlParams.get('kepada') || undefined,
    location: urlParams.get('di') || undefined,
  };
}

export function formatGuestName(name?: string): string {
  if (!name) return '';
  
  // Handle URL encoding and formatting
  return decodeURIComponent(name)
    .replace(/\+/g, ' ')
    .trim();
}

export function formatGuestLocation(location?: string): string {
  if (!location) return '';
  
  // Handle URL encoding and formatting
  return decodeURIComponent(location)
    .replace(/\+/g, ' ')
    .trim();
}
