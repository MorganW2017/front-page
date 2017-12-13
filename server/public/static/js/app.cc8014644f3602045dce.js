webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(33)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_timeago__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_timeago___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_timeago__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_timeago___default.a, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
    'en-US': __webpack_require__(53)
  }
})

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_Home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_Login__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: [{
        path: '/',
        name: 'Home',
        component: __WEBPACK_IMPORTED_MODULE_2_components_Home___default.a
    }, {
        path: '/login',
        name: 'Login',
        component: __WEBPACK_IMPORTED_MODULE_3_components_Login___default.a
    }]

}));

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
throw new Error("Cannot find module \"./auth-store\"");
throw new Error("Cannot find module \"./socket-store\"");






let api = __WEBPACK_IMPORTED_MODULE_2_axios___default.a.create({
    baseURL: '//localhost:3000/api/',
    timeout: 2000,
    withCredentials: true
})

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */])

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: {
        user: {},
        messages: []
    },
    modules:{
        authStore: __WEBPACK_IMPORTED_MODULE_3__auth_store___default.a,
        socketStore: __WEBPACK_IMPORTED_MODULE_4__socket_store___default.a
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setResource(state, payload){
            state[payload.resource] = payload.data
        },
        addToResource(state, payload){
            if(Array.isArray(state[payload.resource])){
                state[payload.resource].push(payload.data)
            }else if(typeof state[payload.resource] == 'object'){
                state[payload.resource][payload.data._id] = payload.data
            }
        }
    },
    actions: {
        create({commit, dispatch}, payload){
            api.post(payload.endpoint, payload.data).then(res => {
                payload.data = res.data.data
                commit('setResource', payload)
                if(payload.emit){
                    payload.mutation = 'setResource'
                    dispatch('emitData', payload)
                }
            })
        },
        createOne({commit, dispatch}, payload){
            api.post(payload.endpoint, payload.data).then(res => {
                payload.data = res.data.data
                commit('addToResource', payload)
                if(payload.emit){
                    payload.mutation = 'addToResource'
                    dispatch('emitData', payload)
                }
            })
        },
        get({commit, dispatch}, payload){
            api(payload.endpoint).then(res => {
                payload.data = res.data.data
                commit('setResource', payload)
            })
        }
    }
})


/* harmony default export */ __webpack_exports__["a"] = (store);




/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(34)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  "data-v-49c58c80",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  "data-v-7958d817",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Error__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Error__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  components: {
    Error: __WEBPACK_IMPORTED_MODULE_0__components_Error___default.a
  },
  mounted() {
    this.$store.dispatch('authenticate')
  }
});


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'error',
  computed:{
    error(){
      return this.$store.state.error
    }
  }
});


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"./Chat\"");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      showLogin: true,
      showReset: false,
      formAction: this.login,
      user: {}
    }
  },
  methods: {
    login: function (e) {
      e.preventDefault()
      this.$store.dispatch('login', this.user)
    },
    register() {
      this.$store.dispatch('register', this.user)
    },
    toggleFormAction() {
      this.showLogin = !this.showLogin
      this.formAction = this.showLogin ? this.login : this.register
    }
  },
  computed: {
    activeUser() {
      return this.$store.state.user
    },
    connectedUsers() {
      return this.$store.state.socketStore.connectedUsers
    }
  },
  mounted() {
    console.log("mounting login...")
  },
  components:{
    Chat: __WEBPACK_IMPORTED_MODULE_0__Chat___default.a
  }
});


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            loginForm: true,
            login: {
                email: '',
                password: ''
            },
            register: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        toggleLoginForm() {
            this.loginForm = !this.loginForm
        },
        submitLogin() {
            this.$store.dispatch('login', this.login)
            this.login = {
                email: '',
                password: ''
            }
        },
        submitRegister() {
            this.$store.dispatch('register', this.register)
        }
    },
    computed: {
        error() {
            return this.$store.state.error.message
        }
    }
});


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0, false, false)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('head', [_c('title', [_vm._v("getMorgan.info")]), _vm._v(" "), _c('meta', {
    attrs: {
      "charset": "utf-8"
    }
  }), _vm._v(" "), _c('meta', {
    attrs: {
      "charset": "UTF-8"
    }
  }), _vm._v(" "), _c('meta', {
    attrs: {
      "name": "viewport",
      "content": "width=device-width, initial-scale=1.0"
    }
  }), _vm._v(" "), _c('meta', {
    attrs: {
      "http-equiv": "X-UA-Compatible",
      "content": "ie=edge"
    }
  }), _vm._v(" "), _c('meta', {
    attrs: {
      "name": "msapplication-TileColor",
      "content": "#ffffff"
    }
  }), _vm._v(" "), _c('meta', {
    attrs: {
      "name": "msapplication-TileImage",
      "content": "/ms-icon-144x144.png"
    }
  }), _vm._v(" "), _c('meta', {
    attrs: {
      "name": "theme-color",
      "content": "#ffffff"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "apple-touch-icon",
      "sizes": "57x57",
      "href": "favicon/apple-icon-57x57.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "apple-touch-icon",
      "sizes": "60x60",
      "href": "favicon/apple-icon-60x60.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "apple-touch-icon",
      "sizes": "72x72",
      "href": "favicon/apple-icon-72x72.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "apple-touch-icon",
      "sizes": "76x76",
      "href": "favicon/apple-icon-76x76.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "apple-touch-icon",
      "sizes": "114x114",
      "href": "favicon/apple-icon-114x114.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "apple-touch-icon",
      "sizes": "120x120",
      "href": "favicon/apple-icon-120x120.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "apple-touch-icon",
      "sizes": "144x144",
      "href": "favicon/apple-icon-144x144.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "apple-touch-icon",
      "sizes": "152x152",
      "href": "favicon/apple-icon-152x152.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "apple-touch-icon",
      "sizes": "180x180",
      "href": "favicon/apple-icon-180x180.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "icon",
      "type": "image/png",
      "sizes": "192x192",
      "href": "/android-icon-192x192.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "icon",
      "type": "image/png",
      "sizes": "32x32",
      "href": "favicon/favicon-32x32.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "icon",
      "type": "image/png",
      "sizes": "96x96",
      "href": "favicon/favicon-96x96.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "icon",
      "type": "image/png",
      "sizes": "16x16",
      "href": "favicon/favicon-16x16.png"
    }
  }), _vm._v(" "), _c('link', {
    attrs: {
      "rel": "manifest",
      "href": "favicon/manifest.json"
    }
  })])
}]}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.error.message) ? _c('div', [_vm._v(" \n  Error: " + _vm._s(_vm.error) + "\n")]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('div', {
    staticClass: "row text-center"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [(_vm.loginForm) ? _c('h1', [_vm._v("Log in to view home.")]) : _c('h1', [_vm._v("Please register to continue.")])])]), _vm._v(" "), (_vm.error) ? _c('h5', {
    staticClass: "text-danger"
  }, [_c('b', [_vm._v(_vm._s(_vm.error))])]) : _vm._e(), _vm._v(" "), (_vm.loginForm) ? _c('div', {
    staticClass: "login"
  }, [_c('form', {
    staticClass: "form",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submitLogin($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.login.email),
      expression: "login.email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "name": "email",
      "placeholder": "bob@bob.co",
      "required": ""
    },
    domProps: {
      "value": (_vm.login.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.login, "email", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.login.password),
      expression: "login.password"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "placeholder": "********",
      "name": "password",
      "required": ""
    },
    domProps: {
      "value": (_vm.login.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.login, "password", $event.target.value)
      }
    }
  })]), _vm._v(" "), _vm._m(0, false, false)])]) : _c('div', {
    staticClass: "register"
  }, [_c('form', {
    staticClass: "form",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submitRegister($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.register.name),
      expression: "register.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "name",
      "placeholder": "Bob",
      "required": ""
    },
    domProps: {
      "value": (_vm.register.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.register, "name", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.register.email),
      expression: "register.email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "name": "email",
      "placeholder": "bob@email.com",
      "required": ""
    },
    domProps: {
      "value": (_vm.register.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.register, "email", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.register.password),
      expression: "register.password"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "name": "password",
      "placeholder": "********",
      "required": ""
    },
    domProps: {
      "value": (_vm.register.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.register, "password", $event.target.value)
      }
    }
  })]), _vm._v(" "), _vm._m(1, false, false)])]), _vm._v(" "), (_vm.loginForm) ? _c('p', {
    staticClass: "action",
    on: {
      "click": _vm.toggleLoginForm
    }
  }, [_vm._v("Don't have an account? "), _c('strong', [_vm._v("Sign up!")])]) : _c('p', {
    staticClass: "action",
    on: {
      "click": _vm.toggleLoginForm
    }
  }, [_vm._v("Already a user? Click here to login")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Login")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Register")])])
}]}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "center dark"
  }, [_c('h1', [_vm._v(_vm._s(_vm.activeUser.name))]), _vm._v(" "), (!_vm.activeUser.name) ? _c('div', {
    staticClass: "content no-select"
  }, [_c('img', {
    staticClass: "responsive-img",
    attrs: {
      "src": "https://bcw.blob.core.windows.net/public/img/www/assets/img/logos/cw-logo-square-black-outline.png",
      "width": "250"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "z-depth-1 grey lighten-4 row"
  }, [(!_vm.showReset) ? _c('form', {
    staticClass: "col s12 text-black",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.formAction($event)
      }
    }
  }, [(!_vm.showLogin) ? _c('div', {
    staticClass: "row m-t-2"
  }, [_c('div', {
    staticClass: "input-field col s12"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.name),
      expression: "user.name"
    }],
    staticClass: "validate",
    attrs: {
      "type": "text",
      "name": "name"
    },
    domProps: {
      "value": (_vm.user.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "name", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Enter your Name")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row m-t-2"
  }, [_c('div', {
    staticClass: "input-field col s12"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.email),
      expression: "user.email"
    }],
    staticClass: "validate",
    attrs: {
      "type": "email",
      "name": "email"
    },
    domProps: {
      "value": (_vm.user.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "email", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Enter your email")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "input-field col s12"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.password),
      expression: "user.password"
    }],
    staticClass: "validate",
    attrs: {
      "type": "password",
      "name": "password"
    },
    domProps: {
      "value": (_vm.user.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "password", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Enter your password")])]), _vm._v(" "), _c('label', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('div', {
    staticClass: "action muted pink-text",
    on: {
      "click": function($event) {
        _vm.showReset = true
      }
    }
  }, [_c('b', [_vm._v("Forgot Password?")])])])]), _vm._v(" "), _c('center', [_c('div', {
    staticClass: "row"
  }, [_c('button', {
    staticClass: "hoverable col s12 btn btn-large waves-effect btn-theme",
    attrs: {
      "type": "submit",
      "name": "btn_login"
    }
  }, [_vm._v(_vm._s(_vm.showLogin ? 'Login' : 'Register'))])])])], 1) : _c('form', {
    staticClass: "col s12 text-black",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.reset($event)
      }
    }
  }, [_c('div', {
    staticClass: "row m-t-2"
  }, [_c('div', {
    staticClass: "input-field col s12"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.email),
      expression: "user.email"
    }],
    staticClass: "validate",
    attrs: {
      "type": "email",
      "name": "email"
    },
    domProps: {
      "value": (_vm.user.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "email", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Enter your email")])]), _vm._v(" "), _c('label', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('div', {
    staticClass: "action muted pink-text",
    on: {
      "click": function($event) {
        _vm.showReset = false
      }
    }
  }, [_c('b', [_vm._v("login")])])])]), _vm._v(" "), _c('center', [_c('div', {
    staticClass: "row"
  }, [_c('button', {
    staticClass: "hoverable col s12 btn btn-large waves-effect btn-theme",
    attrs: {
      "type": "submit",
      "name": "btn_login"
    }
  }, [_vm._v("Reset Password")])])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "action muted light-blue-text",
    on: {
      "click": _vm.toggleFormAction
    }
  }, [_vm._v(_vm._s(_vm.showLogin ? 'Create account' : 'Show Login'))])]) : _c('div', {
    staticClass: "chathome"
  }, [_c('h3', [_vm._v("lets chat")]), _vm._v(" "), _c('ul', _vm._l((_vm.connectedUsers), function(u) {
    return _c('li', [_vm._v("\n        " + _vm._s(u.name) + "\n      ")])
  })), _vm._v(" "), _c('chat')], 1)])
},staticRenderFns: []}

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

module.exports = ["just now",["%s second ago","%s seconds ago"],["%s minute ago","%s minutes ago"],["%s hour ago","%s hours ago"],["%s day ago","%s days ago"],["%s week ago","%s weeks ago"],["%s month ago","%s months ago"],["%s year ago","%s years ago"]]

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins__ = __webpack_require__(12);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
})

/***/ })
],[55]);
//# sourceMappingURL=app.cc8014644f3602045dce.js.map