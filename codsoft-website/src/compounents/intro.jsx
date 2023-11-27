export default function intro() {
  return (
    <>
      <section class="hero-firstsection font-pattaya mt-20 lg:flex ">
        <div class="w-full flex justify-center  mt-5 xl:w-[50%]">
        <img class=" h-64 w-64 sm:h-80 sm:w-80 rounded-t-[150px] rounded-bl-[150px]  xl:w-[450px] xl:h-[450px] xl:rounded-t-[250px]  xl:rounded-bl-[250px]" src="p.jpg"/>
        </div>

        <div class="hero-leftsection lg:pt-5 xl:pt-20 xl:pr-3 xl:w-[60%]">
          <div class="hero-buttondiv text-[20px]">
            <p class=" first-letter:text-3xl xl:first-letter:text-[70px]  lg:first-letter:text-[40px] lg:mb-2 text-center pb-0 p-10 sm:text-[31px] lg:text-left  xl:text-center lg:pb-0 lg:pl-20 lg:pt-10 xl:p-0 xl:pt-10 xl:text-[45px]">
              Hi, My name is purushotham and I am a passionate
            </p>
         
            <div class="anitext relative justify-center h-16 inline-flex w-full pt-0 p-3 text-[20px]  xl:mt-5">
              <ul class="dynamictext absolute -top-7 sm:text-[31px] xl:text-[45px] ">
                <li>
                  <span class="font-extrabold  ">web designer</span>
                </li>
                <li>
                  <span class="font-extrabold ">graphic designer</span>
                </li>
                <li>
                  <span class="font-extrabold ">logo designer</span>
                </li>
                <li>
                  <span class="font-extrabold ">brand identity</span>
                </li>
              </ul>
            </div>
            <div class="flex justify-center  gap-2 sm:gap-4 sm:mt-5 lg:mt-1 xl:mt-10 xl:pr-2 ">
              <a target="_blanck" href="www.google.com">
                <button className="border-2  border-black xl:w-32 w-20 sm:w-24 bg-black text-white rounded-full p-1 text-[15px] sm:text-[20px] hover:bg-white hover:text-black transtition duration-1000  ">
                  Resume
                </button>
              </a>
              <a id="aboutsection" target="_blanck" href="https://github.com/purushotham847">
                <button className="border-2 w-20 sm:w-24 border-black bg-black text-white rounded-full p-1 text-[15px] hover:bg-white hover:text-black sm:text-[20px] xl:w-32  transtition duration-1000">
                 Github
                </button>
              </a>
            </div>
            
          </div>
        </div>
      </section >
    </>
  );
}
