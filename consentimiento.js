// Este script centraliza la lógica de banner y analíticas
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.style.cssText = 'position:fixed; bottom:0; left:0; width:100%; background-color:#0d0d0d; border-top:1px solid #d4af37; padding:20px; text-align:center; z-index:9999; font-family:Georgia,serif;';
    banner.innerHTML = `
        <p style="color:#cccccc; font-size:0.9em; margin:0 0 15px 0;">Este tratado utiliza cookies de medición para fines analíticos de alta precisión. Al continuar, usted autoriza el seguimiento de su rastro para optimizar la calidad de nuestro sistema.</p>
        <button id="btn-accept" style="background-color:#d4af37; color:#050505; border:none; padding:10px 25px; cursor:pointer; font-weight:bold; margin:0 10px; border-radius:2px;">Aceptar</button>
        <button id="btn-reject" style="background-color:#1a1a1a; color:#d4af37; border:1px solid #d4af37; padding:10px 25px; cursor:pointer; margin:0 10px; border-radius:2px;">Rechazar</button>
    `;
    
    if(!localStorage.getItem('cookiesAccepted')) {
        document.body.appendChild(banner);
    }

    document.getElementById('btn-accept').onclick = function() {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.style.display = 'none';
        gtag('consent', 'update', {'analytics_storage': 'granted'});
    };

    document.getElementById('btn-reject').onclick = function() {
        localStorage.setItem('cookiesAccepted', 'false');
        banner.style.display = 'none';
    };
});
