import { WeddingInvitationData, CommentFormData, WeddingMessage } from '@/types';

export async function fetchWeddingMessages(): Promise<WeddingInvitationData> {
  try {
    const timestamp = Date.now();
    const response = await fetch(`/api/messages?t=${timestamp}`, {
      method: 'GET',
      headers: {
        'Accept-Language': 'id-ID',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching wedding messages:', error);
    throw error;
  }
}

export async function submitRSVP(rsvpData: CommentFormData): Promise<WeddingMessage> {
  try {
    console.log('📡 API - Sending to /api/rsvp:', rsvpData);
    
    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'id-ID',
      },
      body: JSON.stringify(rsvpData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to submit RSVP');
    }

    const result = await response.json();
    console.log('📡 API - Response from /api/rsvp:', result);
    
    // Return the new message data for immediate UI update
    console.log('📡 API - Returning data:', result.data);
    return result.data as WeddingMessage;
    
  } catch (error) {
    console.error('❌ API - Error submitting RSVP:', error);
    throw error;
  }
}
