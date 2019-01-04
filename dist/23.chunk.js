webpackJsonp([23],{

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('loans', {
    attrs: {
      "model": _vm.loansData
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('finance', {
    attrs: {
      "model": _vm.financeData
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Button', {
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
      "type": "primary"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n            提交\n        ")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-6fa1c97b", module.exports)
  }
}

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(989),
  /* template */
  __webpack_require__(1153),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/branchFinance.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] branchFinance.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fa1c97b", Component.options)
  } else {
    hotAPI.reload("data-v-6fa1c97b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object
    },
    data: function data() {
        return {
            projectPlan: {} //项目决议
        };
    },
    created: function created() {
        this.getProjectPlan();
    },

    methods: {
        getProjectPlan: function getProjectPlan() {
            var _this = this;

            // 获取决议信息
            this.$axios.options.url = '/houseMortgage/hmProjPlan/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$router.currentRoute.params.id
                }
            }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.projectPlan = response.data[0];
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        }
    }
});

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(914),
  /* template */
  __webpack_require__(916),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/loans.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loans.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36dbde1f", Component.options)
  } else {
    hotAPI.reload("data-v-36dbde1f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 916:
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
  }, [_c('strong', [_vm._v("\n            放款申请信息\n        ")]), _vm._v(" "), _c('div', {
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
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    项目编号\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                     " + _vm._s(_vm.model.id || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
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
  }, [_vm._v("\n                    " + _vm._s(_vm.model.client ? _vm.model.client.clientName : ' ') + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
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
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
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
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    本次借款金额\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.model.evalResult || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    本次借款期限\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.projectPlan.loanPeriod || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    计划放款日期\n                ")]), _vm._v(" "), _c('Col', {
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
     __webpack_require__(202).rerender("data-v-36dbde1f", module.exports)
  }
}

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object
    },
    data: function data() {
        return {
            chargeColumns: [{ title: '序号', key: '' }, { title: '收费项目', key: '' }, {
                title: '我司收费帐号', key: '', render: function render(h, params) {
                    return h('Input', {
                        props: {
                            type: 'text',
                            maxlength: 20,
                            clearable: true,
                            placeholder: '我司收费帐号'
                        }
                    });
                }
            }, {
                title: '应收金额(元)', key: '', render: function render(h, params) {
                    return h('InputNumber', {
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '我司收费帐号'
                        }
                    });
                }
            }, {
                title: '实收金额(元)', key: '', render: function render(h, params) {
                    return h('InputNumber', {
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '我司收费帐号'
                        }
                    });
                }
            }, {
                title: '收费时间', key: '', render: function render(h, params) {
                    return h('DatePicker', {
                        props: {
                            type: 'date',
                            clearable: true,
                            placeholder: '选择收费时间'
                        }
                    });
                }
            }, {
                title: '收费方式', key: '', render: function render(h, params) {
                    return h('Select', {
                        props: {
                            placeholder: '选择收费方式',
                            clearable: true
                        }
                    }, []);
                }
            }, {
                title: '确认收取', key: '', render: function render(h, params) {
                    return h('Checkbox', {
                        props: {
                            label: '确认'
                        }
                    }, '确认');
                }
            }, {
                title: '财务编码', key: '', render: function render(h, params) {
                    return h('Input', {
                        props: {
                            type: 'text',
                            placeholder: '财务编码',
                            clearable: true,
                            maxlength: 20
                        }
                    });
                }
            }, {
                title: '收费凭证', key: '', render: function render(h, params) {
                    h('div', [h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '查看'), h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '重新上传'), h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '上传')]);
                }
            }],
            cardColumns: [{ title: '项目', key: '' }, {
                title: '卡号', key: '', render: function render(h, params) {
                    return h('Input', {
                        props: {
                            type: 'text',
                            maxlength: 20,
                            clearable: true,
                            placeholder: '卡号'
                        }
                    });
                }
            }, {
                title: '有效期', key: '', render: function render(h, params) {
                    return h('DatePicker', {
                        props: {
                            type: 'data',
                            clearable: 'true',
                            placeholder: '选择有效期'
                        }
                    });
                }
            }, {
                title: '开户银行', key: '', render: function render(h, params) {
                    return h('Input', {
                        props: {
                            type: 'text',
                            maxlength: 20,
                            clearable: true,
                            placeholder: '开户银行'
                        }
                    });
                }
            }, {
                title: '收卡时间', key: '', render: function render(h, params) {
                    return h('DatePicker', {
                        props: {
                            type: 'data',
                            clearable: 'true',
                            placeholder: '选择有效期'
                        }
                    });
                }
            }, {
                title: '确认收取', key: '', render: function render(h, params) {
                    return h('Checkbox', {
                        props: {
                            label: '确认'
                        }
                    }, '确认');
                }
            }, { title: '备注', key: '' }, {
                title: '收费凭证', key: '', render: function render(h, params) {
                    h('div', [h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '查看'), h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '重新上传'), h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '上传')]);
                }
            }]
        };
    }
});

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(937),
  /* template */
  __webpack_require__(943),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/finance.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] finance.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a347ff6", Component.options)
  } else {
    hotAPI.reload("data-v-4a347ff6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "charge"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "charge",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n            收费信息\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Icon', {
    attrs: {
      "type": "md-list"
    }
  }), _vm._v("\n            收费表(综合费率：0.08%)\n            "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "data": _vm.model.chargeData,
      "columns": _vm.chargeColumns
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Table', {
    attrs: {
      "data": _vm.model.cardData,
      "columns": _vm.cardColumns
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-4a347ff6", module.exports)
  }
}

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_loans__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_loans___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_loans__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_finance__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_finance___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_finance__);



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            financeData: {
                chargeData: [],
                cardData: []
            },
            loansData: {
                loan: {},
                client: {}
            }
        };
    },

    components: {
        'loans': __WEBPACK_IMPORTED_MODULE_0__views_tabs_loans___default.a,
        'finance': __WEBPACK_IMPORTED_MODULE_1__views_tabs_finance___default.a
    },
    methods: {
        submit: function submit() {},
        cancel: function cancel() {},
        basicInformation: function basicInformation() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProject/read/detail';
            this.$axios.request({ data: { id: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.loansData = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        collectTab1: function collectTab1() {
            var _this2 = this;

            this.$axios.options.url = '/houseMortgage/hmProjFee/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                _this2.financeData.chargeData = response.data;
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        }
    },
    created: function created() {
        this.basicInformation();
        this.collectTab1();
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
    }
});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYnJhbmNoRmluYW5jZS52dWU/ZDlhNiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYnJhbmNoRmluYW5jZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9sb2Fucy5qcz9iMzE4KioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9sb2Fucy52dWU/OTQwOCoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvbG9hbnMudnVlP2IzY2UqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2ZpbmFuY2UuanM/OTNjZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9maW5hbmNlLnZ1ZT9lMGFlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2ZpbmFuY2UudnVlPzExYjAqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JyYW5jaEZpbmFuY2UuanMiXSwibmFtZXMiOlsicHJvcHMiLCJtb2RlbCIsIk9iamVjdCIsImRhdGEiLCJwcm9qZWN0UGxhbiIsImNyZWF0ZWQiLCJnZXRQcm9qZWN0UGxhbiIsIm1ldGhvZHMiLCIkYXhpb3MiLCJvcHRpb25zIiwidXJsIiwicmVxdWVzdCIsInByb2plY3RJZCIsIiRyb3V0ZXIiLCJjdXJyZW50Um91dGUiLCJwYXJhbXMiLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsImh0dHBDb2RlIiwiJE1lc3NhZ2UiLCJlcnJvciIsIm1zZyIsIiRjb25maWciLCJFUlJPUiIsImNhdGNoIiwiY2hhcmdlQ29sdW1ucyIsInRpdGxlIiwia2V5IiwicmVuZGVyIiwiaCIsInR5cGUiLCJtYXhsZW5ndGgiLCJjbGVhcmFibGUiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwib24iLCJjbGljayIsImNhcmRDb2x1bW5zIiwiZmluYW5jZURhdGEiLCJjaGFyZ2VEYXRhIiwiY2FyZERhdGEiLCJsb2Fuc0RhdGEiLCJsb2FuIiwiY2xpZW50IiwiY29tcG9uZW50cyIsImZpbmFuY2UiLCJzdWJtaXQiLCJjYW5jZWwiLCJiYXNpY0luZm9ybWF0aW9uIiwiY29sbGVjdFRhYjEiLCJtb3VudGVkIiwiJHJvb3QiLCJldmVudEh1YiIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7OztBQzNCQSwrREFBZTtBQUNYQSxXQUFPO0FBQ0hDLGVBQU9DO0FBREosS0FESTtBQUlYQyxRQUpXLGtCQUlKO0FBQ0gsZUFBTztBQUNIQyx5QkFBYSxFQURWLENBQ2M7QUFEZCxTQUFQO0FBR0gsS0FSVTtBQVNYQyxXQVRXLHFCQVNEO0FBQ04sYUFBS0MsY0FBTDtBQUNILEtBWFU7O0FBWVhDLGFBQVM7QUFDTEQsc0JBREssNEJBQ1c7QUFBQTs7QUFBRTtBQUNkLGlCQUFLRSxNQUFMLENBQVlDLE9BQVosQ0FBb0JDLEdBQXBCLEdBQTBCLGlEQUExQjtBQUNBLGlCQUFLRixNQUFMLENBQVlHLE9BQVosQ0FBb0I7QUFDaEJSLHNCQUFNO0FBQ0ZTLCtCQUFXLEtBQUtDLE9BQUwsQ0FBYUMsWUFBYixDQUEwQkMsTUFBMUIsQ0FBaUNDO0FBRDFDO0FBRFUsYUFBcEIsRUFJR0MsSUFKSCxDQUlRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixvQkFBSUEsU0FBU0MsUUFBVCxJQUFxQixHQUF6QixFQUE4QjtBQUMxQiwwQkFBS0MsUUFBTCxDQUFjQyxLQUFkLENBQW9CSCxTQUFTSSxHQUFULElBQWdCLE1BQUtDLE9BQUwsQ0FBYUMsS0FBakQ7QUFDQTtBQUNIO0FBQ0Qsc0JBQUtwQixXQUFMLEdBQW1CYyxTQUFTZixJQUFULENBQWMsQ0FBZCxDQUFuQjtBQUNILGFBVkQsRUFVR3NCLEtBVkgsQ0FVUyxVQUFDSixLQUFELEVBQVc7QUFDaEIsc0JBQUtELFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixNQUFLRSxPQUFMLENBQWFDLEtBQWpDO0FBQ0gsYUFaRDtBQWFIO0FBaEJJO0FBWkUsQ0FBZixFOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc0c7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxXQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdB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QUNIO0FBQ0QsdUJBQUtlLFdBQUwsQ0FBaUJDLFVBQWpCLEdBQThCdEIsU0FBU2YsSUFBdkM7QUFDSCxhQU5ELEVBTUdzQixLQU5ILENBTVMsVUFBQ0osS0FBRCxFQUFXO0FBQ2hCLHVCQUFLRCxRQUFMLENBQWNDLEtBQWQsQ0FBb0IsT0FBS0UsT0FBTCxDQUFhQyxLQUFqQztBQUNILGFBUkQ7QUFTSDtBQTlCSSxLQWpCRTtBQWlEWG5CLFdBakRXLHFCQWlERDtBQUNOLGFBQUs0QyxnQkFBTDtBQUNBLGFBQUtDLFdBQUw7QUFDSCxLQXBEVTtBQXFEWEMsV0FyRFcscUJBcUREO0FBQ04sYUFBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxLQUFwQixDQUEwQixZQUExQjtBQUNIO0FBdkRVLENBQWYsRSIsImZpbGUiOiIyMy5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdsb2FucycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtb2RlbFwiOiBfdm0ubG9hbnNEYXRhXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdmaW5hbmNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5maW5hbmNlRGF0YVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JhY2snLCB7XG4gICAgICAgICAgbmFtZTogJ2JhY2tsb2cnLFxuICAgICAgICAgIHBhcmFtczogX3ZtLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIOi/lOWbnlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgwqBcXG4gICAgICAgIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc3VibWl0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5o+Q5LqkXFxuICAgICAgICBcIildKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZmYTFjOTdiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNmZhMWM5N2JcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy9icmFuY2hGaW5hbmNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uL2NvbXBvbmVudHMvYnJhbmNoRmluYW5jZS5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmZhMWM5N2JcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vYnJhbmNoRmluYW5jZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvYnJhbmNoRmluYW5jZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBicmFuY2hGaW5hbmNlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZmExYzk3YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZmYTFjOTdiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9icmFuY2hGaW5hbmNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODczXG4vLyBtb2R1bGUgY2h1bmtzID0gMjMiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWw6IE9iamVjdFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3RQbGFuOiB7fSwgLy/pobnnm67lhrPorq5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRQcm9qZWN0UGxhbigpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFByb2plY3RQbGFuKCl7IC8vIOiOt+WPluWGs+iuruS/oeaBr1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Qcm9qUGxhbi9yZWFkL3F1ZXJ5QnlQcm9qZWN0SWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0UGxhbiA9IHJlc3BvbnNlLmRhdGFbMF07IFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9sb2Fucy5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvbG9hbnMuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTM2ZGJkZTFmXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2xvYW5zLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy90YWJzL2xvYW5zLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGxvYW5zLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNmRiZGUxZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM2ZGJkZTFmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWJzL2xvYW5zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA1IDYgMTYgMTcgMTggMjAgMjIgMjMgMjQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwibG9hblwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJsb2FuXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5pS+5qy+55Sz6K+35L+h5oGvXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWGs+iurue8luWPt1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg6aG555uu57yW5Y+3XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmlkIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5Yaz6K6u5pyJ5pWI5pyfXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWuouaIt+e7j+eQhlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcGx5VXNlck5hbWUgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDpg6jpl6hcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5hcHBseURlcHROYW1lIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5YCf5qy+5Lq6XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY2xpZW50ID8gX3ZtLm1vZGVsLmNsaWVudC5jbGllbnROYW1lIDogJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWAn+asvuS6uuivgeS7tuWPt1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNsaWVudC5jZXJ0aWZpY2F0ZXNOdW1iZXIgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlhbHlkIzlgJ/mrL7kurpcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5zcG91c2UgPyBfdm0ubW9kZWwuc3BvdXNlLmNsaWVudE5hbWUgOiAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWFseWQjOWAn+asvuS6uuivgeS7tuWPt1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmibnlpI3lgJ/mrL7ph5Hpop1cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5ldmFsUmVzdWx0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5om55aSN5YCf5qy+5pyf6ZmQXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucHJvamVjdFBsYW4ubG9hblBlcmlvZCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOaUvuasvuadoeS7tlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnByb2plY3RQbGFuLmxvYW5SZXF1aXJlbWVudCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg6L+Y5qy+5pa55byPXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucHJvamVjdFBsYW4ucmVwYXltZW50TWV0aG9kIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5YW25LuW6L+Y5qy+5pa55byPXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnByb2plY3RQbGFuLnJlcGF5bWVudFJlbWFyayB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5om55aSN5Yip546HKOaMieaciClcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wcm9qZWN0UGxhbi5wYXduUmF0ZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOaJueWkjei0ueeOh1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLnRvdGFsUmF0ZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOmjjumZqeetiee6p1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmnKzmrKHlgJ/mrL7ph5Hpop1cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5ldmFsUmVzdWx0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5pys5qyh5YCf5qy+5pyf6ZmQXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucHJvamVjdFBsYW4ubG9hblBlcmlvZCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOiuoeWIkuaUvuasvuaXpeacn1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zNmRiZGUxZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM2ZGJkZTFmXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvdGFicy9sb2Fucy52dWVcbi8vIG1vZHVsZSBpZCA9IDkxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDQgNSA2IDE2IDE3IDE4IDIwIDIyIDIzIDI0IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOntcbiAgICAgICAgbW9kZWw6T2JqZWN0XG4gICAgfSxcbiAgICBkYXRhKCl7XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIGNoYXJnZUNvbHVtbnM6IFt7dGl0bGU6ICfluo/lj7cnLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmlLbotLnpobnnm64nLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5Y+45pS26LS55biQ5Y+3Jywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5oiR5Y+45pS26LS55biQ5Y+3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5bqU5pS26YeR6aKdKOWFgyknLCBrZXk6ICcnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdJbnB1dE51bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5oiR5Y+45pS26LS55biQ5Y+3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5a6e5pS26YeR6aKdKOWFgyknLCBrZXk6ICcnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdJbnB1dE51bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5oiR5Y+45pS26LS55biQ5Y+3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pS26LS55pe26Ze0Jywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnRGF0ZVBpY2tlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfpgInmi6nmlLbotLnml7bpl7QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmlLbotLnmlrnlvI8nLCBrZXk6ICcnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdTZWxlY3QnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfpgInmi6nmlLbotLnmlrnlvI8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmlLblj5YnLCBrZXk6ICcnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdDaGVja2JveCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+ehruiupCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAn56Gu6K6kJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfotKLliqHnvJbnoIEnLCBrZXk6ICcnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdJbnB1dCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6LSi5Yqh57yW56CBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmlLbotLnlh63or4EnLCBrZXk6ICcnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2RpdicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ+afpeeciycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAn6YeN5paw5LiK5LygJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICfkuIrkvKAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY2FyZENvbHVtbnM6IFt7dGl0bGU6ICfpobnnm64nLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y2h5Y+3Jywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5Y2h5Y+3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pyJ5pWI5pyfJywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnRGF0ZVBpY2tlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+mAieaLqeacieaViOacnydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5byA5oi36ZO26KGMJywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5byA5oi36ZO26KGMJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pS25Y2h5pe26Ze0Jywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnRGF0ZVBpY2tlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+mAieaLqeacieaViOacnydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ehruiupOaUtuWPlicsIGtleTogJycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0NoZWNrYm94Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAn56Gu6K6kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sICfnoa7orqQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflpIfms6gnLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pS26LS55Yet6K+BJywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoKCdkaXYnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICfmn6XnnIsnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ+mHjeaWsOS4iuS8oCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAn5LiK5LygJylcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvZmluYW5jZS5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvZmluYW5jZS5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGEzNDdmZjZcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vZmluYW5jZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9maW5hbmNlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZpbmFuY2UudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRhMzQ3ZmY2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGEzNDdmZjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvZmluYW5jZS52dWVcbi8vIG1vZHVsZSBpZCA9IDk0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIDIzIDI2IDI3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImNoYXJnZVwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJjaGFyZ2VcIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDmlLbotLnkv6Hmga9cXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnSWNvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibWQtbGlzdFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAg5pS26LS56KGoKOe7vOWQiOi0ueeOh++8mjAuMDglKVxcbiAgICAgICAgICAgIFwiKSwgX2MoJ1RhYmxlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10NVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFcIjogX3ZtLm1vZGVsLmNoYXJnZURhdGEsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLmNoYXJnZUNvbHVtbnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1RhYmxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFcIjogX3ZtLm1vZGVsLmNhcmREYXRhLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jYXJkQ29sdW1uc1xuICAgIH1cbiAgfSldLCAxKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGEzNDdmZjZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00YTM0N2ZmNlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvZmluYW5jZS52dWVcbi8vIG1vZHVsZSBpZCA9IDk0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIwIDIzIDI2IDI3IiwiaW1wb3J0IGxvYW5zIGZyb20gJy4uL3ZpZXdzL3RhYnMvbG9hbnMnXG5pbXBvcnQgZmluYW5jZSBmcm9tICcuLi92aWV3cy90YWJzL2ZpbmFuY2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmluYW5jZURhdGE6IHtcbiAgICAgICAgICAgICAgICBjaGFyZ2VEYXRhOiBbXSxcbiAgICAgICAgICAgICAgICBjYXJkRGF0YTogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hbnNEYXRhOiB7XG4gICAgICAgICAgICAgICAgbG9hbjoge30sXG4gICAgICAgICAgICAgICAgY2xpZW50OiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAnbG9hbnMnOiBsb2FucyxcbiAgICAgICAgJ2ZpbmFuY2UnOiBmaW5hbmNlXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHN1Ym1pdCgpIHtcblxuICAgICAgICB9LFxuICAgICAgICBjYW5jZWwoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYmFzaWNJbmZvcm1hdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qZWN0L3JlYWQvZGV0YWlsJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtpZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2Fuc0RhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbGxlY3RUYWIxKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Qcm9qRmVlL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7cHJvamVjdElkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZpbmFuY2VEYXRhLmNoYXJnZURhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuYmFzaWNJbmZvcm1hdGlvbigpO1xuICAgICAgICB0aGlzLmNvbGxlY3RUYWIxKCk7XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRlbWl0KCdicmVhZGNydW1iJyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2JyYW5jaEZpbmFuY2UuanMiXSwic291cmNlUm9vdCI6IiJ9