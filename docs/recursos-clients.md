# Recursos pendientes para Clients

La variante del bloque SHAPE HUB 1 está disponible en `/bio/`. Reutiliza las imágenes y los enlaces compartidos indicados abajo; su carrusel usa tarjetas de 218 × 213 px con un espacio de imagen de 200 × 160 px. El formulario se integrará como widget externo cuando se facilite.

Ambas variantes comparten los mismos recursos de contenido. El usuario coloca las imágenes; no se han descargado ni sustituido por imágenes de muestra.

## Imágenes

| Recurso | Ruta propuesta desde la raíz del proyecto |
| --- | --- |
| Logo transparente de Simon | `public/images/shared/logo-simon-tree-services.png` |
| Full Tree Service | `public/images/shared/services/full-tree-service.webp` |
| Brush Cutting | `public/images/shared/services/brush-cutting.webp` |
| Stump Grinding | `public/images/shared/services/stump-grinding.webp` |
| Storm Clean-Up | `public/images/shared/services/storm-clean-up.webp` |
| Tree Removal | `public/images/shared/services/tree-removal.webp` |
| Emergency Services | `public/images/shared/services/emergency-services.webp` |
| Mulch (etiqueta de Figma: MULTCH) | `public/images/shared/services/mulch.webp` |
| Firewood | `public/images/shared/services/firewood.webp` |
| Fondo fotográfico de OPC 2 | `public/images/shapehub-2/tree-canopy.webp` |

El logo tiene un espacio de diseño de 160 × 61 px. Las fotografías ocupan contenedores de 234 × 187,2 px, proporción 5:4. Estas medidas son del diseño, no de los archivos. Al recibir cada imagen se deben medir sus dimensiones intrínsecas y registrarlas en los datos antes de renderizarla. Se puede conservar otro nombre o formato si el usuario entrega un original existente.

## SVG de Figma incorporados

Fuente vigente: [SIMON — MY](https://www.figma.com/design/3jYlKpq3itEC7yMEwmQJ9d/SIMON---MY?m=dev). Los SVG de Clients se exportaron directamente de los nodos originales del archivo, sin modificar el diseño ni redibujar recursos.

Ya están conectados en `public/icons/shapehub-1/` y `public/icons/shapehub-2/`: `location.svg`, `badge.svg`, `facebook.svg`, `instagram.svg`, `website.svg`, `contact.svg`, `services.svg`, `arrow-primary.svg` y `arrow-secondary.svg`. Cada variante conserva sus colores, fondos y dimensiones de exportación. Las imágenes raster siguen pendientes del usuario.

## Enlaces y widget

Pendientes de proporcionar por el usuario: Facebook, Instagram y Website. Los controles sin destino permanecen deshabilitados; no llevan URLs de ejemplo. Save Contact descarga una tarjeta vCard con los datos disponibles en `src/data/contact.ts`; los demás campos quedan vacíos. El diseño actualizado de OPC 1 ya no muestra el acceso Our Services en estas páginas.

El bloque de presupuesto muestra únicamente los dos textos aprobados. No se han creado campos, botón de envío ni un iframe con destino ficticio. El widget se integrará cuando se proporcione su código y condiciones de tamaño.

## Fuentes

Poppins Regular 400 y SemiBold 600. La descarga de archivos locales no estuvo disponible en la red del entorno; la configuración utiliza Google Fonts. El navegador necesita acceso a Google Fonts para mostrarlas. No hay archivos locales ficticios.

## Fuera de esta entrega

Connect se documenta en [recursos de Connect](recursos-connect.md) y Review en [recursos de Review](recursos-review.md). La única animación prevista en Clients es el carrusel continuo solicitado, con alternativa para movimiento reducido.
