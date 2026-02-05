const HOMEslideshow = document.getElementById("HOMEslideshow");
const sections = document.getElementsByTagName("section");
var HOMEslidepage = 0;
var Page = "HOME";
function lockScreen() {
  document.body.requestFullscreen();
  document.removeEventListener("click", lockScreen, false);
}
function HOMEslide(n) {
  HOMEslideshow.getElementsByTagName("div")[HOMEslidepage].classList.remove("hovering");
  HOMEslidepage += n;
  const HOMEdisplay = HOMEslideshow.getElementsByTagName("div")[HOMEslidepage];
  HOMEdisplay.classList.add("hovering");
  HOMEslideshow.scrollLeft = HOMEdisplay.offsetLeft-HOMEslideshow.offsetLeft*25.625;
}
function change(id) {
  console.log(id.innerHTML);
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].id == id.innerHTML) {
      sections[i].style.display = "block";
      Page = id.innerHTML;
    } else {
      sections[i].style.display = "none";
    }
  }
}
//document.addEventListener("click", lockScreen, false);
HOMEslideshow.getElementsByTagName("div")