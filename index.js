const logoSrc = ".png";
const listofItems = [
  "kareemmohame.com",
  "kareemtaha21.com",
  "kareemtaha.com",
  "kareemtaham.com",
  "kareemtah.com",
  "kareemtahaking.com",
  "kareemtaha.net",
];
document.addEventListener("DOMContentLoaded", function (e) {
  const stack = document.getElementById("stack");
  for (let i = 0; i < listofItems.length; i++) {
    const div = document.createElement("div");
    div.classList.add("single-block");
    div.innerHTML = `
    <div class="content">
    <img src=images/${i + 1 + logoSrc} />
    <div><h3>${listofItems[i]}</h3><p>description</p></div>
    </div>
    `;
    div.style.transform = `scale(${1 - i * 0.03}) translateY(${-i * 0.5}rem)`;
    div.style.zIndex = `${-i}`;
    stack.appendChild(div);
    stack.addEventListener("click", function (e) {
      e.stopPropagation();
      div.style.transform = `rotate(${i * 1.3}deg) translate(${-i * 4}px ,${
        -i * 4.8
      }rem)`;
    });
    document.addEventListener("click", function () {
      div.style.transform = `scale(${1 - i * 0.03}) translateY(${-i * 0.5}rem)`;
      div.style.zIndex = `${-i}`;
    });
  }
});
