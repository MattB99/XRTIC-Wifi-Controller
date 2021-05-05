
echo This will get the current bit version
for /f %%i in ('wmic os get osarchitecture ^| find /i "bit"') do SET version=%%i
echo Version is: %version%

if %version% == 64-bit (start /WAIT lib/x64.exe)
if %version% == 32-bit (start /WAIT lib/x86.exe)

pause

