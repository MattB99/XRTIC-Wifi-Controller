SET /p user="Username: "
SET /p pass="Password: "

for /f "tokens=14" %%a in ('ipconfig ^| findstr IPv4') do set _IPaddr=%%a
echo IP is: %_IPaddr%

echo var host="%_IPaddr%", port=8083, user="%user%", pass="%pass%"; > controller/main.js
cd data/raw
type main.js >> ../../controller/main.js

