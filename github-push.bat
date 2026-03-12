@echo off
echo ==========================================
echo  Push Portfolio to GitHub
echo ==========================================
echo.
cd /d "%~dp0"

echo Step 1: Initializing Git repository...
git init

echo.
echo Step 2: Adding all files to staging...
git add .

echo.
echo Step 3: Creating initial commit...
git commit -m "Initial commit: Portfolio website with Next.js"

echo.
echo ==========================================
echo  Repository Setup Complete!
echo ==========================================
echo.
echo Next steps:
echo 1. Go to https://github.com/new
echo 2. Create a new repository (e.g., "portfolio")
echo 3. Copy the repository URL
echo 4. Run the following commands:
echo.
echo    git remote add origin YOUR_REPO_URL
echo    git branch -M main
echo    git push -u origin main
echo.
pause
