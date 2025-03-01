import image from "./screenshot.png";
import alt from "./altText.txt";
import "./imageComponent.scss";

class ImageComponent {
  render() {
    const img = document.createElement("img");
    img.src = image;
    img.alt = alt;
    img.classList.add("image-component");
    const body = document.querySelector("body");
    body.appendChild(img);
  }
}
export default ImageComponent;
