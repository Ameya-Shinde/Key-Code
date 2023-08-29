const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");

document.addEventListener("keyup", function (e) {
    r1.innerHTML = "";
    r2.innerHTML = "";

    const keyValue = e.key;
    const keyCode = e.keyCode;

    const spn = document.createElement("span");
    spn.innerText = keyValue;

    const l1 = document.createElement("h1");
    l1.innerText = "You Pressed ";
    l1.append(spn);

    const l2 = document.createElement("h1");
    l2.innerText = keyCode;
    l2.id = "sp";

    r1.appendChild(l1);
    r2.appendChild(l2);
})



