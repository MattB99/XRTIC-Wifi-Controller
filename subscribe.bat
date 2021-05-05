

SET PATH=%PATH%;C:\Program Files\mosquitto

SET /p host="Host: "
SET /p port="Port: "
SET /p user="Username: "
SET /p pass="Password: "
SET /p topic="Topic: "

mosquitto_sub -h %host% -p %port% -u %user% -P %pass% -t %topic%

pause