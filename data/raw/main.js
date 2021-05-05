
var connected = false;
var feedbackDisplayTopic = "XRTIC20/Feedback/SevenSegmentDisplay";

var feedbackBumpTopic = "XRTIC20/Feedback/BumpSensor";
var feedbackRFIDTopic = "XRTIC20/Feedback/RFID";
var feedbackIRSensorTopic = "XRTIC20/Feedback/IRSensor";
var feedbackActionTopic = "XRTIC20/Feedback/Action";
var feedbackMotorTopic = "XRTIC20/Feedback/Motor";


var pressedColor = "grey";
var unpressedColor = "white";

var activatedColor = "red";
var deactivatedColor = "green";

var litSegmentColor = "lightgreen";
var unlitSegmentColor = "darkgreen";

var output = "";
var topic = "XRTIC20/Commands/Rover";
var lastOutput = "";

//wheel diameter in cm
var wheelDiameter = 7;


var controllerData = document.getElementById('controller-input-data-label');

var segmentA = document.getElementById('display-segment-a');
var segmentB = document.getElementById('display-segment-b');
var segmentC = document.getElementById('display-segment-c');
var segmentD = document.getElementById('display-segment-d');
var segmentE = document.getElementById('display-segment-e');
var segmentF = document.getElementById('display-segment-f');
var segmentG = document.getElementById('display-segment-g');
var segmentDP = document.getElementById('display-segment-dp');

var bump0 = document.getElementById('bump-sensor-block-0');
var bump1 = document.getElementById('bump-sensor-block-1');
var bump2 = document.getElementById('bump-sensor-block-2');
var bump3 = document.getElementById('bump-sensor-block-3');
var bump4 = document.getElementById('bump-sensor-block-4');
var bump5 = document.getElementById('bump-sensor-block-5');

var leftIR = document.getElementById('ir-sensor-input-data-left-value');
var centerIR = document.getElementById('ir-sensor-input-data-center-value');
var rightIR = document.getElementById('ir-sensor-input-data-right-value');

var wheelValue1 = document.getElementById('wheel-value-1');
var wheelDir1 = document.getElementById('wheel-dir-1');

var wheelValue2 = document.getElementById('wheel-value-2');
var wheelDir2 = document.getElementById('wheel-dir-2');

var speedValue = document.getElementById('speed-output-value');

var rfidBlock = document.getElementById('rfid-input-block');
var rfidPowerValue = document.getElementById('power-output-data-value');
var rfidTypeValue = document.getElementById('rfid-data');


var keyPressCheck = [];
var totalKeys = 9;
for(var i = 0; i < totalKeys; i++) {
  keyPressCheck.push(false);
}

var keyWIndex = 0;
var keyAIndex = 1;
var keySIndex = 2;
var keyDIndex = 3;
var keySpacebarIndex = 4;
var keyUpIndex = 5;
var keyLeftIndex = 6;
var keyDownIndex = 7;
var keyRightIndex = 8;


window.onload = function(){


    var keyW = 87;
    var keyS = 83;
    var keyA = 65;
    var keyD = 68;
    var keyRight = 39;
    var keyLeft = 37;
    var keyUp = 38;
    var keyDown = 40;
    var keySpacebar = 32;

    startConnect();

    window.onkeydown = function(key){
        if(key.keyCode == keyW)
        {
            if(!keyPressCheck[keyWIndex])
            {
              pressW();
              keyPressCheck[keyWIndex] = true;
            }
        }
        else if(key.keyCode == keyS)
        {
            if(!keyPressCheck[keySIndex])
            {
              pressS();
              keyPressCheck[keySIndex] = true;
            }
        }
        else if(key.keyCode == keyA)
        {
            if(!keyPressCheck[keyAIndex])
            {
              pressA();
              keyPressCheck[keyAIndex] = true;
            }
        }
        else if(key.keyCode == keyD)
        {
            if(!keyPressCheck[keyDIndex])
            {
              pressD();
              keyPressCheck[keyDIndex] = true;
            }
        }
        else if(key.keyCode == keyUp)
        {
            if(!keyPressCheck[keyUpIndex])
            {
              pressUp();
              keyPressCheck[keyUpIndex] = true;
            }
        }
        else if(key.keyCode == keyDown)
        {
            if(!keyPressCheck[keyDownIndex])
            {
              pressDown();
              keyPressCheck[keyDownIndex] = true;
            }
        }
        else if(key.keyCode == keyLeft)
        {
            if(!keyPressCheck[keyLeftIndex])
            {
              pressLeft();
              keyPressCheck[keyLeftIndex] = true;
            }
        }
        else if(key.keyCode == keyRight)
        {
            if(!keyPressCheck[keyRightIndex])
            {
              pressRight();
              keyPressCheck[keyRightIndex] = true;
            }
        }
        else if(key.keyCode == keySpacebar)
        {
            if(!keyPressCheck[keySpacebarIndex])
            {
              pressSpacebar();
              keyPressCheck[keySpacebarIndex] = true;
            }
        }
        else
        {
            pressNotSupported();
        }

    };

    window.onkeyup = function(key){
        if(key.keyCode == keyW)
        {
            if(keyPressCheck[keyWIndex])
            {
              releaseW();
              keyPressCheck[keyWIndex] = false;
            }
        }
        else if(key.keyCode == keyS)
        {
            if(keyPressCheck[keySIndex])
            {
              releaseS();
              keyPressCheck[keySIndex] = false;
            }
        }
        else if(key.keyCode == keyA)
        {
            if(keyPressCheck[keyAIndex])
            {
              releaseA();
              keyPressCheck[keyAIndex] = false;
            }
        }
        else if(key.keyCode == keyD)
        {
            if(keyPressCheck[keyDIndex])
            {
              releaseD();
              keyPressCheck[keyDIndex] = false;
            }
        }
        else if(key.keyCode == keyUp)
        {
            if(keyPressCheck[keyUpIndex])
            {
              releaseUp();
              keyPressCheck[keyUpIndex] = false;
            }
        }
        else if(key.keyCode == keyDown)
        {
            if(keyPressCheck[keyDownIndex])
            {
              releaseDown();
              keyPressCheck[keyDownIndex] = false;
            }
        }
        else if(key.keyCode == keyLeft)
        {
            if(keyPressCheck[keyLeftIndex])
            {
              releaseLeft();
              keyPressCheck[keyLeftIndex] = false;
            }
        }
        else if(key.keyCode == keyRight)
        {
            if(keyPressCheck[keyRightIndex])
            {
              releaseRight();
              keyPressCheck[keyRightIndex] = false;
            }
        }
        else if(key.keyCode == keySpacebar)
        {
            if(keyPressCheck[keySpacebarIndex])
            {
              releaseSpacebar();
              keyPressCheck[keySpacebarIndex] = false;
            }
        }
        else
        {
            releaseNotSupported();
        }



    };
};

function toggleRoboNav() {
  var slider = document.getElementById("control-panel-checkbox1");
  if(slider.checked == true)
  {
    output = '{"pressed":1,"key":"rn"}';
    if(connected)
        sendMessage(topic, output);
  }
  else {
    output = '{"pressed":0,"key":"rn"}';
    if(connected)
        sendMessage(topic, output);
  }
  controllerData.innerHTML = output;
}

function turnOnA() {
  segmentA.style.backgroundColor = litSegmentColor;
}
function turnOnB() {
  segmentB.style.backgroundColor = litSegmentColor;
}
function turnOnC() {
  segmentC.style.backgroundColor = litSegmentColor;
}
function turnOnD() {
  segmentD.style.backgroundColor = litSegmentColor;
}
function turnOnE() {
  segmentE.style.backgroundColor = litSegmentColor;
}
function turnOnF() {
  segmentF.style.backgroundColor = litSegmentColor;
}
function turnOnG() {
  segmentG.style.backgroundColor = litSegmentColor;
}
function turnOnDP() {
  segmentDP.style.backgroundColor = litSegmentColor;
}

function turnOffA() {
  segmentA.style.backgroundColor = unlitSegmentColor;

}
function turnOffB() {
  segmentB.style.backgroundColor = unlitSegmentColor;

}
function turnOffC() {
  segmentC.style.backgroundColor = unlitSegmentColor;

}
function turnOffD() {
  segmentD.style.backgroundColor = unlitSegmentColor;

}
function turnOffE() {
  segmentE.style.backgroundColor = unlitSegmentColor;

}
function turnOffF() {
  segmentF.style.backgroundColor = unlitSegmentColor;

}
function turnOffG() {
  segmentG.style.backgroundColor = unlitSegmentColor;

}
function turnOffDP() {
  segmentDP.style.backgroundColor = unlitSegmentColor;

}

function activateBump0()
{
  bump0.style.backgroundColor = activatedColor;
}

function deactivateBump0()
{
  bump0.style.backgroundColor = deactivatedColor;
}

function activateBump1()
{
  bump1.style.backgroundColor = activatedColor;
}

function deactivateBump1()
{
  bump1.style.backgroundColor = deactivatedColor;
}

function activateBump2()
{
  bump2.style.backgroundColor = activatedColor;
}

function deactivateBump2()
{
  bump2.style.backgroundColor = deactivatedColor;
}

function activateBump3()
{
  bump3.style.backgroundColor = activatedColor;
}

function deactivateBump3()
{
  bump3.style.backgroundColor = deactivatedColor;
}

function activateBump4()
{
  bump4.style.backgroundColor = activatedColor;
}

function deactivateBump4()
{
  bump4.style.backgroundColor = deactivatedColor;
}

function activateBump5()
{
  bump5.style.backgroundColor = activatedColor;
}

function deactivateBump5()
{
  bump5.style.backgroundColor = deactivatedColor;
}

function activateRFID()
{
  rfidBlock.style.backgroundColor = activatedColor;
}

function deactivateRFID()
{
  rfidBlock.style.backgroundColor = deactivatedColor;
}


function pressNotSupported()
{
    output = "p_[NOT SUPPORTED]";

    controllerData.innerHTML = output;
}

function releaseNotSupported()
{
    output = "r_[NOT SUPPORTED]";

    controllerData.innerHTML = output;
}

function pressW()
{
    output = '{"pressed":1,"key":"w"}';
    document.getElementById('w-button').style.backgroundColor = pressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;

}


function releaseW()
{
    output = '{"pressed":0,"key":"w"}';
    document.getElementById('w-button').style.backgroundColor = unpressedColor;
    if(connected)
        sendMessage(topic, output);
    controllerData.innerHTML = output;

}

function pressA()
{
    output = '{"pressed":1,"key":"a"}';
    document.getElementById('a-button').style.backgroundColor = pressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}
function releaseA()
{
    output = '{"pressed":0,"key":"a"}';
    document.getElementById('a-button').style.backgroundColor = unpressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}

function pressS()
{
    output = '{"pressed":1,"key":"s"}';
    document.getElementById('s-button').style.backgroundColor = pressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}
function releaseS()
{
    output = '{"pressed":0,"key":"s"}';
    document.getElementById('s-button').style.backgroundColor = unpressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}

function pressD()
{
    output = '{"pressed":1,"key":"d"}';
    document.getElementById('d-button').style.backgroundColor = pressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}
function releaseD()
{
    output = '{"pressed":0,"key":"d"}';
    document.getElementById('d-button').style.backgroundColor = unpressedColor;
    if(connected)
        sendMessage(topic, output);
    controllerData.innerHTML = output;
}

function pressUp()
{
    output = '{"pressed":1,"key":"up"}';
    document.getElementById('up-button').style.backgroundColor = pressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}
function releaseUp()
{
    output = '{"pressed":0,"key":"up"}';
    document.getElementById('up-button').style.backgroundColor = unpressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}

function pressLeft()
{
    output = '{"pressed":1,"key":"left"}';
    document.getElementById('left-button').style.backgroundColor = pressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}
function releaseLeft()
{
    output = '{"pressed":0,"key":"left"}';
    document.getElementById('left-button').style.backgroundColor = unpressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}

function pressDown()
{
    output = '{"pressed":1,"key":"down"}';
    document.getElementById('down-button').style.backgroundColor = pressedColor;
    if(connected)
        sendMessage(topic, output);
    controllerData.innerHTML = output;
}
function releaseDown()
{
    output = '{"pressed":0,"key":"down"}';
    document.getElementById('down-button').style.backgroundColor = unpressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}

function pressRight()
{
    output = '{"pressed":1,"key":"right"}';
    document.getElementById('right-button').style.backgroundColor = pressedColor;
    if(connected)
        sendMessage(topic, output);
    controllerData.innerHTML = output;
}
function releaseRight()
{
    output = '{"pressed":0,"key":"right"}';
    document.getElementById('right-button').style.backgroundColor = unpressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}

function pressSpacebar()
{
    output = '{"pressed":1,"key":"space"}';
    document.getElementById('spacebar-button').style.backgroundColor = pressedColor;
    if(connected)
        sendMessage(topic, output);
    controllerData.innerHTML = output;
}
function releaseSpacebar()
{
    output = '{"pressed":0,"key":"space"}';
    document.getElementById('spacebar-button').style.backgroundColor = unpressedColor;
    if(connected)
        sendMessage(topic, output);

    controllerData.innerHTML = output;
}


window.addEventListener('beforeunload', function (e) {
    startDisconnect();
    return null;
});


// Called after form input is processed
function startConnect() {
    // Generate a random client ID
    //set client id to what we need
    clientID = "clientID-" + parseInt(Math.random() * 100) + + new Date().getTime();

    //host = document.getElementById("host").value;
    //port = document.getElementById("port").value;

    // Print output for the user in the messages div
    document.getElementById("messages").innerHTML += '<span class="websocket-message-info">Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
    document.getElementById("messages").innerHTML += '<span class="websocket-message-info">Using the following client value: ' + clientID + '</span><br/>';

    console.log(host);
    console.log(port);
    console.log(user);
    console.log(pass);

    // Initialize new Paho client connection
    client = new Paho.MQTT.Client(host, Number(port), clientID);

    // Set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    //authentication with SSL example:
    client.connect({
        timeout: 3,
        onSuccess: onConnect,
        userName : user,
        password : pass,
        useSSL: true,
    });
}

function sendMessage(topic, message) {

    m = new Paho.MQTT.Message(message);
    m.destinationName = topic;
    client.send(m);
}

// Called when the client connects
function onConnect() {
    // Fetch the MQTT topic from the form
    subscribeTopic = "#"; //document.getElementById("topic").value;

    // Print output for the user in the messages div
    document.getElementById("messages").innerHTML += '<span class="websocket-message-info">Subscribing to: ' + subscribeTopic + '</span><br/>';

    // Subscribe to the requested topic
    client.subscribe(subscribeTopic);

    connected = true;
}

// Called when the client loses its connection
function onConnectionLost(responseObject) {
    document.getElementById("messages").innerHTML += '<span class="websocket-message">ERROR: Connection lost</span><br/>';
    if (responseObject.errorCode !== 0) {
        document.getElementById("messages").innerHTML += '<span class="websocket-message">ERROR: ' + + responseObject.errorMessage + '</span><br/>';

        //auto reloads when incorrect topic is selected (symbols or something, crashed connection)
        //put warning message and check to make sure people dont break the website
        //location.reload();
    }
    else
    {

    }

}

// Called when a message arrives
function onMessageArrived(message) {

    if(message.destinationName == feedbackDisplayTopic)
    {
      var displayData = JSON.parse(message.payloadString);
      if(displayData.sA)
        turnOnA();
      else {
        turnOffA();
      }

      if(displayData.sB)
        turnOnB();
      else {
        turnOffB();
      }

      if(displayData.sC)
        turnOnC();
      else {
        turnOffC();
      }

      if(displayData.sD)
        turnOnD();
      else {
        turnOffD();
      }

      if(displayData.sE)
        turnOnE();
      else {
        turnOffE();
      }

      if(displayData.sF)
        turnOnF();
      else {
        turnOffF();
      }

      if(displayData.sG)
        turnOnG();
      else {
        turnOffG();
      }

      if(displayData.sDP)
        turnOnDP();
      else {
        turnOffDP();
      }
    }

    else if(message.destinationName == feedbackBumpTopic)
    {
      var bumpData = JSON.parse(message.payloadString);
      if(bumpData.b0)
        activateBump0();
      else
        deactivateBump0();

      if(bumpData.b1)
        activateBump1();
      else
        deactivateBump1();

      if(bumpData.b2)
        activateBump2();
      else
        deactivateBump2();

      if(bumpData.b3)
        activateBump3();
      else
        deactivateBump3();

      if(bumpData.b4)
        activateBump4();
      else
        deactivateBump4();

      if(bumpData.b5)
        activateBump4();
      else
        deactivateBump4();
    }

    else if(message.destinationName == feedbackRFIDTopic)
    {
      var rfidData = JSON.parse(message.payloadString);
      if(rfidData.detect)
      {
        activateRFID();
        rfidPowerValue.textContent = rfidData.effect;
        rfidTypeValue.textContent = rfidData.type;
      }
      else
      {
        deactivateRFID();
        rfidPowerValue.textContent = "None";
        rfidTypeValue.textContent = "No tag detected";
      }

    }

    else if(message.destinationName == feedbackIRSensorTopic)
    {
      var irData = JSON.parse(message.payloadString);
      leftIR.textContent = irData.left.toString() + " mm";
      centerIR.textContent = irData.center.toString() + " mm";
      rightIR.textContent = irData.right.toString() + " mm";

    }
    else if(message.destinationName == feedbackMotorTopic)
    {
      motorData = JSON.parse(message.payloadString);
      wheelValue1.textContent = motorData.rpmM1.toString() + " rpm";
      wheelValue2.textContent = motorData.rpmM2.toString() + " rpm";

      if(motorData.dirM1)
        wheelDir1.textContent = "Left";
      else
        wheelDir1.textContent = "Right";

      if(motorData.dirM2)
        wheelDir2.textContent = "Left";
      else
        wheelDir2.textContent = "Right";


      var speed = parseInt(wheelDiameter * Math.PI * ((motorData.rpmM1 + motorData.rpmM2) / 2) / 60);
      speedValue.textContent = speed.toString() + " cm/s";
    }
    else if(message.destinationName == feedbackActionTopic)
    {
      messageData = JSON.parse(message.payloadString);
      document.getElementById("action-messages").innerHTML += '<span class="websocket-message">' + messageData.m + '</span><br/>';
      var tempAction = document.getElementById("action-output-section-raw");
      tempAction.scrollTop = tempAction.scrollHeight;
    }


    console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML += '<span class="websocket-message">Topic: ' + message.destinationName + '  | Message: ' + message.payloadString + '</span><br/>';
    var temp = document.getElementById("monitor-panel-section-raw");
    temp.scrollTop = temp.scrollHeight;
}


// Called when the disconnection button is pressed
function startDisconnect() {
    client.disconnect();
    document.getElementById("messages").innerHTML += '<span class="websocket-message">Disconnected</span><br/>';
}
