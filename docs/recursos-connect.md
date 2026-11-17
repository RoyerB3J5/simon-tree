# Connect: recursos e integración

Rutas: `/shapehub-1/connect/` y `/shapehub-2/connect/`.

La nueva variante del bloque SHAPE HUB 1 está disponible en `/connect/`. Usa el logo existente de `public/images/shared/logo-simon-tree-services.webp` y los SVG originales de Figma en `public/icons/shapehub/`. Sus dos diálogos reutilizan los recursos QR definidos en `src/data/connect.ts`.

Referencia vigente: [SIMON — MY](https://www.figma.com/design/3jYlKpq3itEC7yMEwmQJ9d/SIMON---MY?m=dev). Pantallas Connect: OPC 1 `1:478`, OPC 2 `1:144`. Modal de información: OPC 1 `1:412`, OPC 2 `1:205`.

## Recursos incorporados

Se reutilizan `ProfileIdentity`, `ProfileLinks`, Poppins y el layout de Clients. La ciudad es Atlanta, Georgia en ambas variantes, conforme a la decisión del usuario.

SVG originales exportados por variante en `public/icons/shapehub-1/` y `public/icons/shapehub-2/`:

- `qr-heading.svg`: icono decorativo de encabezado de 24 × 24.
- `qr-card.svg`: icono decorativo de las tarjetas de 80 × 80. No es un QR escaneable.
- `close.svg`: icono de cierre de 16 × 16.

Los SVG conservan sus colores, fondos y dimensiones de exportación.

## Imágenes QR

| Recurso | Ruta sugerida |
| --- | --- |
| QR de información | `public/images/shared/qr/info.png` |
| QR de feedback | `public/images/shared/qr/feedback.png` |

Las imágenes están registradas en `src/data/connect.ts` con sus dimensiones intrínsecas de 917 × 917. El marco visible del modal mide 200 × 199 en Figma: esa proporción define el contenedor, no los atributos `width` y `height` del archivo.

Un QR necesita verse completo para ser escaneable; se conserva su margen de seguridad y no se recorta el archivo final. No se descarga ni se utiliza el código de ejemplo de Figma como destino real.

También siguen pendientes los recursos compartidos de Clients: logo y fondo fotográfico OPC 2, y los destinos de redes y accesos. Consultar [recursos de Clients](recursos-clients.md).

## Comportamiento

Las tarjetas abren un diálogo nativo con cierre, Escape, gestión de foco y bloqueo del desplazamiento de fondo. No se añaden animaciones ni efectos hover.

Figma representa el modal INFO. FEEDBACK utiliza la misma composición del diálogo, con su propio título, descripción e imagen; es una adaptación funcional del componente compartido, no un segundo frame observado en Figma.

Review se documenta en [recursos de Review](recursos-review.md).
