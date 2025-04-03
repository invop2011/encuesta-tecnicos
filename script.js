// script.js - Versión con GOOGLE SHEETS
document.getElementById("survey-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const randomValue = document.getElementById("random-value").value;
  const studentId = document.getElementById("student-id").value;
  const technician = document.getElementById("technician").value;
  
  // URL de tu Google Apps Script (¡NO la subas a GitHub si es privada!)
  const scriptUrl = "https://script.google.com/macros/s/ABC123/exec";
  
  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify({ randomValue, studentId, technician }),
    });
    const result = await response.json();
    alert(result.message);
  } catch (error) {
    alert("Error: " + error.message);
  }
});
