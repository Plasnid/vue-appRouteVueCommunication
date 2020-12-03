<template>
  <div>
      <Header />
      Profile Edit
      <button class="btn green" v-on:click="updateProfile">Update</button>
      <button class="btn grey" v-on:click="cancel">Cancel</button>
      <Footer />
      </div>
</template>

<script>

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: 'Profile_Edit',
  components: {
    Header,
    Footer
  },
  methods: {
    updateProfile () {
      // update data
      // do some work
      this.$router.push('Profile');
    },
    cancel () {
      // return only
      this.$router.push('Profile');
    }
  }
}
</script>

<style>

</style>