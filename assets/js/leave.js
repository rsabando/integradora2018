var falling = true;

TweenLite.set("#leaves",{perspective:600})
//TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 7;
var container = document.getElementById("leaves"),	w = window.innerWidth , h = window.innerHeight;

 for (i=0; i<total; i++){
   var Div = document.createElement('div');
   var Div2 = document.createElement('div');
   var Div3 = document.createElement('div');
   var Div4 = document.createElement('div');
   var Div5 = document.createElement('div');
   var Div6 = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   TweenLite.set(Div2,{attr:{class:'dot2'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   TweenLite.set(Div3,{attr:{class:'dot3'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   TweenLite.set(Div4,{attr:{class:'dot4'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   TweenLite.set(Div5,{attr:{class:'dot5'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   TweenLite.set(Div6,{attr:{class:'dot6'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   container.appendChild(Div);
   container.appendChild(Div2);
   container.appendChild(Div3);
   container.appendChild(Div4);
   container.appendChild(Div5);
   container.appendChild(Div6);
   animm(Div);
   animm(Div2);
   animm(Div3);
   animm(Div4);
   animm(Div5);
   animm(Div6);
 }

 function animm(elm){
   TweenMax.to(elm,R(6,15),{y:h+480,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=80',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   //TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};
