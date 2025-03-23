import { motion } from "framer-motion";
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Homepage() {
  return (
    <div className="Home bg-slate-900 text-white min-h-screen mx-4 md:mx-14 rounded-3xl text-center relative overflow-x-hidden top-20 ">
      <h2 className="py-8 md:py-14 text-2xl md:text-4xl text-rebeccapurple tracking-widest">
        ABHA GHILDIYAL
      </h2>
      <h1 className="text-4xl md:text-6xl pb-6 md:pb-12 font-ubuntu">
        Web Developer and
        <br /> UI Designer
      </h1>
      <p className="px-4 md:px-20 text-gray-400 max-w-screen-md mx-auto">
        I'm a web developer based in India, proficient in HTML, CSS, JavaScript,
        React, and C/C++. Currently exploring AI and Cybersecurity to stay at
        the forefront of technology. With a meticulous approach to web
        development, I consistently strive to deliver high-quality solutions
        that align with industry standards.
      </p>
      <div className="button-wrapper flex flex-wrap space-x-4 items-center justify-center py-10">
        {[
          {
            text: "GitHub",
            icon: "/github-logo.png",
            href: "https://github.com/Artemiskgg1",
          },
          {
            text: "LinkedIn",
            icon: "/linkedin.png",
            href: "https://www.linkedin.com/in/abha-ghildiyal-6ba119223/",
          },
          {
            text: "Telegram",
            icon: "/telegram.png",
            href: "#",
          },
          { text: "Resume", icon: "/resume.png", href: "#" },
        ].map((item, index) => (
          <a
            key={index}
            download={item.text === "Resume"}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer" //for security
            className="button-container flex items-center rounded hover:bg-zinc-600 md:px-6 py-1 px-4 md:py-2 border-solid border-2 border-white cursor-pointer m-2"
          >
            <div className="text-lg">{item.text}</div>
            <img
              src={item.icon}
              alt={`${item.text} Icon`}
              className="icon w-8 h-8 ml-3 my-2"
            />
          </a>
        ))}
      </div>
      <motion.div
        className="slidingTextContainer absolute text-10xl  whitespace-nowrap text-[#ffffff09] w-1/2 font-bold"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        style={{ top: "65%", transform: "translateY(-50%)" }}
      >
        Hacker Developer Designer Creator
      </motion.div>
    </div>
  );
}

export default Homepage;
