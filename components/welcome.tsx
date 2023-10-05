// components/Welcome.js
import { motion } from "framer-motion";
import Link from "next/link"

const Welcome = () => {
  return (

    <section class="welcome flex-center flex-col gap-3 sm:gap-5">
         <div className="h-screen flex items-center justify-center text-white w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >


              <div className="p-2">
                    
                    <div className='flex justify-center mb-2'>
                        <h1 className=" text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">Welcome to DevInsights
                        </h1>
                    </div>
                    <div className='flex justify-center'>
                        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400"> Get one personalized feed for all the knowledge you need. Make learning a daily habit or just do something useful while you're in endless meetings   </p>
                    </div>
                </div>
                
                  <div className="mt-10 w-full flex justify-center items-center">
                    <Link href="/authentication" legacyBehavior>
                      <a className="button learn-more">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Let's Get Started</span>
                      </a>
                    </Link>
                  </div>


            </motion.div>
            </div>
   
    </section>

   
  );
};

export default Welcome;
