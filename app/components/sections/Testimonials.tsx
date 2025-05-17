"use client"
import {motion} from "framer-motion"
import {Quote} from "lucide-react";
import Image from "next/image";


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "SoftSell helped us recoup over $35,000 from unused enterprise licenses after our merger. Their valuation was 20% higher than competitors, and the entire process was smooth and secure.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "Brighten Tech Solutions",
      avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAp273M55AA-C-XvPZVXDOE9-W91Ic5Z74Vw&s",
      color: "border-blue-500"
    },
    {
      id: 2,
      quote: "As a growing startup, managing our software assets efficiently is crucial. SoftSell made it easy to sell licenses we no longer needed, providing us with additional runway. Their team was professional and incredibly responsive.",
      name: "Michael Chen",
      role: "Operations Director",
      company: "NexGen Innovations",
      avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18r4NC_pzJ3KV6wbdcWLAe3k-2j8zi7XMzQ&s",
      color: "border-purple-500"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:px-10 lg:px-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-indigo-500 dark:text-indigo-400">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don&rsquo;t just take our word for it — hear from businesses that have successfully sold their software licenses with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 text-indigo-500 dark:text-indigo-400">
                  <Quote size={40} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 flex-grow">
                   &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={testimonial.avatarSrc} 
                      alt={testimonial.name} 
                      className={`w-12 h-12 rounded-full object-cover border-2 ${testimonial.color}`}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;