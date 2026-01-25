function previewBag() {
  const area = document.getElementById("previewArea");
  area.innerHTML = "";

  /* ===== CREATE BAG ===== */
  const bag = document.createElement("div");
  bag.className = "bag";

  /* ===== BAG TYPE ===== */
  const bagType = document.querySelector(
    "input[name='bagType']:checked"
  ).value;

  bag.classList.remove("handle", "stick", "dcut");

  if (bagType === "Handle") bag.classList.add("handle");
  if (bagType === "Stick") bag.classList.add("stick");
  if (bagType === "D-Cut") bag.classList.add("dcut");

  /* ===== SIZE (L × B SCALE) ===== */
  const L = parseInt(document.getElementById("length").value) || 14;
  const B = parseInt(document.getElementById("breadth").value) || 18;

  bag.style.width = Math.min(260, L * 6) + "px";
  bag.style.height = Math.min(340, B * 6) + "px";

  /* ===== BAG COLOR ===== */
  const bagColor = document.getElementById("bagColor").value;
  bag.style.background = bagColor;

  /* ===== BORDER ===== */
  const borderType = document.getElementById("borderType").value;
  const borderColor = document.getElementById("borderColor").value;

  bag.classList.remove("half-border", "full-border");

  if (borderType === "half") bag.classList.add("half-border");
  if (borderType === "full") bag.classList.add("full-border");

  bag.style.borderColor = borderColor;

  /* ===== PRINT CONTENT ===== */
  const printText = document.createElement("div");
  printText.className = "print";

  const content = document.getElementById("printContent").value;
  const printColor = document.getElementById("printColor").value;

  if (content === "Logo") {
    printText.innerText = "LOGO";
  } else if (content === "Logo + Address") {
    printText.innerText = "LOGO\nAddress";
  } else {
    printText.innerText = "LOGO\nShop Name\nAddress";
  }

  printText.style.color = printColor;

  /* ===== PREMIUM ANIMATION ===== */
  bag.style.transform = "scale(0.8)";
  bag.style.opacity = "0";

  setTimeout(() => {
    bag.style.transition = "all 0.35s ease";
    bag.style.transform = "scale(1)";
    bag.style.opacity = "1";
  }, 50);

  bag.appendChild(printText);
  area.appendChild(bag);
}

/* ===== WHATSAPP SEND ===== */
function sendWhatsApp() {
  const msg =
    "3 STAR Bag Customization%0A" +
    "--------------------%0A" +
    "Name: " + custName.value + "%0A" +
    "Mobile: " + custMobile.value + "%0A" +
    "Bag Type: " +
    document.querySelector("input[name='bagType']:checked").value +
    "%0A" +
    "Size: " + length.value + " x " + breadth.value + "%0A" +
    "Bag Color: " + bagColor.value + "%0A" +
    "Print: " + printContent.value + "%0A" +
    "Print Color: " + printColor.value + "%0A" +
    "Border: " + borderType.value + "%0A";

  window.open("https://wa.me/918807841189?text=" + msg);
}

/* ===== BACK TO HOME ===== */
function goHome() {
  window.location.href = "index.html";
}

