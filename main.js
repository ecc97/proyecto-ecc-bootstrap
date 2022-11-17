function mensaje(bloque) {
  var contenidom = document.getElementById('mensaje');
  var nuevoColor = generateRandomColor();
  contenidom.style.display = bloque;
  contenidom.style.backgroundColor = nuevoColor;
  
  setTimeout(function () {
    contenidom.style.display = 'none';
  },1500)
}
function generateRandomColor() {
  var r = Math.floor(Math.random() * 256); 
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgbColor = 'rgb('+r+','+g+','+b+')';
  return rgbColor
}