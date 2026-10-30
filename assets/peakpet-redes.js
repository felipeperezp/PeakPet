/* PEAKPET · redes sociales.
   Coloca la dirección oficial de Instagram entre las comillas de INSTAGRAM_URL.
   Ejemplo de formato (NO es una cuenta confirmada): https://www.instagram.com/NOMBRE_DE_USUARIO/
   Perfil oficial configurado: @peakpet.cl. Los íconos enlazan al perfil público.
*/
(function () {
  'use strict';
  const INSTAGRAM_URL = 'https://www.instagram.com/peakpet.cl/';
  function enable() {
    const url=INSTAGRAM_URL.trim();
    if (!/^https:\/\/(?:www\.)?instagram\.com\/[A-Za-z0-9._]+\/?(?:\?.*)?$/i.test(url)) return;
    document.querySelectorAll('[data-peakpet-instagram]').forEach(function (a) {
      a.href=url;
      a.removeAttribute('hidden');
      a.setAttribute('target','_blank');
      a.setAttribute('rel','noopener noreferrer');
    });
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',enable);
  else enable();
})();
