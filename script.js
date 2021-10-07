/*

US Map Game Script for https://online.seterra.com/en/vgp/3003
paste the whole script into the console to win :)

*/

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}


let currState;

for(var i = 0; i < 50; i++) {
  currState = document.querySelector("#currQuestion").innerHTML.substring(12).toLowerCase().replace(" ", "");
  eventFire(document.getElementById(`AREA_${currState.toUpperCase()}`), "click");
}
