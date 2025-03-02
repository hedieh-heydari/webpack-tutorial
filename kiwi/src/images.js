import Heading from "./components/heading/heading.js";
import Image from "./components/imageComponent/imageComponent.js";

const heading = new Heading();
const image = new Image();

heading.render("image component");
image.render();

import("HelloWorldApp/HelloWorldButton").then((HelloworldButtonModule) => {
  const HelloWorldButton = HelloworldButtonModule.default;
  const helloWorldButton = new HelloWorldButton();
  helloWorldButton.render();
});
