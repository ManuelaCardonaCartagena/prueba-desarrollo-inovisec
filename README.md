# INOVISEC Interactive Map

Maqueta interactiva desarrollada como parte de la prueba técnica de INOVISEC.

El proyecto simula una plataforma de monitoreo que permite iniciar sesión, visualizar diferentes casos mediante un mapa interactivo y consultar la información detallada del caso seleccionado en un panel lateral.

La solución fue desarrollada priorizando la reutilización de componentes, separación de responsabilidades, mantenibilidad y una experiencia de usuario clara y consistente.

## Tecnologías

- React
    Se utilizó React porque la interfaz está compuesta por diferentes elementos reutilizables y requiere actualizar dinámicamente la información mostrada al usuario.

    React permite dividir la aplicación en componentes independientes, facilitando la reutilización y el mantenimiento del código. Además, su manejo de estado permite actualizar el panel de información cuando el usuario selecciona diferentes casos en el mapa.

- TypeScript
    Se utilizó TypeScript para definir y tipar los modelos de datos, las propiedades (props) de los componentes y los estados utilizados dentro de la aplicación.

    Esto permite detectar errores durante el desarrollo, mejorar el autocompletado del editor y facilitar el mantenimiento y escalabilidad del proyecto a medida que aumente su complejidad.

- Vite
    Se utilizó Vite como herramienta de desarrollo y construcción del proyecto.

    Vite permite disponer de un entorno de desarrollo rápido, con recarga inmediata durante la implementación de cambios, además de proporcionar un proceso de compilación optimizado para generar la versión final de la aplicación.

    También simplifica la configuración inicial del proyecto y la integración con React y TypeScript.

- Lucide React
    Se utilizó Lucide React para la implementación de los iconos de la interfaz.

    Esta librería permite utilizar iconos consistentes y personalizables directamente como componentes de React, evitando tener que crear manualmente los iconos o utilizar imágenes independientes.

    Se utilizó principalmente para elementos como: Notificaciones, botones de acción, estados, elementos de navegación y acciones de apertura y cierre de paneles.

- CSS puro
    Se utilizó CSS puro para construir los estilos y la composición visual de la interfaz.

    Esta decisión permite tener un control directo sobre colores, tipografía, espaciados, tamaños, bordes, sombras, estados de los elementos y comportamiento responsive, sin incorporar una librería adicional de estilos. Además, facilita mantener la interfaz visualmente alineada con la guía proporcionada

## Instalación

```bash
npm install
npm install lucide-react
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Luego abrir la URL que muestra Vite, normalmente:

http://localhost:5173

## Compilar

```bash
npm run build
```

## Funcionalidades

- Pantalla de login con validación visible.
- Autenticación simulada.
- Dashboard de monitoreo.
- Mapa visual simulado.
- Marcadores interactivos.
- Selección de casos.
- Panel lateral dinámico.
- Búsqueda por nombre, código, categoría y ciudad.
- Filtros por estado y prioridad.
- Contador de resultados.
- Apertura/cierre del panel de información.
- Visualización ampliada de imagen.
- Estados de casos.
- Diseño responsive para escritorio y tamaños menores.
- Componentes reutilizables.

## Credenciales de inicio

Nombre de usuario: Admin
Contraseña: Inovisec-123

## Decisiones de diseño

La interfaz toma como base la guía entregada por INOVISEC:

- Primario: `#0B1F2D`
- Secundario: `#1EC8C8`
- Énfasis: `#F5A623`

Se utiliza una paleta neutra para superficies, bordes y textos secundarios.

## Arquitectura y organización

La interfaz se separó en diferentes componentes y responsabilidades para evitar concentrar toda la lógica en un único componente monolítico.

Esta estructura facilita: El mantenimiento del código, la reutilización de componentes, la identificación y corrección de errores, las pruebas individuales, la incorporación de nuevas funcionalidades y la escalabilidad futura de la aplicación.
