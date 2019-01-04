webpackJsonp([18],{

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('loans', {
    attrs: {
      "model": _vm.model
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('lending'), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "contract"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "contract",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                签约对象\n            ")]), _vm._v(" "), _c('Table', {
    attrs: {
      "slot": "content",
      "data": _vm.contractData,
      "columns": _vm.contractColumns
    },
    slot: "content"
  })], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "charge"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "charge",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                收费信息(不含前期已收取的业务办理费用)\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Icon', {
    attrs: {
      "type": "md-list"
    }
  }), _vm._v("\n                收费计划表(综合费率：0.08%)\n                "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "data": _vm.chargeData,
      "columns": _vm.chargeColumns
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "fair"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "fair",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                公正抵押信息\n            ")]), _vm._v(" "), _c('Table', {
    attrs: {
      "slot": "content",
      "data": _vm.fairData,
      "columns": _vm.fairColumns
    },
    slot: "content"
  })], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Form', {
    ref: "loan",
    attrs: {
      "label-width": 100
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.submit($event)
      }
    }
  }, [_c('Collapse', {
    attrs: {
      "value": "loan"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "loan",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    客户放款账号\n                ")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                                    账户\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择放款账户名 | 必填",
      "clearable": ""
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
  }, [_vm._v("\n                                    账号\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "放款账号 | 必填",
      "clearable": ""
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
  }, [_vm._v("\n                                    账号确认\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "放款账号确认 | 必填",
      "clearable": ""
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
  }, [_vm._v("\n                                    账号银行\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择放款账号银行 | 必填",
      "clearable": ""
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    银行卡复印件\n                                ")]), _vm._v(" "), _c('Upload', {
    attrs: {
      "action": _vm.$config.uploadUrl
    }
  }, [_c('Button', {
    attrs: {
      "icon": "md-cloud-upload"
    }
  }, [_vm._v("\n                                        上传文件\n                                    ")])], 1)], 1)], 1)], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "repayment"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "repayment",
      "hide-arrow": true
    }
  }, [_c('label', [_c('strong', [_vm._v("\n                        客户还款账号\n                    ")]), _vm._v("\n                     \n                    "), _c('Checkbox', [_vm._v("\n                        和客户放款账号相同\n                    ")])], 1), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                                    账户\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择放款账户名 | 必填",
      "clearable": ""
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
  }, [_vm._v("\n                                    账号\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "放款账号 | 必填",
      "clearable": ""
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
  }, [_vm._v("\n                                    账号确认\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "放款账号确认 | 必填",
      "clearable": ""
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
  }, [_vm._v("\n                                    代扣\n                                ")]), _vm._v(" "), _c('RadioGroup', [_c('Radio', [_vm._v("是")]), _vm._v(" "), _c('Radio', [_vm._v("否")])], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    账号银行\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择放款账号银行 | 必填",
      "clearable": ""
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            银行卡复印件\n                        ")]), _vm._v(" "), _c('Upload', {
    attrs: {
      "action": _vm.$config.uploadUrl
    }
  }, [_c('Button', {
    attrs: {
      "icon": "md-cloud-upload"
    }
  }, [_vm._v("\n                                上传文件\n                            ")])], 1)], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "pay"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "pay",
      "hide-arrow": true
    }
  }, [_c('label', [_c('strong', [_vm._v("\n                        客户缴费账号\n                    ")]), _vm._v("\n                     \n                    "), _c('Checkbox', [_vm._v("\n                        和客户放款账号相同\n                    ")])], 1), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                                    账户\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择放款账户名 | 必填",
      "clearable": ""
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
  }, [_vm._v("\n                                    账号\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "放款账号 | 必填",
      "clearable": ""
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
  }, [_vm._v("\n                                    账号确认\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "放款账号确认 | 必填",
      "clearable": ""
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
  }, [_vm._v("\n                                    代扣\n                                ")]), _vm._v(" "), _c('RadioGroup', [_c('Radio', [_vm._v("是")]), _vm._v(" "), _c('Radio', [_vm._v("否")])], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    账号银行\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择放款账号银行 | 必填",
      "clearable": ""
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            银行卡复印件\n                        ")]), _vm._v(" "), _c('Upload', {
    attrs: {
      "action": _vm.$config.uploadUrl
    }
  }, [_c('Button', {
    attrs: {
      "icon": "md-cloud-upload"
    }
  }, [_vm._v("\n                                上传文件\n                            ")])], 1)], 1)], 1)])], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('plan'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
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
     __webpack_require__(202).rerender("data-v-4c7f2f6d", module.exports)
  }
}

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(994),
  /* template */
  __webpack_require__(1136),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/contractElement.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] contractElement.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c7f2f6d", Component.options)
  } else {
    hotAPI.reload("data-v-4c7f2f6d", Component.options)
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

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loanPlan: {}
        };
    },
    created: function created() {},

    methods: {
        getLoanPlan: function getLoanPlan() {
            var _this = this;

            this.$axios.options.url = '/houseMortgage/hmLoanApply/read/list';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.loanPlan = response.data.list[0];
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        }
    }

});

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(926),
  /* template */
  __webpack_require__(930),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/lending.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] lending.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3870c82f", Component.options)
  } else {
    hotAPI.reload("data-v-3870c82f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "lending"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "lending",
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
  }, [_vm._v("\n                    合作机构\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.loanPlan.trustplanId || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    信托计划\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.loanPlan.trustplanId || ' ') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    贷款产品\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.loanPlan.productName || ' ') + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    资金来源备注\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n                     " + _vm._s(_vm.loanPlan.remark || ' ') + "\n                ")])], 1)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-3870c82f", module.exports)
  }
}

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_loans__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_loans___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_loans__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_plan__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_plan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_plan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_lending__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_lending___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_tabs_lending__);




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: {
                loan: {},
                client: {}
            },
            contractData: [],
            contractColumns: [{ title: '签约对象', key: '' }, { title: '证件类型', key: '' }, { title: '证件号', key: '' }, { title: '借款人', key: '' }, { title: '与借款人关系', key: '' }, { title: '备注', key: '' }],
            chargeData: [],
            chargeColumns: [{
                title: '期数', key: '', render: function render(h, params) {
                    return h('InputNumber', {
                        style: {
                            width: '189px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '期数'
                        }
                    });
                }
            }, {
                title: '收费时间', key: '', render: function render(h, params) {
                    return h('DatePicker', {
                        props: {
                            type: date,
                            placeholder: '选择收费时间',
                            clearable: true
                        }
                    });
                }
            }, {
                title: '金额(元)', key: '', render: function render(h, params) {
                    return h('InputNumber', {
                        style: {
                            width: '189px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '期数'
                        }
                    });
                }
            }, {
                title: '借款人', key: ''
            }, {
                title: '收费机构', key: '', render: function render(h, params) {
                    return h('Select', {
                        props: {
                            placeholder: '选择收费机构',
                            clearable: true
                        }
                    }, []);
                }
            }, { title: '收费帐号', key: '', render: function render(h, params) {
                    return h('Input', {
                        props: {
                            type: text,
                            placeholder: '收费帐号',
                            clearable: true
                        }
                    });
                } }],
            fairData: [],
            fairColumns: [{ title: '房屋类型', key: '' }, { title: '房产证号', key: '' }, { title: '产权人', key: '' }, { title: '评估价值(元)', key: '' }]
        };
    },

    components: {
        'loans': __WEBPACK_IMPORTED_MODULE_0__views_tabs_loans___default.a,
        'plan': __WEBPACK_IMPORTED_MODULE_1__views_tabs_plan___default.a,
        'lending': __WEBPACK_IMPORTED_MODULE_2__views_tabs_lending___default.a
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29udHJhY3RFbGVtZW50LnZ1ZT80MmFiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb250cmFjdEVsZW1lbnQudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvbG9hbnMuanM/YjMxOCoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvbG9hbnMudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2xvYW5zLnZ1ZT9iM2NlKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9wbGFuLmpzP2YxNWIqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL3BsYW4udnVlPzBlYTUqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL3BsYW4udnVlPzFiZGIqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2xlbmRpbmcuanM/NGRhNyoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9sZW5kaW5nLnZ1ZT9kYjI2KioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2xlbmRpbmcudnVlP2U3OTkqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRyYWN0RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsIm1vZGVsIiwiT2JqZWN0IiwiZGF0YSIsInByb2plY3RQbGFuIiwiY3JlYXRlZCIsImdldFByb2plY3RQbGFuIiwibWV0aG9kcyIsIiRheGlvcyIsIm9wdGlvbnMiLCJ1cmwiLCJyZXF1ZXN0IiwicHJvamVjdElkIiwiJHJvdXRlciIsImN1cnJlbnRSb3V0ZSIsInBhcmFtcyIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwiaHR0cENvZGUiLCIkTWVzc2FnZSIsImVycm9yIiwibXNnIiwiJGNvbmZpZyIsIkVSUk9SIiwiY2F0Y2giLCJyZXBheW1lbnREYXRhIiwicmVwYXltZW50Q29sdW1ucyIsInRpdGxlIiwia2V5IiwiZ2V0TG9hblBsYW4iLCJsaXN0IiwibG9hblBsYW4iLCJsb2FuIiwiY2xpZW50IiwiY29udHJhY3REYXRhIiwiY29udHJhY3RDb2x1bW5zIiwiY2hhcmdlRGF0YSIsImNoYXJnZUNvbHVtbnMiLCJyZW5kZXIiLCJoIiwic3R5bGUiLCJ3aWR0aCIsIm1heGxlbmd0aCIsImNsZWFyYWJsZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsImRhdGUiLCJ0ZXh0IiwiZmFpckRhdGEiLCJmYWlyQ29sdW1ucyIsImNvbXBvbmVudHMiLCJsZW5kaW5nIiwic3VibWl0IiwiY2FuY2VsIiwibG9hZE1vZGVsIiwiZ2V0Q2xpZW50IiwiY2xpZW50SWQiLCJtb3VudGVkIiwiJHJvb3QiLCJldmVudEh1YiIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdHQUFnRyxhQUFhO0FBQzdHO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQy9ZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7OztBQzNCQSwrREFBZTtBQUNYQSxXQUFPO0FBQ0hDLGVBQU9DO0FBREosS0FESTtBQUlYQyxRQUpXLGtCQUlKO0FBQ0gsZUFBTztBQUNIQyx5QkFBYSxFQURWLENBQ2M7QUFEZCxTQUFQO0FBR0gsS0FSVTtBQVNYQyxXQVRXLHFCQVNEO0FBQ04sYUFBS0MsY0FBTDtBQUNILEtBWFU7O0FBWVhDLGFBQVM7QUFDTEQsc0JBREssNEJBQ1c7QUFBQTs7QUFBRTtBQUNkLGlCQUFLRSxNQUFMLENBQVlDLE9BQVosQ0FBb0JDLEdBQXBCLEdBQTBCLGlEQUExQjtBQUNBLGlCQUFLRixNQUFMLENBQVlHLE9BQVosQ0FBb0I7QUFDaEJSLHNCQUFNO0FBQ0ZTLCtCQUFXLEtBQUtDLE9BQUwsQ0FBYUMsWUFBYixDQUEwQkMsTUFBMUIsQ0FBaUNDO0FBRDFDO0FBRFUsYUFBcEIsRUFJR0MsSUFKSCxDQUlRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixvQkFBSUEsU0FBU0MsUUFBVCxJQUFxQixHQUF6QixFQUE4QjtBQUMxQiwwQkFBS0MsUUFBTCxDQUFjQyxLQUFkLENBQW9CSCxTQUFTSSxHQUFULElBQWdCLE1BQUtDLE9BQUwsQ0FBYUMsS0FBakQ7QUFDQTtBQUNIO0FBQ0Qsc0JBQUtwQixXQUFMLEdBQW1CYyxTQUFTZixJQUFULENBQWMsQ0FBZCxDQUFuQjtBQUNILGFBVkQsRUFVR3NCLEtBVkgsQ0FVUyxVQUFDSixLQUFELEVBQVc7QUFDaEIsc0JBQUtELFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixNQUFLRSxPQUFMLENBQWFDLEtBQWpDO0FBQ0gsYUFaRDtBQWFIO0FBaEJJO0FBWkUsQ0FBZixFOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc0c7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxXQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFD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T0FBWixDQUFvQixFQUFDUixNQUFNLEVBQUNhLElBQUl5QyxRQUFMLEVBQVAsRUFBcEIsRUFBNEN4QyxJQUE1QyxDQUFpRCxVQUFDQyxRQUFELEVBQWM7QUFDM0Qsb0JBQUlBLFNBQVNDLFFBQVQsSUFBcUIsR0FBekIsRUFBOEI7QUFDMUIsMkJBQUtDLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkgsU0FBU0ksR0FBVCxJQUFnQixPQUFLQyxPQUFMLENBQWFDLEtBQWpEO0FBQ0E7QUFDSDtBQUNELHVCQUFLdkIsS0FBTCxDQUFXaUMsTUFBWCxHQUFvQmhCLFNBQVNmLElBQTdCO0FBQ0gsYUFORCxFQU1Hc0IsS0FOSCxDQU1TLFVBQUNKLEtBQUQsRUFBVztBQUNoQix1QkFBS0QsUUFBTCxDQUFjQyxLQUFkLENBQW9CLE9BQUtFLE9BQUwsQ0FBYUMsS0FBakM7QUFDSCxhQVJEO0FBU0g7QUEvQkksS0FuRkU7QUFvSFhuQixXQXBIVyxxQkFvSEQ7QUFDTixhQUFLa0QsU0FBTDtBQUNILEtBdEhVO0FBdUhYRyxXQXZIVyxxQkF1SEQ7QUFDTixhQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLEtBQXBCLENBQTBCLFlBQTFCO0FBQ0g7QUF6SFUsQ0FBZixFIiwiZmlsZSI6IjE4LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2xvYW5zJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbGVuZGluZycpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiY29udHJhY3RcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiY29udHJhY3RcIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg562+57qm5a+56LGhXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiLFxuICAgICAgXCJkYXRhXCI6IF92bS5jb250cmFjdERhdGEsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLmNvbnRyYWN0Q29sdW1uc1xuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiY2hhcmdlXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImNoYXJnZVwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDmlLbotLnkv6Hmga8o5LiN5ZCr5YmN5pyf5bey5pS25Y+W55qE5Lia5Yqh5Yqe55CG6LS555SoKVxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnSWNvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibWQtbGlzdFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOaUtui0ueiuoeWIkuihqCjnu7zlkIjotLnnjofvvJowLjA4JSlcXG4gICAgICAgICAgICAgICAgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQ1XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YVwiOiBfdm0uY2hhcmdlRGF0YSxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY2hhcmdlQ29sdW1uc1xuICAgIH1cbiAgfSldLCAxKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJmYWlyXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImZhaXJcIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5YWs5q2j5oq15oq85L+h5oGvXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiLFxuICAgICAgXCJkYXRhXCI6IF92bS5mYWlyRGF0YSxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uZmFpckNvbHVtbnNcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtJywge1xuICAgIHJlZjogXCJsb2FuXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWwtd2lkdGhcIjogMTAwXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJrZXl1cFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCEoJ2J1dHRvbicgaW4gJGV2ZW50KSAmJiBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIikpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImxvYW5cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwibG9hblwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5a6i5oi35pS+5qy+6LSm5Y+3XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0puaIt1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLpgInmi6nmlL7mrL7otKbmiLflkI0gfCDlv4XloatcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6LSm5Y+3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5pS+5qy+6LSm5Y+3IHwg5b+F5aGrXCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0puWPt+ehruiupFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuaUvuasvui0puWPt+ehruiupCB8IOW/heWhq1wiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6LSm5Y+36ZO26KGMXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumAieaLqeaUvuasvui0puWPt+mTtuihjCB8IOW/heWhq1wiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxNlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6ZO26KGM5Y2h5aSN5Y2w5Lu2XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1VwbG9hZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3Rpb25cIjogX3ZtLiRjb25maWcudXBsb2FkVXJsXG4gICAgfVxuICB9LCBbX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwibWQtY2xvdWQtdXBsb2FkXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5LiK5Lyg5paH5Lu2XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSldLCAxKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInJlcGF5bWVudFwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJyZXBheW1lbnRcIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5a6i5oi36L+Y5qy+6LSm5Y+3XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDCoFxcbiAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygnQ2hlY2tib3gnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5ZKM5a6i5oi35pS+5qy+6LSm5Y+355u45ZCMXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0puaIt1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLpgInmi6nmlL7mrL7otKbmiLflkI0gfCDlv4XloatcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6LSm5Y+3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5pS+5qy+6LSm5Y+3IHwg5b+F5aGrXCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0puWPt+ehruiupFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuaUvuasvui0puWPt+ehruiupCB8IOW/heWhq1wiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Luj5omjXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JhZGlvR3JvdXAnLCBbX2MoJ1JhZGlvJywgW192bS5fdihcIuaYr1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnUmFkaW8nLCBbX3ZtLl92KFwi5ZCmXCIpXSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0puWPt+mTtuihjFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLpgInmi6nmlL7mrL7otKblj7fpk7booYwgfCDlv4XloatcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6ZO26KGM5Y2h5aSN5Y2w5Lu2XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdVcGxvYWQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWN0aW9uXCI6IF92bS4kY29uZmlnLnVwbG9hZFVybFxuICAgIH1cbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIm1kLWNsb3VkLXVwbG9hZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuIrkvKDmlofku7ZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicGF5XCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcInBheVwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqLmiLfnvLTotLnotKblj7dcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIMKgXFxuICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCdDaGVja2JveCcsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlkozlrqLmiLfmlL7mrL7otKblj7fnm7jlkIxcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6LSm5oi3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumAieaLqeaUvuasvui0puaIt+WQjSB8IOW/heWhq1wiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDotKblj7dcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLmlL7mrL7otKblj7cgfCDlv4XloatcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6LSm5Y+356Gu6K6kXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5pS+5qy+6LSm5Y+356Gu6K6kIHwg5b+F5aGrXCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDku6PmiaNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnUmFkaW9Hcm91cCcsIFtfYygnUmFkaW8nLCBbX3ZtLl92KFwi5pivXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdSYWRpbycsIFtfdm0uX3YoXCLlkKZcIildKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6LSm5Y+36ZO26KGMXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumAieaLqeaUvuasvui0puWPt+mTtuihjCB8IOW/heWhq1wiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDpk7booYzljaHlpI3ljbDku7ZcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1VwbG9hZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3Rpb25cIjogX3ZtLiRjb25maWcudXBsb2FkVXJsXG4gICAgfVxuICB9LCBbX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwibWQtY2xvdWQtdXBsb2FkXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS4iuS8oOaWh+S7tlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldLCAxKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdwbGFuJyksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ0J1dHRvbicsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRyb290LmV2ZW50SHViLiRlbWl0KCdiYWNrJywge1xuICAgICAgICAgIG5hbWU6ICdiYWNrbG9nJyxcbiAgICAgICAgICBwYXJhbXM6IF92bS4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXNcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDov5Tlm55cXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgIMKgXFxuICAgICAgICBcIiksIF9jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIndhcm5pbmdcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNhbmNlbFxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIOmAgOWbnlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgwqBcXG4gICAgICAgIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc3VibWl0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5o+Q5LqkXFxuICAgICAgICBcIildKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGM3ZjJmNmRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00YzdmMmY2ZFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL2NvbnRyYWN0RWxlbWVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi9jb21wb25lbnRzL2NvbnRyYWN0RWxlbWVudC5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGM3ZjJmNmRcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vY29udHJhY3RFbGVtZW50LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy9jb250cmFjdEVsZW1lbnQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY29udHJhY3RFbGVtZW50LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00YzdmMmY2ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRjN2YyZjZkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9jb250cmFjdEVsZW1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSA4Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBtb2RlbDogT2JqZWN0XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvamVjdFBsYW46IHt9LCAvL+mhueebruWGs+iurlxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmdldFByb2plY3RQbGFuKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0UHJvamVjdFBsYW4oKXsgLy8g6I635Y+W5Yaz6K6u5L+h5oGvXG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obVByb2pQbGFuL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RQbGFuID0gcmVzcG9uc2UuZGF0YVswXTsgXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YWJzL2xvYW5zLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9sb2Fucy5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzZkYmRlMWZcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vbG9hbnMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3RhYnMvbG9hbnMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbG9hbnMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM2ZGJkZTFmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzZkYmRlMWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvbG9hbnMudnVlXG4vLyBtb2R1bGUgaWQgPSA5MTVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDUgNiAxNiAxNyAxOCAyMCAyMiAyMyAyNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJsb2FuXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImxvYW5cIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDmlL7mrL7nlLPor7fkv6Hmga9cXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5Yaz6K6u57yW5Y+3XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDpobnnm67nvJblj7dcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaWQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlhrPorq7mnInmlYjmnJ9cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5a6i5oi357uP55CGXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwbHlVc2VyTmFtZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOmDqOmXqFxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcGx5RGVwdE5hbWUgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlgJ/mrL7kurpcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jbGllbnQgPyBfdm0ubW9kZWwuY2xpZW50LmNsaWVudE5hbWUgOiAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5YCf5qy+5Lq66K+B5Lu25Y+3XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY2xpZW50LmNlcnRpZmljYXRlc051bWJlciB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWFseWQjOWAn+asvuS6ulxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLnNwb3VzZSA/IF92bS5tb2RlbC5zcG91c2UuY2xpZW50TmFtZSA6ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5YWx5ZCM5YCf5qy+5Lq66K+B5Lu25Y+3XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOaJueWkjeWAn+asvumHkeminVxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmV2YWxSZXN1bHQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmibnlpI3lgJ/mrL7mnJ/pmZBcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wcm9qZWN0UGxhbi5sb2FuUGVyaW9kIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5pS+5qy+5p2h5Lu2XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucHJvamVjdFBsYW4ubG9hblJlcXVpcmVtZW50IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDov5jmrL7mlrnlvI9cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wcm9qZWN0UGxhbi5yZXBheW1lbnRNZXRob2QgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlhbbku5bov5jmrL7mlrnlvI9cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucHJvamVjdFBsYW4ucmVwYXltZW50UmVtYXJrIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmibnlpI3liKnnjoco5oyJ5pyIKVxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnByb2plY3RQbGFuLnBhd25SYXRlIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5om55aSN6LS5546HXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwudG90YWxSYXRlIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg6aOO6Zmp562J57qnXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOacrOasoeWAn+asvumHkeminVxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmV2YWxSZXN1bHQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmnKzmrKHlgJ/mrL7mnJ/pmZBcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wcm9qZWN0UGxhbi5sb2FuUGVyaW9kIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg6K6h5YiS5pS+5qy+5pel5pyfXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM2ZGJkZTFmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzZkYmRlMWZcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL2xvYW5zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA1IDYgMTYgMTcgMTggMjAgMjIgMjMgMjQiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpe1xuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICByZXBheW1lbnREYXRhOltdLFxuICAgICAgICAgICAgcmVwYXltZW50Q29sdW1uczpbe3RpdGxlOifmnJ/mlbAnLGtleTonY3VyclBlcmlvZCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTon6L+Y5qy+5pel5pyfJyxrZXk6J3JlcGF5RGF0ZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTon5bqU6L+Y5pys6YeRKOWFgyknLGtleToncmVwYXlQcmluY2lwYWwnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6J+W6lOi/mOWIqeaBryjlhYMpJyxrZXk6J3JlcGF5SW50ZXJlc3QnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6J+acrOaBr+WQiOiuoSjlhYMpJyxrZXk6J3JlcGF5QW1vdW50J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiforrDmga/lpKnmlbAnLGtleTonaW50ZXJlc3REYXlzJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOifliankvZnmnKzph5Eo5YWDKScsa2V5OidsZWZ0UHJpbmNpcGFsJ31dXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgdGhpcy5nZXRMb2FuUGxhbih0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0TG9hblBsYW4oaWQpe1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Mb2FuUGxhbi9yZWFkL2xpc3QnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IGlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBheW1lbnREYXRhID0gcmVzcG9uc2UuZGF0YS5saXN0OyBcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvcGxhbi5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvcGxhbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2YyZjk1ODZcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vcGxhbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9wbGFuLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBsYW4udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdmMmY5NTg2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2YyZjk1ODZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvcGxhbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQgNSA2IDE2IDE3IDE4IDE5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInBsYW5cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwicGxhblwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIOi/mOasvuiuoeWIkuihqOmihOiniFxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiLFxuICAgICAgXCJkYXRhXCI6IF92bS5yZXBheW1lbnREYXRhLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5yZXBheW1lbnRDb2x1bW5zXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9KV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2YyZjk1ODZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03ZjJmOTU4NlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvcGxhbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgNSA2IDE2IDE3IDE4IDE5IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKXtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgbG9hblBsYW46IHt9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKXtcblxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRMb2FuUGxhbigpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htTG9hbkFwcGx5L3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7cHJvamVjdElkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxvYW5QbGFuID0gcmVzcG9uc2UuZGF0YS5saXN0WzBdO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9sZW5kaW5nLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9sZW5kaW5nLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zODcwYzgyZlxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9sZW5kaW5nLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy90YWJzL2xlbmRpbmcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbGVuZGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzg3MGM4MmZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zODcwYzgyZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9sZW5kaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA1IDYgMTcgMTggMjIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwibGVuZGluZ1wiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJsZW5kaW5nXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5pS+5qy+55Sz6K+35L+h5oGvXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWQiOS9nOacuuaehFxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxvYW5QbGFuLnRydXN0cGxhbklkIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5L+h5omY6K6h5YiSXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubG9hblBsYW4udHJ1c3RwbGFuSWQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDotLfmrL7kuqflk4FcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sb2FuUGxhbi5wcm9kdWN0TmFtZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg6LWE6YeR5p2l5rqQ5aSH5rOoXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjFcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sb2FuUGxhbi5yZW1hcmsgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM4NzBjODJmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzg3MGM4MmZcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL2xlbmRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSA5MzBcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDUgNiAxNyAxOCAyMiIsImltcG9ydCBsb2FucyBmcm9tICcuLi92aWV3cy90YWJzL2xvYW5zJ1xuaW1wb3J0IHBsYW4gZnJvbSAnLi4vdmlld3MvdGFicy9wbGFuJ1xuaW1wb3J0IGxlbmRpbmcgZnJvbSAnLi4vdmlld3MvdGFicy9sZW5kaW5nJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgbG9hbjoge30sXG4gICAgICAgICAgICAgICAgY2xpZW50OiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRyYWN0RGF0YTogW10sXG4gICAgICAgICAgICBjb250cmFjdENvbHVtbnM6IFt7dGl0bGU6ICfnrb7nuqblr7nosaEnLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfor4Hku7bnsbvlnosnLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfor4Hku7blj7cnLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflgJ/mrL7kuronLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfkuI7lgJ/mrL7kurrlhbPns7snLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflpIfms6gnLCBrZXk6ICcnfV0sXG4gICAgICAgICAgICBjaGFyZ2VEYXRhOiBbXSxcbiAgICAgICAgICAgIGNoYXJnZUNvbHVtbnM6IFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmnJ/mlbAnLCBrZXk6ICcnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0lucHV0TnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzE4OXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfmnJ/mlbAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5pS26LS55pe26Ze0Jywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdEYXRlUGlja2VyJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6YCJ5oup5pS26LS55pe26Ze0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfph5Hpop0o5YWDKScsIGtleTogJycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXROdW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTg5cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+acn+aVsCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflgJ/mrL7kuronLCBrZXk6ICcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmlLbotLnmnLrmnoQnLCBrZXk6ICcnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ1NlbGVjdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfpgInmi6nmlLbotLnmnLrmnoQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7dGl0bGU6ICfmlLbotLnluJDlj7cnLCBrZXk6ICcnLCByZW5kZXI6KGgsIHBhcmFtcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0lucHV0Jyx7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTp0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifmlLbotLnluJDlj7cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTp0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfX1dLFxuICAgICAgICAgICAgZmFpckRhdGE6IFtdLFxuICAgICAgICAgICAgZmFpckNvbHVtbnM6IFt7dGl0bGU6ICfmiL/lsYvnsbvlnosnLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmiL/kuqfor4Hlj7cnLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfkuqfmnYPkuronLCBrZXk6ICcnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfor4TkvLDku7flgLwo5YWDKScsIGtleTogJyd9XVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICdsb2Fucyc6IGxvYW5zLFxuICAgICAgICAncGxhbic6IHBsYW4sXG4gICAgICAgICdsZW5kaW5nJzogbGVuZGluZ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzdWJtaXQoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRNb2RlbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qZWN0L3JlYWQvZGV0YWlsJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtpZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDbGllbnQocmVzcG9uc2UuZGF0YS5jbGllbnRJZClcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDbGllbnQoY2xpZW50SWQpe1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1DbGllbnQvcmVhZC9kZXRhaWwnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2lkOiBjbGllbnRJZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmNsaWVudCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkTW9kZWwoKVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC5ldmVudEh1Yi4kZW1pdCgnYnJlYWRjcnVtYicpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb250cmFjdEVsZW1lbnQuanMiXSwic291cmNlUm9vdCI6IiJ9