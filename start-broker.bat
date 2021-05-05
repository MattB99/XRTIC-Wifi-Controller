
cd %~dp0/data
copy /Y "password.txt" "C:/Program Files/mosquitto"

cd "C:/Program Files/mosquitto"
echo password_file C:/Program Files/mosquitto/password.txt > mosquitto-custom.conf
echo listener 1883 >> mosquitto-custom.conf
echo allow_anonymous false >> mosquitto-custom.conf
echo listener 8083 >> mosquitto-custom.conf
echo socket_domain ipv4 >> mosquitto-custom.conf
echo protocol websockets >> mosquitto-custom.conf
Taskkill /IM "mosquitto.exe" /F
mosquitto -c "C:/Program Files/mosquitto/mosquitto-custom.conf" -v
cmd -k
