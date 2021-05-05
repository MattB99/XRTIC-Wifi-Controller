SET /p host="Host: "
SET /p port="Port: "
SET /p user="Username: "
SET /p pass="Password: "


echo var host="%host%", port=%port%, user="%user%", pass="%pass%"; > controller/main.js
cd data/raw
type main.js >> ../main.js