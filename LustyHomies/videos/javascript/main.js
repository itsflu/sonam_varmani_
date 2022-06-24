let bar2=document.querySelector('.bar2');
let bar3=document.querySelector('.bar3');
let nav_Size = ()=>{
    document.querySelector('.mobileBars').style.display = "inline-block";
    document.querySelector('.mobileBars').style.right = "0px";
    document.querySelector('.mobileBars').style.animationName="slidee"
    
    if(bar2.style.width == ''){
        bar2.style.width='40px';
        bar3.style.width='40px';
    }
    else if(bar2.style.width == "20px"){
        bar2.style.width='40px';
        bar3.style.width='40px'
    }
    else{
        bar2.style.width='20px';
        bar3.style.width="35px";
        document.querySelector('.mobileBars').style.animationName="slideeEnd"
        setTimeout(()=>{
            document.querySelector('.mobileBars').style.display = "none";
        },1000);
    }
}