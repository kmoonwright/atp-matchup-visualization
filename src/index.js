
const modalBg = document.querySelector('.modal-bg');
modalBg.addEventListener('click', handleModalBgClick);
// modal close 
function handleModalBgClick(e) {
  e.stopPropagation();
  let modalBg = document.querySelector(".modal-bg");
  let modal = document.querySelector('.modal');

  if (
    e.target.classList[0] === "modal-bg" ||
    e.target.classList[0] === "modal-close__btn-single") {
    modal.setAttribute("style", "opacity: 0; visibility: hidden");
    modalBg.setAttribute("style", "opacity: 0; visibility: hidden");
  }
}
