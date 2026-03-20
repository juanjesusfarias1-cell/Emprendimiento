// --- MANEJO DEL LOADER ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    }, 1200); // 1.2 segundos para asegurar elegancia visual
});

document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DEL FORMULARIO ---
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            feedback.style.display = "block";
            feedback.innerText = "Enviando tu propuesta creativa...";
            feedback.className = "message info";

            // Simulación de envío exitoso
            setTimeout(() => {
                const nombre = document.getElementById('nombre').value;
                feedback.innerText = `✅ ¡Hecho, ${nombre}! El equipo de Jematis ha recibido tu solicitud. Te contactaremos pronto.`;
                feedback.className = "message success";
                form.reset();
            }, 2000);
        });
    }

    // --- MENSAJE EN CONSOLA ---
    console.clear();
    console.log("%cJEMATIS | CREATIVE DEVELOPMENT", "color: #38bdf8; font-size: 25px; font-weight: bold; font-family: sans-serif;");
    console.log("%cDetectamos curiosidad técnica. ¡Eso nos encanta! Bienvenid@ a Jematis.", "color: gray; font-size: 14px;");
});