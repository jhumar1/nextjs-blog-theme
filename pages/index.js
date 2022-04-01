import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
       <p> A <a href="http://www.shotblastingmachine.in/"> sand blasting machine </a> has three basic parts: an air
compressor, a pressurized tank, and a hand-held
pressure gun. A hopper sits on top of the gun, which is
filled with silica sand. The compressed air is fired
through the gun when the trigger is pressed, which
draws the sand from the hopper through the barrel.
The sand is then drawn through the hose, causing the
material to be cleaned.
A sand blasting machine uses compressed air to fire sand at surfaces. A sand blasting machine
can also use a dry ice cleaning system. The use of dry ice means that the sand can be re-fired
over again. Using dry ice, which is more environmentally friendly, can cause a hot spot that
makes it hard to clean. When it comes to sandblasting, dry sand is used because it breaks down
the contaminants with extreme temperatures.
A sand blasting machine is a simple, effective way to clean a variety of surfaces. The process
removes scale, rust, and oil that causes a surface to fail. Studies have shown that about 80% of
failures in the surface of a metal object are due to improper pretreatment, and the most
important part of that treatment is sand blasting. Whether you have a paint-covered object that
needs to be removed or an old one that is corroding, sand blasting will help.</p>
</main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
