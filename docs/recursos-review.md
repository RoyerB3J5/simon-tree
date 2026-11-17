# Review: flujo y recursos pendientes

Rutas: `/review/` para SHAPE HUB 1 y `/shapehub-1/review/` y `/shapehub-2/review/` para las opciones existentes.

Referencia vigente: [SIMON — MY](https://www.figma.com/design/3jYlKpq3itEC7yMEwmQJ9d/SIMON---MY?m=dev). Frames de Review: OPC 1 `1:274`, OPC 2 `1:6`.

## Flujo implementado

- Estado inicial: ninguna valoración seleccionada; cinco estrellas con borde amarillo y sin relleno.
- En `/review/`, una a tres estrellas muestran el widget externo `FormReview`; cuatro o cinco muestran el texto para copiar. La acción de Google permanece oculta hasta nueva indicación.
- En las rutas OPC 1 y OPC 2, una a cuatro estrellas no muestran contenido adicional y cinco muestran la valoración excelente, el texto para copiar y la acción de Google.
- El texto se elige aleatoriamente una vez durante la visita a la página y se conserva al cambiar la valoración y volver a cinco.
- La copia se ejecuta únicamente al pulsar Copy text. Solo se comunica éxito cuando la promesa del portapapeles se resuelve; ante error, se ofrece selección y copia manual.
- Copiar no abre Google ni envía contenido. La navegación se ejecutará por separado cuando exista un destino configurado.
- Las valoraciones no se envían ni se guardan en un servicio externo.

## Datos pendientes

`src/data/review.ts` contiene:

- `googleReviewUrl`: actualmente `null`. Sustituir por el enlace real de Google Business Profile que proporcione el usuario. La acción queda deshabilitada mientras no exista ese enlace; en `/review/` también permanece oculta hasta nueva indicación.
- `reviewTexts`: lista extensible de textos compartidos por las variantes. La selección usa los textos que ya están registrados en el archivo.

El logo y el fondo de OPC 2 se reutilizan de la configuración compartida, según [recursos de Clients](recursos-clients.md).

## SVG

Exportaciones originales por variante en `public/icons/shapehub-1/` y `public/icons/shapehub-2/`: `review-google.svg`, `review-score.svg`, `review-star-1.svg`, `review-star-2.svg`, `review-star-3.svg`, `review-excellent.svg`, `review-copy.svg`, `review-google-action.svg` y `review-arrow.svg`.

Las cinco estrellas siguen el orden de formas del diseño: 1, 2, 3, 3, 1. Los archivos `review-star-1-outline.svg`, `review-star-2-outline.svg` y `review-star-3-outline.svg` son variantes locales de esos vectores, con relleno eliminado y trazo amarillo, preparadas conforme a la solicitud expresa del usuario para el estado inicial. Los SVG rellenos se conservan sin cambios y no se modificó el diseño de Figma.

No se añaden animaciones, efectos hover, formularios ni dependencias.
