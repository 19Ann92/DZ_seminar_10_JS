import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);

console.log(data);

const content = document.querySelector(".content");
content.style.display = "flex";
content.style.justifyContent = "space-around";

data.forEach(({ name, subtitle, url }) => {
  const div = document.createElement("div");
  div.style.width = "200px";
  div.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("cars-img");
  img.style.maxWidth = "200px";
  img.src = url;

  const cardBox = document.createElement("div");
  cardBox.style.textAlign = "center";
  cardBox.classList.add("card-box");

  const title = document.createElement("h1");
  title.classList.add("card-title");
  title.style.color = "#00bcd4";
  title.textContent = name;

  const subtitleEl = document.createElement("p");
  subtitleEl.classList.add("card-subtitle");
  subtitleEl.style.color = "#00bcd4";
  subtitleEl.textContent = subtitle;

  cardBox.appendChild(title);
  cardBox.appendChild(subtitleEl);

  div.appendChild(cardBox);
  div.appendChild(img);

  content.appendChild(div);
});
