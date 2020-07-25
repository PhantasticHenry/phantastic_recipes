//Get the button:
const mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
// Scrolls to top of page on click
topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

toggleHidden = (element) => {
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    } else {
        element.className += " hidden";
    }
}

toggleDisplay = (id) => {
    document.querySelector(id).style.display === "none" ? document.querySelector(id).style.display = "flex" : document.querySelector(id).style.display = "none";
}

// Opens form to add recipe
openRecipeForm = () => {
    document.querySelector("#recipeFormPopup").style.display = "block";
}
// Close/cancel form to add recipe
closeRecipeForm = () => {
    document.querySelector("#recipeFormPopup").style.display = "none";
}
// Open sidenav bar
openNav = () => {
    document.querySelector("#mySidenav").style.width = "250px";
    document.querySelector("#main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

// Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white
closeNav = () => {
    document.querySelector("#mySidenav").style.width = "0";
    document.querySelector("#main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

Reset = () => {
    const dropDown = document.querySelector("#ingredients-select");
    setTimeout(() => {
        dropDown.selectedIndex = "top";
    },1000)
    
}
// Open list of ingredients that belong to recipe
// openRecipeIngredients = (recipeId) => { 
//     document.querySelector(`#ingredientsPopup-${recipeId}`).style.display = "block";
// }
// Close list of ingredients that bleong to recipe
// closeRecipeIngredients = (recipeId) => {
//     document.querySelector(`#ingredientsPopup-${recipeId}`).style.display = "none";
// }


titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

// dropDownMenu = () => {
//     (".dropdown").focusin( function (){
//         (this).find(".dropdown-menu").each(function(){
//             (this).css({"display":'block','opacity':'1','top':'60px'}); 
//         });
//     });
    
//     (".dropdown").focusout( function (){
//     (this).find(".dropdown-menu").each(function(){
//         (this).css({"display":'block','opacity':'0','top':'0px'}); 
//     });
// });
// };


    
    // $(".navbar-brand").click( function (){ 
    //  alert("js working"); 
    // });
    