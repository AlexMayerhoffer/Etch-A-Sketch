const reset_button = document.querySelector("#reset_button");
const apply_button = document.querySelector("#apply_button");
const multiplier_panel = document.querySelector("#grid_size_text");
const multiplier_slider = document.querySelector(".slider");

function setColor(target, r, g, b) {
  target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function changeColor(target) {
  r = Math.random() * 255;
  g = Math.random() * 255;
  b = Math.random() * 255;
  setColor(target, r, g, b);
}

function createSketch(multiplier) {
  const panel = document.querySelector("#sketch_panel");
  console.log(multiplier * multiplier);
  for (index = 0; index < multiplier; index++) {
    console.log(index);
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.flex = 1;
    for (index2 = 0; index2 < multiplier; index2++) {
      let sketch_box = document.createElement("div");

      if (index == 0 && index2 == 0)
        sketch_box.style.borderRadius = "1.5vw 0 0 0";
      if (index == 0 && index2 == multiplier - 1)
        sketch_box.style.borderRadius = "0 1.5vw 0 0";
      if (index == multiplier - 1 && index2 == 0)
        sketch_box.style.borderRadius = "0 0 0 1.5vw";
      if (index == multiplier - 1 && index2 == multiplier - 1)
        sketch_box.style.borderRadius = "0 0 1.5vw 0";
      sketch_box.style.flex = 1;
      sketch_box.style.border = "0.1px solid black";
      sketch_box.addEventListener("mousedown", (e) => changeColor(e.target));
      sketch_box.addEventListener("mouseover", (e) => changeColor(e.target));
      div.appendChild(sketch_box);
    }
    panel.appendChild(div);
  }
}

function removeSketch() {
  const panel = document.querySelector("#sketch_panel");
  console.log("resetting");
  while (panel.firstChild) panel.removeChild(panel.lastChild);
}

function clearSketch() {
  const panel = document.querySelector("#sketch_panel");
  for (child of panel.children) {
    for (box of child.children) {
      box.style.backgroundColor = "white";
    }
  }
}

multiplier_slider.addEventListener(
  "input",
  () => (multiplier_panel.textContent = multiplier_slider.value)
);
apply_button.addEventListener("click", () => {
  removeSketch();
  createSketch(multiplier_slider.value);
});
reset_button.addEventListener("click", clearSketch);

createSketch(multiplier_slider.value);
