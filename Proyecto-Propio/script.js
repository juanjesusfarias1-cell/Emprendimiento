// --- MANEJO DEL LOADER ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    }, 1200); // 1.2 segundos para asegurar elegancia visual
});

document.addEventListener('DOMContentLoaded', () => {
    
    // --- MENSAJE EN CONSOLA ---
    console.clear();
    console.log("%cJEMATIS | CREATIVE DEVELOPMENT", "color: #38bdf8; font-size: 25px; font-weight: bold; font-family: sans-serif;");
    console.log("%cDetectamos curiosidad técnica. ¡Eso nos encanta! Bienvenid@ a Jematis.", "color: gray; font-size: 14px;");
});