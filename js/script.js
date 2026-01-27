document.addEventListener("DOMContentLoaded", () => {

  const previewBtn = document.getElementById("previewBtn");
  const sendBtn    = document.getElementById("sendBtn");
  const previewBox = document.getElementById("bagPreview");

  const PX = 6; // 1 inch = 6px (preview scale)

  previewBtn.addEventListener("click", previewBag);
  sendBtn.addEventListener("click", sendWhatsApp);

  /* ================= PREVIEW BAG ================= */
  function previewBag(){

    previewBox.innerHTML = "";

    const bag = document.createElement("div");
    bag.className = "bag";

    /* BAG TYPE */
    const bagType = document.querySelector("input[name='bagType']:checked").value;
    bag.classList.add(
      bagType === "Handle" ? "handle-bag" :
      bagType === "Stick"  ? "stick-bag"  :
                             "dcut-bag"
    );

   // ===== SIZE (INCH → PIXEL) =====
const L = Number(bagLength.value) || 25;   // Length / Height (inch)
const B = Number(bagBreadth.value) || 15;  // Breadth / Width (inch)

// ⭐ INCREASE THIS NUMBER TO MAKE BAG BIGGER
const PX = 16;   // try 14 if you want EXTRA BIG

bag.style.height = Math.min(750, L * PX) + "px";
bag.style.width  = Math.min(500, B * PX) + "px";


    /* COLOR */
    bag.style.background = document.getElementById("bagColor").value;

    /* GSM */
    const gsm = document.getElementById("gsm").value;
    bag.setAttribute("data-gsm", gsm);

    /* BORDER */
    bag.style.borderColor = document.getElementById("borderColor").value;
    bag.classList.remove("full-border","half-border");

    const borderType = document.getElementById("borderType").value;
    if(borderType === "full") bag.classList.add("full-border");
    if(borderType === "half") bag.classList.add("half-border");

    /* PRINT CONTENT */
    const print = document.createElement("div");
    print.className = "print-text";

    const content = document.getElementById("printContent").value;
    if(content === "Logo Only") print.innerText = "LOGO";
    else if(content === "Logo + Address") print.innerText = "LOGO\nADDRESS";
    else print.innerText = "LOGO\nSHOP NAME\nADDRESS";

    print.style.color = document.getElementById("printColor").value;
    bag.appendChild(print);

    /* PREMIUM ANIMATION */
    bag.style.transform = "scale(0.85)";
    bag.style.opacity = "0";

    setTimeout(() => {
      bag.style.transition = "all 0.35s ease";
      bag.style.transform = "scale(1)";
      bag.style.opacity = "1";
    }, 50);

    previewBox.appendChild(bag);
  }

  /* ================= WHATSAPP ================= */
  function sendWhatsApp(){

    const msg =
`👜 3 STAR BAG ORDER

Name: ${customerName.value}
Mobile: ${customerMobile.value}

Bag Type: ${document.querySelector("input[name='bagType']:checked").value}
Size (L × B): ${bagLength.value} × ${bagBreadth.value} inch
Material: ${material.value}
Color: ${bagColor.value}

Print: ${printContent.value}
Print Color: ${printColor.value}

GSM: ${gsm.value}
Border: ${borderType.value}
Border Color: ${borderColor.value}

Quantity: ${quantity.value}
`;

    window.open(
      "https://wa.me/918807841189?text=" + encodeURIComponent(msg),
      "_blank"
    );
  }

});

/* ================= BACK TO HOME ================= */
function goHome(){
  window.location.href = "index.html";
}
