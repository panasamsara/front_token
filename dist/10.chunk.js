webpackJsonp([10],{

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object
    },
    data: function data() {
        return {
            user: JSON.parse(this.$localStorage.get('user')),
            localDate: __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(new Date()),
            result: [],
            rules: {
                'hmProjSdh.auditResult': [{ required: true, message: '审议结果不能为空' }]
            },
            isSubmit: false
        };
    },

    methods: {
        loadResult: function loadResult() {
            var _this = this;

            this.$axios.options.url = 'sys/dic/read/key';
            this.$axios.request({ data: { key: 'AUDITRESULT' } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.result = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        submit: function submit() {
            var _this2 = this;

            this.$refs.approval.validate(function (valid) {
                if (valid) {
                    _this2.isSubmit = true;
                    _this2.$axios.options.url = 'houseMortgage/hmProject/dshcheck';
                    _this2.$axios.request({ data: JSON.stringify(_this2.model) }, 'json').then(function (response) {
                        _this2.isSubmit = false;
                        if (response.httpCode != 200) {
                            _this2.$Message.error(response.msg || _this2.$config.ERROR);
                            return;
                        }
                        _this2.$router.push({ name: 'backlog' });
                    }).catch(function (error) {
                        _this2.isSubmit = false;
                        _this2.$Message.error(_this2.$config.ERROR);
                    });
                }
            });
        }
    },
    created: function created() {
        this.model.hmProjSdh = {};
        this.loadResult();
    }
});

/***/ }),

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_loanApproval__ = __webpack_require__(1087);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_loanApproval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_loanApproval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_util__ = __webpack_require__(203);




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: {
                client: {},
                historyData: [],
                loading: false
            },
            tabName: 'investigationReport',
            tabs: [{ id: 'investigationReport', text: '调查报告' }, { id: 'loanApproval', text: '项目审批' }]
        };
    },

    computed: {
        currentTabComponent: function currentTabComponent() {
            return this.tabName;
        }
    },
    components: {
        'investigationReport': __WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport___default.a,
        'loanApproval': __WEBPACK_IMPORTED_MODULE_1__views_tabs_loanApproval___default.a
    },
    methods: {
        loadClient: function loadClient(id) {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmClient/read/detail';
            this.$axios.request({ data: { id: id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.model.client = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        loadCooperate: function loadCooperate(id) {
            var _this2 = this;

            this.model.loading = true;
            this.$axios.options.url = 'houseMortgage/hmLoanApply/cooperateHistoryQuery';
            this.$axios.request({ data: { clientId: id } }).then(function (response) {
                _this2.model.loading = false;
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                response.data.forEach(function (item) {
                    item.actualLoanAmount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__libs_util__["j" /* formatMoney */])(item.actualLoanAmount);
                    item.loanBalance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__libs_util__["j" /* formatMoney */])(item.loanBalance);
                });
                _this2.model.historyData = response.data;
            }).catch(function (error) {
                _this2.model.loading = false;
                _this2.$Message.error(_this2.$config.ERROR);
            });
        },
        loadModel: function loadModel() {
            var _this3 = this;

            this.$axios.options.url = 'houseMortgage/hmProject/read/detail';
            this.$axios.request({ data: { id: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                response.data.client = {};
                response.data.initLoanAmountText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__libs_util__["j" /* formatMoney */])(response.data.initLoanAmount);
                response.data.firstEvalueText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__libs_util__["j" /* formatMoney */])(response.data.firstEvalue);
                response.data.evalResultText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__libs_util__["j" /* formatMoney */])(response.data.evalResult);
                response.data.historyData = [];
                response.data.loading = false;
                _this3.model = response.data;
                _this3.loadClient(response.data.clientId);
                _this3.loadCooperate(response.data.clientId);
            }).catch(function (error) {
                _this3.$Message.error(_this3.$config.ERROR);
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

/***/ }),

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1047),
  /* template */
  __webpack_require__(1146),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/loanApproval.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loanApproval.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63ab2f32", Component.options)
  } else {
    hotAPI.reload("data-v-63ab2f32", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "project"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "project",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                审批意见\n            ")]), _vm._v(" "), _c('div', {
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
    ref: "approval",
    attrs: {
      "model": _vm.model,
      "rules": _vm.rules,
      "label-width": 100
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    贷审会委员\n                                ")]), _vm._v("\n                                " + _vm._s(_vm.user.userName) + "\n                            ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    审批日期\n                                ")]), _vm._v("\n                                " + _vm._s(_vm.localDate) + "\n                            ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "hmProjSdh.auditResult"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            审议结果\n                        ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "5"
    }
  }, [_c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择审议意见 | 必填"
    },
    model: {
      value: (_vm.model.hmProjSdh.auditResult),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjSdh, "auditResult", $$v)
      },
      expression: "model.hmProjSdh.auditResult"
    }
  }, _vm._l((_vm.result), function(value, key) {
    return _c('Option', {
      key: key,
      attrs: {
        "value": key
      }
    }, [_vm._v("\n                                        " + _vm._s(value) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            贷审会委员意见\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "上报意见",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.hmProjSdh.auditDescription),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjSdh, "auditDescription", $$v)
      },
      expression: "model.hmProjSdh.auditDescription"
    }
  })], 1)], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "text-right"
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "loading": _vm.isSubmit
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
     __webpack_require__(202).rerender("data-v-63ab2f32", module.exports)
  }
}

/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Tabs', {
    attrs: {
      "animated": false
    },
    model: {
      value: (_vm.tabName),
      callback: function($$v) {
        _vm.tabName = $$v
      },
      expression: "tabName"
    }
  }, [_vm._l((_vm.tabs), function(item) {
    return _c('TabPane', {
      key: item.id,
      attrs: {
        "name": item.id,
        "label": item.text
      }
    })
  }), _vm._v(" "), _c('Button', {
    attrs: {
      "slot": "extra"
    },
    on: {
      "click": function($event) {
        _vm.$root.eventHub.$emit('back', {
          name: 'backlog',
          params: _vm.$router.currentRoute.params
        })
      }
    },
    slot: "extra"
  }, [_vm._v("\n            返回\n        ")])], 2), _vm._v(" "), _c('keep-alive', [_c(_vm.currentTabComponent, {
    tag: "component",
    attrs: {
      "model": _vm.model
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-a5aae41c", module.exports)
  }
}

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1063),
  /* template */
  __webpack_require__(1166),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/trialMeeting.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] trialMeeting.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5aae41c", Component.options)
  } else {
    hotAPI.reload("data-v-a5aae41c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            evaluationList: []
        };
    },

    props: {
        model: Object,
        step: Number
    },
    methods: {
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjEvaluation/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$router.currentRoute.params.id,
                    evalPeriod: 0
                }
            }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                response.data.forEach(function (item) {
                    item.evalVal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(item.evalVal);
                });
                _this.evaluationList = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        }
    },
    created: function created() {
        this.loadModel();
    }
});

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_evaluation__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_evaluation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_evaluation__);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            mortgage: {}
        };
    },

    props: {
        model: Object,
        step: Number
    },
    components: {
        'evaluation': __WEBPACK_IMPORTED_MODULE_0__views_tabs_evaluation___default.a
    },
    methods: {
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$router.currentRoute.params.id,
                    backupFlag: 0
                }
            }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.mortgage = response.data[0] || {};
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        }
    },
    created: function created() {
        this.loadModel();
    }
});

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(917),
  /* template */
  __webpack_require__(921),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/evaluation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] evaluation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-505d82d0", Component.options)
  } else {
    hotAPI.reload("data-v-505d82d0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(918),
  /* template */
  __webpack_require__(922),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/mortgageInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mortgageInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bbdf83e8", Component.options)
  } else {
    hotAPI.reload("data-v-bbdf83e8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.evaluationList.filter(function (value) {
    return value.evalType === '2'
  })), function(item) {
    return (_vm.step > 0) ? _c('Row', {
      key: item.id,
      staticClass: "mb16"
    }, [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "3"
      }
    }, [_vm._v("\n            机构评估\n        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "5"
      }
    }, [_vm._v("\n            " + _vm._s(item.agencyText) + "\n        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_vm._v("\n            " + _vm._s(item.evalVal + '元') + "\n        ")]), _vm._v(" "), (item.preEvalFile) ? _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_c('a', {
      attrs: {
        "href": item.preEvalFilePath,
        "target": "_blank"
      }
    }, [_vm._v("\n                预估单\n            ")])]) : _vm._e()], 1) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.evaluationList.filter(function (value) {
    return value.evalType === '0'
  })), function(item) {
    return (_vm.step > 1) ? _c('Row', {
      key: item.id,
      staticClass: "mb16"
    }, [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "3"
      }
    }, [_vm._v("\n            中介评估\n        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "5"
      }
    }, [_vm._v("\n            " + _vm._s(item.agencyText) + "\n        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_vm._v("\n            " + _vm._s(item.evalVal + '元') + "\n        ")]), _vm._v(" "), (item.url) ? _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_vm._v("\n                查看\n            ")])]) : _vm._e()], 1) : _vm._e()
  }), _vm._v(" "), (_vm.step > 0) ? _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n            初评价值\n        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.model.firstEvalueText + '元') + "\n        ")])], 1) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-505d82d0", module.exports)
  }
}

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "mortgages"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "mortgages",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n            抵押物信息\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    竣工日期\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.completionDate) + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    建成日期\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.dateCompletion) + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    测绘日期\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.mappingDate) + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    土地取得日期\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.landGetDate) + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    建筑面积\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.buidingAcreage + '平米') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    房屋类型\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.houseTypeText) + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    地址\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.province + _vm.mortgage.city + _vm.mortgage.area + _vm.mortgage.detailedAddress) + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('evaluation', {
    attrs: {
      "model": _vm.model,
      "step": _vm.step
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-bbdf83e8", module.exports)
  }
}

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation__);


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object
    },
    components: {
        'mortgage': __WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation___default.a
    },
    methods: {
        show: function show() {}
    }
});

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(927),
  /* template */
  __webpack_require__(931),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/report.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] report.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e6e1a70", Component.options)
  } else {
    hotAPI.reload("data-v-3e6e1a70", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "basic"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "basic",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                项目基本信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        项目编号\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.id) + "\n                            \n                        "), _c('a', {
    on: {
      "click": _vm.show
    }
  }, [_vm._v("项目信息及审批历史")])]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        申请人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.applyUserName) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        申请时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.applyDate) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        推荐渠道\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.channalName) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        客户姓名\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.client.clientName) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        证件类型\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.client.certificatesTypeText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        证件号\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.client.certificatesNumber) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        借款金额\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.initLoanAmountText + '元') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        借款日期\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.initLoanDate) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        借款期限\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.initLoanPeriod + '个月') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        借款用途\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.loanUsage) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        期望还款方式\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.initRepayMethodText) + "\n                    ")])], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('mortgage', {
    attrs: {
      "model": _vm.model,
      "step": 0
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-3e6e1a70", module.exports)
  }
}

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_report__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_report___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_report__);



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            hasChange: false,
            hmProjPlan: {},
            evaluationList: [],
            finalList: [],
            hmProjectClob: {},
            historyColumns: [{ title: '项目编号', key: 'projectId' }, { title: '借款人', key: 'clientName' }, { title: '抵押物证件号', key: 'pawnCertificateCode' }, { title: '批复金额(元)', key: 'actualLoanAmount' }, { title: '决议到期日', key: 'dueDate' }, { title: '放款日期', key: 'actualLoanDate' }, { title: '贷款期限(月)', key: 'loanPeriod' }, { title: '贷款余额(元)', key: 'loanBalance' }, { title: '状态', key: 'projectStatusText' }]
        };
    },

    props: {
        model: Object
    },
    components: {
        'report': __WEBPACK_IMPORTED_MODULE_1__views_tabs_report___default.a
    },
    methods: {
        loadPlan: function loadPlan() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjPlan/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.hmProjPlan = response.data[0] || null;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        loadEvaluation: function loadEvaluation() {
            var _this2 = this;

            this.$axios.options.url = 'houseMortgage/hmProjEvaluation/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                response.data.forEach(function (item) {
                    item.evalVal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(item.evalVal);
                });
                _this2.evaluationList = response.data;
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        },
        loadClob: function loadClob() {
            var _this3 = this;

            this.$axios.options.url = 'houseMortgage/hmProjectClob/read/detail';
            this.$axios.request({ data: { id: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.hmProjectClob = response.data || {};
            }).catch(function (error) {
                _this3.$Message.error(_this3.$config.ERROR);
            });
        }
    },
    created: function created() {
        this.loadPlan();
        this.loadEvaluation();
        this.loadClob();
    }
});

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(932),
  /* template */
  __webpack_require__(934),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/investigationReport.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] investigationReport.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-db54721c", Component.options)
  } else {
    hotAPI.reload("data-v-db54721c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('report', {
    attrs: {
      "model": _vm.model
    }
  }), _vm._v(" "), (_vm.hmProjPlan && !_vm.hasChange) ? _c('Collapse', {
    staticClass: "mt16",
    attrs: {
      "value": "plan"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "plan",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                方案设计\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        还款方式\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjPlan.repaymentMethodText) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        其他还款方式说明\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjPlan.repaymentRemark) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        上报利率\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjPlan.reportRate + '%') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        批复利率\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjPlan.allowRate + '%') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        上报费率\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjPlan.reportFee + '%') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        批复费率\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjPlan.allowFee + '%') + "\n                    ")])], 1)], 1)])], 1) : _vm._e(), _vm._v(" "), (_vm.hasChange) ? _c('Collapse', {
    staticClass: "mt16",
    attrs: {
      "value": "change"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "change",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                决议变更\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        借款人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        共同借款人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        初始借款金额(元)\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        借款期限(月)\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        还款方式\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        其他还款方式说明\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        息费(月)\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        说明\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  })], 1)], 1)])], 1) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "evaluation"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "evaluation",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                价值评估\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        初始价值\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "font12"
  }, [_vm._l((_vm.evaluationList.filter(function (value) {
    return value.evalPeriod === '0' && value.evalType === '2'
  })), function(item) {
    return _c('Row', {
      key: item.id,
      staticClass: "mb16"
    }, [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n                                " + _vm._s(item.agencyText + '估价') + "\n                            ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_vm._v("\n                                " + _vm._s(item.evalVal + '元') + "\n                            ")]), _vm._v(" "), (item.preEvalFile) ? _c('Col', {
      attrs: {
        "span": "3"
      }
    }, [_c('a', {
      attrs: {
        "href": item.preEvalFile,
        "target": "_blank"
      }
    }, [_vm._v("\n                                    预估单\n                                ")])]) : _vm._e(), _vm._v(" "), (item.reportFile) ? _c('Col', {
      attrs: {
        "span": "3"
      }
    }, [_c('a', {
      attrs: {
        "href": item.reportFile,
        "target": "_blank"
      }
    }, [_vm._v("\n                                    评估报告\n                                ")])]) : _vm._e()], 1)
  }), _vm._v(" "), _vm._l((_vm.evaluationList.filter(function (value) {
    return value.evalPeriod === '0' && value.evalType === '0'
  })), function(item) {
    return _c('Row', {
      key: item.id,
      staticClass: "mb16"
    }, [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n                                " + _vm._s(item.agencyText + '估价') + "\n                            ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_vm._v("\n                                " + _vm._s(item.evalValText + '元') + "\n                            ")]), _vm._v(" "), (item.url) ? _c('Col', {
      attrs: {
        "span": "12"
      }
    }, [_c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_vm._v("\n                                    查看\n                                ")])]) : _vm._e()], 1)
  }), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                                初评价值\n                            ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "20"
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.model.initLoanAmountText + '元') + "\n                            ")])], 1)], 2)]), _vm._v(" "), (_vm.evaluationList.filter(function (value) {
    return value.evalPeriod === '1'
  }).length > 0) ? _c('Card', {
    staticClass: "mt16",
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        终评价值\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "font12"
  }, [_vm._l((_vm.evaluationList.filter(function (value) {
    return value.evalPeriod === '1' && value.evalType === '0'
  })), function(item) {
    return _c('Row', {
      key: item.id,
      staticClass: "mb16"
    }, [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n                                " + _vm._s(item.agencyText + '估价') + "\n                            ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_vm._v("\n                                " + _vm._s(item.evalVal + '元') + "\n                            ")]), _vm._v(" "), _c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "1"
      }
    }, [_vm._v("\n                                电话\n                            ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "11"
      }
    }, [_vm._v("\n                                " + _vm._s(item.tel) + "\n                            ")])], 1)
  }), _vm._v(" "), _vm._l((_vm.evaluationList.filter(function (value) {
    return value.evalPeriod === '1' && value.evalType === '1'
  })), function(item) {
    return _c('Row', {
      key: item.id,
      staticClass: "mb16"
    }, [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n                                " + _vm._s(item.agencyText + '估价') + "\n                            ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_vm._v("\n                                " + _vm._s(item.evalVal + '元') + "\n                            ")]), _vm._v(" "), (item.url) ? _c('Col', {
      attrs: {
        "span": "12"
      }
    }, [_c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_vm._v("\n                                    查看\n                                ")])]) : _vm._e()], 1)
  }), _vm._v(" "), _vm._l((_vm.evaluationList.filter(function (value) {
    return value.evalPeriod === '1' && value.evalType === '2'
  })), function(item) {
    return _c('Row', {
      key: item.id,
      staticClass: "mb16"
    }, [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n                                " + _vm._s(item.agencyText + '估价') + "\n                            ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_vm._v("\n                                " + _vm._s(item.evalVal + '元') + "\n                            ")]), _vm._v(" "), (item.preEvalFile) ? _c('Col', {
      attrs: {
        "span": "3"
      }
    }, [_c('a', {
      attrs: {
        "href": item.preEvalFilePath,
        "target": "_blank"
      }
    }, [_vm._v("\n                                    预估单\n                                ")])]) : _vm._e(), _vm._v(" "), (item.reportFile) ? _c('Col', {
      attrs: {
        "span": "3"
      }
    }, [_c('a', {
      attrs: {
        "href": item.reportFilePath,
        "target": "_blank"
      }
    }, [_vm._v("\n                                    评估报告\n                                ")])]) : _vm._e()], 1)
  }), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                                终评价值\n                            ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "20"
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.model.evalResultText + '元') + "\n                            ")])], 1)], 2)]) : _vm._e()], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "examination"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "examination",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                审查审批意见\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        初评意见\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.firstEvalDesc) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.firstEvalUser) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.firstEvalDate) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        下户建议\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.interview_advice) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  })], 1), _vm._v(" "), (_vm.hmProjectClob.internalAuditAdvice) ? _c('Row', {
    staticClass: "mt16"
  }, [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        内审意见\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.internalAuditAdvice) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        抵押物信息描述\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "20"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.pawnFileRemark) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        借款人及担保人信息描述\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "20"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.clientDesc) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        经营情况描述\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "20"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.managementDesc) + "\n                    ")])], 1), _vm._v(" "), (_vm.model.riskAuditResult) ? _c('Row', {
    staticClass: "mt16"
  }, [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        审核意见\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.riskAuditDesc) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        审核结论\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.riskAuditResult) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.riskAuditUser) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.riskAuditDate) + "\n                    ")])], 1) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), (_vm.hmProjectClob.finalEvalDesc) ? _c('Row', {
    staticClass: "mt16"
  }, [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        终评意见\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.finalEvalDesc) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.finalEvalUser) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.finalEvalDate) + "\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.hmProjectClob.reportLeadshipResult) ? _c('Row', {
    staticClass: "mt16"
  }, [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        上报意见\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.reportLeadshipDesc) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        上报结论\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.reportLeadshipResult) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.reportLeadshipUser) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.reportLeadshipDate) + "\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.hmProjectClob.approve1Result) ? _c('Row', {
    staticClass: "mt16"
  }, [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        审议1意见\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.approve1Desc) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        审批1结论\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.approve1Result) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.approve1User) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.approve1Date) + "\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.hmProjectClob.approve2Result) ? _c('Row', {
    staticClass: "mt16"
  }, [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        审议2意见\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.approve2Desc) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        审批2结论\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.approve2Result) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.approve2User) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.approve2Date) + "\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.model.dshResult) ? _c('Row', {
    staticClass: "mt16"
  }, [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        待审会意见汇总\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.dshDesc) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        待审会结论\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.dshResult) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.dshUser) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.dshDate) + "\n                    ")])], 1) : _vm._e(), _vm._v(" "), (_vm.hmProjectClob.resolution_desc) ? _c('Row', {
    staticClass: "mt16"
  }, [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        决议审批意见\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hmProjectClob.resolution_desc) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        提交时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "3"
    }
  })], 1) : _vm._e()], 1)])], 1), _vm._v(" "), (_vm.hmProjPlan) ? _c('Collapse', {
    staticClass: "mt16",
    attrs: {
      "value": "cooperation"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "cooperation",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                合作历史\n            ")]), _vm._v(" "), _c('Table', {
    attrs: {
      "slot": "content",
      "loading": _vm.model.loading,
      "disabled-hover": "",
      "data": _vm.model.historyData,
      "columns": _vm.historyColumns
    },
    slot: "content"
  })], 1)], 1) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-db54721c", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2xvYW5BcHByb3ZhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmlhbE1lZXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvbG9hbkFwcHJvdmFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9sb2FuQXBwcm92YWwudnVlPzg4ZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RyaWFsTWVldGluZy52dWU/ZDhiZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdHJpYWxNZWV0aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2V2YWx1YXRpb24uanM/NDAwNioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9tb3J0Z2FnZUluZm9ybWF0aW9uLmpzPzEwMTQqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2V2YWx1YXRpb24udnVlPzgwMzgqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24udnVlPzdlMGIqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2V2YWx1YXRpb24udnVlP2E1MTYqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9tb3J0Z2FnZUluZm9ybWF0aW9uLnZ1ZT9jNWJjKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9yZXBvcnQuanM/MDljYioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvcmVwb3J0LnZ1ZT8zNmQ0KioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvcmVwb3J0LnZ1ZT8yMDViKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9pbnZlc3RpZ2F0aW9uUmVwb3J0LmpzPzcwNTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvaW52ZXN0aWdhdGlvblJlcG9ydC52dWU/NGVjOSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9pbnZlc3RpZ2F0aW9uUmVwb3J0LnZ1ZT9lMmRkKiJdLCJuYW1lcyI6WyJwcm9wcyIsIm1vZGVsIiwiT2JqZWN0IiwiZGF0YSIsInVzZXIiLCJKU09OIiwicGFyc2UiLCIkbG9jYWxTdG9yYWdlIiwiZ2V0IiwibG9jYWxEYXRlIiwidGltZVV0aWwiLCJnZXRDdXJyZW50RGF0ZSIsIkRhdGUiLCJyZXN1bHQiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsImlzU3VibWl0IiwibWV0aG9kcyIsImxvYWRSZXN1bHQiLCIkYXhpb3MiLCJvcHRpb25zIiwidXJsIiwicmVxdWVzdCIsImtleSIsInRoZW4iLCJyZXNwb25zZSIsImh0dHBDb2RlIiwiJE1lc3NhZ2UiLCJlcnJvciIsIm1zZyIsIiRjb25maWciLCJFUlJPUiIsImNhdGNoIiwic3VibWl0IiwiJHJlZnMiLCJhcHByb3ZhbCIsInZhbGlkYXRlIiwidmFsaWQiLCJzdHJpbmdpZnkiLCIkcm91dGVyIiwicHVzaCIsIm5hbWUiLCJjcmVhdGVkIiwiaG1Qcm9qU2RoIiwiY2xpZW50IiwiaGlzdG9yeURhdGEiLCJsb2FkaW5nIiwidGFiTmFtZSIsInRhYnMiLCJpZCIsInRleHQiLCJjb21wdXRlZCIsImN1cnJlbnRUYWJDb21wb25lbnQiLCJjb21wb25lbnRzIiwibG9hbkFwcHJvdmFsIiwibG9hZENsaWVudCIsImxvYWRDb29wZXJhdGUiLCJjbGllbnRJZCIsImZvckVhY2giLCJpdGVtIiwiYWN0dWFsTG9hbkFtb3VudCIsImZvcm1hdE1vbmV5IiwibG9hbkJhbGFuY2UiLCJsb2FkTW9kZWwiLCJjdXJyZW50Um91dGUiLCJwYXJhbXMiLCJpbml0TG9hbkFtb3VudFRleHQiLCJpbml0TG9hbkFtb3VudCIsImZpcnN0RXZhbHVlVGV4dCIsImZpcnN0RXZhbHVlIiwiZXZhbFJlc3VsdFRleHQiLCJldmFsUmVzdWx0IiwibW91bnRlZCIsIiRyb290IiwiZXZlbnRIdWIiLCIkZW1pdCIsImV2YWx1YXRpb25MaXN0Iiwic3RlcCIsIk51bWJlciIsInByb2plY3RJZCIsImV2YWxQZXJpb2QiLCJldmFsVmFsIiwibW9ydGdhZ2UiLCJldmFsdWF0aW9uIiwiYmFja3VwRmxhZyIsInNob3ciLCJoYXNDaGFuZ2UiLCJobVByb2pQbGFuIiwiZmluYWxMaXN0IiwiaG1Qcm9qZWN0Q2xvYiIsImhpc3RvcnlDb2x1bW5zIiwidGl0bGUiLCJyZXBvcnQiLCJsb2FkUGxhbiIsImxvYWRFdmFsdWF0aW9uIiwibG9hZENsb2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsK0RBQWU7QUFDWEEsV0FBTztBQUNIQyxlQUFPQztBQURKLEtBREk7QUFJWEMsUUFKVyxrQkFJSjtBQUNILGVBQU87QUFDSEMsa0JBQU1DLEtBQUtDLEtBQUwsQ0FBVyxLQUFLQyxhQUFMLENBQW1CQyxHQUFuQixDQUF1QixNQUF2QixDQUFYLENBREg7QUFFSEMsdUJBQVcsNERBQUFDLENBQVNDLGNBQVQsQ0FBd0IsSUFBSUMsSUFBSixFQUF4QixDQUZSO0FBR0hDLG9CQUFRLEVBSEw7QUFJSEMsbUJBQU87QUFDSCx5Q0FBeUIsQ0FBQyxFQUFDQyxVQUFVLElBQVgsRUFBaUJDLFNBQVMsVUFBMUIsRUFBRDtBQUR0QixhQUpKO0FBT0hDLHNCQUFVO0FBUFAsU0FBUDtBQVNILEtBZFU7O0FBZVhDLGFBQVM7QUFDTEMsa0JBREssd0JBQ1E7QUFBQTs7QUFDVCxpQkFBS0MsTUFBTCxDQUFZQyxPQUFaLENBQW9CQyxHQUFwQixHQUEwQixrQkFBMUI7QUFDQSxpQkFBS0YsTUFBTCxDQUFZRyxPQUFaLENBQW9CLEVBQUNwQixNQUFNLEVBQUNxQixLQUFLLGFBQU4sRUFBUCxFQUFwQixFQUFrREMsSUFBbEQsQ0FBdUQsVUFBQ0MsUUFBRCxFQUFjO0FBQ2pFLG9CQUFJQSxTQUFTQyxRQUFULElBQXFCLEdBQXpCLEVBQThCO0FBQzFCLDBCQUFLQyxRQUFMLENBQWNDLEtBQWQsQ0FB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Q0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxH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O0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIxMC5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dGltZVV0aWx9IGZyb20gXCIuLi8uLi9saWJzL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIG1vZGVsOiBPYmplY3RcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyOiBKU09OLnBhcnNlKHRoaXMuJGxvY2FsU3RvcmFnZS5nZXQoJ3VzZXInKSksXG4gICAgICAgICAgICBsb2NhbERhdGU6IHRpbWVVdGlsLmdldEN1cnJlbnREYXRlKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgcmVzdWx0OiBbXSxcbiAgICAgICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgICAgICAgJ2htUHJvalNkaC5hdWRpdFJlc3VsdCc6IFt7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICflrqHorq7nu5PmnpzkuI3og73kuLrnqbonfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1N1Ym1pdDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2FkUmVzdWx0KCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnc3lzL2RpYy9yZWFkL2tleSc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7a2V5OiAnQVVESVRSRVNVTFQnfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmFwcHJvdmFsLnZhbGlkYXRlKCh2YWxpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2plY3QvZHNoY2hlY2snO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiBKU09OLnN0cmluZ2lmeSh0aGlzLm1vZGVsKX0sICdqc29uJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJtaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnYmFja2xvZyd9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLm1vZGVsLmhtUHJvalNkaCA9IHt9O1xuICAgICAgICB0aGlzLmxvYWRSZXN1bHQoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9sb2FuQXBwcm92YWwuanMiLCJpbXBvcnQgaW52ZXN0aWdhdGlvblJlcG9ydCBmcm9tICcuLi92aWV3cy90YWJzL2ludmVzdGlnYXRpb25SZXBvcnQnXG5pbXBvcnQgbG9hbkFwcHJvdmFsIGZyb20gJy4uL3ZpZXdzL3RhYnMvbG9hbkFwcHJvdmFsJ1xuaW1wb3J0IHtmb3JtYXRNb25leX0gZnJvbSBcIi4uL2xpYnMvdXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgY2xpZW50OiB7fSxcbiAgICAgICAgICAgICAgICBoaXN0b3J5RGF0YTogW10sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJOYW1lOiAnaW52ZXN0aWdhdGlvblJlcG9ydCcsXG4gICAgICAgICAgICB0YWJzOiBbe2lkOiAnaW52ZXN0aWdhdGlvblJlcG9ydCcsIHRleHQ6ICfosIPmn6XmiqXlkYonfSxcbiAgICAgICAgICAgICAgICB7aWQ6ICdsb2FuQXBwcm92YWwnLCB0ZXh0OiAn6aG555uu5a6h5om5J31dXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGN1cnJlbnRUYWJDb21wb25lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJOYW1lO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICdpbnZlc3RpZ2F0aW9uUmVwb3J0JzogaW52ZXN0aWdhdGlvblJlcG9ydCxcbiAgICAgICAgJ2xvYW5BcHByb3ZhbCc6IGxvYW5BcHByb3ZhbFxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIGxvYWRDbGllbnQoaWQpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1DbGllbnQvcmVhZC9kZXRhaWwnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2lkOiBpZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmNsaWVudCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZENvb3BlcmF0ZShpZCkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Mb2FuQXBwbHkvY29vcGVyYXRlSGlzdG9yeVF1ZXJ5JztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtjbGllbnRJZDogaWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0dWFsTG9hbkFtb3VudCA9IGZvcm1hdE1vbmV5KGl0ZW0uYWN0dWFsTG9hbkFtb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubG9hbkJhbGFuY2UgPSBmb3JtYXRNb25leShpdGVtLmxvYW5CYWxhbmNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmhpc3RvcnlEYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkTW9kZWwoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvamVjdC9yZWFkL2RldGFpbCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuY2xpZW50ID0ge307XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pbml0TG9hbkFtb3VudFRleHQgPSBmb3JtYXRNb25leShyZXNwb25zZS5kYXRhLmluaXRMb2FuQW1vdW50KTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmZpcnN0RXZhbHVlVGV4dCA9IGZvcm1hdE1vbmV5KHJlc3BvbnNlLmRhdGEuZmlyc3RFdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZXZhbFJlc3VsdFRleHQgPSBmb3JtYXRNb25leShyZXNwb25zZS5kYXRhLmV2YWxSZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaGlzdG9yeURhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDbGllbnQocmVzcG9uc2UuZGF0YS5jbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29vcGVyYXRlKHJlc3BvbnNlLmRhdGEuY2xpZW50SWQpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgdGhpcy5sb2FkTW9kZWwoKTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JyZWFkY3J1bWInKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdHJpYWxNZWV0aW5nLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9sb2FuQXBwcm92YWwuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTYzYWIyZjMyXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2xvYW5BcHByb3ZhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9sb2FuQXBwcm92YWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbG9hbkFwcHJvdmFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02M2FiMmYzMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTYzYWIyZjMyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWJzL2xvYW5BcHByb3ZhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDEwODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInByb2plY3RcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwicHJvamVjdFwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDlrqHmibnmhI/op4FcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJrZXl1cFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCEoJ2J1dHRvbicgaW4gJGV2ZW50KSAmJiBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIikpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdGb3JtJywge1xuICAgIHJlZjogXCJhcHByb3ZhbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbCxcbiAgICAgIFwicnVsZXNcIjogX3ZtLnJ1bGVzLFxuICAgICAgXCJsYWJlbC13aWR0aFwiOiAxMDBcbiAgICB9XG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDotLflrqHkvJrlp5TlkZhcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS51c2VyLnVzZXJOYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlrqHmibnml6XmnJ9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sb2NhbERhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcImhtUHJvalNkaC5hdWRpdFJlc3VsdFwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5a6h6K6u57uT5p6cXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLpgInmi6nlrqHorq7mhI/op4EgfCDlv4XloatcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLm1vZGVsLmhtUHJvalNkaC5hdWRpdFJlc3VsdCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbC5obVByb2pTZGgsIFwiYXVkaXRSZXN1bHRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwibW9kZWwuaG1Qcm9qU2RoLmF1ZGl0UmVzdWx0XCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLnJlc3VsdCksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBrZXlcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKHZhbHVlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6LS35a6h5Lya5aeU5ZGY5oSP6KeBXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dGFyZWFcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLkuIrmiqXmhI/op4FcIixcbiAgICAgIFwibWF4bGVuZ3RoXCI6IDUwMFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLm1vZGVsLmhtUHJvalNkaC5hdWRpdERlc2NyaXB0aW9uKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLmhtUHJvalNkaCwgXCJhdWRpdERlc2NyaXB0aW9uXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmhtUHJvalNkaC5hdWRpdERlc2NyaXB0aW9uXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiXG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcImxvYWRpbmdcIjogX3ZtLmlzU3VibWl0XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc3VibWl0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5o+Q5LqkXFxuICAgICAgICBcIildKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjNhYjJmMzJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02M2FiMmYzMlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvbG9hbkFwcHJvdmFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ1RhYnMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYW5pbWF0ZWRcIjogZmFsc2VcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS50YWJOYW1lKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLnRhYk5hbWUgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInRhYk5hbWVcIlxuICAgIH1cbiAgfSwgW192bS5fbCgoX3ZtLnRhYnMpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdUYWJQYW5lJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJuYW1lXCI6IGl0ZW0uaWQsXG4gICAgICAgIFwibGFiZWxcIjogaXRlbS50ZXh0XG4gICAgICB9XG4gICAgfSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImV4dHJhXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JhY2snLCB7XG4gICAgICAgICAgbmFtZTogJ2JhY2tsb2cnLFxuICAgICAgICAgIHBhcmFtczogX3ZtLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgc2xvdDogXCJleHRyYVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDov5Tlm55cXG4gICAgICAgIFwiKV0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdrZWVwLWFsaXZlJywgW19jKF92bS5jdXJyZW50VGFiQ29tcG9uZW50LCB7XG4gICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbFxuICAgIH1cbiAgfSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWE1YWFlNDFjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYTVhYWU0MWNcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90cmlhbE1lZXRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy90cmlhbE1lZXRpbmcuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWE1YWFlNDFjXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL3RyaWFsTWVldGluZy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdHJpYWxNZWV0aW5nLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRyaWFsTWVldGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYTVhYWU0MWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hNWFhZTQxY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdHJpYWxNZWV0aW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJpbXBvcnQge2Zvcm1hdE1vbmV5fSBmcm9tIFwiLi4vLi4vbGlicy91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXZhbHVhdGlvbkxpc3Q6IFtdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG1vZGVsOiBPYmplY3QsXG4gICAgICAgIHN0ZXA6IE51bWJlclxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2FkTW9kZWwoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvakV2YWx1YXRpb24vcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgZXZhbFBlcmlvZDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmV2YWxWYWwgPSBmb3JtYXRNb25leShpdGVtLmV2YWxWYWwpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmFsdWF0aW9uTGlzdCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZE1vZGVsKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvZXZhbHVhdGlvbi5qcyIsImltcG9ydCBldmFsdWF0aW9uIGZyb20gJy4uLy4uL3ZpZXdzL3RhYnMvZXZhbHVhdGlvbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3J0Z2FnZToge31cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWw6IE9iamVjdCxcbiAgICAgICAgc3RlcDogTnVtYmVyXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICdldmFsdWF0aW9uJzogZXZhbHVhdGlvblxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2FkTW9kZWwoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUGF3bi9yZWFkL3F1ZXJ5QnlQcm9qZWN0SWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICBiYWNrdXBGbGFnOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tb3J0Z2FnZSA9IHJlc3BvbnNlLmRhdGFbMF0gfHwge307XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRNb2RlbCgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24uanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vY29tcG9uZW50cy90YWJzL2V2YWx1YXRpb24uanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTUwNWQ4MmQwXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2V2YWx1YXRpb24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3RhYnMvZXZhbHVhdGlvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBldmFsdWF0aW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01MDVkODJkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTUwNWQ4MmQwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWJzL2V2YWx1YXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA5MTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA4IDkgMTAgMTIgMTMgMTQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vY29tcG9uZW50cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24uanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWJiZGY4M2U4XFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL21vcnRnYWdlSW5mb3JtYXRpb24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBtb3J0Z2FnZUluZm9ybWF0aW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1iYmRmODNlOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWJiZGY4M2U4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA5MjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA4IDkgMTAgMTIgMTMgMTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfdm0uX2woKF92bS5ldmFsdWF0aW9uTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2YWxUeXBlID09PSAnMidcbiAgfSkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIChfdm0uc3RlcCA+IDApID8gX2MoJ1JvdycsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1iMTZcIlxuICAgIH0sIFtfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIzXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5py65p6E6K+E5LywXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmFnZW5jeVRleHQpICsgXCJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uZXZhbFZhbCArICflhYMnKSArIFwiXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgKGl0ZW0ucHJlRXZhbEZpbGUpID8gX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLnByZUV2YWxGaWxlUGF0aCxcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg6aKE5Lyw5Y2VXFxuICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpXSwgMSkgOiBfdm0uX2UoKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZXZhbHVhdGlvbkxpc3QuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmFsVHlwZSA9PT0gJzAnXG4gIH0pKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiAoX3ZtLnN0ZXAgPiAxKSA/IF9jKCdSb3cnLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBzdGF0aWNDbGFzczogXCJtYjE2XCJcbiAgICB9LCBbX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIOS4reS7i+ivhOS8sFxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI1XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5hZ2VuY3lUZXh0KSArIFwiXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmV2YWxWYWwgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIChpdGVtLnVybCkgPyBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0udXJsLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDmn6XnnItcXG4gICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCldLCAxKSA6IF92bS5fZSgpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnN0ZXAgPiAwKSA/IF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5Yid6K+E5Lu35YC8XFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIxXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZmlyc3RFdmFsdWVUZXh0ICsgJ+WFgycpICsgXCJcXG4gICAgICAgIFwiKV0pXSwgMSkgOiBfdm0uX2UoKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTUwNWQ4MmQwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTA1ZDgyZDBcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL2V2YWx1YXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA5MjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA4IDkgMTAgMTIgMTMgMTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwibW9ydGdhZ2VzXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcIm1vcnRnYWdlc1wiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIOaKteaKvOeJqeS/oeaBr1xcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDnq6Plt6Xml6XmnJ9cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb3J0Z2FnZS5jb21wbGV0aW9uRGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlu7rmiJDml6XmnJ9cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb3J0Z2FnZS5kYXRlQ29tcGxldGlvbikgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmtYvnu5jml6XmnJ9cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb3J0Z2FnZS5tYXBwaW5nRGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWcn+WcsOWPluW+l+aXpeacn1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vcnRnYWdlLmxhbmRHZXREYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOW7uuetkemdouenr1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vcnRnYWdlLmJ1aWRpbmdBY3JlYWdlICsgJ+W5s+exsycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5oi/5bGL57G75Z6LXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9ydGdhZ2UuaG91c2VUeXBlVGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWcsOWdgFxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIxXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb3J0Z2FnZS5wcm92aW5jZSArIF92bS5tb3J0Z2FnZS5jaXR5ICsgX3ZtLm1vcnRnYWdlLmFyZWEgKyBfdm0ubW9ydGdhZ2UuZGV0YWlsZWRBZGRyZXNzKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZXZhbHVhdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtb2RlbFwiOiBfdm0ubW9kZWwsXG4gICAgICBcInN0ZXBcIjogX3ZtLnN0ZXBcbiAgICB9XG4gIH0pXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWJiZGY4M2U4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYmJkZjgzZThcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA5MjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA4IDkgMTAgMTIgMTMgMTQiLCJpbXBvcnQgbW9ydGdhZ2UgZnJvbSAnLi4vLi4vdmlld3MvdGFicy9tb3J0Z2FnZUluZm9ybWF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6e1xuICAgICAgICBtb2RlbDpPYmplY3RcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ21vcnRnYWdlJzogbW9ydGdhZ2VcbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgICBzaG93KCl7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YWJzL3JlcG9ydC5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvcmVwb3J0LmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zZTZlMWE3MFxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9yZXBvcnQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3RhYnMvcmVwb3J0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHJlcG9ydC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtM2U2ZTFhNzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zZTZlMWE3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9yZXBvcnQudnVlXG4vLyBtb2R1bGUgaWQgPSA5Mjlcbi8vIG1vZHVsZSBjaHVua3MgPSA4IDkgMTAgMTIgMTMgMTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJiYXNpY1wiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJiYXNpY1wiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDpobnnm67ln7rmnKzkv6Hmga9cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDpobnnm67nvJblj7dcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmlkKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgwqDCoMKgwqBcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCdhJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5zaG93XG4gICAgfVxuICB9LCBbX3ZtLl92KFwi6aG555uu5L+h5oGv5Y+K5a6h5om55Y6G5Y+yXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg55Sz6K+35Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5hcHBseVVzZXJOYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDnlLPor7fml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcGx5RGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaOqOiNkOa4oOmBk1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY2hhbm5hbE5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqLmiLflp5PlkI1cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNsaWVudC5jbGllbnROYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDor4Hku7bnsbvlnotcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNsaWVudC5jZXJ0aWZpY2F0ZXNUeXBlVGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOivgeS7tuWPt1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY2xpZW50LmNlcnRpZmljYXRlc051bWJlcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWAn+asvumHkeminVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaW5pdExvYW5BbW91bnRUZXh0ICsgJ+WFgycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWAn+asvuaXpeacn1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaW5pdExvYW5EYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+5pyf6ZmQXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5pbml0TG9hblBlcmlvZCArICfkuKrmnIgnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+55So6YCUXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5sb2FuVXNhZ2UpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOacn+acm+i/mOasvuaWueW8j1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaW5pdFJlcGF5TWV0aG9kVGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtb3J0Z2FnZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtb2RlbFwiOiBfdm0ubW9kZWwsXG4gICAgICBcInN0ZXBcIjogMFxuICAgIH1cbiAgfSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zZTZlMWE3MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNlNmUxYTcwXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvdGFicy9yZXBvcnQudnVlXG4vLyBtb2R1bGUgaWQgPSA5MzFcbi8vIG1vZHVsZSBjaHVua3MgPSA4IDkgMTAgMTIgMTMgMTQiLCJpbXBvcnQge2Zvcm1hdE1vbmV5fSBmcm9tIFwiLi4vLi4vbGlicy91dGlsXCI7XG5pbXBvcnQgcmVwb3J0IGZyb20gJy4uLy4uL3ZpZXdzL3RhYnMvcmVwb3J0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc0NoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBobVByb2pQbGFuOiB7fSxcbiAgICAgICAgICAgIGV2YWx1YXRpb25MaXN0OiBbXSxcbiAgICAgICAgICAgIGZpbmFsTGlzdDogW10sXG4gICAgICAgICAgICBobVByb2plY3RDbG9iOiB7fSxcbiAgICAgICAgICAgIGhpc3RvcnlDb2x1bW5zOiBbe3RpdGxlOiAn6aG555uu57yW5Y+3Jywga2V5OiAncHJvamVjdElkJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5YCf5qy+5Lq6Jywga2V5OiAnY2xpZW50TmFtZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+aKteaKvOeJqeivgeS7tuWPtycsIGtleTogJ3Bhd25DZXJ0aWZpY2F0ZUNvZGUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmibnlpI3ph5Hpop0o5YWDKScsIGtleTogJ2FjdHVhbExvYW5BbW91bnQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflhrPorq7liLDmnJ/ml6UnLCBrZXk6ICdkdWVEYXRlJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5pS+5qy+5pel5pyfJywga2V5OiAnYWN0dWFsTG9hbkRhdGUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfotLfmrL7mnJ/pmZAo5pyIKScsIGtleTogJ2xvYW5QZXJpb2QnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfotLfmrL7kvZnpop0o5YWDKScsIGtleTogJ2xvYW5CYWxhbmNlJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn54q25oCBJywga2V5OiAncHJvamVjdFN0YXR1c1RleHQnfV1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWw6IE9iamVjdFxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAncmVwb3J0JzogcmVwb3J0XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWRQbGFuKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2pQbGFuL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7cHJvamVjdElkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhtUHJvalBsYW4gPSByZXNwb25zZS5kYXRhWzBdIHx8IG51bGw7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZEV2YWx1YXRpb24oKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvakV2YWx1YXRpb24vcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwcm9qZWN0SWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmV2YWxWYWwgPSBmb3JtYXRNb25leShpdGVtLmV2YWxWYWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZhbHVhdGlvbkxpc3QgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRDbG9iKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2plY3RDbG9iL3JlYWQvZGV0YWlsJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtpZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5obVByb2plY3RDbG9iID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRQbGFuKCk7XG4gICAgICAgIHRoaXMubG9hZEV2YWx1YXRpb24oKTtcbiAgICAgICAgdGhpcy5sb2FkQ2xvYigpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YWJzL2ludmVzdGlnYXRpb25SZXBvcnQuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vY29tcG9uZW50cy90YWJzL2ludmVzdGlnYXRpb25SZXBvcnQuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWRiNTQ3MjFjXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2ludmVzdGlnYXRpb25SZXBvcnQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3RhYnMvaW52ZXN0aWdhdGlvblJlcG9ydC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBpbnZlc3RpZ2F0aW9uUmVwb3J0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kYjU0NzIxY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWRiNTQ3MjFjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWJzL2ludmVzdGlnYXRpb25SZXBvcnQudnVlXG4vLyBtb2R1bGUgaWQgPSA5MzNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IDEwIDEyIDEzIDE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3JlcG9ydCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtb2RlbFwiOiBfdm0ubW9kZWxcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmhtUHJvalBsYW4gJiYgIV92bS5oYXNDaGFuZ2UpID8gX2MoJ0NvbGxhcHNlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInBsYW5cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwicGxhblwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDmlrnmoYjorr7orqFcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDov5jmrL7mlrnlvI9cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjFcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2pQbGFuLnJlcGF5bWVudE1ldGhvZFRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWFtuS7lui/mOasvuaWueW8j+ivtOaYjlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvalBsYW4ucmVwYXltZW50UmVtYXJrKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkuIrmiqXliKnnjodcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvalBsYW4ucmVwb3J0UmF0ZSArICclJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaJueWkjeWIqeeOh1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qUGxhbi5hbGxvd1JhdGUgKyAnJScpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOS4iuaKpei0ueeOh1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qUGxhbi5yZXBvcnRGZWUgKyAnJScpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmibnlpI3otLnnjodcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvalBsYW4uYWxsb3dGZWUgKyAnJScpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0pXSwgMSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5oYXNDaGFuZ2UpID8gX2MoJ0NvbGxhcHNlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImNoYW5nZVwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJjaGFuZ2VcIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5Yaz6K6u5Y+Y5pu0XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWFseWQjOWAn+asvuS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDliJ3lp4vlgJ/mrL7ph5Hpop0o5YWDKVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWAn+asvuacn+mZkCjmnIgpXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOi/mOasvuaWueW8j1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlhbbku5bov5jmrL7mlrnlvI/or7TmmI5cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmga/otLko5pyIKVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDor7TmmI5cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTNcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZXZhbHVhdGlvblwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJldmFsdWF0aW9uXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOS7t+WAvOivhOS8sFxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnQ2FyZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXMtaG92ZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yIGZvbnQxMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJ0aXRsZVwiXG4gICAgfSxcbiAgICBzbG90OiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWIneWni+S7t+WAvFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9udDEyXCJcbiAgfSwgW192bS5fbCgoX3ZtLmV2YWx1YXRpb25MaXN0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZhbFBlcmlvZCA9PT0gJzAnICYmIHZhbHVlLmV2YWxUeXBlID09PSAnMidcbiAgfSkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdSb3cnLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBzdGF0aWNDbGFzczogXCJtYjE2XCJcbiAgICB9LCBbX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5hZ2VuY3lUZXh0ICsgJ+S8sOS7tycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI4XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmV2YWxWYWwgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgKGl0ZW0ucHJlRXZhbEZpbGUpID8gX2MoJ0NvbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLnByZUV2YWxGaWxlLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOmihOS8sOWNlVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoaXRlbS5yZXBvcnRGaWxlKSA/IF9jKCdDb2wnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIzXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogaXRlbS5yZXBvcnRGaWxlLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOivhOS8sOaKpeWRilxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpXSwgMSlcbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmV2YWx1YXRpb25MaXN0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZhbFBlcmlvZCA9PT0gJzAnICYmIHZhbHVlLmV2YWxUeXBlID09PSAnMCdcbiAgfSkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdSb3cnLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBzdGF0aWNDbGFzczogXCJtYjE2XCJcbiAgICB9LCBbX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5hZ2VuY3lUZXh0ICsgJ+S8sOS7tycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI4XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmV2YWxWYWxUZXh0ICsgJ+WFgycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIChpdGVtLnVybCkgPyBfYygnQ29sJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLnVybCxcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6XnnItcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSkgOiBfdm0uX2UoKV0sIDEpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yid6K+E5Lu35YC8XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjBcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmluaXRMb2FuQW1vdW50VGV4dCArICflhYMnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAyKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmV2YWx1YXRpb25MaXN0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZhbFBlcmlvZCA9PT0gJzEnXG4gIH0pLmxlbmd0aCA+IDApID8gX2MoJ0NhcmQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpcy1ob3ZlclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3IgZm9udDEyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcInRpdGxlXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg57uI6K+E5Lu35YC8XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb250MTJcIlxuICB9LCBbX3ZtLl9sKChfdm0uZXZhbHVhdGlvbkxpc3QuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmFsUGVyaW9kID09PSAnMScgJiYgdmFsdWUuZXZhbFR5cGUgPT09ICcwJ1xuICB9KSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ1JvdycsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1iMTZcIlxuICAgIH0sIFtfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI0XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmFnZW5jeVRleHQgKyAn5Lyw5Lu3JykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uZXZhbFZhbCArICflhYMnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIxXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDnlLXor51cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIxMVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS50ZWwpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZXZhbHVhdGlvbkxpc3QuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmFsUGVyaW9kID09PSAnMScgJiYgdmFsdWUuZXZhbFR5cGUgPT09ICcxJ1xuICB9KSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ1JvdycsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1iMTZcIlxuICAgIH0sIFtfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI0XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmFnZW5jeVRleHQgKyAn5Lyw5Lu3JykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uZXZhbFZhbCArICflhYMnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoaXRlbS51cmwpID8gX2MoJ0NvbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogaXRlbS51cmwsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l55yLXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCldLCAxKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZXZhbHVhdGlvbkxpc3QuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmFsUGVyaW9kID09PSAnMScgJiYgdmFsdWUuZXZhbFR5cGUgPT09ICcyJ1xuICB9KSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ1JvdycsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1iMTZcIlxuICAgIH0sIFtfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI0XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmFnZW5jeVRleHQgKyAn5Lyw5Lu3JykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uZXZhbFZhbCArICflhYMnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoaXRlbS5wcmVFdmFsRmlsZSkgPyBfYygnQ29sJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0ucHJlRXZhbEZpbGVQYXRoLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOmihOS8sOWNlVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoaXRlbS5yZXBvcnRGaWxlKSA/IF9jKCdDb2wnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIzXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogaXRlbS5yZXBvcnRGaWxlUGF0aCxcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDor4TkvLDmiqXlkYpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSkgOiBfdm0uX2UoKV0sIDEpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg57uI6K+E5Lu35YC8XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjBcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmV2YWxSZXN1bHRUZXh0ICsgJ+WFgycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDIpXSkgOiBfdm0uX2UoKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImV4YW1pbmF0aW9uXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImV4YW1pbmF0aW9uXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOWuoeafpeWuoeaJueaEj+ingVxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWIneivhOaEj+ingVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5maXJzdEV2YWxEZXNjKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5maXJzdEV2YWxVc2VyKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5maXJzdEV2YWxEYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkuIvmiLflu7rorq5cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IuaW50ZXJ2aWV3X2FkdmljZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmhtUHJvamVjdENsb2IuaW50ZXJuYWxBdWRpdEFkdmljZSkgPyBfYygnUm93Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIlxuICB9LCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YaF5a6h5oSP6KeBXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLmludGVybmFsQXVkaXRBZHZpY2UpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmirXmirzniankv6Hmga/mj4/ov7BcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjBcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLnBhd25GaWxlUmVtYXJrKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlgJ/mrL7kurrlj4rmi4Xkv53kurrkv6Hmga/mj4/ov7BcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjBcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLmNsaWVudERlc2MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOe7j+iQpeaDheWGteaPj+i/sFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IubWFuYWdlbWVudERlc2MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIChfdm0ubW9kZWwucmlza0F1ZGl0UmVzdWx0KSA/IF9jKCdSb3cnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiXG4gIH0sIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqHmoLjmhI/op4FcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2Iucmlza0F1ZGl0RGVzYykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWuoeaguOe7k+iuulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwucmlza0F1ZGl0UmVzdWx0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5yaXNrQXVkaXRVc2VyKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5yaXNrQXVkaXREYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmhtUHJvamVjdENsb2IuZmluYWxFdmFsRGVzYykgPyBfYygnUm93Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIlxuICB9LCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg57uI6K+E5oSP6KeBXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLmZpbmFsRXZhbERlc2MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmZpbmFsRXZhbFVzZXIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmZpbmFsRXZhbERhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5obVByb2plY3RDbG9iLnJlcG9ydExlYWRzaGlwUmVzdWx0KSA/IF9jKCdSb3cnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiXG4gIH0sIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkuIrmiqXmhI/op4FcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IucmVwb3J0TGVhZHNoaXBEZXNjKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5LiK5oql57uT6K66XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5yZXBvcnRMZWFkc2hpcFJlc3VsdCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwucmVwb3J0TGVhZHNoaXBVc2VyKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5yZXBvcnRMZWFkc2hpcERhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5obVByb2plY3RDbG9iLmFwcHJvdmUxUmVzdWx0KSA/IF9jKCdSb3cnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiXG4gIH0sIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqHorq4x5oSP6KeBXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLmFwcHJvdmUxRGVzYykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWuoeaJuTHnu5PorrpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcHJvdmUxUmVzdWx0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5hcHByb3ZlMVVzZXIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcHJvdmUxRGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmhtUHJvamVjdENsb2IuYXBwcm92ZTJSZXN1bHQpID8gX2MoJ1JvdycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCJcbiAgfSwgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWuoeiurjLmhI/op4FcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IuYXBwcm92ZTJEZXNjKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5a6h5om5Mue7k+iuulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwcm92ZTJSZXN1bHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcHJvdmUyVXNlcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwcm92ZTJEYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ubW9kZWwuZHNoUmVzdWx0KSA/IF9jKCdSb3cnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiXG4gIH0sIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlvoXlrqHkvJrmhI/op4HmsYfmgLtcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IuZHNoRGVzYykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOW+heWuoeS8mue7k+iuulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZHNoUmVzdWx0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kc2hVc2VyKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kc2hEYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uaG1Qcm9qZWN0Q2xvYi5yZXNvbHV0aW9uX2Rlc2MpID8gX2MoJ1JvdycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCJcbiAgfSwgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWGs+iuruWuoeaJueaEj+ingVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5yZXNvbHV0aW9uX2Rlc2MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSldLCAxKSA6IF92bS5fZSgpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmhtUHJvalBsYW4pID8gX2MoJ0NvbGxhcHNlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImNvb3BlcmF0aW9uXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImNvb3BlcmF0aW9uXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOWQiOS9nOWOhuWPslxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIixcbiAgICAgIFwibG9hZGluZ1wiOiBfdm0ubW9kZWwubG9hZGluZyxcbiAgICAgIFwiZGlzYWJsZWQtaG92ZXJcIjogXCJcIixcbiAgICAgIFwiZGF0YVwiOiBfdm0ubW9kZWwuaGlzdG9yeURhdGEsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLmhpc3RvcnlDb2x1bW5zXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9KV0sIDEpXSwgMSkgOiBfdm0uX2UoKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWRiNTQ3MjFjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZGI1NDcyMWNcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL2ludmVzdGlnYXRpb25SZXBvcnQudnVlXG4vLyBtb2R1bGUgaWQgPSA5MzRcbi8vIG1vZHVsZSBjaHVua3MgPSA4IDEwIDEyIDEzIDE0Il0sInNvdXJjZVJvb3QiOiIifQ==