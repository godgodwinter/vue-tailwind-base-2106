import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
// import Toasted from 'vue-toasted';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faBackward } from "@fortawesome/free-solid-svg-icons"
import { faFeather } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faInfo} from "@fortawesome/free-solid-svg-icons"
import { faPlus,faBook,faBookmark,faBookMedical,faSignOutAlt} from "@fortawesome/free-solid-svg-icons"

library.add(faPhone);
library.add(faUserSecret)
library.add(faBackward)
library.add(faFeather)
library.add(faTrash)
library.add(faInfo)
library.add(faPlus,faBookmark,faBook,faBookMedical,faSignOutAlt)

//import router
import router from './router'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 



AOS.init();

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.config.productionTip = false


// app.use(Toasted)
//use vue router
app.use(router)
app.component('QuillEditor', QuillEditor)

app.mount('#app')