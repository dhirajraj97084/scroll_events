window.addEventListener('scroll',function(){
    if(window.scrollY>400){
        document.body.style.background="black";
        document.body.style.color="white";
        document.body.style.animationDuration="60s"
    }
    else{
        document.body.style.background="white";
        document.body.style.color="black";

    }
})


