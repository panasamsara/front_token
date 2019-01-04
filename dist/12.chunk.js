webpackJsonp([12],{

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_finalAudit__ = __webpack_require__(1076);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_finalAudit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_finalAudit__);
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
            tabs: [{ id: 'investigationReport', text: '调查报告' }, { id: 'finalAudit', text: '终评' }]
        };
    },

    computed: {
        currentTabComponent: function currentTabComponent() {
            return this.tabName;
        }
    },
    components: {
        'investigationReport': __WEBPACK_IMPORTED_MODULE_0__views_tabs_investigationReport___default.a,
        'finalAudit': __WEBPACK_IMPORTED_MODULE_1__views_tabs_finalAudit___default.a
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

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this = this;

        return {
            isCancel: false,
            isSubmit: false,
            evaluation: [],
            intermediaryData: [],
            intermediaryColumns: [{
                title: '中介机构', render: function render(h, params) {
                    _this.intermediaryData[params.index] = params.row;
                    return h('Select', {
                        props: {
                            placeholder: '中介机构',
                            clearable: true,
                            value: params.row.agencyId
                        },
                        on: {
                            'on-change': function onChange(value) {
                                params.row.agencyId = value;
                            }
                        }
                    }, _this.evaluation.filter(function (item) {
                        return item.evalAgencyType === '0';
                    }).map(function (item) {
                        return h('Option', {
                            props: {
                                value: item.id,
                                key: item.id
                            }
                        }, item.evalAgencyName);
                    }));
                }
            }, {
                title: '中介估价(元)', render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            type: 'text',
                            maxlength: 20,
                            placeholder: '中介估价',
                            clearable: true,
                            value: params.row.evalVal
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.evalVal = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '中介电话', render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            type: 'text',
                            placeholder: '中介电话',
                            clearable: true,
                            value: params.row.tel
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.tel = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '操作', width: 70, render: function render(h, params) {
                    return h('a', {
                        on: {
                            click: function click() {
                                _this.del('intermediary', params.index);
                            }
                        }
                    }, [h('Tooltip', {
                        props: {
                            content: '接受',
                            placement: 'top'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-close',
                            size: 20,
                            color: '#ed4014'
                        }
                    })])]);
                }
            }],
            networkData: [],
            networkColumns: [{
                title: '网站名称', render: function render(h, params) {
                    _this.networkData[params.index] = params.row;
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 50,
                            type: 'text',
                            placeholder: '网站名称',
                            clearable: true,
                            value: params.row.agencyId
                        },
                        on: {
                            'on-change': function onChange(value) {
                                params.row.agencyId = value;
                            }
                        }
                    });
                }
            }, {
                title: '网络估价(元)', render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            type: 'text',
                            maxlength: 20,
                            placeholder: '网络估价',
                            clearable: true,
                            value: params.row.evalVal
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.evalVal = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '网络链接', render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 100,
                            type: 'text',
                            placeholder: '网络链接',
                            clearable: true,
                            value: params.row.url
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.url = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '操作', width: 70, render: function render(h, params) {
                    return h('a', {
                        on: {
                            click: function click() {
                                _this.del('network', params.index);
                            }
                        }
                    }, [h('Tooltip', {
                        props: {
                            content: '接受',
                            placement: 'top'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-close',
                            size: 20,
                            color: '#ed4014'
                        }
                    })])]);
                }
            }],
            rules: {
                'evalResult': [{ required: true, message: '终评价值不能为空', trigger: 'blur' }, {
                    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }],
                'tax': [{ required: true, message: '税费计算不能为空', trigger: 'blur' }, {
                    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }]
            }
        };
    },

    props: {
        model: Object
    },
    methods: {
        loadEvaluation: function loadEvaluation(city) {
            var _this2 = this;

            this.$axios.options.url = 'houseMortgage/hmConfigEvalagencies/read/queryByCity';
            this.$axios.request({ data: { city: city } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                _this2.evaluation = response.data;
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        },
        loadPawn: function loadPawn() {
            var _this3 = this;

            this.$axios.options.url = 'houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$router.currentRoute.params.id,
                    backupFlag: 0
                }
            }).then(function (response) {
                if (response.httpCode != 200) {
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                if (response.data[0]) _this3.loadEvaluation(response.data[0].province.indexOf('市') >= 0 ? response.data[0].province : response.data[0].city);
            }).catch(function (error) {
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },
        loadEvaluationList: function loadEvaluationList() {
            var _this4 = this;

            this.$axios.options.url = 'houseMortgage/hmProjEvaluation/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$router.currentRoute.params.id,
                    evalPeriod: 0,
                    defaultFlag: 1
                }
            }).then(function (response) {
                if (response.httpCode != 200) {
                    _this4.$Message.error(response.msg || _this4.$config.ERROR);
                    return;
                }
                response.data.forEach(function (item) {
                    item.evalVal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(item.evalVal);
                    item.evalPeriod = 1;
                });
                _this4.model.evaluationList = response.data[0] ? response.data : [{}];
            }).catch(function (error) {
                _this4.$Message.error(_this4.$config.ERROR);
            });
        },
        add: function add(flag) {
            switch (flag) {
                case 'intermediary':
                    this.intermediaryData.push({ evalType: 0, evalVal: null });
                    break;
                case 'network':
                    this.networkData.push({ evalType: 1, evalVal: null });
                    break;
            }
        },
        del: function del(flag, index) {
            switch (flag) {
                case 'intermediary':
                    this.intermediaryData.splice(index, 1);
                    break;
                case 'network':
                    this.networkData.splice(index, 1);
                    break;
            }
        },
        uploadSuccess: function uploadSuccess(response, file, fileList) {
            if (fileList.length > 1) fileList.shift();
            fileList[0].id = response.files[0].id;
        },
        uploadError: function uploadError(error, file, fileList) {
            fileList.splice(fileList.indexOf(file), 1);
            this.$Message.error('上传失败');
        },
        preview: function preview(file) {
            window.open(file.response.files[0].path);
        },
        formatError: function formatError(file) {
            this.$Message.error('文件(' + file.name + ')类型错误，请选择图片或PDF文件。');
        },
        submit: function submit() {
            var _this5 = this;

            this.$refs.final.validate(function (valid) {
                if (valid) {
                    _this5.isSubmit = true;
                    _this5.model.evaluationList[0].preEvalFile = _this5.$refs.preEval.fileList.length ? _this5.$refs.preEval.fileList[0].id : null;
                    _this5.model.evaluationList[0].reportFile = _this5.$refs.report.fileList.length ? _this5.$refs.report.fileList[0].id : null;
                    _this5.intermediaryData.concat(_this5.networkData).forEach(function (item) {
                        _this5.model.evaluationList.push(item);
                    });
                    _this5.model.operation = 1;
                    _this5.$axios.options.url = 'houseMortgage/hmProject/zhongpingsubmit';
                    _this5.$axios.request({ data: JSON.stringify(_this5.model) }, 'json').then(function (response) {
                        _this5.isSubmit = false;
                        if (response.httpCode != 200) {
                            _this5.$Message.error(response.msg || _this5.$config.ERROR);
                            return;
                        }
                        _this5.$router.push({ name: 'backlog' });
                    }).catch(function (error) {
                        _this5.isSubmit = false;
                        _this5.$Message.error(_this5.$config.ERROR);
                    });
                }
            });
        },
        cancel: function cancel() {
            var _this6 = this;

            this.isCancel = true;
            this.model.evaluationList[0].preEvalFile = this.$refs.preEval.fileList.length ? this.$refs.preEval.fileList[0].id : null;
            this.model.evaluationList[0].reportFile = this.$refs.report.fileList.length ? this.$refs.report.fileList[0].id : null;
            this.intermediaryData.concat(this.networkData).forEach(function (item) {
                _this6.model.evaluationList.push(item);
            });
            this.model.operation = 0;
            this.$axios.options.url = 'houseMortgage/hmProject/zhongpingsubmit';
            this.$axios.request({ data: JSON.stringify(this.model) }, 'json').then(function (response) {
                _this6.isCancel = false;
                if (response.httpCode != 200) {
                    _this6.$Message.error(response.msg || _this6.$config.ERROR);
                    return;
                }
                _this6.$router.push('backlog');
            }).catch(function (error) {
                _this6.isCancel = false;
                _this6.$Message.error(_this6.$config.ERROR);
            });
        }
    },
    created: function created() {
        this.model.evaluationList = [{}];
        this.model.hmProjectClob = {};
        this.loadEvaluationList();
        this.loadEvaluation();
        this.loadPawn();
    }
});

/***/ }),

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1036),
  /* template */
  __webpack_require__(1133),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/finalAudit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] finalAudit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a1c5319", Component.options)
  } else {
    hotAPI.reload("data-v-4a1c5319", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1131:
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
     __webpack_require__(202).rerender("data-v-49d791b6", module.exports)
  }
}

/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "inquiry"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "inquiry",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                询价\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "20"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list"
    }
  }), _vm._v("\n                        中介询价\n                    ")], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        _vm.add('intermediary')
      }
    }
  }, [_vm._v("\n                            添加\n                        ")])], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "data": _vm.intermediaryData,
      "columns": _vm.intermediaryColumns
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "20"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list"
    }
  }), _vm._v("\n                        网络询价\n                    ")], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        _vm.add('network')
      }
    }
  }, [_vm._v("\n                            添加\n                        ")])], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "data": _vm.networkData,
      "columns": _vm.networkColumns
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('label', {
    staticClass: "font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    评估公司询价\n                ")]), _vm._v(" "), _c('Card', {
    staticClass: "mt5",
    attrs: {
      "dis-hover": ""
    }
  }, [_c('Form', {
    attrs: {
      "label-width": 80
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
  }, [_vm._v("\n                                        评估公司\n                                    ")]), _vm._v("\n                                    " + _vm._s(_vm.model.evaluationList[0].agencyText) + "\n                                ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                        评估估价\n                                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.model.evaluationList[0].evalValText + '元') + "\n                                        ")]), _vm._v(" "), (_vm.model.evaluationList[0].preEvalFile) ? _c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('a', {
    attrs: {
      "href": _vm.model.evaluationList[0].preEvalFile,
      "target": "_blank"
    }
  }, [_vm._v("\n                                                预估单\n                                            ")])]) : _vm._e(), _vm._v(" "), (_vm.model.evaluationList[0].reportFile) ? _c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('a', {
    attrs: {
      "href": _vm.model.evaluationList[0].reportFile,
      "target": "_blank"
    }
  }, [_vm._v("\n                                                评估报告\n                                            ")])]) : _vm._e()], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                        评估报告\n                                    ")]), _vm._v(" "), _c('Upload', {
    ref: "report",
    attrs: {
      "on-preview": _vm.preview,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-format-error": _vm.formatError,
      "action": _vm.$config.uploadUrl
    }
  }, [_c('Button', {
    attrs: {
      "icon": "md-cloud-upload"
    }
  }, [_vm._v("\n                                            上传评估报告\n                                        ")])], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                        预估单\n                                    ")]), _vm._v(" "), _c('Upload', {
    ref: "preEval",
    attrs: {
      "on-preview": _vm.preview,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-format-error": _vm.formatError,
      "action": _vm.$config.uploadUrl
    }
  }, [_c('Button', {
    attrs: {
      "icon": "md-cloud-upload"
    }
  }, [_vm._v("\n                                            上传预估单\n                                        ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "final"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "final",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                终评\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Form', {
    ref: "final",
    attrs: {
      "model": _vm.model,
      "rules": _vm.rules,
      "label-width": 90
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "evalResult"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    终评价值\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "placeholder": "终评价值",
      "maxlength": 20
    },
    model: {
      value: (_vm.model.evalResult),
      callback: function($$v) {
        _vm.$set(_vm.model, "evalResult", $$v)
      },
      expression: "model.evalResult"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("元")])])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "tax"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    税费计算\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "placeholder": "税费计算",
      "maxlength": 20
    },
    model: {
      value: (_vm.model.tax),
      callback: function($$v) {
        _vm.$set(_vm.model, "tax", $$v)
      },
      expression: "model.tax"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("元")])])], 1)], 1)], 1), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            终评意见\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "placeholder": "终评意见",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.hmProjectClob.finalEvalDesc),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "finalEvalDesc", $$v)
      },
      expression: "model.hmProjectClob.finalEvalDesc"
    }
  })], 1)], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n            退回\n        ")]), _vm._v("\n         \n        "), _c('Button', {
    attrs: {
      "type": "primary",
      "loading": _vm.isSubmit,
      "disabled": _vm.isCancel
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
     __webpack_require__(202).rerender("data-v-4a1c5319", module.exports)
  }
}

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1002),
  /* template */
  __webpack_require__(1131),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/finalComment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] finalComment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49d791b6", Component.options)
  } else {
    hotAPI.reload("data-v-49d791b6", Component.options)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maW5hbENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9maW5hbEF1ZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2ZpbmFsQXVkaXQudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9maW5hbENvbW1lbnQudnVlPzJjMDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvZmluYWxBdWRpdC52dWU/NGQyNyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmluYWxDb21tZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2V2YWx1YXRpb24uanM/NDAwNioqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi5qcz8xMDE0KioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvZXZhbHVhdGlvbi52dWU/ODAzOCoqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24udnVlPzdlMGIqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9ldmFsdWF0aW9uLnZ1ZT9hNTE2KioqKioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24udnVlP2M1YmMqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9yZXBvcnQuanM/MDljYioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL3JlcG9ydC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvcmVwb3J0LnZ1ZT8yMDViKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvaW52ZXN0aWdhdGlvblJlcG9ydC5qcz83MDU4KiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9pbnZlc3RpZ2F0aW9uUmVwb3J0LnZ1ZT80ZWM5KiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9pbnZlc3RpZ2F0aW9uUmVwb3J0LnZ1ZT9lMmRkKioiXSwibmFtZXMiOlsiZGF0YSIsIm1vZGVsIiwiY2xpZW50IiwiaGlzdG9yeURhdGEiLCJsb2FkaW5nIiwidGFiTmFtZSIsInRhYnMiLCJpZCIsInRleHQiLCJjb21wdXRlZCIsImN1cnJlbnRUYWJDb21wb25lbnQiLCJjb21wb25lbnRzIiwiZmluYWxBdWRpdCIsIm1ldGhvZHMiLCJsb2FkQ2xpZW50IiwiJGF4aW9zIiwib3B0aW9ucyIsInVybCIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJodHRwQ29kZSIsIiRNZXNzYWdlIiwiZXJyb3IiLCJtc2ciLCIkY29uZmlnIiwiRVJST1IiLCJjYXRjaCIsImxvYWRDb29wZXJhdGUiLCJjbGllbnRJZCIsImZvckVhY2giLCJpdGVtIiwiYWN0dWFsTG9hbkFtb3VudCIsImZvcm1hdE1vbmV5IiwibG9hbkJhbGFuY2UiLCJsb2FkTW9kZWwiLCIkcm91dGVyIiwiY3VycmVudFJvdXRlIiwicGFyYW1zIiwiaW5pdExvYW5BbW91bnRUZXh0IiwiaW5pdExvYW5BbW91bnQiLCJmaXJzdEV2YWx1ZVRleHQiLCJmaXJzdEV2YWx1ZSIsImV2YWxSZXN1bHRUZXh0IiwiZXZhbFJlc3VsdCIsImNyZWF0ZWQiLCJtb3VudGVkIiwiJHJvb3QiLCJldmVudEh1YiIsIiRlbWl0IiwiaXNDYW5jZWwiLCJpc1N1Ym1pdCIsImV2YWx1YXRpb24iLCJpbnRlcm1lZGlhcnlEYXRhIiwiaW50ZXJtZWRpYXJ5Q29sdW1ucyIsInRpdGxlIiwicmVuZGVyIiwiaCIsImluZGV4Iiwicm93IiwicHJvcHMiLCJwbGFjZWhvbGRlciIsImNsZWFyYWJsZSIsInZhbHVlIiwiYWdlbmN5SWQiLCJvbiIsImZpbHRlciIsImV2YWxBZ2VuY3lUeXBlIiwibWFwIiwia2V5IiwiZXZhbEFnZW5jeU5hbWUiLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwidHlwZSIsIm1heGxlbmd0aCIsImV2YWxWYWwiLCJldmVudCIsInRhcmdldCIsInRlbCIsImNsaWNrIiwiZGVsIiwiY29udGVudCIsInBsYWNlbWVudCIsInNpemUiLCJjb2xvciIsIm5ldHdvcmtEYXRhIiwibmV0d29ya0NvbHVtbnMiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsInRyaWdnZXIiLCJwYXR0ZXJuIiwiT2JqZWN0IiwibG9hZEV2YWx1YXRpb24iLCJjaXR5IiwibG9hZFBhd24iLCJwcm9qZWN0SWQiLCJiYWNrdXBGbGFnIiwicHJvdmluY2UiLCJpbmRleE9mIiwibG9hZEV2YWx1YXRpb25MaXN0IiwiZXZhbFBlcmlvZCIsImRlZmF1bHRGbGFnIiwiZXZhbHVhdGlvbkxpc3QiLCJhZGQiLCJmbGFnIiwicHVzaCIsImV2YWxUeXBlIiwic3BsaWNlIiwidXBsb2FkU3VjY2VzcyIsImZpbGUiLCJmaWxlTGlzdCIsImxlbmd0aCIsInNoaWZ0IiwiZmlsZXMiLCJ1cGxvYWRFcnJvciIsInByZXZpZXciLCJ3aW5kb3ciLCJvcGVuIiwicGF0aCIsImZvcm1hdEVycm9yIiwibmFtZSIsInN1Ym1pdCIsIiRyZWZzIiwiZmluYWwiLCJ2YWxpZGF0ZSIsInZhbGlkIiwicHJlRXZhbEZpbGUiLCJwcmVFdmFsIiwicmVwb3J0RmlsZSIsInJlcG9ydCIsImNvbmNhdCIsIm9wZXJhdGlvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYW5jZWwiLCJobVByb2plY3RDbG9iIiwic3RlcCIsIk51bWJlciIsIm1vcnRnYWdlIiwic2hvdyIsImhhc0NoYW5nZSIsImhtUHJvalBsYW4iLCJmaW5hbExpc3QiLCJoaXN0b3J5Q29sdW1ucyIsImxvYWRQbGFuIiwibG9hZENsb2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSwrREFBZTtBQUNYQSxRQURXLGtCQUNKO0FBQ0gsZUFBTztBQUNIQyxtQkFBTztBQUNIQyx3QkFBUSxFQURMO0FB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Q0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMzVEE7QUFDQTtBQUNBO0FBQ0E7QUFD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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIxMi5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnZlc3RpZ2F0aW9uUmVwb3J0IGZyb20gJy4uL3ZpZXdzL3RhYnMvaW52ZXN0aWdhdGlvblJlcG9ydCdcbmltcG9ydCBmaW5hbEF1ZGl0IGZyb20gJy4uL3ZpZXdzL3RhYnMvZmluYWxBdWRpdCdcbmltcG9ydCB7Zm9ybWF0TW9uZXl9IGZyb20gXCIuLi9saWJzL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIGNsaWVudDoge30sXG4gICAgICAgICAgICAgICAgaGlzdG9yeURhdGE6IFtdLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFiTmFtZTogJ2ludmVzdGlnYXRpb25SZXBvcnQnLFxuICAgICAgICAgICAgdGFiczogW3tpZDogJ2ludmVzdGlnYXRpb25SZXBvcnQnLCB0ZXh0OiAn6LCD5p+l5oql5ZGKJ30sXG4gICAgICAgICAgICAgICAge2lkOiAnZmluYWxBdWRpdCcsIHRleHQ6ICfnu4jor4QnfV1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY3VycmVudFRhYkNvbXBvbmVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYk5hbWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ2ludmVzdGlnYXRpb25SZXBvcnQnOiBpbnZlc3RpZ2F0aW9uUmVwb3J0LFxuICAgICAgICAnZmluYWxBdWRpdCc6IGZpbmFsQXVkaXRcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZENsaWVudChpZCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obUNsaWVudC9yZWFkL2RldGFpbCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IGlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY2xpZW50ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkQ29vcGVyYXRlKGlkKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obUxvYW5BcHBseS9jb29wZXJhdGVIaXN0b3J5UXVlcnknO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2NsaWVudElkOiBpZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3R1YWxMb2FuQW1vdW50ID0gZm9ybWF0TW9uZXkoaXRlbS5hY3R1YWxMb2FuQW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5sb2FuQmFsYW5jZSA9IGZvcm1hdE1vbmV5KGl0ZW0ubG9hbkJhbGFuY2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuaGlzdG9yeURhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRNb2RlbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qZWN0L3JlYWQvZGV0YWlsJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtpZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5jbGllbnQgPSB7fTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmluaXRMb2FuQW1vdW50VGV4dCA9IGZvcm1hdE1vbmV5KHJlc3BvbnNlLmRhdGEuaW5pdExvYW5BbW91bnQpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZmlyc3RFdmFsdWVUZXh0ID0gZm9ybWF0TW9uZXkocmVzcG9uc2UuZGF0YS5maXJzdEV2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5ldmFsUmVzdWx0VGV4dCA9IGZvcm1hdE1vbmV5KHJlc3BvbnNlLmRhdGEuZXZhbFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5oaXN0b3J5RGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZENsaWVudChyZXNwb25zZS5kYXRhLmNsaWVudElkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb29wZXJhdGUocmVzcG9uc2UuZGF0YS5jbGllbnRJZCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkTW9kZWwoKTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JyZWFkY3J1bWInKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZmluYWxDb21tZW50LmpzIiwiaW1wb3J0IHtmb3JtYXRNb25leSwgdGltZVV0aWx9IGZyb20gXCIuLi8uLi9saWJzL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICBpc1N1Ym1pdDogZmFsc2UsXG4gICAgICAgICAgICBldmFsdWF0aW9uOiBbXSxcbiAgICAgICAgICAgIGludGVybWVkaWFyeURhdGE6IFtdLFxuICAgICAgICAgICAgaW50ZXJtZWRpYXJ5Q29sdW1uczogW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S4reS7i+acuuaehCcsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybWVkaWFyeURhdGFbcGFyYW1zLmluZGV4XSA9IHBhcmFtcy5yb3c7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdTZWxlY3QnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5Lit5LuL5py65p6EJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5yb3cuYWdlbmN5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbi1jaGFuZ2UnOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5hZ2VuY3lJZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5ldmFsdWF0aW9uLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZXZhbEFnZW5jeVR5cGUgPT09ICcwJ1xuICAgICAgICAgICAgICAgICAgICB9KS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdPcHRpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGl0ZW0uZXZhbEFnZW5jeU5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S4reS7i+S8sOS7tyjlhYMpJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdJbnB1dCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOid0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5Lit5LuL5Lyw5Lu3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5yb3cuZXZhbFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29uLWNoYW5nZSc6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93LmV2YWxWYWwgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S4reS7i+eUteivnScsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfkuK3ku4vnlLXor50nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLnJvdy50ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbi1jaGFuZ2UnOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy50ZWwgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aTjeS9nCcsIHdpZHRoOiA3MCwgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbCgnaW50ZXJtZWRpYXJ5JywgcGFyYW1zLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+aOpeWPlycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZC1jbG9zZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2VkNDAxNCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgbmV0d29ya0RhdGE6IFtdLFxuICAgICAgICAgICAgbmV0d29ya0NvbHVtbnM6IFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnq5nlkI3np7AnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR3b3JrRGF0YVtwYXJhbXMuaW5kZXhdID0gcGFyYW1zLnJvdztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzFweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn572R56uZ5ZCN56ewJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5yb3cuYWdlbmN5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbi1jaGFuZ2UnOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5hZ2VuY3lJZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zkvLDku7co5YWDKScsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTondGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+e9kee7nOS8sOS7tycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMucm93LmV2YWxWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbi1jaGFuZ2UnOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5ldmFsVmFsID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zpk77mjqUnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzFweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+e9kee7nOmTvuaOpScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMucm93LnVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29uLWNoYW5nZSc6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93LnVybCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5pON5L2cJywgd2lkdGg6IDcwLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsKCduZXR3b3JrJywgcGFyYW1zLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+aOpeWPlycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZC1jbG9zZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2VkNDAxNCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgICAgICAnZXZhbFJlc3VsdCc6IFt7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfnu4jor4Tku7flgLzkuI3og73kuLrnqbonLCB0cmlnZ2VyOiAnYmx1cid9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlswLTldKyhbLl17MX1bMC05XXsxLDJ9KT8kLyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfmlbDlgLzmoLzlvI/plJnor68nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2JsdXInXG4gICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICd0YXgnOiBbe3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn56iO6LS56K6h566X5LiN6IO95Li656m6JywgdHJpZ2dlcjogJ2JsdXInfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogL15bMC05XSsoWy5dezF9WzAtOV17MSwyfSk/JC8sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5pWw5YC85qC85byP6ZSZ6K+vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdibHVyJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBtb2RlbDogT2JqZWN0XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWRFdmFsdWF0aW9uKGNpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Db25maWdFdmFsYWdlbmNpZXMvcmVhZC9xdWVyeUJ5Q2l0eSc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7Y2l0eTogY2l0eX19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmV2YWx1YXRpb24gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRQYXduKCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVBhd24vcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgYmFja3VwRmxhZzogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhWzBdKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRFdmFsdWF0aW9uKHJlc3BvbnNlLmRhdGFbMF0ucHJvdmluY2UuaW5kZXhPZign5biCJykgPj0gMCA/IHJlc3BvbnNlLmRhdGFbMF0ucHJvdmluY2UgOiByZXNwb25zZS5kYXRhWzBdLmNpdHkpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZEV2YWx1YXRpb25MaXN0KCkge1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2pFdmFsdWF0aW9uL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIGV2YWxQZXJpb2Q6IDAsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRGbGFnOiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZXZhbFZhbCA9IGZvcm1hdE1vbmV5KGl0ZW0uZXZhbFZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZXZhbFBlcmlvZCA9IDE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5ldmFsdWF0aW9uTGlzdCA9IHJlc3BvbnNlLmRhdGFbMF0gPyByZXNwb25zZS5kYXRhIDogW3t9XTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhZGQoZmxhZykge1xuICAgICAgICAgICAgc3dpdGNoIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW50ZXJtZWRpYXJ5JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcm1lZGlhcnlEYXRhLnB1c2goe2V2YWxUeXBlOiAwLCBldmFsVmFsOiBudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ25ldHdvcmsnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ldHdvcmtEYXRhLnB1c2goe2V2YWxUeXBlOiAxLCBldmFsVmFsOiBudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWwoZmxhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZmxhZykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ludGVybWVkaWFyeSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJtZWRpYXJ5RGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICduZXR3b3JrJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR3b3JrRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXBsb2FkU3VjY2VzcyhyZXNwb25zZSwgZmlsZSwgZmlsZUxpc3QpIHtcbiAgICAgICAgICAgIGlmIChmaWxlTGlzdC5sZW5ndGggPiAxKVxuICAgICAgICAgICAgICAgIGZpbGVMaXN0LnNoaWZ0KCk7XG4gICAgICAgICAgICBmaWxlTGlzdFswXS5pZCA9IHJlc3BvbnNlLmZpbGVzWzBdLmlkO1xuICAgICAgICB9LFxuICAgICAgICB1cGxvYWRFcnJvcihlcnJvciwgZmlsZSwgZmlsZUxpc3QpIHtcbiAgICAgICAgICAgIGZpbGVMaXN0LnNwbGljZShmaWxlTGlzdC5pbmRleE9mKGZpbGUpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoJ+S4iuS8oOWksei0pScpO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2aWV3KGZpbGUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGZpbGUucmVzcG9uc2UuZmlsZXNbMF0ucGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdEVycm9yKGZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoJ+aWh+S7tignICsgZmlsZS5uYW1lICsgJynnsbvlnovplJnor6/vvIzor7fpgInmi6nlm77niYfmiJZQREbmlofku7bjgIInKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5maW5hbC52YWxpZGF0ZSgodmFsaWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZXZhbHVhdGlvbkxpc3RbMF0ucHJlRXZhbEZpbGUgPSB0aGlzLiRyZWZzLnByZUV2YWwuZmlsZUxpc3QubGVuZ3RoID8gdGhpcy4kcmVmcy5wcmVFdmFsLmZpbGVMaXN0WzBdLmlkIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5ldmFsdWF0aW9uTGlzdFswXS5yZXBvcnRGaWxlID0gdGhpcy4kcmVmcy5yZXBvcnQuZmlsZUxpc3QubGVuZ3RoID8gdGhpcy4kcmVmcy5yZXBvcnQuZmlsZUxpc3RbMF0uaWQgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybWVkaWFyeURhdGEuY29uY2F0KHRoaXMubmV0d29ya0RhdGEpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZXZhbHVhdGlvbkxpc3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwub3BlcmF0aW9uID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnaG91c2VNb3J0Z2FnZS9obVByb2plY3QvemhvbmdwaW5nc3VibWl0JztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YTogSlNPTi5zdHJpbmdpZnkodGhpcy5tb2RlbCl9LCAnanNvbicpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2JhY2tsb2cnfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsKCkge1xuICAgICAgICAgICAgdGhpcy5pc0NhbmNlbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmV2YWx1YXRpb25MaXN0WzBdLnByZUV2YWxGaWxlID0gdGhpcy4kcmVmcy5wcmVFdmFsLmZpbGVMaXN0Lmxlbmd0aCA/IHRoaXMuJHJlZnMucHJlRXZhbC5maWxlTGlzdFswXS5pZCA6IG51bGw7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmV2YWx1YXRpb25MaXN0WzBdLnJlcG9ydEZpbGUgPSB0aGlzLiRyZWZzLnJlcG9ydC5maWxlTGlzdC5sZW5ndGggPyB0aGlzLiRyZWZzLnJlcG9ydC5maWxlTGlzdFswXS5pZCA6IG51bGw7XG4gICAgICAgICAgICB0aGlzLmludGVybWVkaWFyeURhdGEuY29uY2F0KHRoaXMubmV0d29ya0RhdGEpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmV2YWx1YXRpb25MaXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwub3BlcmF0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qZWN0L3pob25ncGluZ3N1Ym1pdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiBKU09OLnN0cmluZ2lmeSh0aGlzLm1vZGVsKX0sICdqc29uJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuY2VsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCdiYWNrbG9nJyk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuY2VsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubW9kZWwuZXZhbHVhdGlvbkxpc3QgPSBbe31dO1xuICAgICAgICB0aGlzLm1vZGVsLmhtUHJvamVjdENsb2IgPSB7fTtcbiAgICAgICAgdGhpcy5sb2FkRXZhbHVhdGlvbkxpc3QoKTtcbiAgICAgICAgdGhpcy5sb2FkRXZhbHVhdGlvbigpO1xuICAgICAgICB0aGlzLmxvYWRQYXduKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvZmluYWxBdWRpdC5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvZmluYWxBdWRpdC5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGExYzUzMTlcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vZmluYWxBdWRpdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9maW5hbEF1ZGl0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZpbmFsQXVkaXQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRhMWM1MzE5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGExYzUzMTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvZmluYWxBdWRpdC52dWVcbi8vIG1vZHVsZSBpZCA9IDEwNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdUYWJzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFuaW1hdGVkXCI6IGZhbHNlXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0udGFiTmFtZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS50YWJOYW1lID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJ0YWJOYW1lXCJcbiAgICB9XG4gIH0sIFtfdm0uX2woKF92bS50YWJzKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnVGFiUGFuZScsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibmFtZVwiOiBpdGVtLmlkLFxuICAgICAgICBcImxhYmVsXCI6IGl0ZW0udGV4dFxuICAgICAgfVxuICAgIH0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJleHRyYVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRyb290LmV2ZW50SHViLiRlbWl0KCdiYWNrJywge1xuICAgICAgICAgIG5hbWU6ICdiYWNrbG9nJyxcbiAgICAgICAgICBwYXJhbXM6IF92bS4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXNcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsb3Q6IFwiZXh0cmFcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg6L+U5ZueXFxuICAgICAgICBcIildKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygna2VlcC1hbGl2ZScsIFtfYyhfdm0uY3VycmVudFRhYkNvbXBvbmVudCwge1xuICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtb2RlbFwiOiBfdm0ubW9kZWxcbiAgICB9XG4gIH0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00OWQ3OTFiNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ5ZDc5MWI2XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvZmluYWxDb21tZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiaW5xdWlyeVwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJpbnF1aXJ5XCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOivouS7t1xcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIwXCJcbiAgICB9XG4gIH0sIFtfYygnSWNvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibWQtbGlzdFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Lit5LuL6K+i5Lu3XFxuICAgICAgICAgICAgICAgICAgICBcIildLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIixcbiAgICAgIFwic2l6ZVwiOiBcInNtYWxsXCIsXG4gICAgICBcImljb25cIjogXCJtZC1hZGRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5hZGQoJ2ludGVybWVkaWFyeScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOa3u+WKoFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1RhYmxlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10NVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFcIjogX3ZtLmludGVybWVkaWFyeURhdGEsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLmludGVybWVkaWFyeUNvbHVtbnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMFwiXG4gICAgfVxuICB9LCBbX2MoJ0ljb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIm1kLWxpc3RcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOe9kee7nOivouS7t1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcInNpemVcIjogXCJzbWFsbFwiLFxuICAgICAgXCJpY29uXCI6IFwibWQtYWRkXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYWRkKCduZXR3b3JrJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5re75YqgXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQ1XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YVwiOiBfdm0ubmV0d29ya0RhdGEsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLm5ldHdvcmtDb2x1bW5zXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb250MTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwidGl0bGVcIlxuICAgIH0sXG4gICAgc2xvdDogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOivhOS8sOWFrOWPuOivouS7t1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NhcmQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQ1XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzLWhvdmVyXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbC13aWR0aFwiOiA4MFxuICAgIH1cbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDor4TkvLDlhazlj7hcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmV2YWx1YXRpb25MaXN0WzBdLmFnZW5jeVRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6K+E5Lyw5Lyw5Lu3XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmV2YWx1YXRpb25MaXN0WzBdLmV2YWxWYWxUZXh0ICsgJ+WFgycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIChfdm0ubW9kZWwuZXZhbHVhdGlvbkxpc3RbMF0ucHJlRXZhbEZpbGUpID8gX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0ubW9kZWwuZXZhbHVhdGlvbkxpc3RbMF0ucHJlRXZhbEZpbGUsXG4gICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6aKE5Lyw5Y2VXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ubW9kZWwuZXZhbHVhdGlvbkxpc3RbMF0ucmVwb3J0RmlsZSkgPyBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5tb2RlbC5ldmFsdWF0aW9uTGlzdFswXS5yZXBvcnRGaWxlLFxuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOivhOS8sOaKpeWRilxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpXSwgMSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDor4TkvLDmiqXlkYpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1VwbG9hZCcsIHtcbiAgICByZWY6IFwicmVwb3J0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwib24tcHJldmlld1wiOiBfdm0ucHJldmlldyxcbiAgICAgIFwib24tc3VjY2Vzc1wiOiBfdm0udXBsb2FkU3VjY2VzcyxcbiAgICAgIFwib24tZXJyb3JcIjogX3ZtLnVwbG9hZEVycm9yLFxuICAgICAgXCJmb3JtYXRcIjogWydnaWYnLCAnanBnJywgJ2pwZWcnLCAncG5nJywgJ3BkZiddLFxuICAgICAgXCJvbi1mb3JtYXQtZXJyb3JcIjogX3ZtLmZvcm1hdEVycm9yLFxuICAgICAgXCJhY3Rpb25cIjogX3ZtLiRjb25maWcudXBsb2FkVXJsXG4gICAgfVxuICB9LCBbX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwibWQtY2xvdWQtdXBsb2FkXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS4iuS8oOivhOS8sOaKpeWRilxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDpooTkvLDljZVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1VwbG9hZCcsIHtcbiAgICByZWY6IFwicHJlRXZhbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm9uLXByZXZpZXdcIjogX3ZtLnByZXZpZXcsXG4gICAgICBcIm9uLXN1Y2Nlc3NcIjogX3ZtLnVwbG9hZFN1Y2Nlc3MsXG4gICAgICBcIm9uLWVycm9yXCI6IF92bS51cGxvYWRFcnJvcixcbiAgICAgIFwiZm9ybWF0XCI6IFsnZ2lmJywgJ2pwZycsICdqcGVnJywgJ3BuZycsICdwZGYnXSxcbiAgICAgIFwib24tZm9ybWF0LWVycm9yXCI6IF92bS5mb3JtYXRFcnJvcixcbiAgICAgIFwiYWN0aW9uXCI6IF92bS4kY29uZmlnLnVwbG9hZFVybFxuICAgIH1cbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIm1kLWNsb3VkLXVwbG9hZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuIrkvKDpooTkvLDljZVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSldLCAxKV0sIDEpXSwgMSldLCAxKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJmaW5hbFwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJmaW5hbFwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDnu4jor4RcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ0Zvcm0nLCB7XG4gICAgcmVmOiBcImZpbmFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibW9kZWxcIjogX3ZtLm1vZGVsLFxuICAgICAgXCJydWxlc1wiOiBfdm0ucnVsZXMsXG4gICAgICBcImxhYmVsLXdpZHRoXCI6IDkwXG4gICAgfVxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcImV2YWxSZXN1bHRcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg57uI6K+E5Lu35YC8XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIue7iOivhOS7t+WAvFwiLFxuICAgICAgXCJtYXhsZW5ndGhcIjogMjBcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tb2RlbC5ldmFsUmVzdWx0KSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLCBcImV2YWxSZXN1bHRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwibW9kZWwuZXZhbFJlc3VsdFwiXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcInByZXBlbmRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJwcmVwZW5kXCJcbiAgfSwgW192bS5fdihcIuWFg1wiKV0pXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcInRheFwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDnqI7otLnorqHnrpdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi56iO6LS56K6h566XXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiAyMFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLm1vZGVsLnRheCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5tb2RlbCwgXCJ0YXhcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwibW9kZWwudGF4XCJcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwicHJlcGVuZFwiXG4gICAgfSxcbiAgICBzbG90OiBcInByZXBlbmRcIlxuICB9LCBbX3ZtLl92KFwi5YWDXCIpXSldKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0Zvcm1JdGVtJywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOe7iOivhOaEj+ingVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRhcmVhXCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIue7iOivhOaEj+ingVwiLFxuICAgICAgXCJtYXhsZW5ndGhcIjogNTAwXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubW9kZWwuaG1Qcm9qZWN0Q2xvYi5maW5hbEV2YWxEZXNjKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLm1vZGVsLmhtUHJvamVjdENsb2IsIFwiZmluYWxFdmFsRGVzY1wiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbC5obVByb2plY3RDbG9iLmZpbmFsRXZhbERlc2NcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIndhcm5pbmdcIixcbiAgICAgIFwibG9hZGluZ1wiOiBfdm0uaXNDYW5jZWwsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5pc1N1Ym1pdFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNhbmNlbFxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIOmAgOWbnlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgwqBcXG4gICAgICAgIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiLFxuICAgICAgXCJsb2FkaW5nXCI6IF92bS5pc1N1Ym1pdCxcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmlzQ2FuY2VsXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc3VibWl0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5o+Q5LqkXFxuICAgICAgICBcIildKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGExYzUzMTlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00YTFjNTMxOVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvZmluYWxBdWRpdC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi9jb21wb25lbnRzL2ZpbmFsQ29tbWVudC5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDlkNzkxYjZcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vZmluYWxDb21tZW50LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy9maW5hbENvbW1lbnQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZmluYWxDb21tZW50LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00OWQ3OTFiNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ5ZDc5MWI2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9maW5hbENvbW1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSA4ODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsImltcG9ydCB7Zm9ybWF0TW9uZXl9IGZyb20gXCIuLi8uLi9saWJzL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBldmFsdWF0aW9uTGlzdDogW11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWw6IE9iamVjdCxcbiAgICAgICAgc3RlcDogTnVtYmVyXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWRNb2RlbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qRXZhbHVhdGlvbi9yZWFkL3F1ZXJ5QnlQcm9qZWN0SWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICBldmFsUGVyaW9kOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZXZhbFZhbCA9IGZvcm1hdE1vbmV5KGl0ZW0uZXZhbFZhbClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2YWx1YXRpb25MaXN0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkTW9kZWwoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9ldmFsdWF0aW9uLmpzIiwiaW1wb3J0IGV2YWx1YXRpb24gZnJvbSAnLi4vLi4vdmlld3MvdGFicy9ldmFsdWF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vcnRnYWdlOiB7fVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBtb2RlbDogT2JqZWN0LFxuICAgICAgICBzdGVwOiBOdW1iZXJcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ2V2YWx1YXRpb24nOiBldmFsdWF0aW9uXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWRNb2RlbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1QYXduL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIGJhY2t1cEZsYWc6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vcnRnYWdlID0gcmVzcG9uc2UuZGF0YVswXSB8fCB7fTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZE1vZGVsKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvZXZhbHVhdGlvbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTA1ZDgyZDBcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vZXZhbHVhdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9ldmFsdWF0aW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGV2YWx1YXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTUwNWQ4MmQwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTA1ZDgyZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvZXZhbHVhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDggOSAxMCAxMiAxMyAxNCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYmJkZjgzZThcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vbW9ydGdhZ2VJbmZvcm1hdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9tb3J0Z2FnZUluZm9ybWF0aW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG1vcnRnYWdlSW5mb3JtYXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWJiZGY4M2U4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYmJkZjgzZThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDggOSAxMCAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW192bS5fbCgoX3ZtLmV2YWx1YXRpb25MaXN0LmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZhbFR5cGUgPT09ICcyJ1xuICB9KSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gKF92bS5zdGVwID4gMCkgPyBfYygnUm93Jywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgc3RhdGljQ2xhc3M6IFwibWIxNlwiXG4gICAgfSwgW19jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDmnLrmnoTor4TkvLBcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uYWdlbmN5VGV4dCkgKyBcIlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI4XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5ldmFsVmFsICsgJ+WFgycpICsgXCJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoaXRlbS5wcmVFdmFsRmlsZSkgPyBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0ucHJlRXZhbEZpbGVQYXRoLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDpooTkvLDljZVcXG4gICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCldLCAxKSA6IF92bS5fZSgpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5ldmFsdWF0aW9uTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2YWxUeXBlID09PSAnMCdcbiAgfSkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIChfdm0uc3RlcCA+IDEpID8gX2MoJ1JvdycsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1iMTZcIlxuICAgIH0sIFtfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIzXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5Lit5LuL6K+E5LywXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmFnZW5jeVRleHQpICsgXCJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uZXZhbFZhbCArICflhYMnKSArIFwiXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgKGl0ZW0udXJsKSA/IF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI4XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogaXRlbS51cmwsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOafpeeci1xcbiAgICAgICAgICAgIFwiKV0pXSkgOiBfdm0uX2UoKV0sIDEpIDogX3ZtLl9lKClcbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0uc3RlcCA+IDApID8gX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDliJ3or4Tku7flgLxcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjFcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5maXJzdEV2YWx1ZVRleHQgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgXCIpXSldLCAxKSA6IF92bS5fZSgpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTA1ZDgyZDBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01MDVkODJkMFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvZXZhbHVhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDggOSAxMCAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJtb3J0Z2FnZXNcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwibW9ydGdhZ2VzXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5oq15oq854mp5L+h5oGvXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOero+W3peaXpeacn1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vcnRnYWdlLmNvbXBsZXRpb25EYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOW7uuaIkOaXpeacn1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vcnRnYWdlLmRhdGVDb21wbGV0aW9uKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOa1i+e7mOaXpeacn1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vcnRnYWdlLm1hcHBpbmdEYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5Zyf5Zyw5Y+W5b6X5pel5pyfXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9ydGdhZ2UubGFuZEdldERhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5bu6562R6Z2i56evXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9ydGdhZ2UuYnVpZGluZ0FjcmVhZ2UgKyAn5bmz57GzJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmiL/lsYvnsbvlnotcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb3J0Z2FnZS5ob3VzZVR5cGVUZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5Zyw5Z2AXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjFcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vcnRnYWdlLnByb3ZpbmNlICsgX3ZtLm1vcnRnYWdlLmNpdHkgKyBfdm0ubW9ydGdhZ2UuYXJlYSArIF92bS5tb3J0Z2FnZS5kZXRhaWxlZEFkZHJlc3MpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdldmFsdWF0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbCxcbiAgICAgIFwic3RlcFwiOiBfdm0uc3RlcFxuICAgIH1cbiAgfSldLCAxKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYmJkZjgzZThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1iYmRmODNlOFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvbW9ydGdhZ2VJbmZvcm1hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDkyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDggOSAxMCAxMiAxMyAxNCIsImltcG9ydCBtb3J0Z2FnZSBmcm9tICcuLi8uLi92aWV3cy90YWJzL21vcnRnYWdlSW5mb3JtYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczp7XG4gICAgICAgIG1vZGVsOk9iamVjdFxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAnbW9ydGdhZ2UnOiBtb3J0Z2FnZVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIHNob3coKXtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvcmVwb3J0LmpzIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9yZXBvcnQuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNlNmUxYTcwXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL3JlcG9ydC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9yZXBvcnQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcmVwb3J0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zZTZlMWE3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNlNmUxYTcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWJzL3JlcG9ydC52dWVcbi8vIG1vZHVsZSBpZCA9IDkyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDggOSAxMCAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImJhc2ljXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImJhc2ljXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOmhueebruWfuuacrOS/oeaBr1xcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOmhueebrue8luWPt1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaWQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDCoMKgwqDCoFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2EnLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnNob3dcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLpobnnm67kv6Hmga/lj4rlrqHmibnljoblj7JcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDnlLPor7fkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcGx5VXNlck5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOeUs+ivt+aXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwbHlEYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o6o6I2Q5rig6YGTXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jaGFubmFsTmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWuouaIt+Wnk+WQjVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY2xpZW50LmNsaWVudE5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOivgeS7tuexu+Wei1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY2xpZW50LmNlcnRpZmljYXRlc1R5cGVUZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6K+B5Lu25Y+3XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jbGllbnQuY2VydGlmaWNhdGVzTnVtYmVyKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+6YeR6aKdXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5pbml0TG9hbkFtb3VudFRleHQgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+5pel5pyfXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5pbml0TG9hbkRhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlgJ/mrL7mnJ/pmZBcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmluaXRMb2FuUGVyaW9kICsgJ+S4quaciCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlgJ/mrL7nlKjpgJRcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmxvYW5Vc2FnZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5pyf5pyb6L+Y5qy+5pa55byPXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5pbml0UmVwYXlNZXRob2RUZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21vcnRnYWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbCxcbiAgICAgIFwic3RlcFwiOiAwXG4gICAgfVxuICB9KV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTNlNmUxYTcwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtM2U2ZTFhNzBcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL3JlcG9ydC52dWVcbi8vIG1vZHVsZSBpZCA9IDkzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDggOSAxMCAxMiAxMyAxNCIsImltcG9ydCB7Zm9ybWF0TW9uZXl9IGZyb20gXCIuLi8uLi9saWJzL3V0aWxcIjtcbmltcG9ydCByZXBvcnQgZnJvbSAnLi4vLi4vdmlld3MvdGFicy9yZXBvcnQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFzQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgIGhtUHJvalBsYW46IHt9LFxuICAgICAgICAgICAgZXZhbHVhdGlvbkxpc3Q6IFtdLFxuICAgICAgICAgICAgZmluYWxMaXN0OiBbXSxcbiAgICAgICAgICAgIGhtUHJvamVjdENsb2I6IHt9LFxuICAgICAgICAgICAgaGlzdG9yeUNvbHVtbnM6IFt7dGl0bGU6ICfpobnnm67nvJblj7cnLCBrZXk6ICdwcm9qZWN0SWQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflgJ/mrL7kuronLCBrZXk6ICdjbGllbnROYW1lJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5oq15oq854mp6K+B5Lu25Y+3Jywga2V5OiAncGF3bkNlcnRpZmljYXRlQ29kZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+aJueWkjemHkeminSjlhYMpJywga2V5OiAnYWN0dWFsTG9hbkFtb3VudCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+WGs+iuruWIsOacn+aXpScsIGtleTogJ2R1ZURhdGUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmlL7mrL7ml6XmnJ8nLCBrZXk6ICdhY3R1YWxMb2FuRGF0ZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+i0t+asvuacn+mZkCjmnIgpJywga2V5OiAnbG9hblBlcmlvZCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+i0t+asvuS9meminSjlhYMpJywga2V5OiAnbG9hbkJhbGFuY2UnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfnirbmgIEnLCBrZXk6ICdwcm9qZWN0U3RhdHVzVGV4dCd9XVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBtb2RlbDogT2JqZWN0XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICdyZXBvcnQnOiByZXBvcnRcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZFBsYW4oKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvalBsYW4vcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwcm9qZWN0SWQ6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaG1Qcm9qUGxhbiA9IHJlc3BvbnNlLmRhdGFbMF0gfHwgbnVsbDtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkRXZhbHVhdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2hvdXNlTW9ydGdhZ2UvaG1Qcm9qRXZhbHVhdGlvbi9yZWFkL3F1ZXJ5QnlQcm9qZWN0SWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge3Byb2plY3RJZDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZXZhbFZhbCA9IGZvcm1hdE1vbmV5KGl0ZW0uZXZhbFZhbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmFsdWF0aW9uTGlzdCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZENsb2IoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvamVjdENsb2IvcmVhZC9kZXRhaWwnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2lkOiB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhtUHJvamVjdENsb2IgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZFBsYW4oKTtcbiAgICAgICAgdGhpcy5sb2FkRXZhbHVhdGlvbigpO1xuICAgICAgICB0aGlzLmxvYWRDbG9iKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvaW52ZXN0aWdhdGlvblJlcG9ydC5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvaW52ZXN0aWdhdGlvblJlcG9ydC5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZGI1NDcyMWNcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vaW52ZXN0aWdhdGlvblJlcG9ydC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9pbnZlc3RpZ2F0aW9uUmVwb3J0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGludmVzdGlnYXRpb25SZXBvcnQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWRiNTQ3MjFjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZGI1NDcyMWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvaW52ZXN0aWdhdGlvblJlcG9ydC52dWVcbi8vIG1vZHVsZSBpZCA9IDkzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDggMTAgMTIgMTMgMTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncmVwb3J0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5tb2RlbFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0uaG1Qcm9qUGxhbiAmJiAhX3ZtLmhhc0NoYW5nZSkgPyBfYygnQ29sbGFwc2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwicGxhblwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJwbGFuXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOaWueahiOiuvuiuoVxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOi/mOasvuaWueW8j1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvalBsYW4ucmVwYXltZW50TWV0aG9kVGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YW25LuW6L+Y5qy+5pa55byP6K+05piOXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIxXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qUGxhbi5yZXBheW1lbnRSZW1hcmspICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOS4iuaKpeWIqeeOh1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qUGxhbi5yZXBvcnRSYXRlICsgJyUnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5om55aSN5Yip546HXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2pQbGFuLmFsbG93UmF0ZSArICclJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5LiK5oql6LS5546HXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2pQbGFuLnJlcG9ydEZlZSArICclJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaJueWkjei0ueeOh1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qUGxhbi5hbGxvd0ZlZSArICclJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmhhc0NoYW5nZSkgPyBfYygnQ29sbGFwc2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiY2hhbmdlXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImNoYW5nZVwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDlhrPorq7lj5jmm7RcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlgJ/mrL7kurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YWx5ZCM5YCf5qy+5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWIneWni+WAn+asvumHkeminSjlhYMpXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+5pyf6ZmQKOaciClcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6L+Y5qy+5pa55byPXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWFtuS7lui/mOasvuaWueW8j+ivtOaYjlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaBr+i0uSjmnIgpXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOivtOaYjlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxM1wiXG4gICAgfVxuICB9KV0sIDEpXSwgMSldKV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJldmFsdWF0aW9uXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImV2YWx1YXRpb25cIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5Lu35YC86K+E5LywXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdDYXJkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpcy1ob3ZlclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3IgZm9udDEyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcInRpdGxlXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Yid5aeL5Lu35YC8XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb250MTJcIlxuICB9LCBbX3ZtLl9sKChfdm0uZXZhbHVhdGlvbkxpc3QuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmFsUGVyaW9kID09PSAnMCcgJiYgdmFsdWUuZXZhbFR5cGUgPT09ICcyJ1xuICB9KSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ1JvdycsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1iMTZcIlxuICAgIH0sIFtfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI0XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmFnZW5jeVRleHQgKyAn5Lyw5Lu3JykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uZXZhbFZhbCArICflhYMnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoaXRlbS5wcmVFdmFsRmlsZSkgPyBfYygnQ29sJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0ucHJlRXZhbEZpbGUsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6aKE5Lyw5Y2VXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChpdGVtLnJlcG9ydEZpbGUpID8gX2MoJ0NvbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLnJlcG9ydEZpbGUsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6K+E5Lyw5oql5ZGKXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCldLCAxKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZXZhbHVhdGlvbkxpc3QuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmFsUGVyaW9kID09PSAnMCcgJiYgdmFsdWUuZXZhbFR5cGUgPT09ICcwJ1xuICB9KSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ1JvdycsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1iMTZcIlxuICAgIH0sIFtfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCI0XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmFnZW5jeVRleHQgKyAn5Lyw5Lu3JykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uZXZhbFZhbFRleHQgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgKGl0ZW0udXJsKSA/IF9jKCdDb2wnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IGl0ZW0udXJsLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeeci1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpXSwgMSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliJ3or4Tku7flgLxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaW5pdExvYW5BbW91bnRUZXh0ICsgJ+WFgycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDIpXSksIF92bS5fdihcIiBcIiksIChfdm0uZXZhbHVhdGlvbkxpc3QuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmFsUGVyaW9kID09PSAnMSdcbiAgfSkubGVuZ3RoID4gMCkgPyBfYygnQ2FyZCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzLWhvdmVyXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvciBmb250MTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwidGl0bGVcIlxuICAgIH0sXG4gICAgc2xvdDogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDnu4jor4Tku7flgLxcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvbnQxMlwiXG4gIH0sIFtfdm0uX2woKF92bS5ldmFsdWF0aW9uTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2YWxQZXJpb2QgPT09ICcxJyAmJiB2YWx1ZS5ldmFsVHlwZSA9PT0gJzAnXG4gIH0pKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnUm93Jywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgc3RhdGljQ2xhc3M6IFwibWIxNlwiXG4gICAgfSwgW19jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uYWdlbmN5VGV4dCArICfkvLDku7cnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5ldmFsVmFsICsgJ+WFgycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjFcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOeUteivnVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjExXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRlbCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5ldmFsdWF0aW9uTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2YWxQZXJpb2QgPT09ICcxJyAmJiB2YWx1ZS5ldmFsVHlwZSA9PT0gJzEnXG4gIH0pKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnUm93Jywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgc3RhdGljQ2xhc3M6IFwibWIxNlwiXG4gICAgfSwgW19jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uYWdlbmN5VGV4dCArICfkvLDku7cnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5ldmFsVmFsICsgJ+WFgycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIChpdGVtLnVybCkgPyBfYygnQ29sJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLnVybCxcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6XnnItcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSkgOiBfdm0uX2UoKV0sIDEpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5ldmFsdWF0aW9uTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2YWxQZXJpb2QgPT09ICcxJyAmJiB2YWx1ZS5ldmFsVHlwZSA9PT0gJzInXG4gIH0pKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnUm93Jywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgc3RhdGljQ2xhc3M6IFwibWIxNlwiXG4gICAgfSwgW19jKCdDb2wnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uYWdlbmN5VGV4dCArICfkvLDku7cnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5ldmFsVmFsICsgJ+WFgycpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIChpdGVtLnByZUV2YWxGaWxlKSA/IF9jKCdDb2wnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNwYW5cIjogXCIzXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogaXRlbS5wcmVFdmFsRmlsZVBhdGgsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6aKE5Lyw5Y2VXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChpdGVtLnJlcG9ydEZpbGUpID8gX2MoJ0NvbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLnJlcG9ydEZpbGVQYXRoLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOivhOS8sOaKpeWRilxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSA6IF92bS5fZSgpXSwgMSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDnu4jor4Tku7flgLxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZXZhbFJlc3VsdFRleHQgKyAn5YWDJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMildKSA6IF92bS5fZSgpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZXhhbWluYXRpb25cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZXhhbWluYXRpb25cIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5a6h5p+l5a6h5om55oSP6KeBXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Yid6K+E5oSP6KeBXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLmZpcnN0RXZhbERlc2MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmZpcnN0RXZhbFVzZXIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmZpcnN0RXZhbERhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOS4i+aIt+W7uuiurlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5pbnRlcnZpZXdfYWR2aWNlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIChfdm0uaG1Qcm9qZWN0Q2xvYi5pbnRlcm5hbEF1ZGl0QWR2aWNlKSA/IF9jKCdSb3cnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiXG4gIH0sIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlhoXlrqHmhI/op4FcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IuaW50ZXJuYWxBdWRpdEFkdmljZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9KV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaKteaKvOeJqeS/oeaBr+aPj+i/sFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IucGF3bkZpbGVSZW1hcmspICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWAn+asvuS6uuWPiuaLheS/neS6uuS/oeaBr+aPj+i/sFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IuY2xpZW50RGVzYykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg57uP6JCl5oOF5Ya15o+P6L+wXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjIwXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5tYW5hZ2VtZW50RGVzYykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5tb2RlbC5yaXNrQXVkaXRSZXN1bHQpID8gX2MoJ1JvdycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCJcbiAgfSwgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWuoeaguOaEj+ingVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5yaXNrQXVkaXREZXNjKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5a6h5qC457uT6K66XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5yaXNrQXVkaXRSZXN1bHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLnJpc2tBdWRpdFVzZXIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLnJpc2tBdWRpdERhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIChfdm0uaG1Qcm9qZWN0Q2xvYi5maW5hbEV2YWxEZXNjKSA/IF9jKCdSb3cnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiXG4gIH0sIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDnu4jor4TmhI/op4FcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IuZmluYWxFdmFsRGVzYykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZmluYWxFdmFsVXNlcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZmluYWxFdmFsRGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmhtUHJvamVjdENsb2IucmVwb3J0TGVhZHNoaXBSZXN1bHQpID8gX2MoJ1JvdycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCJcbiAgfSwgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOS4iuaKpeaEj+ingVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5yZXBvcnRMZWFkc2hpcERlc2MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkuIrmiqXnu5PorrpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLnJlcG9ydExlYWRzaGlwUmVzdWx0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5Lq6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5yZXBvcnRMZWFkc2hpcFVzZXIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLnJlcG9ydExlYWRzaGlwRGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmhtUHJvamVjdENsb2IuYXBwcm92ZTFSZXN1bHQpID8gX2MoJ1JvdycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCJcbiAgfSwgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWuoeiurjHmhI/op4FcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmhtUHJvamVjdENsb2IuYXBwcm92ZTFEZXNjKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5a6h5om5Mee7k+iuulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwcm92ZTFSZXN1bHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFwcHJvdmUxVXNlcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwcm92ZTFEYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uaG1Qcm9qZWN0Q2xvYi5hcHByb3ZlMlJlc3VsdCkgPyBfYygnUm93Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIlxuICB9LCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5a6h6K6uMuaEj+ingVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5hcHByb3ZlMkRlc2MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqHmibky57uT6K66XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5hcHByb3ZlMlJlc3VsdCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYXBwcm92ZTJVc2VyKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5o+Q5Lqk5pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5hcHByb3ZlMkRhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5tb2RlbC5kc2hSZXN1bHQpID8gX2MoJ1JvdycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDE2XCJcbiAgfSwgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOW+heWuoeS8muaEj+ingeaxh+aAu1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaG1Qcm9qZWN0Q2xvYi5kc2hEZXNjKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5b6F5a6h5Lya57uT6K66XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kc2hSZXN1bHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTkurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRzaFVzZXIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRzaERhdGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5obVByb2plY3RDbG9iLnJlc29sdXRpb25fZGVzYykgPyBfYygnUm93Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm10MTZcIlxuICB9LCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Yaz6K6u5a6h5om55oSP6KeBXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5obVByb2plY3RDbG9iLnJlc29sdXRpb25fZGVzYykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaPkOS6pOS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmj5DkuqTml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9KV0sIDEpIDogX3ZtLl9lKCldLCAxKV0pXSwgMSksIF92bS5fdihcIiBcIiksIChfdm0uaG1Qcm9qUGxhbikgPyBfYygnQ29sbGFwc2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXQxNlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiY29vcGVyYXRpb25cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiY29vcGVyYXRpb25cIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5ZCI5L2c5Y6G5Y+yXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiLFxuICAgICAgXCJsb2FkaW5nXCI6IF92bS5tb2RlbC5sb2FkaW5nLFxuICAgICAgXCJkaXNhYmxlZC1ob3ZlclwiOiBcIlwiLFxuICAgICAgXCJkYXRhXCI6IF92bS5tb2RlbC5oaXN0b3J5RGF0YSxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uaGlzdG9yeUNvbHVtbnNcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0pXSwgMSldLCAxKSA6IF92bS5fZSgpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZGI1NDcyMWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1kYjU0NzIxY1wifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvaW52ZXN0aWdhdGlvblJlcG9ydC52dWVcbi8vIG1vZHVsZSBpZCA9IDkzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDggMTAgMTIgMTMgMTQiXSwic291cmNlUm9vdCI6IiJ9