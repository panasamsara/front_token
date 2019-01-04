webpackJsonp([2],{

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object
    },
    data: function data() {
        var _this = this;

        return {
            chart: null,
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: '3%',
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [],
                    type: 'bar'
                }]
            },
            stats: false,
            isSubmit: false,
            isCancel: false,
            loading: false,
            rules: { interviewer: [{ required: true, message: '下户人员不能为空' }] },
            users: [],
            workloadData: [],
            WorkloadColumns: [{ title: '下户人员', key: 'interviewerName' }, {
                title: '待办下户任务数量', render: function render(h, params) {
                    return h('label', params.row.hmProjInterviewBeanList.length);
                }
            }, {
                title: '下户地点', render: function render(h, params) {
                    return h('ul', {
                        style: {
                            listStyleType: 'none',
                            margin: '0',
                            padding: '0'
                        }
                    }, params.row.hmProjInterviewBeanList.map(function (item) {
                        return h('li', item.interviewAddress);
                    }));
                }
            }, {
                title: '下户人员月工作', key: 'interviewerMonthWork'
            }, {
                title: '月里程', render: function render(h, params) {
                    return h('a', {
                        on: {
                            click: function click() {
                                _this.stats = true;
                                _this.chart = _this.$echarts.init(document.getElementById('charts'));
                                _this.chart.showLoading();
                                _this.$axios.options.url = 'houseMortgage/hmProjInterview/read/checkInterviewLiCheng';
                                _this.$axios.request({ data: {} }).then(function (response) {
                                    _this.chart.hideLoading();
                                    if (response.httpCode != 200) {
                                        _this.$Message.error(response.msg || _this.$config.ERROR);
                                        return;
                                    }

                                    _this.option.xAxis.data = Object.keys(response.data).map(function (item, index) {
                                        return ++index + '月';
                                    });
                                    _this.option.series[0].data = Object.values(response.data);
                                    _this.chart.setOption(_this.option);
                                }).catch(function (error) {
                                    _this.chart.hideLoading();
                                    _this.$Message.error(_this.$config.ERROR);
                                });
                            }
                        }
                    }, [h('Tooltip', {
                        props: {
                            content: '查看',
                            placement: 'top'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-stats',
                            size: 20,
                            color: '#ff9900'
                        }
                    })])]);
                }
            }]
        };
    },

    methods: {
        loadInterview: function loadInterview() {
            var _this2 = this;

            this.loading = true;
            this.$axios.options.url = 'houseMortgage/hmProjInterview/read/interviewerWorkStatus';
            this.$axios.request({ data: {} }).then(function (response) {
                _this2.loading = false;
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                _this2.workloadData = response.data;
            }).catch(function (error) {
                _this2.loading = false;
                _this2.$Message.error(_this2.$config.ERROR);
            });
        },
        loadUser: function loadUser() {
            var _this3 = this;

            this.$axios.options.url = 'sys/user/read/queryByRoleId';
            this.$axios.request({ data: { roleId: 'OUTOF_OFFICE_REVIEWER' } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.users = response.data;
            }).catch(function (error) {
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },
        cancel: function cancel() {
            var _this4 = this;

            this.isCancel = true;
            this.model.operation = 0;
            this.$axios.options.url = 'houseMortgage/hmProject/xiahufenpei';
            this.$axios.request({ data: JSON.stringify(this.model) }, 'json').then(function (response) {
                _this4.isCancel = false;
                if (response.httpCode != 200) {
                    _this4.$Message.error(response.msg || _this4.$config.ERROR);
                    return;
                }
                _this4.$router.push({ name: 'backlog' });
            }).catch(function (error) {
                _this4.isCancel = false;
                _this4.$Message.error(_this4.$config.ERROR);
            });
        },
        submit: function submit() {
            var _this5 = this;

            this.$refs.arrangement.validate(function (valid) {
                if (valid) {
                    _this5.isSubmit = true;
                    _this5.model.operation = 1;
                    _this5.$axios.options.url = 'houseMortgage/hmProject/xiahufenpei';
                    _this5.$axios.request({ data: JSON.stringify(_this5.model) }, 'json').then(function (response) {
                        _this5.isSubmit = false;
                        if (response.httpCode != 200) {
                            _this5.$Message.error(response.msg || _this5.$config.ERROR);
                            return;
                        }
                        _this5.$router.push('backlog');
                    }).catch(function (error) {
                        _this5.isSubmit = false;
                        _this5.$Message.error(_this5.$config.ERROR);
                    });
                }
            });
        }
    },
    created: function created() {
        this.loadUser();
        this.loadInterview();
    }
});

/***/ }),

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: {}
        };
    },

    methods: {
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjectClob/read/detail ';
            this.$axios.request({ data: { id: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.model = response.data;
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

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1043),
  /* template */
  __webpack_require__(1155),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/householdArrangement.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] householdArrangement.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-734f4ebf", Component.options)
  } else {
    hotAPI.reload("data-v-734f4ebf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1045),
  /* template */
  __webpack_require__(1145),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/householdInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] householdInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60a15fe1", Component.options)
  } else {
    hotAPI.reload("data-v-60a15fe1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n            借款人及担保人信息描述\n        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.model.clientDesc) + "\n        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n            经营情况描述\n        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.model.managementDesc) + "\n        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n            内审意见\n        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.model.internalAuditAdvice) + "\n        ")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-60a15fe1", module.exports)
  }
}

/***/ }),

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Form', {
    ref: "arrangement",
    attrs: {
      "model": _vm.model,
      "rules": _vm.rules,
      "label-width": 120
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                下户人员地图分布\n            ")]), _vm._v(" "), _c('div')]), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                工作量现状\n            ")]), _vm._v(" "), _c('Table', {
    attrs: {
      "loading": _vm.loading,
      "data": _vm.workloadData,
      "columns": _vm.WorkloadColumns
    }
  })], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "interviewer"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                        分配给\n                    ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "filterable": "",
      "placeholder": "选择下户人员 | 必填"
    },
    model: {
      value: (_vm.model.interviewer),
      callback: function($$v) {
        _vm.$set(_vm.model, "interviewer", $$v)
      },
      expression: "model.interviewer"
    }
  }, _vm._l((_vm.users), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                            " + _vm._s(item.userName) + "\n                        ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('div', {
    staticClass: "text-right"
  }, [_c('Button', {
    attrs: {
      "type": "warning",
      "loading": _vm.isCancel,
      "disabled": _vm.isSubmit
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("\n                退回\n            ")]), _vm._v("\n             \n            "), _c('Button', {
    attrs: {
      "type": "primary",
      "loading": _vm.isSubmit,
      "disabled": _vm.isCancel
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n                提交\n            ")])], 1)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": 800,
      "title": "月里程碑"
    },
    model: {
      value: (_vm.stats),
      callback: function($$v) {
        _vm.stats = $$v
      },
      expression: "stats"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "780px",
      "height": "300px"
    },
    attrs: {
      "id": "charts"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    on: {
      "click": function($event) {
        _vm.stats = false
      }
    }
  }, [_vm._v("\n                关闭\n            ")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-734f4ebf", module.exports)
  }
}

/***/ }),

/***/ 1177:
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
  }, [_vm._v("\n                返回\n            ")])], 1)], 2), _vm._v(" "), _c('keep-alive', [_c(_vm.currentTabComponent, {
    tag: "component",
    attrs: {
      "model": _vm.model,
      "dicts": _vm.dicts,
      "step": 0
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-c735a766", module.exports)
  }
}

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(984),
  /* template */
  __webpack_require__(1177),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/allocation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] allocation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c735a766", Component.options)
  } else {
    hotAPI.reload("data-v-c735a766", Component.options)
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

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: []
        };
    },

    methods: {
        loadFiles: function loadFiles() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.model = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        getFiles: function getFiles(flag) {
            var array = this.model.filter(function (item) {
                return item.projectFileGroup === flag;
            });
            return array[0] ? array[0].files : [];
        }
    },
    created: function created() {
        this.loadFiles();
    }
});

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(936),
  /* template */
  __webpack_require__(946),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/files.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] files.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6f9b5da", Component.options)
  } else {
    hotAPI.reload("data-v-f6f9b5da", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "attachment"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "attachment",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n            附件\n        ")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                    房产证/不动产登记证\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('0')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    土地证\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('1')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    身份证\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('2')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    配偶身份证\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('3')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-f6f9b5da", module.exports)
  }
}

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation__);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },

    props: {
        model: Object,
        dicts: Object,
        step: Number
    },
    components: {
        'mortgage': __WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation___default.a
    }
});

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_apply__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_apply___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_apply__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_files__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_files___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_files__);



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },

    props: {
        model: Object,
        dicts: Object,
        step: Number
    },
    components: {
        'apply': __WEBPACK_IMPORTED_MODULE_0__views_tabs_apply___default.a,
        'files': __WEBPACK_IMPORTED_MODULE_1__views_tabs_files___default.a
    }
});

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(947),
  /* template */
  __webpack_require__(960),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/apply.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] apply.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56349a8a", Component.options)
  } else {
    hotAPI.reload("data-v-56349a8a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(948),
  /* template */
  __webpack_require__(963),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/auditInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] auditInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-848c5336", Component.options)
  } else {
    hotAPI.reload("data-v-848c5336", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "apply"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "apply",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                申请基本信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        申请人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.applyUserName) + "\n                    ")]), _vm._v(" "), _c('Col', {
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
  }, [_vm._v("\n                        申请部门\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.applyDeptName) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        申请产品\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.product_name.productName) + "\n                    ")]), _vm._v(" "), _c('Col', {
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
  }, [_vm._v("\n                        " + _vm._s(_vm.model.clientName) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
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
  }, [_vm._v("\n                        还款方式\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.initRepayMethodText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        其他还款方式说明\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.hmProjPlan.repaymentRemark) + "\n                    ")])], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('mortgage', {
    attrs: {
      "step": _vm.step,
      "model": _vm.model
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-56349a8a", module.exports)
  }
}

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('apply', {
    attrs: {
      "model": _vm.model,
      "dicts": _vm.dicts,
      "step": _vm.step
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('files')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-848c5336", module.exports)
  }
}

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: {
                cost: {},
                estimate: {}
            }
        };
    },

    methods: {
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjFee/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.model.cost = response.data.find(function (item) {
                    item.fee = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(item.fee);
                    return item.feeType === '0';
                }) || {};
                _this.model.estimate = response.data.find(function (item) {
                    item.fee = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(item.fee);
                    return item.feeType === '1';
                }) || {};
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

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(965),
  /* template */
  __webpack_require__(978),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/chargeInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] chargeInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d6a2a418", Component.options)
  } else {
    hotAPI.reload("data-v-d6a2a418", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "cost"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "cost",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                下户费\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        下户费\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.fee + '元') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        收费时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.chargeTime) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        确认时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.createTime) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        收费方式\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.chargeType) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        收费账户\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.chargeAccount) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        确认人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.createBy) + "\n                            \n                        "), (_vm.model.cost.feeFile) ? _c('a', {
    attrs: {
      "href": _vm.model.cost.feeFile,
      "target": "_blank"
    }
  }, [_vm._v("\n                            查看凭证\n                        ")]) : _vm._e()])], 1)], 1)])], 1), _vm._v(" "), (_vm.model.estimate.chargeFlag === '1') ? _c('div', [_c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "estimate"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "estimate",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    预估单费\n                ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            预估单费\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.fee + '元') + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            收费时间\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.chargeTime) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            确认时间\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.createTime) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            收费方式\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.chargeType) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            收费账户\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.chargeAccount) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            评估机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.evalAgency) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            确认人\n                        ")]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.createBy) + "\n                                \n                            "), (_vm.model.estimate.feeFile) ? _c('a', {
    attrs: {
      "href": _vm.model.estimate.feeFile,
      "target": "_blank"
    }
  }, [_vm._v("\n                                查看凭证\n                            ")]) : _vm._e()])], 1)], 1)])], 1)], 1) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "policy"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "policy",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                优惠政策\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        下户费未收取原因\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.chargeFreeReason) + "\n                    ")])], 1)], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-d6a2a418", module.exports)
  }
}

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_auditInformation__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_auditInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_auditInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_chargeInformation__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_chargeInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_chargeInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_householdInformation__ = __webpack_require__(1085);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_householdInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_tabs_householdInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_tabs_householdArrangement__ = __webpack_require__(1083);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_tabs_householdArrangement___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_tabs_householdArrangement__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_util__ = __webpack_require__(203);






/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            tabName: 'auditInformation',
            tabs: [{ id: 'auditInformation', text: '申请信息' }, { id: 'chargeInformation', text: '收费信息' }, { id: 'householdInformation', text: '内审信息' }, { id: 'householdArrangement', text: '下户安排' }],
            model: {
                client: {},
                product_name: {},
                hmProjPlan: {}
            },
            dicts: {}
        };
    },

    computed: {
        currentTabComponent: function currentTabComponent() {
            return this.tabName;
        }
    },
    components: {
        'auditInformation': __WEBPACK_IMPORTED_MODULE_0__views_tabs_auditInformation___default.a,
        'chargeInformation': __WEBPACK_IMPORTED_MODULE_1__views_tabs_chargeInformation___default.a,
        'householdInformation': __WEBPACK_IMPORTED_MODULE_2__views_tabs_householdInformation___default.a,
        'householdArrangement': __WEBPACK_IMPORTED_MODULE_3__views_tabs_householdArrangement___default.a
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
                _this.dicts = response.dicts;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        loadPlan: function loadPlan(id) {
            var _this2 = this;

            this.$axios.options.url = 'houseMortgage/hmProjPlan/read/queryByProjectId';
            this.$axios.request({ data: { projectId: id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                _this2.model.hmProjPlan = response.data[0] || {};
            }).catch(function (error) {
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
                response.data.product_name = response.data.product_name || {};
                response.data.initLoanAmountText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__libs_util__["j" /* formatMoney */])(response.data.initLoanAmount);
                response.data.hmProjPlan = {};
                _this3.model = response.data;
                _this3.loadClient(response.data.clientId);
                _this3.loadPlan(response.data.id);
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2hvdXNlaG9sZEFycmFuZ2VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvaG91c2Vob2xkSW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvaG91c2Vob2xkQXJyYW5nZW1lbnQudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2hvdXNlaG9sZEluZm9ybWF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9ob3VzZWhvbGRJbmZvcm1hdGlvbi52dWU/ZWRmMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9ob3VzZWhvbGRBcnJhbmdlbWVudC52dWU/OTk3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWxsb2NhdGlvbi52dWU/Nzc5YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWxsb2NhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9ldmFsdWF0aW9uLmpzPzQwMDYqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi5qcz8xMDE0KiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9ldmFsdWF0aW9uLnZ1ZT84MDM4KiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9tb3J0Z2FnZUluZm9ybWF0aW9uLnZ1ZT83ZTBiKiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9ldmFsdWF0aW9uLnZ1ZT9hNTE2KioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi52dWU/YzViYyoqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvZmlsZXMuanM/MTBiNioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvZmlsZXMudnVlP2NkZWIqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2ZpbGVzLnZ1ZT9kMDhkKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9hcHBseS5qcz9mYTM5KiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2F1ZGl0SW5mb3JtYXRpb24uanM/MjllNioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvYXBwbHkudnVlP2UzYTcqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2F1ZGl0SW5mb3JtYXRpb24udnVlPzk0NzkqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2FwcGx5LnZ1ZT80ZWFhKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvYXVkaXRJbmZvcm1hdGlvbi52dWU/MDY0ZioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvY2hhcmdlSW5mb3JtYXRpb24uanM/OTJlYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9jaGFyZ2VJbmZvcm1hdGlvbi52dWU/NjE0NiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9jaGFyZ2VJbmZvcm1hdGlvbi52dWU/OGJkZioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxsb2NhdGlvbi5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsIm1vZGVsIiwiT2JqZWN0IiwiZGF0YSIsImNoYXJ0Iiwib3B0aW9uIiwidG9vbHRpcCIsInRyaWdnZXIiLCJheGlzUG9pbnRlciIsInR5cGUiLCJncmlkIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiY29udGFpbkxhYmVsIiwieEF4aXMiLCJ5QXhpcyIsInNlcmllcyIsInN0YXRzIiwiaXNTdWJtaXQiLCJpc0NhbmNlbCIsImxvYWRpbmciLCJydWxlcyIsImludGVydmlld2VyIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwidXNlcnMiLCJ3b3JrbG9hZERhdGEiLCJXb3JrbG9hZENvbHVtbnMiLCJ0aXRsZSIsImtleSIsInJlbmRlciIsImgiLCJwYXJhbXMiLCJyb3ciLCJobVByb2pJbnRlcnZpZXdCZWFuTGlzdCIsImxlbmd0aCIsInN0eWxlIiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbiIsInBhZGRpbmciLCJtYXAiLCJpdGVtIiwiaW50ZXJ2aWV3QWRkcmVzcyIsIm9uIiwiY2xpY2siLCIkZWNoYXJ0cyIsImluaXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2hvd0xvYWRpbmciLCIkYXhpb3MiLCJvcHRpb25zIiwidXJsIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImhpZGVMb2FkaW5nIiwiaHR0cENvZGUiLCIkTWVzc2FnZSIsImVycm9yIiwibXNnIiwiJGNvbmZpZyIsIkVSUk9SIiwia2V5cyIsImluZGV4IiwidmFsdWVzIiwic2V0T3B0aW9uIiwiY2F0Y2giLCJjb250ZW50IiwicGxhY2VtZW50Iiwic2l6ZSIsImNvbG9yIiwibWV0aG9kcyIsImxvYWRJbnRlcnZpZXciLCJsb2FkVXNlciIsInJvbGVJZCIsImNhbmNlbCIsIm9wZXJhdGlvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCIkcm91dGVyIiwicHVzaCIsIm5hbWUiLCJzdWJtaXQiLCIkcmVmcyIsImFycmFuZ2VtZW50IiwidmFsaWRhdGUiLCJ2YWxpZCIsImNyZWF0ZWQiLCJsb2FkTW9kZWwiLCJpZCIsImN1cnJlbnRSb3V0ZSIsImV2YWx1YXRpb25MaXN0Iiwic3RlcCIsIk51bWJlciIsInByb2plY3RJZCIsImV2YWxQZXJpb2QiLCJmb3JFYWNoIiwiZXZhbFZhbCIsImZvcm1hdE1vbmV5IiwibW9ydGdhZ2UiLCJjb21wb25lbnRzIiwiZXZhbHVhdGlvbiIsImJhY2t1cEZsYWciLCJsb2FkRmlsZXMiLCJnZXRGaWxlcyIsImZsYWciLCJhcnJheSIsImZpbHRlciIsInByb2plY3RGaWxlR3JvdXAiLCJmaWxlcyIsImRpY3RzIiwiY29zdCIsImVzdGltYXRlIiwiZmluZCIsImZlZSIsImZlZVR5cGUiLCJ0YWJOYW1lIiwidGFicyIsInRleHQiLCJjbGllbnQiLCJwcm9kdWN0X25hbWUiLCJobVByb2pQbGFuIiwiY29tcHV0ZWQiLCJjdXJyZW50VGFiQ29tcG9uZW50IiwiaG91c2Vob2xkQXJyYW5nZW1lbnQiLCJsb2FkQ2xpZW50IiwibG9hZFBsYW4iLCJpbml0TG9hbkFtb3VudFRleHQiLCJpbml0TG9hbkFtb3VudCIsImNsaWVudElkIiwibW91bnRlZCIsIiRyb290IiwiZXZlbnRIdWIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSwrREFBZTtBQUNYQSxXQUFPO0FBQ0hDLGVBQU9DO0FBREosS0FESTtBQUlYQyxRQUpXLGtCQUlKO0FBQUE7O0FBQ0gsZUFBTztBQUNIQyxtQkFBTyxJQURKO0FBRUhDLG9CQUFRO0FBQ0pDLHlCQUFTO0FBQ0xDLDZCQUFTLE1BREo7QUFFTEMsaUNBQWE7QUFDVEMsOEJBQU07QUFERztBQUZSLGlCQURMO0FBT0pDLHNCQUFNO0FBQ0ZDLHlCQUFLLElBREg7QUFFRkMsMEJBQU0sSUFGSjtBQUdGQywyQkFBTyxJQUhMO0FBSUZDLDRCQUFRLElBSk47QUFLRkMsa0NBQWM7QUFMWixpQkFQRjtBQWNKQyx1QkFBTztBQUNIUCwwQkFBTSxVQURIO0FBRUhOLDBCQUFNO0FBRkgsaUJBZEg7QUFrQkpjLHVCQUFPO0FBQ0hSLDBCQUFNO0FBREgsaUJBbEJIO0FBcUJKUyx3QkFBUSxDQUFDO0FBQ0xmLDBCQUFNLEVBREQ7QUFFTE0sMEJBQU07QUFGRCxpQkFBRDtBQXJCSixhQUZMO0FBNEJIVSxtQkFBTyxLQTVCSjtBQTZCSEMsc0JBQVUsS0E3QlA7QUE4QkhDLHNCQUFVLEtBOUJQO0FBK0JIQyxxQkFBUyxLQS9CTjtBQWdDSEMsbUJBQU8sRUFBQ0MsYUFBYSxDQUFDLEVBQUNDLFVBQVUsSUFBWCxFQUFpQkMsU0FBUyxVQUExQixFQUFELENBQWQsRUFoQ0o7QUFpQ0hDLG1CQUFPLEVBakNKO0FBa0NIQywwQkFBYyxFQWxDWDtBQW1DSEMsNkJBQWlCLENBQUMsRUFBQ0MsT0FBTyxNQUFSLEVBQWdC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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7OztBQzNCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FB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TCxHQUFhd0QsU0FBU3RELElBQXRCO0FBQ0EsdUJBQUs2SCxVQUFMLENBQWdCdkUsU0FBU3RELElBQVQsQ0FBY2lJLFFBQTlCO0FBQ0EsdUJBQUtILFFBQUwsQ0FBY3hFLFNBQVN0RCxJQUFULENBQWN5RixFQUE1QjtBQUNILGFBWkQsRUFZR3ZCLEtBWkgsQ0FZUyxVQUFDUixLQUFELEVBQVc7QUFDaEIsdUJBQUtELFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixPQUFLRSxPQUFMLENBQWFDLEtBQWpDO0FBQ0gsYUFkRDtBQWVIO0FBM0NJLEtBM0JFO0FBd0VYMEIsV0F4RVcscUJBd0VEO0FBQ04sYUFBS0MsU0FBTDtBQUNILEtBMUVVO0FBMkVYMEMsV0EzRVcscUJBMkVEO0FBQ04sYUFBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxLQUFwQixDQUEwQixZQUExQjtBQUNIO0FBN0VVLENBQWYsRSIsImZpbGUiOiIyLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0aW1lVXRpbH0gZnJvbSBcIi4uLy4uL2xpYnMvdXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWw6IE9iamVjdFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoYXJ0OiBudWxsLFxuICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYXhpcycsXG4gICAgICAgICAgICAgICAgICAgIGF4aXNQb2ludGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2hhZG93J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogJzMlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzMlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICczJScsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzMlJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcidcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXRzOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU3VibWl0OiBmYWxzZSxcbiAgICAgICAgICAgIGlzQ2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcnVsZXM6IHtpbnRlcnZpZXdlcjogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+S4i+aIt+S6uuWRmOS4jeiDveS4uuepuid9XX0sXG4gICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICB3b3JrbG9hZERhdGE6IFtdLFxuICAgICAgICAgICAgV29ya2xvYWRDb2x1bW5zOiBbe3RpdGxlOiAn5LiL5oi35Lq65ZGYJywga2V5OiAnaW50ZXJ2aWV3ZXJOYW1lJ30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+W+heWKnuS4i+aIt+S7u+WKoeaVsOmHjycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ2xhYmVsJywgcGFyYW1zLnJvdy5obVByb2pJbnRlcnZpZXdCZWFuTGlzdC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S4i+aIt+WcsOeCuScsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ3VsJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBhcmFtcy5yb3cuaG1Qcm9qSW50ZXJ2aWV3QmVhbkxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ2xpJywgaXRlbS5pbnRlcnZpZXdBZGRyZXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5LiL5oi35Lq65ZGY5pyI5bel5L2cJywga2V5OiAnaW50ZXJ2aWV3ZXJNb250aFdvcmsnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aciOmHjOeoiycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydCA9IHRoaXMuJGVjaGFydHMuaW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRzJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydC5zaG93TG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2pJbnRlcnZpZXcvcmVhZC9jaGVja0ludGVydmlld0xpQ2hlbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge319KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnQuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbi54QXhpcy5kYXRhID0gT2JqZWN0LmtleXMocmVzcG9uc2UuZGF0YSkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCsraW5kZXgpICsgJ+aciCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbi5zZXJpZXNbMF0uZGF0YSA9IE9iamVjdC52YWx1ZXMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydC5zZXRPcHRpb24odGhpcy5vcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5p+l55yLJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21kLXN0YXRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjk5MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWRJbnRlcnZpZXcoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2pJbnRlcnZpZXcvcmVhZC9pbnRlcnZpZXdlcldvcmtTdGF0dXMnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge319KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLndvcmtsb2FkRGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFVzZXIoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdzeXMvdXNlci9yZWFkL3F1ZXJ5QnlSb2xlSWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge3JvbGVJZDogJ09VVE9GX09GRklDRV9SRVZJRVdFUid9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsKCkge1xuICAgICAgICAgICAgdGhpcy5pc0NhbmNlbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLm9wZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvamVjdC94aWFodWZlbnBlaSc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiBKU09OLnN0cmluZ2lmeSh0aGlzLm1vZGVsKX0sICdqc29uJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuY2VsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnYmFja2xvZyd9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDYW5jZWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5hcnJhbmdlbWVudC52YWxpZGF0ZSgodmFsaWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwub3BlcmF0aW9uID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2plY3QveGlhaHVmZW5wZWknO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiBKU09OLnN0cmluZ2lmeSh0aGlzLm1vZGVsKX0sICdqc29uJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJtaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCdiYWNrbG9nJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkVXNlcigpO1xuICAgICAgICB0aGlzLmxvYWRJbnRlcnZpZXcoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9ob3VzZWhvbGRBcnJhbmdlbWVudC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kZWw6IHt9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgICBsb2FkTW9kZWwoKXtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qZWN0Q2xvYi9yZWFkL2RldGFpbCAnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2lkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCl7XG4gICAgICAgIHRoaXMubG9hZE1vZGVsKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvaG91c2Vob2xkSW5mb3JtYXRpb24uanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vY29tcG9uZW50cy90YWJzL2hvdXNlaG9sZEFycmFuZ2VtZW50LmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MzRmNGViZlxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9ob3VzZWhvbGRBcnJhbmdlbWVudC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9ob3VzZWhvbGRBcnJhbmdlbWVudC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBob3VzZWhvbGRBcnJhbmdlbWVudC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzM0ZjRlYmZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03MzRmNGViZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9ob3VzZWhvbGRBcnJhbmdlbWVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDEwODNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9ob3VzZWhvbGRJbmZvcm1hdGlvbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjBhMTVmZTFcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vaG91c2Vob2xkSW5mb3JtYXRpb24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3RhYnMvaG91c2Vob2xkSW5mb3JtYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaG91c2Vob2xkSW5mb3JtYXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTYwYTE1ZmUxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjBhMTVmZTFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvaG91c2Vob2xkSW5mb3JtYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5YCf5qy+5Lq65Y+K5ouF5L+d5Lq65L+h5oGv5o+P6L+wXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIxXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY2xpZW50RGVzYykgKyBcIlxcbiAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg57uP6JCl5oOF5Ya15o+P6L+wXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIxXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwubWFuYWdlbWVudERlc2MpICsgXCJcXG4gICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIOWGheWuoeaEj+ingVxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmludGVybmFsQXVkaXRBZHZpY2UpICsgXCJcXG4gICAgICAgIFwiKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02MGExNWZlMVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTYwYTE1ZmUxXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvdGFicy9ob3VzZWhvbGRJbmZvcm1hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDExNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ0Zvcm0nLCB7XG4gICAgcmVmOiBcImFycmFuZ2VtZW50XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibW9kZWxcIjogX3ZtLm1vZGVsLFxuICAgICAgXCJydWxlc1wiOiBfdm0ucnVsZXMsXG4gICAgICBcImxhYmVsLXdpZHRoXCI6IDEyMFxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDkuIvmiLfkurrlkZjlnLDlm77liIbluINcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicpXSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDlt6XkvZzph4/njrDnirZcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1RhYmxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxvYWRpbmdcIjogX3ZtLmxvYWRpbmcsXG4gICAgICBcImRhdGFcIjogX3ZtLndvcmtsb2FkRGF0YSxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uV29ya2xvYWRDb2x1bW5zXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwcm9wXCI6IFwiaW50ZXJ2aWV3ZXJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YiG6YWN57uZXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIixcbiAgICAgIFwiZmlsdGVyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumAieaLqeS4i+aIt+S6uuWRmCB8IOW/heWhq1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubW9kZWwuaW50ZXJ2aWV3ZXIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0ubW9kZWwsIFwiaW50ZXJ2aWV3ZXJcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwibW9kZWwuaW50ZXJ2aWV3ZXJcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0udXNlcnMpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdPcHRpb24nLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInZhbHVlXCI6IGl0ZW0uaWRcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udXNlck5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdEaXZpZGVyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiXG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ3YXJuaW5nXCIsXG4gICAgICBcImxvYWRpbmdcIjogX3ZtLmlzQ2FuY2VsLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uaXNTdWJtaXRcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jYW5jZWxcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg6YCA5ZueXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgIMKgXFxuICAgICAgICAgICAgXCIpLCBfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcImxvYWRpbmdcIjogX3ZtLmlzU3VibWl0LFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uaXNDYW5jZWxcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5zdWJtaXRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5o+Q5LqkXFxuICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnTW9kYWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwid2lkdGhcIjogODAwLFxuICAgICAgXCJ0aXRsZVwiOiBcIuaciOmHjOeoi+eikVwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc3RhdHMpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc3RhdHMgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInN0YXRzXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiNzgwcHhcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMzAwcHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJjaGFydHNcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImZvb3RlclwiXG4gICAgfSxcbiAgICBzbG90OiBcImZvb3RlclwiXG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc3RhdHMgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDlhbPpl61cXG4gICAgICAgICAgICBcIildKV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03MzRmNGViZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTczNGY0ZWJmXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvdGFicy9ob3VzZWhvbGRBcnJhbmdlbWVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ1RhYnMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYW5pbWF0ZWRcIjogZmFsc2VcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS50YWJOYW1lKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLnRhYk5hbWUgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInRhYk5hbWVcIlxuICAgIH1cbiAgfSwgW192bS5fbCgoX3ZtLnRhYnMpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdUYWJQYW5lJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJuYW1lXCI6IGl0ZW0uaWQsXG4gICAgICAgIFwibGFiZWxcIjogaXRlbS50ZXh0XG4gICAgICB9XG4gICAgfSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdCdXR0b25Hcm91cCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiZXh0cmFcIlxuICAgIH0sXG4gICAgc2xvdDogXCJleHRyYVwiXG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JhY2snLCB7XG4gICAgICAgICAgbmFtZTogJ2JhY2tsb2cnLFxuICAgICAgICAgIHBhcmFtczogX3ZtLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDov5Tlm55cXG4gICAgICAgICAgICBcIildKV0sIDEpXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdrZWVwLWFsaXZlJywgW19jKF92bS5jdXJyZW50VGFiQ29tcG9uZW50LCB7XG4gICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbCxcbiAgICAgIFwiZGljdHNcIjogX3ZtLmRpY3RzLFxuICAgICAgXCJzdGVwXCI6IDBcbiAgICB9XG4gIH0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1jNzM1YTc2NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWM3MzVhNzY2XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvYWxsb2NhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uL2NvbXBvbmVudHMvYWxsb2NhdGlvbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYzczNWE3NjZcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vYWxsb2NhdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvYWxsb2NhdGlvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhbGxvY2F0aW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1jNzM1YTc2NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWM3MzVhNzY2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9hbGxvY2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCB7Zm9ybWF0TW9uZXl9IGZyb20gXCIuLi8uLi9saWJzL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBldmFsdWF0aW9uTGlzdDogW11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWw6IE9iamVjdCxcbiAgICAgICAgc3RlcDogTnVtYmVyXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWRNb2RlbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qRXZhbHVhdGlvbi9yZWFkL3F1ZXJ5QnlQcm9qZWN0SWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICBldmFsUGVyaW9kOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZXZhbFZhbCA9IGZvcm1hdE1vbmV5KGl0ZW0uZXZhbFZhbClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2YWx1YXRpb25MaXN0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkTW9kZWwoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9ldmFsdWF0aW9uLmpzIiwiaW1wb3J0IGV2YWx1YXRpb24gZnJvbSAnLi4vLi4vdmlld3MvdGFicy9ldmFsdWF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vcnRnYWdlOiB7fVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBtb2RlbDogT2JqZWN0LFxuICAgICAgICBzdGVwOiBOdW1iZXJcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ2V2YWx1YXRpb24nOiBldmFsdWF0aW9uXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWRNb2RlbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1QYXduL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIGJhY2t1cEZsYWc6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vcnRnYWdlID0gcmVzcG9uc2UuZGF0YVswXSB8fCB7fTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZE1vZGVsKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvZXZhbHVhdGlvbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTA1ZDgyZDBcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vZXZhbHVhdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9ldmFsdWF0aW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGV2YWx1YXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTUwNWQ4MmQwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTA1ZDgyZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvZXZhbHVhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDggOSAxMCAxMiAxMyAxNCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYmJkZjgzZThcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vbW9ydGdhZ2VJbmZvcm1hdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9tb3J0Z2FnZUluZm9ybWF0aW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG1vcnRnYWdlSW5mb3JtYXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWJiZGY4M2U4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYmJkZjgzZThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDggOSAxMCAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW192bS5fbCgoX3ZtLmV2YWx1YXRpb25MaXN0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZhbFR5cGUgPT09ICcyJ1xuICB9KSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gKF92bS5zdGVwID4gMCkgPyBfYygnUm93Jywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgc3RhdGljQ2xhc3M6IFwibWIxNlwiXG4gICAgfSwgW19jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDmnLrmnoTor4TkvLBcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uYWdlbmN5VGV4dCkgKyBcIlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI4XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5ldmFsVmFsICsgJ+WFgycpICsgXCJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoaXRlbS5wcmVFdmFsRmlsZSkgPyBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0ucHJlRXZhbEZpbGVQYXRoLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDpooTkvLDljZVcXG4gICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCldLCAxKSA6IF92bS5fZSgpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5ldmFsdWF0aW9uTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2YWxUeXBlID09PSAnMCdcbiAgfSkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIChfdm0uc3RlcCA+IDEpID8gX2MoJ1JvdycsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1iMTZcIlxuICAgIH0sIFtfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIzXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5Lit5LuL6K+E5LywXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmFnZW5jeVRleHQpICsgXCJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uZXZhbFZhbCArICflhYMnKSArIFwiXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgKGl0ZW0udXJsKSA/IF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI4XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogaXRlbS51cmwsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOafpeeci1xcbiAgICAgICAgICAgIFwiKV0pXSkgOiBfdm0uX2UoKV0sIDEpIDogX3ZtLl9lKClcbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0uc3RlcCA+IDApID8gX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDliJ3or4Tku7flgLxcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjFcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5maXJzdEV2YWx1ZVRleHQgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgXCIpXSldLCAxKSA6IF92bS5fZSgpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTA1ZDgyZDBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01MDVkODJkMFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvZXZhbHVhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDggOSAxMCAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJtb3J0Z2FnZXNcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwibW9ydGdhZ2VzXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5oq15oq854mp5L+h5oGvXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOero+W3peaXpeacn1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vcnRnYWdlLmNvbXBsZXRpb25EYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOW7uuaIkOaXpeacn1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vcnRnYWdlLmRhdGVDb21wbGV0aW9uKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOa1i+e7mOaXpeacn1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vcnRnYWdlLm1hcHBpbmdEYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5Zyf5Zyw5Y+W5b6X5pel5pyfXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9ydGdhZ2UubGFuZEdldERhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5bu6562R6Z2i56evXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9ydGdhZ2UuYnVpZGluZ0FjcmVhZ2UgKyAn5bmz57GzJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmiL/lsYvnsbvlnotcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb3J0Z2FnZS5ob3VzZVR5cGVUZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5Zyw5Z2AXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjFcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vcnRnYWdlLnByb3ZpbmNlICsgX3ZtLm1vcnRnYWdlLmNpdHkgKyBfdm0ubW9ydGdhZ2UuYXJlYSArIF92bS5tb3J0Z2FnZS5kZXRhaWxlZEFkZHJlc3MpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdldmFsdWF0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbCxcbiAgICAgIFwic3RlcFwiOiBfdm0uc3RlcFxuICAgIH1cbiAgfSldLCAxKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYmJkZjgzZThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1iYmRmODNlOFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDggOSAxMCAxMiAxMyAxNCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kZWw6IFtdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZEZpbGVzKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2pGaWxlL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7cHJvamVjdElkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRGaWxlcyhmbGFnKSB7XG4gICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLm1vZGVsLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb2plY3RGaWxlR3JvdXAgPT09IGZsYWc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheVswXSA/IGFycmF5WzBdLmZpbGVzIDogW107XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZEZpbGVzKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvZmlsZXMuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vY29tcG9uZW50cy90YWJzL2ZpbGVzLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1mNmY5YjVkYVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9maWxlcy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9maWxlcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBmaWxlcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZjZmOWI1ZGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mNmY5YjVkYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9maWxlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDk0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDE1IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImF0dGFjaG1lbnRcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiYXR0YWNobWVudFwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIOmZhOS7tlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdDYXJkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpcy1ob3ZlclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3IgZm9udDEyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcInRpdGxlXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmiL/kuqfor4Ev5LiN5Yqo5Lqn55m76K6w6K+BXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5nZXRGaWxlcygnMCcpKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZXMgaW5saW5lLWJsb2NrIG1yMTYgbWIxNlwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRcIixcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGl0ZW0ucGF0aCArICcpJyxcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJ1xuICAgICAgfSlcbiAgICB9KV0pXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ2FyZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXMtaG92ZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yIGZvbnQxMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJ0aXRsZVwiXG4gICAgfSxcbiAgICBzbG90OiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5Zyf5Zyw6K+BXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5nZXRGaWxlcygnMScpKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZXMgaW5saW5lLWJsb2NrIG1yMTYgbWIxNlwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRcIixcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGl0ZW0ucGF0aCArICcpJyxcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJ1xuICAgICAgfSlcbiAgICB9KV0pXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ2FyZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXMtaG92ZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yIGZvbnQxMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJ0aXRsZVwiXG4gICAgfSxcbiAgICBzbG90OiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg6Lqr5Lu96K+BXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5nZXRGaWxlcygnMicpKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZXMgaW5saW5lLWJsb2NrIG1yMTYgbWIxNlwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRcIixcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGl0ZW0ucGF0aCArICcpJyxcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJ1xuICAgICAgfSlcbiAgICB9KV0pXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ2FyZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXMtaG92ZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yIGZvbnQxMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJ0aXRsZVwiXG4gICAgfSxcbiAgICBzbG90OiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg6YWN5YG26Lqr5Lu96K+BXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5nZXRGaWxlcygnMycpKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZXMgaW5saW5lLWJsb2NrIG1yMTYgbWIxNlwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRcIixcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGl0ZW0ucGF0aCArICcpJyxcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJ1xuICAgICAgfSlcbiAgICB9KV0pXG4gIH0pXSwgMildLCAxKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZjZmOWI1ZGFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mNmY5YjVkYVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvZmlsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA5NDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAxNSIsImltcG9ydCBtb3J0Z2FnZSBmcm9tICcuLi8uLi92aWV3cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge31cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG1vZGVsOiBPYmplY3QsXG4gICAgICAgIGRpY3RzOiBPYmplY3QsXG4gICAgICAgIHN0ZXA6IE51bWJlclxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAnbW9ydGdhZ2UnOiBtb3J0Z2FnZVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YWJzL2FwcGx5LmpzIiwiaW1wb3J0IGFwcGx5IGZyb20gJy4uLy4uL3ZpZXdzL3RhYnMvYXBwbHknXG5pbXBvcnQgZmlsZXMgZnJvbSBcIi4uLy4uL3ZpZXdzL3RhYnMvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWw6IE9iamVjdCxcbiAgICAgICAgZGljdHM6IE9iamVjdCxcbiAgICAgICAgc3RlcDogTnVtYmVyXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICdhcHBseSc6IGFwcGx5LFxuICAgICAgICAnZmlsZXMnOiBmaWxlc1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YWJzL2F1ZGl0SW5mb3JtYXRpb24uanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vY29tcG9uZW50cy90YWJzL2FwcGx5LmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NjM0OWE4YVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9hcHBseS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9hcHBseS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhcHBseS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTYzNDlhOGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01NjM0OWE4YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9hcHBseS52dWVcbi8vIG1vZHVsZSBpZCA9IDk1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9hdWRpdEluZm9ybWF0aW9uLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04NDhjNTMzNlxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9hdWRpdEluZm9ybWF0aW9uLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy90YWJzL2F1ZGl0SW5mb3JtYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYXVkaXRJbmZvcm1hdGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtODQ4YzUzMzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04NDhjNTMzNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9hdWRpdEluZm9ybWF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJhcHBseVwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJhcHBseVwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDnlLPor7fln7rmnKzkv6Hmga9cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDnlLPor7fkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcGx5VXNlck5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDnlLPor7fml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcGx5RGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOeUs+ivt+mDqOmXqFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwbHlEZXB0TmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg55Sz6K+35Lqn5ZOBXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5wcm9kdWN0X25hbWUucHJvZHVjdE5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmjqjojZDmuKDpgZNcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNoYW5uYWxOYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5a6i5oi35aeT5ZCNXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jbGllbnROYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDor4Hku7bnsbvlnotcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNsaWVudC5jZXJ0aWZpY2F0ZXNUeXBlVGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOivgeS7tuWPt1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY2xpZW50LmNlcnRpZmljYXRlc051bWJlcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWAn+asvumHkeminVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaW5pdExvYW5BbW91bnRUZXh0ICsgJ+WFgycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWAn+asvuaXpeacn1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaW5pdExvYW5EYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+5pyf6ZmQXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5pbml0TG9hblBlcmlvZCArICfkuKrmnIgnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+55So6YCUXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5sb2FuVXNhZ2UpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOi/mOasvuaWueW8j1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaW5pdFJlcGF5TWV0aG9kVGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWFtuS7lui/mOasvuaWueW8j+ivtOaYjlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmhtUHJvalBsYW4ucmVwYXltZW50UmVtYXJrKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21vcnRnYWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInN0ZXBcIjogX3ZtLnN0ZXAsXG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbFxuICAgIH1cbiAgfSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01NjM0OWE4YVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU2MzQ5YThhXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvdGFicy9hcHBseS52dWVcbi8vIG1vZHVsZSBpZCA9IDk2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2FwcGx5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbCxcbiAgICAgIFwiZGljdHNcIjogX3ZtLmRpY3RzLFxuICAgICAgXCJzdGVwXCI6IF92bS5zdGVwXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdmaWxlcycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtODQ4YzUzMzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi04NDhjNTMzNlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvYXVkaXRJbmZvcm1hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDk2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiaW1wb3J0IHtmb3JtYXRNb25leX0gZnJvbSBcIi4uLy4uL2xpYnMvdXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgY29zdDoge30sXG4gICAgICAgICAgICAgICAgZXN0aW1hdGU6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZE1vZGVsKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2pGZWUvcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwcm9qZWN0SWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY29zdCA9IHJlc3BvbnNlLmRhdGEuZmluZCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmZlZSA9IGZvcm1hdE1vbmV5KGl0ZW0uZmVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZmVlVHlwZSA9PT0gJzAnO1xuICAgICAgICAgICAgICAgIH0pIHx8IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZXN0aW1hdGUgPSByZXNwb25zZS5kYXRhLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5mZWUgPSBmb3JtYXRNb25leShpdGVtLmZlZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmZlZVR5cGUgPT09ICcxJztcbiAgICAgICAgICAgICAgICB9KSB8fCB7fTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRNb2RlbCgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YWJzL2NoYXJnZUluZm9ybWF0aW9uLmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9jaGFyZ2VJbmZvcm1hdGlvbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZDZhMmE0MThcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vY2hhcmdlSW5mb3JtYXRpb24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3RhYnMvY2hhcmdlSW5mb3JtYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2hhcmdlSW5mb3JtYXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWQ2YTJhNDE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZDZhMmE0MThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvY2hhcmdlSW5mb3JtYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA5NzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJjb3N0XCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImNvc3RcIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5LiL5oi36LS5XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5LiL5oi36LS5XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jb3N0LmZlZSArICflhYMnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5pS26LS55pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jb3N0LmNoYXJnZVRpbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDnoa7orqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNvc3QuY3JlYXRlVGltZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5pS26LS55pa55byPXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jb3N0LmNoYXJnZVR5cGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmlLbotLnotKbmiLdcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNvc3QuY2hhcmdlQWNjb3VudCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOehruiupOS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY29zdC5jcmVhdGVCeSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIMKgwqDCoMKgXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpLCAoX3ZtLm1vZGVsLmNvc3QuZmVlRmlsZSkgPyBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5tb2RlbC5jb3N0LmZlZUZpbGUsXG4gICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeeci+WHreivgVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCldKV0sIDEpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLm1vZGVsLmVzdGltYXRlLmNoYXJnZUZsYWcgPT09ICcxJykgPyBfYygnZGl2JywgW19jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJlc3RpbWF0ZVwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJlc3RpbWF0ZVwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg6aKE5Lyw5Y2V6LS5XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDpooTkvLDljZXotLlcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZXN0aW1hdGUuZmVlICsgJ+WFgycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaUtui0ueaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5lc3RpbWF0ZS5jaGFyZ2VUaW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDnoa7orqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZXN0aW1hdGUuY3JlYXRlVGltZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmlLbotLnmlrnlvI9cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZXN0aW1hdGUuY2hhcmdlVHlwZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pS26LS56LSm5oi3XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmVzdGltYXRlLmNoYXJnZUFjY291bnQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOivhOS8sOacuuaehFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5lc3RpbWF0ZS5ldmFsQWdlbmN5KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOehruiupOS6ulxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmVzdGltYXRlLmNyZWF0ZUJ5KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIMKgwqDCoMKgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKSwgKF92bS5tb2RlbC5lc3RpbWF0ZS5mZWVGaWxlKSA/IF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogX3ZtLm1vZGVsLmVzdGltYXRlLmZlZUZpbGUsXG4gICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6XnnIvlh63or4FcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKV0pXSwgMSldLCAxKV0pXSwgMSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicG9saWN5XCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcInBvbGljeVwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDkvJjmg6DmlL/nrZZcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkuIvmiLfotLnmnKrmlLblj5bljp/lm6BcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjFcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jb3N0LmNoYXJnZUZyZWVSZWFzb24pICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1kNmEyYTQxOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWQ2YTJhNDE4XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvdGFicy9jaGFyZ2VJbmZvcm1hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDk3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsImltcG9ydCBhdWRpdEluZm9ybWF0aW9uIGZyb20gJy4uL3ZpZXdzL3RhYnMvYXVkaXRJbmZvcm1hdGlvbidcbmltcG9ydCBjaGFyZ2VJbmZvcm1hdGlvbiBmcm9tICcuLi92aWV3cy90YWJzL2NoYXJnZUluZm9ybWF0aW9uJ1xuaW1wb3J0IGhvdXNlaG9sZEluZm9ybWF0aW9uIGZyb20gJy4uL3ZpZXdzL3RhYnMvaG91c2Vob2xkSW5mb3JtYXRpb24nXG5pbXBvcnQgaG91c2Vob2xkQXJyYW5nZW1lbnQgZnJvbSAnLi4vdmlld3MvdGFicy9ob3VzZWhvbGRBcnJhbmdlbWVudCdcbmltcG9ydCB7Zm9ybWF0TW9uZXl9IGZyb20gXCIuLi9saWJzL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWJOYW1lOiAnYXVkaXRJbmZvcm1hdGlvbicsXG4gICAgICAgICAgICB0YWJzOiBbe2lkOiAnYXVkaXRJbmZvcm1hdGlvbicsIHRleHQ6ICfnlLPor7fkv6Hmga8nfSxcbiAgICAgICAgICAgICAgICB7aWQ6ICdjaGFyZ2VJbmZvcm1hdGlvbicsIHRleHQ6ICfmlLbotLnkv6Hmga8nfSxcbiAgICAgICAgICAgICAgICB7aWQ6ICdob3VzZWhvbGRJbmZvcm1hdGlvbicsIHRleHQ6ICflhoXlrqHkv6Hmga8nfSxcbiAgICAgICAgICAgICAgICB7aWQ6ICdob3VzZWhvbGRBcnJhbmdlbWVudCcsIHRleHQ6ICfkuIvmiLflronmjpInfV0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIGNsaWVudDoge30sXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiB7fSxcbiAgICAgICAgICAgICAgICBobVByb2pQbGFuOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpY3RzOiB7fVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjdXJyZW50VGFiQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFiTmFtZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAnYXVkaXRJbmZvcm1hdGlvbic6IGF1ZGl0SW5mb3JtYXRpb24sXG4gICAgICAgICdjaGFyZ2VJbmZvcm1hdGlvbic6IGNoYXJnZUluZm9ybWF0aW9uLFxuICAgICAgICAnaG91c2Vob2xkSW5mb3JtYXRpb24nOiBob3VzZWhvbGRJbmZvcm1hdGlvbixcbiAgICAgICAgJ2hvdXNlaG9sZEFycmFuZ2VtZW50JzogaG91c2Vob2xkQXJyYW5nZW1lbnRcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZENsaWVudChpZCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obUNsaWVudC9yZWFkL2RldGFpbCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IGlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY2xpZW50ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3RzID0gcmVzcG9uc2UuZGljdHM7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFBsYW4oaWQpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qUGxhbi9yZWFkL3F1ZXJ5QnlQcm9qZWN0SWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge3Byb2plY3RJZDogaWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5obVByb2pQbGFuID0gcmVzcG9uc2UuZGF0YVswXSB8fCB7fTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkTW9kZWwoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvamVjdC9yZWFkL2RldGFpbCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuY2xpZW50ID0ge307XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5wcm9kdWN0X25hbWUgPSByZXNwb25zZS5kYXRhLnByb2R1Y3RfbmFtZSB8fCB7fTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmluaXRMb2FuQW1vdW50VGV4dCA9IGZvcm1hdE1vbmV5KHJlc3BvbnNlLmRhdGEuaW5pdExvYW5BbW91bnQpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaG1Qcm9qUGxhbiA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZENsaWVudChyZXNwb25zZS5kYXRhLmNsaWVudElkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQbGFuKHJlc3BvbnNlLmRhdGEuaWQpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZE1vZGVsKCk7XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRlbWl0KCdicmVhZGNydW1iJyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FsbG9jYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9