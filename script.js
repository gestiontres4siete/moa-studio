(() => {
  const config = window.MOA_CONFIG || {};
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  menuButton?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  document.getElementById('year').textContent = new Date().getFullYear();
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const localToday = new Date();
    dateInput.min = `${localToday.getFullYear()}-${String(localToday.getMonth()+1).padStart(2,'0')}-${String(localToday.getDate()).padStart(2,'0')}`;
  }

  document.querySelectorAll('[data-package]').forEach(link => link.addEventListener('click', () => {
    const packageSelect = document.getElementById('package');
    if (packageSelect) packageSelect.value = link.dataset.package;
  }));

  const form = document.getElementById('inquiry-form');
  const feedback = document.getElementById('form-feedback');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = [
      `Hola, MÖA Studio. Quisiera consultar por mi evento.`,
      `Nombre: ${data.get('name')}`,
      `Tipo de evento: ${data.get('eventType')}`,
      `Cantidad de personas: ${data.get('guests')}`,
      `Fecha estimada: ${data.get('date') || 'Por definir'}`,
      `Comuna / sector: ${data.get('commune') || 'Por definir'}`,
      `Experiencia de interés: ${data.get('package') || 'Por definir'}`,
      `Detalles: ${data.get('details') || 'Sin detalles adicionales'}`
    ];
    const message = lines.join('\n');
    const phone = String(config.whatsappNumber || '').replace(/\D/g, '');
    if (!phone || phone.includes('XXXXXXXX') || phone.length < 10) {
      feedback.textContent = 'El formulario está listo, pero falta configurar el número comercial de WhatsApp en config.js antes de publicar. Copia estos datos y envíalos por el canal de contacto que prefieras.';
      const oldPreview = document.getElementById('message-preview');
      if (oldPreview) oldPreview.remove();
      const preview = document.createElement('textarea');
      preview.id = 'message-preview';
      preview.readOnly = true;
      preview.rows = 7;
      preview.value = message;
      preview.setAttribute('aria-label', 'Mensaje preparado para copiar');
      feedback.insertAdjacentElement('afterend', preview);
      preview.style.cssText = 'width:100%;margin-top:10px;padding:10px;border:1px solid #ded7cb;background:#fffdf9;color:#26352f;font:12px/1.6 monospace;';
      preview.focus();
      preview.select();
      return;
    }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    feedback.textContent = 'Tu consulta está preparada en WhatsApp. Revisa el mensaje y pulsa Enviar para contactarnos.';
  });
})();
