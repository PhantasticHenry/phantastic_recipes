// document.addEventListener('DOMContent', () => {
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

    toggleDisplay = (element) => {
        const selector = document.querySelector(element)
        selector.style.display === "none" ? selector.style.display = "flex" : selector.style.display = "none";
    }

    clearContainer = (element) => {
        document.querySelector(element).innerHTML = ""
    }

    openCloseNav = () => {
        const mySidenav = document.querySelector("#mySidenav");
        const main = document.querySelector('#main');
        if (mySidenav.style.width === "250px") {
            (mySidenav.style.width = "0") && (main.style.marginLeft = "0")
        } else {
            (mySidenav.style.width = "250px") && (main.style.marginLeft = "250px")
        }
    }

    Reset = (element) => {
        const dropDown = document.querySelector("#ingredientsSelect");
        setTimeout(() => {
            dropDown.selectedIndex = "top";
        },2000)
        
    }

    titleCase = (str) => {
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    };
// })    
