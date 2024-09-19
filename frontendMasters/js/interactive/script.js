new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// nav physics
const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector(".myBrand");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start((e) => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
    mass: 1,
    damping: 10,
  }).start(ballXY);
});
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const galleryImgs = Array.from(document.querySelectorAll(".gallery-img"));

// let activeImgIndex = 0;

// console.log(activeImgIndex);
// prevBtn.addEventListener("click", () => {
//   if (activeImgIndex < 0) return;

//   activeImgIndex--;

//   activeImgIndex === 0 ? (prevBtn.disabled = true) : (prevBtn.disabled = false);

//   activeImgIndex === galleryImgs.length - 1
//     ? (nextBtn.disabled = true)
//     : (nextBtn.disabled = false);

//   galleryImgs.forEach((img) => {
//     img.classList.remove("active");
//   });
//   galleryImgs[activeImgIndex].classList.add("active");
// });

// nextBtn.addEventListener("click", () => {
//   if (activeImgIndex >= galleryImgs.length - 1) return;

//   activeImgIndex++;

//   activeImgIndex === 0 ? (prevBtn.disabled = true) : (prevBtn.disabled = false);

//   activeImgIndex === galleryImgs.length - 1
//     ? (nextBtn.disabled = true)
//     : (nextBtn.disabled = false);
//   galleryImgs.forEach((img) => {
//     img.classList.remove("active");
//   });
//   galleryImgs[activeImgIndex].classList.add("active");
// });
