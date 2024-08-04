window.onscroll = function () { // function runs whenever user scrolls website to check when to show the button
    const button = document.getElementById("goToTop"); // accessing the button with id
    if (document.documentElement.scrollTop > 650) { // if page has been scrolled more than 20px then button will show on the screen
        button.style.display = "block";
    } else { // else it wont show the button
        button.style.display = "none";
    }
};

function scrollToTop() { // this function will be called wheen button is clicked
    document.documentElement.scrollTop = 0; // setting the position to 0
}
