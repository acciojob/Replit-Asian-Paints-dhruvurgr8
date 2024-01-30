//your JS code here. If required.
function changeColor() {
  const blockId = document.getElementById('block_id').value;
  const color = document.getElementById('color_id').value;
  
  if (blockId && document.getElementById(blockId)) {
    document.getElementById(blockId).style.backgroundColor = color;
  }
}

function resetColors() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.style.backgroundColor = 'transparent';
  });
}
