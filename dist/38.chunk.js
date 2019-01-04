webpackJsonp([38],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this = this;

        var request = {
            account: '',
            password: '',
            remember: false
        };
        var validateCheck = function validateCheck(rule, value, callback) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["c" /* removeToken */])();
            _this.$localStorage.remove('user');
            _this.$localStorage.remove('menus');
            _this.$axios.options.url = 'login';
            _this.$axios.request({ data: request }).then(function (response) {
                if (response.httpCode != 200) {
                    callback(new Error(response.msg || _this.$config.ERROR));
                    return;
                }
                _this.$axios.options.url = 'sys/user/read/current';
                _this.$axios.request().then(function (response) {
                    if (response.httpCode != 200) {
                        callback(new Error(response.msg || _this.$config.ERROR));
                        return;
                    }
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["k" /* setToken */])(response.cookie);
                    _this.$localStorage.set('user', JSON.stringify(response.user));
                    callback();
                }).catch(function (error) {
                    callback(new Error(_this.$config.ERROR));
                });
            }).catch(function (error) {
                callback(new Error(_this.$config.ERROR));
            });
        };
        return {
            requestData: request,
            loading: false,
            rule: {
                login: [{ validator: validateCheck }]
            }
        };
    },

    methods: {
        submit: function submit(name) {
            var _this2 = this;

            this.loading = true;
            this.$refs[name].validate(function (valid) {
                _this2.loading = false;
                if (valid) _this2.$router.push({ name: 'master' });
            });
        }
    }
});

/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container login_bg",
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.submit('loginForm')
      }
    }
  }, [_c('div', {
    staticClass: "child login bg-white"
  }, [_c('h2', {
    staticClass: "text-center"
  }, [_vm._v("\n            广宇金融业务系统\n        ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('Form', {
    ref: "loginForm",
    attrs: {
      "model": _vm.requestData,
      "label-width": 20,
      "rules": _vm.rule
    }
  }, [_c('FormItem', [_c('Icon', {
    attrs: {
      "slot": "label",
      "type": "ios-person",
      "size": "16"
    },
    slot: "label"
  }), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 20,
      "placeholder": "邮箱"
    },
    model: {
      value: (_vm.requestData.account),
      callback: function($$v) {
        _vm.$set(_vm.requestData, "account", $$v)
      },
      expression: "requestData.account"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Icon', {
    attrs: {
      "slot": "label",
      "type": "ios-lock",
      "size": "16"
    },
    slot: "label"
  }), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "password",
      "clearable": "",
      "maxlength": 20,
      "placeholder": "密码"
    },
    model: {
      value: (_vm.requestData.password),
      callback: function($$v) {
        _vm.$set(_vm.requestData, "password", $$v)
      },
      expression: "requestData.password"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "login"
    }
  }, [_c('Button', {
    attrs: {
      "loading": _vm.loading,
      "type": "primary",
      "long": ""
    },
    on: {
      "click": function($event) {
        _vm.submit('loginForm')
      }
    }
  }, [_vm._v("\n                    登录\n                ")])], 1), _vm._v(" "), _c('FormItem', [_c('Checkbox', {
    model: {
      value: (_vm.requestData.remember),
      callback: function($$v) {
        _vm.$set(_vm.requestData, "remember", $$v)
      },
      expression: "requestData.remember"
    }
  }, [_vm._v("\n                    记住密码\n                ")])], 1)], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-805788e8", module.exports)
  }
}

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1016),
  /* template */
  __webpack_require__(1158),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-805788e8", Component.options)
  } else {
    hotAPI.reload("data-v-805788e8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbG9naW4udnVlPzAwNTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvZ2luLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwicmVxdWVzdCIsImFjY291bnQiLCJwYXNzd29yZCIsInJlbWVtYmVyIiwidmFsaWRhdGVDaGVjayIsInJ1bGUiLCJ2YWx1ZSIsImNhbGxiYWNrIiwicmVtb3ZlVG9rZW4iLCIkbG9jYWxTdG9yYWdlIiwicmVtb3ZlIiwiJGF4aW9zIiwib3B0aW9ucyIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImh0dHBDb2RlIiwiRXJyb3IiLCJtc2ciLCIkY29uZmlnIiwiRVJST1IiLCJzZXRUb2tlbiIsImNvb2tpZSIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwiY2F0Y2giLCJlcnJvciIsInJlcXVlc3REYXRhIiwibG9hZGluZyIsImxvZ2luIiwidmFsaWRhdG9yIiwibWV0aG9kcyIsInN1Ym1pdCIsIm5hbWUiLCIkcmVmcyIsInZhbGlkYXRlIiwidmFsaWQiLCIkcm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSwrREFBZTtBQUNYQSxRQURXLGtCQUNKO0FBQUE7O0FBQ0gsWUFBTUMsVUFBVTtBQUNaQyxxQkFBUyxFQURHO0FBRVpDLHNCQUFVLEVBRkU7QUFHWkMsc0JBQVU7QUFIRSxTQUFoQjtBQUtBLFlBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWNDLFFBQWQsRUFBMkI7QUFDN0NDLFlBQUEsc0ZBQUFBO0FBQ0Esa0JBQUtDLGFBQUwsQ0FBbUJDLE1BQW5CLENBQTBCLE1BQTFCO0FBQ0Esa0JBQUtELGFBQUwsQ0FBbUJDLE1BQW5CLENBQTBCLE9BQTFCO0FBQ0Esa0JBQUtDLE1BQUwsQ0FBWUMsT0FBWixDQUFvQkMsR0FBcEIsR0FBMEIs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QSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxXQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoiMzguY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldFRva2VuLCByZW1vdmVUb2tlbn0gZnJvbSAnLi4vbGlicy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIGFjY291bnQ6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgcmVtZW1iZXI6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlQ2hlY2sgPSAocnVsZSwgdmFsdWUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVUb2tlbigpO1xuICAgICAgICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLnJlbW92ZSgndXNlcicpO1xuICAgICAgICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLnJlbW92ZSgnbWVudXMnKTtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2xvZ2luJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHJlcXVlc3R9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdzeXMvdXNlci9yZWFkL2N1cnJlbnQnO1xuICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3QoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFRva2VuKHJlc3BvbnNlLmNvb2tpZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGxvY2FsU3RvcmFnZS5zZXQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS51c2VyKSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcih0aGlzLiRjb25maWcuRVJST1IpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcih0aGlzLiRjb25maWcuRVJST1IpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVxdWVzdERhdGE6IHJlcXVlc3QsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHJ1bGU6IHtcbiAgICAgICAgICAgICAgICBsb2dpbjogW1xuICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdG9yOiB2YWxpZGF0ZUNoZWNrfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzdWJtaXQobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJHJlZnNbbmFtZV0udmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ21hc3Rlcid9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbG9naW4uanMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbG9naW5fYmdcIixcbiAgICBvbjoge1xuICAgICAgXCJrZXl1cFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCEoJ2J1dHRvbicgaW4gJGV2ZW50KSAmJiBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIikpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgX3ZtLnN1Ym1pdCgnbG9naW5Gb3JtJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNoaWxkIGxvZ2luIGJnLXdoaXRlXCJcbiAgfSwgW19jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDlub/lrofph5Hono3kuJrliqHns7vnu59cXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0Zvcm0nLCB7XG4gICAgcmVmOiBcImxvZ2luRm9ybVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5yZXF1ZXN0RGF0YSxcbiAgICAgIFwibGFiZWwtd2lkdGhcIjogMjAsXG4gICAgICBcInJ1bGVzXCI6IF92bS5ydWxlXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdJY29uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaW9zLXBlcnNvblwiLFxuICAgICAgXCJzaXplXCI6IFwiMTZcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiAyMCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLpgq7nrrFcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnJlcXVlc3REYXRhLmFjY291bnQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0ucmVxdWVzdERhdGEsIFwiYWNjb3VudFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJyZXF1ZXN0RGF0YS5hY2NvdW50XCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIFtfYygnSWNvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIixcbiAgICAgIFwidHlwZVwiOiBcImlvcy1sb2NrXCIsXG4gICAgICBcInNpemVcIjogXCIxNlwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiAyMCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLlr4bnoIFcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnJlcXVlc3REYXRhLnBhc3N3b3JkKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLnJlcXVlc3REYXRhLCBcInBhc3N3b3JkXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInJlcXVlc3REYXRhLnBhc3N3b3JkXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwcm9wXCI6IFwibG9naW5cIlxuICAgIH1cbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibG9hZGluZ1wiOiBfdm0ubG9hZGluZyxcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIixcbiAgICAgIFwibG9uZ1wiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnN1Ym1pdCgnbG9naW5Gb3JtJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOeZu+W9lVxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCBbX2MoJ0NoZWNrYm94Jywge1xuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5yZXF1ZXN0RGF0YS5yZW1lbWJlciksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5yZXF1ZXN0RGF0YSwgXCJyZW1lbWJlclwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJyZXF1ZXN0RGF0YS5yZW1lbWJlclwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDorrDkvY/lr4bnoIFcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi04MDU3ODhlOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTgwNTc4OGU4XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMzgiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9sb2dpbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtODA1Nzg4ZThcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vbG9naW4udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL2xvZ2luLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGxvZ2luLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04MDU3ODhlOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTgwNTc4OGU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDg5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDM4Il0sInNvdXJjZVJvb3QiOiIifQ==