webpackJsonp([19],{

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('basic'), _vm._v(" "), _c('br'), _vm._v(" "), _c('loan-information', {
    attrs: {
      "model": _vm.model.loan
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('plan'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "text-right"
  }, [_c('Button', {
    on: {
      "click": function($event) {
        _vm.$root.eventHub.$emit('back', {
          name: 'backlog',
          params: _vm.$router.currentRoute.params
        })
      }
    }
  }, [_vm._v("\n            返回\n        ")]), _vm._v("\n         \n        "), _c('Button', {
    attrs: {
      "type": "warning"
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("\n            退回\n        ")]), _vm._v("\n         \n        "), _c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n            提交\n        ")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-6f4d2103", module.exports)
  }
}

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(991),
  /* template */
  __webpack_require__(1152),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/channelMatching.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] channelMatching.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f4d2103", Component.options)
  } else {
    hotAPI.reload("data-v-6f4d2103", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            repaymentData: [],
            repaymentColumns: [{ title: '期数', key: 'currPeriod' }, { title: '还款日期', key: 'repayDate' }, { title: '应还本金(元)', key: 'repayPrincipal' }, { title: '应还利息(元)', key: 'repayInterest' }, { title: '本息合计(元)', key: 'repayAmount' }, { title: '记息天数', key: 'interestDays' }, { title: '剩余本金(元)', key: 'leftPrincipal' }]
        };
    },
    created: function created() {
        this.getLoanPlan(this.$router.currentRoute.params.id);
    },

    methods: {
        getLoanPlan: function getLoanPlan(id) {
            var _this = this;

            this.$axios.options.url = '/houseMortgage/hmLoanPlan/read/list';
            this.$axios.request({
                data: {
                    projectId: id
                }
            }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.repaymentData = response.data.list;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        }
    }
});

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(923),
  /* template */
  __webpack_require__(925),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/plan.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] plan.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f2f9586", Component.options)
  } else {
    hotAPI.reload("data-v-7f2f9586", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "plan"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "plan",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n            还款计划表预览\n        ")]), _vm._v(" "), _c('Table', {
    attrs: {
      "slot": "content",
      "data": _vm.repaymentData,
      "columns": _vm.repaymentColumns
    },
    slot: "content"
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-7f2f9586", module.exports)
  }
}

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: {
                client: {}
            },
            projectPlan: {} //项目决议
        };
    },
    created: function created() {
        this.loadModel();
        this.getProjectPlan();
    },

    methods: {
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProject/read/detail';
            this.$axios.request({ data: { id: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.model = response.data;
                _this.model.client = {};
                _this.getClient(response.data.clientId);
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        getProjectPlan: function getProjectPlan() {
            var _this2 = this;

            // 获取决议信息
            this.$axios.options.url = '/houseMortgage/hmProjPlan/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$router.currentRoute.params.id
                }
            }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                _this2.projectPlan = response.data[0];
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        },
        getClient: function getClient(clientId) {
            var _this3 = this;

            this.$axios.options.url = '/houseMortgage/hmClient/read/detail';
            this.$axios.request({ data: { id: clientId } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.model.client = response.data;
            }).catch(function (error) {
                _this3.$Message.error(_this3.$config.ERROR);
            });
        }
    }
});

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(935),
  /* template */
  __webpack_require__(944),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/basic.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] basic.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ca58b4a", Component.options)
  } else {
    hotAPI.reload("data-v-6ca58b4a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "basic"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "basic",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n            基本信息\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    决议编号\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.projectPlan.id || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    项目编号\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.model.id || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    决议有效期\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    客户经理\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.model.applyUserName || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    部门\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.model.applyDeptName || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    借款人\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.model.client.clientName || ' ') + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    借款人证件号\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.model.client.certificatesNumber || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    共同借款人\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.model.spouse ? _vm.model.spouse.clientName : ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    共同借款人证件号\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.model.spouseId || ' ') + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    批复借款金额\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.model.evalResult || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    批复借款期限\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.projectPlan.loanPeriod || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    放款条件\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.projectPlan.loanRequirement || ' ') + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    还款方式\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.projectPlan.repaymentMethod || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    其他还款方式\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.projectPlan.repaymentRemark || ' ') + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    批复利率(按月)\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.projectPlan.pawnRate || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    批复费率\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.model.totalRate || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    风险等级\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  })], 1)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-6ca58b4a", module.exports)
  }
}

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object
    },
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(967),
  /* template */
  __webpack_require__(975),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/loanInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loanInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30834590", Component.options)
  } else {
    hotAPI.reload("data-v-30834590", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "loan"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "loan",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n            放款信息\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.submit($event)
      }
    },
    slot: "content"
  }, [_c('Form', {
    ref: "loan",
    attrs: {
      "label-width": 90
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                合作机构\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择合作机构 | 必填"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                信托计划\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择信托计划 | 必填"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                贷款产品\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择贷款产品 | 必填"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                        资金来源备注\n                    ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "maxlength": 500,
      "placeholder": "资金来源备注"
    }
  })], 1)], 1)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-30834590", module.exports)
  }
}

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_basic__ = __webpack_require__(939);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_basic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_basic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_plan__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_plan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_plan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_loanInformation__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_loanInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_tabs_loanInformation__);




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: {
                loan: {},
                client: {}
            }
        };
    },

    components: {
        'basic': __WEBPACK_IMPORTED_MODULE_0__views_tabs_basic___default.a,
        'plan': __WEBPACK_IMPORTED_MODULE_1__views_tabs_plan___default.a,
        'loanInformation': __WEBPACK_IMPORTED_MODULE_2__views_tabs_loanInformation___default.a
    },
    methods: {
        submit: function submit() {},
        cancel: function cancel() {},
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProject/read/detail';
            this.$axios.request({ data: { id: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.model = response.data;
                _this.getClient(response.data.clientId);
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        getClient: function getClient(clientId) {
            var _this2 = this;

            this.$axios.options.url = '/houseMortgage/hmClient/read/detail';
            this.$axios.request({ data: { id: clientId } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                _this2.model.client = response.data;
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        }
    },
    created: function created() {
        this.loadModel();
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
    }
});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2hhbm5lbE1hdGNoaW5nLnZ1ZT9jNGQwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jaGFubmVsTWF0Y2hpbmcudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvcGxhbi5qcz9mMTViKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvcGxhbi52dWU/MGVhNSoqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL3BsYW4udnVlPzFiZGIqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9iYXNpYy5qcz8yMTcxKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvYmFzaWMudnVlPzY4N2EqKiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9iYXNpYy52dWU/NjBjYyoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2xvYW5JbmZvcm1hdGlvbi5qcz81YTUyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2xvYW5JbmZvcm1hdGlvbi52dWU/MDExOCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9sb2FuSW5mb3JtYXRpb24udnVlPzZmYTAqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoYW5uZWxNYXRjaGluZy5qcyJdLCJuYW1lcyI6WyJkYXRhIiwicmVwYXltZW50RGF0YSIsInJlcGF5bWVudENvbHVtbnMiLCJ0aXRsZSIsImtleSIsImNyZWF0ZWQiLCJnZXRMb2FuUGxhbiIsIiRyb3V0ZXIiLCJjdXJyZW50Um91dGUiLCJwYXJhbXMiLCJpZCIsIm1ldGhvZHMiLCIkYXhpb3MiLCJvcHRpb25zIiwidXJsIiwicmVxdWVzdCIsInByb2plY3RJZCIsInRoZW4iLCJyZXNwb25zZSIsImh0dHBDb2RlIiwiJE1lc3NhZ2UiLCJlcnJvciIsIm1zZyIsIiRjb25maWciLCJFUlJPUiIsImxpc3QiLCJjYXRjaCIsIm1vZGVsIiwiY2xpZW50IiwicHJvamVjdFBsYW4iLCJsb2FkTW9kZWwiLCJnZXRQcm9qZWN0UGxhbiIsImdldENsaWVudCIsImNsaWVudElkIiwicHJvcHMiLCJPYmplY3QiLCJsb2FuIiwiY29tcG9uZW50cyIsImxvYW5JbmZvcm1hdGlvbiIsInN1Ym1pdCIsImNhbmNlbCIsIm1vdW50ZWQiLCIkcm9vdCIsImV2ZW50SHViIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxXQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7QUMzQkEsK0RBQWU7QUFDWEEsUUFEVyxrQkFDTDtBQUNGLGVBQU07QUFDRkMsMkJBQWMsRUFEWjtBQUVGQyw4QkFBaUIsQ0FBQyxFQUFDQyxPQUFNLElBQVAsRUFBWUMsS0FBSSxZQUFoQixFQUFELEVBQ2IsRUFBQ0QsT0FBTSxNQUFQLEVBQWNDLEtBQUksV0FBbEIsRUFEYSxFQUViLEVBQUNELE9BQU0sU0FBUCxFQUFpQkMsS0FBSSxnQkFBckIsRUFGYSxFQUdiLEVBQUNE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QUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7O0FDak1BLCtEQUFlO0FBQ1hVLFdBQU87QUFDSFAsZUFBT1E7QUFESixLQURJO0FBSVhuQyxRQUpX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T0FBWixDQUFvQixFQUFDZixNQUFNLEVBQUNVLElBQUl1QixRQUFMLEVBQVAsRUFBcEIsRUFBNENoQixJQUE1QyxDQUFpRCxVQUFDQyxRQUFELEVBQWM7QUFDM0Qsb0JBQUlBLFNBQVNDLFFBQVQsSUFBcUIsR0FBekIsRUFBOEI7QUFDMUIsMkJBQUtDLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkgsU0FBU0ksR0FBVCxJQUFnQixPQUFLQyxPQUFMLENBQWFDLEtBQWpEO0FBQ0E7QUFDSDtBQUNELHVCQUFLRyxLQUFMLENBQVdDLE1BQVgsR0FBb0JWLFNBQVNsQixJQUE3QjtBQUNILGFBTkQsRUFNRzBCLEtBTkgsQ0FNUyxVQUFDTCxLQUFELEVBQVc7QUFDaEIsdUJBQUtELFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixPQUFLRSxPQUFMLENBQWFDLEtBQWpDO0FBQ0gsYUFSRDtBQVNIO0FBL0JJLEtBZEU7QUErQ1huQixXQS9DVyxxQkErQ0Q7QUFDTixhQUFLeUIsU0FBTDtBQUNILEtBakRVO0FBa0RYVyxXQWxEVyxxQkFrREQ7QUFDTixhQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLEtBQXBCLENBQTBCLFlBQTFCO0FBQ0g7QUFwRFUsQ0FBZixFIiwiZmlsZSI6IjE5LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2Jhc2ljJyksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbG9hbi1pbmZvcm1hdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtb2RlbFwiOiBfdm0ubW9kZWwubG9hblxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygncGxhbicpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kcm9vdC5ldmVudEh1Yi4kZW1pdCgnYmFjaycsIHtcbiAgICAgICAgICBuYW1lOiAnYmFja2xvZycsXG4gICAgICAgICAgcGFyYW1zOiBfdm0uJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg6L+U5ZueXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICDCoFxcbiAgICAgICAgXCIpLCBfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ3YXJuaW5nXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jYW5jZWxcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDpgIDlm55cXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgIMKgXFxuICAgICAgICBcIiksIF9jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnN1Ym1pdFxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIOaPkOS6pFxcbiAgICAgICAgXCIpXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZmNGQyMTAzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNmY0ZDIxMDNcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy9jaGFubmVsTWF0Y2hpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9jaGFubmVsTWF0Y2hpbmcuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZmNGQyMTAzXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2NoYW5uZWxNYXRjaGluZy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvY2hhbm5lbE1hdGNoaW5nLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNoYW5uZWxNYXRjaGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmY0ZDIxMDNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZjRkMjEwM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvY2hhbm5lbE1hdGNoaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpe1xuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICByZXBheW1lbnREYXRhOltdLFxuICAgICAgICAgICAgcmVwYXltZW50Q29sdW1uczpbe3RpdGxlOifmnJ/mlbAnLGtleTonY3VyclBlcmlvZCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTon6L+Y5qy+5pel5pyfJyxrZXk6J3JlcGF5RGF0ZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTon5bqU6L+Y5pys6YeRKOWFgyknLGtleToncmVwYXlQcmluY2lwYWwnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6J+W6lOi/mOWIqeaBryjlhYMpJyxrZXk6J3JlcGF5SW50ZXJlc3QnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6J+acrOaBr+WQiOiuoSjlhYMpJyxrZXk6J3JlcGF5QW1vdW50J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiforrDmga/lpKnmlbAnLGtleTonaW50ZXJlc3REYXlzJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOifliankvZnmnKzph5Eo5YWDKScsa2V5OidsZWZ0UHJpbmNpcGFsJ31dXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgdGhpcy5nZXRMb2FuUGxhbih0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0TG9hblBsYW4oaWQpe1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Mb2FuUGxhbi9yZWFkL2xpc3QnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IGlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBheW1lbnREYXRhID0gcmVzcG9uc2UuZGF0YS5saXN0OyBcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvcGxhbi5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvcGxhbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2YyZjk1ODZcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vcGxhbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9wbGFuLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBsYW4udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdmMmY5NTg2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2YyZjk1ODZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvcGxhbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQgNSA2IDE2IDE3IDE4IDE5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInBsYW5cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwicGxhblwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIOi/mOasvuiuoeWIkuihqOmihOiniFxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiLFxuICAgICAgXCJkYXRhXCI6IF92bS5yZXBheW1lbnREYXRhLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5yZXBheW1lbnRDb2x1bW5zXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9KV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2YyZjk1ODZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03ZjJmOTU4NlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvcGxhbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgNSA2IDE2IDE3IDE4IDE5IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKXtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICBjbGllbnQ6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvamVjdFBsYW46IHt9LCAvL+mhueebruWGs+iurlxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRNb2RlbCgpXG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdFBsYW4oKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2FkTW9kZWwoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvamVjdC9yZWFkL2RldGFpbCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY2xpZW50ID0ge31cbiAgICAgICAgICAgICAgICB0aGlzLmdldENsaWVudChyZXNwb25zZS5kYXRhLmNsaWVudElkKVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb2plY3RQbGFuKCl7IC8vIOiOt+WPluWGs+iuruS/oeaBr1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Qcm9qUGxhbi9yZWFkL3F1ZXJ5QnlQcm9qZWN0SWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0UGxhbiA9IHJlc3BvbnNlLmRhdGFbMF07IFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldENsaWVudChjbGllbnRJZCl7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obUNsaWVudC9yZWFkL2RldGFpbCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IGNsaWVudElkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY2xpZW50ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvYmFzaWMuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vY29tcG9uZW50cy90YWJzL2Jhc2ljLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02Y2E1OGI0YVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9iYXNpYy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9iYXNpYy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBiYXNpYy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmNhNThiNGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02Y2E1OGI0YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9iYXNpYy52dWVcbi8vIG1vZHVsZSBpZCA9IDkzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgNSA2IDE5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImJhc2ljXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImJhc2ljXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5Z+65pys5L+h5oGvXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWGs+iurue8luWPt1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnByb2plY3RQbGFuLmlkIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg6aG555uu57yW5Y+3XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaWQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlhrPorq7mnInmlYjmnJ9cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5a6i5oi357uP55CGXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwbHlVc2VyTmFtZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOmDqOmXqFxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcGx5RGVwdE5hbWUgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlgJ/mrL7kurpcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jbGllbnQuY2xpZW50TmFtZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5YCf5qy+5Lq66K+B5Lu25Y+3XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY2xpZW50LmNlcnRpZmljYXRlc051bWJlciB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWFseWQjOWAn+asvuS6ulxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLnNwb3VzZSA/IF92bS5tb2RlbC5zcG91c2UuY2xpZW50TmFtZSA6ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5YWx5ZCM5YCf5qy+5Lq66K+B5Lu25Y+3XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuc3BvdXNlSWQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOaJueWkjeWAn+asvumHkeminVxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmV2YWxSZXN1bHQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmibnlpI3lgJ/mrL7mnJ/pmZBcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wcm9qZWN0UGxhbi5sb2FuUGVyaW9kIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5pS+5qy+5p2h5Lu2XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucHJvamVjdFBsYW4ubG9hblJlcXVpcmVtZW50IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDov5jmrL7mlrnlvI9cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wcm9qZWN0UGxhbi5yZXBheW1lbnRNZXRob2QgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlhbbku5bov5jmrL7mlrnlvI9cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucHJvamVjdFBsYW4ucmVwYXltZW50UmVtYXJrIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmibnlpI3liKnnjoco5oyJ5pyIKVxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnByb2plY3RQbGFuLnBhd25SYXRlIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5om55aSN6LS5546HXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwudG90YWxSYXRlIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg6aOO6Zmp562J57qnXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZjYTU4YjRhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNmNhNThiNGFcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL2Jhc2ljLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA1IDYgMTkiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWw6IE9iamVjdFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvbG9hbkluZm9ybWF0aW9uLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9sb2FuSW5mb3JtYXRpb24uanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTMwODM0NTkwXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2xvYW5JbmZvcm1hdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9sb2FuSW5mb3JtYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbG9hbkluZm9ybWF0aW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMDgzNDU5MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTMwODM0NTkwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWJzL2xvYW5JbmZvcm1hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDk3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDE2IDE5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImxvYW5cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwibG9hblwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIOaUvuasvuS/oeaBr1xcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwia2V5dXBcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICghKCdidXR0b24nIGluICRldmVudCkgJiYgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpKSB7IHJldHVybiBudWxsOyB9XG4gICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnRm9ybScsIHtcbiAgICByZWY6IFwibG9hblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsLXdpZHRoXCI6IDkwXG4gICAgfVxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWQiOS9nOacuuaehFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumAieaLqeWQiOS9nOacuuaehCB8IOW/heWhq1wiXG4gICAgfVxuICB9KV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5L+h5omY6K6h5YiSXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6YCJ5oup5L+h5omY6K6h5YiSIHwg5b+F5aGrXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDotLfmrL7kuqflk4FcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLpgInmi6notLfmrL7kuqflk4EgfCDlv4XloatcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOi1hOmHkeadpea6kOWkh+azqFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dGFyZWFcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiA1MDAsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6LWE6YeR5p2l5rqQ5aSH5rOoXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zMDgzNDU5MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTMwODM0NTkwXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvdGFicy9sb2FuSW5mb3JtYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA5NzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiAxOSIsImltcG9ydCBiYXNpYyBmcm9tICcuLi92aWV3cy90YWJzL2Jhc2ljJ1xuaW1wb3J0IHBsYW4gZnJvbSAnLi4vdmlld3MvdGFicy9wbGFuJ1xuaW1wb3J0IGxvYW5JbmZvcm1hdGlvbiBmcm9tICcuLi92aWV3cy90YWJzL2xvYW5JbmZvcm1hdGlvbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIGxvYW46IHt9LFxuICAgICAgICAgICAgICAgIGNsaWVudDoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAnYmFzaWMnOiBiYXNpYyxcbiAgICAgICAgJ3BsYW4nOiBwbGFuLFxuICAgICAgICAnbG9hbkluZm9ybWF0aW9uJzogbG9hbkluZm9ybWF0aW9uXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHN1Ym1pdCgpIHtcblxuICAgICAgICB9LFxuICAgICAgICBjYW5jZWwoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgbG9hZE1vZGVsKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2plY3QvcmVhZC9kZXRhaWwnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2lkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldENsaWVudChyZXNwb25zZS5kYXRhLmNsaWVudElkKVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldENsaWVudChjbGllbnRJZCl7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obUNsaWVudC9yZWFkL2RldGFpbCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IGNsaWVudElkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY2xpZW50ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRNb2RlbCgpXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRlbWl0KCdicmVhZGNydW1iJyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NoYW5uZWxNYXRjaGluZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=