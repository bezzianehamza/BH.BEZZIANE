"use strict";

// portfolio item filter
var filterContainer = document.querySelector(".portfolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;

for (var i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    var filterValue = this.getAttribute("data-filter");

    for (var k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }

      if (filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
} // portfolio Lightbox


var lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxClose = lightbox.querySelector("lightbox-close"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");
var itemIndex = 0;

var _loop = function _loop(_i) {
  portfolioItems[_i].addEventListener("click", function () {
    itemIndex = _i;
    changeItem();
    toggleLightbox();
  });
};

for (var _i = 0; _i < totalPortfolioItem; _i++) {
  _loop(_i);
}

function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }

  changeItem();
}

function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1;
  } else {
    itemIndex--;
  }

  changeItem();
}

function toggleLightbox() {
  lightbox.classList.toggle("open");
}

function changeItem() {
  imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
  lightboxCounter.innerHTML = itemIndex + 1 + "of" + totalPortfolioItem;
} //close lightbox


lightbox.addEventListener("click", function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
}); //aside navbar

var nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (var _i2 = 0; _i2 < totalNavList; _i2++) {
  var a = navList[_i2].querySelector("a");

  a.addEventListener("click", function () {
    // remov back section class
    removeBackSectionClass();

    for (var j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // remov back section class
        addBackSectionClass(j);
      }

      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSectionClass() {
  for (var _i3 = 0; _i3 < totalSection; _i3++) {
    allSection[_i3].classList.remove("back-section");
  }
}

function addBackSectionClass(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (var _i4 = 0; _i4 < totalSection; _i4++) {
    allSection[_i4].classList.remove("active");
  }

  var target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (var _i5 = 0; _i5 < totalNavList; _i5++) {
    navList[_i5].querySelector("a").classList.remove("active");

    var target = element.getAttribute("href").split("#")[1];

    if (target === navList[_i5].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[_i5].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  var sectionIndex = this.getAttribute("data-section-index"); //console.log(sectionIndex)

  showSection(this);
  updateNav(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex);
});
var navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");

  for (var _i6 = 0; _i6 < totalSection; _i6++) {
    allSection[_i6].classList.toggle("open");
  }
} // HAMZA BEZZIANE