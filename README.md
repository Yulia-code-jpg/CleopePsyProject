# CleopePsyProject

## Descripción
CleopePsyProject
Este es un proyecto web para la práctica psicológica Cleope. El sitio incluye información sobre servicios, datos de contacto y un formulario de contacto.
Cleope es un sitio web de una sola página (Landing Page) para una psicóloga, desarrollado como proyecto académico dentro de un curso de diseño web y frontend.
El proyecto demuestra el uso de HTML semántico, CSS moderno, JavaScript básico, así como el cumplimiento de los criterios de rendimiento, accesibilidad y SEO.

## Autora
Iuliia Bautina
Curso: 16–19 Diseño Web HTML MAD/ON – Octubre 2025
Profesor: Eduardo Fierro
Centro educativo: CEI Madrid

## Estructura del proyecto
- `index.html` - Página principal del sitio
- `favicon.ico`  - Archivo de icono (favicon) del sitio web
- `assets/` - Carpeta con recursos (imágenes, video)
- `css/` - Archivos CSS
  - `index.css` - Estilos principales (# CSS original con comentarios)
  - `index.min.css` - Estilos minificados (# CSS optimizado (sin comentarios))
- `js/` - Archivos JavaScript
  - `index.js` - Script principal

## Demo en vivo
https://yulia-code-jpg.github.io/CleopePsyProject/

## Objetivos del proyecto
- Practicar HTML5, CSS3 y JavaScript
- Cumplir con los estándares W3C
- Optimizar la web según Lighthouse
- Garantizar Accesibilidad (WCAG)
- Aplicar una arquitectura clara y una metodología consistente (BEM)

## Tecnologías utilizadas
- HTML5 (estructura semántica)
- CSS3
  - Custom Properties (:root)
  - Flexbox y Grid
  - Metodología BEM
- JavaScript (Vanilla JS)
- SVG Sprite (<symbol>)
- Lighthouse / Validadores W3C

## HTML — características principales
- Uso de etiquetas semánticas:
  - header, main, section, article, footer
- Jerarquía correcta de encabezados (h1–h3)
- Todos los enlaces contienen href y title
- Formularios con label asociados mediante for
- Uso de <picture> y <source> para imágenes responsive
- Vídeos implementados con <video> + <source> (webm + mp4)
- Iconos SVG optimizados mediante sprite (<symbol>)
- Validación correcta en W3C HTML Validator

## CSS — arquitectura y calidad
- Metodología BEM
- Colores y medidas definidos con CSS Custom Properties
- Uso mayoritario de rem, em y %
- Clases sin números (grid--three, grid--two)
- Uso de propiedades shorthand (margin, padding)
- Sin !important
- z-index limitado (≤ 100)
- Código organizado y comentado
- Validación correcta en W3C CSS Validator

## JavaScript
- Sin JavaScript intrusivo (onclick, etc.)
- Uso de addEventListener
- use strict
- Script cargado con defer
- Lazy loading de vídeos mediante IntersectionObserver
- Modal de pago demostrativo usando <dialog>
- Nomenclatura clara (camelCase)
- Código estructurado y comentado

## Accesibilidad (Accessibility)
- Contraste de colores adecuado (WCAG)
- Uso correcto de aria-label
- Clase .visually-hidden para textos accesibles
- Estados hover, focus y active en elementos interactivos
- Lighthouse Accessibility = 100

## Rendimiento (Performance)
- Lighthouse (Mobile):
  - Performance: 92 (El rendimiento obtiene una puntuación de 92 principalmente por el peso de los archivos de vídeo.)
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
- Métricas principales:
  - First Contentful Paint ≈ 1.0 s
  - Cumulative Layout Shift = 0
  - Carga diferida de imágenes y vídeos

## Validación
- HTML validado (W3C)
- CSS validado (W3C)
- CSS Code Quality (Project Wallace) — puntuación alta
- Lighthouse sin errores críticos

## Estado del proyecto
- Proyecto finalizado
- Listo para evaluación
- Proyecto académico (versión demo, sin pagos reales)
