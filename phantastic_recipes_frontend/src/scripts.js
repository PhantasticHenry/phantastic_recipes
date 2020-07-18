//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function openRecipeForm() {
    document.getElementById("addRecipeForm").style.display = "block";
}

function closeRecipeForm() {
    document.getElementById("addRecipeForm").style.display = "none";
}
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
    $(".dropdown").focusin( function (){
        $(this).find(".dropdown-menu").each(function(){
            $(this).css({"display":'block','opacity':'1','top':'60px'}); 
        });
    });
    
    $(".dropdown").focusout( function (){
    $(this).find(".dropdown-menu").each(function(){
        $(this).css({"display":'block','opacity':'0','top':'0px'}); 
    });
});

    
    // $(".navbar-brand").click( function (){ 
    //  alert("js working"); 
    // });
    
};