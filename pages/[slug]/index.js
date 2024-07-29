import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Newsletter from '../../components/Newsletter';
import DataPost from '../../components/DataPost';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <article className="mx-auto mt-8 md:max-w-[60%] lg:max-w-[60%]">
        {/* {frontMatter.thumbnailUrl && (
          <Image
            src={frontMatter.thumbnailUrl}
            className="img-fluid mt-1 rounded-lg"
            alt="{frontMatter.title}"
            width={1200}
            height={628}
          />
        )} */}
        <header>
          <h1 className="font-black text-center text-3xl md:text-5xl dark:text-white my-8">
            {frontMatter.title}
          </h1>
          {frontMatter.description && (
            <p className="text-xl mb-8">{frontMatter.description}</p>
          )}
          <div className="mt-4 flex justify-between">
         
            <DataPost metadata={{ datePublished: frontMatter.datePublished, dateModified: frontMatter.dateModified }} />

            <p className="mb-4 text-left text-sm opacity-30">
              Por {frontMatter.author}
            </p>
          </div>
        </header>
		
        <hr className="opacity-20 mb-12" />
        <main>
          <article className="prose dark:prose-dark">
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        <div className="grid md:grid-cols-2 lg:-mx-24 mt-12">
          {prevPost && (
            (<Link legacyBehavior href={`/${prevPost.slug}`}>
              <a className="py-8 px-10 text-center md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg first last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none flex flex-col">
                <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                  Anterior
                </p>
                <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                  {prevPost.title}
                </h4>
                <ArrowIcon className="transform rotate-180 mx-auto md:mr-0 mt-auto" />
              </a>
            </Link>)
          )}
          {nextPost && (
            (<Link legacyBehavior href={`/${nextPost.slug}`}>
              <a className="py-8 px-10 text-center md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t-0 first:border-t first:rounded-t-lg md:border-t border-b-0 last:border-b flex flex-col">
                <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                  Próximo
                </p>
                <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                  {nextPost.title}
                </h4>
                <ArrowIcon className="mt-auto mx-auto md:ml-0" />
              </a>
            </Link>)
          )}
        </div>
      </article>

      <div className='mt-20'>

          <Newsletter />

      </div>

      <Footer className="mx-auto" copyrightText={globalData.footerText} />

    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
