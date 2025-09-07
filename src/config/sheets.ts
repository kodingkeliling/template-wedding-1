/**
 * Google Sheets Configuration
 * Global variables for sheet names and API settings
 */

// Sheet name for wedding data
export const WEDDING_SHEET_NAME = process.env.NEXT_PUBLIC_WEDDING_SHEET_NAME || 'wedding3';

// Google Apps Script API URL
export const SPREADSHEET_API_URL = process.env.NEXT_PUBLIC_SPREADSHEET_API_URL || 
  'https://script.google.com/macros/s/AKfycbxC9TDCUaBS9xybpn-4sfr_UKl92lbGRdh3YHLF9CjA5wnz_0SVNMPKgQ30aGiCqBlxvA/exec';

// Helper function to build URL with sheet parameter
export const buildSheetUrl = (sheetName: string = WEDDING_SHEET_NAME, includeTimestamp: boolean = false) => {
  let url = `${SPREADSHEET_API_URL}?sheet=${sheetName}`;
  
  if (includeTimestamp) {
    url += `&t=${Date.now()}`;
  }
  
  return url;
};
