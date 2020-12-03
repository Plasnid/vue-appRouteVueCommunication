<template>
  <div>
      <Header />
      Cart
      <button class="btn" v-on:click="returnHome">Return to Home</button>
      <button class="btn" v-on:click="checkOut">CheckOut</button>
      <Footer />
    </div>
</template>

<script>

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: 'Cart',
  components: {
    Header,
    Footer
  },
  methods: {
    returnHome () {
      // go to cart
      this.$router.push('Home');
    },
    checkOut () {
      // send json to service
      this.$router.push('CheckOut');
    }
  }
}
</script>

<style>

</style>