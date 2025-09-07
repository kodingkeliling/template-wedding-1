import { NextRequest, NextResponse } from 'next/server';
import { buildSheetUrl } from '@/config/sheets';

export async function GET(request: NextRequest) {
  try {
    
    // Build URL with sheet parameter and timestamp
    const urlWithParams = buildSheetUrl(undefined, true);
    
    const response = await fetch(urlWithParams, {
      method: 'GET',
      headers: {
        'Accept-Language': 'id-ID',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
      redirect: 'follow',
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Filter out invalid messages - menggunakan field yang baru
    if (data.data && Array.isArray(data.data)) {
      const validMessages = data.data.filter((message: any) => {
        const hasId = message.id && message.id.trim() !== '';
        // Support both old and new field names
        const hasName = (message.nama_lengkap && message.nama_lengkap.trim() !== '') || 
                       (message.name && message.name.trim() !== '');
        const hasContent = (message.ucapan && message.ucapan.trim() !== '') || 
                          (message.content && message.content.trim() !== '');
        
        const isNotTestData = !((message.nama_lengkap || message.name) === 'test' && 
                               (message.ucapan || message.content) === 'test');
        const isNotCompletelyEmpty = hasId && hasName && hasContent;
        
        const isValid = isNotCompletelyEmpty && isNotTestData;
        
        if (!isValid) {
          console.log('Filtered out invalid message:', message);
        }
        
        return isValid;
      });

      data.data = validMessages;
    }
    
    // Add aggressive cache control headers
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0, stale-while-revalidate=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
        'Vary': '*',
        'Last-Modified': new Date().toUTCString(),
        'ETag': `"${Date.now()}"`,
        'X-Vercel-Cache': 'BYPASS',
        'X-Cache-Status': 'BYPASS',
      },
    });
  } catch (error) {
    console.error('Error fetching messages from Google Apps Script:', error);
    
    // Return empty data structure if there's an error
    return NextResponse.json({
      data: []
    });
  }
}
