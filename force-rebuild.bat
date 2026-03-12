@echo off
echo Force rebuilding deployment...
cd /d "%~dp0"

echo Step 1: Making a small change to force rebuild...
echo. >> src\app\page.tsx

echo Step 2: Committing changes...
git add .
git commit -m "Force rebuild - add LeetCode and fix deployment"

echo Step 3: Pushing to GitHub...
git push origin main

echo.
echo ==========================================
echo Rebuild triggered! 
echo ==========================================
echo.
echo Check deployment status at:
echo https://vercel.com/dashboard
echo.
echo Your site will be at:
echo https://abhilash-jha.vercel.app
echo.
pause
