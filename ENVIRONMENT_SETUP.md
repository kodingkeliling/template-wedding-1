# Environment Variables Setup

## 🚀 Quick Start

1. **Copy template file:**
   ```bash
   cp env.template .env.local
   ```

2. **Edit nama pasangan** di file `.env.local`

3. **Start development server:**
   ```bash
   npm run dev
   ```

## 📁 File Structure

```
wedding-practice-3/
├── env.template          # Template environment variables
├── .env.local           # Your local environment (create this)
├── .gitignore           # .env.local is ignored by Git
└── src/config/global.ts # Uses environment variables
```

## 🔧 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_BRIDE_NAME` | Nama panggilan mempelai wanita | `Rara` |
| `NEXT_PUBLIC_GROOM_NAME` | Nama panggilan mempelai pria | `Adi` |
| `NEXT_PUBLIC_BRIDE_FULL_NAME` | Nama lengkap mempelai wanita | `Siti Salamah Azzahra` |
| `NEXT_PUBLIC_GROOM_FULL_NAME` | Nama lengkap mempelai pria | `Adi Sumaryadi` |
| `NEXT_PUBLIC_BRIDE_PARENTS` | Nama orang tua mempelai wanita | `Maman & Imas` |
| `NEXT_PUBLIC_GROOM_PARENTS` | Nama orang tua mempelai pria | `Sumarmo & Kantun` |
| `NEXT_PUBLIC_SPREADSHEET_API_URL` | Google Sheets API URL | `https://script.google.com/...` |

### Example `.env.local`

```env
# Wedding Couple Information
NEXT_PUBLIC_BRIDE_NAME=Sari
NEXT_PUBLIC_GROOM_NAME=Budi
NEXT_PUBLIC_BRIDE_FULL_NAME=Sari Indah Lestari
NEXT_PUBLIC_GROOM_FULL_NAME=Budi Santoso
NEXT_PUBLIC_BRIDE_PARENTS=Ahmad & Fatimah
NEXT_PUBLIC_GROOM_PARENTS=Surya & Dewi

# Google Sheets API
NEXT_PUBLIC_SPREADSHEET_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## ⚠️ Important Notes

### Next.js Environment Variables

- **Prefix `NEXT_PUBLIC_`** is required for client-side access
- **Server restart** required after changing environment variables
- **File `.env.local`** is automatically ignored by Git

### Security

- ✅ **Safe to commit**: `env.template` (template file)
- ❌ **Never commit**: `.env.local` (your actual values)
- 🔒 **Production**: Set environment variables in your hosting platform

## 🚀 Deployment

### Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with `NEXT_PUBLIC_` prefix
4. Redeploy your project

### Other Platforms

Set environment variables in your hosting platform's dashboard:

```env
NEXT_PUBLIC_BRIDE_NAME=Your Bride Name
NEXT_PUBLIC_GROOM_NAME=Your Groom Name
# ... other variables
```

## 🔄 Development Workflow

1. **First time setup:**
   ```bash
   cp env.template .env.local
   # Edit .env.local with your values
   npm run dev
   ```

2. **Change names:**
   ```bash
   # Edit .env.local
   # Restart server
   npm run dev
   ```

3. **Reset to default:**
   ```bash
   cp env.template .env.local
   npm run dev
   ```

## 🐛 Troubleshooting

### Names not changing?

1. ✅ Check file `.env.local` exists
2. ✅ Verify variable names have `NEXT_PUBLIC_` prefix
3. ✅ Restart development server
4. ✅ Clear browser cache

### Build errors?

1. ✅ Check all required variables are set
2. ✅ Verify no typos in variable names
3. ✅ Ensure proper `.env.local` format

### Production issues?

1. ✅ Set environment variables in hosting platform
2. ✅ Use `NEXT_PUBLIC_` prefix
3. ✅ Redeploy after setting variables
