import Heading from "../heading/heading.js";
import Image from "../imageComponent/imageComponent.js";

class KiwiPage {
  render() {
    const heading = new Heading();
    const image = new Image();

    heading.render("image component");
    image.render();

    import("ImageCaptionApp/ImageCaption").then((ImageCaptionModule) => {
      const ImageCaption = ImageCaptionModule.default;
      const imageCaption = new ImageCaption();
      imageCaption.render("testing image caption in kiwi app");
    });
  }
}

export default KiwiPage;
