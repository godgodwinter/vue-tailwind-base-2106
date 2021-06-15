<template>
   <div class="flex mt-6 px-10 justify-between ">
       <div>
            <h2 class="text-gray-600 font-bold uppercase underline px-10  py-2  ">Tabel Satu</h2>
       </div>
       <div>   
           <button href="#" class="hover:text-gray-600  rounded bg-emerald-400 text-white py-1 px-3  ml-2   focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:ring-opacity-50 shadow shadow-lg rounded rounded-lg px-10 py-2  transform  rotate-2 hover:-rotate-6 duration-500"><font-awesome-icon :icon="['fas', 'plus']" /> TAMBAH </button>  
                
       </div>
    </div>
    <div class="flex py-5 px-10">
        <table class="border-collapse w-full">
    <thead>
        <tr>
            <th class="p-3 font-bold uppercase bg-cyan-200 text-cyan-600 border border-cyan-300 hidden lg:table-cell w-0.5">NO</th>
            <th class="p-3 font-bold uppercase bg-cyan-200 text-cyan-600 border border-cyan-300 hidden lg:table-cell">NAMA</th>
            <th class="p-3 font-bold uppercase bg-cyan-200 text-cyan-600 border border-cyan-300 hidden lg:table-cell">Status</th>
            <th class="p-3 font-bold uppercase bg-cyan-200 text-cyan-600 border border-cyan-300 hidden lg:table-cell w-3.5">Aksi</th>
        </tr>
    </thead>
    <tbody>
        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NO</span>
                1
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NAMA</span>
                Schweden
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold">active</span>
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex justify-between">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Aksi</span>
            <div class="flex w-full justify-center">
                
                <button href="#" class="hover:text-gray-600 underline rounded bg-light-blue-400 text-white py-1 px-3 w-10 focus:outline-none focus:ring-4 focus:ring-light-blue-200 focus:ring-opacity-50  transform  -rotate-2 hover:rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'info']" />  </button>

                <button href="#" class="hover:text-gray-600 underline rounded bg-yellow-400 text-white py-1 px-3 ml-2   w-10 focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:ring-opacity-50  transform  rotate-2 hover:-rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'feather']" />  </button>

             
                <button href="#" class="hover:text-gray-600 underline rounded bg-rose-400 text-white py-1 px-3  ml-2  w-10 focus:outline-none focus:ring-4 focus:ring-rose-200 focus:ring-opacity-50  transform  -rotate-2 hover:rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'trash']" />  </button>  
                
              </div>
            </td>
        </tr>
        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NO</span>
                2
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NAMA</span>
                Schweden
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold">active</span>
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex justify-between">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Aksi</span>
            <div class="flex w-full justify-center">
                
                <button href="#" class="hover:text-gray-600 underline rounded bg-light-blue-400 text-white py-1 px-3 w-10 focus:outline-none focus:ring-4 focus:ring-light-blue-200 focus:ring-opacity-50  transform  -rotate-2 hover:rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'info']" />  </button>

                <button href="#" class="hover:text-gray-600 underline rounded bg-yellow-400 text-white py-1 px-3 ml-2   w-10 focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:ring-opacity-50  transform  rotate-2 hover:-rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'feather']" />  </button>

             
                <button href="#" class="hover:text-gray-600 underline rounded bg-rose-400 text-white py-1 px-3  ml-2  w-10 focus:outline-none focus:ring-4 focus:ring-rose-200 focus:ring-opacity-50  transform  -rotate-2 hover:rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'trash']" />  </button>  
                
              </div>
            </td>
        </tr>
        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NO</span>
                3
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NAMA</span>
                Schweden
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold">active</span>
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex justify-between">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Aksi</span>
            <div class="flex w-full justify-center">
                
                <button href="#" class="hover:text-gray-600 underline rounded bg-light-blue-400 text-white py-1 px-3 w-10 focus:outline-none focus:ring-4 focus:ring-light-blue-200 focus:ring-opacity-50  transform  -rotate-2 hover:rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'info']" />  </button>

                <button href="#" class="hover:text-gray-600 underline rounded bg-yellow-400 text-white py-1 px-3 ml-2   w-10 focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:ring-opacity-50  transform  rotate-2 hover:-rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'feather']" />  </button>

             
                <button href="#" class="hover:text-gray-600 underline rounded bg-rose-400 text-white py-1 px-3  ml-2  w-10 focus:outline-none focus:ring-4 focus:ring-rose-200 focus:ring-opacity-50  transform  -rotate-2 hover:rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'trash']" />  </button>  
                
              </div>
            </td>
        </tr>
        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NO</span>
                4
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NAMA</span>
                Schweden
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold">active</span>
            </td>
            <td class="w-full lg:w-auto p-1 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex justify-between">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Aksi</span>
            <div class="flex w-full justify-center">
                
                <button href="#" class="hover:text-gray-600 underline rounded bg-light-blue-400 text-white py-1 px-3 w-10 focus:outline-none focus:ring-4 focus:ring-light-blue-200 focus:ring-opacity-50  transform  -rotate-2 hover:rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'info']" />  </button>

                <button href="#" class="hover:text-gray-600 underline rounded bg-yellow-400 text-white py-1 px-3 ml-2   w-10 focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:ring-opacity-50  transform  rotate-2 hover:-rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'feather']" />  </button>

             
                <button href="#" class="hover:text-gray-600 underline rounded bg-rose-400 text-white py-1 px-3  ml-2  w-10 focus:outline-none focus:ring-4 focus:ring-rose-200 focus:ring-opacity-50  transform  -rotate-2 hover:rotate-6 duration-500 "><font-awesome-icon :icon="['fas', 'trash']" />  </button>  
                
              </div>
            </td>
        </tr>
       
    </tbody>
</table>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>