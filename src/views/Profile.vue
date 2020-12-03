<template>
  <div>
      <Header />
      Profile
      <button class="btn" v-on:click="returnHome">Return to Home</button>
      <button class="btn" v-on:click="editProfile">Edit Profile</button>
      <Footer />
      </div>
</template>

<script>

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";


export default {
  name: 'Profile',
  components: {
    Header,
    Footer
  },
  methods: {
    returnHome () {
      // go to cart
      this.$router.push('Home');
    },
    editProfile () {
      // send json to service
      this.$router.push('Profile_Edit');
    }
  }
}
</script>

<style>

</style>