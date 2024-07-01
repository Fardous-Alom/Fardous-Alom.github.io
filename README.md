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
   Initialize Tailwind CSS by installing it via NPM and creating the necessary configuration files.This will create a tailwind.config.js file at the root of your project.
   ```bash
      npm install -D tailwindcss
      npx tailwindcss init

4. Configure Tailwind CSS
   Add the paths to all of your template files in the content section of your tailwind.config.js file. Add Tailwind to your CSS file.
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

5. Add the following lines to your CSS file.
   ```bash
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   Build your CSS

5. Build your Tailwind CSS file by running the following command.This will generate a dist/output.css file that you can include in your HTML.
   ```bash
   npx tailwindcss -i ./src/input.css -o ./style.css --watch

6. Run the development server
   You can run a local development server to view your website.
   ```bash
   npm run dev