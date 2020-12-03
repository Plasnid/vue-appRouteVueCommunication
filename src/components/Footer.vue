<template>
 <div class="pink">
     <p class="center">Footer 
         <button class="btn" v-on:click="getProfile">Profile</button>
     </p>
 </div>
</template>

<script>
export default {
    name: 'Footer',
  methods: {
    getProfile () {
      // go to cart
      this.$router.push('Profile');
    }
  }
}
</script>

<style>

</style>