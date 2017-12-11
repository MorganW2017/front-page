<template>
  <body>
    <div class="nav">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
        </div>
        <ul class="nav navbar-nav">
          <li class="active">
          <li><a href="#">Home</a></li>
          <li><a href="#">My Profile</a></li>
        </ul>
        <a><h4 @click="logout" class="logout text-right">Log Out</h4></a>
      </div>
    </nav>
   
    <div class="row"></div>
    <router-view></router-view>
  </div>
</div>
</div>
</body>

</template>

<script>
  import Error from './components/Error'
  export default {
    name: 'app',
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    },
    components: {
      Error
    },
    mounted() {
      this.$store.dispatch('authenticate')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .logout {
    list-style-type: none;
    margin-right: 10px;
    padding: 3px;
    overflow: hidden;
    float: right;
    cursor: pointer;
    color: rgb(168, 155, 155);
    outline: 1px solid black;
}

.logout:hover{
  background-color: rgba(172, 0, 0, 0.87);
  color: rgb(255, 255, 255);
  transition: .3s
}
.main{
  height: 100%;
  width: 100%;
  background-color: rgba(32, 62, 117, 0.308)
}


</style>