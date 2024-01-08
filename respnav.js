document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuButton = document.getElementById("mobile-menu");
    const navigation = document.querySelector("nav");
  
    mobileMenuButton.addEventListener("click", function() {
      navigation.classList.toggle("hide");
    });
  });
  