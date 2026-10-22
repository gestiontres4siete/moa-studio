# MÖA Studio — sitio web estático

Primera versión responsive para publicar gratis en GitHub Pages. La página incluye catálogo inicial, formulario de consulta que prepara un mensaje de WhatsApp, navegación móvil y SEO local básico.

## Antes de publicar

1. El WhatsApp comercial ya está configurado en `config.js` con el número proporcionado: `56944663330` (formato internacional de Chile, solo dígitos). Si cambia en el futuro, actualiza ese valor.
2. Revisa que los nombres de las experiencias y el catálogo sigan coincidiendo con el inventario y packs aprobados. Los precios no se publican en esta versión: el formulario invita a solicitar una propuesta.
3. El dominio `moastudio.cl` se incluye como dominio deseado en canonical, sitemap y datos estructurados. Para que estas direcciones funcionen, primero hay que registrar/poseer el dominio y configurarlo en GitHub Pages. Si se publica temporalmente en `usuario.github.io/repositorio`, actualiza esas URL antes de solicitar indexación.
4. Reemplaza el bloque de inspiración de la galería por fotografías reales de eventos cuando estén disponibles. El arte CSS es ilustrativo, no fotografía de inventario.

## Publicar gratis con GitHub Pages

1. Crea/inicia sesión en GitHub.
2. Crea un repositorio público llamado `moa-studio-web`.
3. Sube **el contenido** de esta carpeta (index.html, styles.css, script.js, config.js, robots.txt, sitemap.xml, README.md y `assets/`).
4. En el repositorio, entra a **Settings → Pages**. En “Build and deployment”, selecciona “Deploy from a branch”, rama `main`, carpeta `/ (root)` y guarda.
5. Espera a que GitHub Pages publique el sitio y abre la URL que te indique.
6. Para usar `moastudio.cl`, configúralo en **Settings → Pages → Custom domain** y añade los registros DNS indicados por GitHub en el proveedor donde se administra el dominio. Activa HTTPS cuando esté disponible.

## Formulario y reservas

El formulario es front-end: valida campos y abre WhatsApp con el texto preparado. No almacena datos ni crea reservas confirmadas. La disponibilidad, confirmación, pagos, políticas, privacidad y comprobantes requieren integraciones/backend antes de habilitar reservas reales.

## SEO local — checklist

- Verificar el dominio en Google Search Console y enviar `https://moastudio.cl/sitemap.xml` cuando el dominio esté activo.
- Crear o reclamar el Perfil de Empresa de Google, completar categoría, área de servicio, horarios, contacto y fotografías reales; verificar la empresa.
- Publicar fotografías reales optimizadas y textos específicos de los servicios que efectivamente ofrece MÖA en Antofagasta.
- Mantener nombre, teléfono, enlaces y datos comerciales consistentes en el sitio, Instagram y Perfil de Empresa.
- Google no garantiza una posición específica; el posicionamiento depende de la competencia, relevancia, reputación y evolución del sitio.

## Arquitectura futura sugerida

Mantener esta web como capa de presentación y añadir un endpoint/API para consultar disponibilidad y crear reservas; un proveedor de pagos para iniciar checkout y confirmar el pago mediante webhook; y un registro de reservas con estados (solicitada, pendiente de pago, confirmada, cancelada). No marcar una reserva como confirmada solo por volver desde la pasarela de pago. Definir antes políticas de abono, cancelación, daños, entrega/retiro y privacidad.
