const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const menuItems = document.querySelectorAll('.navbar__menu a');


menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});


menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  });
});

function scrollToAbout() {
  const contactSection = document.getElementById("community");
  const navbarHeight = document.querySelector("navbar").offsetHeight;
  const offsetTop = contactSection.offsetTop - navbarHeight;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
}

function scrollToContact() {
  const contactSection = document.getElementById("contact");
  const navbarHeight = document.querySelector("navbar").offsetHeight;
  const offsetTop = contactSection.offsetTop - navbarHeight;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const unwrapParagraph = () => {
    const container = document.querySelector(".about-me__container");
    const paragraph = container.querySelector("p");

    if (paragraph) {
      while (paragraph.firstChild) {
        container.insertBefore(paragraph.firstChild, paragraph);
      }
      container.removeChild(paragraph);
    }
  };


  const checkWindowSize = () => {
    if (window.innerWidth <= 768) {
      unwrapParagraph();
    }
  };


  checkWindowSize();


  window.addEventListener("resize", checkWindowSize);

  window.addEventListener('load', function () {
    const backTopButton = document.getElementById("backtop");

    function checkScrollPosition() {
      if (window.scrollY > 0) {
        backTopButton.style.display = "flex";
      } else {
        backTopButton.style.display = "none";
      }
    }
    setTimeout(function () {
      checkScrollPosition();
      window.addEventListener('scroll', checkScrollPosition);
    }, 100);

    backTopButton.onclick = function (e) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      e.preventDefault();
    };
  });

  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    for (i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }

    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));
});

document.getElementById("seeMoreButton").addEventListener("click", function () {
  var profits1Section = document.getElementById("cprofits1");

  // Växla mellan att visa och dölja bilderna
  if (profits1Section.classList.contains("visible")) {
    profits1Section.classList.remove("visible"); // Ta bort 'visible' för att dölja sektionen
    this.textContent = "See More"; // Återställ knapptexten
  } else {
    profits1Section.classList.add("visible"); // Lägg till 'visible' för att visa sektionen
    this.textContent = "See Less"; // Ändra knapptexten till 'See Less'
  }
});