import Vue from "vue";
import App from "./App.vue"; // 특정 컴포넌트 import

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App), // template 속성과비슷(template 속성이 내부적으로 render 사용): 컴포넌트를 랜더링
}).$mount("#app"); // el 속성과 같음: id="app" DOM 객체에 Vue 인스턴스 마운트
