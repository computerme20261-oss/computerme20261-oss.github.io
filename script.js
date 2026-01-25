document.addEventListener("DOMContentLoaded", () => {

/* ========= ELEMENTS ========= */
const bag = document.getElementById("bag");

const bagType = document.getElementById("bagType");
const bagColor = document.getElementById("bagColor");
const bagLength = document.getElementById("bagLength");
const bagBreadth = document.getElementById("bagBreadth");
const gsm = document.getElementById("gsm");
const borderType = document.getElementById("borderType");
const borderColor = document.getElementById("borderColor");
const printText = document.getElementById("printText");
const quantity = document.getElementById("quantity");

const previewBtn = document.getElementById("previewBtn");
const sendBtn = document.getElementById("sendBtn");

/* ========= SCALE ========= */
const PX = 6; // 1 inch = 6px

/* ========= EVENTS ========= */
previewBtn.addEventListener("click", updateBag);
sendBtn.addEventListener("click", sendWhatsApp);

/* Auto preview */
[
 bagType, bagColor, bagLength, bagBreadth,
 gsm, borderType, borderColor, printText
].forEach(el => el.addEventListener("input", updateBag));

/* ========= BAG GENERATOR ========= */
function updateBag(){

  /* RESET */
  bag.className = "bag";

  /* SIZE */
  const L = Number(bagLength.value) || 14;
  const B = Number(bagBreadth.value) || 12;

  bag.style.height = Math.min(420, L * PX) + "px";
  bag.style.width  = Math.min(320, B * PX) + "px";

  /* TYPE */
  bag.classList.add(bagType.value);

  /* COLOR */
  bag.style.background = bagColor.value;

  /* GSM */
  bag.setAttribute("data-gsm", gsm.value);

  /* BORDER */
  bag.classList.remove("full-border","half-border");
  bag.style.borderColor = borderColor.value;

  if(borderType.value === "full"){
    bag.classList.add("full-border");
  }
  if(borderType.value === "half"){
    bag.classList.add("half-border");
  }

  /* PRINT */
  let print = bag.querySelector(".print-text");
  if(!print){
    print = document.createElement("div");
    print.className = "print-text";
    bag.appendChild(print);
  }
  print.innerText = printText.value || "";

}

/* ========= WHATSAPP ========= */
function sendWhatsApp(){

  const msg =
`👜 BAG ORDER

Type: ${bagType.value}
Size: ${bagLength.value}" x ${bagBreadth.value}"
Color: ${bagColor.value}
GSM: ${gsm.value}
Border: ${borderType.value}
Qty: ${quantity.value || "-"}

Print: ${printText.value || "No Print"}
`;

  const phone = "91XXXXXXXXXX"; // replace
  window.open(
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg),
    "_blank"
  );
}

updateBag(); // first load

});
