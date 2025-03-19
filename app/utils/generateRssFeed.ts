import { Feed } from 'feed';
// import fs from 'fs';
// import { categories } from '../updates/page';

export async function generateRssFeed() {
  const feed = new Feed({
    title: "AI Solutions Updates",
    description: "Latest developments, research insights, and upcoming innovations",
    id: "https://yourdomain.com/",
    link: "https://yourdomain.com/",
    language: "en",
    favicon: "https://yourdomain.com/favicon.ico",
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    author: {
      name: "Your Name",
      email: "your@email.com",
      link: "https://yourdomain.com"
    }
  });

//   categories.forEach(category => {
//     category.items.forEach(item => {
//       feed.addItem({
//         title: item.title,
//         id: item.title,
//         link: item.link || `https://yourdomain.com/updates#${item.title}`,
//         description: item.description,
//         date: new Date(item.date || Date.now()),
//       });
//     });
//   });

//   fs.writeFileSync('./public/rss.xml', feed.rss2());
//   fs.writeFileSync('./public/feed.json', feed.json1());
}