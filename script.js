//getting elelment
const nav=document.querySelector("nav");
     toggleBtn=nav.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click", ()=>{
    nav.classList.toggle("open");
  });
  
  //js code to make draggable nav
  function onDrag({movementY}){
    const navStyle =window.getComputedStyle(nav);
          navTop=parseInt(navStyle.top);
          navHeight=parseInt(navStyle.height);
          windHeight=window.innerHeight;
    nav.style.top=navTop>0?`${navTop+movementY}px`:"1px";
    if(navStyle>windHeight-navHeight){
        nav.style.top= `${windHeight - navHeight}`;
    }
}

  nav.addEventListener("mousedown", () =>{
    nav.addEventListener("mousemove", onDrag)
  });
  nav.addEventListener("mouseleave", () =>{
    nav.removeEventListener("mousemove", onDrag)
  });

  nav.addEventListener("mousedown", () =>{
    nav.addEventListener("mousemove", onDrag)
  });
  nav.addEventListener("mouseleave", () =>{
    nav.removeEventListener("mousemove", onDrag)
  });
