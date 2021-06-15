<template>
    
<section id="hero">

  <div class="grid grid-cols-1 md:grid-cols-2 md:px-8 md:py-12 md:gap-x-8 md:py-5 lg:py-16 lg:ml-20" >
    <div class="relative z-10 col-start-1 row-start-1 px-4 pt-44 md:pt-10 lg:pt-40 pb-3 bg-gradient-to-t from-black md:bg-none"  data-aos="zoom-out" data-aos-delay="500" data-aos-once="true">
      <p class="text-sm font-medium md:mb-1 text-gray-500  transform rotate-2  lg:transform hover:-rotate-2 rotate-2 ">Hello World!</p>
      <h2
        class="text-xl font-semibold text-gray-400 md:text-2xl md:leading-7 text-black md:text-3xl  transform -skew-y-2  lg:transform hover:-rotate-2 rotate-2 ">
        Welocome to My Jurney!</h2>

      <hr class="w-full border-gray-300 hidden mt-2 md:block">
    </div>
    
    <div class="col-start-1 row-start-2 px-4 md:pb-16">
      <div class="flex items-center text-sm font-medium my-5 md:mt-2 md:mb-4"  data-aos="zoom-out" data-aos-delay="700" data-aos-once="true">

        <!-- <div class="ml-1">
                  <span class="text-black">4.94</span>
                  <span class="sm:hidden md:inline">(128)</span>
                </div> -->
        <div class="text-base font-normal mx-2 text-gray-600  transform -rotate-2 lg:transform hover:-rotate-2 rotate-2 ">Web Developer,</div>
        <div class=" lg:transform hover:-rotate-2 rotate-2 " >Malang-Indonesia</div>
          <div class="flex items-center text-sm font-medium my-5 md:mt-2 md:mb-4"  data-aos="zoom-out" data-aos-delay="1000" data-aos-once="true">
        <svg width="20" height="20" fill="currentColor" class="text-violet-600">
          <path
            d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
        </svg>
        <!-- <div class="ml-1">
                  <span class="text-black">4.94</span>
                  <span class="sm:hidden md:inline">(128)</span>
                </div> -->
        <div class="text-base font-normal mx-2 text-gray-600  transform rotate-2  lg:transform hover:-rotate-2 rotate-2 ">Laravel 8, Vue 3, Tailwind 2</div>
        <!-- <div>Malang-Indonesia</div> -->
      </div>
        
      </div>
    
   

    <div class="col-start-1 row-start-3 space-y-3 px-4 mb-4 md:mb-0 flex justify-center"  data-aos="zoom-out" data-aos-delay="1200" data-aos-once="true">
      
     <div class="px-5">
        <p class="flex items-center text-black text-sm font-medium transform rotate-2 flex-1  lg:transform hover:-rotate-2 rotate-2 ">
        <img src="../../../../public/img/logo1-rm.png" alt="" class="w-6 h-6 rounded rounded-full mr-2 bg-gray-100  hover:shadow hover:shadow-lg lg:transform hover:-rotate-6 rotate-2">
        Kukuh Setya Nugraha
      </p>

      
     </div>
     
     <div class="px-5">
        <button type="button"
        class="bg-emerald-400 hover:bg-emerald-500 hover:text-gray-100 hover:shadow hover:shadow-lg text-base font-semibold px-6 md:px-10 py-2 rounded-full text-gray-800   hover:shadow hover:shadow-lg transform  -rotate-2 hover:rotate-6">Lihat
        Portofolio</button>
     </div>

    </div>
    
      <hr class="w-full border-gray-300 hidden mt-2 md:block">
    </div>
    

    <div
      class="col-start-1 row-start-1 flex md:col-start-2 md:row-span-3  lg:-m-20  inset-x-0 z-49 antialiased"   data-aos="zoom-out" data-aos-delay="800" data-aos-once="true">
      <div class="w-full grid grid-cols-1 grid-rows-2 gap-2 ">
        <div class="relative col-span-3 row-span-2 lg:col-span-2 lg:mt-24 lg:py-5">
          <img src="../../../../public/img/logo1-rm.png" alt=""
            class="absolute inset-0 w-full h-full  object-cover bg-gray-100 rounded md:rounded-full  shadow shadow-2xl  transform rotate-2  lg:transform hover:-rotate-2 rotate-2 " />
        </div>
        

      </div>
    </div>


    <!-- <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3 lg:-m-20">
              <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
                <div class="relative col-span-3 row-span-2 md:col-span-2">
                  <img src="../public/img/logo2.png" alt="" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
                </div>
                <div class="relative hidden md:block">
                  <img src="../public/img/logo2.png" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                </div>
                <div class="relative hidden md:block">
                  <img src="../public/img/logo2.png" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                </div>
              </div>
            </div> -->

            
  </div>
</section>
</template>
<script>
export default {
  name: 'Hero',
  props: {
    msg: String
  }
}
</script>