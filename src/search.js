// Dynamic Searching
function searchInput(searchValue) {
  // const searchValue = document.querySelector('input').value;
  let allNodes = document.querySelectorAll('text');
  allNodes.forEach((nodeText) => {
    let ogStyle = nodeText.style
    if (nodeText.innerHTML.toUpperCase().includes(searchValue.toUpperCase())) {
      nodeText.style.fontWeight = 700;
      nodeText.style.fontStyle = 'italic'
      // nodeText.setAttribute('style', 'font-weight: 700')
      
      // Object.assign(nodeText.style, {fontsize: "20px"})
      setTimeout(() => {
        // nodeText.setAttribute('class', {ogStyle})
        nodeText.style = ogStyle
      }, 8000);
    } else if (nodeText.innerHTML.toUpperCase() === searchValue.toUpperCase()) {
      // mouseOver Event
      nodeText.addEventListener('mouseover', function () {
        console.log('Event triggered');
      })
      var event = new MouseEvent('mouseover', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });

      nodeText.dispatchEvent(event);
    } else {
      nodeText.style = ogStyle;
    }
  })
}

// Search Button
function searchNodes() {
  const searchValue = document.querySelector('input').value;
  let allNodes = document.querySelectorAll('text');
  
  allNodes.forEach((nodeText) => {
    let ogStyle = nodeText.style;
    if (nodeText.innerHTML.toUpperCase().includes(searchValue.toUpperCase())) {
      nodeText.style.fontWeight = 700;
      nodeText.style.fontStyle = 'italic';

      setTimeout(() => {
        nodeText.style = ogStyle
      }, 8000);
    } else if (nodeText.innerHTML.toUpperCase() === searchValue.toUpperCase()) {
      // mouseOver Event
      nodeText.addEventListener('mouseover', function () {
        console.log('Event triggered');
      })
      var event = new MouseEvent('mouseover', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });

      nodeText.dispatchEvent(event);
    } else {
      nodeText.style = ogStyle;
    }
  })
}