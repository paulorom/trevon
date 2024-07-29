import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote';
import { getAboutMDX } from '../../utils/mdx-utils';
import CustomLink from '../../components/CustomLink';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { getGlobalData } from '../../utils/global-data';
import SEO from '../../components/SEO';
import Newsletter from '../../components/Newsletter';

const components = {
  a: CustomLink,
  Head,
};

export default function About({ source,
  frontMatter, globalData }) {
  return (
    <Layout>
      <SEO title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <main>
        <article className="mx-auto mt-8 md:max-w-[60%] lg:max-w-[60%] prose dark:prose-dark w-full">
          <MDXRemote {...source} components={components} />
        </article>
      </main>
    <div className='mt-20'>

      <Newsletter />

    </div>


    </Layout>
  )
}

export const getStaticProps = async () => {

  const globalData = getGlobalData();
  const { mdxSource, data } = await getAboutMDX();

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      globalData: globalData
    },
  };
};
