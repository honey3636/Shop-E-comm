import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import '@/assets/tailwind.css';

//---FontAwesome----
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // Regular icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Brand icons

// Add the imported icons to the library
library.add(fas, far, fab);

import store from './store/store.js'
import Swal from 'sweetalert2';
const app=createApp(App);

app.use(store);
app.use(router);
app.config.globalProperties.$swal = Swal;
// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');