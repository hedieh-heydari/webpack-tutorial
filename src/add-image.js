import screenshot from "./screenshot.png";
import altText from "./altText.txt";

function addImage() {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 300;
  img.src = screenshot;
  const body = document.querySelector("body");
  body.appendChild(img);
}
export default addImage;
