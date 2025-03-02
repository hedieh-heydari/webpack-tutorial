import Heading from "../heading/heading.js";
import HelloWorldButton from "../hello-world-button/hello-world-button.js";

class HelloWorldPage {
  render() {
    const helloWorldButton = new HelloWorldButton();
    const heading = new Heading();
    heading.render("hello world");
    helloWorldButton.render();
  }
}

export default HelloWorldPage;
