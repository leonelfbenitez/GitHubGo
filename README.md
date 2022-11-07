# GitHubGo - Team10

![GitHub contributors](https://img.shields.io/github/contributors/CSC4350-TR/GitHubGo?color=palevioletred) ![GitHub last commit](https://img.shields.io/github/last-commit/CSC4350-TR/GitHubGo?color=mediumorchid) ![GitHub deployments](https://img.shields.io/github/deployments/CSC4350-TR/GitHubGo/github-pages?label=deploy&color=mediumseagreen)

---

## Project Setup

#### Node.js

This project requires Node.js. To check if your device has node.js installed, open your terminal and type:

```console
node -v
```

- If it is displaying any version, then it is installed!

- Otherwise, install [Node.js](https://nodejs.org/en/download/)

<br/>

#### Package Manager

For this project, we are using yarn as our package manager. Inside your terminal, type:

```console
npm i -g yarn
```

<br/>

#### Clone Project

Go to the folder where you want to clone this project, and type the following in your terminal:

```console
git clone https://github.com/CSC4350-TR/GitHubGo.git
```

<br />

#### Dependencies installation

Go to your project folder and write the following in your terminal:

```console
yarn
```

- This will install all the dependencies that are in the package.json file

<br/>

#### Run Project

Open your project folder and type this in your terminal:

```console
yarn start
```

The website will run on `localhost:3000`

<br/>

#### Website Deployment

To deploy the lastest changes to the production website, run:

```console
yarn run deploy
```

#### Note

- **Always run the following commands whenever you start working on the project or change a git branch to get fresh changes**

```console
git pull
yarn
```

---

## Project Overview

#### Styling

We are using TailwindCSS for styling and its plugin - Tailwind Elements - to use pre-built UI components.

Read their docs to learn more about them:

- TailwindCSS [docs](https://tailwindcss.com/docs/installation)

- Tailwind Elements [docs](https://tailwind-elements.com/quick-start/)

<br />

#### Extensions for VS Code

- **ESLint** `dbaeumer.vscode-eslint`
- **ES7+ React/Redux/React-Native snippets** `dsznajder.es7-react-js-snippets`
- **Prettier - Code Formatter** `esbenp.prettier-vscode`

<br/>

#### Project Structure

| Path                | Description           |
| :------------------ | :-------------------- |
| **/public**         | Static files          |
| **/src**            | Source code           |
| **/src/assets**     | Images and styles     |
| **/src/components** | Functional components |
| **/src/pages**      | Routes                |
