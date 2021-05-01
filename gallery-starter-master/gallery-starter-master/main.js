var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping */
for(let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
 newImage.setAttribute('src', 'images/pic' + i + '.png');
thumbBar.appendChild(newImage);
newImage.addEventListener('click',function(e) {
  displayedImage.setAttribute('src', newImage.getAttribute('src'));
} );
}

/* Darken button */
btn.addEventListener('click', dlbutton);

function dlbutton() {
 let dl = btn.getAttribute('class');
if (dl === 'dark') {
  btn.setAttribute('class', 'light');
  btn.textContent = 'Lighten';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, .5)';
} else {
  btn.setAttribute('class', 'dark');
  btn.textContent = 'Darken';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}
}
