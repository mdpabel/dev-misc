function Div(children) {
  const div = document.createElement("div");
  div.textContent = children;
  document.body.appendChild(div);
}

export { Div };
