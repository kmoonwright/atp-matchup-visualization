
function searchNodes() {
  const searchValue = document.querySelector('input').value;
  let allNodes = document.querySelectorAll('text');
  allNodes.forEach((nodeText) => {
    if (nodeText.innerHTML.toUpperCase().includes(searchValue.toUpperCase())) {
      // nodeText.style.backgroundColor = "FFFF00";
      // nodeText.style.fontWeight = 700;
      

      nodeText.setAttribute('class', 'query')
  
      setTimeout(() => {
        nodeText.setAttribute('class', 'node')
      }, 2000);
      
      // Object.assign(nodeText.style, {
        //   fontWeight: 700,
        
        // })
        
        
        // debugger
        // console.log(searchValue)
        // console.log(node.innerHTML)
      }
  })
  console.log('working')
}