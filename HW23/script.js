function getImage() {
  let random = Math.floor(Math.random() * 10);
  return '<img src="img/'+random+'.png" border="0" />'
}
document.getElementById("image").innerHTML = getImage()