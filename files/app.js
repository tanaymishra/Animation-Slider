let name=["files/i1.jpg","files/i2.jpg","files/i3.jpg","files/i4.jpg","files/i5.jpg"]
let images=[]
let firstImage=false
for(let i=0;i<=name.length-1;i++){
    img=new Image()
    // console.log(i)
    img.src=name[i]
    images.push(img)
}
var functionCall;
//Animation
const animate1=(e)=>{
    let tl= gsap.timeline()
    tl.to(e[0],{
        width:"0%",
        ease:"power1.out",
        duration:1,
        onComplete:()=>{e[0].remove(); console.log(e[1])}
    })
    .to(e[1],{width:"0%"},"-=1")
    .to(e[1],{width:"100%"},"-=.5")
    return tl
}
const animate2=(e)=>{
    let tl=new gsap.timeline()
    tl.to(e.querySelectorAll("*")[0],{
        width:"100%",
        ease:"power1.out",
        duration:1,
    })
    .to(e.querySelectorAll("*")[1],{
        width:"0%",
        ease:"power1.out",
        duration:1,
        onComplete:()=>{e.querySelectorAll("*")[1].remove()}
    },"-=1s")
    return tl
}


let count=0;
let pc=images.length-2;
const next=document.querySelector(".nxt")
const prev=document.querySelector(".prev")
const sl=document.querySelector(".img-slider")
next.addEventListener("click",()=>{
    try{
    if(functionCall.isActive()){
        return
    }}
    catch{
    }
    if(count>=3){
        count=0
    }
    console.log(count)
    images[count+1].style.width="100%"
    sl.appendChild(images[count+1])
    count++;
    let imag=document.querySelectorAll(".img-slider img");
    functionCall=animate1(imag)
})
prev.addEventListener("click",()=>{
    try{
        if (functionCall.isActive()){
            return
        }
    }
    catch{}
    if(pc===1){
        pc=images.length-1;
    }
    let imge=images[pc]
    imge.style.width="0%";
    sl.insertBefore(imge,sl.childNodes[0]);
    pc--;
    functionCall=animate2(sl)
})
next.click();