<template>
  <div>
    <div>

      <div class="bg">
        <img src="../assets/rooted_bg.jpg" alt="Roots">
      </div>
      <svg viewbox="0 -5 400 400" class="worm">
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
        <circle />
      </svg>
    </div>
    <div class="ui inverted menu">
      <div class="header item">Brand</div>
      <router-link class="item">Home</router-link>
      <div class="active item">Link</div>
      <div class="ui dropdown item">
        Dropdown
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item">Action</div>
          <div class="item">Another Action</div>
          
        </div>
      </div>
      <div class="right menu">
        <div class="item">
          <div class="ui transparent inverted icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="Search">
          </div>
        </div>
        <button @click="userLogout" class="logout-header">Logout</button>
      </div>
    </div>
    <!-- <div class="clock">
    <svg src="../assets/SVGDigitalClock.svg" width="300" height="200"> </svg>
  </div> -->
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        register: {},
        login: {},
      }
    },
    name: 'home',
    mounted() {
      $(this.$el).dropdown();
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      //   updateDropdown() {
      //     let id_value = $(this.$el).find('input').val();
      //     id_value = (id_value === "" || id_value === null) ? '' : id_value;
      //     this.$emit('input', id_value);
      //     this.$emit('valuechanged');
      //   }
      // },
      userLogout() {
        this.$store.dispatch('logout', this.$store.state.user._id)
      }
    }
  }
</script>

<style scoped>
  .ui.menu {
    margin-top: 0px;
  }

  .ui.menu:last-child {
    margin-bottom: 75px;
  }

  .bg {
    width: 100%;
    height: 100%;
    background: cover;
    justify-content: center;
    align-content: center;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -100
  }

  .logout {
    z-index: 10;
  }

  .worm {
    z-index: -1;
    position: fixed;
    display: flex;
    margin-top: 100px;
  }

  body,
  html {
    padding: 1em;
    margin: 0;
    background: teal;
  }

  svg {
    display: block;
  }

  circle {
    animation: circles 2s alternate infinite cubic-bezier(0.5, 0, 0.5, 1);
    cy: 50;
  }

  circle:nth-child(4n+1) {
    fill: darkorange;
  }

  circle:nth-child(4n+2) {
    fill: gold;
  }

  circle:nth-child(4n+3) {
    fill: teal;
  }

  circle:nth-child(4n+4) {
    fill: tomato;
  }

  circle:nth-child(0) {
    animation-delay: 0s;
    cx: 61;
    r: 8.5;
  }

  circle:nth-child(1) {
    animation-delay: -0.15s;
    cx: 59;
    r: 9;
  }

  circle:nth-child(2) {
    animation-delay: -0.3s;
    cx: 57;
    r: 9.5;
  }

  circle:nth-child(3) {
    animation-delay: -0.45s;
    cx: 55;
    r: 10;
  }

  circle:nth-child(4) {
    animation-delay: -0.6s;
    cx: 53;
    r: 10.5;
  }

  circle:nth-child(5) {
    animation-delay: -0.75s;
    cx: 51;
    r: 11;
  }

  circle:nth-child(6) {
    animation-delay: -0.9s;
    cx: 49;
    r: 11.5;
  }

  circle:nth-child(7) {
    animation-delay: -1.05s;
    cx: 47;
    r: 12;
  }

  circle:nth-child(8) {
    animation-delay: -1.2s;
    cx: 45;
    r: 12.5;
  }

  circle:nth-child(9) {
    animation-delay: -1.35s;
    cx: 43;
    r: 13;
  }

  circle:nth-child(10) {
    animation-delay: -1.5s;
    cx: 41;
    r: 13.5;
  }

  circle:nth-child(11) {
    animation-delay: -1.65s;
    cx: 39;
    r: 14;
  }

  circle:nth-child(12) {
    animation-delay: -1.8s;
    cx: 37;
    r: 14.5;
  }

  circle:nth-child(13) {
    animation-delay: -1.95s;
    cx: 35;
    r: 15;
  }

  circle:nth-child(14) {
    animation-delay: -2.1s;
    cx: 33;
    r: 15.5;
  }

  circle:nth-child(15) {
    animation-delay: -2.25s;
    cx: 31;
    r: 16;
  }

  circle:nth-child(16) {
    animation-delay: -2.4s;
    cx: 29;
    r: 16.5;
  }

  circle:nth-child(17) {
    animation-delay: -2.55s;
    cx: 27;
    r: 17;
  }

  circle:nth-child(18) {
    animation-delay: -2.7s;
    cx: 25;
    r: 17.5;
  }

  circle:nth-child(19) {
    animation-delay: -2.85s;
    cx: 23;
    r: 18;
  }

  circle:nth-child(20) {
    animation-delay: -3s;
    cx: 21;
    r: 18.5;
  }

  circle:nth-child(21) {
    animation-delay: -3.15s;
    cx: 19;
    r: 19;
  }

  circle:nth-child(22) {
    animation-delay: -3.3s;
    cx: 17;
    r: 19.5;
  }

  circle:nth-child(23) {
    animation-delay: -3.45s;
    cx: 15;
    r: 20;
  }

  circle:nth-child(24) {
    animation-delay: -3.6s;
    cx: 13;
    r: 20.5;
  }

  circle:nth-child(25) {
    animation-delay: -3.75s;
    cx: 11;
    r: 21;
  }

  circle:nth-child(26) {
    animation-delay: -3.9s;
    cx: 9;
    r: 21.5;
  }

  circle:nth-child(27) {
    animation-delay: -4.05s;
    cx: 7;
    r: 22;
  }

  circle:nth-child(28) {
    animation-delay: -4.2s;
    cx: 5;
    r: 22.5;
  }

  circle:nth-child(29) {
    animation-delay: -4.35s;
    cx: 3;
    r: 23;
  }

  circle:nth-child(30) {
    animation-delay: -4.5s;
    cx: 1;
    r: 23.5;
  }

  circle:nth-child(31) {
    animation-delay: -4.65s;
    cx: -1;
    r: 24;
  }

  circle:nth-child(32) {
    animation-delay: -4.8s;
    cx: -3;
    r: 24.5;
  }

  circle:nth-child(33) {
    animation-delay: -4.95s;
    cx: -5;
    r: 25;
  }

  circle:nth-child(34) {
    animation-delay: -5.1s;
    cx: -7;
    r: 25.5;
  }

  circle:nth-child(35) {
    animation-delay: -5.25s;
    cx: -9;
    r: 26;
  }

  circle:nth-child(36) {
    animation-delay: -5.4s;
    cx: -11;
    r: 26.5;
  }

  circle:nth-child(37) {
    animation-delay: -5.55s;
    cx: -13;
    r: 27;
  }

  circle:nth-child(38) {
    animation-delay: -5.7s;
    cx: -15;
    r: 27.5;
  }

  circle:nth-child(39) {
    animation-delay: -5.85s;
    cx: -17;
    r: 28;
  }

  circle:nth-child(40) {
    animation-delay: -6s;
    cx: -19;
    r: 28.5;
  }

  circle:nth-child(41) {
    animation-delay: -6.15s;
    cx: -21;
    r: 29;
  }

  circle:nth-child(42) {
    animation-delay: -6.3s;
    cx: -23;
    r: 29.5;
  }

  circle:nth-child(43) {
    animation-delay: -6.45s;
    cx: -25;
    r: 30;
  }

  circle:nth-child(44) {
    animation-delay: -6.6s;
    cx: -27;
    r: 30.5;
  }

  circle:nth-child(45) {
    animation-delay: -6.75s;
    cx: -29;
    r: 31;
  }

  @keyframes circles {
    to {
      transform: translate(5%, 50%);
    }
  }

  /* .clock {
    max-width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
  } */
</style>