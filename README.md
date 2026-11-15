# Simon Tree Services

Frontend en Astro para las dos variantes de Shapehub. Cada variante dispone de `/clients/`, `/connect/` y `/review/` bajo `/shapehub-1/` o `/shapehub-2/`. La ruta raíz redirige a Clients de OPC 1 para facilitar la revisión local.

Diseño de referencia vigente: [SIMON — MY en Figma](https://www.figma.com/design/3jYlKpq3itEC7yMEwmQJ9d/SIMON---MY?m=dev). Clients corresponde a los nodos `1:326` (OPC 1) y `1:58` (OPC 2). Sustituye al archivo anterior.

El contenido y los destinos se encuentran en `src/data/shapehub.ts`; los temas en `src/styles/themes.css`. Tailwind 4 se integra con `@tailwindcss/vite` y `@import "tailwindcss"`. Las utilidades semánticas se vinculan a las variables de cada variante mediante `@theme inline` en `src/styles/global.css`. El layout, espaciado, tipografía y responsive utilizan Tailwind; los estados y keyframes específicos del carrusel permanecen en CSS local.

Se utiliza Poppins mediante Google Fonts, por lo que el navegador necesita acceso al servicio para cargarla. Los SVG de Clients están exportados del archivo vigente en `public/icons/shapehub-1/` y `public/icons/shapehub-2/`, con sus colores y dimensiones originales.

## Desarrollo

El servidor debe iniciarse en segundo plano según `AGENTS.md`:

```sh
pnpm exec astro dev --background
pnpm exec astro dev status
pnpm exec astro dev logs
pnpm exec astro dev stop
```

Para compilar, ejecuta `pnpm build`.

Si pnpm detecta una discrepancia con el almacén de dependencias existente, se puede ejecutar el Astro instalado directamente sin reinstalar las dependencias:

```sh
node ./node_modules/astro/bin/astro.mjs build
```

El mismo ejecutable permite administrar el servidor con `dev --background`, `dev status`, `dev logs` y `dev stop`.

## Recursos pendientes

Consulta [recursos de Clients](docs/recursos-clients.md), [recursos de Connect](docs/recursos-connect.md) y [recursos de Review](docs/recursos-review.md) para las imágenes, enlaces, códigos QR, textos y widget pendientes. Se deben registrar las dimensiones reales de cada imagen antes de mostrarla.
