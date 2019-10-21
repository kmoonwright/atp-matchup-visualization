
function searchNodes() {
  const searchValue = document.querySelector('input').value;
  let allNodes = document.querySelectorAll('text');
  allNodes.forEach((nodeText) => {
    if (nodeText.innerHTML.toUpperCase().includes(searchValue.toUpperCase())) {
      // nodeText.style.backgroundColor = "FFFF00";
      // nodeText.style.fontWeight = 700;

      let ogStyle = nodeText.style
      nodeText.setAttribute('style', 'font-weight: 700')

      
      // Object.assign(nodeText.style, {fontsize: "20px"})
      setTimeout(() => {
        // nodeText.setAttribute('class', {ogStyle})
        nodeText.style = ogStyle
      }, 5000);
    } else if (nodeText.innerHTML.toUpperCase() === searchValue.toUpperCase()) {
      // mouseOver Event
    }
  })
  console.log('working')
}