const itemList = document.getElementById("item-list");

const items = [
  ["https://youtu.be/4ESTGqxLbOw?si=DCdfGlUpTlF8nSTA", "a"],
  ["hi", "h1"]
];

function renderItems() {
    itemList.innerHTML = "";
    items.forEach(item => {
        const el = document.createElement(item[1]);
        el.textContent = item[0];
        if(item[1] = "a"){
        el.href = item[0]
        }
        itemList.appendChild(el);
    });
}

renderItems();



/*
    "OPEN",
    "FILE",
    "SAVE",
    "UPDATE",
    "QUIT",
    */