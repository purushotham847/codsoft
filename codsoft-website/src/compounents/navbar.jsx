export default function Navbar() {
  return (
    <nav class="   pt-5 bg-white p-3 h-auto w-full sticky top-0  lg:flex-row lg:w-full lg:flow-root ">
      <div class=" flex-row w-full flow-root  lg:w-[50%] lg:float-left">
        <div class="text-center  float-left font-Dancingscript  text-lg  sm:text-xl md:text-2xl lg:pl-2 xl:text-3xl">purushotham bm</div>
        <div
          id="menubar"
          onClick={menubarfun}
          class="w-7 h-6 md:w-8 md:h-7 grid grid-cols-1 float-right grid-rows-3 gap-1 lg:hidden"
        >
          <div id="menu1" class=" bg-black "></div>
          <div id="menu2" class=" bg-black "></div>
          <div  id="menu3" class=" bg-black  "></div>
        </div>
      </div>
      <div id="menulist" class=" hidden lg:block  pt-6 w-full  lg:pt-0 lg:w-[45%] xl:w-[40%] lg:pr-1 xl:pr-0 lg:float-right">
        <ul class=" w-full h-auto space-y-2 lg:space-y-0 flex xl:text-2xl lg:text-xl flex-col text-center text-[18px] lg:flex-row lg:w-full lg:grid lg:grid-cols-5 lg:gap-0 xl:space-x-4 ">
        <a href="/">
          <li class="hover:bg-black  p-1 rounded-md  hover:text-white w-full lg:w-auto ">
            Home
          </li></a>

          <a href="#aboutsection">
          <li  class="hover:bg-black p-1 rounded-md hover:text-white w-full  lg:w-auto ">
            About
          </li>
          </a>
          <a href="#skillsection">  
          <li class="hover:bg-black p-1 rounded-md hover:text-white w-full lg:w-auto">
            Skills
          </li>
          </a>
          <a href="#contact">
          <li class="hover:bg-black p-1 rounded-md hover:text-white w-full lg:w-auto ">
            Contact
          </li>
          </a>
          <a href="/">
          <li class="hover:bg-black p-1 rounded-md hover:text-white w-full lg:auto">
           Projects
          </li>
          </a>
        </ul>
      </div>
      
 
    </nav>
  );

  function menubarfun() {
    let menu1 = document.getElementById("menu1");
    let menu2 = document.getElementById("menu2");
    let menu3 = document.getElementById("menu3");
    menu2.classList.toggle("bg-red-500")
    menu1.classList.toggle("rotate-12")
    menu2.classList.toggle("rotate-12")
    menu3.classList.toggle("rotate-12")
    let menu = document.getElementById("menulist");
    menu.classList.toggle("hidden");
  }
}
