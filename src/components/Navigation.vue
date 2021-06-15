<template>
  <div>

  <nav class="flex items-center justify-between flex-wrap p-3 bg-gradient-to-r from-emerald-400 to-cyan-500 fixed top-0  inset-x-0 z-50 shadow shadow-lg antialiased">
  <div class="flex items-center flex-no-shrink text-black mr-6  ">
    <svg class="h-8 w-8 mr-2  hover:shadow hover:shadow-lg transform hover:-rotate-6" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <router-link :to="{name: 'dashboard'}"  class="font-semibold text-xl tracking-tight  hover:shadow hover:shadow-lg transform hover:rotate-6">BAEMON</router-link>
  </div>
  <div class="block lg:hidden ">
    <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white " type="button" v-on:click="toggleNavbar()">
      <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto "  v-bind:class="{'hidden': !showMenu, 'block': showMenu}">
    <div class="text-sm lg:flex-grow ">
      <!-- <a href="#" class="text-blue-600">asdasd</a> -->
      <!-- <a href="#mycheetsheets" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white mr-4">
        My CheetSheets
      </a>
      <a href="#portofolio" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white mr-4">
        Portofolio
      </a> -->
   
    </div>
    <div>
        <router-link :to="{name: 'dashboard'}"  href="" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white mr-4 hover:shadow hover:shadow-lg lg:transform hover:rotate-6 -rotate-2 duration-500">
        Dashboard
      </router-link>
        <router-link :to="{name: 'admin.cheatsheets'}"  href="" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white mr-4 hover:shadow hover:shadow-lg lg:transform hover:rotate-6 -rotate-2 duration-500">
        My CheatSheets
      </router-link>
      <a href="#portofolio" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white mr-4  hover:shadow hover:shadow-lg lg:transform hover:-rotate-6 rotate-2 duration-500">
        Portofolio
      </a>
         <a href="#aboutme" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white  hover:shadow hover:shadow-lg lg:transform hover:rotate-6 -rotate-2 duration-500">
        About Me
      </a>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-500 border-gray-500 hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 lg:ml-4  hover:shadow hover:shadow-lg transform hover:-rotate-6 rotate-2 duration-500">My Github</a>
    <template v-if="isLogin">

        <!-- <p class="block -mr-2 ml-3 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:shadow hover:shadow-lg lg:transform hover:rotate-6 -rotate-2 duration-500 uppercase">
        Hi, {{ user.name }} !
      </p> -->
      <button @click.prevent="logout"  href="" class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-50 border-gray-50 hover:border-transparent hover:text-teal hover:bg-teal-500 mt-4 lg:mt-0 lg:ml-4  hover:shadow hover:shadow-lg transform hover:-rotate-6 rotate-2"><font-awesome-icon :icon="['fas', 'sign-out-alt']" /> Logout</button>  
    </template>
    <template v-else>  
         <router-link :to="{name: 'register'}"  href="" class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-500 border-gray-800 hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 lg:ml-4  hover:shadow hover:shadow-lg transform hover:rotate-6 -rotate-2">Daftar</router-link>
        <router-link :to="{name: 'login'}" href="" class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-500 border-gray-800 hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 lg:ml-4  hover:shadow hover:shadow-lg transform hover:-rotate-6 rotate-2">Masuk</router-link>

    </template>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
export default {
        // created(){

        //     console.log('ini Created');
        //     // this.kelas=JSON.parse(localStorage.getItem('kelas')) || [] // operator logika, jika tidak terpenuhi maka kosong
        // },
        // beforeCreate(){
        //     console.log('ini beforeCreated');
        // },
        // mounted(){
        //     console.log('ini mounted');
        // },
        // beforeUpdate(){
        //     console.log('ini beforeUpdate');
        // },
        // updated(){
        //     console.log('ini updated');
        // },

    setup() {

            //state token
            const token = localStorage.getItem('token')
            const isLogin = localStorage.getItem('isLogin')

            //inisialisasi vue router on Composition API
            const router = useRouter()

            //state user
            const user = ref('')

              
            //mounted properti
            onMounted(() =>{

                console.log(token);
               

                //check Token exist
                if(!token) {
                    return router.push({
                        name: 'login'
                    })
                }
                
                //get data user
                axios.defaults.headers.common.Authorization = `Bearer ${token}`
                axios.get('http://localhost:8000/api/user')
                .then(response => {

                    //console.log(response.data.name)
                    user.value = response.data

                })
                .catch(error => {
                    console.log(error.response.data)
                })

            })



            //method logout
            function logout() {

                //logout
                axios.defaults.headers.common.Authorization = `Bearer ${token}`
                axios.post('http://localhost:8000/api/logout')
                .then(response => {

                    if(response.data.success) {

                        //remove localStorage
                        localStorage.removeItem('token')
                        localStorage.removeItem('isLogin')

                        //redirect ke halaman login
                        return router.push({
                            name: 'login'
                        })

                    }

                })
                .catch(error => {
                     if(error.response.data) {

                        //remove localStorage
                        localStorage.removeItem('token')
                        localStorage.removeItem('isLogin')

                        //redirect ke halaman login
                        return router.push({
                            name: 'login'
                        })

                    }
                    console.log(error.response.data)
                })

            }

            return {
                isLogin,      // <-- state token
                token,      // <-- state token
                user,       // <-- state user
                logout,      // <-- method logout
                
            }

    },

  data() {
    return {
      tokenLogin: false,
      showMenu: false,
    }
},

  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style>

</style>