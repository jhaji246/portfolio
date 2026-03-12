@echo off
echo Fixing LeetCode icon...
cd /d "%~dp0"
git add .
git commit -m "Fix LeetCode SVG icon"
git push origin main
echo.
echo Fix pushed! Check https://abhilash-jha.vercel.app in 2 minutes
echo.
pause
