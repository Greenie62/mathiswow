let angle=0
let h;
let w=24
let ma;
let maxD
let speed=.15


function setup(){
    createCanvas(400,400,WEBGL)
    ma=atan(1/sqrt(2))
    maxD=dist(200,200,0,0)

}


function draw(){
    background(100)
    ortho(-400,400,-300,300,0,1000)
 
  
    rotateX(-QUARTER_PI)
    rotateY(20)
    //cause in WEBGL 0,0 is interpreted as the center
    //so to prepare/simulate that,we offset/translate
    // translate(width/2,height/2)
      rectMode(CENTER)

    // rotateX(angle * .25)
    let offset=0
  
for(let z=0;z<height;z+=w){
for(let x=0;x<width;x+=w){
    push()
    let d=dist(x,z,width/2,height/2);
    offset=map(d,0,maxD,-PI,PI)
    let a=angle + offset
    h=floor(map(sin(a),-1,1,100,300))
  
   fill('green')
    translate(x-width/2,0,z-height/2)
   // normalMaterial()
    box(w-2,h,w-2)
  
    pop()
}
offset+=0.1
}
    angle-=speed
}


document.querySelector(".speedup").onclick=()=>{
    speed+=0.01
}

document.querySelector(".slowdown").onclick=()=>{
    speed-=0.01
}
