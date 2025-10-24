# Installation Instructions

## Prerequisites Check

Before installing, ensure you have:
- ✅ Node.js 16.x or higher
- ✅ npm 7.x or higher

Check installed versions:
```bash
node --version
npm --version
```

## Installation Steps

### Method 1: Quick Install (Recommended)

```powershell
# Navigate to project folder
cd "d:\Easy2Work\ABI Real estate"

# Install all dependencies
npm install

# Start the development server
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Method 2: Clean Install (If Having Issues)

```powershell
# Navigate to project folder
cd "d:\Easy2Work\ABI Real estate"

# Remove old installations
rmdir /s /q node_modules
del package-lock.json

# Fresh install
npm cache clean --force
npm install

# Start dev server
npm run dev
```

### Method 3: Using Yarn (Alternative)

```bash
# Install yarn if not already installed
npm install -g yarn

# Navigate to project folder
cd "d:\Easy2Work\ABI Real estate"

# Install dependencies with yarn
yarn install

# Start dev server
yarn dev
```

## Build for Production

```powershell
# Build the project
npm run build

# Check the build output
ls dist/

# Preview the production build
npm run preview
```

## Troubleshooting

### Issue: "Port 3000 is already in use"
```powershell
# Use a different port
npm run dev -- --port 3001
```

### Issue: Module not found errors
```powershell
# Clear node_modules and reinstall
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Issue: TypeScript compilation errors
```powershell
# Rebuild TypeScript
npm run build

# Or reset and reinstall
npm cache clean --force
npm install
```

### Issue: Chakra UI not working
```powershell
# Install Chakra dependencies explicitly
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### Issue: Tailwind CSS not applied
```powershell
# Rebuild CSS
npm run build

# Or restart dev server
npm run dev
```

## Verify Installation

After installation, verify everything works:

1. **Check Node Modules**
   ```powershell
   dir node_modules | wc -l  # Should show 200+
   ```

2. **Test Build**
   ```powershell
   npm run build  # Should complete without errors
   ```

3. **Test Dev Server**
   ```powershell
   npm run dev  # Should start on localhost:3000
   ```

## Verify Dependencies

Check all key dependencies are installed:

```powershell
npm list react
npm list react-dom
npm list react-router-dom
npm list @chakra-ui/react
npm list tailwindcss
npm list recharts
npm list vite
```

All should show installed versions.

## File Structure Check

Verify all files are in place:

```powershell
# Check src directory
dir src/

# Check pages
dir src/pages/

# Check components
dir src/components/

# Check data
dir src/data/
```

Should see all TypeScript files listed.

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| npm install fails | Try `npm cache clean --force` |
| Port 3000 in use | Use `--port 3001` flag |
| Module errors | Delete node_modules and reinstall |
| CSS not loading | Restart dev server |
| Types not found | Update tsconfig.json |
| Build fails | Check TypeScript errors with `tsc` |

## Next Steps

Once installation is complete:

1. ✅ Run `npm run dev`
2. ✅ Open `http://localhost:3000`
3. ✅ Explore all 9 modules
4. ✅ Try search and filtering
5. ✅ View charts and analytics

## Production Deployment

When ready to deploy:

```powershell
# Build for production
npm run build

# Test production build locally
npm run preview

# Deploy dist/ folder to:
# - Vercel
# - Netlify
# - AWS S3
# - Azure Static Web Apps
# - Any static hosting
```

## Environment Variables

Create `.env` file for future backend integration:

```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Easy2Work CRM
VITE_VERSION=2.0
```

## System Resources

Minimum requirements:
- RAM: 2GB
- Disk: 500MB (including node_modules)
- CPU: Any modern processor
- Network: Internet for npm packages

## Performance Tips

1. Use VS Code for best developer experience
2. Install Vite extension for VS Code
3. Install Tailwind CSS IntelliSense
4. Use Chrome DevTools for debugging
5. Keep browser console clean

## Getting Help

If you encounter issues:

1. Check `README.md` for full documentation
2. Check `QUICK_START.md` for quick reference
3. Check `SETUP_COMPLETE.md` for feature list
4. Review TypeScript errors (if any)
5. Check console errors in browser DevTools

## Verify Everything Works

Test each section:

- ✅ Dashboard loads with charts
- ✅ Sidebar navigation works
- ✅ Client search filters results
- ✅ Lead scoring shows progress
- ✅ Quotation displays GST calculations
- ✅ Finance table shows data
- ✅ Attendance records display
- ✅ Analytics shows all charts

---

**Estimated Installation Time**: 5-10 minutes  
**Disk Space Required**: ~500MB  
**Network**: Required (for npm)

You're all set! Run `npm run dev` to start. 🚀
