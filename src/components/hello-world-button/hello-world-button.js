import "./hello-world-button.scss";

class HelloWorldButton {
  textCssClass = "hello-world-text";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "hello world";
    button.classList.add("hello-world-button");
    const body = document.querySelector("body");
    button.onclick = () => {
      const p = document.createElement("p");
      p.innerHTML = "Hello world";
      p.classList.add(this.textCssClass);
      body.appendChild(p);
    };
    body.appendChild(button);
  }
}

export default HelloWorldButton;
