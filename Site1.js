function toggleDarkMode() {
  var DMID = document.getElementById("SwitchDM");
  var body = document.body;
  var SecDM = document.getElementsByClassName("section");
  var CardDM = document.getElementsByClassName("card");

  body.classList.toggle("body-dm");

  for (var i = 0; i < SecDM.length; i++) {
    SecDM[i].classList.toggle("sectionDM");
  }
  for (var i = 0; i < CardDM.length; i++) {
    CardDM[i].classList.toggle("cardDM");
  }

  if (body.classList.contains("body-dm")) {
    if (DMID) DMID.src = "Light.png";  
  } else {
    if (DMID) DMID.src = "Dark.png";   
  }
}

function toggleDarkModeGS() {
  var bodyGS = document.getElementById("bodyGS");
  var sectionGS = document.getElementById("sectionGS");
  var DMIDGS = document.getElementById("SwitchDMGS");
  var downloadBox = document.querySelector('.download-box');
  var containers = document.querySelectorAll('.containerB');
  if (!bodyGS || !DMIDGS) return;

  bodyGS.classList.toggle("BodyGS-dm");
  sectionGS.classList.toggle("sectionGS-dm");
  if (downloadBox) downloadBox.classList.toggle("download-box-dm");

  containers.forEach(function(container) {
    container.classList.toggle("containerB-dm");
  });

  if (bodyGS.classList.contains("BodyGS-dm")) {
    DMIDGS.src = "Light.png";  
  } else {
    DMIDGS.src = "Dark.png";   
  }
}