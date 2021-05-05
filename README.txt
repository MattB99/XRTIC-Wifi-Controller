Step 1: If not installed, install mosquitto by clicking on the start-broker.bat and running as an administrator.
Step 2: The controller still needs to be configured for the MQTT broker being used.  Depending on how it is configured, click on the correct bat file and run as administrator.
	For local, run configure-local.bat as administrator.
	For remote, run configure-remote.bat as administrator.
Step 3: If running a local broker run the start-broker.bat to enable broker on the device.
Optional: Use the subscribe.bat and publish.bat for testing the mosquitto broker