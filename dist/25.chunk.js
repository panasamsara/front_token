webpackJsonp([25],{

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_loanDetail__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_loanDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_loanDetail__);



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this2 = this;

        var _this = this;
        return {
            more: false,
            showModal: false,
            search: {
                total: 0,
                pageSize: this.$config.pageSize
            },
            status: [],
            handler: [],
            applicant: [],
            start: {
                disabledDate: function disabledDate(date) {
                    return date && _this.search.createTimeEnd && date.valueOf() > _this.search.createTimeEnd.valueOf() - _this.$config.millseconds;
                }
            },
            end: {
                disabledDate: function disabledDate(date) {
                    return date && _this.search.createTimeStart && date.valueOf() < _this.search.createTimeStart.valueOf() + _this.$config.millseconds;
                }
            },
            loading: false,
            data: [],
            columns: [{ title: '放款编号', key: 'loanIdNumber' }, { title: '决议编号', key: 'decisionCode' }, { title: '借款人', key: 'cusname' }, { title: '产品名称', key: 'projectname' }, { title: '放款机构', key: 'companyname' }, { title: '合作渠道', key: 'corPath' }, { title: '放款日期', key: 'loanDate' }, { title: '放款金额(元)', key: 'firstMoney' }, { title: '余额(元)', key: 'leftMoney' }, { title: '决议状态', key: 'riskLevel' }, {
                title: '操作', align: 'center', render: function render(h, params) {
                    return h('div', [h('a', {
                        style: {
                            display: params.row.multiple ? 'none' : 'block'
                        },
                        on: {
                            click: function click() {
                                // this.$router.push({
                                //     name: 'customerInfo',
                                //     params: {id: params.row.id, pageNum: _this.search.pageNum}
                                // })
                                _this2.openModal();
                            }
                        }
                    }, [h('Tooltip', {
                        props: {
                            content: '处理',
                            placement: 'top'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-create',
                            size: 20,
                            color: '#ff9900'
                        }
                    })])]), h('a', {
                        style: {
                            display: params.row.multiple ? 'block' : 'none'
                        },
                        on: {
                            click: function click() {}
                        }
                    }, [h('Tooltip', {
                        props: {
                            content: '接受',
                            placement: 'top'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-checkmark',
                            size: 20,
                            color: '#ff9900'
                        }
                    })])])]);
                }
            }]
        };
    },

    components: {
        LoanDetail: __WEBPACK_IMPORTED_MODULE_1__views_loanDetail___default.a
    },
    methods: {
        changePage: function changePage(pageNum) {
            var _this3 = this;

            this.loading = true;
            this.search.pageNum = pageNum;
            this.search.createTimeStart = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeStart);
            this.search.createTimeEnd = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeEnd);
            this.$axios.options.url = 'asm/asmAssetReq/read/list';
            this.$axios.request({ data: this.search }).then(function (response) {
                _this3.loading = false;
                if (response.httpCode !== 200) {
                    _this3.data = [];
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                //this.data = response.data.list;
                //this.search.total = response.data.total;
                _this3.data = [{
                    id: 1,
                    loanIdNumber: 'P007865',
                    decisionCode: 'kj3444',
                    cusname: '张三',
                    projectname: '轻松贷',
                    companyname: '上海分公司',
                    corPath: 'XT100022',
                    loanDate: '2018-06-01',
                    firstMoney: '200，000，00',
                    leftMoney: '2，000，00',
                    riskLevel: '正常'
                }];
                _this3.search.total = 1;
            }).catch(function (error) {
                _this3.loading = false;
                _this3.data = [];
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },
        openModal: function openModal() {
            this.showModal = true;
        },
        modalOK: function modalOK() {
            this.showModal = false;
        }
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        // this.changePage(1);
    }
});

/***/ }),

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_loanDetail__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_loanDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_loanDetail__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _ref;

        var _this = this;
        return _ref = {
            more: false,
            showModal: false,
            search: {
                total: 0,
                pageSize: this.$config.pageSize
            },
            status: [],
            handler: [],
            applicant: [],
            loanInfo: [],
            start: {
                disabledDate: function disabledDate(date) {
                    return date && _this.search.createTimeEnd && date.valueOf() > _this.search.createTimeEnd.valueOf() - _this.$config.millseconds;
                }
            },
            end: {
                disabledDate: function disabledDate(date) {
                    return date && _this.search.createTimeStart && date.valueOf() < _this.search.createTimeStart.valueOf() + _this.$config.millseconds;
                }
            },
            loading: false,
            data: [],
            columns1: [{
                title: '签约对象',
                key: 'isLate'
            }, {
                title: '证件类型',
                key: 'isNow'
            }, {
                title: '证件号',
                key: 'history24'
            }, {
                title: '类型',
                key: 'history'
            }, {
                title: '与借款人关系',
                key: 'relation'
            }, {
                title: '备注',
                key: 'remark'
            }]
        }, _defineProperty(_ref, 'loanInfo', [{
            isLate: '张三',
            isNow: '否',
            history24: '1',
            history: '1',
            relation: '同事',
            remark: 'sdfsdf'
        }, {
            isLate: '王五',
            isNow: '否',
            history24: '1',
            history: '1',
            relation: '同事',
            remark: 'sdfsdf'
        }]), _defineProperty(_ref, 'model', {
            id: 1,
            loanIdNumber: 'P007865',
            decisionCode: 'kj3444',
            cusname: '张三',
            projectname: '轻松贷',
            companyname: '上海分公司',
            corPath: 'XT100022',
            loanDate: '2018-06-01',
            firstMoney: '200，000，00',
            leftMoney: '2，000，00',
            riskLevel: '正常'
        }), _ref;
    },

    components: {
        LoanDetail: __WEBPACK_IMPORTED_MODULE_1__views_loanDetail___default.a
    },
    methods: {
        openModal: function openModal() {
            this.showModal = true;
        },
        modalOK: function modalOK() {
            console.log(22);
        }
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
    }
});

/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.changePage(1)
      }
    }
  }, [_c('Form', {
    attrs: {
      "inline": ""
    }
  }, [_c('FormItem', [_c('Input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "type": "text",
      "clearable": "",
      "placeholder": "关键字"
    },
    model: {
      value: (_vm.search.keyword),
      callback: function($$v) {
        _vm.$set(_vm.search, "keyword", $$v)
      },
      expression: "search.keyword"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "icon": "ios-search"
    },
    on: {
      "click": function($event) {
        _vm.changePage(1)
      }
    }
  }, [_vm._v("\n                    搜索\n                ")])], 1)], 1)], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "loading": _vm.loading,
      "columns": _vm.columns,
      "data": _vm.data
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Page', {
    staticClass: "fr",
    attrs: {
      "total": _vm.search.total,
      "current": _vm.search.pageNum,
      "page-size": _vm.search.pageSize,
      "show-elevator": "",
      "show-total": ""
    },
    on: {
      "on-change": _vm.changePage
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "clear"
  }), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "放款信息详情",
      "draggable": "",
      "scrollable": "",
      "transfer": false,
      "width": 70
    },
    model: {
      value: (_vm.showModal),
      callback: function($$v) {
        _vm.showModal = $$v
      },
      expression: "showModal"
    }
  }, [_c('div', [_c('LoanDetail')], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "text",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.modalOK()
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.modalOK()
      }
    }
  }, [_vm._v("确定")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-0ca19c1d", module.exports)
  }
}

/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('br'), _vm._v(" "), _c('div', [_c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    基本信息\n                ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            决议编号\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.loanIdNumber) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            项目编号\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.loanIdNumber) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            决议有效期\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.loanDate) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            客户经理\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.cusname) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            部门\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.cusname) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            借款人\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.cusname) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            借款人证件号码\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            批复金额(元)\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            贷款期限\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            还款方式\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            批复息费\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            预计放款日期\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            综合息费\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    放款信息\n                ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            本次借款金额\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            本次借款期限\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            实施机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            合作机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            资金来源\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            信托计划\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            贷款产品\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            资金来源备注\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    签约对象\n                ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.columns1,
      "data": _vm.loanInfo
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    收费信息(不含前期已收取的业务办理费用)\n                ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.columns1,
      "data": _vm.loanInfo
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    公证抵押情况\n                ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.columns1,
      "data": _vm.loanInfo
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    客户放款账号\n                ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            本次借款金额\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            本次借款期限\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            实施机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            合作机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            资金来源\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            信托计划\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            贷款产品\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            资金来源备注\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    客户还款账号\n                ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            本次借款金额\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            本次借款期限\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            实施机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            合作机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            资金来源\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            信托计划\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            贷款产品\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            资金来源备注\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    客户缴费账号\n                ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            本次借款金额\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            本次借款期限\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            实施机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            合作机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            资金来源\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            信托计划\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            贷款产品\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            资金来源备注\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    我司还款账号\n                ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            本次借款金额\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            本次借款期限\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            实施机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            合作机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            资金来源\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            信托计划\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            贷款产品\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            资金来源备注\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.decisionCode) + "\n                        ")])], 1)], 1)])], 1), _vm._v(" "), _c('br')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-3d91084e", module.exports)
  }
}

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1014),
  /* template */
  __webpack_require__(1105),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/loan.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loan.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ca19c1d", Component.options)
  } else {
    hotAPI.reload("data-v-0ca19c1d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1015),
  /* template */
  __webpack_require__(1128),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/loanDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loanDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d91084e", Component.options)
  } else {
    hotAPI.reload("data-v-3d91084e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2FuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvYW5EZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvYW4udnVlPzY3ZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvYW5EZXRhaWwudnVlP2JhOWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvYW4udnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sb2FuRGV0YWlsLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2hvd01vZGFsIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJjb2x1bW5zIiwidGl0bGUiLCJrZXkiLCJhbGlnbiIsInJlbmRlciIsImgiLCJwYXJhbXMiLCJzdHlsZSIsImRpc3BsYXkiLCJyb3ciLCJtdWx0aXBsZSIsIm9uIiwiY2xpY2siLCJvcGVuTW9kYWwiLCJwcm9wcyIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJ0eXBlIiwic2l6ZSIsImNvbG9yIiwiY29tcG9uZW50cyIsIkxvYW5EZXRhaWwiLCJtZXRob2RzIiwiY2hhbmdlUGFnZSIsInBhZ2VOdW0iLCJ0aW1lVXRpbCIsImdldERhdGVUaW1lIiwiJGF4aW9zIiwib3B0aW9ucyIsInVybCIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJodHRwQ29kZSIsIiRNZXNzYWdlIiwiZXJyb3IiLCJtc2ciLCJFUlJPUiIsImlkIiwibG9hbklkTnVtYmVyIiwiZGVjaXNpb25Db2RlIiwiY3VzbmFtZSIsInByb2plY3RuYW1lIiwiY29tcGFueW5hbWUiLCJjb3JQYXRoIiwibG9hbkRhdGUiLCJmaXJzdE1vbmV5IiwibGVmdE1vbmV5Iiwicmlza0xldmVsIiwiY2F0Y2giLCJtb2RhbE9LIiwibW91bnRlZCIsIiRyb290IiwiZXZlbnRIdWIiLCIkZW1pdCIsImxvYW5JbmZvIiwiY29sdW1uczEiLCJpc0xhdGUiLCJpc05vdyIsImhpc3RvcnkyNCIsImhpc3RvcnkiLCJyZWxhdGlvbiIsInJlbWFyayIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLCtEQUFlO0FBQ1hBLFFBRFcsa0JBQ0o7QUFBQTs7QUFDSCxZQUFNQyxRQUFRLElBQWQ7QUFDQSxlQUFPO0FBQ0hDLGtCQUFNLEtBREg7QUFFSEMsdUJBQVcsS0FGUjtBQUdIQyxvQkFBUTtBQUNKQyx1QkFBTyxDQURIO0FBRUpDLDBCQUFVLEtBQUtDLE9BQUwsQ0FBYUQ7QUFGbkIsYUFITDtBQU9IRSxvQkFBUSxFQVBMO0FBUUhDLHFCQUFTLEVBUk47QUFTSEMsdUJBQVcsRUFUUjtBQVVIQyxtQkFBTztBQUNIQyw0QkFERyx3QkFDVUMsSUFEVixFQUNnQjtBQUNmLDJCQUFPQSxRQUFRWixNQUFNRyxNQUFOLENBQWFVLGFBQXJCLElBQXNDRCxLQUFLRSxPQUFMLEtBQWlCZCxNQUFNRyxNQUFOLENBQWFVLGFBQWIsQ0FBMkJDLE9BQTNCLEtBQXVDZCxNQUFNTSxPQUFOLENBQWNTLFdBQW5IO0FBQ0g7QUFIRSxhQVZKO0FBZUhDLGlCQUFLO0FBQ0RMLDRCQURDLHdCQUNZQyxJQURaLEVBQ2tCO0FBQ2YsMkJBQU9BLFFBQVFaLE1BQU1HLE1BQU4sQ0FBYWMsZUFBckIsSUFBd0NMLEtBQUtFLE9BQUwsS0FBaUJkLE1BQU1HLE1BQU4sQ0FBYWMsZUFBYixDQUE2QkgsT0FBN0IsS0FBeUNkLE1BQU1NLE9BQU4sQ0FBY1MsV0FBdkg7QUFDSDtBQUhBLGFBZkY7QUFvQkhHLHFCQUFTLEtBcEJOO0FBcUJIbkIsa0JBQU0sRUFyQkg7QUFzQkhvQixxQkFBUyxDQUNMLEVB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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN6R0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDOXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxXQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoiMjUuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RpbWVVdGlsfSBmcm9tICcuLi9saWJzL3V0aWwnXG5pbXBvcnQgTG9hbkRldGFpbCBmcm9tICcuLi92aWV3cy9sb2FuRGV0YWlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9yZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMuJGNvbmZpZy5wYWdlU2l6ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czogW10sXG4gICAgICAgICAgICBoYW5kbGVyOiBbXSxcbiAgICAgICAgICAgIGFwcGxpY2FudDogW10sXG4gICAgICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZShkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlICYmIF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kICYmIGRhdGUudmFsdWVPZigpID4gX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQudmFsdWVPZigpIC0gX3RoaXMuJGNvbmZpZy5taWxsc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZSAmJiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ICYmIGRhdGUudmFsdWVPZigpIDwgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydC52YWx1ZU9mKCkgKyBfdGhpcy4kY29uZmlnLm1pbGxzZWNvbmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5pS+5qy+57yW5Y+3Jywga2V5OiAnbG9hbklkTnVtYmVyJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5Yaz6K6u57yW5Y+3Jywga2V5OiAnZGVjaXNpb25Db2RlJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5YCf5qy+5Lq6Jywga2V5OiAnY3VzbmFtZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+S6p+WTgeWQjeensCcsIGtleTogJ3Byb2plY3RuYW1lJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5pS+5qy+5py65p6EJywga2V5OiAnY29tcGFueW5hbWUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflkIjkvZzmuKDpgZMnLCBrZXk6ICdjb3JQYXRoJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5pS+5qy+5pel5pyfJywga2V5OiAnbG9hbkRhdGUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmlL7mrL7ph5Hpop0o5YWDKScsIGtleTogJ2ZpcnN0TW9uZXknfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfkvZnpop0o5YWDKScsIGtleTogJ2xlZnRNb25leSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+WGs+iurueKtuaAgScsIGtleTogJ3Jpc2tMZXZlbCd9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmk43kvZwnLCBhbGlnbjogJ2NlbnRlcicsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogcGFyYW1zLnJvdy5tdWx0aXBsZSA/ICdub25lJyA6ICdibG9jaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBuYW1lOiAnY3VzdG9tZXJJbmZvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFyYW1zOiB7aWQ6IHBhcmFtcy5yb3cuaWQsIHBhZ2VOdW06IF90aGlzLnNlYXJjaC5wYWdlTnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdUb29sdGlwJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5aSE55CGJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ0ljb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21kLWNyZWF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjk5MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogcGFyYW1zLnJvdy5tdWx0aXBsZSA/ICdibG9jaycgOiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnVG9vbHRpcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+aOpeWPlycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdJY29uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZC1jaGVja21hcmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmY5OTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBMb2FuRGV0YWlsXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoYW5nZVBhZ2UocGFnZU51bSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnBhZ2VOdW0gPSBwYWdlTnVtO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ID0gdGltZVV0aWwuZ2V0RGF0ZVRpbWUodGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQgPSB0aW1lVXRpbC5nZXREYXRlVGltZSh0aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kKTtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2FzbS9hc21Bc3NldFJlcS9yZWFkL2xpc3QnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YTogdGhpcy5zZWFyY2h9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YS5saXN0O1xuICAgICAgICAgICAgICAgIC8vdGhpcy5zZWFyY2gudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFt7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgICBsb2FuSWROdW1iZXI6ICdQMDA3ODY1JyxcbiAgICAgICAgICAgICAgICAgICAgZGVjaXNpb25Db2RlOiAna2ozNDQ0JyxcbiAgICAgICAgICAgICAgICAgICAgY3VzbmFtZTogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RuYW1lOiAn6L275p2+6LS3JyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueW5hbWU6ICfkuIrmtbfliIblhazlj7gnLFxuICAgICAgICAgICAgICAgICAgICBjb3JQYXRoOiAnWFQxMDAwMjInLFxuICAgICAgICAgICAgICAgICAgICBsb2FuRGF0ZTogJzIwMTgtMDYtMDEnLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdE1vbmV5OiAnMjAw77yMMDAw77yMMDAnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0TW9uZXk6ICcy77yMMDAw77yMMDAnLFxuICAgICAgICAgICAgICAgICAgICByaXNrTGV2ZWw6ICfmraPluLgnXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gudG90YWwgPSAxO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5Nb2RhbCgpe1xuICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGFsT0soKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC5ldmVudEh1Yi4kZW1pdCgnYnJlYWRjcnVtYicpO1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVBhZ2UoMSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xvYW4uanMiLCJpbXBvcnQge3RpbWVVdGlsfSBmcm9tICcuLi9saWJzL3V0aWwnXG5pbXBvcnQgTG9hbkRldGFpbCBmcm9tICcuLi92aWV3cy9sb2FuRGV0YWlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9yZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMuJGNvbmZpZy5wYWdlU2l6ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czogW10sXG4gICAgICAgICAgICBoYW5kbGVyOiBbXSxcbiAgICAgICAgICAgIGFwcGxpY2FudDogW10sXG4gICAgICAgICAgICBsb2FuSW5mbzogW10sXG4gICAgICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZShkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlICYmIF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kICYmIGRhdGUudmFsdWVPZigpID4gX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQudmFsdWVPZigpIC0gX3RoaXMuJGNvbmZpZy5taWxsc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZSAmJiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ICYmIGRhdGUudmFsdWVPZigpIDwgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydC52YWx1ZU9mKCkgKyBfdGhpcy4kY29uZmlnLm1pbGxzZWNvbmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBjb2x1bW5zMTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnrb7nuqblr7nosaEnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdpc0xhdGUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+B5Lu257G75Z6LJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnaXNOb3cnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+B5Lu25Y+3JyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnaGlzdG9yeTI0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+exu+WeiycsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2hpc3RvcnknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5LiO5YCf5qy+5Lq65YWz57O7JyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncmVsYXRpb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5aSH5rOoJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncmVtYXJrJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2FuSW5mbzogW3tcbiAgICAgICAgICAgICAgICBpc0xhdGU6ICflvKDkuIknLFxuICAgICAgICAgICAgICAgIGlzTm93OiAn5ZCmJyxcbiAgICAgICAgICAgICAgICBoaXN0b3J5MjQ6ICcxJyxcbiAgICAgICAgICAgICAgICBoaXN0b3J5OiAnMScsXG4gICAgICAgICAgICAgICAgcmVsYXRpb246ICflkIzkuosnLFxuICAgICAgICAgICAgICAgIHJlbWFyazogJ3NkZnNkZidcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIGlzTGF0ZTogJ+eOi+S6lCcsXG4gICAgICAgICAgICAgICAgaXNOb3c6ICflkKYnLFxuICAgICAgICAgICAgICAgIGhpc3RvcnkyNDogJzEnLFxuICAgICAgICAgICAgICAgIGhpc3Rvcnk6ICcxJyxcbiAgICAgICAgICAgICAgICByZWxhdGlvbjogJ+WQjOS6iycsXG4gICAgICAgICAgICAgICAgcmVtYXJrOiAnc2Rmc2RmJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGxvYW5JZE51bWJlcjogJ1AwMDc4NjUnLFxuICAgICAgICAgICAgICAgIGRlY2lzaW9uQ29kZTogJ2tqMzQ0NCcsXG4gICAgICAgICAgICAgICAgY3VzbmFtZTogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgcHJvamVjdG5hbWU6ICfovbvmnb7otLcnLFxuICAgICAgICAgICAgICAgIGNvbXBhbnluYW1lOiAn5LiK5rW35YiG5YWs5Y+4JyxcbiAgICAgICAgICAgICAgICBjb3JQYXRoOiAnWFQxMDAwMjInLFxuICAgICAgICAgICAgICAgIGxvYW5EYXRlOiAnMjAxOC0wNi0wMScsXG4gICAgICAgICAgICAgICAgZmlyc3RNb25leTogJzIwMO+8jDAwMO+8jDAwJyxcbiAgICAgICAgICAgICAgICBsZWZ0TW9uZXk6ICcy77yMMDAw77yMMDAnLFxuICAgICAgICAgICAgICAgIHJpc2tMZXZlbDogJ+ato+W4uCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBMb2FuRGV0YWlsXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIFxuICAgICAgICBvcGVuTW9kYWwoKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBtb2RhbE9LKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygyMilcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC5ldmVudEh1Yi4kZW1pdCgnYnJlYWRjcnVtYicpO1xuICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9sb2FuRGV0YWlsLmpzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBvbjoge1xuICAgICAgXCJrZXl1cFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCEoJ2J1dHRvbicgaW4gJGV2ZW50KSAmJiBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIikpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgX3ZtLmNoYW5nZVBhZ2UoMSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnRm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpbmxpbmVcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnSW5wdXQnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIzMDBweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLlhbPplK7lrZdcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaC5rZXl3b3JkKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJrZXl3b3JkXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5rZXl3b3JkXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIFtfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJpb3Mtc2VhcmNoXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5pCc57SiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibG9hZGluZ1wiOiBfdm0ubG9hZGluZyxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1ucyxcbiAgICAgIFwiZGF0YVwiOiBfdm0uZGF0YVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUGFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvdGFsXCI6IF92bS5zZWFyY2gudG90YWwsXG4gICAgICBcImN1cnJlbnRcIjogX3ZtLnNlYXJjaC5wYWdlTnVtLFxuICAgICAgXCJwYWdlLXNpemVcIjogX3ZtLnNlYXJjaC5wYWdlU2l6ZSxcbiAgICAgIFwic2hvdy1lbGV2YXRvclwiOiBcIlwiLFxuICAgICAgXCJzaG93LXRvdGFsXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uY2hhbmdlUGFnZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xlYXJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ01vZGFsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwi5pS+5qy+5L+h5oGv6K+m5oOFXCIsXG4gICAgICBcImRyYWdnYWJsZVwiOiBcIlwiLFxuICAgICAgXCJzY3JvbGxhYmxlXCI6IFwiXCIsXG4gICAgICBcInRyYW5zZmVyXCI6IGZhbHNlLFxuICAgICAgXCJ3aWR0aFwiOiA3MFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dNb2RhbCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5zaG93TW9kYWwgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNob3dNb2RhbFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIFtfYygnTG9hbkRldGFpbCcpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImZvb3RlclwiXG4gICAgfSxcbiAgICBzbG90OiBcImZvb3RlclwiXG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInNpemVcIjogXCJsYXJnZVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm1vZGFsT0soKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIuWPlua2iFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcInNpemVcIjogXCJsYXJnZVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm1vZGFsT0soKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIuehruWumlwiKV0pXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTBjYTE5YzFkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMGNhMTljMWRcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy9sb2FuLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZmFtaWx5SW5mb1wiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJmYW1pbHlJbmZvXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDln7rmnKzkv6Hmga9cXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWGs+iurue8luWPt1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5sb2FuSWROdW1iZXIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOmhueebrue8luWPt1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5sb2FuSWROdW1iZXIpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWGs+iuruacieaViOacn1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5sb2FuRGF0ZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlrqLmiLfnu4/nkIZcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY3VzbmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6YOo6ZeoXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmN1c25hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+5Lq6XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmN1c25hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWAn+asvuS6uuivgeS7tuWPt+eggVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5om55aSN6YeR6aKdKOWFgylcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDotLfmrL7mnJ/pmZBcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi/mOasvuaWueW8j1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaJueWkjeaBr+i0uVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6aKE6K6h5pS+5qy+5pel5pyfXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg57u85ZCI5oGv6LS5XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJmYW1pbHlJbmZvXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImZhbWlseUluZm9cIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOaUvuasvuS/oeaBr1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys5qyh5YCf5qy+6YeR6aKdXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys5qyh5YCf5qy+5pyf6ZmQXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlrp7mlr3mnLrmnoRcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlkIjkvZzmnLrmnoRcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi1hOmHkeadpea6kFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS/oeaJmOiuoeWIklxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6LS35qy+5Lqn5ZOBXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDotYTph5HmnaXmupDlpIfms6hcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImZhbWlseUluZm9cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZmFtaWx5SW5mb1wiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg562+57qm5a+56LGhXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnVGFibGUnLCB7XG4gICAgcmVmOiBcInNlbGVjdGlvblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImJvcmRlclwiOiBcIlwiLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zMSxcbiAgICAgIFwiZGF0YVwiOiBfdm0ubG9hbkluZm9cbiAgICB9XG4gIH0pXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZmFtaWx5SW5mb1wiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJmYW1pbHlJbmZvXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmlLbotLnkv6Hmga8o5LiN5ZCr5YmN5pyf5bey5pS25Y+W55qE5Lia5Yqh5Yqe55CG6LS555SoKVxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1RhYmxlJywge1xuICAgIHJlZjogXCJzZWxlY3Rpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJib3JkZXJcIjogXCJcIixcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1uczEsXG4gICAgICBcImRhdGFcIjogX3ZtLmxvYW5JbmZvXG4gICAgfVxuICB9KV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImZhbWlseUluZm9cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZmFtaWx5SW5mb1wiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5YWs6K+B5oq15oq85oOF5Ya1XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnVGFibGUnLCB7XG4gICAgcmVmOiBcInNlbGVjdGlvblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImJvcmRlclwiOiBcIlwiLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zMSxcbiAgICAgIFwiZGF0YVwiOiBfdm0ubG9hbkluZm9cbiAgICB9XG4gIH0pXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZmFtaWx5SW5mb1wiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJmYW1pbHlJbmZvXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDlrqLmiLfmlL7mrL7otKblj7dcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOacrOasoeWAn+asvumHkeminVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOacrOasoeWAn+asvuacn+mZkFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5a6e5pa95py65p6EXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5ZCI5L2c5py65p6EXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDotYTph5HmnaXmupBcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDkv6HmiZjorqHliJJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0t+asvuS6p+WTgVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6LWE6YeR5p2l5rqQ5aSH5rOoXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJmYW1pbHlJbmZvXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImZhbWlseUluZm9cIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOWuouaIt+i/mOasvui0puWPt1xcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys5qyh5YCf5qy+6YeR6aKdXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5pys5qyh5YCf5qy+5pyf6ZmQXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlrp7mlr3mnLrmnoRcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlkIjkvZzmnLrmnoRcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi1hOmHkeadpea6kFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS/oeaJmOiuoeWIklxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6LS35qy+5Lqn5ZOBXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI1XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDotYTph5HmnaXmupDlpIfms6hcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImZhbWlseUluZm9cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZmFtaWx5SW5mb1wiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5a6i5oi357y06LS56LSm5Y+3XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKzmrKHlgJ/mrL7ph5Hpop1cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnKzmrKHlgJ/mrL7mnJ/pmZBcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWunuaWveacuuaehFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWQiOS9nOacuuaehFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6LWE6YeR5p2l5rqQXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5L+h5omY6K6h5YiSXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDotLfmrL7kuqflk4FcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi1hOmHkeadpea6kOWkh+azqFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZmFtaWx5SW5mb1wiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJmYW1pbHlJbmZvXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmiJHlj7jov5jmrL7otKblj7dcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOacrOasoeWAn+asvumHkeminVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOacrOasoeWAn+asvuacn+mZkFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5a6e5pa95py65p6EXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5ZCI5L2c5py65p6EXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDotYTph5HmnaXmupBcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDkv6HmiZjorqHliJJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZGVjaXNpb25Db2RlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0t+asvuS6p+WTgVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5kZWNpc2lvbkNvZGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6LWE6YeR5p2l5rqQ5aSH5rOoXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmRlY2lzaW9uQ29kZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zZDkxMDg0ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNkOTEwODRlXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvbG9hbkRldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi9jb21wb25lbnRzL2xvYW4uanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTBjYTE5YzFkXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2xvYW4udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL2xvYW4udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbG9hbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMGNhMTljMWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wY2ExOWMxZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvbG9hbi52dWVcbi8vIG1vZHVsZSBpZCA9IDg5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uL2NvbXBvbmVudHMvbG9hbkRldGFpbC5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2Q5MTA4NGVcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vbG9hbkRldGFpbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvbG9hbkRldGFpbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsb2FuRGV0YWlsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zZDkxMDg0ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNkOTEwODRlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9sb2FuRGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMjUiXSwic291cmNlUm9vdCI6IiJ9