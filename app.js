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
  var profitsHeading = document.querySelector(".profits__main-heading");


  if (profits1Section.classList.contains("visible")) {
    profits1Section.classList.remove("visible");
    this.textContent = "See More";


    profitsHeading.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    profits1Section.classList.add("visible");
    this.textContent = "See Less";
  }
});

(function () {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...arguments) => {
      if (!window.chatbase.q) {
        window.chatbase.q = [];
      }
      window.chatbase.q.push(arguments);
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") {
          return target.q;
        }
        return (...args) => target(prop, ...args);
      }
    });
  }

  const onLoad = function () {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "jb-Al8J-Q9qaXWvoEkkMF";
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);
  };

  if (document.readyState === "complete") {
    onLoad();
  } else {
    window.addEventListener("load", onLoad);
  }
})();

// Funktion för att skapa en SHA-256 hash i webbläsaren
async function createUserHash(userId) {
  const encoder = new TextEncoder();
  const data = encoder.encode(userId);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Exempel på hur man använder createUserHash
const currentUserId = '1234567890';  // Ersätt med verklig användar-ID
createUserHash(currentUserId).then(hash => {
  console.log("User hash: ", hash);
  // Du kan nu använda hashen för att skicka den till Chatbase eller annan funktionalitet
});

// Funktionen för att visa/dölja chatboten
function toggleChat() {
  const chatIframe = document.getElementById("chatIframe");
  const chatBubble = document.getElementById("chatBubble");

  // Om chatten är dold, visa den
  if (chatIframe.style.display === "none" || chatIframe.style.display === "") {
    chatIframe.style.display = "block";
    chatBubble.style.display = "none";
  } else {
    chatIframe.style.display = "none";
    chatBubble.style.display = "block";
  }
}