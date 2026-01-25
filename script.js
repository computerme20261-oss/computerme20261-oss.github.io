/* ===== GET ELEMENTS ===== */
const bag = document.getElementById("bagPreview");

const bagTypeRadios = document.querySelectorAll(
  "input[name='bagType']"
);

const bagColorSelect = document.getElementById("bagColor");
const borderTypeSelect = document.getElementById("borderType");
const borderColorSelect = document.getElementById("borderColor");

/* ===== BAG TYPE CHANGE ===== */
bagTypeRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    bag.classList.remove("handle", "stick", "dcut");
    bag.classList.add(radio.value);
  });
});

/* ===== PREVIEW BAG FUNCTION ===== */
function previewBag() {

  /* Bag color */
  bag.style.background = bagColorSelect.value.toLowerCase();

  /* Reset borders */
  bag.classList.remove("border-half", "border-full");
  bag.style.borderColor = "transparent";

  /* Border type */
  if (borderTypeSelect.value === "Half Border") {
    bag.classList.add("border-half");
    bag.style.borderColor = borderColorSelect.value.toLowerCase();
  }

  if (borderTypeSelect.value === "Full Border") {
    bag.classList.add("border-full");
    bag.style.borderColor = borderColorSelect.value.toLowerCase();
  }

  /* PRINTING COLOR PREVIEW */
  const printColor = document.getElementById("printColor").value;
  const printText = document.querySelector(".printText");

  printText.classList.remove("print-single","print-double","print-multi");

  if (printColor === "Single Color") {
    printText.style.color = "black";
  }

  if (printColor === "Double Color") {
    printText.style.color = "darkred";
  }

  if (printColor === "Multi Color (Digital)") {
    printText.style.color = "blue";
  }
}


/* ===== WHATSAPP SEND ===== */
function sendWhatsApp() {

  const name = document.getElementById("customerName").value;
  const mobile = document.getElementById("customerMobile").value;
  const size = document.getElementById("bagSize").value;
  const material = document.getElementById("material").value;
  const bagColor = bagColorSelect.value;
  const print = document.getElementById("printContent").value;
  const gsm = document.getElementById("gsm").value;
  const qty = document.getElementById("quantity").value;

  const bagType = document.querySelector(
    "input[name='bagType']:checked"
  ).value;

  const borderType = borderTypeSelect.value;
  const borderColor = borderColorSelect.value;

  let message =
    "3 STAR Carry Bag Custom Order%0A%0A" +
    "Name: " + name + "%0A" +
    "Mobile: " + mobile + "%0A" +
    "Bag Type: " + bagType + "%0A" +
    "Size (L×B): " + size + "%0A" +
    "Material: " + material + "%0A" +
    "Bag Color: " + bagColor + "%0A" +
    "Printing: " + print + "%0A" +
    "GSM: " + gsm + "%0A" +
    "Border: " + borderType + "%0A" +
    "Border Color: " + borderColor + "%0A" +
    "Quantity: " + qty;

  window.open(
    "https://wa.me/918807841189?text=" + message,
    "_blank"
  );
}
