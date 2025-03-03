import NavigationBar from "./components/navigation-bar/navigation-bar.js";

const navigationItems = [
  { url: "/hello-world-page", title: "Hello world page" },
  { url: "/kiwi-page", title: "Kiwi page" },
];

const naviagtionBar = new NavigationBar();
naviagtionBar.render(navigationItems);

const url = window.location.pathname;
if (url === "/hello-world-page") {
  import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
    const HelloworldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloworldPage();
    helloWorldPage.render();
  });
} else if (url === "/kiwi-page") {
  import("KiwiApp/KiwiPage").then((KiwiPageModule) => {
    const KiwiPages = KiwiPageModule.default;
    const kiwipage = new KiwiPages();
    kiwipage.render();
  });
}
