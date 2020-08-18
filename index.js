function calculateWinner(chadVal, machineVal) {
    var retVal;
    if (machineVal == chadVal) {
        retVal = 0;
        return retVal;
    }
    switch(chadVal) {
        case "Rock":
            (machineVal == "Paper") ? retVal = -1 : retVal = 1;
            break;
        case "Scissors":
            (machineVal == "Rock") ? retVal = -1 : retVal = 1;
            break;
        case "Paper":
            (machineVal == "Scissors") ? retVal = -1 : retVal = 1;
            break;
        default:
            alert("DEFAULT OPTION 404 DANGER SOS");
            break;
    }

    return retVal;
}

function saveAndUpdateResults(val) {
    var chadPoints = 0;
    var machinePoints = 0;

    if(localStorage.getItem('chad') == null) {
        localStorage.setItem('chad', chadPoints);
        localStorage.setItem('machine', machinePoints);
    }
    
    if(val == -1) {
        machinePoints = 1;
    } else if(val == 1) {
        chadPoints = 1;
    }

    localStorage.setItem('chad', parseInt(localStorage.getItem('chad')) + chadPoints);
    localStorage.setItem('machine', parseInt(localStorage.getItem('machine')) + machinePoints);

    document.getElementById("pMarcadorL").innerHTML = localStorage.getItem('chad');
    document.getElementById("pMarcadorR").innerHTML = localStorage.getItem('machine');
}

function generateRandom() {
    var options = ["Rock", "Scissors", "Paper"];
    return options[Math.floor(Math.random() * 3) + 0]
}

function calljs(settings)
{
    if (window.performance) {
        console.info("window.performance works fine on this browser");
      }
      console.info(performance.navigation.type);
      if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        localStorage.clear();
      } else {
        console.info( "This page is not reloaded");
      }
    
    switch(settings)
    {
        case "1":
            var ChadVal=0;
            var MachineVal=0;
            window.onload = function() {
                saveAndUpdateResults(0);
                document.getElementById("RForm").onclick = function() 
                {
                    ChadVal = document.getElementById("RockInput").value;
                    MachineVal = generateRandom();
                    var C = calculateWinner(ChadVal, MachineVal);
                    saveAndUpdateResults(C);
                };
                document.getElementById("PForm").onclick = function() 
                {
                    ChadVal = document.getElementById("PaperInput").value;
                    MachineVal = generateRandom();
                    var C = calculateWinner(ChadVal, MachineVal);
                    saveAndUpdateResults(C);
                };
                document.getElementById("SForm").onclick = function() 
                {
                    ChadVal = document.getElementById("ScissorsInput").value;
                    MachineVal = generateRandom();
                    var C = calculateWinner(ChadVal, MachineVal);
                    saveAndUpdateResults(C);
                };
            };
            break;
        
        case "2":
            break;
        
        default:
            break;
    }
}
