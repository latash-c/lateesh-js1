function createElement(tag, text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el;
}

function render(element, target) {
    target.appendChild(element);
}
