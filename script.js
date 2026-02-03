function lockScreen() {
  document.body.requestFullscreen();
  document.removeEventListener('click', lockScreen, false);
}
document.addEventListener('click', lockScreen, false);
const sections = document.getElementsByTagName('section');
function change(id) {
  console.log(id.innerHTML);
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].id == id.innerHTML) {
      sections[i].style.display = 'block';
    } else {
      sections[i].style.display = 'none';
    }
  }
}
change(document.getElementsByTagName('a')[0]);