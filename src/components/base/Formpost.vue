<template>
  <div class="shadow-lg shadow py-5 rounded-lg rounded py-5 ">
                    <h2 class="text-gray-600 font-bold uppercase px-5 underline mb-3">Tambah Post</h2>
                    <hr>
                    <form class="pt-10 px-10">
                        <div class="md:flex flex-row md:space-x-4 w-full text-md">
                            <div class="mb-3 space-y-2 w-full text-md">
                                <label class="font-bold text-gray-600 py-2" for="form-email">Email address</label>

                            </div>
                            <div class="mb-3 space-y-2 w-full text-xs">
                                <input placeholder="Email"
                                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                                    required="required" type="email" name="email" id="form-email">
                                <p class="text-rose-500 text-xs font-extralight" >Something Wrong *)</p>
                            </div>
                        </div>

                        <div class="md:flex flex-row md:space-x-4 w-full text-md">
                            <div class="mb-3 space-y-2 w-full text-md">
                                <label class="font-bold text-gray-600 py-2" for="form-name">Name</label>

                            </div>
                            <div class="mb-3 space-y-2 w-full text-xs">
                                <input placeholder=""
                                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                                    required="required" type="name" name="name" id="form-name">
                                <p class="text-rose-500 text-xs font-extralight" >Something Wrong *)</p>
                            </div>
                        </div>

                        <div class="md:flex flex-row md:space-x-4 w-full text-md">
                            <div class="mb-3 space-y-2 w-full text-md">
                                <label class="font-bold text-gray-600 py-2" for="form-alamat">Alamat</label>

                            </div>
                            <div class="w-full ">
                                 <select class="block w-full bg-teal-50 border border-gray-100 rounded-lg h-10 px-4 md:w-full focus:outline-none focus:ring-teal-500 focus:ring-2" required="required" name="integration[city_id]" id="form-alamat">
                                        <option value="">Seleted location</option>
                                        <option value="">Cochin,KL</option>
                                        <option value="">Mumbai,MH</option>
                                        <option value="">Bangalore,KA</option>
                                        </select>
										<p class="text-rose-500  text-xs font-extralight" id="error">Please fill out this field.</p>

                            </div>
                                       
						
                        </div>

                        <div class="py-10 h-96">
                             <QuillEditor  theme="snow"  toolbar="full" />
                        </div>
                        <div class="py-2">
                            
                        </div>
                   
                        <div class="text-right md:space-x-3 md:block flex flex-col-reverse py-5">
                            <button type="submit"
                                class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50">Add</button>
                          
                        </div>

                        <hr>
                        <div class="mt-5 text-right md:space-x-3 md:block flex justify-between">
                            <p class="text-sm text-gray-400">Belum memiliki akun?
                                <router-link :to="{name: 'register'}" href=""
                                    class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-500 border-gray-800 hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 lg:ml-4  hover:shadow hover:shadow-lg transform hover:rotate-6 -rotate-2 hover:border-cyan-500 hover:text-cyan-500">
                                    Daftar</router-link>
                            </p>
                        </div>

                    </form>
                </div>
</template>

<script>
export default {

}
</script>

<style>

</style>