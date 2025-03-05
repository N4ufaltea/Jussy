document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper', {
      loop: true, 
      spaceBetween: 30,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true, 
        dynamicBullets: true,
      },
  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
      },

      breakpoints: {
        0: {
            slidesPerView: 1   
        },
        768: {
            slidesPerView: 2   
        },
        1024: {
            slidesPerView: 3   
        },
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var swiperGaleri = new Swiper('.swiperGaleri', {
      loop: true, 
      spaceBetween: 30,
      
      pagination: {
        el: '.swiperGaleri .swiper-pagination',
        clickable: true, 
        dynamicBullets: true,
      },
  
      navigation: {
        nextEl: '.swiperGaleri .swiper-button-next',
        prevEl: '.swiperGaleri .swiper-button-prev',
      },
  
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
      },

      breakpoints: {
        0: {
            slidesPerView: 1   
        },
        768: {
            slidesPerView: 2   
        },
        1024: {
            slidesPerView: 3   
        },
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.querySelector("iframe");
    if ("loading" in HTMLIFrameElement.prototype) {
        iframe.loading = "lazy";
    }
});


// 
document.addEventListener("DOMContentLoaded", function () {
  const Menu = document.querySelector(".menu");
  const sidebar = document.querySelector(".side .swipe");
  const menuColour = document.querySelector(".menu");

  Menu.addEventListener("click", function () {
    console.log("p");
      sidebar.classList.toggle("active");
      menuColour.classList.toggle("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          smoothScroll(targetElement, 0); 
      }
  });
});

function smoothScroll(target, offset = 0) {
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset; 
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 800; 
  let start = null;

  function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// 