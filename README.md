# Small Business Website Starter

A clean, responsive React + Vite starting point for a small business website. The included sample content is for a carpentry business; change it to fit the business you are building for.

## Open it in VS Code

1. Download and unzip this folder.
2. In VS Code, choose **File → Open Folder…** and select `carpentry-starter` (the folder containing this README and `package.json`).
3. Install [Node.js](https://nodejs.org/) if you do not already have it. Use the current LTS release.
4. In VS Code, open **Terminal → New Terminal** and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local address Vite prints in the terminal (usually `http://localhost:5173`). Leave the terminal running while you work. Save a file to see changes in the browser.

To make a production build, run `npm run build`. The finished site files will be in `dist/`. To preview that build locally, run `npm run preview`.

## What to customize first

### 1. Business details and words

Open `src/siteData.js`. This is the best place to start. Replace the sample name, tagline, description, phone, email, service area, years of experience, services, and project titles. Keep the property names and the overall JavaScript structure intact.

The navigation links use section IDs already on the page. If you change a link, make sure its matching section still has the same `id`.

### 2. Project photos

Put image files in `public/images/`, then set each project's `image` in `src/siteData.js`, for example:

```js
image: '/images/kitchen-project.jpg',
```

Replace the `alt` text with a short description of the actual photo. Use photos the business has permission to publish, and resize very large images before adding them so the site loads quickly. If `image` is blank, the styled placeholder appears.

### 3. Contact details and Formspree

The form is intentionally disabled until you connect it. To set it up:

1. Create a form in your [Formspree account](https://formspree.io/).
2. Copy the form ID from its endpoint. For an endpoint like `https://formspree.io/f/abcdwxyz`, the ID is `abcdwxyz`.
3. In `src/siteData.js`, put that ID in `formspreeId`, without the URL. Do not put passwords, API keys, or private credentials in this project.
4. Deploy the website, then submit a real test request and confirm it reaches the intended inbox. Check the Formspree dashboard for any verification or inbox setup it requires.

Until the ID is present, the form shows a setup note and its submit button is disabled. Once connected, it sends the visitor's name, email, selected project type, and message to Formspree. The visitor will see Formspree's configured response page after submission; set up a thank-you page in Formspree if you want a custom confirmation experience.

### 4. Colors, layout, and sections

Open `src/styles.css`. The colors are near the top as CSS variables (`--paper`, `--ink`, `--green`, and `--orange`). Change those to re-theme the site. Search for the class name of the section you want to adjust (such as `.hero`, `.service-card`, or `.project-grid`). Responsive rules are near the bottom.

`src/App.jsx` arranges the page sections. Reusable pieces live in `src/components/`: `Header.jsx`, `ServiceCard.jsx`, `ProjectCard.jsx`, and `ContactForm.jsx`. For a first pass, change the data and CSS before rearranging the component structure.

## Project map

```text
src/
  App.jsx                 Page layout and sections
  siteData.js             Business information and repeatable content
  styles.css              Colors, typography, layout, and mobile styles
  main.jsx                React entry point
  components/             Reusable navigation, cards, and contact form
public/images/            Add project photos here
```

## A beginner-friendly ChatGPT workflow

- Ask for one small change at a time, such as “Change the hero headline and explain which file controls it.”
- Include the exact filename and any error text. Ask for a short explanation of what changed and why.
- For a visual change, describe what you see on desktop and on your phone-sized browser view.
- Before accepting a multi-file change, look at the filenames it changed and ask what each one does.
- Make a Git checkpoint before larger experiments so you can return to a known-good version.

## Simple Git workflow

If Git is installed, open the VS Code terminal in the project folder and run these commands:

```bash
git init
git add .
git commit -m "Start small business website"
```

After a set of changes you want to keep:

```bash
git add .
git commit -m "Add business services and project photos"
```

Use `git status` to see what changed. A commit is a save point on your computer; it does not publish the site. If you later connect a GitHub repository, keep the repo private unless you intend the code to be public. Never commit passwords, tokens, or private customer information.

## Accessibility and launch checklist

- Replace all sample business details and placeholder project images/alt text.
- Verify phone, email, service area, and every navigation link.
- Add the Formspree ID, deploy, and confirm a test request arrives.
- Check the page at mobile and desktop widths; use keyboard Tab to navigate and confirm focus is visible.
- Use real, readable text and photos the business is allowed to publish.
- Run `npm run build` and fix any reported errors before deployment.

The template includes semantic page sections, a skip link, labeled form fields, keyboard-visible focus styles, a mobile menu with expanded state, image descriptions, and reduced-motion support. It is a starting point; check the finished, customized site before publishing.
