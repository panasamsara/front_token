webpackJsonp([21],{

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object,
        dic: Object,
        tab: Object
    },
    data: function data() {
        return {
            summary: []
        };
    },

    methods: {
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjSdh/read/list';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                response.data.list.forEach(function (item, index) {
                    item.isLast = index === response.data.list.length - 1;
                });
                _this.summary = response.data.list;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        change: function change(value) {
            this.tab.isShow = value === 1;
        }
    },
    created: function created() {
        this.loadModel();
    }
});

/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1052),
  /* template */
  __webpack_require__(1135),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/opinionOfLoan.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] opinionOfLoan.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b4271b6", Component.options)
  } else {
    hotAPI.reload("data-v-4b4271b6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "summary"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "summary",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                贷审会意见汇总\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, _vm._l((_vm.summary), function(item) {
    return _c('div', [_c('Row', [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "2"
      }
    }, [_vm._v("\n                            贷审会委员\n                        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "6"
      }
    }, [_vm._v("\n                            " + _vm._s(item.auditUser) + "\n                        ")]), _vm._v(" "), _c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "2"
      }
    }, [_vm._v("\n                            审议结论\n                        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "6"
      }
    }, [_vm._v("\n                            " + _vm._s(item.auditResult) + "\n                        ")]), _vm._v(" "), _c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "2"
      }
    }, [_vm._v("\n                            贷审会日期\n                        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "6"
      }
    }, [_vm._v("\n                            " + _vm._s(item.auditDate) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "2"
      }
    }, [_vm._v("\n                            贷审会委员意见\n                        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "22"
      }
    }, [_vm._v("\n                            " + _vm._s(item.auditDescription) + "\n                        ")])], 1), _vm._v(" "), (!item.isLast) ? _c('Divider') : _vm._e()], 1)
  }))])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "conclusion"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "conclusion",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                贷审会结论\n            ")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                                同意人数\n                            ")]), _vm._v("\n                            " + _vm._s(_vm.model.dshAgreeNum) + "\n                        ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                否决人数\n                            ")]), _vm._v("\n                            " + _vm._s(_vm.model.dshRejectNum) + "\n                        ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                退回人数\n                            ")]), _vm._v("\n                            " + _vm._s(_vm.model.dshRetreatNum) + "\n                        ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "dshResult"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                        贷审会结论\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "选择贷审会结论 | 必填",
      "clearable": ""
    },
    on: {
      "on-change": _vm.change
    },
    model: {
      value: (_vm.model.dshResult),
      callback: function($$v) {
        _vm.$set(_vm.model, "dshResult", $$v)
      },
      expression: "model.dshResult"
    }
  }, _vm._l((_vm.dic.result), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1), _vm._v(" "), (_vm.model.dshResult === 0) ? _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "退回节点",
      "clearable": ""
    }
  })], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                        贷审会意见汇总\n                    ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "placeholder": "贷审会意见汇总",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.hmProjectClob.dshDesc),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "dshDesc", $$v)
      },
      expression: "model.hmProjectClob.dshDesc"
    }
  })], 1)], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-4b4271b6", module.exports)
  }
}

/***/ }),

/***/ 1170:
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
    return (item.isShow) ? _c('TabPane', {
      key: item.id,
      attrs: {
        "name": item.id,
        "label": item.text
      }
    }) : _vm._e()
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
  }, [_vm._v("\n                返回\n            ")]), _vm._v(" "), (_vm.model.disabled && _vm.tabName === 'conceptualDesign') ? _c('Button', {
    attrs: {
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.model.disabled = false
      }
    }
  }, [_vm._v("\n                编辑\n            ")]) : _vm._e(), _vm._v(" "), _c('Button', {
    attrs: {
      "loading": _vm.isSubmit,
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
      "tab": _vm.tabs[1],
      "dic": _vm.dic,
      "model": _vm.model
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-b7821ce0", module.exports)
  }
}

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(999),
  /* template */
  __webpack_require__(1170),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/draftResolution.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] draftResolution.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7821ce0", Component.options)
  } else {
    hotAPI.reload("data-v-b7821ce0", Component.options)
  }
})()}

module.exports = Component.exports


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

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_opinionOfLoan__ = __webpack_require__(1092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_opinionOfLoan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_opinionOfLoan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_conceptualDesign__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_conceptualDesign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_conceptualDesign__);



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            dic: {
                result: [{ id: 1, text: '同意' }, { id: 2, text: '否决' }, { id: 0, text: '退回' }]
            },
            model: {
                hmProjectClob: {},
                disabled: true
            },
            isSubmit: false,
            tabName: 'opinionOfLoan',
            tabs: [{ id: 'opinionOfLoan', text: '贷审会意见', isShow: true }, { id: 'conceptualDesign', text: '起草决议', isShow: false }],
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
                'dshResult': [{ required: true, message: '贷审会结论不能为空' }]
            }
        };
    },

    computed: {
        currentTabComponent: function currentTabComponent() {
            return this.tabName;
        }
    },
    components: {
        'opinionOfLoan': __WEBPACK_IMPORTED_MODULE_0__views_tabs_opinionOfLoan___default.a,
        'conceptualDesign': __WEBPACK_IMPORTED_MODULE_1__views_tabs_conceptualDesign___default.a
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
                response.data.hmProjectClob = {};
                response.data.hmProjPlanrequire = null;
                response.data.disabled = true;
                _this.model = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        submit: function submit() {
            var _this2 = this;

            this.$refs.approval.validate(function (valid) {
                if (valid) {
                    _this2.isSubmit = true;
                    _this2.$axios.options.url = 'houseMortgage/hmProject/drawdecision';
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
        this.loadModel();
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
    }
});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL29waW5pb25PZkxvYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvb3Bpbmlvbk9mTG9hbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvb3Bpbmlvbk9mTG9hbi52dWU/MzQyNCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZHJhZnRSZXNvbHV0aW9uLnZ1ZT8xNTE5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kcmFmdFJlc29sdXRpb24udnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvY29uY2VwdHVhbERlc2lnbi5qcz9hZWFjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2NvbmNlcHR1YWxEZXNpZ24udnVlPzFlOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvY29uY2VwdHVhbERlc2lnbi52dWU/MmJkNSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJhZnRSZXNvbHV0aW9uLmpzIl0sIm5hbWVzIjpbInByb3BzIiwibW9kZWwiLCJPYmplY3QiLCJkaWMiLCJ0YWIiLCJkYXRhIiwic3VtbWFyeSIsIm1ldGhvZHMiLCJsb2FkTW9kZWwiLCIkYXhpb3MiLCJvcHRpb25zIiwidXJsIiwicmVxdWVzdCIsInByb2plY3RJZCIsIiRyb3V0ZXIiLCJjdXJyZW50Um91dGUiLCJwYXJhbXMiLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsImh0dHBDb2RlIiwiJE1lc3NhZ2UiLCJlcnJvciIsIm1zZyIsIiRjb25maWciLCJFUlJPUiIsImxpc3QiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiaXNMYXN0IiwibGVuZ3RoIiwiY2F0Y2giLCJjaGFuZ2UiLCJ2YWx1ZSIsImlzU2hvdyIsImNyZWF0ZWQiLCJkaWN0cyIsIkNMSUVOVFMiLCJwYXduRGF0YSIsInBhd25Db2x1bW5zIiwidGl0bGUiLCJrZXkiLCJjb21tb25Db2x1bW5zIiwid2lkdGgiLCJyZW5kZXIiLCJoIiwic3Rha2Vob2xkZXJMaXN0IiwiZ2V0SW5kZXgiLCJyb3ciLCJndWlkIiwiY2xlYXJhYmxlIiwiZGlzYWJsZWQiLCJwbGFjZWhvbGRlciIsInJlbGF0aW9uc2hpcCIsIm9uIiwiUkVMQVRJT05TSElQIiwibWFwIiwibGFiZWwiLCJ0ZXh0Iiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJtYXhsZW5ndGgiLCJuYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJjZXJ0aWZpY2F0ZXNUeXBlIiwiQ0VSVElGSUNBVEVTVFlQRSIsImNlcnRpZmljYXRlc051bWJlciIsIm90aGVyRGVzYyIsImFsaWduIiwiZml4ZWQiLCJkaXNwbGF5IiwiY29udGVudCIsInBsYWNlbWVudCIsInR5cGUiLCJzaXplIiwiY29sb3IiLCJjbGljayIsImRlbCIsImNvbmRpdGlvbnNDb2x1bW5zIiwiaG1Qcm9qUGxhbnJlcXVpcmUiLCJyZXF1aXJlbWVudCIsInNwbGljZSIsImxvYW5BbW91bnQiLCJmb3JtYXRNb25leSIsImxvYW5QZXJpb2QiLCJobVByb2pQbGFuIiwiUkVQQVlNRVRIT0QiLCJMT0FOUkVRVUlSRU1FTlQiLCJsb2FkUGxhbnJlcXVpcmUiLCJsb2FkUHJvZHVjdCIsInBhZ2VTaXplIiwiUFJPRFVDVFMiLCJwcm9kdWN0TmFtZSIsImxvYWRDbGllbnQiLCJjbGllbnROYW1lIiwibG9hZFN0YWtlaG9sZGVyIiwiU1RBS0VIT0xERVJTIiwiZmlsdGVyIiwiYnVzaVR5cGUiLCJsb2FkUGF3biIsImFkZHJlc3MiLCJwcm92aW5jZSIsImNpdHkiLCJhcmVhIiwiZGV0YWlsZWRBZGRyZXNzIiwiZXZhbFJlc3VsdCIsImJhY2t1cEZsYWciLCJwYXduUmF0ZSIsInBsYW5JZCIsImZpbmRJbmRleCIsImFkZCIsImZsYWciLCJuYXR1cmFsIiwicHVzaCIsIm5hdHVyYWxGbGFnIiwiRGF0ZSIsImdldFRpbWUiLCJwbHVzIiwicmVzdWx0IiwiaG1Qcm9qZWN0Q2xvYiIsImlzU3VibWl0IiwidGFiTmFtZSIsInRhYnMiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsInRyaWdnZXIiLCJwYXR0ZXJuIiwiY29tcHV0ZWQiLCJjdXJyZW50VGFiQ29tcG9uZW50IiwiY29tcG9uZW50cyIsImNvbmNlcHR1YWxEZXNpZ24iLCJzdWJtaXQiLCIkcmVmcyIsImFwcHJvdmFsIiwidmFsaWRhdGUiLCJ2YWxpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtb3VudGVkIiwiJHJvb3QiLCJldmVudEh1YiIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsK0RBQWU7QUFDWEEsV0FBTztBQUNIQyxlQUFPQyxNQURKO0FBRUhDLGFBQUtELE1BRkY7QUFHSEUsYUFBS0Y7QUFIRixLQURJO0FBTVhHLFFBTlcsa0JBTUo7QUFDSCxlQUFPO0FBQ0hDLHFCQUFTO0FBRE4sU0FBUDtBQUdILEtBVlU7O0FBV1hDLGFBQVM7QUFDTEMsaUJBREssdUJBQ087QUFBQTs7QUFDUixpQkFBS0MsTUFBTCxDQUFZQyxPQUFaLENBQW9CQyxHQUFwQixHQUEwQixtQ0FBMUI7QUFDQSxpQkFBS0YsTUFBTCxDQUFZRyxPQUFaLENBQW9CLEVBQUNQLE1BQU0sRUFBQ1EsV0FBVyxLQUFLQyxPQUFMLENBQWFDLFlBQWIsQ0FBMEJDLE1BQTFCLENBQWlDQyxFQUE3QyxFQUFQLEVBQXBCLEVBQThFQyxJQUE5RSxDQUFtRixVQUFDQyxRQUFELEVBQWM7QUFDN0Ysb0JBQUlBLFNBQVNDLFFBQVQsSUFBcUIsR0FBekIsRUFBOEI7QUFDMUIsMEJBQUtDLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkgsU0FBU0ksR0FBVCxJQUFnQixNQUFLQyxPQUFMLENBQWFDLEtBQWpEO0FBQ0E7QUFDSDtBQUNETix5QkFBU2QsSUFBVCxDQUFjcUIsSUFBZCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3hDRCx5QkFBS0UsTUFBTCxHQUFjRCxVQUFVVixTQUFTZCxJQUFULENBQWNxQixJQUFkLENBQW1CSyxNQUFuQixHQUE0QixDQUFwRDtBQUNILGlCQUZEO0FBR0Esc0JBQUt6QixPQUFMLEdBQWVhLFNBQVNkLElBQVQsQ0FBY3FCLElBQTdCO0FBQ0gsYUFURCxFQVNHTSxLQVRILENBU1MsVUFBQ1YsS0FBRCxFQUFXO0FBQ2hCLHNCQUFLRCxRQUFMLENBQWNDLEtBQWQsQ0FBb0IsTUFBS0UsT0FBTCxDQUFhQyxLQUFqQztBQUNILGFBWEQ7QUFZSCxTQWZJO0FBZ0JMUSxjQWhCSyxrQkFnQkVDLEtBaEJGLEVBZ0JTO0FBQ1YsaUJBQUs5QixHQUFMLENBQVMrQixNQUFULEdBQWtCRCxVQUFVLENBQTVCO0FBQ0g7QUFsQkksS0FYRTtBQStCWEUsV0EvQlcscUJBK0JEO0FBQ04sYUFBSzVCLFNBQUw7QUFDSDtBQWpDVSxDQUFmLEU7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUFzRztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMzQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQy9LQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtB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QUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDampCQTtBQUNBOztBQUVBLCtEQUFlO0FBQ1hoRyxRQURXLGtCQUNKO0FBQ0gsZUFBTztBQUNIRixpQkFBSztBQUNEcUgsd0JBQVEsQ0FBQyxFQUFDdkcsSUFBSSxDQUFMLEVBQVEwQyxNQUFNLElBQWQsRUFBRCxFQUFzQixFQUFDMUMsSUFBSSxDQUFMLEVBQVEwQyxNQUFNLElBQWQsRUFBdEIsRUFBMkMsRUFBQzFDLElBQUksQ0FBTCxFQUFRMEMsTUFBTSxJQUFkLEVBQTNDO0FBRFAsYUFERjtBQUlIMUQsbUJBQU87QUFDSHdILCtCQUFlLEVBRFo7QUFFSHJFLDBCQUFVO0FBRlAsYUFKSjtBQVFIc0Usc0JBQVUsS0FSUDtBQVNIQyxxQkFBUyxlQVROO0FBVUhDLGtCQUFNLENBQUMsRUFBQzNHLElBQUksZUFBTCxFQUFzQjBDLE1BQU0sT0FBNUIsRUFBcUN4QixRQUFRLElBQTdDLEVBQUQsRUFDRixFQUFDbEIsSUFBSSxrQkFBTCxFQUF5QjBDLE1BQU0sTUFBL0IsRUFBdUN4QixRQUFRLEtBQS9DLEVBREUsQ0FWSDtBQVlIMEYsbUJBQU87QUFDSCw2Q0FBNkIsQ0FBQyxFQUFDQyxVQUFVLElBQVgsRUFBaUJDLFNBQVMsVUFBMUIsRUFBRCxDQUQxQjtBQUVILDhDQUE4QixDQUFDLEVBQUNELFVBQVUsSUFBWCxFQUFpQkMsU0FBUyxXQUExQixFQUFELENBRjNCO0FBR0gseUNBQXlCLENBQUMsRUFBQ0QsVUFBVSxJQUFYLEVBQWlCQyxTQUFTLFVBQTFCLEVBQXNDQyxTQUFTLE1BQS9DLEVBQUQsRUFDckI7QUFDSUMsNkJBQVMsNkJBRGI7QUFFSUYsNkJBQVMsUUFGYjtBQUdJQyw2QkFBUztBQUhiLGlCQURxQixDQUh0QjtBQVVILHlDQUF5QixDQUFDLEVBQUNGLFVBQVUsSUFBWCxFQUFpQkMsU0FBUyxVQUExQixFQUFzQ0MsU0FBUyxNQUEvQyxFQUFELEVBQ3JCO0FBQ0lDLDZCQUFTLG1CQURiO0FBRUlGLDZCQUFTLFFBRmI7QUFHSUMsNkJBQVM7QUFIYixpQkFEcUIsQ0FWdEI7QUFpQkgsOENBQThCLENBQUMsRUFBQ0YsVUFBVSxJQUFYLEVBQWlCQyxTQUFTLFVBQTFCLEVBQUQsQ0FqQjNCO0FBa0JILDhDQUE4QixDQUFDLEVBQUNELFVBQVUsSUFBWCxFQUFpQkMsU0FBUyxVQUExQixFQUFELENBbEIzQjtBQW1CSCx3Q0FBd0IsQ0FBQyxFQUFDRCxVQUFVLElBQVgsRUFBaUJDLFNBQVMsUUFBMUIsRUFBRCxDQW5CckI7QUFvQkgsd0NBQXdCLENBQUMsRUFBQ0QsVUFBVSxJQUFYLEVBQWlCQyxTQUFTLFVBQTFCLEVBQXNDQyxTQUFTLE1BQS9DLEVBQUQsRUFDcEI7QUFDSUMsNkJBQVMsNkJBRGI7QUFFSUYsNkJBQVMsUUFGYjtBQUdJQyw2QkFBUztBQUhiLGlCQURvQixDQXBCckI7QUEyQkgsdUNBQXVCLENBQUMsRUFBQ0YsVUFBVSxJQUFYLEVBQWlCQyxTQUFTLFVBQTFCLEVBQXNDQyxTQUFTLE1BQS9DLEVBQUQsRUFDbkI7QUFDSUMsNkJBQVMsNkJBRGI7QUFFSUYsNkJBQVMsUUFGYjtBQUdJQyw2QkFBUztBQUhiLGlCQURtQixDQTNCcEI7QUFrQ0gsNkJBQWEsQ0FBQyxFQUFDRixVQUFVLElBQVgsRUFBaUJDLFNBQVMsV0FBMUIsRUFBRDtBQWxDVjtBQVpKLFNBQVA7QUFpREgsS0FuRFU7O0FBb0RYRyxjQUFVO0FBQ05DLDJCQURNLGlDQUNnQjtBQUNsQixtQkFBTyxLQUFLUixPQUFaO0FBQ0g7QUFISyxLQXBEQztBQXlEWFMsZ0JBQVk7QUFDUix5QkFBaUIsaUVBRFQ7QUFFUiw0QkFBb0Isb0VBQUFDO0FBRlosS0F6REQ7QUE2RFg5SCxhQUFTO0FBQ0xDLGlCQURLLHVCQUNPO0FBQUE7O0FBQ1IsaUJBQUtDLE1BQUwsQ0FBWUMsT0FBWixDQUFvQkMsR0FBcEIsR0FBMEIscUNBQTFCO0FBQ0EsaUJBQUtGLE1BQUwsQ0FBWUcsT0FBWixDQUFvQixFQUFDUCxNQUFNLEVBQUNZLElBQUksS0FBS0gsT0FBTCxDQUFhQyxZQUFiLENBQTBCQyxNQUExQixDQUFpQ0MsRUFBdEMsRUFBUCxFQUFwQixFQUF1RUMsSUFBdkUsQ0FBNEUsVUFBQ0MsUUFBRCxFQUFjO0FBQ3RGLG9CQUFJQSxTQUFTQyxRQUFULElBQXFCLEdBQXpCLEVBQThCO0FBQzFCLDBCQUFLQyxRQUFMLENBQWNDLEtBQWQsQ0FBb0JILFNBQVNJLEdBQVQsSUFBZ0IsTUFBS0MsT0FBTCxDQUFhQyxLQUFqRDtBQUNBO0FBQ0g7QUFDRE4seUJBQVNkLElBQVQsQ0FBY29ILGFBQWQsR0FBOEIsRUFBOUI7QUFDQXRHLHlCQUFTZCxJQUFULENBQWM0RSxpQkFBZCxHQUFrQyxJQUFsQztBQUNBOUQseUJBQVNkLElBQVQsQ0FBYytDLFFBQWQsR0FBeUIsSUFBekI7QUFDQSxzQkFBS25ELEtBQUwsR0FBYWtCLFNBQVNkLElBQXRCO0FBQ0gsYUFURCxFQVNHMkIsS0FUSCxDQVNTLFVBQUNWLEtBQUQsRUFBVztBQUNoQixzQkFBS0QsUUFBTCxDQUFjQyxLQUFkLENBQW9CLE1BQUtFLE9BQUwsQ0FBYUMsS0FBakM7QUFDSCxhQVhEO0FBWUgsU0FmSTtBQWdCTDZHLGNBaEJLLG9CQWdCSTtBQUFBOztBQUNMLGlCQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLFFBQXBCLENBQTZCLFVBQUNDLEtBQUQsRUFBVztBQUNwQyxvQkFBSUEsS0FBSixFQUFXO0FBQ1AsMkJBQUtoQixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsMkJBQUtqSCxNQUFMLENBQVlDLE9BQVosQ0FBb0JDLEdBQXBCLEdBQTBCLHNDQUExQjtBQUNBLDJCQUFLRixNQUFMLENBQVlHLE9BQVosQ0FBb0IsRUFBQ1AsTUFBTXNJLEtBQUtDLFNBQUwsQ0FBZSxPQUFLM0ksS0FBcEIsQ0FBUCxFQUFwQixFQUF3RCxNQUF4RCxFQUFnRWlCLElBQWhFLENBQXFFLFVBQUNDLFFBQUQsRUFBYztBQUMvRSwrQkFBS3VHLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSw0QkFBSXZHLFNBQVNDLFFBQVQsSUFBcUIsR0FBekIsRUFBOEI7QUFDMUIsbUNBQUtDLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkgsU0FBU0ksR0FBVCxJQUFnQixPQUFLQyxPQUFMLENBQWFDLEtBQWpEO0FBQ0E7QUFDSDtBQUNELCtCQUFLWCxPQUFMLENBQWFxRyxJQUFiLENBQWtCLEVBQUNwRCxNQUFNLFNBQVAsRUFBbEI7QUFDSCxxQkFQRCxFQU9HL0IsS0FQSCxDQU9TLFVBQUNWLEtBQUQsRUFBVztBQUNoQiwrQkFBS29HLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSwrQkFBS3JHLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixPQUFLRSxPQUFMLENBQWFDLEtBQWpDO0FBQ0gscUJBVkQ7QUFXSDtBQUNKLGFBaEJEO0FBaUJIO0FBbENJLEtBN0RFO0FBaUdYVyxXQWpHVyxxQkFpR0Q7QUFDTixhQUFLNUIsU0FBTDtBQUNILEtBbkdVO0FBb0dYcUksV0FwR1cscUJBb0dEO0FBQ04sYUFBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxLQUFwQixDQUEwQixZQUExQjtBQUNIO0FBdEdVLENBQWYsRSIsImZpbGUiOiIyMS5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBtb2RlbDogT2JqZWN0LFxuICAgICAgICBkaWM6IE9iamVjdCxcbiAgICAgICAgdGFiOiBPYmplY3RcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdW1tYXJ5OiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWRNb2RlbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qU2RoL3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7cHJvamVjdElkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pc0xhc3QgPSBpbmRleCA9PT0gcmVzcG9uc2UuZGF0YS5saXN0Lmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnkgPSByZXNwb25zZS5kYXRhLmxpc3Q7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRhYi5pc1Nob3cgPSB2YWx1ZSA9PT0gMTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkTW9kZWwoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9vcGluaW9uT2ZMb2FuLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9vcGluaW9uT2ZMb2FuLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00YjQyNzFiNlxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9vcGluaW9uT2ZMb2FuLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy90YWJzL29waW5pb25PZkxvYW4udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gb3Bpbmlvbk9mTG9hbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGI0MjcxYjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00YjQyNzFiNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9vcGluaW9uT2ZMb2FuLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwic3VtbWFyeVwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJzdW1tYXJ5XCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOi0t+WuoeS8muaEj+ingeaxh+aAu1xcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIF92bS5fbCgoX3ZtLnN1bW1hcnkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIyXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0t+WuoeS8muWnlOWRmFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmF1ZGl0VXNlcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIyXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWuoeiurue7k+iuulxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmF1ZGl0UmVzdWx0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6LS35a6h5Lya5pel5pyfXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI2XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uYXVkaXREYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDotLflrqHkvJrlp5TlkZjmhI/op4FcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjIyXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uYXVkaXREZXNjcmlwdGlvbikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksICghaXRlbS5pc0xhc3QpID8gX2MoJ0RpdmlkZXInKSA6IF92bS5fZSgpXSwgMSlcbiAgfSkpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImNvbmNsdXNpb25cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiY29uY2x1c2lvblwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDotLflrqHkvJrnu5PorrpcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWQjOaEj+S6uuaVsFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kc2hBZ3JlZU51bSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5ZCm5Yaz5Lq65pWwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRzaFJlamVjdE51bSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6YCA5Zue5Lq65pWwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRzaFJldHJlYXROdW0pICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwcm9wXCI6IFwiZHNoUmVzdWx0XCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOi0t+WuoeS8mue7k+iuulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumAieaLqei0t+WuoeS8mue7k+iuuiB8IOW/heWhq1wiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jaGFuZ2VcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5kc2hSZXN1bHQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwsIFwiZHNoUmVzdWx0XCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmRzaFJlc3VsdFwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5kaWMucmVzdWx0KSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSksIF92bS5fdihcIiBcIiksIChfdm0ubW9kZWwuZHNoUmVzdWx0ID09PSAwKSA/IF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6YCA5Zue6IqC54K5XCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiXG4gICAgfVxuICB9KV0sIDEpIDogX3ZtLl9lKCldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDotLflrqHkvJrmhI/op4HmsYfmgLtcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRhcmVhXCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIui0t+WuoeS8muaEj+ingeaxh+aAu1wiLFxuICAgICAgXCJtYXhsZW5ndGhcIjogNTAwXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubW9kZWwuaG1Qcm9qZWN0Q2xvYi5kc2hEZXNjKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLmhtUHJvamVjdENsb2IsIFwiZHNoRGVzY1wiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5obVByb2plY3RDbG9iLmRzaERlc2NcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTRiNDI3MWI2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGI0MjcxYjZcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL29waW5pb25PZkxvYW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMjEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnVGFicycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhbmltYXRlZFwiOiBmYWxzZVxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnRhYk5hbWUpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0udGFiTmFtZSA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwidGFiTmFtZVwiXG4gICAgfVxuICB9LCBbX3ZtLl9sKChfdm0udGFicyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gKGl0ZW0uaXNTaG93KSA/IF9jKCdUYWJQYW5lJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJuYW1lXCI6IGl0ZW0uaWQsXG4gICAgICAgIFwibGFiZWxcIjogaXRlbS50ZXh0XG4gICAgICB9XG4gICAgfSkgOiBfdm0uX2UoKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0J1dHRvbkdyb3VwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJleHRyYVwiXG4gICAgfSxcbiAgICBzbG90OiBcImV4dHJhXCJcbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kcm9vdC5ldmVudEh1Yi4kZW1pdCgnYmFjaycsIHtcbiAgICAgICAgICBuYW1lOiAnYmFja2xvZycsXG4gICAgICAgICAgcGFyYW1zOiBfdm0uJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOi/lOWbnlxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLm1vZGVsLmRpc2FibGVkICYmIF92bS50YWJOYW1lID09PSAnY29uY2VwdHVhbERlc2lnbicpID8gX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwid2FybmluZ1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm1vZGVsLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg57yW6L6RXFxuICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsb2FkaW5nXCI6IF92bS5pc1N1Ym1pdCxcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnN1Ym1pdFxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDmj5DkuqRcXG4gICAgICAgICAgICBcIildKV0sIDEpXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtJywge1xuICAgIHJlZjogXCJhcHByb3ZhbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbCxcbiAgICAgIFwicnVsZXNcIjogX3ZtLnJ1bGVzLFxuICAgICAgXCJsYWJlbC13aWR0aFwiOiAxMjBcbiAgICB9XG4gIH0sIFtfYygna2VlcC1hbGl2ZScsIFtfYyhfdm0uY3VycmVudFRhYkNvbXBvbmVudCwge1xuICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWJcIjogX3ZtLnRhYnNbMV0sXG4gICAgICBcImRpY1wiOiBfdm0uZGljLFxuICAgICAgXCJtb2RlbFwiOiBfdm0ubW9kZWxcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWI3ODIxY2UwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYjc4MjFjZTBcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy9kcmFmdFJlc29sdXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjEiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9kcmFmdFJlc29sdXRpb24uanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWI3ODIxY2UwXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2RyYWZ0UmVzb2x1dGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvZHJhZnRSZXNvbHV0aW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRyYWZ0UmVzb2x1dGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYjc4MjFjZTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iNzgyMWNlMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvZHJhZnRSZXNvbHV0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMjEiLCJpbXBvcnQge2Zvcm1hdE1vbmV5fSBmcm9tIFwiLi4vLi4vbGlicy91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGljdHM6IHtDTElFTlRTOiBbXX0sXG4gICAgICAgICAgICBwYXduRGF0YTogW10sXG4gICAgICAgICAgICBwYXduQ29sdW1uczogW3t0aXRsZTogJ+e8luWPtycsIGtleTogJ2lkJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn6K+B5Lu2Jywga2V5OiAnY2VydGlmaWNhdGVUeXBlVGV4dCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+ivgeS7tuWPtycsIGtleTogJ2NlcnRpZmljYXRlQ29kZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+exu+WeiycsIGtleTogJ2hvdXNlVHlwZVRleHQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmiL/kuqfnjrDnirYnLCBrZXk6ICdwcm9wZXJ0eVN0YXRpY1RleHQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflnLDlnYAnLCBrZXk6ICdhZGRyZXNzJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn57uI6K+E5YC8Jywga2V5OiAnZXZhbFJlc3VsdCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+aKteaKvOeOhycsIGtleTogJ3Bhd25SYXRlJ31dLFxuICAgICAgICAgICAgY29tbW9uQ29sdW1uczogW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WFs+ezuycsIHdpZHRoOiAyMDAsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLnN0YWtlaG9sZGVyTGlzdFt0aGlzLmdldEluZGV4KHBhcmFtcy5yb3cuZ3VpZCldID0gcGFyYW1zLnJvdztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ1NlbGVjdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiAhdGhpcy5tb2RlbC5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+mAieaLqeWFs+ezuycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5yb3cucmVsYXRpb25zaGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLm1vZGVsLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb24tY2hhbmdlJzogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cucmVsYXRpb25zaGlwID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLmRpY3RzLlJFTEFUSU9OU0hJUC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdPcHRpb24nLCB7cHJvcHM6IHt2YWx1ZTogaXRlbS5pZCwgbGFiZWw6IGl0ZW0udGV4dH19KVxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflp5PlkI0nLCB3aWR0aDogMjIwLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzFweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiAhdGhpcy5tb2RlbC5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+Wnk+WQjScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5yb3cubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5tb2RlbC5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29uLWNoYW5nZSc6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93Lm5hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ivgeS7tuexu+WeiycsIHdpZHRoOiAyMDAsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnU2VsZWN0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6ICF0aGlzLm1vZGVsLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6YCJ5oup6K+B5Lu257G75Z6LJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLnJvdy5jZXJ0aWZpY2F0ZXNUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLm1vZGVsLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb24tY2hhbmdlJzogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuY2VydGlmaWNhdGVzVHlwZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5kaWN0cy5DRVJUSUZJQ0FURVNUWVBFLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ09wdGlvbicsIHtwcm9wczoge3ZhbHVlOiBpdGVtLmlkLCBsYWJlbDogaXRlbS50ZXh0fX0pXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ivgeS7tuWPtycsIHdpZHRoOiAzMjAsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6ICF0aGlzLm1vZGVsLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6K+B5Lu25Y+3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLnJvdy5jZXJ0aWZpY2F0ZXNOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMubW9kZWwuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbi1jaGFuZ2UnOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5jZXJ0aWZpY2F0ZXNOdW1iZXIgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+Wkh+azqCcsIHdpZHRoOiAzMjAsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiAhdGhpcy5tb2RlbC5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+WFtuS7luivtOaYjicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5yb3cub3RoZXJEZXNjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLm1vZGVsLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb24tY2hhbmdlJzogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cub3RoZXJEZXNjID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmk43kvZwnLCB3aWR0aDogNjAsIGFsaWduOiAnY2VudGVyJywgZml4ZWQ6ICdyaWdodCcsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5tb2RlbC5kaXNhYmxlZCA/ICdub25lJyA6ICdibG9jaydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgW2goJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfliKDpmaQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZWQ0MDE0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsKHBhcmFtcy5yb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY29uZGl0aW9uc0NvbHVtbnM6IFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfluo/lj7cnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5obVByb2pQbGFucmVxdWlyZVtwYXJhbXMuaW5kZXhdID0gcGFyYW1zLnJvdztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ2xhYmVsJywgcGFyYW1zLmluZGV4ICsgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfokL3lrp7mnaHku7bor7TmmI4nLCB3aWR0aDogOTAwLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLnJvdy5yZXF1aXJlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfokL3lrp7mnaHku7bor7TmmI4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogIXRoaXMubW9kZWwuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMubW9kZWwuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbi1jaGFuZ2UnOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5yZXF1aXJlbWVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmk43kvZwnLCB3aWR0aDogNzAsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5tb2RlbC5kaXNhYmxlZCA/ICdub25lJyA6ICdibG9jaydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgW2goJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WIoOmZpCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIFtoKCdJY29uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2VkNDAxNCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMjBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuaG1Qcm9qUGxhbnJlcXVpcmUuc3BsaWNlKHBhcmFtcy5pbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KV0pXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG1vZGVsOiBPYmplY3RcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZE1vZGVsKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2pQbGFuL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7cHJvamVjdElkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YVswXSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhWzBdLmxvYW5BbW91bnQgPSBmb3JtYXRNb25leShyZXNwb25zZS5kYXRhWzBdLmxvYW5BbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhWzBdLmxvYW5QZXJpb2QgPSByZXNwb25zZS5kYXRhWzBdLmxvYW5QZXJpb2QgPyByZXNwb25zZS5kYXRhWzBdLmxvYW5QZXJpb2QgKyAnJyA6IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuaG1Qcm9qUGxhbiA9IHJlc3BvbnNlLmRhdGFbMF0gfHwge307XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0cy5SRVBBWU1FVEhPRCA9IHJlc3BvbnNlLmRpY3RzLlJFUEFZTUVUSE9EO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdHMuTE9BTlJFUVVJUkVNRU5UID0gcmVzcG9uc2UuZGljdHMuTE9BTlJFUVVJUkVNRU5UO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFBsYW5yZXF1aXJlKHRoaXMubW9kZWwuaG1Qcm9qUGxhbi5pZCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFByb2R1Y3QoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvZHVjdC9yZWFkL2xpc3QnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge3BhZ2VTaXplOiAxMDAwfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGljdHMuUFJPRFVDVFMgPSByZXNwb25zZS5kYXRhLmxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7aWQ6IGl0ZW0uaWQsIHRleHQ6IGl0ZW0ucHJvZHVjdE5hbWV9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZENsaWVudCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1DbGllbnQvcmVhZC9saXN0JztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwYWdlU2l6ZTogMTAwMH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRpY3RzLkNMSUVOVFMgPSByZXNwb25zZS5kYXRhLmxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7aWQ6IGl0ZW0uaWQsIHRleHQ6IGl0ZW0uY2xpZW50TmFtZX1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkU3Rha2Vob2xkZXIoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvalN0YWtlaG9sZGVyL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7cHJvamVjdElkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLnN0YWtlaG9sZGVyTGlzdCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0cy5SRUxBVElPTlNISVAgPSByZXNwb25zZS5kaWN0cy5SRUxBVElPTlNISVA7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0cy5DRVJUSUZJQ0FURVNUWVBFID0gcmVzcG9uc2UuZGljdHMuQ0VSVElGSUNBVEVTVFlQRTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3RzLlNUQUtFSE9MREVSUyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmJ1c2lUeXBlID09PSAnMidcbiAgICAgICAgICAgICAgICB9KS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtpZDogaXRlbS5pZCwgdGV4dDogaXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRQYXduKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVBhd24vcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwcm9qZWN0SWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZHJlc3MgPSBpdGVtLnByb3ZpbmNlICsgaXRlbS5jaXR5ICsgaXRlbS5hcmVhICsgaXRlbS5kZXRhaWxlZEFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZXZhbFJlc3VsdCA9IGl0ZW0uYmFja3VwRmxhZyA9PT0gJzAnID8gZm9ybWF0TW9uZXkodGhpcy5tb2RlbC5ldmFsUmVzdWx0KSArICflhYMnIDogJy0nO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnBhd25SYXRlID0gaXRlbS5iYWNrdXBGbGFnID09PSAnMCcgPyB0aGlzLm1vZGVsLmhtUHJvalBsYW4ucGF3blJhdGUgKyAnJScgOiAnLSc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXduRGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFBsYW5yZXF1aXJlKGlkKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvalBsYW5yZXF1aXJlL3JlYWQvcXVlcnlCeVBsYW5JZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7cGxhbklkOiBpZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmhtUHJvalBsYW5yZXF1aXJlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRJbmRleChndWlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5zdGFrZWhvbGRlckxpc3QuZmluZEluZGV4KChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ3VpZCA9PT0gZ3VpZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhZGQoZmxhZywgbmF0dXJhbCkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zdGFrZWhvbGRlckxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgYnVzaVR5cGU6IGZsYWcsXG4gICAgICAgICAgICAgICAgbmF0dXJhbEZsYWc6IG5hdHVyYWwgPyBuYXR1cmFsIDogbnVsbCxcbiAgICAgICAgICAgICAgICBndWlkOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc3Rha2Vob2xkZXJMaXN0LnNwbGljZSh0aGlzLmdldEluZGV4KGl0ZW0uZ3VpZCksIDEpO1xuICAgICAgICB9LFxuICAgICAgICBwbHVzKCkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5obVByb2pQbGFucmVxdWlyZS5wdXNoKHtwbGFuSWQ6IHRoaXMubW9kZWwuaG1Qcm9qUGxhbi5pZH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLm1vZGVsLmhtUHJvalBsYW4gPSB7fTtcbiAgICAgICAgdGhpcy5tb2RlbC5zdGFrZWhvbGRlckxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5tb2RlbC5obVByb2pQbGFucmVxdWlyZSA9IFtdO1xuICAgICAgICB0aGlzLmxvYWRDbGllbnQoKTtcbiAgICAgICAgdGhpcy5sb2FkU3Rha2Vob2xkZXIoKTtcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdCgpO1xuICAgICAgICB0aGlzLmxvYWRNb2RlbCgpO1xuICAgICAgICB0aGlzLmxvYWRQYXduKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvY29uY2VwdHVhbERlc2lnbi5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvY29uY2VwdHVhbERlc2lnbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTUyYjk1NmFcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vY29uY2VwdHVhbERlc2lnbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9jb25jZXB0dWFsRGVzaWduLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNvbmNlcHR1YWxEZXNpZ24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTE1MmI5NTZhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTUyYjk1NmFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvY29uY2VwdHVhbERlc2lnbi52dWVcbi8vIG1vZHVsZSBpZCA9IDk3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDggMjEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwbGFuXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcInBsYW5cIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5Z+65pys5L+h5oGvXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDnlLPor7fkurpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwbHlVc2VyTmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg55Sz6K+35pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcGx5RGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg55Sz6K+36YOo6ZeoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcGx5RGVwdE5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInByb3BcIjogXCJobVByb2pQbGFuLm1haW5Mb2FuQ2xpZW50XCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+5Li75L2TXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS5tb2RlbC5kaXNhYmxlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLpgInmi6nlgJ/mrL7kuLvkvZMgfCDlv4XloatcIixcbiAgICAgIFwiZmlsdGVyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJjbGVhcmFibGVcIjogIV92bS5tb2RlbC5kaXNhYmxlZFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLm1vZGVsLmhtUHJvalBsYW4ubWFpbkxvYW5DbGllbnQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwuaG1Qcm9qUGxhbiwgXCJtYWluTG9hbkNsaWVudFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5obVByb2pQbGFuLm1haW5Mb2FuQ2xpZW50XCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLmRpY3RzLkNMSUVOVFMpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdPcHRpb24nLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInZhbHVlXCI6IGl0ZW0uaWRcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS50ZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcImhtUHJvalBsYW4uc2hhcmVMb2FuSG9sZGVyXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YWx5ZCM5YCf5qy+5Lq6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS5tb2RlbC5kaXNhYmxlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLpgInmi6nlhbHlkIzlgJ/mrL7kurogfCDlv4XloatcIixcbiAgICAgIFwiZmlsdGVyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJjbGVhcmFibGVcIjogIV92bS5tb2RlbC5kaXNhYmxlZFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLm1vZGVsLmhtUHJvalBsYW4uc2hhcmVMb2FuSG9sZGVyKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLmhtUHJvalBsYW4sIFwic2hhcmVMb2FuSG9sZGVyXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmhtUHJvalBsYW4uc2hhcmVMb2FuSG9sZGVyXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLmRpY3RzLlNUQUtFSE9MREVSUyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwcm9wXCI6IFwiaG1Qcm9qUGxhbi5sb2FuQW1vdW50XCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5om55aSN6YeR6aKdXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLm1vZGVsLmRpc2FibGVkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuaJueWkjemHkeminSB8IOW/heWhq1wiLFxuICAgICAgXCJtYXhsZW5ndGhcIjogMjAsXG4gICAgICBcImNsZWFyYWJsZVwiOiAhX3ZtLm1vZGVsLmRpc2FibGVkXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubW9kZWwuaG1Qcm9qUGxhbi5sb2FuQW1vdW50KSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLmhtUHJvalBsYW4sIFwibG9hbkFtb3VudFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5obVByb2pQbGFuLmxvYW5BbW91bnRcIlxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJwcmVwZW5kXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwicHJlcGVuZFwiXG4gIH0sIFtfdm0uX3YoXCLlhYNcIildKV0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwcm9wXCI6IFwiaG1Qcm9qUGxhbi5sb2FuUGVyaW9kXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+5pyf6ZmQXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLm1vZGVsLmRpc2FibGVkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWAn+asvuacn+mZkCB8IOW/heWhq1wiLFxuICAgICAgXCJtYXhsZW5ndGhcIjogMjAsXG4gICAgICBcImNsZWFyYWJsZVwiOiAhX3ZtLm1vZGVsLmRpc2FibGVkXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubW9kZWwuaG1Qcm9qUGxhbi5sb2FuUGVyaW9kKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLmhtUHJvalBsYW4sIFwibG9hblBlcmlvZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5obVByb2pQbGFuLmxvYW5QZXJpb2RcIlxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJwcmVwZW5kXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwicHJlcGVuZFwiXG4gIH0sIFtfdm0uX3YoXCLmnIhcIildKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInByb3BcIjogXCJobVByb2pQbGFuLmxvYW5SZXF1aXJlbWVudFwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaUvuasvuadoeS7tlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumAieaLqeaUvuasvuadoeS7tiB8IOW/heWhq1wiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubW9kZWwuZGlzYWJsZWQsXG4gICAgICBcImNsZWFyYWJsZVwiOiAhX3ZtLm1vZGVsLmRpc2FibGVkXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubW9kZWwuaG1Qcm9qUGxhbi5sb2FuUmVxdWlyZW1lbnQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwuaG1Qcm9qUGxhbiwgXCJsb2FuUmVxdWlyZW1lbnRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwibW9kZWwuaG1Qcm9qUGxhbi5sb2FuUmVxdWlyZW1lbnRcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uZGljdHMuTE9BTlJFUVVJUkVNRU5UKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInByb3BcIjogXCJobVByb2pQbGFuLnByb2R1Y3RJZFwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS6p+WTgVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubW9kZWwuZGlzYWJsZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6YCJ5oup5Lqn5ZOBIHwg5b+F5aGrXCIsXG4gICAgICBcImZpbHRlcmFibGVcIjogXCJcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6ICFfdm0ubW9kZWwuZGlzYWJsZWRcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5obVByb2pQbGFuLnByb2R1Y3RJZCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbC5obVByb2pQbGFuLCBcInByb2R1Y3RJZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5obVByb2pQbGFuLnByb2R1Y3RJZFwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5kaWN0cy5QUk9EVUNUUyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcImhtUHJvalBsYW4ucmVwYXltZW50TWV0aG9kXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6L+Y5qy+5pa55byPXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS5tb2RlbC5kaXNhYmxlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLpgInmi6nov5jmrL7mlrnlvI8gfCDlv4XloatcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6ICFfdm0ubW9kZWwuZGlzYWJsZWRcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5obVByb2pQbGFuLnJlcGF5bWVudE1ldGhvZCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbC5obVByb2pQbGFuLCBcInJlcGF5bWVudE1ldGhvZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5obVByb2pQbGFuLnJlcGF5bWVudE1ldGhvZFwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5kaWN0cy5SRVBBWU1FVEhPRCksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjE2XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWFtuS7lui/mOasvuaWueW8j+ivtOaYjlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0YXJlYVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWFtuS7lui/mOasvuaWueW8j+ivtOaYjlwiLFxuICAgICAgXCJtYXhsZW5ndGhcIjogNTAwLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubW9kZWwuZGlzYWJsZWQsXG4gICAgICBcImNsZWFyYWJsZVwiOiAhX3ZtLm1vZGVsLmRpc2FibGVkXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubW9kZWwuaG1Qcm9qUGxhbi5yZXBheW1lbnRSZW1hcmspLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwuaG1Qcm9qUGxhbiwgXCJyZXBheW1lbnRSZW1hcmtcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiIG1vZGVsLmhtUHJvalBsYW4ucmVwYXltZW50UmVtYXJrXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5LiK5oql5Yip546HXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmhtUHJvalBsYW4ucmVwb3J0UmF0ZSArICclJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwcm9wXCI6IFwiaG1Qcm9qUGxhbi5hbGxvd1JhdGVcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmibnlpI3liKnnjodcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubW9kZWwuZGlzYWJsZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5om55aSN5Yip546HIHwg5b+F5aGrXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiAyMCxcbiAgICAgIFwiY2xlYXJhYmxlXCI6ICFfdm0ubW9kZWwuZGlzYWJsZWRcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5obVByb2pQbGFuLmFsbG93UmF0ZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbC5obVByb2pQbGFuLCBcImFsbG93UmF0ZVwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5obVByb2pQbGFuLmFsbG93UmF0ZVwiXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcInByZXBlbmRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJwcmVwZW5kXCJcbiAgfSwgW192bS5fdihcIiVcIildKV0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5LiK5oql6LS5546HXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmhtUHJvalBsYW4ucmVwb3J0RmVlICsgJyUnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInByb3BcIjogXCJobVByb2pQbGFuLmFsbG93RmVlXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5om55aSN6LS5546HXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLm1vZGVsLmRpc2FibGVkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuaJueWkjei0ueeOhyB8IOW/heWhq1wiLFxuICAgICAgXCJtYXhsZW5ndGhcIjogMjAsXG4gICAgICBcImNsZWFyYWJsZVwiOiAhX3ZtLm1vZGVsLmRpc2FibGVkXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubW9kZWwuaG1Qcm9qUGxhbi5hbGxvd0ZlZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbC5obVByb2pQbGFuLCBcImFsbG93RmVlXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm1vZGVsLmhtUHJvalBsYW4uYWxsb3dGZWVcIlxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJwcmVwZW5kXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwicHJlcGVuZFwiXG4gIH0sIFtfdm0uX3YoXCIlXCIpXSldKV0sIDEpXSwgMSldLCAxKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImJvcnJvd2VyXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImJvcnJvd2VyXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOmjjuaOp+aOquaWvVxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyNFwiXG4gICAgfVxuICB9LCBbX2MoJ0ljb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIm1kLWxpc3RcIixcbiAgICAgIFwic2l6ZVwiOiBcIjE2XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmirXmirznianliJfooahcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWQtaG92ZXJcIjogXCJcIixcbiAgICAgIFwiZGF0YVwiOiBfdm0ucGF3bkRhdGEsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLnBhd25Db2x1bW5zXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIwXCJcbiAgICB9XG4gIH0sIFtfYygnSWNvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibWQtbGlzdFwiLFxuICAgICAgXCJzaXplXCI6IFwiMTZcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaLheS/neS6uijoh6rnhLbkurop5YiX6KGoXFxuICAgICAgICAgICAgICAgICAgICBcIildLCAxKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0ubW9kZWwuZGlzYWJsZWQpID8gX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcInNtYWxsXCIsXG4gICAgICBcImljb25cIjogXCJtZC1hZGRcIixcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5hZGQoJzEnLCAnMScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOa3u+WKoFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSkgOiBfdm0uX2UoKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQ1XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29tbW9uQ29sdW1ucyxcbiAgICAgIFwiZGF0YVwiOiBfdm0ubW9kZWwuc3Rha2Vob2xkZXJMaXN0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5idXNpVHlwZSA9PT0gJzEnICYmIGl0ZW0ubmF0dXJhbEZsYWcgPT09ICcxJztcbiAgICAgIH0pXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIwXCJcbiAgICB9XG4gIH0sIFtfYygnSWNvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibWQtbGlzdFwiLFxuICAgICAgXCJzaXplXCI6IFwiMTZcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaLheS/neS6uijms5Xkurop5YiX6KGoXFxuICAgICAgICAgICAgICAgICAgICBcIildLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgWyghX3ZtLm1vZGVsLmRpc2FibGVkKSA/IF9jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcInNtYWxsXCIsXG4gICAgICBcImljb25cIjogXCJtZC1hZGRcIixcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5hZGQoJzEnLCAnMCcpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOa3u+WKoFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQ1XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29tbW9uQ29sdW1ucyxcbiAgICAgIFwiZGF0YVwiOiBfdm0ubW9kZWwuc3Rha2Vob2xkZXJMaXN0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5idXNpVHlwZSA9PT0gJzEnICYmIGl0ZW0ubmF0dXJhbEZsYWcgPT09ICcwJztcbiAgICAgIH0pXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIwXCJcbiAgICB9XG4gIH0sIFtfYygnSWNvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibWQtbGlzdFwiLFxuICAgICAgXCJzaXplXCI6IFwiMTZcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaUvuasvuWJjeiQveWunuadoeS7tlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFsoIV92bS5tb2RlbC5kaXNhYmxlZCkgPyBfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcImljb25cIjogXCJtZC1hZGRcIixcbiAgICAgIFwic2l6ZVwiOiBcInNtYWxsXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5wbHVzXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOa3u+WKoFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQ1XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YVwiOiBfdm0ubW9kZWwuaG1Qcm9qUGxhbnJlcXVpcmUsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLmNvbmRpdGlvbnNDb2x1bW5zXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbC13aWR0aFwiOiA3MFxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YW25LuW6K+05piOXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0YXJlYVwiLFxuICAgICAgXCJtYXhsZW5ndGhcIjogNTAwLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubW9kZWwuZGlzYWJsZWQsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWFtuS7luivtOaYjlwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubW9kZWwuaG1Qcm9qUGxhbi5vdGhlckRlc2MpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwuaG1Qcm9qUGxhbiwgXCJvdGhlckRlc2NcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwibW9kZWwuaG1Qcm9qUGxhbi5vdGhlckRlc2NcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTE1MmI5NTZhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTUyYjk1NmFcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL2NvbmNlcHR1YWxEZXNpZ24udnVlXG4vLyBtb2R1bGUgaWQgPSA5NzRcbi8vIG1vZHVsZSBjaHVua3MgPSA4IDIxIiwiaW1wb3J0IG9waW5pb25PZkxvYW4gZnJvbSAnLi4vdmlld3MvdGFicy9vcGluaW9uT2ZMb2FuJ1xuaW1wb3J0IGNvbmNlcHR1YWxEZXNpZ24gZnJvbSAnLi4vdmlld3MvdGFicy9jb25jZXB0dWFsRGVzaWduJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpYzoge1xuICAgICAgICAgICAgICAgIHJlc3VsdDogW3tpZDogMSwgdGV4dDogJ+WQjOaEjyd9LCB7aWQ6IDIsIHRleHQ6ICflkKblhrMnfSwge2lkOiAwLCB0ZXh0OiAn6YCA5ZueJ31dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgaG1Qcm9qZWN0Q2xvYjoge30sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1N1Ym1pdDogZmFsc2UsXG4gICAgICAgICAgICB0YWJOYW1lOiAnb3Bpbmlvbk9mTG9hbicsXG4gICAgICAgICAgICB0YWJzOiBbe2lkOiAnb3Bpbmlvbk9mTG9hbicsIHRleHQ6ICfotLflrqHkvJrmhI/op4EnLCBpc1Nob3c6IHRydWV9LFxuICAgICAgICAgICAgICAgIHtpZDogJ2NvbmNlcHR1YWxEZXNpZ24nLCB0ZXh0OiAn6LW36I2J5Yaz6K6uJywgaXNTaG93OiBmYWxzZX1dLFxuICAgICAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgICAgICAnaG1Qcm9qUGxhbi5tYWluTG9hbkNsaWVudCc6IFt7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICflgJ/mrL7kuLvkvZPkuI3og73kuLrnqbonfV0sXG4gICAgICAgICAgICAgICAgJ2htUHJvalBsYW4uc2hhcmVMb2FuSG9sZGVyJzogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+WFseWQjOWAn+asvuS6uuS4jeiDveS4uuepuid9XSxcbiAgICAgICAgICAgICAgICAnaG1Qcm9qUGxhbi5sb2FuQW1vdW50JzogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+eUs+ivt+mHkemineS4jeiDveS4uuepuicsIHRyaWdnZXI6ICdibHVyJ30sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eWzAtOV0rKFsuXXsxfVswLTldezEsMn0pPyQvLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aVsOWAvOagvOW8j+mUmeivrycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYmx1cidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgJ2htUHJvalBsYW4ubG9hblBlcmlvZCc6IFt7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICflgJ/mrL7mnJ/pmZDkuI3og73kuLrnqbonLCB0cmlnZ2VyOiAnYmx1cid9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXigwfFsxLTldWzAtOV0qKSQvLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aVsOWAvOagvOW8j+mUmeivrycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYmx1cidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgJ2htUHJvalBsYW4ucmVwYXltZW50TWV0aG9kJzogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+i/mOasvuaWueW8j+S4jeiDveS4uuepuid9XSxcbiAgICAgICAgICAgICAgICAnaG1Qcm9qUGxhbi5sb2FuUmVxdWlyZW1lbnQnOiBbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn5pS+5qy+5p2h5Lu25LiN6IO95Li656m6J31dLFxuICAgICAgICAgICAgICAgICdobVByb2pQbGFuLnByb2R1Y3RJZCc6IFt7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfkuqflk4HkuI3og73kuLrnqbonfV0sXG4gICAgICAgICAgICAgICAgJ2htUHJvalBsYW4uYWxsb3dSYXRlJzogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+aJueWkjeWIqeeOh+S4jeiDveS4uuepuicsIHRyaWdnZXI6ICdibHVyJ30sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eWzAtOV0rKFsuXXsxfVswLTldezEsMn0pPyQvLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aVsOWAvOagvOW8j+mUmeivrycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYmx1cidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgJ2htUHJvalBsYW4uYWxsb3dGZWUnOiBbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn5om55aSN6LS5546H5LiN6IO95Li656m6JywgdHJpZ2dlcjogJ2JsdXInfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogL15bMC05XSsoWy5dezF9WzAtOV17MSwyfSk/JC8sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5pWw5YC85qC85byP6ZSZ6K+vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdibHVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAnZHNoUmVzdWx0JzogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+i0t+WuoeS8mue7k+iuuuS4jeiDveS4uuepuid9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjdXJyZW50VGFiQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFiTmFtZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAnb3Bpbmlvbk9mTG9hbic6IG9waW5pb25PZkxvYW4sXG4gICAgICAgICdjb25jZXB0dWFsRGVzaWduJzogY29uY2VwdHVhbERlc2lnblxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2FkTW9kZWwoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvamVjdC9yZWFkL2RldGFpbCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaG1Qcm9qZWN0Q2xvYiA9IHt9O1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaG1Qcm9qUGxhbnJlcXVpcmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuYXBwcm92YWwudmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJtaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvamVjdC9kcmF3ZGVjaXNpb24nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiBKU09OLnN0cmluZ2lmeSh0aGlzLm1vZGVsKX0sICdqc29uJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJtaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnYmFja2xvZyd9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRNb2RlbCgpO1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC5ldmVudEh1Yi4kZW1pdCgnYnJlYWRjcnVtYicpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9kcmFmdFJlc29sdXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9