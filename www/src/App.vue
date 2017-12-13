<template>

  <head>
    <title>getMorgan.info</title>
    <meta charset="utf-8">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/manifest.json">
  </head>

  <body>
    <div class="nav">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
          </div>
          <ul class="nav navbar-nav">
            <li class="active">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">My Profile</a>
              </li>
          </ul>
          <a>
            <h4 @click="logout" class="logout text-right">Log Out</h4>
          </a>
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

  .logout:hover {
    background-color: rgba(172, 0, 0, 0.87);
    color: rgb(255, 255, 255);
    transition: .3s
  }

  .main {
    height: 100%;
    width: 100%;
    background-color: rgba(32, 62, 117, 0.308)
  }
</style>