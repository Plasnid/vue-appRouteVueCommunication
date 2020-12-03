<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col l4 offset-l4">
          <h3>SIGN IN</h3>
          <label for="student_id">Student ID:</label>
          <input type="text" v-model="login.student_id" id="student_id" placeholder="Student ID" >
          <label for="password">Password:</label>
          <input type="password" v-model="login.password" id="password" placeholder="Password">
          <button class="btn" v-on:click="checkCredentials">OK</button>
        </div>
      </div>
      </div>
  </div>
</template>

<script>



export default {
  name: 'Sign_In',
  data(){
    return{
    login: {
        student_id: '900000009',
        password: 'dingo'
      }
    }
  },
  methods: {
    checkCredentials () {
      // send info to service
      // results do if else if OK
      //this.$router.push('Home');
      console.log(`STUDENT ID: ${this.login.student_id}`);
      this.$emit("changeState",{state:"login",student_id:this.login.student_id,password:this.login.password});
    }
  }
}
</script>

<style>

</style>