@echo off
echo Building portfolio for production...
cd /d "%~dp0"
call npm run build
echo.
echo Build complete! Files are in the 'dist' folder.
echo.
echo To deploy to abhilashjha.com:
echo 1. Upload all files from the 'dist' folder to your web hosting server
echo 2. Or use Vercel: npx vercel --prod
echo 3. Or use Netlify: npx netlify deploy --prod --dir=dist
pause
