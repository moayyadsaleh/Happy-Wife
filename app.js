document.addEventListener("DOMContentLoaded", function () {
  const tipButton = document.getElementById("tipButton");
  const tipDisplay = document.getElementById("tipDisplay");

  // Sample tips data in JSON format
  const tipsData = [
    "Take her out for a surprise date night.",
    "Express your love with a heartfelt note or gesture.",
    "Help with household chores without being asked.",
    "Plan a weekend getaway to spend quality time together.",
    "Cook her favorite meal as a special surprise.",
    // Add more tips as needed
  ];

  // Function to generate a random tip
  function getRandomTip() {
    const randomIndex = Math.floor(Math.random() * tipsData.length);
    return tipsData[randomIndex];
  }

  // Event listener for button click
  tipButton.addEventListener("click", function () {
    const randomTip = getRandomTip();
    tipDisplay.textContent = randomTip;
  });
});
