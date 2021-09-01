"use strict";

function openTab(evt, service) {
  let i, tabList, tabItem;
  tabList = document.getElementsByClassName("tab-list");
  for (i = 0; i < tabList.length; i++) {
    tabList[i].style.display = "none";
  }
  tabItem = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabItem.length; i++) {
    tabItem[i].className = tabItem[i].className.replace(" active", "");
  }
  document.getElementById(service).style.display = "flex";
  evt.currentTarget.className += " active";
}
document.getElementById("open").click();

const button = document.getElementById("load-more");
button.addEventListener("click", () => {
  const counter = parseInt(button.getAttribute("counter"), 10);
  const currentItemClass = document
    .getElementsByClassName("work-tab active")[0]
    .innerText.replace(" ", "-")
    .toLowerCase();
  showImages(12 + (counter + 1) * 12, currentItemClass);
  button.setAttribute("counter", counter + 1);
});

document.addEventListener("click", (evt) => {
  const target = evt.target;
  if (target.classList.contains("work-tab")) {
    const tabs = document.getElementsByClassName("work-tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    target.classList.add("active");
    const neededImageClass = target.innerText.replace(" ", "-").toLowerCase();
    showImages(12, neededImageClass);
    document.getElementById("load-more").setAttribute("counter", 0);
  }
});

function showImages(quantity, imageClass) {
  let workImg = document.getElementsByClassName("work-img-item");
  for (let i = 0; i < workImg.length; i++) {
    workImg[i].style.display = "none";
  }

  let imagesToShow = document.getElementsByClassName(imageClass);
  if (imageClass == "all") {
    imagesToShow = workImg;
  }

  for (let i = 0; i < quantity && i < imagesToShow.length; i++) {
    imagesToShow[i].style.display = "flex";
  }
  let showMoreButton = document.getElementById("load-more");
  if (quantity >= imagesToShow.length) {
    showMoreButton.style.display = "none";
  } else {
    showMoreButton.style.display = "block";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("people");
  let dots = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" reactive", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " reactive";
}
