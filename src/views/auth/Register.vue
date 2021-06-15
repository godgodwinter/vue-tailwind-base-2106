<template>
    
<section id="tailwind-box">

  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"  data-aos="zoom-out" data-aos-delay="500" data-aos-once="true">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div class="flex justify-center">
              <img src="../../../public/img/ilu2.png" class="max-h-24 sm:max-h-24" />
          </div>
          <div class="flex justify-center">
             
         <router-link :to="{name: 'register'}"  href="" class="inline-block text-sm px-4 py-2 leading-none border rounded text-emerald-500 border-emerald-800 hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 lg:ml-4  hover:shadow hover:shadow-lg transform hover:rotate-6 -rotate-2">Daftar</router-link>

          </div>
          <div class="divide-y divide-gray-200 py-3">
            <div class="py-0 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"></div>
            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              
              <form @submit.prevent="register">
                             
            <div class="md:flex flex-row md:space-x-4 w-full text-md">
							<div class="mb-3 space-y-2 w-full text-md">
								<label class="font-bold text-gray-600 py-2" for="user-name">Nama Lengkap</label>
							
							</div>
							<div class="mb-3 space-y-2 w-full text-xs">
								<input placeholder="Nama Lengkap" v-model="user.name"  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[name]" id="user-name">
								<p class="text-red text-xs "  v-if="validation.name" >{{ validation.name[0] }}</p>
							</div>
						</div>
                         
            <div class="md:flex flex-row md:space-x-4 w-full text-md">
							<div class="mb-3 space-y-2 w-full text-md">
								<label class="font-bold text-gray-600 py-2" for="user-email">Email address</label>
							
							</div>
							<div class="mb-3 space-y-2 w-full text-xs">
								<input placeholder="Email" v-model="user.email"  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="email" name="integration[email]" id="user-email">
								<p class="text-red text-xs "  v-if="validation.email" >{{ validation.email[0] }}</p>
							</div>
						</div>

              <div class="md:flex flex-row md:space-x-4 w-full text-md">
							<div class="mb-3 space-y-2 w-full text-md">
								<label class="font-bold text-gray-600 py-2" for="user-pass">Password</label>
							
							</div>
							<div class="mb-3 space-y-2 w-full text-xs">
								<input placeholder="Password" v-model="user.password"  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="password" name="integration[pass]" id="user-pass">
								<p class="text-red text-xs "  v-if="validation.password"  >{{ validation.password[0] }}</p>
							</div>
						</div>

              <div class="md:flex flex-row md:space-x-4 w-full text-md">
							<div class="mb-3 space-y-2 w-full text-md">
								<label class="font-bold text-gray-600 py-2" for="user-password">Password</label>
							
							</div>
							<div class="mb-3 space-y-2 w-full text-xs">
								<input placeholder="Password" v-model="user.password_confirmation"  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="password" name="integration[password]" id="user-password">
								<p class="text-red text-xs "  v-if="validation.password"  >{{ validation.password[0] }}</p>
							</div>
              
						</div>
                <div class="text-right md:space-x-3 md:block flex flex-col-reverse py-3"> <button type="submit" class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50">Register</button>
									<!-- <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"> Cancel </button>
									<button class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Save</button> -->
								</div>

            <hr>
          <div class="mt-5 text-right md:space-x-3 md:block flex justify-between">  
            <p class="text-sm text-gray-400">Sudah memiliki akun?
             <router-link :to="{name: 'login'}"  href="" class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-500 border-gray-800 hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 lg:ml-4  hover:shadow hover:shadow-lg transform hover:rotate-6 -rotate-2 hover:border-cyan-500 hover:text-cyan-500">Login</router-link></p></div>

                        </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
    import { reactive, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import axios from 'axios'
    import { createToast } from 'mosha-vue-toastify';
    import 'mosha-vue-toastify/dist/style.css'

    export default {


        setup() {
            const toast = (pesan,typepesan) => {
                createToast(pesan,{
                  type:typepesan,
                  transition: 'slide', //zoom,slide,bounce
                  timeout: 2000,
                  showIcon: 'true',

                })
            }

            //inisialisasi vue router on Composition API
            const router = useRouter()

            //state user
            const user = reactive({
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            })

            //state validation
            const validation = ref([])

            //method register
            function register() {

                //define variable 
                let name = user.name
                let email = user.email
                let password = user.password
                let password_confirmation = user.password_confirmation

                //send server with axios
                axios.post('http://127.0.0.1:8000/api/register', {
                        name,
                        email,
                        password,
                        password_confirmation
                })
                .then(() => {
                        this.toast('Registrasi berhasil!','default');

                    //redirect ke halaman login
                    return router.push({
                        name: 'login'
                    })

                }).catch(error => {
                        this.toast('Registrasi gagal!','warning');
                    //set validation dari error response
                    validation.value = error.response.data
                })

            }

            return {
                user, // <-- state user
                validation, // <-- state validation 
                register, // <-- method register
                toast,    
            }

        }

    }
</script>