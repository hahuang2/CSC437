const TOGGLE_EVENT = "darkmode:toggle";

document.body.addEventListener(TOGGLE_EVENT, (event) =>
  document.body.classList.toggle("dark-mode", !!event.detail)
);

document.querySelectorAll(".theme-toggle").forEach((label) =>
  (label.onchange = (event) => {
    event.stopPropagation();
    label.dispatchEvent(new CustomEvent(TOGGLE_EVENT, { bubbles: true, detail: event.target.checked }));
  })
);
