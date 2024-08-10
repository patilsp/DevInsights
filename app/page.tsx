"use client";
// import Feed from "@/components/feed";
import TechnologyNews from "@/components/technology-news";
import { motion } from "framer-motion"

const Home = () => (
  <motion.div
    animate={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0.8 }}
    transition={{ ease: "easeOut" }}
  >
  <section className='flex-center w-full flex-col mb-20 md:mb-0'>
    <TechnologyNews />
  </section>
  </motion.div>
);

export default Home;
