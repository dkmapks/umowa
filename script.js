let points = 0;
let pointsPerClick = 1;
let pointsPerSecond = 0;
let clicks = 0;

const upgrades = [
  { name: "Podwójne kliknięcie", cost: 50, effect: () => pointsPerClick *= 2 },
  { name: "Automatyczny kliker", cost: 100, effect: () => pointsPerSecond += 1 },
  { name: "Super klikanie", cost: 500, effect: () => pointsPerClick += 10 },
  { name: "Mega automatyzacja", cost: 1000, effect: () => pointsPerSecond += 10 }
];

const pointsDisplay = document.getElementById("points");
const clickButton = document.getElementById("click-button");
const upgradesList = document.getElementById("upgrades-list");
const clicksDisplay = document.getElementById("clicks");
const ppsDisplay = document.getElementById("pps");

function updatePoints() {
  pointsDisplay.textContent = points;
  clicksDisplay.textContent = clicks;
  ppsDisplay.textContent = pointsPerSecond;
}

function addPoints(amount) {
  points += amount;
  updatePoints();
}

function purchaseUpgrade(upgrade) {
  if (points >= upgrade.cost) {
    points -= upgrade.cost;
    upgrade.effect();
    updatePoints();
  } else {
    alert("Nie masz wystarczająco punktów!");
  }
}

function initUpgrades() {
  upgrades.forEach(upgrade => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${upgrade.name} - Koszt: ${upgrade.cost} pkt</span>
      <button>Kup</button>
    `;
    li.querySelector("button").addEventListener("click", () => purchaseUpgrade(upgrade));
    upgradesList.appendChild(li);
  });
}

clickButton.addEventListener("click", () => {
  clicks++;
  addPoints(pointsPerClick);
});

setInterval(() => {
  addPoints(pointsPerSecond);
}, 1000);

initUpgrades();
updatePoints();