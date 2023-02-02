let count = 1;
document.getElementById("radio1").checked = true;
document.getElementById("radio1artificial").checked = true;
document.getElementById("radio1preservado").checked = true;
document.getElementById("radio1musgo").checked = true;



setInterval( function(){
    nextImage()
}, 4000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true

    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count+"preservado").checked = true

    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count+"artificial").checked = true

    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count+"musgo").checked = true
}


// SWIPER CARD'S

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });