@echo off
echo ==========================================
echo  Pushing LeetCode Changes to GitHub
echo ==========================================
echo.
cd /d "%~dp0"

echo Step 1: Adding changes...
git add .

echo.
echo Step 2: Committing changes...
git commit -m "Add LeetCode link to Contact section"

echo.
echo Step 3: Pushing to GitHub...
git push origin main

echo.
echo ==========================================
if %ERRORLEVEL% == 0 (
    echo  SUCCESS! Changes pushed to GitHub!
    echo ==========================================
    echo.
    echo Vercel will automatically redeploy your site.
    echo Check deployment status at:
    echo https://vercel.com/abhilash-jha/abhilash-jha
) else (
    echo  ERROR: Push failed!
    echo ==========================================
)
echo.
pause
