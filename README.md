# Overview

This is a professional portfolio website to showcase my skills, projects, and experiences. The website is built with HTML and Tailwind CSS, providing a modern, responsive, and visually appealing design.

## Table of Contents

- [Preview](#Preview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Preview

Have a live preview of the website [here](https://fardous-alom.github.io/).

## Technologies Used

- HTML5
- JavaScript
- Tailwind CSS
- Node.js
- NPM (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Fardous-Alom/Fardous-Alom.github.io.git

2. Install dependencies
   Install the necessary Node.js packages.
   ```bash
   npm install

3. Install Tailwind CSS
   Install tailwindcss via npm, and create your tailwind.config.js file.
   ```bash
      npm install -D tailwindcss
      npx tailwindcss init

4. Configure your template paths
   Add the paths to all of your template files in your tailwind.config.js file.
   ```bash
   // tailwind.config.js
   module.exports = {
   content: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
   ],
   theme: {
      extend: {},
   },
   plugins: [],
   }

5. Add the Tailwind directives to your CSS
   Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
   ```bash
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   Build your CSS

5. Start the Tailwind CLI build process
   Run the CLI tool to scan your template files for classes and build your CSS.
   ```bash
   npx tailwindcss -i ./src/input.css -o ./style.css --watch

6. Run the development server
   You can run a local development server to view your website.
   ```bash
   npm run dev
