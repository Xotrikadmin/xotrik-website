// import Hero from "../components/Hero";
// import Features from "../pages/Features";
// import About from "../pages/About";
// import ServicesSection from '../pages/ServicesSection';
// import FaqSection from '../components/FaqSection';

// import TechnologiesSection from '../components/TechnologiesSection';
// import SuccessCasesSection  from "../components/SuccessCasesSection";
// import WhyChooseUsSection from '../components/WhyChooseUsSection';


// export default function Landing() {
//   return (
//     <>
//       <Hero />
//       <Features />
//       <ServicesSection />
//       <About />
//       <TechnologiesSection />
//       <SuccessCasesSection />
//       <WhyChooseUsSection />
//       <FaqSection />
   
//     </>
//   );
// }
import React, { Suspense, lazy } from "react";
import { RingLoader } from "react-spinners";
import { motion } from "framer-motion";

const Hero = lazy(() => import("../components/Hero"));
const Features = lazy(() => import("../pages/Features"));
const About = lazy(() => import("../pages/About"));
const ServicesSection = lazy(() => import("../pages/ServicesSection"));
const FaqSection = lazy(() => import("../components/FaqSection"));
const TechnologiesSection = lazy(() => import("../components/TechnologiesSection"));
const SuccessCasesSection = lazy(() => import("../components/SuccessCasesSection"));
const WhyChooseUsSection = lazy(() => import("../components/WhyChooseUsSection"));

const Loader = () => (
  <div className="min-h-[60vh] flex justify-center items-center">
    <RingLoader color="#D4AF37" size={68} speedMultiplier={0.92} />
  </div>
);

export default function Landing() {
  return (
    <Suspense fallback={<Loader />}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}o
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Hero />
        <Features />
        <ServicesSection />
        <About />
        <TechnologiesSection />
        <SuccessCasesSection />
        <WhyChooseUsSection />
        <FaqSection />
      </motion.div>
    </Suspense>
  );
}
