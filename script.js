// On load, apply stored background preference
window.onload = function() {
  const savedColor = localStorage.getItem("bgColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.getElementById("bg-color").value = savedColor;
  }
};

function savePreferences() {
  const color = document.getElementById("bg-color").value;
  localStorage.setItem("bgColor", color);
  document.body.style.backgroundColor = color;
  alert("Preference saved! Enjoy your color 🌈");
}
