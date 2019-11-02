// Modal
const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal');
modalBg.addEventListener('click', handleModalBgClick);
modal.addEventListener('click', handleModalBgClick);

// Modal close 
function handleModalBgClick(e) {
  e.stopPropagation();
  let modalBg = document.querySelector(".modal-bg");
  let modal = document.querySelector('.modal');
  modal.setAttribute("style", "opacity: 0; visibility: hidden");
  modalBg.setAttribute("style", "opacity: 0; visibility: hidden");
  // if (
  //   e.target.classList[0] === "modal-bg" ||
  //   e.target.classList[0] === "modal-close__btn-single") {
  //   modal.setAttribute("style", "opacity: 0; visibility: hidden");
  //   modalBg.setAttribute("style", "opacity: 0; visibility: hidden");
  // }
  runStatRender(1969)
}

// Hover highlighting
function mouseovered(d) {
  node
    .each(function (n) { n.target = n.source = false; });
  link
    .classed("link--target", function (l) { if (l.target === d) return l.source.source = true; })
    .classed("link--source", function (l) { if (l.source === d) return l.target.target = true; })
    .filter(function (l) { return l.target === d || l.source === d; })
    .raise();
  node
    .classed("node--target", function (n) { return n.target; })
    .classed("node--source", function (n) { return n.source; });
}

function mouseouted(d) {
  link
    .classed("link--target", false)
    .classed("link--source", false);
  node
    .classed("node--target", false)
    .classed("node--source", false);
}