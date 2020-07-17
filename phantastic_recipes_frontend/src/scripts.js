function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function dropDownMenu(){
    $(".nav .dropdown").focusin( function (){
        $(this).find(".dropdown-menu").each(function(){
            $(this).css({"display":'block','opacity':'1','top':'60px'}); 
        });
    });
    
    $(".nav .dropdown").focusout( function (){
    $(this).find(".dropdown-menu").each(function(){
        $(this).css({"display":'block','opacity':'0','top':'0px'}); 
    });
});
    
    
  //   $(".navbar-brand").click( function (){ 
  //    alert("js working"); 
  //   });
    
};