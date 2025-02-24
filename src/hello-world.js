// import addImage from "./add-image.js";
import Heading from "./components/heading/heading.js";
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import React from "react";

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
heading.render("hello world");
helloWorldButton.render();

// addImage();
