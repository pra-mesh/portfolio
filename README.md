# Pramesh Pradhan - Full Stack Developer Portfolio

This is a personal portfolio website showcasing the skills, projects, and experience of Pramesh Pradhan, a Full Stack Developer specializing in modern web technologies. The site is designed to be responsive, visually appealing, and provide a comprehensive overview of the developer's capabilities.

## Features

- **Dynamic Hero Section**: Engaging introduction with animated terminal-like code snippets and social links.
- **About Me**: Detailed overview of professional experience, expertise, and achievements.
- **Skills Showcase**: Categorized display of technical skills and tools.
- **Project Portfolio**: Showcase of key projects with descriptions, technologies used, and links to live demos and GitHub repositories.
- **Contact Form**: A functional contact form powered by EmailJS for direct communication.
- **Responsive Design**: Optimized for various screen sizes, from mobile devices to large desktops.
- **Dark/Light Mode**: User-friendly theme toggling for preferred viewing experience.
- **Resume Download**: Direct download option for the developer's resume.

## Tech Stack

This project is built using the following core technologies:

- **Frontend**:
  - [React](https://react.dev/) (v19.1.0) - A JavaScript library for building user interfaces.
  - [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds static typing.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
  - [Vite](https://vitejs.dev/) - A fast build tool that provides a lightning-fast development experience.
- **Dependencies**:
  - `@emailjs/browser` - For sending emails via the contact form.
  - `lucide-react`, `react-icons` - For various icons used throughout the UI.
  - `clsx` - A utility for conditionally joining class names.

## Requirements

To run this project locally, you need to have the following installed:

- Node.js (LTS version recommended)
- npm (Node Package Manager) or Yarn

## How to Run

Follow these steps to set up and run the project on your local machine:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

   (Replace `<repository-url>` with the actual URL of your GitHub repository)

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**:
   This project uses EmailJS for the contact form. You need to set up your EmailJS service, template, and public key. Create a `.env` file in the root of your project (e.g., `envexample` file) and add the following:

   ```env
   VITE_EMAILJS_SERVICE_ID="YOUR_SERVICE_ID"
   VITE_EMAILJS_TEMPLATE_ID ="YOUR_TEMPLATE_ID"
   VITE_EMAILJS_PUBLIC_KEY="YOUR_PUBLIC_KEY"
   ```

   Replace the placeholder values with your actual EmailJS credentials.

4. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   This will start the development server, usually at `http://localhost:5173`.

5. **Build for production**:
   To create a production-ready build, run:

   ```bash
   npm run build
   # or
   yarn build
   ```

   This will generate optimized static assets in the `dist` directory.

## Potential Upgrades

Here are some areas where the project could be further enhanced:

- **Robust Client-Side Form Validation**: Implement more comprehensive client-side validation for the contact form fields (e.g., email format, minimum/maximum lengths) to provide immediate user feedback and improve data quality.
- **Advanced Image Optimization**: Utilize `srcset` and `sizes` attributes for responsive images and implement lazy loading for images outside the initial viewport to further reduce page load times and improve performance.
- **Enhanced Accessibility (ARIA)**: Conduct a thorough review of all interactive elements to ensure proper ARIA attributes are used, making the site more accessible to users with disabilities and assistive technologies.
- **Animations and Transitions**: Refine existing animations and add new subtle transitions to enhance the user experience without compromising performance.
- **SEO Enhancements**: Implement more detailed meta tags, structured data (JSON-LD), and sitemaps to improve search engine visibility.
- **Content Management**: Consider integrating a headless CMS for easier content updates, especially for projects and skills data, without requiring code changes.
- **Testing**: Add unit and integration tests for critical components and functionalities to ensure reliability and prevent regressions.
