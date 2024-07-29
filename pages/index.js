import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '../utils/mdx-utils';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import { buildRssFeed } from '../utils/buildRssFeed';
//import { watchMdxFiles } from '../utils/watchMdxFiles';

import SEO from '../components/SEO';
import Newsletter from '../components/Newsletter';
import DataPost from '../components/DataPost';

export default function Index({ posts, globalData , defaultImages }) {
  const [visiblePosts, setVisiblePosts] = useState(9);
  const totalPosts = posts?.length ? posts?.length : 0;

  const loadMorePosts = () => {
    const increment = 9;
    setVisiblePosts((prev) => prev + increment);
  };

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <main className="w-full text-white">
        {/* <h1 className="font-lighter text-3xl text-center mb-12">
          {globalData.blogTitle}
        </h1> */}
        <div className="flex justify-center mb-12">
         
        </div>

        <ul className="flex flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap">
          {posts.slice(0, visiblePosts).map((post) => (
            <li
              key={post.filePath}
              className="md:px-2 lg:px-2 mb-8 md:w-1/2 lg:w-1/3 border-b border-white border-opacity-20"
            >
              <Link legacyBehavior className="lg:min-h-[360px]"
                as={`/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/[slug]`}
                >
                    <a>
                    {/* {post.data.thumbnailUrl ? (
                      <Image
                        src={post.data.thumbnailUrl}
                        className="img-fluid mt-1 rounded-lg"
                        alt="{post.data.title}"
                        width={1200}
                        height={628}
                        priority={true}
                      />
                    ) : (
                      // Escolha uma imagem aleatória da lista de imagens padrões
                      <Image
                        src={defaultImages[Math.floor(Math.random() * defaultImages.length)]}
                        className="img-fluid mt-1 rounded-lg"
                        alt="{post.data.title}"
                        width={1200}
                        height={628}
                      />
                      )} */}
                      <h2 className="lg:min-h-[96px] text-2xl md:text-2xl">{post.data.title}</h2>

                      <div className="mt-8 mb-4 flex justify-between">
                        
                        <DataPost metadata={{ datePublished: post.data.datePublished, dateModified: post.data.dateModified }} />

                        {post.data.author && (
                          <p className="text-sm opacity-30">
                            Por {post.data.author}
                          </p>
                        )}
                      </div>
                    </a>
              </Link>
            </li>
          ))}
        </ul>
        {visiblePosts < totalPosts && (
          <div className='mb-32 text-center text-lg font-medium'>
            <button onClick={loadMorePosts} className="border-2 border-sky-300 hover:bg-slate-800 text-white rounded-full uppercase font-bold px-8 py-2">Carregar mais artigos</button>
          </div>   
        )}
      </main>

      <Newsletter />
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  const defaultImages = [
    '/nft-trevon-cars1.jpg',
    '/nft-trevon-cars2.jpg',
    '/nft-trevon-cars3.jpg',
    '/nft-trevon-cars4.jpg',
    '/nft-trevon-cars5.jpg',
    '/nft-trevon-cars6.jpg',
    '/nft-trevon-cars7.jpg',
    '/nft-trevon-cars8.jpg',
    '/nft-trevon-cars9.jpg',
    '/nft-trevon-cars10.jpg',
    '/nft-trevon-cars11.jpg',
    '/nft-trevon-cars12.jpg',
    '/nft-trevon-cars13.jpg',
    '/nft-trevon-cars14.jpg',
    '/nft-trevon-cars15.jpg',
    '/nft-trevon-cars16.jpg',
    '/nft-trevon-cars17.jpg',
    '/nft-trevon-cars18.jpg',
    '/nft-trevon-cars19.jpg',
    '/nft-trevon-cars20.jpg',
    '/nft-trevon-cars21.jpg',
    '/nft-trevon-cars22.jpg',
    '/nft-trevon-cars23.jpg',
    '/nft-trevon-cars24.jpg',
    '/nft-trevon-cars25.jpg',
    '/nft-trevon-cars26.jpg',
    '/nft-trevon-cars27.jpg',
    '/nft-trevon-cars28.jpg',
    '/nft-trevon-cars29.jpg',
    '/nft-trevon-cars30.jpg',
    '/nft-trevon-cars31.jpg',
    '/nft-trevon-cars32.jpg',
    '/nft-trevon-cars33.jpg',
    '/nft-trevon-cars34.jpg',
  ];
  
  await buildRssFeed();
  //await watchMdxFiles();
  return { props: { posts, globalData, defaultImages} };
}
