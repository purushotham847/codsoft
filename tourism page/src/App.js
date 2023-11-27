import { useState } from "react"


export default function App(){

const [currentindex,setcurrentindex] = useState(0);

  const slides= [
    {
      url:"mysore1.jpg"
    },
    {
      url:"photo.png"
    },
    {
      url:"mysore2.png"
    },
    {
      url:"mysore3.jpg"
    }, 
    
    {
      url:"4.jpg"
    },   
    
    {
      url:"6.jpg"
    },  
    
    {
      url:"7.jpg"
    },  
    
    {
      url:"5.jpg"
    },  
    
    {
      url:"8.jpg"
    },  
    
    {
      url:"9.jpg"
    },  
    
    {
      url:"10.jpg"
    },  
    
    {
      url:"11.jpg"
    } 
    ,
    {
      url:"5.jpg"
    } 
  ,
    {
      url:"12.jpg"
    } 
  
  
  ]

  function preindex (){
console.log(currentindex)
    if(currentindex>0){
      setcurrentindex(currentindex-1)
    }else{
      setcurrentindex(currentindex)
    }
  }
  

  function nextindex (){
    console.log(currentindex)
    if(currentindex<slides.length-1){
      setcurrentindex(currentindex+1)
    }else{
      setcurrentindex(currentindex)
    }
  }
  function randomfun(){
    let random = Math.floor(Math.random() * 14);
    setcurrentindex(random)
    console.log(random)
  }
  setInterval(randomfun,6000)
  
    return(
 <div class="font-semibold">
  <div class="w-full h-14 text-sm flex flex-col justify-center align-middle  p-1. md:items-center text-white md:flex-row bg-gradient-to-r from-yellow-300 to-red-600"> 

<div class="h-[50%] w-full  md:w-[40%]  xl:w-[40%] bg-transparent" >
  <h1 class="text-center text-lg   lg:text-[20px]  bg-transparent">Karnataka Tourism</h1>
  </div> <nav class="p-0 h-[50%] text-[12px]  sm:text-[16px]   md:w-[60%]  lg:text-[20px]  xl:w-[60%] bg-transparent">
    <ul class="grid grid-cols-3 bg-transparent">
      <li class="bg-transparent hover:text-red-700">Experience</li>
      <li class="bg-transparent  hover:text-red-700">Destination</li>
      <li class="bg-transparent hover:text-red-700">contact us</li>
    </ul>
    </nav></div>
  <div style={{ backgroundImage: `url(${slides[currentindex].url})`}}   class=" transition imageslider bg-no-repeat bg-cover bg-center h-screen w-full  relative p-2 text-center   ">
  <div className="absolute inset-0 bg-black opacity-40"></div>
  
<img onClick={preindex} src="arrow.png" class="absolute top-96 w-8 left-2 h-8  bg-white rounded-full  lg:w-12 lg:h-12" />
<img onClick={nextindex} src="arrow.png" class="absolute  top-96 right-2 w-8 rotate-180  h-8 bg-white rounded-full   lg:w-12 lg:h-12" />
<div class="bg-transparent text-yellow-400  absolute top-36 lg:top-48 font-extrabold text-4xl lg:text-[50px] xl:text-[50px]">

<p class="bg-transparent  h-auto">"Explore, Dream, Discover: Unleash Your Wanderlust with Us."</p>
<a href="https://karnatakatourism.org/" class='bg-red-600 rounded-lg hover:bg-red-700'>
  
<button class="rounded-lg mt-14 bg-red-600 cursor-pointer text-2xl p-2 lg:p-1 hover:bg-red-700 lg:text-3xl xl:text-4xl text-center">Explore</button>
</a>

</div>
  </div>


<div class="w-full h-auto p-5 lg:mt-10 mt-10">
<h1 class="text-center text-3xl text-red-600">Seven Wonders of Karnataka</h1>
  <div class="grid grid-cols-1 w-full h-auto gap-10 mt-10 sm:p-10 md:gap-14 md:grid-cols-3  lg:grid-cols-3">
    <div class="w-auto h-auto group">
    <h3 class="text-2xl">Hirebenakal Dolmens</h3>
<img class="w-full h-auto group-hover:scale-95 transition"    src="f1.png" alt="" />
<div class="w-full h-auto text-justify mt-5 flex flex-col ">

  <p>A pre-historic wonder destination, 10 km away from the Koppal district centre towards Gangavathi, Hirebenakal is the largest megalithic site in India. Dating back to 8..........</p>
 <a  class="w-full h-auto"href="https://en.wikipedia.org/wiki/Hire_Benakal"> <button class=" w-full rounded-md hover:bg-yellow-400 bg-yellow-300 p-1 border-red-600 border-2  mt-4">Read More</button></a>
</div>
    </div>
    <div class="w-auto h-auto group">
    <h3 class="text-2xl">Hampi</h3>
<img class="w-full h-auto group-hover:scale-95 transition"    src="f2.jpg" alt="" />
<div class="w-full h-auto text-justify mt-5 flex flex-col ">

  <p>The pride of Karnataka which is also considered one of the biggest open-air museums in the world is also featured on the Indian Currency note. An architectural marvel...........</p>
 <a  class="w-full h-auto"href="https://en.wikipedia.org/wiki/Hire_Benakal"> <button class=" w-full rounded-md bg-yellow-300 p-1 border-red-600 border-2  mt-4 hover:bg-yellow-400">Read More</button></a>
</div>
    </div>
    <div class="w-auto h-auto group">
    <h3 class="text-2xl">Gol Gumbaz</h3>
<img class="w-full h-auto group-hover:scale-95 transition"    src="f3.png" alt="" />
<div class="w-full h-auto text-justify mt-5 flex flex-col ">

  <p>A glorious example of Islamic engineering found in the Deccan region, Gol Gumbaz is one of the most important monuments in Karnataka. A landmark of Bijapur, showcases..........</p>
 <a  class="w-full h-auto"href="https://en.wikipedia.org/wiki/Gol_Gumbaz"> <button class=" w-full rounded-md bg-yellow-300 p-1 border-red-600 border-2  mt-4 hover:bg-yellow-400">Read More</button></a>
</div>
    </div>
    <div class="w-auto h-auto group">
    <h3 class="text-2xl">Gomateshwara Statue, Shravanabelagola</h3>
<img class="w-full h-auto group-hover:scale-95 transition"    src="f4.png" alt="" />
<div class="w-full h-auto text-justify mt-5 flex flex-col ">

  <p>An important Jain pilgrimage in South Karnataka is an important part of Indian history and heritage. Home to an 18 m high statue of Lord Gomateshwara, Shravanabelago..........</p>
 <a  class="w-full h-auto"href="https://en.wikipedia.org/wiki/Gommateshwara_statue"> <button class=" w-full rounded-md bg-yellow-300 p-1 border-red-600 border-2  mt-4 hover:bg-yellow-400">Read More</button></a>
</div>
    </div>
    <div class="w-auto h-auto group">
    <h3 class="text-2xl">Mysore Palace</h3>
<img class="w-full h-auto group-hover:scale-95 transition"    src="mysore3.jpg" alt="" />
<div class="w-full h-auto text-justify mt-5 flex flex-col ">

  <p>The most visited palace in the country is the Amba Vilas Palace, popularly known as Mysore Palace. Constructed in the Indo-Saracen style of architecture, the ..........</p>
 <a  class="w-full h-auto"href="https://en.wikipedia.org/wiki/Mysore_Palace"> <button class=" w-full rounded-md bg-yellow-300 p-1 border-red-600 border-2  mt-4 hover:bg-yellow-400">Read More</button></a>
</div>
    </div>
    <div class="w-auto h-auto group">
    <h3 class="text-2xl">Jog Falls</h3>
<img class="w-full h-auto group-hover:scale-95 transition"    src="f5.png" alt="" />
<div class="w-full h-auto text-justify mt-5 flex flex-col ">

  <p>Cascading at a great height of 830 feet, Jog Falls is arguably the most visited waterfall in South India and one of the most in India. Located in the Shimoga..........</p>
 <a  class="w-full h-auto"href="https://en.wikipedia.org/wiki/Jog_Falls"> <button class=" w-full rounded-md bg-yellow-300 p-1 border-red-600 border-2  mt-4 hover:bg-yellow-400">Read More</button></a>
</div>
    </div>
    <div class="w-auto h-auto group">
    <h3 class="text-2xl">Netrani Island</h3>
<img class="w-full h-auto group-hover:scale-95 transition"    src="f6.png" alt="" />
<div class="w-full h-auto text-justify mt-5 flex flex-col ">

  <p>Not just restricted to the heritage and history of the Karnataka Land, the seven wonders also include the beautiful coastline of the state. One of its kind..........</p>
 <a  class="w-full h-auto"href="https://en.wikipedia.org/wiki/Netrani_Island"> <button class=" w-full rounded-md bg-yellow-300 p-1 border-red-600 border-2  mt-4 hover:bg-yellow-400">Read More</button></a>
</div>
    </div>
  </div>
</div>

<footer class="">  

<div class=" pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-18 bg-gradient-to-t from-red-600  justify-center align-middle grid grid-cols-6 to-yellow-300 w-full h-20 items-center ">

<img  class="w-10 h-10  bg-transparent" src="dance.png" alt="" />
<img class="w-10 h-10   bg-transparent" src="chapati.png" alt="" />
<img class="w-10 h-10  bg-transparent" src="rickshaw.png" alt="" />
<img class="w-10 h-10  bg-transparent" src="music.png" alt="" />
<img class="w-10 h-10  bg-transparent" src="greeting.png" alt="" />
<img class="w-10 h-10  bg-transparent" src="diwali-lamp.png" alt="" />

</div>
</footer>
 </div>
    )
}