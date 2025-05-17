"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const softwares = [
  "Adobe Creative Cloud",
  "Microsoft 365",
  "Autodesk",
  "Salesforce",
];

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10 lg:px-20 dark:bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Turn Unused Software Into Cash
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-500"
          >
            SoftSell helps businesses sell unused software licenses at the best market rates.
            Fast, secure, and hassle-free software asset recovery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-base px-10 py-7 rounded-2xl ">
              Sell My Licenses
            </Button>
            <Button variant="outline" className="border-indigo-500 cursor-pointer text-indigo-500 text-base px-10 py-7 rounded-2xl hover:bg-indigo-50">
              Get a Quote
            </Button>
          </motion.div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          {softwares.map((software, index) => (
            <motion.div
              key={software}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-2xl p-4 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                {software.charAt(0)}
              </div>
              <h3 className="mt-2 text-gray-900 font-semibold">{software}</h3>
              <p className="text-sm text-gray-500">Top rates paid</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );};

export default Hero;
