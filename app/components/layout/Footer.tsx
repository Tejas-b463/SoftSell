import { Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const Links = [
              { label: "Home", href: "#" },
              { label: "Works", href: "#how-it-works" },
              { label: "Choose Us", href: "#why-choose-us" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Contact", href: "#contact" },
            ]

  return (
    <footer className="dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 items-center">
          <div className="text-center md:text-left">
            <div className="text-2xl font-extrabold tracking-tight text-indigo-500">
              Soft<span className="text-gray-800 dark:text-gray-200">Sell</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Turning unused software into opportunity.
            </p>
          </div>

          
          <nav className="flex flex-col md:flex-row justify-center md:justify-end gap-6">
            {Links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end gap-4 text-gray-400 text-lg">
            <Linkedin/>
            <Facebook/>
            <Twitter/>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <span>© {currentYear} SoftSell. All rights reserved.</span>
          <div className="flex flex-col md:flex-row gap-4 ">
            <span><a href="mailto:contact@softsell-example.com" className="hover:text-indigo-500 transition-colors duration-300">contact@softsell-example.com</a></span>
            <span className="hover:text-indigo-500 transition-colors duration-300 ml-8">+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;