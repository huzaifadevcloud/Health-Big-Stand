// const header = document.querySelector("header");
// const section = document.querySelector(".section-health");
// let isSticky = false;
// let timeoutId;
// const wrapper = document.getElementById("header-wrapper");

// window.addEventListener("load", () => {
//   wrapper.style.height = header.offsetHeight + "px";
// });
// const observer = new IntersectionObserver(
//   ([entry]) => {
//     clearTimeout(timeoutId);

//     if (!entry.isIntersecting) {
//       header.classList.add("sticky-top-custom"); // Add position first

//       timeoutId = setTimeout(() => {
//         header.classList.add("slide-in"); // Trigger animation after a short delay
//       }, 500); // 50–150ms works well
//     } else {
//       // Start slide-out
//       header.classList.remove("slide-in");

//       // After animation, remove sticky
//       setTimeout(() => {
//         header.classList.remove("sticky-top-custom");
//       }, 300); // must match the CSS transition duration
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//   }
// );

// observer.observe(section);

const header = document.getElementById("header");
const hero = document.querySelector(".section-health");

window.addEventListener("load", () => {
  hero.style.paddingTop = header.offsetHeight + "px";
});
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      header.classList.add("sticky");
      hero.style.paddingTop = header.offsetHeight + "px";
    }

    if (ent.isIntersecting === true) {
      header.classList.remove("sticky");
      // hero.style.paddingTop = "50px";
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obs.observe(hero);
// const observer = new IntersectionObserver(
//   ([entry]) => {
//     if (!entry.isIntersecting) {
//       // Add sticky + animate in
//       // header.style.transform = "translateY(-100%)";
//       header.classList.add("sticky");
//       // Force reflow to restart transition
//       void header.offsetHeight;
//       // setTimeout(() => {
//       //   header.style.transform = "";
//       // }, 300); // Match CSS transition duration
//     } else {
//       // Animate out, then remove sticky
//       // header.style.transform = "translateY(-100%)";
//       setTimeout(() => {
//         header.classList.remove("sticky");
//         // header.style.transform = ""; // reset
//       }, 300); // Match CSS transition duration
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "-1px 0px 0px 0px",
//   }
// );

// observer.observe(hero);

document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  toggler.addEventListener("click", () => {
    toggler.classList.toggle("opened");
  });

  const headerSwiper = new Swiper(".header-swiper", {
    slidesPerView: 3, // Important: 'auto' allows flexible number of slides
    spaceBetween: 0,
    loop: true, // Enable seamless infinite looping
    speed: 5000, // Speed of transition
    autoplay: {
      delay: 0, // No pause between transitions
      pauseOnMouseEnter: false, // Don't pause on mouse enter
      disableOnInteraction: false, // Keep autoplay even if user touches
    },
    grabCursor: true,
    allowTouchMove: true,
    // runCallbacksOnInit: true, // 🔸 Important to fire slideChange/init
    on: {
      init: function (swiper) {
        scaleMiddleSlide(swiper);
      },
      slideChangeTransitionEnd: function (swiper) {
        scaleMiddleSlide(swiper);
      },
    },
  });

  function scaleMiddleSlide(swiper) {
    // Remove from all
    swiper.slides.forEach((slide) => slide.classList.remove("is-scaled"));

    // Get all visible slides
    const visibleSlides = swiper.slides.filter((slide) =>
      slide.classList.contains("swiper-slide-visible")
    );

    // Scale middle one only if exactly 3 are visible
    if (visibleSlides.length === 3) {
      visibleSlides[1].classList.add("is-scaled");
    }
  }

  // new Swiper(".header-swiper", {
  //   slidesPerView: 3,
  //   // centeredSlides: true, // Make middle slide centered
  //   loop: true,
  //   spaceBetween: 0,
  //   speed: 3000,
  //   autoplay: {
  //     delay: 0, // Continuous scroll
  //     pauseOnMouseEnter: false, // Don't pause on mouse enter
  //     disableOnInteraction: false,
  //   },
  //   grabCursor: true,
  //   allowTouchMove: true,
  // });

  new Swiper(".featured-swiper", {
    slidesPerView: 4, // Important: 'auto' allows flexible number of slides
    spaceBetween: 0,
    loop: true, // Enable seamless infinite looping
    speed: 3000, // Speed of transition
    autoplay: {
      delay: 0, // No pause between transitions
      pauseOnMouseEnter: false, // Don't pause on mouse enter
      disableOnInteraction: false, // Keep autoplay even if user touches
    },
    grabCursor: true,
    allowTouchMove: true,
    breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      // // when window width is >= 480px
      // 480: {
      //   slidesPerView: 3,
      //   spaceBetween: 30
      // },
      // // when window width is >= 640px
      // 640: {
      //   slidesPerView: 4,
      //   spaceBetween: 40
      // }
      500: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });
  new Swiper(".pricing-swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".right-btn",
      prevEl: ".left-btn",
    },
    grabCursor: true,
    allowTouchMove: true,
    breakpoints: {
      0: {
        // Mobile
        slidesPerView: 1,
      },
      768: {
        // Tablet
        slidesPerView: 2,
      },
      992: {
        // Laptop/Desktop
        slidesPerView: 3,
      },
    },
  });
  new Swiper(".doctors-swiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".right-btn",
      prevEl: ".left-btn",
    },
    grabCursor: true,
    allowTouchMove: true,

    breakpoints: {
      0: {
        // Mobile
        slidesPerView: 1,
      },
      768: {
        // Tablet
        slidesPerView: 2,
      },
      992: {
        // Laptop/Desktop
        slidesPerView: 2,
      },
    },
  });
  new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    grabCursor: true,
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination", // important: you need this element in HTML
      clickable: true,
    },
  });

  const readMoreBtn = document.getElementById("readMoreBlog");

  readMoreBtn.addEventListener("click", function () {
    // Fade out the visible element
    const mobileReadMore = document.querySelector(".visibleOnTablet");
    if (mobileReadMore) {
      mobileReadMore.classList.add("fade-out");

      // const target = document.querySelector("#morehelp-cta");
      if (mobileReadMore) {
        const offsetTop = mobileReadMore.offsetTop - header.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }

      setTimeout(() => {
        mobileReadMore.style.display = "none";
      }, 500); // matches transition time
    }

    // Fade in all elements with 'hideOnMobile'
    const hiddenItems = document.querySelectorAll(".hideOnTablet");
    hiddenItems.forEach(function (el) {
      el.style.display = "block"; // ensure it's visible before animating
      el.classList.add("fade-in");
    });
  });

  const showLessBlogBtn = document.getElementById("showLessBlog");
  const blogSection = document.getElementById("morehelp-cta");

  showLessBlogBtn.addEventListener("click", () => {
    // 1. Fade IN the mobileReadMore
    const mobileReadMore = document.querySelector(".visibleOnTablet");
    if (mobileReadMore) {
      // Make it block so fade-in can work
      mobileReadMore.style.display = "block";
      mobileReadMore.classList.remove("fade-out");
      mobileReadMore.classList.add("fade-in");

      // Scroll to it
      const offsetTop = blogSection.offsetTop - header.offsetHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    // 2. Fade-OUT then hide the hideOnTablet items
    const hiddenItems = document.querySelectorAll(".hideOnTablet");
    hiddenItems.forEach((el) => {
      // trigger fade-out
      el.classList.remove("fade-in");
      el.classList.add("fade-out");

      // after transition, hide
      setTimeout(() => {
        el.style.display = "none";
      }, 500); // match your CSS transition-duration
    });
  });
  // const flipElements = document.querySelectorAll(".flip");

  // flipElements.forEach(function (flip) {
  //   const card = flip.querySelector(".card");
  //   const learnMoreBtn = flip.querySelector(".learn-more-btn");

  //   // Desktop hover (lg and up)
  //   if (window.innerWidth >= 992) {
  //     flip.addEventListener("mouseenter", function () {
  //       card.classList.add("flipped");
  //     });

  //     flip.addEventListener("mouseleave", function () {
  //       card.classList.remove("flipped");
  //     });
  //   } else {
  //     // Tablet & Mobile
  //     if (learnMoreBtn) {
  //       learnMoreBtn.addEventListener("click", function () {
  //         this.style.opacity = "0"; // hide button
  //         setTimeout(() => {
  //           card.classList.add("flipped");
  //         }, 200);
  //       });

  //       // Click outside to unflip
  //       document.addEventListener("click", function (e) {
  //         // Check if the clicked target is outside the current card
  //         if (!flip.contains(e.target)) {
  //           if (card.classList.contains("flipped")) {
  //             card.classList.remove("flipped");
  //             // Restore the Learn More button
  //             learnMoreBtn.style.opacity = "1";
  //           }
  //         }
  //       });
  //     }
  //   }
  // });
  const flips = document.querySelectorAll(".flip");

  // Set up mobile observer once
  let io;
  if (window.innerWidth < 768) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          const card = target.querySelector(".card");
          card.classList.toggle("flipped", isIntersecting);
        });
      },
      { threshold: 0.6 }
    );

    flips.forEach((flip) => io.observe(flip));
  }

  flips.forEach((flip) => {
    const card = flip.querySelector(".card");
    const learnMoreBtn = flip.querySelector(".learn-more-btn");

    if (window.innerWidth >= 992) {
      // Desktop: hover to flip
      flip.addEventListener("mouseenter", () => card.classList.add("flipped"));
      flip.addEventListener("mouseleave", () =>
        card.classList.remove("flipped")
      );
    } else if (window.innerWidth >= 576) {
      // Tablet: click to flip/unflip
      if (!learnMoreBtn) return;

      learnMoreBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent immediate document click
        learnMoreBtn.style.opacity = "0"; // hide the button
        setTimeout(() => card.classList.add("flipped"), 200);
      });

      document.addEventListener("click", (e) => {
        if (!flip.contains(e.target) && card.classList.contains("flipped")) {
          card.classList.remove("flipped");
          learnMoreBtn.style.opacity = "1"; // restore button
        }
      });
    }
    // else (<576) — already handled by IntersectionObserver; no click handlers
  });

  const goTopButton = document.getElementById("up-arrow");

  // Show button when user scrolls down 300px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      goTopButton.classList.add("show");
    } else {
      goTopButton.classList.remove("show");
    }
  });

  // Scroll to top smoothly when clicked
  goTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const header = document.getElementById("header");

  // 1. Target all nav links, dropdown toggles, and also offcanvas links
  const navLinks = document.querySelectorAll(
    '.navbar-nav a[href^="#"], .offcanvas-body a[href^="#"]'
  );
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const offcanvasElement = document.getElementById("offcanvasNavbar");
  const offcanvasInstance =
    bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

  // Collapse navbar menu (for standard `.navbar-collapse`)
  // const collapseEl = document.getElementById("navbarSupportedContent");
  // const collapseInstance =
  //   collapseEl && bootstrap.Collapse.getOrCreateInstance(collapseEl);

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // 2. Remove 'active' from all links and dropdown toggles
      navLinks.forEach((l) => l.classList.remove("active"));
      dropdownToggles.forEach((t) => t.classList.remove("active"));

      // 3. Add 'active' to the clicked link
      this.classList.add("active");

      // 4. If inside dropdown, activate parent toggle too
      const dropdown = this.closest(".dropdown-menu");
      if (dropdown) {
        const toggle = dropdown.previousElementSibling;
        if (toggle && toggle.classList.contains("dropdown-toggle")) {
          toggle.classList.add("active");
        }
      }

      // 5. Smooth scroll to the section
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - header.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }

      // 6. Close the offcanvas if open (for mobile)
      if (offcanvasElement.classList.contains("show")) {
        offcanvasInstance.hide();
      }

      // 6. Close collapsed navbar if open (for .navbar-collapse)
      // if (collapseEl && collapseEl.classList.contains("show")) {
      //   collapseInstance.hide();
      // }
    });
  });
  // const header = document.getElementById("header");

  // // Select ALL relevant menu links inside navbar (including dropdown items and btn)
  // const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
  // const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // // Click behavior: Manual active class toggle only
  // navLinks.forEach((link) => {
  //   link.addEventListener("click", function (e) {
  //     e.preventDefault();

  //     // Remove active class from all nav-links, dropdown-toggles, and buttons
  //     navLinks.forEach((l) => l.classList.remove("active"));
  //     dropdownToggles.forEach((t) => t.classList.remove("active"));

  //     // Add active class to clicked link
  //     this.classList.add("active");

  //     // Special case: If clicked link is inside a dropdown, mark its toggle as active too
  //     const dropdown = this.closest(".dropdown-menu");
  //     if (dropdown) {
  //       const toggle = dropdown.previousElementSibling;
  //       if (toggle && toggle.classList.contains("dropdown-toggle")) {
  //         toggle.classList.add("active");
  //       }
  //     }

  //     // Scroll to the section smoothly with header offset
  //     const target = document.querySelector(this.getAttribute("href"));
  //     if (target) {
  //       const offsetTop = target.offsetTop - header.offsetHeight;
  //       window.scrollTo({
  //         top: offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //   });
  // });

  document.querySelectorAll(".custom-select").forEach((select) => {
    const selected = select.querySelector(".selected");
    const options = select.querySelector(".options");
    const optionItems = select.querySelectorAll(".option");

    selected.addEventListener("click", (e) => {
      document.querySelectorAll(".options").forEach((opt) => {
        if (opt !== options) opt.style.display = "none";
      });
      options.style.display =
        options.style.display === "block" ? "none" : "block";
      e.stopPropagation();
    });

    optionItems.forEach((option) => {
      option.addEventListener("click", (e) => {
        selected.textContent = option.textContent;
        options.style.display = "none";
        e.stopPropagation();
      });
    });
  });

  document.addEventListener("click", () => {
    document
      .querySelectorAll(".options")
      .forEach((opt) => (opt.style.display = "none"));
  });
});
