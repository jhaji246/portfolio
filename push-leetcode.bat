@echo off
echo Adding LeetCode profile...
cd /d "%~dp0"
git add .
git commit -m "Add LeetCode profile link to Hero and Footer"
git push origin main
echo.
echo LeetCode link added! Vercel will auto-deploy in 1-2 minutes.
echo Check https://vercel.com/dashboard for status.
echo.
pause
