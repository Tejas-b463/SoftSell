"use client"
import { motion } from "framer-motion"
import { Upload, DollarSign, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Upload License",
      description: "Share your software license details through our secure portal.",
      icon: <Upload size={32} />,
      color: "bg-blue-500 dark:bg-blue-900"
    },
    {
      id: 2,
      title: "Get Valuation",
      description: "Receive a competitive market valuation within 24 hours.",
      icon: <DollarSign size={32} />,
      color: "bg-indigo-500 dark:bg-indigo-600"
    },
    {
      id: 3,
      title: "Get Paid",
      description: "Accept our offer and receive payment via your preferred method.",
      icon: <CheckCircle size={32} />,
      color: "bg-green-500 dark:bg-green-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:px-10 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It <span className="text-indigo-500 dark:text-indigo-400">Works</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            Turn your unused software licenses into cash with our simple three-step process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 0 && (
                <div className="hidden md:flex justify-center mt-4 mb-8">
                  <ArrowRight className="text-indigo-500 dark:text-indigo-400" size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button className="px-20 py-6 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-200">
            Start Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;