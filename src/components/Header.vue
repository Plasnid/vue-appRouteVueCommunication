<template>
    <div class="red">
      <h1 class="center">Header</h1>
      <button class="btn" v-on:click="getCart">Cart {{this.$parent.cartItems}}</button>
        
    </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    getCart () {
      // go to cart
      this.$router.push('Cart');
    }
  }
}
</script>

<style>
.red {
    
}
</style>