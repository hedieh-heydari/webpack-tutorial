import screenshot from "./screenshot.png";

function addImage() {
  const img = document.createElement("img");
  img.alt = "screenshot";
  img.width = 300;
  img.src = screenshot;
  const body = document.querySelector("body");
  body.appendChild(img);
}
export default addImage;
