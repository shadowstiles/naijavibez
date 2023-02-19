import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "aos/dist/aos.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.js";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NewsProvider } from "./context/news.context";
import { Helmet } from "react-helmet";

export const setDate = (publish) => {
  // prettier-ignore
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const newsDate = new Date(publish);

  const abb = function (date) {
    let strDate = `date`;
    if (strDate.length === 2) strDate = strDate.slice(1);
    if (strDate === "1") return "st";
    if (strDate === "2") return "nd";
    if (strDate === "3") return "rd";
    return "th";
  };

  const month = months[newsDate.getMonth()];
  const date = newsDate.getDate();
  const year = `${newsDate.getFullYear()}`.slice(2);

  return `${month} ${date}${abb(date)} '${year}`;
};

function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", () => {
  aos_init();
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NewsProvider>
        <Helmet>
          <title>NaijaVibez</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Your source for the latest, trending gossips and entertainment in Nigeria"
          />
          <meta
            name="keywords"
            content="gossip, entertainment, news, politics, trending topics, latest"
          />
        </Helmet>
        <App />
      </NewsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
