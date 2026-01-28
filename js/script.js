document.addEventListener("DOMContentLoaded", () => {

  const previewBtn = document.getElementById("previewBtn");
  const sendBtn    = document.getElementById("sendBtn");
  const previewBox = document.getElementById("bagPreview");

  previewBtn.addEventListener("click", previewBag);
  sendBtn.addEventListener("click", sendWhatsApp);

  /* ================= PREVIEW BAG ================= */
  function previewBag(){

    previewBox.innerHTML = ""; // clear old bag

    const bag = document.createElement("div");
    bag.className = "bag";

    /* ===== BAG TYPE ===== */
    const bagType =
      document.querySelector("input[name='bagType']:checked").value;

    bag.classList.remove("handle-bag","stick-bag","dcut-bag");

    if(bagType === "Handle"){
      bag.classList.add("handle-bag");
    }
    else if(bagType === "Stick"){
      bag.classList.add("stick-bag");

      // finger cut for big shopper
      const finger = document.createElement("div");
      finger.className = "finger-cut";
      bag.appendChild(finger);
    }
    else{
      bag.classList.add("dcut-bag");
    }

    /* ===== SIZE (INCH → PIXEL) ===== */
    const bagLength  = document.getElementById("bagLength");
    const bagBreadth = document.getElementById("bagBreadth");

    const L = Number(bagLength.value) || 25;
    const B = Number(bagBreadth.value) || 15;

    const PX = 16; // preview scale

    bag.style.height = Math.min(750, L * PX) + "px";
    bag.style.width  = Math.min(500, B * PX) + "px";

    /* ===== COLOR ===== */
    bag.style.background = document.getElementById("bagColor").value;

    /* ===== GSM ===== */
    const gsm = document.getElementById("gsm").value;
    bag.setAttribute("data-gsm", gsm);

    /* ===== BORDER ===== */
    const borderType  = document.getElementById("borderType").value;
    const borderColor = document.getElementById("borderColor").value;

    bag.classList.remove("full-border","half-border");
    bag.style.borderColor = borderColor;

    if(borderType === "full") bag.classList.add("full-border");
    if(borderType === "half") bag.classList.add("half-border");

    /* ===== PRINT ===== */
    const print = document.createElement("div");
    print.className = "print-text";

    const content = document.getElementById("printContent").value;

    if(content === "Logo Only"){
      print.innerText = "LOGO";
    }
    else if(content === "Logo + Address"){
      print.innerText = "LOGO\nADDRESS";
    }
    else{
      print.innerText = "LOGO\nSHOP NAME\nADDRESS";
    }

    print.style.color = document.getElementById("printColor").value;
    bag.appendChild(print);

    previewBox.appendChild(bag);
  }

  /* ================= WHATSAPP ================= */
  function sendWhatsApp(){

    const msg = 🌐🛍️ 3 STAR BAG ORDER

Name: ${customerName.value}
Mobile: ${customerMobile.value}

Bag Type: ${document.querySelector("input[name='bagType']:checked").value}
Size: ${bagLength.value} × ${bagBreadth.value} inch
Material: ${material.value}
Color: ${bagColor.value}

Print: ${printContent.value}
Print Color: ${printColor.value}
GSM: ${gsm.value}

Border: ${borderType.value}
Quantity: ${quantity.value}
`;

    window.open(
      "https://wa.me/918807841189?text=" + encodeURIComponent(msg),
      "_blank"
    );
  }

});

/* ================= BACK ================= */
function goHome(){
  window.location.href = "index.html";
}
