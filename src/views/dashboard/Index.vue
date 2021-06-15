<template>
    <div>
        <Navigation></Navigation>
        <Header></Header>

        <div class="lg:flex w-full lg:justify-between py-5 px-5" data-aos="zoom-out" data-aos-delay="200" data-aos-once="true">
            <div class="w-full lg:w-10/12 shadow shadow-lg mr-2">
                <Table></Table>
            </div>
            <div class="lg:w-4/12 mt-5 md:mt0">
                <Form></Form>
            </div>
        </div>

        <div class="px-5 py-5 shadow shadow-lg flex justify-between">
            <Modal></Modal>
            <Modal></Modal>
            <Modal></Modal>
        </div>
        


        <!-- <div class="py-16 px-4 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16 lg:ml-20"> -->

        <!-- <button href=""  @click.prevent="logout" class="bg-emerald-500 py-3 px-3 rounded-sm block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
        LOGOUT
      </button> -->

        <!-- Selamat Datang <strong>{{ user.name }}</strong> -->
        <!-- </div> -->



    </div>
</template>

<script>
    import Navigation from './../../components/Navigation.vue'
    import Table from './../../components/base/Table.vue'
    import Form from './../../components/base/Form.vue'
    import Header from './../../components/admin/Header.vue'
    import Modal from './../../components/base/Modal.vue'
    import {
        onMounted,
        ref
    } from 'vue'
    import {
        useRouter
    } from 'vue-router'
    import axios from 'axios'

    export default {
        components: {
            Navigation,
            Header,
            Form,
            Table,
            Modal,
        },

  data() {
    return {
    //   showModal: false
    }
  },
  methods: {
    // toggleModal: function(){
    //   this.showModal = !this.showModal;
    // }
  },

        setup() {
            //state token
            const token = localStorage.getItem('token')

            //inisialisasi vue router on Composition API
            const router = useRouter()

            //state user
            const user = ref('')

            //mounted properti
            onMounted(() => {

                //check Token exist
                if (!token) {
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

                        if (response.data.success) {

                            //remove localStorage
                            localStorage.removeItem('token')

                            //redirect ke halaman login
                            return router.push({
                                name: 'login'
                            })

                        }

                    })
                    .catch(error => {
                        console.log(error.response.data)
                    })

            }

            return {
                token, // <-- state token
                user, // <-- state user
                logout, // <-- method logout
            }

        }

    }

    
</script>
<style scoped>

		.animated {
			-webkit-animation-duration: 1s;
			animation-duration: 1s;
			-webkit-animation-fill-mode: both;
			animation-fill-mode: both;
		}

		.animated.faster {
			-webkit-animation-duration: 500ms;
			animation-duration: 500ms;
		}

		.fadeIn {
			-webkit-animation-name: fadeIn;
			animation-name: fadeIn;
		}

		.fadeOut {
			-webkit-animation-name: fadeOut;
			animation-name: fadeOut;
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
			}

			to {
				opacity: 1;
			}
		}

		@keyframes fadeOut {
			from {
				opacity: 1;
			}

			to {
				opacity: 0;
			}
		}
</style>