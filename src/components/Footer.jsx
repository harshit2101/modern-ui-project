import { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <p className="text-center border-t-2 border-[#0f0e0e] h-8 sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1100px] mx-auto font-poppins">Copyright &copy; {currentYear} STARTUP</p>
    </footer>
  );
};

export default Footer;
