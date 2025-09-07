// Global Configuration for Wedding Website
// Nama pasangan diambil dari environment variables (.env.local)

export const WEDDING_COUPLE = {
  // Nama panggilan (untuk tampilan utama)
  brideName: 'Hanny',
  groomName: 'Aliando',
  
  // Nama lengkap
  brideFullName: 'Hanny New Jeans',
  groomFullName: 'Muhamad Aliando',
  
  // Nama orang tua
  brideParents: 'Maman & Imas',
  groomParents: 'Sumarmo & Kantun',
} as const;

// Export individual values for easy access
export const {
  brideName,
  groomName,
  brideFullName,
  groomFullName,
  brideParents,
  groomParents,
} = WEDDING_COUPLE;

// Helper function to get couple display name
export const getCoupleDisplayName = () => `${brideName} & ${groomName}`;

// Helper function to get couple full names
export const getCoupleFullNames = () => `${brideFullName} & ${groomFullName}`;
