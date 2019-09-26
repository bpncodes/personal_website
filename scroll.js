$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
        console.log('hi');
      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } // End if
  })
});
window.addEventListener('scroll', function() {
    if (window.scrollY > 640) {
        console.log('hi');
      document.querySelector('#nav-wrapper').style.background="grey";
      document.querySelector('#nav-wrapper').style.opacity = 0.5;
    } else {
        document.querySelector('#nav-wrapper').style.background = "";
        document.querySelector('#nav-wrapper').style.opacity = 1;
    }
  });
  
  