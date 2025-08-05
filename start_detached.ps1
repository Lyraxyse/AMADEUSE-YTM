# Script PowerShell pour lancer AMADEUSE MUSIC NEWS en arrière-plan
Set-Location "d:\GITHUB\AMADEUSE-MUSIC-NEWS"

# Lancer l'application en arrière-plan avec Start-Process
Start-Process -FilePath "pnpm" -ArgumentList "start" -WindowStyle Hidden -PassThru

Write-Host "Application AMADEUSE MUSIC NEWS lancée en arrière-plan!"
Write-Host "L'application continuera de fonctionner même après fermeture de ce terminal."

# Sortir immédiatement
exit