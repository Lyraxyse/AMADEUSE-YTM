$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath
Start-Process -FilePath "pnpm" -ArgumentList "start" -WindowStyle Hidden
