<template>
    
<section id="project">

  <div class="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12 lg:mt-0">
    <!-- <div class="relative py-3 sm:max-w-xl sm:mx-auto "> -->
    <div class="relative py-3">
      <div
        class="absolute inset-0 bg-gradient-to-r from-cyan-200 to-emerald-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 sm:rounded-3xl">
      </div>
      <div class="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20 px-4">

        <div class="flex justify-between">
       
          <div class="divide-y divide-gray-200 ml-4" data-aos="zoom-in" data-aos-delay="500" data-aos-once="true">
            <div class="py-5 lg:py-0 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-6 font-light">
               <img src="../../../../public/img/logo4.png" alt=""
                class="relative inset-0 w-full max-h-24 object-cover bg-gray-100 sm:rounded-lg" />
              <p>My App 1:</p>
              <ul class="list-disc space-y-2">
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">

                    <code class="text-sm font-bold text-gray-900">Laravel 8, Jetstrem, Bootrap 4</code>
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Extracting classes with
                    <code class="text-sm font-bold text-gray-900">@apply</code>
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Code completion with instant preview</p>
                </li>
              </ul>
              <p>Aplikasi untuk Perfect for learning how the framework works, prototyping a new idea, or creating a demo
                to share online.</p>
            </div>
            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <p>Want to dig deeper into My App1?</p>
              <p>
                <a href="https://tailwindcss.com/docs" class="text-cyan-600 hover:text-cyan-700"> Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
 
</template>
<script>
export default {
  name: 'Portofolio',
  props: {
    msg: String
  }
}
</script>
