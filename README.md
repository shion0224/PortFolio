# Personal Portfolio Website

This is a personal portfolio website built with React, TypeScript, and Tailwind CSS. It's designed to showcase your profile, projects, research, and contact information in a clean, modern, and responsive layout. The theme is white with green accents, as specified.

## Features

*   **Hero Section**: Displays your name, a short tagline, and Call-to-Action buttons for GitHub and X (Twitter).
*   **About Section**: Includes a profile summary, your technology stack, and career interests.
*   **Projects Section**: Showcases your projects in a card-style list, including titles, technologies used, and GitHub links.
*   **Research Section**: Details your university research (e.g., using BERT for course recommendations).
*   **Contact Section**: Provides links to your GitHub, Twitter, and Email.
*   **Responsive Design**: Adapts to different screen sizes for optimal viewing on desktop and mobile devices.
*   **Sticky Navbar**: For easy navigation between sections.
*   **Themed Icons**: Consistent iconography for links and sections.

## Tech Stack

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A superset of JavaScript that adds static typing.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **ES6 Modules**: Modern JavaScript module system.
*   **Heroicons (Feather Icons used here)**: SVG icons are embedded as React components for easy styling and use.

## File Structure

```
.
├── README.md               # This file
├── App.tsx                 # Main application component, orchestrates sections
├── components/             # Directory for React components
│   ├── AboutSection.tsx    # About me section
│   ├── ContactSection.tsx  # Contact information section
│   ├── Footer.tsx          # Site footer
│   ├── HeroSection.tsx     # Hero section (landing view)
│   ├── Navbar.tsx          # Navigation bar
│   ├── ProjectCard.tsx     # Component for individual project display
│   ├── ProjectsSection.tsx # Section to display all projects
│   ├── ResearchSection.tsx # Research details section
│   └── Section.tsx         # Reusable section wrapper component
├── constants.tsx           # Global constants (social links, nav links, SVG icons)
├── index.html              # Main HTML entry point, includes Tailwind CSS setup
├── index.tsx               # React application entry point
├── metadata.json           # Application metadata (name, description)
└── types.ts                # TypeScript type definitions
```

## Getting Started

### Prerequisites

*   A modern web browser (e.g., Chrome, Firefox, Safari, Edge).

### Running the Application

1.  Clone this repository (if applicable) or ensure all files are in the same directory.
2.  Open the `index.html` file directly in your web browser.

No complex build steps are required for local viewing as it's a static client-side React application.

## Customization

Most personal information and project details are centralized or clearly marked for easy updates:

1.  **Personal Information & Social Links**:
    *   Open `constants.tsx`:
        *   Update `GITHUB_PROFILE_URL`, `TWITTER_PROFILE_URL`, and `EMAIL_ADDRESS` with your actual links and email.
    *   Open `components/Navbar.tsx`:
        *   Replace `"Your Name"` with your actual name.
    *   Open `components/HeroSection.tsx`:
        *   Replace `"Your Name"` with your actual name.
        *   Update the tagline: `"Aspiring Software Engineer | Full-Stack Developer | AI Enthusiast"`.
        *   Change the profile image URL `https://picsum.photos/150/150?grayscale` to your own image.
    *   Open `components/AboutSection.tsx`:
        *   Update the profile summary text.
        *   Change the profile image URL `https://picsum.photos/seed/profile/300/300` to your own image.
        *   Update the `techStack` array with your skills.
        *   Update career interest text.
    *   Open `components/Footer.tsx`:
        *   Replace `"Your Name"` with your actual name.

2.  **Projects**:
    *   Open `components/ProjectsSection.tsx`:
        *   Modify the `projectsData` array. Each object in the array represents a project.
        *   Update `title`, `description`, `techStack`, `githubLink`, and `liveLink` for each project.
        *   Replace placeholder GitHub links (e.g., `GITHUB_PROFILE_URL + "/sleep-peep-example"`) with actual links.
        *   Update internship company name in the "Sleep Peep" project description.
        *   Project images are currently using `picsum.photos` (e.g., `https://picsum.photos/seed/${project.id}/400/200`). Replace these with URLs to your actual project images or place images in an `assets` folder and reference them locally.

3.  **Research Section**:
    *   Open `components/ResearchSection.tsx`:
        *   Update the research title, university name (`[Your University Name]`), description, and keywords.
        *   If you have a publication or presentation link, uncomment and update the link at the bottom.

4.  **Navigation Links**:
    *   Open `constants.tsx`:
        *   Modify the `NAV_LINKS` array if you want to change the navigation items or their corresponding section IDs.

5.  **Styling**:
    *   Colors are defined in `index.html` within the `tailwind.config` script block:
        ```javascript
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                'brand-green': '#4CAF50',
                'brand-green-dark': '#388E3C',
                'brand-green-light': '#F0F4F3',
              }
            }
          }
        }
        ```
        You can adjust these hex codes to change the theme.
    *   General layout and styling are done using Tailwind CSS utility classes directly in the `.tsx` components.

## Deployment

This website is a static build, meaning it consists of HTML, CSS, and JavaScript files that can be served directly. It is compatible with any static site hosting service.

**Recommended Platforms:**

*   **Vercel**: Offers seamless deployment for frontend projects. Connect your Git repository, and Vercel will build and deploy it.
*   **Netlify**: Similar to Vercel, provides easy deployment and hosting for static sites.
*   **GitHub Pages**: Host directly from your GitHub repository.
*   **AWS S3**: Can be configured to host static websites.
*   **Firebase Hosting**: Another excellent option for hosting static assets.

Since there's no server-side logic or database, deployment is straightforward.

---

This README should provide a good starting point for anyone looking to understand or modify your portfolio.
