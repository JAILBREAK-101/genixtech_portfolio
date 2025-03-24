# GenixTech Portfolio

## Overview

Welcome to the GenixTech Portfolio! This is a value-driven portfolio built with Next.js and Tailwind CSS. The portfolio is designed to showcase your projects and skills in a modern, responsive, and performance-optimized manner.

## Features

- **Responsive Design**: The portfolio is fully responsive, ensuring it looks great on all devices, from desktops to mobile phones.
- **Dark/Light Mode**: Users can switch between dark and light modes for a comfortable viewing experience.
- **Performance Optimized**: The site is optimized for fast loading times and smooth performance.

## Installation

This Portfolio uses [pnpm](https://pnpm.io/installation) for dependency management, so ensure it is installed on your system.

Execute [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```sh
pnpm create next-app --example https://github.com/JAILBREAK-101/genixtechportolio my-portfolio
```

Start the development server:

```sh
pnpm dev
```

The server will be running at [http://localhost:3000](http://localhost:3000).

## Configuration

### Config.ts

Update the site metadata and social links in the `app/config.ts` file. These constants are utilized across the site for SEO, feeds, social links, and Open Graph integration.

```ts
export const metaData = {
    baseUrl: "https://genixtech-portfolio.vercel.app", // Update with your site base URL
    title: "GenixTech Portfolio", // Update with your site title
    name: "Your Name", // Update with your name
    ogImage: "/opengraph-image.png", // Update with your Open Graph image
    description:
        "A clean, fast, and lightweight portfolio template built with Next.js, Vercel, and Tailwind CSS for optimal performance.", // Update with your site description
};

export const socialLinks = {
    twitter: "https://twitter.com/yourprofile", // Update with your Twitter URL
    github: "https://github.com/JAILBREAK-101", // Update with your GitHub URL
    instagram: "https://www.instagram.com/yourprofile", // Update with your Instagram URL
};
```

### Sitemap

Adjust the routes to match your portfolio’s navigation in the `app/sitemap.ts` file for SEO optimization:

```ts
let routes = ["", "solutions", "updates"].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
}));
```

### Profile Photo

Update your profile photo by replacing the `public/profile.png` file with your image.

### Favicon

Update your favicon by replacing the `public/favicon.ico` file with your custom icon.

### Analytics

GenixTech Portfolio uses Vercel Web Analytics and Speed Insights to monitor user interactions and website's performance. Simply deploy your site on Vercel and enable both features through the Vercel dashboard.

## Ready!

You're all set! Update your blog posts in the `/content` folder, add your project data in `app/project/projectdata.tsx`, and update your images in `app/photos/page.tsx`.

Your portfolio is equipped with SEO, RSS, Atom, and JSON feeds, as well as analytics. GenixTech Portfolio is fully customizable, allowing you to add features as needed.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries, please contact me through the contact form on my portfolio website.

This README provides a comprehensive overview of your GenixTech Portfolio website, including installation instructions, configuration details, and feature highlights.