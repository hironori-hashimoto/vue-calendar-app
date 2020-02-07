import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDEFoVrkMmgN6iXAuiFouV1zikwxNLFhno",
  authDomain: "vue-calendar-a95b5.firebaseapp.com",
  databaseURL: "https://vue-calendar-a95b5.firebaseio.com",
  projectId: "vue-calendar-a95b5",
  storageBucket: "vue-calendar-a95b5.appspot.com",
  messagingSenderId: "592754763713",
  appId: "1:592754763713:web:ffb5787287277013fbb140"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
