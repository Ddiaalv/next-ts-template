# Typescript Next.js template

Template creado a partir del proyecto de [Next.js](https://nextjs.org/) generado por medio de [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) donde se utiliza Typescript y se añaden nuevas configuraciones y dependencias.

## Ejemplo live

[Template en producción](https://next-typescript-template-kf2b3xib6.vercel.app/)

## Empezando...

Para iniciar el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

## Tecnologías

| Nombre                                                   | Detalles                                                                   |
| -------------------------------------------------------- | -------------------------------------------------------------------------- |
| 📦[Webpack](https://webpack.js.org/)                     | Bundler para aplicaciones web                                              |
| ⚛️[React](https://es.reactjs.org/)                       | JavaScript Framework                                                       |
| ⏭️[Next](https://nextjs.org/)                            | React Framework                                                            |
| 🌐[Typescript](https://es.wikipedia.org/wiki/TypeScript) | Lenguaje de programación superconjunto de Javascript                       |
| 👁️[Eslint](https://eslint.org/)                          | Linter para controlar errores en nuestro código                            |
| 🦋[Prettier](https://prettier.io/)                       | Formatea nuestro código                                                    |
| 🐺[Husky](https://www.npmjs.com/package/husky)           | Comprueba errores en nuestro código para evitar errores en nuestros commit |
| 🚫[Lint-staged](https://github.com/okonet/lint-staged)   | Ejecuta los linters para evitar errores antes de hacer un commit           |
| 💅[Emotion](https://emotion.sh/)                         | CSS in JS - Permite usar "Styled-Components"                               |
| 🧪[Jest](https://jestjs.io/)                             | Framework de testing                                                       |
| 🐐[Testing-library-react](https://testing-library.com/)  | Testing para nuestro UI                                                    |
| 🌲[Cypress](https://www.cypress.io/)                     | Testing end-to-end                                                         |
| 🧾[Hygen](https://www.hygen.io/)                         | Generador de código                                                        |
| 📕[Storybook](https://storybook.js.org/)                 | Herramienta de desarrollo de interfaces de usuario por componentes         |

## Scripts de npm

| Comando           | Detalles                                                                   |
| ----------------- | -------------------------------------------------------------------------- |
| `dev`             | Inicia server de desarrollo                                                |
| `build`           | Genera nuestra web                                                         |
| `lint`            | Comprueba/Corrige si hay errores en nuestro código Javascript              |
| `format`          | Comprueba/Formatea nuestro codigo                                          |
| `precommit`       | Comprueba si hay errores en los staged changes antes de realizar un commit |
| `test`            | Ejecuta test                                                               |
| `test:e2e`        | Ejecuta tests end-to-end                                                   |
| `new:fc`          | Genera un componente funcional con Emotion y "Styled-Components"           |
| `storybook`       | Inicia servidor de storybook                                               |
| `build-storybook` | Construye el contenido de nuestro storybook                                |
