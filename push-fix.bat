@echo off
echo Pushing dark mode fix...
cd /d "%~dp0"
git add .
git commit -m "Fix dark mode toggle functionality"
git push origin main
echo.
echo Fix pushed! Vercel will auto-deploy in 1-2 minutes.
echo Check https://vercel.com/dashboard for status.
echo.
pause
