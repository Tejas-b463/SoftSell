"use client"
import { Shield, Clock, TrendingUp, Award} from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      title: "Secure Transactions",
      description: "Enterprise-grade encryption and secure payment processing to protect your assets.",
      icon: <Shield size={32} />,
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30"
    },
    {
      id: 2,
      title: "Fast Turnaround",
      description: "Get valuations within 24 hours and payment within 3 business days.",
      icon: <Clock size={32} />,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      id: 3,
      title: "Best Market Rates",
      description: "We leverage our industry connections to offer you the highest possible value.",
      icon: <TrendingUp size={32} />,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      id: 4,
      title: "Trusted Expertise",
      description: "5+ years of experience with over 10,000 successful license transactions.",
      icon: <Award size={32} />,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-100 dark:bg-amber-900/30"
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 md:px-10 lg:px-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-indigo-500 dark:text-indigo-400">Us</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            SoftSell offers unmatched benefits when it comes to selling your unused software licenses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-xl shadow-md p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center ${benefit.color} mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
