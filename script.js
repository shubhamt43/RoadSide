let mode = document.querySelector(".mode");
currcolor = "light";
mode.addEventListener("click",() => {
    if (currcolor === "light") 
        {
        // alert(jwhdn);
        currcolor = "dark";
        console.log("jhdgfydug");
        alert("this has been made by priya!!!!!")
    
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
    }
    else
     {
        currcolor="light";
        // alert("ftyf");
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
});
