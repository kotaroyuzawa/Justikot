/*Instruments image slide*/
let thumbnails1 = document.getElementsByClassName("thumbnail1");
let activeImages1 = document.getElementsByClassName("active1");
for (let i = 0; i < thumbnails1.length; i++) {
  thumbnails1[i].addEventListener("mouseover", function () {
    if (activeImages1.legnth > 0) {
      activeImages1[0].classList.remove("active1");
    }

    this.classList.add("active1");
    document.getElementById("featured1").src = this.src;
  });
}

let thumbnails2 = document.getElementsByClassName("thumbnail2");
let activeImages2 = document.getElementsByClassName("active2");
for (let i = 0; i < thumbnails2.length; i++) {
  thumbnails2[i].addEventListener("mouseover", function () {
    if (activeImages2.legnth > 0) {
      activeImages2[0].classList.remove("active2");
    }

    this.classList.add("active2");
    document.getElementById("featured2").src = this.src;
  });
}

let thumbnails3 = document.getElementsByClassName("thumbnail3");
let activeImages3 = document.getElementsByClassName("active3");
for (let i = 0; i < thumbnails3.length; i++) {
  thumbnails3[i].addEventListener("mouseover", function () {
    if (activeImages3.legnth > 0) {
      activeImages3[0].classList.remove("active3");
    }

    this.classList.add("active3");
    document.getElementById("featured3").src = this.src;
  });
}
