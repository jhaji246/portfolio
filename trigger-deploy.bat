@echo off
echo Triggering fresh deployment...
cd /d "%~dp0"
git commit --allow-empty -m "Trigger fresh deployment for LeetCode update"
git push origin main
echo.
echo Deployment triggered! Check https://vercel.com/dashboard
echo New URL should be: https://abhilash-jha.vercel.app
echo.
pause
