const searchValue = document.querySelector('input').value;
let allNodes = document.querySelectorAll('text');
allNodes.forEach((node) => {
  if (node.innerHTML === searchValue) {
    node.style.backgroundColor = "red";
  }
})