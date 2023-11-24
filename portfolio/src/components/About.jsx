function About() {
    return (
      <div className="flex flex-col items-center py-12 mt-10">
        <h1 className="mb-8 text-5xl font-ubuntu">ABOUT ME</h1>
        <div className="flex flex-col md:flex-row items-center w-full md:w-3/4 gap-10">
          <img
            src="/AbhaImg.jpg"
            alt="Abha Ghildiyal"
            className="mb-4 w-1/2 h-50 rounded-full"  
          />
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg font-karla leading-relaxed text-justify mx-4 sm:mx-0">
              Greetings! I'm Abha Ghildiyal, a dedicated 20-year-old pursuing a B.Tech in Computer Science at Amity University, Noida. Alongside my academic endeavors, I'm actively expanding my expertise in web development and artificial intelligence. Proficient in React and Figma, I'm currently immersed in hands-on projects involving Node.js and Express to strengthen my backend development skills.
              <br/><br/>
              My passion lies in staying abreast of technological advancements, contributing meaningfully to the field, and applying theoretical knowledge to practical scenarios. As I progress, I'm committed to making impactful contributions to the dynamic landscape of computer science.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  