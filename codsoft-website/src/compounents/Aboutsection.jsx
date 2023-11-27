export default function Aboutsection() {
  return (
   
      <section class=" h-auto w-full mt-40  text-justify">
        <h1 class=" text-center mb-8 text-4xl font-bold text-black">
          ABOUT ME
        </h1>
        <div class=" xl:flow-root lg:flow-root md:flow-root ">
        <div class="md:w-[45%] lg:w-[50%] xl:w-[40%] xl:mt-5 md:mt-7 lg:float-right md:float-right xl:float-right">
          <img
            src="myphoto.jpg"
            class=" sm:h-80 sm:w-80 md:mt-3 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] xl:rounded-tl-[250px] xl:rounded-bl-[250px] lg:rounded-tl-[200px] lg:rounded-bl-[200px] h-64  w-64  md:rounded-tl-[150px]  md:rounded-bl-[150px]  md:rounded-tr-[0]  md:rounded-br-[0]  rounded-tr-[150px] rounded-br-[150px] "
            width="75%"
            height="70%"
          />
        </div>



<div class="md:w-[55%] lg:w-[50%] xl:w-[60%] xl:mt-16  md:float-left lg:float-left xl:float-left lg:mt-4">


        <div>
          <p class="first-letter:text-2xl p-4 sm:text-lg xl:text-2xl text-md">
            {" "}
            Hello there!👋 I'm purushotham, a passionate web developer based in
            bengaluru India.I love turning creative ideas into stunning
            realities. I strive to make a positive impact through my work.
          </p>
          <p class="p-4 text-md sm:text-lg xl:text-2xl">
            I believe in the power of simplicity and effective communication. My
            goal is to create engaging designs that leave a lasting impression.
            I'm constantly inspired by technology, and I'm always eager to learn
            and grow in my craft.
          </p>
          <p  class=" p-4 text-md sm:text-lg xl:text-2xl">
            Let's collaborate and bring your ideas to life! Feel free to contact
            me to discuss how we can work together.
          </p>{" "}
        </div>
        <div class="flex justify-center gap-3 md:gap-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:purushothamgowda847@gmail.com"
          >
            <img class="w-9 h-9 md:w-11 md:h-11 hover:animate-bounce" src="gmail.png" />
          </a>
          <a target="_blank" href="https://twitter.com/Purushotham_007">
            <img class="w-8 h-8 md:w-10 md:h-10  hover:animate-bounce" src="twitter.png" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/purushotham-bm-63543822a/"
          >
            <img id="skillsection" class="w-8 h-8 md:w-10 md:h-10   hover:animate-bounce" src="linkedin.png" />
          </a>
        </div>
        </div>
        </div>
        
      </section>

    
  );
}
