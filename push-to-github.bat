@echo off
echo ==========================================
echo  Push to GitHub Repository
echo ==========================================
echo.
cd /d "%~dp0"

echo Enter your GitHub repository URL:
echo (Example: https://github.com/jhaji246/portfolio.git)
set /p REPO_URL="Repository URL: "

echo.
echo Connecting to remote repository...
git remote add origin %REPO_URL%

echo.
echo Setting branch to main...
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ==========================================
if %ERRORLEVEL% == 0 (
    echo  SUCCESS! Code pushed to GitHub!
    echo ==========================================
    echo.
    echo Next step: Deploy to Vercel
    echo 1. Go to https://vercel.com/new
    echo 2. Import your portfolio repository
    echo 3. Click Deploy
) else (
    echo  ERROR: Push failed!
    echo ==========================================
    echo.
    echo Common fixes:
    echo - Check your repository URL
    echo - Make sure you created the repo on GitHub
    echo - Check your internet connection
)
echo.
pause
