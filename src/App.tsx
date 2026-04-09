/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedServices } from "./components/FeaturedServices";
import { SplitFeature } from "./components/SplitFeature";
import { Showcase } from "./components/Showcase";
import { Stats } from "./components/Stats";
import { Gallery } from "./components/Gallery";
import { Partners } from "./components/Partners";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-orange/20 selection:text-brand-orange">
      <Header />
      <main>
        <Hero />
        <FeaturedServices />
        <SplitFeature />
        <Showcase />
        <Stats />
        <Gallery />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
