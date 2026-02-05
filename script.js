const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const result = document.getElementById("result");

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// YES clicked 💖
yesBtn.addEventListener("click", () => {
  result.innerHTML = "YAY Aditi!! 💖🥹<br>Best decision ever.";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  hearts();
});

// Hearts animation
function hearts() {
  for (let i = 0; i < 24; i++) {
    const h = document.createElement("div");
    h.innerText = "💖";
    h.style.position = "fixed";
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "100vh";
    h.style.fontSize = "26px";
    document.body.appendChild(h);

    h.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(-110vh)" }],
      { duration: 2200, easing: "ease-out" }
    );

    setTimeout(() => h.remove(), 2200);
  }
}
