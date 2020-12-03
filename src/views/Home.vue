<template>
  <div class="home">
    <Header />
    <div class="container">
      <ul class="menu">
        <li class=""  v-for="(item, index) in this.$parent.categories" :key="index" @click="getAssets(item.id)" >{{index}} {{item.name}}</li>
      </ul>
      
      <br>
      <div class="pink">
        <div class="" v-for="(item, index) in this.$parent.assets" :key="index">{{item.asset_description}} ({{item.assets_count_available}})</div>
      </div>
    </div>
  <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  methods: {
    getAssets(id) {
      alert("ITEM");
      console.log(`ITEM #: ${id}`);
      this.$emit("changeState",{state:"category",category:id});
    }
  },
  mounted () {
    //alert("Mounted");
    this.$emit("changeState",{state:"home"});
  }
}
</script>

<style>

ul.menu li {
  float: left;
  width: 14.28%;
}

.tab {
  display: none;
}

.dslr {
  display: block;
}
</style>