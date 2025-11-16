document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    toggler.addEventListener('click', function () {
        this.classList.toggle('collapsed');
    });
});

$(document).ready(function () {
    $('.slick-carousel').slick({
        arrows: true,
        centerPadding: "0px",
        dots: true,
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560, // Screen width at which the settings below will be applied
                settings: {
                    slidesToShow: 1, // Show only one slide
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.slick-carousel3').slick({
        arrows: false,
        centerPadding: "0px",
        dots: false,
        slidesToShow: 1.95,
        infinite: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1
                }
            }
        ]
    });
});



  $().ready(function () {
    $('.slick-carousel4').slick({
      arrows: false,
      centerPadding: "0px",
      dots: false,
      slidesToShow: 4,
      infinite: false,
      autoplay:true,
      responsive: [
        {
            breakpoint: 992, 
            settings: {
                slidesToShow: 3, 
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 560, 
            settings: {
                slidesToShow: 2, 
                slidesToScroll: 1
            }
        }
    ]

    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var options = {
      strings: ["App Developer?", "Graphics Designer?", "Web Developer?", "SEO Expert?","Social Media Expert?" ],
      typeSpeed: 50,
      backSpeed: 30, 
      backDelay: 1000, 
      startDelay: 500,
      loop: true,
      showCursor: true, 
    };

    var typed = new Typed('#typed-output', options);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const animatedContent = document.querySelector('.animated-content');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedContent.classList.add('visible');
            } else {
                animatedContent.classList.remove('visible');
            }
        });
    });

    observer.observe(animatedContent);
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedContent = document.querySelector('.animated-content1');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedContent.classList.add('visible');
            } else {
                animatedContent.classList.remove('visible');
            }
        });
    });

    observer.observe(animatedContent);
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedContent = document.querySelector('.animated-content2');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedContent.classList.add('visible');
            } else {
                animatedContent.classList.remove('visible');
            }
        });
    });

    observer.observe(animatedContent);
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedContent = document.querySelector('.animated-content3');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedContent.classList.add('visible');
            } else {
                animatedContent.classList.remove('visible');
            }
        });
    });

    observer.observe(animatedContent);
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedContent = document.querySelector('.animated-content4');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedContent.classList.add('visible');
            } else {
                animatedContent.classList.remove('visible');
            }
        });
    });

    observer.observe(animatedContent);
});
document.addEventListener('DOMContentLoaded', () => {
    const animatedContent = document.querySelector('.animated-content6');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedContent.classList.add('visible');
            } else {
                animatedContent.classList.remove('visible');
            }
        });
    });

    observer.observe(animatedContent);
});
document.addEventListener('DOMContentLoaded', () => {
    const animatedContent = document.querySelector('.animated-content7');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedContent.classList.add('visible');
            } else {
                animatedContent.classList.remove('visible');
            }
        });
    });

    observer.observe(animatedContent);
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedContent = document.querySelector('.animated-content5');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedContent.classList.add('visible');
            } else {
                animatedContent.classList.remove('visible');
            }
        });
    });

    observer.observe(animatedContent);
});


document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.image-section img');
    let lastScrollTop = 0;
    let scrollDirection = 'down';

    window.addEventListener('scroll', () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // downscroll code
            img.classList.add('move-down');
            img.classList.remove('move-up');
            scrollDirection = 'down';
        } else {
            // upscroll code
            img.classList.add('move-up');
            img.classList.remove('move-down');
            scrollDirection = 'up';
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
});
