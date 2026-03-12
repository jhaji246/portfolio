@echo off
echo Triggering redeployment...
cd /d "%~dp0"
git commit --allow-empty -m "Trigger redeployment"
git push origin main
echo.
echo Redeployment triggered! Check https://vercel.com/dashboard for status.
echo Your site will be live at: https://abhilash-jha.vercel.app
echo.
pause
