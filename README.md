# Wedding Invitation Website - Rara & Adi

A beautiful, modern wedding invitation website built with Next.js 15, React 19, and Tailwind CSS. Features RSVP functionality with Google Sheets integration.

## Features

- 🎨 **Modern Design**: Beautiful, responsive design with smooth animations
- 📱 **Mobile First**: Fully responsive across all devices
- 💌 **RSVP System**: Integrated RSVP form with Google Sheets backend
- 📸 **Photo Gallery**: Interactive photo gallery with lightbox
- 🗺️ **Location Map**: Integrated location information with Google Maps
- 💝 **Gift Registry**: Bank transfer and digital gift options
- 💬 **Guest Messages**: Display guest messages and RSVP responses
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed

## Sections

1. **Hero Section**: Welcome message with couple names and wedding date
2. **Invitation**: Formal invitation with couple photos and details
3. **Events**: Wedding ceremony and reception details
4. **Love Story**: Timeline of the couple's relationship
5. **Gallery**: Photo gallery with interactive lightbox
6. **Location**: Venue information with map integration
7. **Gifts**: Gift registry and bank transfer information
8. **RSVP Form**: Guest response form with attendance confirmation
9. **Messages**: Display of guest messages and RSVP responses
10. **Footer**: Contact information and final message

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Validation**: Zod
- **Backend**: Google Apps Script + Google Sheets

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wedding-practice-3
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SPREADSHEET_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Wedding Details

Edit the wedding information in `src/config/wedding.ts`:

- Couple names and photos
- Wedding date and venue
- Love story timeline
- Event details
- Bank information
- Gallery photos

### Google Sheets Integration

1. Create a Google Sheet to store RSVP responses
2. Create a Google Apps Script to handle API requests
3. Deploy the script as a web app
4. Update the `NEXT_PUBLIC_SPREADSHEET_API_URL` environment variable

### Customization

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font families in `src/app/globals.css`
- **Content**: Edit wedding details in `src/config/wedding.ts`
- **Styling**: Customize components in the `src/components/` directory

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SPREADSHEET_API_URL` | Google Apps Script URL for RSVP data | Yes |

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.

---

Made with ❤️ for Rara & Adi's special day
