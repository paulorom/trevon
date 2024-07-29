import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="google-site-verification" content="r2Hp44Wk5_8W-fGLMWf2FrVoQaVMluWwLHgZRas4e-c" />
      <meta property="og:title" content={title} />
    </Head>
  );
}
