<template>
  <div id="app">
    <div id="nav">
      <!--<ul id="nav-mobile" class="center hide-on-med-and-down">
        <li><router-link to="/">Sign In</router-link> |</li>
        <li><router-link to="/home">Home</router-link> |</li>
        <li><router-link to="/cart">Cart</router-link> |</li>
        <li><router-link to="/profile">Profile</router-link> |</li>
        <li><router-link to="/profile_edit">Edit Profile</router-link> |</li>
      </ul>-->
    </div>
    <router-view @changeState="setState"/>
  </div>
</template>

<script>
  import M from 'materialize-css'

  export default {
    data() {
      return {
        student_id: "",
        password: "",
        categories: {},
        assets: {},
        cart: {},
        cartItems: 12,
        borrower: {
          firstName: "dingo",
          lastName: "ate",
          borrower_id: "2345"
        }
      }
      },
      methods: {
        setState(e) {
            console.log(e);
            switch (e.state) {
              case "login":
                this.student_id = e.student_id;
                this.password = e.password;
                //alert("STUDENT ID: "+this.student_id);
                this.getLogIn(e);
                break;
              case "home":
                //alert("home now");
                //alert("STUDENT ID: "+this.student_id);
                this.getAssets();
                break;
              case "category":
                this.assets = this.categories[e.category].assets;
                break;
            }
          },
          getAssets() {
            console.log(this.borrower.student_id);
            const options = {
              //url: 'https://dca.durhamcollege.ca/~gubalaraymond/signout/dynamic_site/services/get_assets.php',
              url: 'https://dca.durhamcollege.ca/~sacklerstuart/services/get_assets.php',
              method: 'POST',
              data: {
                student_id: this.student_id
              }
            }
            this.$axios(options)
              .then((res) => {
                console.log(res.data);
                //this.borrowers = res.data;
                switch (res.data.error.id) {
                  case 0 :
                    // ? push down to home
                    this.categories = res.data.categories;
                    console.log("categories: ");
                    console.log(this.categories);
                    break;
                /* add other responses here */
                  default:
                    alert("Something went wrong with the assets");
                    break;
                }
              })
              .catch((err) => {
                console.error('Login failed.'+err);
              })
          },

          getLogIn(e) {
            console.log(e.student_id);
            //this.student_id = e.student_id;
            const options = {
              //url: 'https://dca.durhamcollege.ca/~gubalaraymond/signout/dynamic_site/services/login.php',
              url: 'https://dca.durhamcollege.ca/~sacklerstuart/services/login.php',
              method: 'POST',
              data: {
                student_id: e.student_id,
                password: e.password
              }
            }
            this.$axios(options)
              .then((res) => {
                //console.log(res.data.borrower.borrower_id);
                //this.borrowers = res.data;
                switch (res.data.error.id) {
                  case 0 :
                    this.borrower.firstName = res.data.borrower.first_name;
                    this.borrower.lastName = res.data.borrower.last_name;
                    this.borrower.borrower_id = res.data.borrower.borrower_id;
                    //alert("route");
                    console.log(this.borrower);
                    this.$router.push('Home');
                    break;
                /* add other responses here */
                  default:
                    alert("Something went wrong please try again.");
                    document.getElementById('#student_id').focus();
                    break;
                }
              })
              .catch((err) => {
                console.error('Login failed.'+err);
              })
          }
      },

      mounted () {
      M.AutoInit()
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
#nav-mobile>li{
  display: inline-block;
}
#nav-mobile>li:last-child{
  padding-left: 2px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
