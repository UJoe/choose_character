window.addEventListener("load", _load);

function _load() {
  const iname = document.getElementById("i-name");
  const irace = document.getElementById("i-race");
  const igender = document.getElementById("i-gender");
  const iclass = document.getElementById("i-class");
  const igen = document.getElementById("i-gen");
  const oname = document.getElementById("o-name");
  const orace = document.getElementById("o-race");
  const ogender = document.getElementById("o-gender");
  const oclass = document.getElementById("o-class");
  const ogen = document.getElementById("o-gen");


  iname.addEventListener("input", changeName);
  irace.addEventListener("input", changeRace);
  igender.addEventListener("input", changeGender);
  iclass.addEventListener("input", changeClass);
  igen.addEventListener("click", generateChar);
  
  function changeName(){
    oname.innerHTML = iname.value;
  }

  function changeRace(){
    if (irace.value ==="elf") {
      orace.src = "./img/elf_x.png";
    } else if (irace.value ==="dwarf"){
      orace.src = "./img/dwarf_x.png";
    } else {
      orace.src = "./img/orc_x.png";
    }
  }

  function changeGender(){
    if (igender.value ==="male") {
      ogender.src = "./img/male_x.png";
    } else {
      ogender.src = "./img/female_x.png";
    }
  }

  function changeClass(){
    if (iclass.value ==="fighter") {
      oclass.src = "./img/fighter_x.png";
    } else {
      oclass.src = "./img/wizard_x.png";
    }
  }

  function generateChar(){
    ogen.src = "./img/"+irace.value+igender.value+iclass.value+".png";
  }
}