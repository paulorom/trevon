import fs from 'fs';
import { Feed } from 'feed';
import { getPosts } from './mdx-utils';

export const buildRssFeed = async () => {
  const allPosts = getPosts();
  const site_url = 'https://trevon.com.br'

  const feedOptions = {
    title: 'Trevon Blog | RSS Feed',
    description: 'Trevon RSS Feed',
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      // other feed formats
      //json: `${site_url}/rss.json`,
      //atom: `${site_url}/atom.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  if(allPosts) {
    allPosts.forEach((post) => {
      feed.addItem({
        title: post.data.title,
        id: `${site_url}/${post.data.url}`,
        link: `${site_url}/${post.data.url}`,
        description: post.data.description,
        date: new Date(post.data.datePublished),
      });
    });
  }


  fs.writeFileSync('./public/rss.xml', feed.rss2());
  // write other feed formats to public folder
  //fs.writeFileSync('./public/rss.json', feed.json1());
  //fs.writeFileSync('./public/atom.xml', feed.atom1());
}