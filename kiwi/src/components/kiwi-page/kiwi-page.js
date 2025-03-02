import Heading from "../heading/heading.js";
import Image from "../kiwi-page/kiwipage.js";

class KiwiPage {
  render() {
    const heading = new Heading();
    const image = new Image();

    heading.render("image component");
    image.render();
  }
}

export default KiwiPage;
