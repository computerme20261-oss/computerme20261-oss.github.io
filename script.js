/* ===============================
   AUTO BAG PREVIEW
================================ */

function generateBag() {
  const area = document.getElementById("bagPreview");
  area.innerHTML = "";

  const bagTypeInput = document.querySelector("input[name='bagType']:checked");
  if (!bagTypeInput) return;

  const bag = document.createElement("div");
  bag.className = "bag";

  /* BAG TYPE */
  const bagType = bagTypeInput.value;
  bag.classList.remove("handle", "stick", "dcut");

  if (bagType === "Handle Bag") bag.classList.add("handle");
  if (bagType === "Stick Bag") bag.classList.add("stick");
  if (bagType === "D-Cut Bag") bag.classList.add("dcut");

  /* SIZE */
  const L = parseInt(document.getElementById("bagLength").value) || 14;
  const B = parseInt(document.getElementById("bagBreadth").value) || 18;

  bag.style.width = Math.min(260, L * 6) + "px";
  bag.style.height = Math.min(340, B * 6) + "px";

  /* BAG COLOR */
  const bagColor = document.getElementById("bagColor").value;
  bag.style.background = bagColor.toLowerCase();

  /* BORDER */
  const borderType = document.getElementById("borderType").value;
  const borderColor = document.getElementById("borderColor").value;

  bag.classList.remove("half-border", "full-border");

  if (borderType === "Half Border") bag.classList.add("half-border");
  if (borderType === "Full Border") bag.classList.add("full-border");

  bag.style.borderColor = borderColor.toLowerCase();

  /* PRINT CONTENT */
  const print = document.createElement("div");
  print.className = "print";

  const printContent = document.getElementById("printContent").value;
  const printColor = document.getElementById("printColor").value;

  if (printContent === "Logo Only") {
    print.innerText = "LOGO";
  } else if (printContent === "Logo + Address") {
    print.innerText = "LOGO\nAddress";
  } else {
    print.innerText = "LOGO\nShop Name\nAddress";
  }

  print.style.color = printColor.toLowerCase();

  /* SMOOTH EFFECT */
  bag.style.opacity = "0";
  bag.style.transform = "scale(0.9)";
  setTimeout(() => {
    bag.style.transition = "all 0.3s ease";
    bag.style.opacity = "1";
    bag.style.transform = "scale(1)";
  }, 50);

  bag.appendChild(print);
  area.appendChild(bag);
}

/* ===============================
   WHATSAPP SEND (PLAN FIRST)
================================ */

function sendWhatsApp() {
  const bagType = document.querySelector("input[name='bagType']:checked")?.value || "";
  if (!bagType) {
    alert("Please select bag type");
    return;
  }

  const msg =
    "3 STAR BAG ORDER%0A" +
    "------------------%0A" +
    "Name: " + (customerName.value || "Customer") + "%0A" +
    "Mobile: " + (customerMobile.value || "-") + "%0A" +
    "Bag Type: " + bagType + "%0A" +
    "Size: " + (bagLength.value || 14) + " x " + (bagBreadth.value || 18) + "%0A" +
    "Material: " + material.value + "%0A" +
    "Bag Color: " + bagColor.value + "%0A" +
    "Print: " + printContent.value + "%0A" +
    "Print Color: " + printColor.value + "%0A" +
    "Border: " + borderType.value + "%0A" +
    "Quantity: " + (quantity.value || "-");

  window.open("https://wa.me/918807841189?text=" + msg, "_blank");
}

/* ===============================
   BACK
================================ */

function goHome() {
  window.location.href = "index.html";
}

/* ===============================
   AUTO CHANGE LISTENERS
================================ */

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(
    "input, select"
  ).forEach(el => {
    el.addEventListener("change", generateBag);
    el.addEventListener("input", generateBag);
  });

  document.getElementById("sendBtn").addEventListener("click", sendWhatsApp);
  document.getElementById("backBtn").addEventListener("click", goHome);

});
