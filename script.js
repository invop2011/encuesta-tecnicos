// 1. Generar número aleatorio (1-4) y mostrar imagen
const randomValue = Math.floor(Math.random() * 4) + 1;
document.getElementById("random-value").value = randomValue;

// Imágenes (reemplaza con URLs reales o imágenes locales)
const images = {
  1: "https://ejemplo.com/sana-sana.jpg",
  2: "https://ejemplo.com/sana-rota.jpg",
  3: "https://ejemplo.com/rota-sana.jpg",
  4: "https://ejemplo.com/rota-rota.jpg"
};

// Mostrar imagen según el valor
document.getElementById("image").src = images[randomValue];

// 2. Guardar datos (ejemplo con Google Sheets)
document.getElementById("survey-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const studentId = document.getElementById("student-id").value;
  const technician = document.getElementById("technician").value;
  
  const data = {
    randomValue,
    studentId,
    technician,
    timestamp: new Date().toISOString()
  };

  // Opción A: Guardar en Google Sheets (necesitas un script de Apps Script)
  // await saveToGoogleSheets(data);

  // Opción B: Guardar en Firebase (necesitas configuración)
  // await saveToFirebase(data);

  // Mensaje de éxito (simulado)
  document.getElementById("message").textContent = "¡Respuesta enviada!";
  document.getElementById("survey-form").reset();
});

// Función de ejemplo para Google Sheets (necesita configuración adicional)
async function saveToGoogleSheets(data) {
  const response = await fetch(
    "URL_DE_TU_SCRIPT_DE_GOOGLE_APPS_SCRIPT",
    {
      method: "POST",
      body: JSON.stringify(data)
    }
  );
  const result = await response.json();
  console.log(result);
}