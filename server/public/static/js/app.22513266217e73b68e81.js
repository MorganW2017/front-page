webpackJsonp([1],{

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(201)

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(426),
  /* template */
  __webpack_require__(430),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_timeago__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_timeago___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_timeago__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_timeago___default.a, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
    'en-US': __webpack_require__(436)
  }
})

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_router__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_vue__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_css_semantic_min_css__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_css_semantic_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_css_semantic_min_css__);








let baseUrl = window.location.host.indexOf('localhost') > -1 ? '//localhost:3000/' : '/'

let api = __WEBPACK_IMPORTED_MODULE_2_axios___default.a.create({
    baseURL: baseUrl + 'api/',
    timeout: 2000,
    withCredentials: true
})


let auth = __WEBPACK_IMPORTED_MODULE_2_axios___default.a.create({
    baseURL: baseUrl,
    timeout: 2000,
    withCredentials: true
})

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */])
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_vue___default.a);


var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: {
        home: [],
        error: {},
        user: {}
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        },
        handleError(state, err) {
            state.error = err
        },
    },
    actions: {

        //---------LOGIN/REGISTER/LOGOUT-----------//
        userLogin({ commit, dispatch }, login) {
            console.log(login)
            auth.post('login', login)
                .then(res => {
                    commit('setUser', res.data.data)
                    __WEBPACK_IMPORTED_MODULE_3_router__["a" /* default */].push({ name: 'Home' })
                })
                .catch(() => {
                    __WEBPACK_IMPORTED_MODULE_3_router__["a" /* default */].push({ name: "Login" })
                })
        },
        userRegister({ commit, dispatch }, register) {
            auth.post('register', register)
                .then(res => {
                    commit('setUser', res.data.data)
                    __WEBPACK_IMPORTED_MODULE_3_router__["a" /* default */].push({ name: 'Home' })
                })
                .catch(err => {
                    commit('handleError', err)
                    __WEBPACK_IMPORTED_MODULE_3_router__["a" /* default */].push({ name: "Login" })
                })
        },
        authenticate({ commit, dispatch }) {
            auth('authenticate')
                .then(res => {
                    commit('setUser', res.data.data)
                    __WEBPACK_IMPORTED_MODULE_3_router__["a" /* default */].push({ name: 'Home' })
                })
                .catch(() => {
                    __WEBPACK_IMPORTED_MODULE_3_router__["a" /* default */].push({ name: "Login" })
                })
        },
        logout({ commit, dispatch }, user) {
            auth.delete('logout')
                .then(res => {
                    console.log(res)
                    dispatch('authenticate')
                })
                .catch(err => {
                    console.log(err)
                    res.status(401).send({ Error: err })
                })
        },
        //^^^^^^^^^^^^^^USER/REGISTER/LOGOUT^^^^^^^^^^^//

        handleError({ commit, dispatch }, err) {
            commit('handleError', err)
        }
    }
})
/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(202)

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(427),
  /* template */
  __webpack_require__(431),
  /* scopeId */
  "data-v-49c58c80",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(204)

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(428),
  /* template */
  __webpack_require__(433),
  /* scopeId */
  "data-v-7958d817",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(203)

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(429),
  /* template */
  __webpack_require__(432),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Error__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Error__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    Error: __WEBPACK_IMPORTED_MODULE_0__components_Error___default.a
  },
  mounted() {
    this.$store.dispatch('authenticate')
  }
});


/***/ }),

/***/ 427:
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

/***/ 428:
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
});


/***/ }),

/***/ 429:
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
    name: 'login',
    data() {
        return {
            showRegForm: false,
            register: {
            },
            login: {
                email: '',
                password: ''
            },
            formOption: '',
            regSeen: false
        }
    },
    methods: {
        userLogin() {
            // console.log(login)
            this.$store.dispatch('userLogin', this.login)
        },
        userRegister() {
            this.$store.dispatch('userRegister', this.register)
            this.toggleRegForm()
        },
        toggleForms() {
            this.showForm = !this.showForm
        },
        toggleRegForm() {
            this.showRegForm = !this.showRegForm
        }
    }
});


/***/ }),

/***/ 430:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('error'), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.error.message) ? _c('div', [_vm._v(" \n  Error: " + _vm._s(_vm.error) + "\n")]) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "ui middle aligned center aligned grid"
  }, [_c('div', {
    staticClass: "column"
  }, [_vm._m(0, false, false), _vm._v(" "), _c('form', {
    staticClass: "ui large form loginbox",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.userLogin($event)
      }
    }
  }, [_c('div', {
    staticClass: "ui stacked segment login"
  }, [_c('div', {
    staticClass: "field form-group"
  }, [_c('div', {
    staticClass: "ui left icon input"
  }, [_c('i', {
    staticClass: "user icon"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.login.email),
      expression: "login.email"
    }],
    attrs: {
      "type": "email",
      "name": "email",
      "placeholder": "E-mail address",
      "required": ""
    },
    domProps: {
      "value": (_vm.login.email)
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.userLogin($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.login, "email", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "ui left icon input"
  }, [_c('i', {
    staticClass: "lock icon"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.login.password),
      expression: "login.password"
    }],
    attrs: {
      "type": "password",
      "name": "password",
      "placeholder": "Password"
    },
    domProps: {
      "value": (_vm.login.password)
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.userLogin($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.login, "password", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "ui fluid large teal submit button",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.userLogin($event)
      }
    }
  }, [_vm._v("Login")])]), _vm._v(" "), _c('div', {
    staticClass: "ui error message"
  })]), _vm._v(" "), _c('div', {
    staticClass: "ui message"
  }, [_c('div', {
    staticClass: "registerhere"
  }, [_c('div', {
    staticClass: "regButton"
  }, [_c('p', {
    on: {
      "click": _vm.toggleRegForm
    }
  }, [_c('span', {
    on: {
      "click": function($event) {
        _vm.regSeen = !_vm.regSeen
      }
    }
  }, [_vm._v("New around here?")])]), _vm._v(" "), (_vm.regSeen) ? _c('div', [_c('form', {
    staticClass: "form-horizontal reg-container",
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label",
    attrs: {
      "for": "inputName"
    }
  }, [_vm._v("Name:")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 regInput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.register.name),
      expression: "register.name"
    }],
    attrs: {
      "type": "text",
      "size": "30",
      "id": "inputName",
      "placeholder": "Name"
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
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label",
    attrs: {
      "for": "inputEmail"
    }
  }, [_vm._v("Email:")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 regInput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.register.email),
      expression: "register.email"
    }],
    attrs: {
      "type": "email",
      "size": "30",
      "id": "inputEmail",
      "placeholder": "Email"
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
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label",
    attrs: {
      "for": "inputPassword"
    }
  }, [_vm._v("Password:")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-3 regInput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.register.password),
      expression: "register.password"
    }],
    attrs: {
      "type": "password",
      "size": "30",
      "id": "inputPassword",
      "placeholder": "Password"
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
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group regSub-container"
  }, [_c('div', {
    staticClass: "col-sm-offset-2 col-sm-3"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "data-dismiss": "modal"
    },
    on: {
      "click": _vm.userRegister
    }
  }, [_vm._v("Register Me")])])])])])]) : _vm._e()])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "ui teal image header"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._v("\n                    Log-in to continue\n                ")])])
}]}

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_vm._m(0, false, false), _vm._v(" "), _c('svg', {
    staticClass: "worm",
    attrs: {
      "viewbox": "0 -5 400 400"
    }
  }, [_c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle'), _vm._v(" "), _c('circle')])]), _vm._v(" "), _c('div', {
    staticClass: "ui inverted menu"
  }, [_c('div', {
    staticClass: "header item"
  }, [_vm._v("Home")]), _vm._v(" "), _vm._m(1, false, false), _vm._v(" "), _vm._m(2, false, false), _vm._v(" "), _c('div', {
    staticClass: "right menu"
  }, [_vm._m(3, false, false), _vm._v(" "), _c('button', {
    staticClass: "logout-header",
    on: {
      "click": _vm.userLogout
    }
  }, [_vm._v("Logout")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg"
  }, [_c('img', {
    attrs: {
      "src": "https://i.pinimg.com/originals/95/3a/3a/953a3a44d0e7c18f66a2481e2dc9707b.jpg",
      "alt": "Gamer"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "active item"
  }, [_c('a', {
    attrs: {
      "href": "https://github.com/MorganW2017/"
    }
  }, [_vm._v("Github")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui dropdown item"
  }, [_vm._v("\n      Projects\n      "), _c('i', {
    staticClass: "dropdown icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "menu"
  }, [_c('div', {
    staticClass: "item"
  }, [_vm._v("Rooted")]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._v("Slap Game")]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._v("Sample Text")]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._v("Sample Text")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "ui transparent inverted icon input"
  }, [_c('i', {
    staticClass: "search icon"
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "placeholder": "Search"
    }
  })])])
}]}

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = ["just now",["%s second ago","%s seconds ago"],["%s minute ago","%s minutes ago"],["%s hour ago","%s hours ago"],["%s day ago","%s days ago"],["%s week ago","%s weeks ago"],["%s month ago","%s months ago"],["%s year ago","%s years ago"]]

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugins__ = __webpack_require__(122);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






// import Home from './Home.vue'
// const app = new Vue({ 
//    render: h => h(Home), 
// }).$mount('#app');


__webpack_require__(119)

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
})

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_Home__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Login__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_Login__);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: __WEBPACK_IMPORTED_MODULE_2_components_Home___default.a
        }, {
            path: '/login',
            name: 'Login',
            component: __WEBPACK_IMPORTED_MODULE_3_components_Login___default.a
        }
    ]
}));

/***/ })

},[440]);
//# sourceMappingURL=app.22513266217e73b68e81.js.map