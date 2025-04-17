const form = document.getElementById("data-form");
const input = document.getElementById("multiplier-input");
const output = document.getElementById("prediction-output");

let multipliers = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = parseFloat(input.value);
  if (!isNaN(value)) {
    multipliers.push(value);
    input.value = "";
    const prediction = predictNextMultiplier(multipliers);
    output.innerText = `Next multiplier might be around: x${prediction.toFixed(2)}`;
  }
});

function predictNextMultiplier(data) {
  if (data.length < 3) return 2.00;
  const avg = data.slice(-25).reduce((sum, val) => sum + val, 0) / Math.min(25, data.length);
  return avg * (0.85 + Math.random() * 0.3);  // Random factor for variation
    }
