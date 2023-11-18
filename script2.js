document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.querySelector(".login-link");
    const loginPopup = document.querySelector("#login-popup");
    const closePopup = document.querySelector(".popup-close");
    function password_show_hide() {
        var x = document.getElementById("password");
        var show_eye = document.getElementById("show_eye");
        var hide_eye = document.getElementById("hide_eye");
        hide_eye.classList.remove("d-none");
        if (x.type === "password") {
          x.type = "text";
          show_eye.style.display = "none";
          hide_eye.style.display = "block";
        } else {
          x.type = "password";
          show_eye.style.display = "block";
          hide_eye.style.display = "none";
        }
      }

    loginLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginPopup.style.display = "block";
      });
    
      closePopup.addEventListener("click", function() {
        loginPopup.style.display = "none";
      });
    

    // Get references to the buttons
    const facebookButton = document.querySelector(".social-signup.facebook");
    const googleButton = document.querySelector(".social-signup.google");
    const githubButton = document.querySelector(".social-signup.Github");
    const linkedinButton = document.querySelector(".social-signup.linkedin");

    // Define the URLs for each social network
    const facebookURL = "https://www.facebook.com/signup";
    const googleURL = "https://accounts.google.com/signup";
    const githubURL = "https://github.com/join";
    const linkedinURL = "https://www.linkedin.com/signup";

    // Add click event listeners to open the URLs
    facebookButton.addEventListener("click", function () {
        window.open(facebookURL, "_blank");
    });

    googleButton.addEventListener("click", function () {
        window.open(googleURL, "_blank");
    });

    githubButton.addEventListener("click", function () {
        window.open(githubURL, "_blank");
    });

    linkedinButton.addEventListener("click", function () {
        window.open(linkedinURL, "_blank");
    });
});
