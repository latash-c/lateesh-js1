function createElement(tag, text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el;
}

function render(element, target) {
    target.appendChild(element);
}

function Button(text, onClick) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = onClick;
    return btn;
}

function Card(title, content) {
    const card = document.createElement("div");

    card.style.border = "1px solid #ccc";
    card.style.padding = "15px";
    card.style.margin = "10px 0";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const body = document.createElement("p");
    body.textContent = content;

    card.appendChild(heading);
    card.appendChild(body);

    return card;
}
