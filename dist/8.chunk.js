webpackJsonp([8],{

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object,
        dic: Object
    },
    data: function data() {
        return {
            auditColumns: [{ title: '审核项目', key: 'itemName' }, { title: '提示建议', key: 'itemContent' }],
            localDate: __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(new Date()),
            user: JSON.parse(this.$localStorage.get('user')),
            isSubmit: false,
            loading: false
        };
    },
    created: function created() {
        this.model.hmProjectClob = {};
    }
});

/***/ }),

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1054),
  /* template */
  __webpack_require__(1123),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/projectApproval.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] projectApproval.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33c03798", Component.options)
  } else {
    hotAPI.reload("data-v-33c03798", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "project"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "project",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n            审批意见\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 80
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            审批人\n                        ")]), _vm._v("\n                        " + _vm._s(_vm.user.userName) + "\n                    ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 80
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            审批日期\n                        ")]), _vm._v("\n                        " + _vm._s(_vm.localDate) + "\n                    ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 80,
      "prop": "approve1Result"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                    审批结果\n                ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择审批结果 | 必填"
    },
    model: {
      value: (_vm.model.approve1Result),
      callback: function($$v) {
        _vm.$set(_vm.model, "approve1Result", $$v)
      },
      expression: "model.approve1Result"
    }
  }, _vm._l((_vm.dic.result), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                " + _vm._s(item.text) + "\n                            ")])
  }))], 1), _vm._v(" "), (_vm.model.approve1Result === 0) ? _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "退回节点"
    }
  })], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 80
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                    审批意见\n                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "上报意见",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.hmProjectClob.approve1Desc),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "approve1Desc", $$v)
      },
      expression: "model.hmProjectClob.approve1Desc"
    }
  })], 1)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-33c03798", module.exports)
  }
}

/***/ }),

/***/ 1182:
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
  }), _vm._v(" "), _c('ButtonGroup', {
    attrs: {
      "slot": "extra"
    },
    slot: "extra"
  }, [_c('Button', {
    on: {
      "click": function($event) {
        _vm.$root.eventHub.$emit('back', {
          name: 'backlog',
          params: _vm.$router.currentRoute.params
        })
      }
    }
  }, [_vm._v("\n                返回\n            ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n                提交\n            ")])], 1)], 2), _vm._v(" "), _c('Form', {
    ref: "approval",
    attrs: {
      "model": _vm.model,
      "rules": _vm.rules,
      "label-width": 120
    }
  }, [_c('keep-alive', [_c(_vm.currentTabComponent, {
    tag: "component",
    attrs: {
      "model": _vm.model,
      "dic": _vm.dic
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-e799ed20", module.exports)
  }
}

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(985),
  /* template */
  __webpack_require__(1182),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/approval.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] approval.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e799ed20", Component.options)
  } else {
    hotAPI.reload("data-v-e799ed20", Component.options)
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

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this = this;

        return {
            dicts: { CLIENTS: [] },
            pawnData: [],
            pawnColumns: [{ title: '编号', key: 'id' }, { title: '证件', key: 'certificateTypeText' }, { title: '证件号', key: 'certificateCode' }, { title: '类型', key: 'houseTypeText' }, { title: '房产现状', key: 'propertyStaticText' }, { title: '地址', key: 'address' }, { title: '终评值', key: 'evalResult' }, { title: '抵押率', key: 'pawnRate' }],
            commonColumns: [{
                title: '关系', width: 200, render: function render(h, params) {
                    _this.model.stakeholderList[_this.getIndex(params.row.guid)] = params.row;
                    return h('Select', {
                        props: {
                            clearable: !_this.model.disabled,
                            placeholder: '选择关系',
                            value: params.row.relationship,
                            disabled: _this.model.disabled
                        },
                        on: {
                            'on-change': function onChange(value) {
                                params.row.relationship = value;
                            }
                        }
                    }, _this.dicts.RELATIONSHIP.map(function (item) {
                        return h('Option', { props: { value: item.id, label: item.text } });
                    }));
                }
            }, {
                title: '姓名', width: 220, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: !_this.model.disabled,
                            placeholder: '姓名',
                            value: params.row.name,
                            disabled: _this.model.disabled
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.name = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '证件类型', width: 200, render: function render(h, params) {
                    return h('Select', {
                        props: {
                            clearable: !_this.model.disabled,
                            placeholder: '选择证件类型',
                            value: params.row.certificatesType,
                            disabled: _this.model.disabled
                        },
                        on: {
                            'on-change': function onChange(value) {
                                params.row.certificatesType = value;
                            }
                        }
                    }, _this.dicts.CERTIFICATESTYPE.map(function (item) {
                        return h('Option', { props: { value: item.id, label: item.text } });
                    }));
                }
            }, {
                title: '证件号', width: 320, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: !_this.model.disabled,
                            placeholder: '证件号',
                            value: params.row.certificatesNumber,
                            disabled: _this.model.disabled
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.certificatesNumber = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '备注', width: 320, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 500,
                            clearable: !_this.model.disabled,
                            placeholder: '其他说明',
                            value: params.row.otherDesc,
                            disabled: _this.model.disabled
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.otherDesc = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '操作', width: 60, align: 'center', fixed: 'right', render: function render(h, params) {
                    return h('a', {
                        style: {
                            display: _this.model.disabled ? 'none' : 'block'
                        }
                    }, [h('Tooltip', {
                        props: {
                            content: '删除',
                            placement: 'top'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-close',
                            size: 20,
                            color: '#ed4014'
                        },
                        on: {
                            click: function click() {
                                _this.del(params.row);
                            }
                        }
                    })])]);
                }
            }],
            conditionsColumns: [{
                title: '序号', render: function render(h, params) {
                    _this.model.hmProjPlanrequire[params.index] = params.row;
                    return h('label', params.index + 1);
                }
            }, {
                title: '落实条件说明', width: 900, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%'
                        },
                        props: {
                            value: params.row.requirement,
                            type: 'text',
                            placeholder: '落实条件说明',
                            clearable: !_this.model.disabled,
                            maxlength: 500,
                            disabled: _this.model.disabled
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.requirement = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '操作', width: 70, render: function render(h, params) {
                    return h('a', {
                        style: {
                            display: _this.model.disabled ? 'none' : 'block'
                        }
                    }, [h('Tooltip', {
                        props: {
                            placement: 'top',
                            content: '删除'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-close',
                            color: '#ed4014',
                            size: 20
                        },
                        on: {
                            click: function click() {
                                _this.model.hmProjPlanrequire.splice(params.index, 1);
                            }
                        }
                    })])]);
                }
            }]
        };
    },

    props: {
        model: Object
    },
    methods: {
        loadModel: function loadModel() {
            var _this2 = this;

            this.$axios.options.url = 'houseMortgage/hmProjPlan/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                if (response.data[0]) {
                    response.data[0].loanAmount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(response.data[0].loanAmount);
                    response.data[0].loanPeriod = response.data[0].loanPeriod ? response.data[0].loanPeriod + '' : null;
                }
                _this2.model.hmProjPlan = response.data[0] || {};
                _this2.dicts.REPAYMETHOD = response.dicts.REPAYMETHOD;
                _this2.dicts.LOANREQUIREMENT = response.dicts.LOANREQUIREMENT;
                _this2.loadPlanrequire(_this2.model.hmProjPlan.id);
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        },
        loadProduct: function loadProduct() {
            var _this3 = this;

            this.$axios.options.url = 'houseMortgage/hmProduct/read/list';
            this.$axios.request({ data: { pageSize: 1000 } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.dicts.PRODUCTS = response.data.list.map(function (item) {
                    return { id: item.id, text: item.productName };
                });
            }).catch(function (error) {
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },
        loadClient: function loadClient() {
            var _this4 = this;

            this.$axios.options.url = 'houseMortgage/hmClient/read/list';
            this.$axios.request({ data: { pageSize: 1000 } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this4.$Message.error(response.msg || _this4.$config.ERROR);
                    return;
                }
                _this4.dicts.CLIENTS = response.data.list.map(function (item) {
                    return { id: item.id, text: item.clientName };
                });
            }).catch(function (error) {
                _this4.$Message.error(_this4.$config.ERROR);
            });
        },
        loadStakeholder: function loadStakeholder() {
            var _this5 = this;

            this.$axios.options.url = 'houseMortgage/hmProjStakeholder/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this5.$Message.error(response.msg || _this5.$config.ERROR);
                    return;
                }
                _this5.model.stakeholderList = response.data;
                _this5.dicts.RELATIONSHIP = response.dicts.RELATIONSHIP;
                _this5.dicts.CERTIFICATESTYPE = response.dicts.CERTIFICATESTYPE;
                _this5.dicts.STAKEHOLDERS = response.data.filter(function (item) {
                    return item.busiType === '2';
                }).map(function (item) {
                    return { id: item.id, text: item.name };
                });
            }).catch(function (error) {
                _this5.$Message.error(_this5.$config.ERROR);
            });
        },
        loadPawn: function loadPawn() {
            var _this6 = this;

            this.$axios.options.url = 'houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this6.$Message.error(response.msg || _this6.$config.ERROR);
                    return;
                }
                response.data.forEach(function (item) {
                    item.address = item.province + item.city + item.area + item.detailedAddress;
                    item.evalResult = item.backupFlag === '0' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(_this6.model.evalResult) + '元' : '-';
                    item.pawnRate = item.backupFlag === '0' ? _this6.model.hmProjPlan.pawnRate + '%' : '-';
                });
                _this6.pawnData = response.data;
            }).catch(function (error) {
                _this6.$Message.error(_this6.$config.ERROR);
            });
        },
        loadPlanrequire: function loadPlanrequire(id) {
            var _this7 = this;

            this.$axios.options.url = 'houseMortgage/hmProjPlanrequire/read/queryByPlanId';
            this.$axios.request({ data: { planId: id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this7.$Message.error(response.msg || _this7.$config.ERROR);
                    return;
                }
                _this7.model.hmProjPlanrequire = response.data;
            }).catch(function (error) {
                _this7.$Message.error(_this7.$config.ERROR);
            });
        },
        getIndex: function getIndex(guid) {
            return this.model.stakeholderList.findIndex(function (item) {
                return item.guid === guid;
            });
        },
        add: function add(flag, natural) {
            this.model.stakeholderList.push({
                busiType: flag,
                naturalFlag: natural ? natural : null,
                guid: new Date().getTime()
            });
        },
        del: function del(item) {
            this.model.stakeholderList.splice(this.getIndex(item.guid), 1);
        },
        plus: function plus() {
            this.model.hmProjPlanrequire.push({ planId: this.model.hmProjPlan.id });
        }
    },
    created: function created() {
        this.model.hmProjPlan = {};
        this.model.stakeholderList = [];
        this.model.hmProjPlanrequire = [];
        this.loadClient();
        this.loadStakeholder();
        this.loadProduct();
        this.loadModel();
        this.loadPawn();
    }
});

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(966),
  /* template */
  __webpack_require__(974),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/conceptualDesign.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] conceptualDesign.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-152b956a", Component.options)
  } else {
    hotAPI.reload("data-v-152b956a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "plan"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "plan",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                基本信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
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
  }, [_vm._v("\n                                申请人\n                            ")]), _vm._v("\n                            " + _vm._s(_vm.model.applyUserName) + "\n                        ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                申请时间\n                            ")]), _vm._v("\n                            " + _vm._s(_vm.model.applyDate) + "\n                        ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                申请部门\n                            ")]), _vm._v("\n                            " + _vm._s(_vm.model.applyDeptName) + "\n                        ")])], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "hmProjPlan.mainLoanClient"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                借款主体\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "disabled": _vm.model.disabled,
      "placeholder": "选择借款主体 | 必填",
      "filterable": "",
      "clearable": !_vm.model.disabled
    },
    model: {
      value: (_vm.model.hmProjPlan.mainLoanClient),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjPlan, "mainLoanClient", $$v)
      },
      expression: "model.hmProjPlan.mainLoanClient"
    }
  }, _vm._l((_vm.dicts.CLIENTS), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "hmProjPlan.shareLoanHolder"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                共同借款人\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "disabled": _vm.model.disabled,
      "placeholder": "选择共同借款人 | 必填",
      "filterable": "",
      "clearable": !_vm.model.disabled
    },
    model: {
      value: (_vm.model.hmProjPlan.shareLoanHolder),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjPlan, "shareLoanHolder", $$v)
      },
      expression: "model.hmProjPlan.shareLoanHolder"
    }
  }, _vm._l((_vm.dicts.STAKEHOLDERS), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "hmProjPlan.loanAmount"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                批复金额\n                            ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "disabled": _vm.model.disabled,
      "placeholder": "批复金额 | 必填",
      "maxlength": 20,
      "clearable": !_vm.model.disabled
    },
    model: {
      value: (_vm.model.hmProjPlan.loanAmount),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjPlan, "loanAmount", $$v)
      },
      expression: "model.hmProjPlan.loanAmount"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("元")])])], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "hmProjPlan.loanPeriod"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                借款期限\n                            ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "disabled": _vm.model.disabled,
      "placeholder": "借款期限 | 必填",
      "maxlength": 20,
      "clearable": !_vm.model.disabled
    },
    model: {
      value: (_vm.model.hmProjPlan.loanPeriod),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjPlan, "loanPeriod", $$v)
      },
      expression: "model.hmProjPlan.loanPeriod"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("月")])])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "hmProjPlan.loanRequirement"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                放款条件\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择放款条件 | 必填",
      "disabled": _vm.model.disabled,
      "clearable": !_vm.model.disabled
    },
    model: {
      value: (_vm.model.hmProjPlan.loanRequirement),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjPlan, "loanRequirement", $$v)
      },
      expression: "model.hmProjPlan.loanRequirement"
    }
  }, _vm._l((_vm.dicts.LOANREQUIREMENT), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "hmProjPlan.productId"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                产品\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "disabled": _vm.model.disabled,
      "placeholder": "选择产品 | 必填",
      "filterable": "",
      "clearable": !_vm.model.disabled
    },
    model: {
      value: (_vm.model.hmProjPlan.productId),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjPlan, "productId", $$v)
      },
      expression: "model.hmProjPlan.productId"
    }
  }, _vm._l((_vm.dicts.PRODUCTS), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "hmProjPlan.repaymentMethod"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                还款方式\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "disabled": _vm.model.disabled,
      "placeholder": "选择还款方式 | 必填",
      "clearable": !_vm.model.disabled
    },
    model: {
      value: (_vm.model.hmProjPlan.repaymentMethod),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjPlan, "repaymentMethod", $$v)
      },
      expression: "model.hmProjPlan.repaymentMethod"
    }
  }, _vm._l((_vm.dicts.REPAYMETHOD), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                其他还款方式说明\n                            ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "其他还款方式说明",
      "maxlength": 500,
      "disabled": _vm.model.disabled,
      "clearable": !_vm.model.disabled
    },
    model: {
      value: (_vm.model.hmProjPlan.repaymentRemark),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjPlan, "repaymentRemark", $$v)
      },
      expression: " model.hmProjPlan.repaymentRemark"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                上报利率\n                            ")]), _vm._v("\n                            " + _vm._s(_vm.model.hmProjPlan.reportRate + '%') + "\n                        ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "hmProjPlan.allowRate"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                批复利率\n                            ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "disabled": _vm.model.disabled,
      "placeholder": "批复利率 | 必填",
      "maxlength": 20,
      "clearable": !_vm.model.disabled
    },
    model: {
      value: (_vm.model.hmProjPlan.allowRate),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjPlan, "allowRate", $$v)
      },
      expression: "model.hmProjPlan.allowRate"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("%")])])], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                上报费率\n                            ")]), _vm._v("\n                            " + _vm._s(_vm.model.hmProjPlan.reportFee + '%') + "\n                        ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "hmProjPlan.allowFee"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                批复费率\n                            ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "disabled": _vm.model.disabled,
      "placeholder": "批复费率 | 必填",
      "maxlength": 20,
      "clearable": !_vm.model.disabled
    },
    model: {
      value: (_vm.model.hmProjPlan.allowFee),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjPlan, "allowFee", $$v)
      },
      expression: "model.hmProjPlan.allowFee"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("%")])])], 1)], 1)], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "borrower"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "borrower",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                风控措施\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "grey-light-color",
    attrs: {
      "span": "24"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list",
      "size": "16"
    }
  }), _vm._v("\n                        抵押物列表\n                    ")], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt10",
    attrs: {
      "disabled-hover": "",
      "data": _vm.pawnData,
      "columns": _vm.pawnColumns
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "grey-light-color",
    attrs: {
      "span": "20"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list",
      "size": "16"
    }
  }), _vm._v("\n                        担保人(自然人)列表\n                    ")], 1), _vm._v(" "), (!_vm.model.disabled) ? _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "size": "small",
      "icon": "md-add",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.add('1', '1')
      }
    }
  }, [_vm._v("\n                            添加\n                        ")])], 1) : _vm._e()], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "columns": _vm.commonColumns,
      "data": _vm.model.stakeholderList.filter(function (item) {
        return item.busiType === '1' && item.naturalFlag === '1';
      })
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "grey-light-color",
    attrs: {
      "span": "20"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list",
      "size": "16"
    }
  }), _vm._v("\n                        担保人(法人)列表\n                    ")], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [(!_vm.model.disabled) ? _c('Button', {
    attrs: {
      "size": "small",
      "icon": "md-add",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.add('1', '0')
      }
    }
  }, [_vm._v("\n                            添加\n                        ")]) : _vm._e()], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "columns": _vm.commonColumns,
      "data": _vm.model.stakeholderList.filter(function (item) {
        return item.busiType === '1' && item.naturalFlag === '0';
      })
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "grey-light-color",
    attrs: {
      "span": "20"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list",
      "size": "16"
    }
  }), _vm._v("\n                        放款前落实条件\n                    ")], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [(!_vm.model.disabled) ? _c('Button', {
    attrs: {
      "type": "primary",
      "icon": "md-add",
      "size": "small"
    },
    on: {
      "click": _vm.plus
    }
  }, [_vm._v("\n                            添加\n                        ")]) : _vm._e()], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "data": _vm.model.hmProjPlanrequire,
      "columns": _vm.conditionsColumns
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 70
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                        其他说明\n                    ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "maxlength": 500,
      "disabled": _vm.model.disabled,
      "clearable": "",
      "placeholder": "其他说明"
    },
    model: {
      value: (_vm.model.hmProjPlan.otherDesc),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjPlan, "otherDesc", $$v)
      },
      expression: "model.hmProjPlan.otherDesc"
    }
  })], 1)], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-152b956a", module.exports)
  }
}

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_conceptualDesign__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_conceptualDesign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_conceptualDesign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_projectApproval__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_projectApproval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_tabs_projectApproval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_util__ = __webpack_require__(203);





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            dic: {
                result: [{ id: 1, text: '同意' }, { id: 2, text: '否决' }]
            },
            model: {
                client: {},
                historyData: [],
                loading: false,
                disabled: false
            },
            tabName: 'investigationReport',
            tabs: [{ id: 'investigationReport', text: '调查报告' }, { id: 'conceptualDesign', text: '方案设计' }, { id: 'projectApproval', text: '项目审批' }],
            rules: {
                'hmProjPlan.mainLoanClient': [{ required: true, message: '借款主体不能为空' }],
                'hmProjPlan.shareLoanHolder': [{ required: true, message: '共同借款人不能为空' }],
                'hmProjPlan.loanAmount': [{ required: true, message: '申请金额不能为空', trigger: 'blur' }, {
                    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }],
                'hmProjPlan.loanPeriod': [{ required: true, message: '借款期限不能为空', trigger: 'blur' }, {
                    pattern: /^(0|[1-9][0-9]*)$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }],
                'hmProjPlan.repaymentMethod': [{ required: true, message: '还款方式不能为空' }],

                'hmProjPlan.loanRequirement': [{ required: true, message: '放款条件不能为空' }],
                'hmProjPlan.productId': [{ required: true, message: '产品不能为空' }],
                'hmProjPlan.allowRate': [{ required: true, message: '批复利率不能为空', trigger: 'blur' }, {
                    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }],
                'hmProjPlan.allowFee': [{ required: true, message: '批复费率不能为空', trigger: 'blur' }, {
                    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }],
                'approve1Result': [{ required: true, message: '审核结论不能为空' }]
            }
        };
    },

    computed: {
        currentTabComponent: function currentTabComponent() {
            return this.tabName;
        }
    },
    components: {
        'investigationReport': __WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport___default.a,
        'conceptualDesign': __WEBPACK_IMPORTED_MODULE_1__views_tabs_conceptualDesign___default.a,
        'projectApproval': __WEBPACK_IMPORTED_MODULE_2__views_tabs_projectApproval___default.a
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
                    item.actualLoanAmount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__libs_util__["j" /* formatMoney */])(item.actualLoanAmount);
                    item.loanBalance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__libs_util__["j" /* formatMoney */])(item.loanBalance);
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
                response.data.initLoanAmountText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__libs_util__["j" /* formatMoney */])(response.data.initLoanAmount);
                response.data.firstEvalueText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__libs_util__["j" /* formatMoney */])(response.data.firstEvalue);
                response.data.evalResultText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__libs_util__["j" /* formatMoney */])(response.data.evalResult);
                response.data.historyData = [];
                response.data.hmProjPlanrequire = null;
                response.data.loading = response.data.disabled = false;
                _this3.model = response.data;
                _this3.loadClient(response.data.clientId);
                _this3.loadCooperate(response.data.clientId);
            }).catch(function (error) {
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },
        submit: function submit() {
            var _this4 = this;

            this.$refs.approval.validate(function (valid) {
                if (valid) {
                    if (!_this4.model.hmProjPlan || !_this4.model.operation) {
                        _this4.$Message.error('提交信息不完整，请完相关信息。');
                        return;
                    }
                    _this4.isSubmit = true;
                    _this4.model.approve1Result = _this4.dic.result.filter(function (item) {
                        return item.id === _this4.model.operation;
                    })[0].text;
                    _this4.$axios.options.url = 'houseMortgage/hmProject/shenpisubmit';
                    _this4.$axios.request({ data: JSON.stringify(_this4.model) }, 'json').then(function (response) {
                        _this4.isSubmit = false;
                        if (response.httpCode != 200) {
                            _this4.$Message.error(response.msg || _this4.$config.ERROR);
                            return;
                        }
                        _this4.$router.push({ name: 'backlog' });
                    }).catch(function (error) {
                        _this4.isSubmit = false;
                        _this4.$Message.error(_this4.$config.ERROR);
                    });
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL3Byb2plY3RBcHByb3ZhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9wcm9qZWN0QXBwcm92YWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL3Byb2plY3RBcHByb3ZhbC52dWU/MDE2NyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwcm92YWwudnVlPzdkYzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcHJvdmFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2V2YWx1YXRpb24uanM/NDAwNioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi5qcz8xMDE0KioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvZXZhbHVhdGlvbi52dWU/ODAzOCoqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24udnVlPzdlMGIqKiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9ldmFsdWF0aW9uLnZ1ZT9hNTE2KioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24udnVlP2M1YmMqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9yZXBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvcmVwb3J0LnZ1ZT8zNmQ0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL3JlcG9ydC52dWU/MjA1YiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2ludmVzdGlnYXRpb25SZXBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvaW52ZXN0aWdhdGlvblJlcG9ydC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvaW52ZXN0aWdhdGlvblJlcG9ydC52dWU/ZTJkZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2NvbmNlcHR1YWxEZXNpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvY29uY2VwdHVhbERlc2lnbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvY29uY2VwdHVhbERlc2lnbi52dWU/MmJkNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHByb3ZhbC5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsIm1vZGVsIiwiT2JqZWN0IiwiZGljIiwiZGF0YSIsImF1ZGl0Q29sdW1ucyIsInRpdGxlIiwia2V5IiwibG9jYWxEYXRlIiwidGltZVV0aWwiLCJnZXRDdXJyZW50RGF0ZSIsIkRhdGUiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwiJGxvY2FsU3RvcmFnZSIsImdldCIsImlzU3VibWl0IiwibG9hZGluZyIsImNyZWF0ZWQiLCJobVByb2plY3RDbG9iIiwiZXZhbHVhdGlvbkxpc3QiLCJzdGVwIiwiTnVtYmVyIiwibWV0aG9kcyIsImxvYWRNb2RlbCIsIiRheGlvcyIsIm9wdGlvbnMiLCJ1cmwiLCJyZXF1ZXN0IiwicHJvamVjdElkIiwiJHJvdXRlciIsImN1cnJlbnRSb3V0ZSIsInBhcmFtcyIsImlkIiwiZXZhbFBlcmlvZCIsInRoZW4iLCJyZXNwb25zZSIsImh0dHBDb2RlIiwiJE1lc3NhZ2UiLCJlcnJvciIsIm1zZyIsIiRjb25maWciLCJFUlJPUiIsImZvckVhY2giLCJpdGVtIiwiZXZhbFZhbCIsImZvcm1hdE1vbmV5IiwiY2F0Y2giLCJtb3J0Z2FnZSIsImNvbXBvbmVudHMiLCJldmFsdWF0aW9uIiwiYmFja3VwRmxhZyIsInNob3ciLCJoYXNDaGFuZ2UiLCJobVByb2pQbGFuIiwiZmluYWxMaXN0IiwiaGlzdG9yeUNvbHVtbnMiLCJyZXBvcnQiLCJsb2FkUGxhbiIsImxvYWRFdmFsdWF0aW9uIiwibG9hZENsb2IiLCJkaWN0cyIsIkNMSUVOVFMiLCJwYXduRGF0YSIsInBhd25Db2x1bW5zIiwiY29tbW9uQ29sdW1ucyIsIndpZHRoIiwicmVuZGVyIiwiaCIsInN0YWtlaG9sZGVyTGlzdCIsImdldEluZGV4Iiwicm93IiwiZ3VpZCIsImNsZWFyYWJsZSIsImRpc2FibGVkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInJlbGF0aW9uc2hpcCIsIm9uIiwiUkVMQVRJT05TSElQIiwibWFwIiwibGFiZWwiLCJ0ZXh0Iiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJtYXhsZW5ndGgiLCJuYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJjZXJ0aWZpY2F0ZXNUeXBlIiwiQ0VSVElGSUNBVEVTVFlQRSIsImNlcnRpZmljYXRlc051bWJlciIsIm90aGVyRGVzYyIsImFsaWduIiwiZml4ZWQiLCJkaXNwbGF5IiwiY29udGVudCIsInBsYWNlbWVudCIsInR5cGUiLCJzaXplIiwiY29sb3IiLCJjbGljayIsImRlbCIsImNvbmRpdGlvbnNDb2x1bW5zIiwiaG1Qcm9qUGxhbnJlcXVpcmUiLCJpbmRleCIsInJlcXVpcmVtZW50Iiwic3BsaWNlIiwibG9hbkFtb3VudCIsImxvYW5QZXJpb2QiLCJSRVBBWU1FVEhPRCIsIkxPQU5SRVFVSVJFTUVOVCIsImxvYWRQbGFucmVxdWlyZSIsImxvYWRQcm9kdWN0IiwicGFnZVNpemUiLCJQUk9EVUNUUyIsImxpc3QiLCJwcm9kdWN0TmFtZSIsImxvYWRDbGllbnQiLCJjbGllbnROYW1lIiwibG9hZFN0YWtlaG9sZGVyIiwiU1RBS0VIT0xERVJTIiwiZmlsdGVyIiwiYnVzaVR5cGUiLCJsb2FkUGF3biIsImFkZHJlc3MiLCJwcm92aW5jZSIsImNpdHkiLCJhcmVhIiwiZGV0YWlsZWRBZGRyZXNzIiwiZXZhbFJlc3VsdCIsInBhd25SYXRlIiwicGxhbklkIiwiZmluZEluZGV4IiwiYWRkIiwiZmxhZyIsIm5hdHVyYWwiLCJwdXNoIiwibmF0dXJhbEZsYWciLCJnZXRUaW1lIiwicGx1cyIsInJlc3VsdCIsImNsaWVudCIsImhpc3RvcnlEYXRhIiwidGFiTmFtZSIsInRhYnMiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsInRyaWdnZXIiLCJwYXR0ZXJuIiwiY29tcHV0ZWQiLCJjdXJyZW50VGFiQ29tcG9uZW50IiwicHJvamVjdEFwcHJvdmFsIiwibG9hZENvb3BlcmF0ZSIsImNsaWVudElkIiwiYWN0dWFsTG9hbkFtb3VudCIsImxvYW5CYWxhbmNlIiwiaW5pdExvYW5BbW91bnRUZXh0IiwiaW5pdExvYW5BbW91bnQiLCJmaXJzdEV2YWx1ZVRleHQiLCJmaXJzdEV2YWx1ZSIsImV2YWxSZXN1bHRUZXh0Iiwic3VibWl0IiwiJHJlZnMiLCJhcHByb3ZhbCIsInZhbGlkYXRlIiwidmFsaWQiLCJvcGVyYXRpb24iLCJhcHByb3ZlMVJlc3VsdCIsInN0cmluZ2lmeSIsIm1vdW50ZWQiLCIkcm9vdCIsImV2ZW50SHViIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsK0RBQWU7QUFDWEEsV0FBTztBQUNIQyxlQUFPQyxNQURKO0FBRUhDLGFBQUtEO0FBRkYsS0FESTtBQUtYRSxRQUxXLGtCQUtKO0FBQ0gsZUFBTztBQUNIQywwQkFBYyxDQUFDLEVBQUNDLE9BQU8sTUFBUixFQUFnQkMsS0FBSyxVQUFyQixFQUFELEVBQ1YsRUFBQ0QsT0FBTyxNQUFSLEVBQWdCQyxLQUFLLGFBQXJCLEVBRFUsQ0FEWDtBQUdIQyx1QkFBVyw0REFBQUMsQ0FBU0MsY0FBVCxDQUF3QixJQUFJQyxJQUFKLEVBQXhCLENBSFI7QUFJSEMsa0JBQU1DLEtBQUtDLEtBQUwsQ0FBVyxLQUFLQyxhQUFMLENBQW1CQyxHQUFuQixDQUF1QixNQUF2QixDQUFYLENBSkg7QUFLSEMsc0JBQVUsS0FMUDtBQU1IQyxxQkFBUztBQU5OLFNBQVA7QUFRSCxLQWRVO0FBZVhDLFdBZlcscUJBZUQ7QUFDTixhQUFLbEIsS0FBTCxDQUFXbUIsYUFBWCxHQUEyQixFQUEzQjtBQUNIO0FBakJVLENBQWYsRTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXNH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Q0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMzQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ25GQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7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QUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdB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Q0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FB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QW9CLE9BQUtFLE9BQUwsQ0FBYUMsS0FBakM7QUFDSCxxQkFWRDtBQVdIO0FBQ0osYUF2QkQ7QUF3Qkg7QUE5RUksS0FqRUU7QUFpSlh4QixXQWpKVyxxQkFpSkQ7QUFDTixhQUFLTSxTQUFMO0FBQ0gsS0FuSlU7QUFvSlhtSixXQXBKVyxxQkFvSkQ7QUFDTixhQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLEtBQXBCLENBQTBCLFlBQTFCO0FBQ0g7QUF0SlUsQ0FBZixFIiwiZmlsZSI6IjguY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RpbWVVdGlsfSBmcm9tIFwiLi4vLi4vbGlicy91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBtb2RlbDogT2JqZWN0LFxuICAgICAgICBkaWM6IE9iamVjdFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF1ZGl0Q29sdW1uczogW3t0aXRsZTogJ+WuoeaguOmhueebricsIGtleTogJ2l0ZW1OYW1lJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5o+Q56S65bu66K6uJywga2V5OiAnaXRlbUNvbnRlbnQnfV0sXG4gICAgICAgICAgICBsb2NhbERhdGU6IHRpbWVVdGlsLmdldEN1cnJlbnREYXRlKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgdXNlcjogSlNPTi5wYXJzZSh0aGlzLiRsb2NhbFN0b3JhZ2UuZ2V0KCd1c2VyJykpLFxuICAgICAgICAgICAgaXNTdWJtaXQ6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5obVByb2plY3RDbG9iID0ge307XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvcHJvamVjdEFwcHJvdmFsLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9wcm9qZWN0QXBwcm92YWwuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTMzYzAzNzk4XFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL3Byb2plY3RBcHByb3ZhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9wcm9qZWN0QXBwcm92YWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcHJvamVjdEFwcHJvdmFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zM2MwMzc5OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTMzYzAzNzk4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWJzL3Byb2plY3RBcHByb3ZhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDEwOTNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInByb2plY3RcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwicHJvamVjdFwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIOWuoeaJueaEj+ingVxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbC13aWR0aFwiOiA4MFxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWuoeaJueS6ulxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udXNlci51c2VyTmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbC13aWR0aFwiOiA4MFxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWuoeaJueaXpeacn1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubG9jYWxEYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbC13aWR0aFwiOiA4MCxcbiAgICAgIFwicHJvcFwiOiBcImFwcHJvdmUxUmVzdWx0XCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5a6h5om557uT5p6cXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW19jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6YCJ5oup5a6h5om557uT5p6cIHwg5b+F5aGrXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5hcHByb3ZlMVJlc3VsdCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbCwgXCJhcHByb3ZlMVJlc3VsdFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5hcHByb3ZlMVJlc3VsdFwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5kaWMucmVzdWx0KSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS50ZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLm1vZGVsLmFwcHJvdmUxUmVzdWx0ID09PSAwKSA/IF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumAgOWbnuiKgueCuVwiXG4gICAgfVxuICB9KV0sIDEpIDogX3ZtLl9lKCldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWwtd2lkdGhcIjogODBcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5a6h5om55oSP6KeBXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRhcmVhXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5LiK5oql5oSP6KeBXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiA1MDBcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5obVByb2plY3RDbG9iLmFwcHJvdmUxRGVzYyksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbC5obVByb2plY3RDbG9iLCBcImFwcHJvdmUxRGVzY1wiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5obVByb2plY3RDbG9iLmFwcHJvdmUxRGVzY1wiXG4gICAgfVxuICB9KV0sIDEpXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTMzYzAzNzk4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzNjMDM3OThcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL3Byb2plY3RBcHByb3ZhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ1RhYnMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYW5pbWF0ZWRcIjogZmFsc2VcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS50YWJOYW1lKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLnRhYk5hbWUgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInRhYk5hbWVcIlxuICAgIH1cbiAgfSwgW192bS5fbCgoX3ZtLnRhYnMpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdUYWJQYW5lJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJuYW1lXCI6IGl0ZW0uaWQsXG4gICAgICAgIFwibGFiZWxcIjogaXRlbS50ZXh0XG4gICAgICB9XG4gICAgfSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdCdXR0b25Hcm91cCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiZXh0cmFcIlxuICAgIH0sXG4gICAgc2xvdDogXCJleHRyYVwiXG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JhY2snLCB7XG4gICAgICAgICAgbmFtZTogJ2JhY2tsb2cnLFxuICAgICAgICAgIHBhcmFtczogX3ZtLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDov5Tlm55cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc3VibWl0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOaPkOS6pFxcbiAgICAgICAgICAgIFwiKV0pXSwgMSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0Zvcm0nLCB7XG4gICAgcmVmOiBcImFwcHJvdmFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibW9kZWxcIjogX3ZtLm1vZGVsLFxuICAgICAgXCJydWxlc1wiOiBfdm0ucnVsZXMsXG4gICAgICBcImxhYmVsLXdpZHRoXCI6IDEyMFxuICAgIH1cbiAgfSwgW19jKCdrZWVwLWFsaXZlJywgW19jKF92bS5jdXJyZW50VGFiQ29tcG9uZW50LCB7XG4gICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbCxcbiAgICAgIFwiZGljXCI6IF92bS5kaWNcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWU3OTllZDIwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZTc5OWVkMjBcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy9hcHByb3ZhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExODJcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uL2NvbXBvbmVudHMvYXBwcm92YWwuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWU3OTllZDIwXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2FwcHJvdmFsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy9hcHByb3ZhbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhcHByb3ZhbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTc5OWVkMjBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lNzk5ZWQyMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvYXBwcm92YWwudnVlXG4vLyBtb2R1bGUgaWQgPSA4Njlcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiaW1wb3J0IHtmb3JtYXRNb25leX0gZnJvbSBcIi4uLy4uL2xpYnMvdXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV2YWx1YXRpb25MaXN0OiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBtb2RlbDogT2JqZWN0LFxuICAgICAgICBzdGVwOiBOdW1iZXJcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZE1vZGVsKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2pFdmFsdWF0aW9uL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIGV2YWxQZXJpb2Q6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5ldmFsVmFsID0gZm9ybWF0TW9uZXkoaXRlbS5ldmFsVmFsKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZhbHVhdGlvbkxpc3QgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRNb2RlbCgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YWJzL2V2YWx1YXRpb24uanMiLCJpbXBvcnQgZXZhbHVhdGlvbiBmcm9tICcuLi8uLi92aWV3cy90YWJzL2V2YWx1YXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9ydGdhZ2U6IHt9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG1vZGVsOiBPYmplY3QsXG4gICAgICAgIHN0ZXA6IE51bWJlclxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAnZXZhbHVhdGlvbic6IGV2YWx1YXRpb25cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZE1vZGVsKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVBhd24vcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgYmFja3VwRmxhZzogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9ydGdhZ2UgPSByZXNwb25zZS5kYXRhWzBdIHx8IHt9O1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkTW9kZWwoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9tb3J0Z2FnZUluZm9ybWF0aW9uLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9ldmFsdWF0aW9uLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01MDVkODJkMFxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9ldmFsdWF0aW9uLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy90YWJzL2V2YWx1YXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZXZhbHVhdGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTA1ZDgyZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01MDVkODJkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9ldmFsdWF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgOCA5IDEwIDEyIDEzIDE0IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9tb3J0Z2FnZUluZm9ybWF0aW9uLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1iYmRmODNlOFxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9tb3J0Z2FnZUluZm9ybWF0aW9uLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbW9ydGdhZ2VJbmZvcm1hdGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYmJkZjgzZThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iYmRmODNlOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9tb3J0Z2FnZUluZm9ybWF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgOCA5IDEwIDEyIDEzIDE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX3ZtLl9sKChfdm0uZXZhbHVhdGlvbkxpc3QuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmFsVHlwZSA9PT0gJzInXG4gIH0pKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiAoX3ZtLnN0ZXAgPiAwKSA/IF9jKCdSb3cnLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBzdGF0aWNDbGFzczogXCJtYjE2XCJcbiAgICB9LCBbX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIOacuuaehOivhOS8sFxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI1XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5hZ2VuY3lUZXh0KSArIFwiXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmV2YWxWYWwgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIChpdGVtLnByZUV2YWxGaWxlKSA/IF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI4XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogaXRlbS5wcmVFdmFsRmlsZVBhdGgsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOmihOS8sOWNlVxcbiAgICAgICAgICAgIFwiKV0pXSkgOiBfdm0uX2UoKV0sIDEpIDogX3ZtLl9lKClcbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmV2YWx1YXRpb25MaXN0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZhbFR5cGUgPT09ICcwJ1xuICB9KSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gKF92bS5zdGVwID4gMSkgPyBfYygnUm93Jywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgc3RhdGljQ2xhc3M6IFwibWIxNlwiXG4gICAgfSwgW19jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDkuK3ku4vor4TkvLBcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uYWdlbmN5VGV4dCkgKyBcIlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI4XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5ldmFsVmFsICsgJ+WFgycpICsgXCJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoaXRlbS51cmwpID8gX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLnVybCxcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5p+l55yLXFxuICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpXSwgMSkgOiBfdm0uX2UoKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zdGVwID4gMCkgPyBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIOWIneivhOS7t+WAvFxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmZpcnN0RXZhbHVlVGV4dCArICflhYMnKSArIFwiXFxuICAgICAgICBcIildKV0sIDEpIDogX3ZtLl9lKCldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01MDVkODJkMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTUwNWQ4MmQwXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvdGFicy9ldmFsdWF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgOCA5IDEwIDEyIDEzIDE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIm1vcnRnYWdlc1wiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJtb3J0Z2FnZXNcIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDmirXmirzniankv6Hmga9cXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg56uj5bel5pel5pyfXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9ydGdhZ2UuY29tcGxldGlvbkRhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5bu65oiQ5pel5pyfXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9ydGdhZ2UuZGF0ZUNvbXBsZXRpb24pICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5rWL57uY5pel5pyfXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9ydGdhZ2UubWFwcGluZ0RhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlnJ/lnLDlj5blvpfml6XmnJ9cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb3J0Z2FnZS5sYW5kR2V0RGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlu7rnrZHpnaLnp69cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb3J0Z2FnZS5idWlkaW5nQWNyZWFnZSArICflubPnsbMnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOaIv+Wxi+exu+Wei1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vcnRnYWdlLmhvdXNlVHlwZVRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlnLDlnYBcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9ydGdhZ2UucHJvdmluY2UgKyBfdm0ubW9ydGdhZ2UuY2l0eSArIF92bS5tb3J0Z2FnZS5hcmVhICsgX3ZtLm1vcnRnYWdlLmRldGFpbGVkQWRkcmVzcykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2V2YWx1YXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibW9kZWxcIjogX3ZtLm1vZGVsLFxuICAgICAgXCJzdGVwXCI6IF92bS5zdGVwXG4gICAgfVxuICB9KV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1iYmRmODNlOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWJiZGY4M2U4XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvdGFicy9tb3J0Z2FnZUluZm9ybWF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgOCA5IDEwIDEyIDEzIDE0IiwiaW1wb3J0IG1vcnRnYWdlIGZyb20gJy4uLy4uL3ZpZXdzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOntcbiAgICAgICAgbW9kZWw6T2JqZWN0XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICdtb3J0Z2FnZSc6IG1vcnRnYWdlXG4gICAgfSxcbiAgICBtZXRob2RzOntcbiAgICAgICAgc2hvdygpe1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9yZXBvcnQuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vY29tcG9uZW50cy90YWJzL3JlcG9ydC5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2U2ZTFhNzBcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vcmVwb3J0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy90YWJzL3JlcG9ydC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSByZXBvcnQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNlNmUxYTcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2U2ZTFhNzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvcmVwb3J0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gOCA5IDEwIDEyIDEzIDE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiYmFzaWNcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiYmFzaWNcIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg6aG555uu5Z+65pys5L+h5oGvXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6aG555uu57yW5Y+3XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5pZCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIMKgwqDCoMKgXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygnYScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc2hvd1xuICAgIH1cbiAgfSwgW192bS5fdihcIumhueebruS/oeaBr+WPiuWuoeaJueWOhuWPslwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOeUs+ivt+S6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwbHlVc2VyTmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg55Sz6K+35pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5hcHBseURhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmjqjojZDmuKDpgZNcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNoYW5uYWxOYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5a6i5oi35aeT5ZCNXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jbGllbnQuY2xpZW50TmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6K+B5Lu257G75Z6LXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jbGllbnQuY2VydGlmaWNhdGVzVHlwZVRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDor4Hku7blj7dcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNsaWVudC5jZXJ0aWZpY2F0ZXNOdW1iZXIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlgJ/mrL7ph5Hpop1cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmluaXRMb2FuQW1vdW50VGV4dCArICflhYMnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlgJ/mrL7ml6XmnJ9cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmluaXRMb2FuRGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWAn+asvuacn+mZkFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaW5pdExvYW5QZXJpb2QgKyAn5Liq5pyIJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWAn+asvueUqOmAlFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwubG9hblVzYWdlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmnJ/mnJvov5jmrL7mlrnlvI9cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmluaXRSZXBheU1ldGhvZFRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbW9ydGdhZ2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibW9kZWxcIjogX3ZtLm1vZGVsLFxuICAgICAgXCJzdGVwXCI6IDBcbiAgICB9XG4gIH0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtM2U2ZTFhNzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zZTZlMWE3MFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvcmVwb3J0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gOCA5IDEwIDEyIDEzIDE0IiwiaW1wb3J0IHtmb3JtYXRNb25leX0gZnJvbSBcIi4uLy4uL2xpYnMvdXRpbFwiO1xuaW1wb3J0IHJlcG9ydCBmcm9tICcuLi8uLi92aWV3cy90YWJzL3JlcG9ydCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYXNDaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgaG1Qcm9qUGxhbjoge30sXG4gICAgICAgICAgICBldmFsdWF0aW9uTGlzdDogW10sXG4gICAgICAgICAgICBmaW5hbExpc3Q6IFtdLFxuICAgICAgICAgICAgaG1Qcm9qZWN0Q2xvYjoge30sXG4gICAgICAgICAgICBoaXN0b3J5Q29sdW1uczogW3t0aXRsZTogJ+mhueebrue8luWPtycsIGtleTogJ3Byb2plY3RJZCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+WAn+asvuS6uicsIGtleTogJ2NsaWVudE5hbWUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmirXmirznianor4Hku7blj7cnLCBrZXk6ICdwYXduQ2VydGlmaWNhdGVDb2RlJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5om55aSN6YeR6aKdKOWFgyknLCBrZXk6ICdhY3R1YWxMb2FuQW1vdW50J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5Yaz6K6u5Yiw5pyf5pelJywga2V5OiAnZHVlRGF0ZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+aUvuasvuaXpeacnycsIGtleTogJ2FjdHVhbExvYW5EYXRlJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn6LS35qy+5pyf6ZmQKOaciCknLCBrZXk6ICdsb2FuUGVyaW9kJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn6LS35qy+5L2Z6aKdKOWFgyknLCBrZXk6ICdsb2FuQmFsYW5jZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+eKtuaAgScsIGtleTogJ3Byb2plY3RTdGF0dXNUZXh0J31dXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG1vZGVsOiBPYmplY3RcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ3JlcG9ydCc6IHJlcG9ydFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2FkUGxhbigpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qUGxhbi9yZWFkL3F1ZXJ5QnlQcm9qZWN0SWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge3Byb2plY3RJZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5obVByb2pQbGFuID0gcmVzcG9uc2UuZGF0YVswXSB8fCBudWxsO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRFdmFsdWF0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2pFdmFsdWF0aW9uL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7cHJvamVjdElkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5ldmFsVmFsID0gZm9ybWF0TW9uZXkoaXRlbS5ldmFsVmFsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2YWx1YXRpb25MaXN0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkQ2xvYigpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qZWN0Q2xvYi9yZWFkL2RldGFpbCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaG1Qcm9qZWN0Q2xvYiA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkUGxhbigpO1xuICAgICAgICB0aGlzLmxvYWRFdmFsdWF0aW9uKCk7XG4gICAgICAgIHRoaXMubG9hZENsb2IoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9pbnZlc3RpZ2F0aW9uUmVwb3J0LmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9pbnZlc3RpZ2F0aW9uUmVwb3J0LmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kYjU0NzIxY1xcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9pbnZlc3RpZ2F0aW9uUmVwb3J0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy90YWJzL2ludmVzdGlnYXRpb25SZXBvcnQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW52ZXN0aWdhdGlvblJlcG9ydC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZGI1NDcyMWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1kYjU0NzIxY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9pbnZlc3RpZ2F0aW9uUmVwb3J0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gOCAxMCAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdyZXBvcnQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibW9kZWxcIjogX3ZtLm1vZGVsXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5obVByb2pQbGFuICYmICFfdm0uaGFzQ2hhbmdlKSA/IF9jKCdDb2xsYXBzZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwbGFuXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcInBsYW5cIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5pa55qGI6K6+6K6hXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6L+Y5qy+5pa55byPXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIxXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qUGxhbi5yZXBheW1lbnRNZXRob2RUZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlhbbku5bov5jmrL7mlrnlvI/or7TmmI5cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjFcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2pQbGFuLnJlcGF5bWVudFJlbWFyaykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5LiK5oql5Yip546HXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2pQbGFuLnJlcG9ydFJhdGUgKyAnJScpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmibnlpI3liKnnjodcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvalBsYW4uYWxsb3dSYXRlICsgJyUnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkuIrmiqXotLnnjodcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvalBsYW4ucmVwb3J0RmVlICsgJyUnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5om55aSN6LS5546HXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2pQbGFuLmFsbG93RmVlICsgJyUnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldKV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uaGFzQ2hhbmdlKSA/IF9jKCdDb2xsYXBzZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJjaGFuZ2VcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiY2hhbmdlXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOWGs+iuruWPmOabtFxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWAn+asvuS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlhbHlkIzlgJ/mrL7kurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Yid5aeL5YCf5qy+6YeR6aKdKOWFgylcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlgJ/mrL7mnJ/pmZAo5pyIKVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDov5jmrL7mlrnlvI9cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YW25LuW6L+Y5qy+5pa55byP6K+05piOXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5oGv6LS5KOaciClcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6K+05piOXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEzXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0pXSwgMSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImV2YWx1YXRpb25cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZXZhbHVhdGlvblwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDku7flgLzor4TkvLBcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ0NhcmQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzLWhvdmVyXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvciBmb250MTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwidGl0bGVcIlxuICAgIH0sXG4gICAgc2xvdDogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDliJ3lp4vku7flgLxcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvbnQxMlwiXG4gIH0sIFtfdm0uX2woKF92bS5ldmFsdWF0aW9uTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2YWxQZXJpb2QgPT09ICcwJyAmJiB2YWx1ZS5ldmFsVHlwZSA9PT0gJzInXG4gIH0pKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnUm93Jywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgc3RhdGljQ2xhc3M6IFwibWIxNlwiXG4gICAgfSwgW19jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uYWdlbmN5VGV4dCArICfkvLDku7cnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5ldmFsVmFsICsgJ+WFgycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIChpdGVtLnByZUV2YWxGaWxlKSA/IF9jKCdDb2wnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIzXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogaXRlbS5wcmVFdmFsRmlsZSxcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDpooTkvLDljZVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKGl0ZW0ucmVwb3J0RmlsZSkgPyBfYygnQ29sJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0ucmVwb3J0RmlsZSxcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDor4TkvLDmiqXlkYpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSkgOiBfdm0uX2UoKV0sIDEpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5ldmFsdWF0aW9uTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2YWxQZXJpb2QgPT09ICcwJyAmJiB2YWx1ZS5ldmFsVHlwZSA9PT0gJzAnXG4gIH0pKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnUm93Jywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgc3RhdGljQ2xhc3M6IFwibWIxNlwiXG4gICAgfSwgW19jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uYWdlbmN5VGV4dCArICfkvLDku7cnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5ldmFsVmFsVGV4dCArICflhYMnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoaXRlbS51cmwpID8gX2MoJ0NvbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogaXRlbS51cmwsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l55yLXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCldLCAxKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIneivhOS7t+WAvFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIwXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5pbml0TG9hbkFtb3VudFRleHQgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMildKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5ldmFsdWF0aW9uTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2YWxQZXJpb2QgPT09ICcxJ1xuICB9KS5sZW5ndGggPiAwKSA/IF9jKCdDYXJkJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXMtaG92ZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yIGZvbnQxMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJ0aXRsZVwiXG4gICAgfSxcbiAgICBzbG90OiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOe7iOivhOS7t+WAvFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9udDEyXCJcbiAgfSwgW192bS5fbCgoX3ZtLmV2YWx1YXRpb25MaXN0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZhbFBlcmlvZCA9PT0gJzEnICYmIHZhbHVlLmV2YWxUeXBlID09PSAnMCdcbiAgfSkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdSb3cnLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBzdGF0aWNDbGFzczogXCJtYjE2XCJcbiAgICB9LCBbX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5hZ2VuY3lUZXh0ICsgJ+S8sOS7tycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI4XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmV2YWxWYWwgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiMVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg55S16K+dXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiMTFcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGVsKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSlcbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmV2YWx1YXRpb25MaXN0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZhbFBlcmlvZCA9PT0gJzEnICYmIHZhbHVlLmV2YWxUeXBlID09PSAnMSdcbiAgfSkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdSb3cnLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBzdGF0aWNDbGFzczogXCJtYjE2XCJcbiAgICB9LCBbX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5hZ2VuY3lUZXh0ICsgJ+S8sOS7tycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI4XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmV2YWxWYWwgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgKGl0ZW0udXJsKSA/IF9jKCdDb2wnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0udXJsLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeeci1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpXSwgMSlcbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmV2YWx1YXRpb25MaXN0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZhbFBlcmlvZCA9PT0gJzEnICYmIHZhbHVlLmV2YWxUeXBlID09PSAnMidcbiAgfSkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdSb3cnLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBzdGF0aWNDbGFzczogXCJtYjE2XCJcbiAgICB9LCBbX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5hZ2VuY3lUZXh0ICsgJ+S8sOS7tycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI4XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmV2YWxWYWwgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgKGl0ZW0ucHJlRXZhbEZpbGUpID8gX2MoJ0NvbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLnByZUV2YWxGaWxlUGF0aCxcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDpooTkvLDljZVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKGl0ZW0ucmVwb3J0RmlsZSkgPyBfYygnQ29sJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0ucmVwb3J0RmlsZVBhdGgsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6K+E5Lyw5oql5ZGKXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCldLCAxKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOe7iOivhOS7t+WAvFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIwXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5ldmFsUmVzdWx0VGV4dCArICflhYMnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAyKV0pIDogX3ZtLl9lKCldLCAxKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJleGFtaW5hdGlvblwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJleGFtaW5hdGlvblwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDlrqHmn6XlrqHmibnmhI/op4FcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDliJ3or4TmhI/op4FcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IuZmlyc3RFdmFsRGVzYykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZmlyc3RFdmFsVXNlcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZmlyc3RFdmFsRGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5LiL5oi35bu66K6uXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLmludGVydmlld19hZHZpY2UpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5obVByb2plY3RDbG9iLmludGVybmFsQXVkaXRBZHZpY2UpID8gX2MoJ1JvdycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCJcbiAgfSwgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWGheWuoeaEj+ingVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5pbnRlcm5hbEF1ZGl0QWR2aWNlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0pXSwgMSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5oq15oq854mp5L+h5oGv5o+P6L+wXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIwXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5wYXduRmlsZVJlbWFyaykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+5Lq65Y+K5ouF5L+d5Lq65L+h5oGv5o+P6L+wXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIwXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5jbGllbnREZXNjKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDnu4/okKXmg4XlhrXmj4/ov7BcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjBcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLm1hbmFnZW1lbnREZXNjKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLm1vZGVsLnJpc2tBdWRpdFJlc3VsdCkgPyBfYygnUm93Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIlxuICB9LCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5a6h5qC45oSP6KeBXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLnJpc2tBdWRpdERlc2MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqHmoLjnu5PorrpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLnJpc2tBdWRpdFJlc3VsdCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwucmlza0F1ZGl0VXNlcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwucmlza0F1ZGl0RGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5obVByb2plY3RDbG9iLmZpbmFsRXZhbERlc2MpID8gX2MoJ1JvdycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCJcbiAgfSwgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOe7iOivhOaEj+ingVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5maW5hbEV2YWxEZXNjKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5maW5hbEV2YWxVc2VyKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5maW5hbEV2YWxEYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uaG1Qcm9qZWN0Q2xvYi5yZXBvcnRMZWFkc2hpcFJlc3VsdCkgPyBfYygnUm93Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIlxuICB9LCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5LiK5oql5oSP6KeBXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLnJlcG9ydExlYWRzaGlwRGVzYykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOS4iuaKpee7k+iuulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwucmVwb3J0TGVhZHNoaXBSZXN1bHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLnJlcG9ydExlYWRzaGlwVXNlcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwucmVwb3J0TGVhZHNoaXBEYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uaG1Qcm9qZWN0Q2xvYi5hcHByb3ZlMVJlc3VsdCkgPyBfYygnUm93Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIlxuICB9LCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5a6h6K6uMeaEj+ingVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5hcHByb3ZlMURlc2MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqHmibkx57uT6K66XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5hcHByb3ZlMVJlc3VsdCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwcm92ZTFVc2VyKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5hcHByb3ZlMURhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5obVByb2plY3RDbG9iLmFwcHJvdmUyUmVzdWx0KSA/IF9jKCdSb3cnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiXG4gIH0sIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqHorq4y5oSP6KeBXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLmFwcHJvdmUyRGVzYykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWuoeaJuTLnu5PorrpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcHJvdmUyUmVzdWx0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5hcHByb3ZlMlVzZXIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcHJvdmUyRGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLm1vZGVsLmRzaFJlc3VsdCkgPyBfYygnUm93Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIlxuICB9LCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5b6F5a6h5Lya5oSP6KeB5rGH5oC7XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLmRzaERlc2MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlvoXlrqHkvJrnu5PorrpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRzaFJlc3VsdCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZHNoVXNlcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZHNoRGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmhtUHJvamVjdENsb2IucmVzb2x1dGlvbl9kZXNjKSA/IF9jKCdSb3cnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiXG4gIH0sIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlhrPorq7lrqHmibnmhI/op4FcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IucmVzb2x1dGlvbl9kZXNjKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0pXSwgMSkgOiBfdm0uX2UoKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5obVByb2pQbGFuKSA/IF9jKCdDb2xsYXBzZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJjb29wZXJhdGlvblwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJjb29wZXJhdGlvblwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDlkIjkvZzljoblj7JcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1RhYmxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCIsXG4gICAgICBcImxvYWRpbmdcIjogX3ZtLm1vZGVsLmxvYWRpbmcsXG4gICAgICBcImRpc2FibGVkLWhvdmVyXCI6IFwiXCIsXG4gICAgICBcImRhdGFcIjogX3ZtLm1vZGVsLmhpc3RvcnlEYXRhLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5oaXN0b3J5Q29sdW1uc1xuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSldLCAxKV0sIDEpIDogX3ZtLl9lKCldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1kYjU0NzIxY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWRiNTQ3MjFjXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvdGFicy9pbnZlc3RpZ2F0aW9uUmVwb3J0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gOCAxMCAxMiAxMyAxNCIsImltcG9ydCB7Zm9ybWF0TW9uZXl9IGZyb20gXCIuLi8uLi9saWJzL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaWN0czoge0NMSUVOVFM6IFtdfSxcbiAgICAgICAgICAgIHBhd25EYXRhOiBbXSxcbiAgICAgICAgICAgIHBhd25Db2x1bW5zOiBbe3RpdGxlOiAn57yW5Y+3Jywga2V5OiAnaWQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfor4Hku7YnLCBrZXk6ICdjZXJ0aWZpY2F0ZVR5cGVUZXh0J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn6K+B5Lu25Y+3Jywga2V5OiAnY2VydGlmaWNhdGVDb2RlJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn57G75Z6LJywga2V5OiAnaG91c2VUeXBlVGV4dCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+aIv+S6p+eOsOeKticsIGtleTogJ3Byb3BlcnR5U3RhdGljVGV4dCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+WcsOWdgCcsIGtleTogJ2FkZHJlc3MnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfnu4jor4TlgLwnLCBrZXk6ICdldmFsUmVzdWx0J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5oq15oq8546HJywga2V5OiAncGF3blJhdGUnfV0sXG4gICAgICAgICAgICBjb21tb25Db2x1bW5zOiBbe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5YWz57O7Jywgd2lkdGg6IDIwMCwgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc3Rha2Vob2xkZXJMaXN0W3RoaXMuZ2V0SW5kZXgocGFyYW1zLnJvdy5ndWlkKV0gPSBwYXJhbXMucm93O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnU2VsZWN0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6ICF0aGlzLm1vZGVsLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6YCJ5oup5YWz57O7JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLnJvdy5yZWxhdGlvbnNoaXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMubW9kZWwuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbi1jaGFuZ2UnOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5yZWxhdGlvbnNoaXAgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuZGljdHMuUkVMQVRJT05TSElQLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ09wdGlvbicsIHtwcm9wczoge3ZhbHVlOiBpdGVtLmlkLCBsYWJlbDogaXRlbS50ZXh0fX0pXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+Wnk+WQjScsIHdpZHRoOiAyMjAsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6ICF0aGlzLm1vZGVsLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5aeT5ZCNJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLnJvdy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLm1vZGVsLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb24tY2hhbmdlJzogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cubmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+B5Lu257G75Z6LJywgd2lkdGg6IDIwMCwgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdTZWxlY3QnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogIXRoaXMubW9kZWwuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfpgInmi6nor4Hku7bnsbvlnosnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMucm93LmNlcnRpZmljYXRlc1R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMubW9kZWwuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbi1jaGFuZ2UnOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5jZXJ0aWZpY2F0ZXNUeXBlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLmRpY3RzLkNFUlRJRklDQVRFU1RZUEUubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnT3B0aW9uJywge3Byb3BzOiB7dmFsdWU6IGl0ZW0uaWQsIGxhYmVsOiBpdGVtLnRleHR9fSlcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+B5Lu25Y+3Jywgd2lkdGg6IDMyMCwgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdJbnB1dCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogIXRoaXMubW9kZWwuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfor4Hku7blj7cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMucm93LmNlcnRpZmljYXRlc051bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5tb2RlbC5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29uLWNoYW5nZSc6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93LmNlcnRpZmljYXRlc051bWJlciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5aSH5rOoJywgd2lkdGg6IDMyMCwgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdJbnB1dCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6ICF0aGlzLm1vZGVsLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5YW25LuW6K+05piOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLnJvdy5vdGhlckRlc2MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMubW9kZWwuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbi1jaGFuZ2UnOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5vdGhlckRlc2MgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aTjeS9nCcsIHdpZHRoOiA2MCwgYWxpZ246ICdjZW50ZXInLCBmaXhlZDogJ3JpZ2h0JywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLm1vZGVsLmRpc2FibGVkID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBbaCgnVG9vbHRpcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WIoOmZpCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBoKCdJY29uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZC1jbG9zZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNlZDQwMTQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWwocGFyYW1zLnJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBjb25kaXRpb25zQ29sdW1uczogW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+W6j+WPtycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmhtUHJvalBsYW5yZXF1aXJlW3BhcmFtcy5pbmRleF0gPSBwYXJhbXMucm93O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnbGFiZWwnLCBwYXJhbXMuaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+iQveWunuadoeS7tuivtOaYjicsIHdpZHRoOiA5MDAsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMucm93LnJlcXVpcmVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+iQveWunuadoeS7tuivtOaYjicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiAhdGhpcy5tb2RlbC5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5tb2RlbC5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29uLWNoYW5nZSc6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93LnJlcXVpcmVtZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aTjeS9nCcsIHdpZHRoOiA3MCwgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLm1vZGVsLmRpc2FibGVkID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBbaCgnVG9vbHRpcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5Yig6ZmkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgW2goJ0ljb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZC1jbG9zZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZWQ0MDE0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5obVByb2pQbGFucmVxdWlyZS5zcGxpY2UocGFyYW1zLmluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXSldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWw6IE9iamVjdFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2FkTW9kZWwoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvalBsYW4vcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwcm9qZWN0SWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFbMF0ubG9hbkFtb3VudCA9IGZvcm1hdE1vbmV5KHJlc3BvbnNlLmRhdGFbMF0ubG9hbkFtb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFbMF0ubG9hblBlcmlvZCA9IHJlc3BvbnNlLmRhdGFbMF0ubG9hblBlcmlvZCA/IHJlc3BvbnNlLmRhdGFbMF0ubG9hblBlcmlvZCArICcnIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5obVByb2pQbGFuID0gcmVzcG9uc2UuZGF0YVswXSB8fCB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3RzLlJFUEFZTUVUSE9EID0gcmVzcG9uc2UuZGljdHMuUkVQQVlNRVRIT0Q7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0cy5MT0FOUkVRVUlSRU1FTlQgPSByZXNwb25zZS5kaWN0cy5MT0FOUkVRVUlSRU1FTlQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUGxhbnJlcXVpcmUodGhpcy5tb2RlbC5obVByb2pQbGFuLmlkKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUHJvZHVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9kdWN0L3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7cGFnZVNpemU6IDEwMDB9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0cy5QUk9EVUNUUyA9IHJlc3BvbnNlLmRhdGEubGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtpZDogaXRlbS5pZCwgdGV4dDogaXRlbS5wcm9kdWN0TmFtZX1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkQ2xpZW50KCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obUNsaWVudC9yZWFkL2xpc3QnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge3BhZ2VTaXplOiAxMDAwfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGljdHMuQ0xJRU5UUyA9IHJlc3BvbnNlLmRhdGEubGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtpZDogaXRlbS5pZCwgdGV4dDogaXRlbS5jbGllbnROYW1lfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRTdGFrZWhvbGRlcigpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qU3Rha2Vob2xkZXIvcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwcm9qZWN0SWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc3Rha2Vob2xkZXJMaXN0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3RzLlJFTEFUSU9OU0hJUCA9IHJlc3BvbnNlLmRpY3RzLlJFTEFUSU9OU0hJUDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3RzLkNFUlRJRklDQVRFU1RZUEUgPSByZXNwb25zZS5kaWN0cy5DRVJUSUZJQ0FURVNUWVBFO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdHMuU1RBS0VIT0xERVJTID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYnVzaVR5cGUgPT09ICcyJ1xuICAgICAgICAgICAgICAgIH0pLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2lkOiBpdGVtLmlkLCB0ZXh0OiBpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFBhd24oKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUGF3bi9yZWFkL3F1ZXJ5QnlQcm9qZWN0SWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge3Byb2plY3RJZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWRkcmVzcyA9IGl0ZW0ucHJvdmluY2UgKyBpdGVtLmNpdHkgKyBpdGVtLmFyZWEgKyBpdGVtLmRldGFpbGVkQWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5ldmFsUmVzdWx0ID0gaXRlbS5iYWNrdXBGbGFnID09PSAnMCcgPyBmb3JtYXRNb25leSh0aGlzLm1vZGVsLmV2YWxSZXN1bHQpICsgJ+WFgycgOiAnLSc7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGF3blJhdGUgPSBpdGVtLmJhY2t1cEZsYWcgPT09ICcwJyA/IHRoaXMubW9kZWwuaG1Qcm9qUGxhbi5wYXduUmF0ZSArICclJyA6ICctJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhd25EYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUGxhbnJlcXVpcmUoaWQpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qUGxhbnJlcXVpcmUvcmVhZC9xdWVyeUJ5UGxhbklkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwbGFuSWQ6IGlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuaG1Qcm9qUGxhbnJlcXVpcmUgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEluZGV4KGd1aWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnN0YWtlaG9sZGVyTGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ndWlkID09PSBndWlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZChmbGFnLCBuYXR1cmFsKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnN0YWtlaG9sZGVyTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBidXNpVHlwZTogZmxhZyxcbiAgICAgICAgICAgICAgICBuYXR1cmFsRmxhZzogbmF0dXJhbCA/IG5hdHVyYWwgOiBudWxsLFxuICAgICAgICAgICAgICAgIGd1aWQ6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkZWwoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zdGFrZWhvbGRlckxpc3Quc3BsaWNlKHRoaXMuZ2V0SW5kZXgoaXRlbS5ndWlkKSwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIHBsdXMoKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmhtUHJvalBsYW5yZXF1aXJlLnB1c2goe3BsYW5JZDogdGhpcy5tb2RlbC5obVByb2pQbGFuLmlkfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubW9kZWwuaG1Qcm9qUGxhbiA9IHt9O1xuICAgICAgICB0aGlzLm1vZGVsLnN0YWtlaG9sZGVyTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLm1vZGVsLmhtUHJvalBsYW5yZXF1aXJlID0gW107XG4gICAgICAgIHRoaXMubG9hZENsaWVudCgpO1xuICAgICAgICB0aGlzLmxvYWRTdGFrZWhvbGRlcigpO1xuICAgICAgICB0aGlzLmxvYWRQcm9kdWN0KCk7XG4gICAgICAgIHRoaXMubG9hZE1vZGVsKCk7XG4gICAgICAgIHRoaXMubG9hZFBhd24oKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9jb25jZXB0dWFsRGVzaWduLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9jb25jZXB0dWFsRGVzaWduLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xNTJiOTU2YVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9jb25jZXB0dWFsRGVzaWduLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy90YWJzL2NvbmNlcHR1YWxEZXNpZ24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY29uY2VwdHVhbERlc2lnbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTUyYjk1NmFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xNTJiOTU2YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9jb25jZXB0dWFsRGVzaWduLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gOCAyMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInBsYW5cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwicGxhblwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDln7rmnKzkv6Hmga9cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOeUs+ivt+S6ulxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5hcHBseVVzZXJOYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDnlLPor7fml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwbHlEYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDnlLPor7fpg6jpl6hcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwbHlEZXB0TmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcImhtUHJvalBsYW4ubWFpbkxvYW5DbGllbnRcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlgJ/mrL7kuLvkvZNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLm1vZGVsLmRpc2FibGVkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumAieaLqeWAn+asvuS4u+S9kyB8IOW/heWhq1wiLFxuICAgICAgXCJmaWx0ZXJhYmxlXCI6IFwiXCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiAhX3ZtLm1vZGVsLmRpc2FibGVkXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubW9kZWwuaG1Qcm9qUGxhbi5tYWluTG9hbkNsaWVudCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbC5obVByb2pQbGFuLCBcIm1haW5Mb2FuQ2xpZW50XCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmhtUHJvalBsYW4ubWFpbkxvYW5DbGllbnRcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uZGljdHMuQ0xJRU5UUyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwcm9wXCI6IFwiaG1Qcm9qUGxhbi5zaGFyZUxvYW5Ib2xkZXJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlhbHlkIzlgJ/mrL7kurpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLm1vZGVsLmRpc2FibGVkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumAieaLqeWFseWQjOWAn+asvuS6uiB8IOW/heWhq1wiLFxuICAgICAgXCJmaWx0ZXJhYmxlXCI6IFwiXCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiAhX3ZtLm1vZGVsLmRpc2FibGVkXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubW9kZWwuaG1Qcm9qUGxhbi5zaGFyZUxvYW5Ib2xkZXIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwuaG1Qcm9qUGxhbiwgXCJzaGFyZUxvYW5Ib2xkZXJcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwibW9kZWwuaG1Qcm9qUGxhbi5zaGFyZUxvYW5Ib2xkZXJcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uZGljdHMuU1RBS0VIT0xERVJTKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInByb3BcIjogXCJobVByb2pQbGFuLmxvYW5BbW91bnRcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmibnlpI3ph5Hpop1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubW9kZWwuZGlzYWJsZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5om55aSN6YeR6aKdIHwg5b+F5aGrXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiAyMCxcbiAgICAgIFwiY2xlYXJhYmxlXCI6ICFfdm0ubW9kZWwuZGlzYWJsZWRcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5obVByb2pQbGFuLmxvYW5BbW91bnQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwuaG1Qcm9qUGxhbiwgXCJsb2FuQW1vdW50XCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmhtUHJvalBsYW4ubG9hbkFtb3VudFwiXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcInByZXBlbmRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJwcmVwZW5kXCJcbiAgfSwgW192bS5fdihcIuWFg1wiKV0pXSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInByb3BcIjogXCJobVByb2pQbGFuLmxvYW5QZXJpb2RcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlgJ/mrL7mnJ/pmZBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubW9kZWwuZGlzYWJsZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5YCf5qy+5pyf6ZmQIHwg5b+F5aGrXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiAyMCxcbiAgICAgIFwiY2xlYXJhYmxlXCI6ICFfdm0ubW9kZWwuZGlzYWJsZWRcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5obVByb2pQbGFuLmxvYW5QZXJpb2QpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwuaG1Qcm9qUGxhbiwgXCJsb2FuUGVyaW9kXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmhtUHJvalBsYW4ubG9hblBlcmlvZFwiXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcInByZXBlbmRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJwcmVwZW5kXCJcbiAgfSwgW192bS5fdihcIuaciFwiKV0pXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcImhtUHJvalBsYW4ubG9hblJlcXVpcmVtZW50XCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5pS+5qy+5p2h5Lu2XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6YCJ5oup5pS+5qy+5p2h5Lu2IHwg5b+F5aGrXCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5tb2RlbC5kaXNhYmxlZCxcbiAgICAgIFwiY2xlYXJhYmxlXCI6ICFfdm0ubW9kZWwuZGlzYWJsZWRcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5obVByb2pQbGFuLmxvYW5SZXF1aXJlbWVudCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbC5obVByb2pQbGFuLCBcImxvYW5SZXF1aXJlbWVudFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5obVByb2pQbGFuLmxvYW5SZXF1aXJlbWVudFwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5kaWN0cy5MT0FOUkVRVUlSRU1FTlQpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdPcHRpb24nLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInZhbHVlXCI6IGl0ZW0uaWRcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS50ZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcImhtUHJvalBsYW4ucHJvZHVjdElkXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lqn5ZOBXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS5tb2RlbC5kaXNhYmxlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLpgInmi6nkuqflk4EgfCDlv4XloatcIixcbiAgICAgIFwiZmlsdGVyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJjbGVhcmFibGVcIjogIV92bS5tb2RlbC5kaXNhYmxlZFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLm1vZGVsLmhtUHJvalBsYW4ucHJvZHVjdElkKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLmhtUHJvalBsYW4sIFwicHJvZHVjdElkXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmhtUHJvalBsYW4ucHJvZHVjdElkXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLmRpY3RzLlBST0RVQ1RTKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwcm9wXCI6IFwiaG1Qcm9qUGxhbi5yZXBheW1lbnRNZXRob2RcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDov5jmrL7mlrnlvI9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLm1vZGVsLmRpc2FibGVkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumAieaLqei/mOasvuaWueW8jyB8IOW/heWhq1wiLFxuICAgICAgXCJjbGVhcmFibGVcIjogIV92bS5tb2RlbC5kaXNhYmxlZFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLm1vZGVsLmhtUHJvalBsYW4ucmVwYXltZW50TWV0aG9kKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLmhtUHJvalBsYW4sIFwicmVwYXltZW50TWV0aG9kXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmhtUHJvalBsYW4ucmVwYXltZW50TWV0aG9kXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLmRpY3RzLlJFUEFZTUVUSE9EKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTZcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YW25LuW6L+Y5qy+5pa55byP6K+05piOXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRhcmVhXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5YW25LuW6L+Y5qy+5pa55byP6K+05piOXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiA1MDAsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5tb2RlbC5kaXNhYmxlZCxcbiAgICAgIFwiY2xlYXJhYmxlXCI6ICFfdm0ubW9kZWwuZGlzYWJsZWRcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5obVByb2pQbGFuLnJlcGF5bWVudFJlbWFyayksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbC5obVByb2pQbGFuLCBcInJlcGF5bWVudFJlbWFya1wiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCIgbW9kZWwuaG1Qcm9qUGxhbi5yZXBheW1lbnRSZW1hcmtcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuIrmiqXliKnnjodcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaG1Qcm9qUGxhbi5yZXBvcnRSYXRlICsgJyUnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInByb3BcIjogXCJobVByb2pQbGFuLmFsbG93UmF0ZVwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaJueWkjeWIqeeOh1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5tb2RlbC5kaXNhYmxlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLmibnlpI3liKnnjocgfCDlv4XloatcIixcbiAgICAgIFwibWF4bGVuZ3RoXCI6IDIwLFxuICAgICAgXCJjbGVhcmFibGVcIjogIV92bS5tb2RlbC5kaXNhYmxlZFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLm1vZGVsLmhtUHJvalBsYW4uYWxsb3dSYXRlKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLmhtUHJvalBsYW4sIFwiYWxsb3dSYXRlXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmhtUHJvalBsYW4uYWxsb3dSYXRlXCJcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwicHJlcGVuZFwiXG4gICAgfSxcbiAgICBzbG90OiBcInByZXBlbmRcIlxuICB9LCBbX3ZtLl92KFwiJVwiKV0pXSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuIrmiqXotLnnjodcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaG1Qcm9qUGxhbi5yZXBvcnRGZWUgKyAnJScpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcImhtUHJvalBsYW4uYWxsb3dGZWVcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmibnlpI3otLnnjodcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubW9kZWwuZGlzYWJsZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5om55aSN6LS5546HIHwg5b+F5aGrXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiAyMCxcbiAgICAgIFwiY2xlYXJhYmxlXCI6ICFfdm0ubW9kZWwuZGlzYWJsZWRcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5obVByb2pQbGFuLmFsbG93RmVlKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLmhtUHJvalBsYW4sIFwiYWxsb3dGZWVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwibW9kZWwuaG1Qcm9qUGxhbi5hbGxvd0ZlZVwiXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcInByZXBlbmRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJwcmVwZW5kXCJcbiAgfSwgW192bS5fdihcIiVcIildKV0pXSwgMSldLCAxKV0sIDEpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiYm9ycm93ZXJcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiYm9ycm93ZXJcIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg6aOO5o6n5o6q5pa9XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjI0XCJcbiAgICB9XG4gIH0sIFtfYygnSWNvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibWQtbGlzdFwiLFxuICAgICAgXCJzaXplXCI6IFwiMTZcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaKteaKvOeJqeWIl+ihqFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1RhYmxlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZC1ob3ZlclwiOiBcIlwiLFxuICAgICAgXCJkYXRhXCI6IF92bS5wYXduRGF0YSxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0ucGF3bkNvbHVtbnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjBcIlxuICAgIH1cbiAgfSwgW19jKCdJY29uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJtZC1saXN0XCIsXG4gICAgICBcInNpemVcIjogXCIxNlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5ouF5L+d5Lq6KOiHqueEtuS6uinliJfooahcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5tb2RlbC5kaXNhYmxlZCkgPyBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzaXplXCI6IFwic21hbGxcIixcbiAgICAgIFwiaWNvblwiOiBcIm1kLWFkZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFkZCgnMScsICcxJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5re75YqgXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSA6IF92bS5fZSgpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb21tb25Db2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5tb2RlbC5zdGFrZWhvbGRlckxpc3QuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmJ1c2lUeXBlID09PSAnMScgJiYgaXRlbS5uYXR1cmFsRmxhZyA9PT0gJzEnO1xuICAgICAgfSlcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjBcIlxuICAgIH1cbiAgfSwgW19jKCdJY29uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJtZC1saXN0XCIsXG4gICAgICBcInNpemVcIjogXCIxNlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5ouF5L+d5Lq6KOazleS6uinliJfooahcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbKCFfdm0ubW9kZWwuZGlzYWJsZWQpID8gX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzaXplXCI6IFwic21hbGxcIixcbiAgICAgIFwiaWNvblwiOiBcIm1kLWFkZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFkZCgnMScsICcwJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5re75YqgXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb21tb25Db2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5tb2RlbC5zdGFrZWhvbGRlckxpc3QuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmJ1c2lUeXBlID09PSAnMScgJiYgaXRlbS5uYXR1cmFsRmxhZyA9PT0gJzAnO1xuICAgICAgfSlcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjBcIlxuICAgIH1cbiAgfSwgW19jKCdJY29uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJtZC1saXN0XCIsXG4gICAgICBcInNpemVcIjogXCIxNlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5pS+5qy+5YmN6JC95a6e5p2h5Lu2XFxuICAgICAgICAgICAgICAgICAgICBcIildLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgWyghX3ZtLm1vZGVsLmRpc2FibGVkKSA/IF9jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIixcbiAgICAgIFwiaWNvblwiOiBcIm1kLWFkZFwiLFxuICAgICAgXCJzaXplXCI6IFwic21hbGxcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnBsdXNcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5re75YqgXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhXCI6IF92bS5tb2RlbC5obVByb2pQbGFucmVxdWlyZSxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29uZGl0aW9uc0NvbHVtbnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsLXdpZHRoXCI6IDcwXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlhbbku5bor7TmmI5cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRhcmVhXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiA1MDAsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5tb2RlbC5kaXNhYmxlZCxcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5YW25LuW6K+05piOXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5obVByb2pQbGFuLm90aGVyRGVzYyksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbC5obVByb2pQbGFuLCBcIm90aGVyRGVzY1wiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5obVByb2pQbGFuLm90aGVyRGVzY1wiXG4gICAgfVxuICB9KV0sIDEpXSwgMSldKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTUyYjk1NmFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xNTJiOTU2YVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvY29uY2VwdHVhbERlc2lnbi52dWVcbi8vIG1vZHVsZSBpZCA9IDk3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDggMjEiLCJpbXBvcnQgaW52ZXN0aWdhdGlvblJlcG9ydCBmcm9tICcuLi92aWV3cy90YWJzL2ludmVzdGlnYXRpb25SZXBvcnQnXG5pbXBvcnQgY29uY2VwdHVhbERlc2lnbiBmcm9tICcuLi92aWV3cy90YWJzL2NvbmNlcHR1YWxEZXNpZ24nXG5pbXBvcnQgcHJvamVjdEFwcHJvdmFsIGZyb20gJy4uL3ZpZXdzL3RhYnMvcHJvamVjdEFwcHJvdmFsJ1xuaW1wb3J0IHtmb3JtYXRNb25leX0gZnJvbSBcIi4uL2xpYnMvdXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpYzoge1xuICAgICAgICAgICAgICAgIHJlc3VsdDogW3tpZDogMSwgdGV4dDogJ+WQjOaEjyd9LCB7aWQ6IDIsIHRleHQ6ICflkKblhrMnfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICBjbGllbnQ6IHt9LFxuICAgICAgICAgICAgICAgIGhpc3RvcnlEYXRhOiBbXSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFiTmFtZTogJ2ludmVzdGlnYXRpb25SZXBvcnQnLFxuICAgICAgICAgICAgdGFiczogW3tpZDogJ2ludmVzdGlnYXRpb25SZXBvcnQnLCB0ZXh0OiAn6LCD5p+l5oql5ZGKJ30sXG4gICAgICAgICAgICAgICAge2lkOiAnY29uY2VwdHVhbERlc2lnbicsIHRleHQ6ICfmlrnmoYjorr7orqEnfSxcbiAgICAgICAgICAgICAgICB7aWQ6ICdwcm9qZWN0QXBwcm92YWwnLCB0ZXh0OiAn6aG555uu5a6h5om5J31dLFxuICAgICAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgICAgICAnaG1Qcm9qUGxhbi5tYWluTG9hbkNsaWVudCc6IFt7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICflgJ/mrL7kuLvkvZPkuI3og73kuLrnqbonfV0sXG4gICAgICAgICAgICAgICAgJ2htUHJvalBsYW4uc2hhcmVMb2FuSG9sZGVyJzogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+WFseWQjOWAn+asvuS6uuS4jeiDveS4uuepuid9XSxcbiAgICAgICAgICAgICAgICAnaG1Qcm9qUGxhbi5sb2FuQW1vdW50JzogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+eUs+ivt+mHkemineS4jeiDveS4uuepuicsIHRyaWdnZXI6ICdibHVyJ30sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eWzAtOV0rKFsuXXsxfVswLTldezEsMn0pPyQvLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aVsOWAvOagvOW8j+mUmeivrycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYmx1cidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgJ2htUHJvalBsYW4ubG9hblBlcmlvZCc6IFt7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICflgJ/mrL7mnJ/pmZDkuI3og73kuLrnqbonLCB0cmlnZ2VyOiAnYmx1cid9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXigwfFsxLTldWzAtOV0qKSQvLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aVsOWAvOagvOW8j+mUmeivrycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYmx1cidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgJ2htUHJvalBsYW4ucmVwYXltZW50TWV0aG9kJzogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+i/mOasvuaWueW8j+S4jeiDveS4uuepuid9XSxcblxuICAgICAgICAgICAgICAgICdobVByb2pQbGFuLmxvYW5SZXF1aXJlbWVudCc6IFt7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfmlL7mrL7mnaHku7bkuI3og73kuLrnqbonfV0sXG4gICAgICAgICAgICAgICAgJ2htUHJvalBsYW4ucHJvZHVjdElkJzogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+S6p+WTgeS4jeiDveS4uuepuid9XSxcbiAgICAgICAgICAgICAgICAnaG1Qcm9qUGxhbi5hbGxvd1JhdGUnOiBbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn5om55aSN5Yip546H5LiN6IO95Li656m6JywgdHJpZ2dlcjogJ2JsdXInfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogL15bMC05XSsoWy5dezF9WzAtOV17MSwyfSk/JC8sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5pWw5YC85qC85byP6ZSZ6K+vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdibHVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAnaG1Qcm9qUGxhbi5hbGxvd0ZlZSc6IFt7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfmibnlpI3otLnnjofkuI3og73kuLrnqbonLCB0cmlnZ2VyOiAnYmx1cid9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlswLTldKyhbLl17MX1bMC05XXsxLDJ9KT8kLyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfmlbDlgLzmoLzlvI/plJnor68nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2JsdXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICdhcHByb3ZlMVJlc3VsdCc6IFt7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICflrqHmoLjnu5PorrrkuI3og73kuLrnqbonfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY3VycmVudFRhYkNvbXBvbmVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYk5hbWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ2ludmVzdGlnYXRpb25SZXBvcnQnOiBpbnZlc3RpZ2F0aW9uUmVwb3J0LFxuICAgICAgICAnY29uY2VwdHVhbERlc2lnbic6IGNvbmNlcHR1YWxEZXNpZ24sXG4gICAgICAgICdwcm9qZWN0QXBwcm92YWwnOiBwcm9qZWN0QXBwcm92YWxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZENsaWVudChpZCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obUNsaWVudC9yZWFkL2RldGFpbCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IGlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY2xpZW50ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkQ29vcGVyYXRlKGlkKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obUxvYW5BcHBseS9jb29wZXJhdGVIaXN0b3J5UXVlcnknO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2NsaWVudElkOiBpZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3R1YWxMb2FuQW1vdW50ID0gZm9ybWF0TW9uZXkoaXRlbS5hY3R1YWxMb2FuQW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5sb2FuQmFsYW5jZSA9IGZvcm1hdE1vbmV5KGl0ZW0ubG9hbkJhbGFuY2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuaGlzdG9yeURhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRNb2RlbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qZWN0L3JlYWQvZGV0YWlsJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtpZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5jbGllbnQgPSB7fTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmluaXRMb2FuQW1vdW50VGV4dCA9IGZvcm1hdE1vbmV5KHJlc3BvbnNlLmRhdGEuaW5pdExvYW5BbW91bnQpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZmlyc3RFdmFsdWVUZXh0ID0gZm9ybWF0TW9uZXkocmVzcG9uc2UuZGF0YS5maXJzdEV2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5ldmFsUmVzdWx0VGV4dCA9IGZvcm1hdE1vbmV5KHJlc3BvbnNlLmRhdGEuZXZhbFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5oaXN0b3J5RGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaG1Qcm9qUGxhbnJlcXVpcmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEubG9hZGluZyA9IHJlc3BvbnNlLmRhdGEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDbGllbnQocmVzcG9uc2UuZGF0YS5jbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29vcGVyYXRlKHJlc3BvbnNlLmRhdGEuY2xpZW50SWQpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuYXBwcm92YWwudmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5tb2RlbC5obVByb2pQbGFuIHx8ICF0aGlzLm1vZGVsLm9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcign5o+Q5Lqk5L+h5oGv5LiN5a6M5pW077yM6K+35a6M55u45YWz5L+h5oGv44CCJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuYXBwcm92ZTFSZXN1bHQgPSB0aGlzLmRpYy5yZXN1bHQuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PT0gdGhpcy5tb2RlbC5vcGVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgIH0pWzBdLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qZWN0L3NoZW5waXN1Ym1pdCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IEpTT04uc3RyaW5naWZ5KHRoaXMubW9kZWwpfSwgJ2pzb24nKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6J2JhY2tsb2cnfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkTW9kZWwoKTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JyZWFkY3J1bWInKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwcm92YWwuanMiXSwic291cmNlUm9vdCI6IiJ9