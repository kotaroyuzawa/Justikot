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

/*Modal*/
const modal = document.querySelector(".gallery-modal");
const btnCloseModal = document.querySelector(".gallery-close");
const imgsOpenModal = document.querySelectorAll(".gallery-img");
const modalImg = document.querySelector(".gallery-modal-content");
const galleryTexts = document.querySelectorAll(".gallery-modal-text");

for (let i = 0; i < imgsOpenModal.length; i++) {
  imgsOpenModal[i].addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    const targetText =
      this.nextElementSibling.firstChild.nextElementSibling.innerText;
    const modalText = document.querySelector(".gallery-modal-text");
    modalText.innerHTML = targetText;
  });
}

// When the user clicks on <span> (x) or outside the image, close the modal
const closeModal = function () {
  modal.style.display = "none";
};

btnCloseModal.addEventListener("click", closeModal);

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});
