webpackJsonp([45],{

/***/ 1154:
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
  }, [_c('FormItem', [_c('Tooltip', {
    attrs: {
      "placement": "top-start",
      "content": "更多筛选"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-funnel",
      "size": "22"
    },
    on: {
      "click": function($event) {
        _vm.more = !_vm.more
      }
    }
  })], 1)], 1), _vm._v(" "), _c('FormItem', [_c('Input', {
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
  }, [_vm._v("\n                    搜索\n                ")])], 1)], 1), _vm._v(" "), (_vm.more) ? _c('Form', {
    attrs: {
      "label-width": 60,
      "inline": ""
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "状态"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "180px"
    },
    model: {
      value: (_vm.search.status),
      callback: function($$v) {
        _vm.$set(_vm.search, "status", $$v)
      },
      expression: "search.status"
    }
  }, _vm._l((_vm.status), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                        " + _vm._s(item.text) + "\n                    ")])
  }))], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "处理人"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "180px"
    },
    model: {
      value: (_vm.search.handler),
      callback: function($$v) {
        _vm.$set(_vm.search, "handler", $$v)
      },
      expression: "search.handler"
    }
  }, _vm._l((_vm.handler), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                        " + _vm._s(item.text) + "\n                    ")])
  }))], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "申请人"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "180px"
    },
    model: {
      value: (_vm.search.applicant),
      callback: function($$v) {
        _vm.$set(_vm.search, "applicant", $$v)
      },
      expression: "search.applicant"
    }
  }, _vm._l((_vm.applicant), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                        " + _vm._s(item.text) + "\n                    ")])
  }))], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "申请时间"
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "11"
    }
  }, [_c('DatePicker', {
    attrs: {
      "type": "datetime",
      "placeholder": "开始时间",
      "options": _vm.start
    },
    model: {
      value: (_vm.search.createTimeStart),
      callback: function($$v) {
        _vm.$set(_vm.search, "createTimeStart", $$v)
      },
      expression: "search.createTimeStart"
    }
  })], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-center",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        -\n                    ")]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "11"
    }
  }, [_c('DatePicker', {
    attrs: {
      "type": "datetime",
      "placeholder": "结束时间",
      "options": _vm.end
    },
    model: {
      value: (_vm.search.createTimeEnd),
      callback: function($$v) {
        _vm.$set(_vm.search, "createTimeEnd", $$v)
      },
      expression: "search.createTimeEnd"
    }
  })], 1)], 1)], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "loading": _vm.loading,
      "columns": _vm.columns,
      "data": _vm.listData
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
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-719c2c60", module.exports)
  }
}

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(986),
  /* template */
  __webpack_require__(1154),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/backlog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] backlog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-719c2c60", Component.options)
  } else {
    hotAPI.reload("data-v-719c2c60", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this2 = this;

        var _this = this;
        return {
            more: false,
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
            listData: [],
            columns: [{ title: '主题', key: '',
                render: function render(h, params) {
                    return h('label', params.row.businessDetail.projectTitle);
                }
            }, { title: '事项', key: 'taskName' }, { title: '状态', key: 'status',
                render: function render(h, params) {
                    return h('label', params.row.businessDetail.projectStatusText);
                }
            }, { title: '处理人', key: 'lastHandler' }, { title: '处理时间', key: 'createTime' }, { title: '申请人', key: 'applicant',
                render: function render(h, params) {
                    return h('label', params.row.businessDetail.applyUserName);
                }
            }, { title: '申请时间', key: '',
                render: function render(h, params) {
                    return h('label', params.row.businessDetail.applyDate);
                }
            }, {
                title: '操作', align: 'center', render: function render(h, params) {
                    return h('div', [h('a', {
                        style: {
                            display: params.row.needReceive ? 'none' : 'block'
                        },
                        on: {
                            click: function click() {
                                var route = { params: { id: params.row.businessDetail.id, pageNum: _this.search.pageNum } };
                                switch (params.row.taskName) {
                                    case '初评估值':
                                        route.name = 'review';
                                        break;
                                    case '内审1':
                                        route.name = 'household';
                                        break;
                                    case '下户任务分配':
                                        route.name = 'allocation';
                                        break;
                                    case '内审2':
                                        route.name = 'internalAudit';
                                        break;
                                    case '审核':
                                        route.name = 'examine';
                                        break;
                                    case '终评估值':
                                        route.name = 'finalComment';
                                        break;
                                    case '确认上报':
                                        route.name = 'confirmReport';
                                        break;
                                    case '一级审批经理':
                                        route.name = 'approval';
                                        break;
                                    case '审批二级':
                                        route.name = 'approval';
                                        break;
                                    case '贷审会审批':
                                        route.name = 'trialMeeting';
                                        break;
                                    case '起草决议':
                                        route.name = 'draftResolution';
                                        break;
                                    case '决议审批人':
                                        route.name = 'resolutionApproval';
                                        break;
                                    case '通道匹配':
                                        route.name = 'channelMatching';
                                        break;
                                    case '权证专员分配':
                                        route.name = 'warrantDistribution';
                                        break;
                                    case '合同要素准备':
                                        route.name = 'contractElement';
                                        break;
                                    case '通道确认':
                                        route.name = 'channelConfirmation';
                                        break;
                                    case '合同打印':
                                        route.name = 'contractPrinting';
                                        break;
                                    case '风控总监落实条件':
                                        route.name = 'implementByWindControl';
                                        break;
                                    case '分公司财务收费(卡)确认':
                                        route.name = 'branchFinance';
                                        break;
                                    case '总公司财务收费(卡)确认':
                                        route.name = 'headFinance';
                                        break;
                                    case '运营专员落实条件':
                                        route.name = 'operationSpecialist';
                                        break;
                                    case '确认放款':
                                        route.name = 'confirmLoan';
                                        break;
                                    case '确认登记':
                                        route.name = 'loRegistration';
                                        break;
                                    case '分公司控卡收费确认':
                                        route.name = 'branchControlCard';
                                        break;
                                    case '总公司控卡收费确认':
                                        route.name = 'headControlCard';
                                        break;
                                    case '归档':
                                        route.name = 'placeFile';
                                        break;
                                }
                                _this2.$router.push(route);
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
                            display: params.row.needReceive ? 'block' : 'none'
                        },
                        on: {
                            click: function click() {
                                params.row.needReceive = false;
                            }
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

    methods: {
        changePage: function changePage(pageNum) {
            var _this3 = this;

            this.loading = true;
            this.search.pageNum = pageNum;
            this.search.createTimeStart = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeStart);
            this.search.createTimeEnd = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeEnd);
            this.$axios.options.url = '/houseMortgage/workFlow/read/queryMyTask';
            this.$axios.request({ data: this.search }).then(function (response) {
                _this3.loading = false;
                if (response.httpCode !== 200) {
                    _this3.listData = [];
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.listData = response.data;
                _this3.listData.forEach(function (element) {
                    if (element.lastHandler) {
                        element.lastHandler = element.lastHandler.replace(/\"/g, "");
                    }

                    if (!element.businessDetail) {
                        element.businessDetail = {};
                    }
                });
                _this3.search.total = response.data.total;
                // this.data=[];
                // this.search.total = 1;
            }).catch(function (error) {
                _this3.loading = false;
                _this3.listData = [];
                _this3.$Message.error(_this3.$config.ERROR);
            });
            /*    this.listData = [{
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '初评',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '申请下户',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '下户任务分配',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '内审',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '风控审核',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '终评',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '项目上报',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '审批',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '贷审会审批',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '起草决议',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '决议审批',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '通道匹配',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '权证专员分配',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '合同要素准备',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '通道确认',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: 16,
                    theme: '中央花园抵押',
                    task: '合同打印',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '风控总监落实条件',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: 18,
                    theme: '中央花园抵押',
                    task: '分公司财务收费(卡)确认',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: 19,
                    theme: '中央花园抵押',
                    task: '总公司财务收费(卡)确认',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '运营专员落实条件',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: 21,
                    theme: '中央花园抵押',
                    task: '确认放款',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: '2018111611094002300008',
                    theme: '中央花园抵押',
                    task: '确认登记',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: 23,
                    theme: '中央花园抵押',
                    task: '分公司控卡收费确认',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: 24,
                    theme: '中央花园抵押',
                    task: '总公司控卡收费确认',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }, {
                    id: 25,
                    theme: '中央花园抵押',
                    task: '归档',
                    status: '待办',
                    handler: '张三',
                    handlerTime: '2018-11-04 12:30:45',
                    applicant: '李四',
                    applicantTime: '2018-11-04 10:10:05',
                    multiple: false
                }];   */
        }
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        this.changePage(1);
    }
});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYmFja2xvZy52dWU/MjZmYyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYmFja2xvZy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFja2xvZy5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJsaXN0RGF0YSIsImNvbHVtbnMiLCJ0aXRsZSIsImtleSIsInJlbmRlciIsImgiLCJwYXJhbXMiLCJyb3ciLCJidXNpbmVzc0RldGFpbCIsInByb2plY3RUaXRsZSIsInByb2plY3RTdGF0dXNUZXh0IiwiYXBwbHlVc2VyTmFtZSIsImFwcGx5RGF0ZSIsImFsaWduIiwic3R5bGUiLCJkaXNwbGF5IiwibmVlZFJlY2VpdmUiLCJvbiIsImNsaWNrIiwicm91dGUiLCJpZCIsInBhZ2VOdW0iLCJ0YXNrTmFtZSIsIm5hbWUiLCIkcm91dGVyIiwicHVzaCIsInByb3BzIiwiY29udGVudCIsInBsYWNlbWVudCIsInR5cGUiLCJzaXplIiwiY29sb3IiLCJtZXRob2RzIiwiY2hhbmdlUGFnZSIsInRpbWVVdGlsIiwiZ2V0RGF0ZVRpbWUiLCIkYXhpb3MiLCJvcHRpb25zIiwidXJsIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImh0dHBDb2RlIiwiJE1lc3NhZ2UiLCJlcnJvciIsIm1zZyIsIkVSUk9SIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJsYXN0SGFuZGxlciIsInJlcGxhY2UiLCJjYXRjaCIsIm1vdW50ZWQiLCIkcm9vdCIsImV2ZW50SHViIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0csYUFBYTtBQUM3RztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQW1HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsV0FBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7OztBQzNCQTs7QUFFQSwrREFBZTtBQUNYQSxRQURXLGtCQUNKO0FBQUE7O0FBQ0gsWUFBTUMsUUFBUSxJQUFkO0FBQ0EsZUFBTztBQUNIQyxrQkFBTSxLQURIO0FBRUhDLG9CQUFRO0FBQ0pDLHVCQUFPLENBREg7QUFFSkMsMEJBQVUsS0FBS0MsT0FBTCxDQUFhRDtBQUZuQixhQUZMO0FBTUhFLG9CQUFRLEVBTkw7QUFPSEMscUJBQVMsRUFQTjtBQVFIQyx1QkFBVyxFQVJSO0FBU0hDLG1CQUFPO0FBQ0hDLDRCQURHLHdCQUNVQyxJQURWLEVBQ2dCO0FBQ2YsMkJBQU9BLFFBQVFYLE1BQU1FLE1BQU4sQ0FBYVUsYUFBckIsSUFBc0NELEtBQUtFLE9BQUwsS0FBaUJiLE1BQU1FLE1BQU4sQ0FBYVUsYUFBYixDQUEyQkMsT0FBM0IsS0FBdUNiLE1BQU1LLE9BQU4sQ0FBY1MsV0FBbkg7QUFDSDtBQUhFLGFBVEo7QUFjSEMsaUJBQUs7QUFDREwsNEJBREMsd0JBQ1lDLElBRFosRUFDa0I7QUFDZiwyQkFBT0EsUUFBUVgsTUFBTUUsTUFBTixDQUFhYyxlQUFyQixJQUF3Q0wsS0FBS0UsT0FBTCxLQUFpQmIsTUFBTUUsTUFBTixDQUFhYyxlQUFiLENBQTZCSCxPQUE3QixLQUF5Q2IsTUFBTUssT0FBTixDQUFjUyxXQUF2SDtBQUNIO0FBSEEsYUFkRjtBQW1CSEcscUJBQVMsS0FuQk47QUFvQkhDLHNCQUFVLEVBcEJQO0FBcUJIQyxxQkFBUyxDQUFDLEVBQUNDLE9BQU8sSUFBUixFQUFjQyxLQUFLLEVBQW5CO0FBQ0ZDLHdCQUFRLGdCQUFDQyxDQUFELEVBQUlDLE1BQUosRUFBYTtBQUNqQiwyQkFBT0QsRUFBRSxPQUFGLEVBQVdDLE9BQU9DLEdBQVAsQ0FBV0MsY0FBWCxDQUEwQkMsWUFBckMsQ0FBUDtBQUNIO0FBSEMsYUFBRCxFQUtMLEVBQUNQLE9BQU8sSUFBUixFQUFjQyxLQUFLLFVBQW5CLEVBTEssRUFNTCxFQUFDRCxPQUFPLElBQVIsRUFBY0MsS0FBSyxRQUFuQjtBQUNJQyx3QkFBUSxnQkFBQ0MsQ0FBRCxFQUFJQyxNQUFKLEVBQWE7QUFDakIsMkJBQU9ELEVBQUUsT0FBRixFQUFZQyxPQUFPQyxHQUFQLENBQVdDLGNBQVgsQ0FBMEJFLGlCQUF0QyxDQUFQO0FBQ0g7QUFITCxhQU5LLEVBV0wsRUFBQ1IsT0FBTyxLQUFSLEVBQWVDLEtBQUssYUFBcEIsRUFYSyxFQVlMLEVBQUNELE9BQU8sTUFBUixFQUFnQkMsS0FBSyxZQUFyQixFQVpLLEVBYUwsRUFBQ0QsT0FBTyxLQUFSLEVBQWVDLEtBQUssV0FBcEI7QUFDSUMsd0JBQVEsZ0JBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFhO0FBQ2pCLDJCQUFPRCxFQUFFLE9BQUYsRUFBWUMsT0FBT0MsR0FBUCxDQUFXQyxjQUFYLENBQTBCRyxhQUF0QyxDQUFQO0FBQ0g7QUFITCxhQWJLLEVBa0JMLEVBQUNULE9BQU8sTUFBUixFQUFnQkMsS0FBSyxFQUFyQjtBQUNJQyx3QkFBUSxnQkFBQ0MsQ0FBRCxFQUFJQyxNQUFKLEVBQWE7QUFDakIsMkJBQU9ELEVBQUUsT0FBRixFQUFZQyxPQUFPQyxHQUFQLENBQVdDLGNBQVgsQ0FBMEJJLFNBQXRDLENBQVA7QUFDSDtBQUhMLGFBbEJLLEVBdUJMO0FBQ0lWLHVCQUFPLElBRFgsRUFDaUJXLE9BQU8sUUFEeEIsRUFDa0NULFFBQVEsZ0JBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQ2pELDJCQUFPRCxFQUFFLEtBQUYsRUFBUyxDQUNaQSxFQUFFLEdBQUYsRUFBTztBQUNIUywrQkFBTztBQUNIQyxxQ0FBU1QsT0FBT0MsR0FBUCxDQUFXUyxXQUFYLEdBQXlCLE1BQXpCLEdBQWtDO0FBRHhDLHlCQURKO0FBSUhDLDRCQUFJO0FBQ0FDLG1DQUFPLGlCQUFNO0FBQ1Qsb0NBQUlDLFFBQVEsRUFBQ2IsUUFBUSxFQUFDYyxJQUFJZCxPQUFPQyxHQUFQLENBQVdDLGNBQVgsQ0FBMEJZLEVBQS9CLEVBQW1DQyxTQUFTdkMsTUFBTUUsTUFBTixDQUFhcUMsT0FBekQsRUFBVCxFQUFaO0FBQ0Esd0NBQVFmLE9BQU9DLEdBQVAsQ0FBV2UsUUFBbkI7QUFDSSx5Q0FBSyxNQUFMO0FBQ0lILDhDQUFNSSxJQUFOLEdBQWEsUUFBYjtBQUNBO0FBQ0oseUNBQUssS0FBTDtBQUNJSiw4Q0FBTUksSUFBTixHQUFhLFdBQWI7QUFDQTtBQUNKLHlDQUFLLFFBQUw7QUFDSUosOENBQU1JLElBQU4sR0FBYSxZQUFiO0FBQ0E7QUFDSix5Q0FBSyxLQUFMO0FBQ0lKLDhDQUFNSSxJQUFOLEdBQWEsZUFBYjtBQUNBO0FBQ0oseUNBQUssSUFBTDtBQUNJSiw4Q0FBTUksSUFBTixHQUFhLFNBQWI7QUFDQTtBQUNKLHlDQUFLLE1BQUw7QUFDSUosOENBQU1JLElBQU4sR0FBYSxjQUFiO0FBQ0E7QUFDSix5Q0FBSyxNQUFMO0FBQ0lKLDhDQUFNSSxJQUFOLEdBQWEsZUFBYjtBQUNBO0FBQ0oseUNBQUssUUFBTDtBQUNJSiw4Q0FBTUksSUFBTixHQUFhLFVBQWI7QUFDQTtBQUNKLHlDQUFLLE1BQUw7QUFDSUosOENBQU1JLElBQU4sR0FBYSxVQUFiO0FBQ0E7QUFDSix5Q0FBSyxPQUFMO0FBQ0lKLDhDQUFNSSxJQUFOLEdBQWEsY0FBYjtBQUNBO0FBQ0oseUNBQUssTUFBTDtBQUNJSiw4Q0FBTUksSUFBTixHQUFhLGlCQUFiO0FBQ0E7QUFDSix5Q0FBSyxPQUFMO0FBQ0lKLDhDQUFNSSxJQUFOLEdBQWEsb0JBQWI7QUFDQTtBQUNKLHlDQUFLLE1BQUw7QUFDSUosOENBQU1JLElBQU4sR0FBYSxpQkFBYjtBQUNBO0FBQ0oseUNBQUssUUFBTDtBQUNJSiw4Q0FBTUksSUFBTixHQUFhLHFCQUFiO0FBQ0E7QUFDSix5Q0FBSyxRQUFMO0FBQ0lKLDhDQUFNSSxJQUFOLEdBQWEsaUJBQWI7QUFDQTtBQUNKLHlDQUFLLE1BQUw7QUFDSUosOENBQU1JLElBQU4sR0FBYSxxQkFBYjtBQUNBO0FBQ0oseUNBQUssTUFBTDtBQUNJSiw4Q0FBTUksSUFBTixHQUFhLGtCQUFiO0FBQ0E7QUFDSix5Q0FBSyxVQUFMO0FBQ0lKLDhDQUFNSSxJQUFOLEdBQWEsd0JBQWI7QUFDQTtBQUNKLHlDQUFLLGNBQUw7QUFDSUosOENBQU1JLElBQU4sR0FBYSxlQUFiO0FBQ0E7QUFDSix5Q0FBSyxjQUFMO0FBQ0lKLDhDQUFNSSxJQUFOLEdBQWEsYUFBYjtBQUNBO0FBQ0oseUNBQUssVUFBTDtBQUNJSiw4Q0FBTUksSUFBTixHQUFhLHFCQUFiO0FBQ0E7QUFDSix5Q0FBSyxNQUFMO0FBQ0lKLDhDQUFNSSxJQUFOLEdBQWEsYUFBYjtBQUNBO0FBQ0oseUNBQUssTUFBTDtBQUNJSiw4Q0FBTUksSUFBTixHQUFhLGdCQUFiO0FBQ0E7QUFDSix5Q0FBSyxXQUFMO0FBQ0lKLDhDQUFNSSxJQUFOLEdBQWEsbUJBQWI7QUFDQTtBQUNKLHlDQUFLLFdBQUw7QUFDSUosOENBQU1JLElBQU4sR0FBYSxpQkFBYjtBQUNBO0FBQ0oseUNBQUssSUFBTDtBQUNJSiw4Q0FBTUksSUFBTixHQUFhLFdBQWI7QUFDQTtBQTlFUjtBQWdGQSx1Q0FBS0MsT0FBTCxDQUFhQyxJQUFiLENBQWtCTixLQUFsQjtBQUNIO0FBcEZEO0FBSkQscUJBQVAsRUEwRkcsQ0FDQ2QsRUFBRSxTQUFGLEVBQWE7QUFDVHFCLCtCQUFPO0FBQ0hDLHFDQUFTLElBRE47QUFFSEMsdUNBQVc7QUFGUjtBQURFLHFCQUFiLEVBS0csQ0FDQ3ZCLEVBQUUsTUFBRixFQUFVO0FBQ05xQiwrQkFBTztBQUNIRyxrQ0FBTSxXQURIO0FBRUhDLGtDQUFNLEVBRkg7QUFHSEMsbUNBQU87QUFISjtBQURELHFCQUFWLENBREQsQ0FMSCxDQURELENBMUZILENBRFksRUEyR1oxQixFQUFFLEdBQUYsRUFBTztBQUNIUywrQkFBTztBQUNIQyxxQ0FBU1QsT0FBT0MsR0FBUCxDQUFXUyxXQUFYLEdBQXlCLE9BQXpCLEdBQW1DO0FBRHpDLHlCQURKO0FBSUhDLDRCQUFJO0FBQ0FDLG1DQUFPLGlCQUFNO0FBQ1RaLHVDQUFPQyxHQUFQLENBQVdTLFdBQVgsR0FBeUIsS0FBekI7QUFDSDtBQUhEO0FBSkQscUJBQVAsRUFTRyxDQUNDWCxFQUFFLFNBQUYsRUFBYTtBQUNUcUIsK0JBQU87QUFDSEMscUNBQVMsSUFETjtBQUVIQyx1Q0FBVztBQUZSO0FBREUscUJBQWIsRUFLRyxDQUNDdkIsRUFBRSxNQUFGLEVBQVU7QUFDTnFCLCtCQUFPO0FBQ0hHLGtDQUFNLGNBREg7QUFFSEMsa0NBQU0sRUFGSDtBQUdIQyxtQ0FBTztBQUhKO0FBREQscUJBQVYsQ0FERCxDQUxILENBREQsQ0FUSCxDQTNHWSxDQUFULENBQVA7QUFxSUg7QUF2SUwsYUF2Qks7QUFyQk4sU0FBUDtBQXVMSCxLQTFMVTs7QUEyTFhDLGFBQVM7QUFDTEMsa0JBREssc0JBQ01aLE9BRE4sRUFDZTtBQUFBOztBQUNoQixpQkFBS3RCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsaUJBQUtmLE1BQUwsQ0FBWXFDLE9BQVosR0FBc0JBLE9BQXRCO0FBQ0EsaUJBQUtyQyxNQUFMLENBQVljLGVBQVosR0FBOEIsNERBQUFvQyxDQUFTQyxXQUFULENBQXFCLEtBQUtuRCxNQUFMLENBQVljLGVBQWpDLENBQTlCO0FBQ0EsaUJBQUtkLE1BQUwsQ0FBWVUsYUFBWixHQUE0Qiw0REFBQXdDLENBQVNDLFdBQVQsQ0FBcUIsS0FBS25ELE1BQUwsQ0FBWVUsYUFBakMsQ0FBNUI7QUFDQSxpQkFBSzBDLE1BQUwsQ0FBWUMsT0FBWixDQUFvQkMsR0FBcEIsR0FBMEIsMENBQTFCO0FBQ0EsaUJBQUtGLE1BQUwsQ0FBWUcsT0FBWixDQUFvQixFQUFDMUQsTUFBTSxLQUFLRyxNQUFaLEVBQXBCLEVBQXlDd0QsSUFBekMsQ0FBOEMsVUFBQ0MsUUFBRCxFQUFjO0FBQ3hELHVCQUFLMUMsT0FBTCxHQUFlLEtBQWY7QUFDQSxvQkFBSTBDLFNBQVNDLFFBQVQsS0FBc0IsR0FBMUIsRUFBK0I7QUFDM0IsMkJBQUsxQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsMkJBQUsyQyxRQUFMLENBQWNDLEtBQWQsQ0FBb0JILFNBQVNJLEdBQVQsSUFBZ0IsT0FBSzFELE9BQUwsQ0FBYTJELEtBQWpEO0FBQ0E7QUFDSDtBQUNELHVCQUFLOUMsUUFBTCxHQUFnQnlDLFNBQVM1RCxJQUF6QjtBQUNBLHVCQUFLbUIsUUFBTCxDQUFjK0MsT0FBZCxDQUFzQixtQkFBVztBQUM3Qix3QkFBR0MsUUFBUUMsV0FBWCxFQUF1QjtBQUNuQkQsZ0NBQVFDLFdBQVIsR0FBc0JELFFBQVFDLFdBQVIsQ0FBb0JDLE9BQXBCLENBQTRCLEtBQTVCLEVBQWtDLEVBQWxDLENBQXRCO0FBQ0g7O0FBRUQsd0JBQUcsQ0FBQ0YsUUFBUXhDLGNBQVosRUFBMkI7QUFDdkJ3QyxnQ0FBUXhDLGNBQVIsR0FBeUIsRUFBekI7QUFDSDtBQUNKLGlCQVJEO0FBU0EsdUJBQUt4QixNQUFMLENBQVlDLEtBQVosR0FBb0J3RCxTQUFTNUQsSUFBVCxDQUFjSSxLQUFsQztBQUNBO0FBQ0E7QUFDSCxhQXBCRCxFQW9CR2tFLEtBcEJILENBb0JTLFVBQUNQLEtBQUQsRUFBVztBQUNoQix1QkFBSzdDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsdUJBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSx1QkFBSzJDLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixPQUFLekQsT0FBTCxDQUFhMkQsS0FBakM7QUFDSCxhQXhCRDtBQXlCSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0UEM7QUE1UkksS0EzTEU7QUF5ZFhNLFdBemRXLHFCQXlkRDtBQUNOLGFBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsS0FBcEIsQ0FBMEIsWUFBMUI7QUFDQSxhQUFLdEIsVUFBTCxDQUFnQixDQUFoQjtBQUNIO0FBNWRVLENBQWYsRSIsImZpbGUiOiI0NS5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgb246IHtcbiAgICAgIFwia2V5dXBcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICghKCdidXR0b24nIGluICRldmVudCkgJiYgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpKSB7IHJldHVybiBudWxsOyB9XG4gICAgICAgIF92bS5jaGFuZ2VQYWdlKDEpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ0Zvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaW5saW5lXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ1Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2VtZW50XCI6IFwidG9wLXN0YXJ0XCIsXG4gICAgICBcImNvbnRlbnRcIjogXCLmm7TlpJrnrZvpgIlcIlxuICAgIH1cbiAgfSwgW19jKCdJY29uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJtZC1mdW5uZWxcIixcbiAgICAgIFwic2l6ZVwiOiBcIjIyXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubW9yZSA9ICFfdm0ubW9yZVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCBbX2MoJ0lucHV0Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMzAwcHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5YWz6ZSu5a2XXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2gua2V5d29yZCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwia2V5d29yZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gua2V5d29yZFwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCBbX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiaW9zLXNlYXJjaFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNoYW5nZVBhZ2UoMSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOaQnOe0olxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIChfdm0ubW9yZSkgPyBfYygnRm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbC13aWR0aFwiOiA2MCxcbiAgICAgIFwiaW5saW5lXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLnirbmgIFcIlxuICAgIH1cbiAgfSwgW19jKCdTZWxlY3QnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxODBweFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoLnN0YXR1cyksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic3RhdHVzXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zdGF0dXNcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uc3RhdHVzKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuWkhOeQhuS6ulwiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjE4MHB4XCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2guaGFuZGxlciksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiaGFuZGxlclwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guaGFuZGxlclwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5oYW5kbGVyKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIueUs+ivt+S6ulwiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjE4MHB4XCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2guYXBwbGljYW50KSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJhcHBsaWNhbnRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmFwcGxpY2FudFwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5hcHBsaWNhbnQpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdPcHRpb24nLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInZhbHVlXCI6IGl0ZW0uaWRcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS50ZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIueUs+ivt+aXtumXtFwiXG4gICAgfVxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMVwiXG4gICAgfVxuICB9LCBbX2MoJ0RhdGVQaWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImRhdGV0aW1lXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5byA5aeL5pe26Ze0XCIsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnN0YXJ0XG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiY3JlYXRlVGltZVN0YXJ0XCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jcmVhdGVUaW1lU3RhcnRcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAtXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTFcIlxuICAgIH1cbiAgfSwgW19jKCdEYXRlUGlja2VyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJkYXRldGltZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIue7k+adn+aXtumXtFwiLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5lbmRcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2guY3JlYXRlVGltZUVuZCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiY3JlYXRlVGltZUVuZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guY3JlYXRlVGltZUVuZFwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSldLCAxKV0sIDEpIDogX3ZtLl9lKCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1RhYmxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxvYWRpbmdcIjogX3ZtLmxvYWRpbmcsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLmNvbHVtbnMsXG4gICAgICBcImRhdGFcIjogX3ZtLmxpc3REYXRhXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdQYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG90YWxcIjogX3ZtLnNlYXJjaC50b3RhbCxcbiAgICAgIFwiY3VycmVudFwiOiBfdm0uc2VhcmNoLnBhZ2VOdW0sXG4gICAgICBcInBhZ2Utc2l6ZVwiOiBfdm0uc2VhcmNoLnBhZ2VTaXplLFxuICAgICAgXCJzaG93LWVsZXZhdG9yXCI6IFwiXCIsXG4gICAgICBcInNob3ctdG90YWxcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jaGFuZ2VQYWdlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbGVhclwiXG4gIH0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzE5YzJjNjBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03MTljMmM2MFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL2JhY2tsb2cudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gNDUiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9iYWNrbG9nLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MTljMmM2MFxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9iYWNrbG9nLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy9iYWNrbG9nLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGJhY2tsb2cudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTcxOWMyYzYwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzE5YzJjNjBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL2JhY2tsb2cudnVlXG4vLyBtb2R1bGUgaWQgPSA4NzBcbi8vIG1vZHVsZSBjaHVua3MgPSA0NSIsImltcG9ydCB7dGltZVV0aWx9IGZyb20gJy4uL2xpYnMvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMuJGNvbmZpZy5wYWdlU2l6ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czogW10sXG4gICAgICAgICAgICBoYW5kbGVyOiBbXSxcbiAgICAgICAgICAgIGFwcGxpY2FudDogW10sXG4gICAgICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZShkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlICYmIF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kICYmIGRhdGUudmFsdWVPZigpID4gX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQudmFsdWVPZigpIC0gX3RoaXMuJGNvbmZpZy5taWxsc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZSAmJiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ICYmIGRhdGUudmFsdWVPZigpIDwgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydC52YWx1ZU9mKCkgKyBfdGhpcy4kY29uZmlnLm1pbGxzZWNvbmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbGlzdERhdGE6IFtdLFxuICAgICAgICAgICAgY29sdW1uczogW3t0aXRsZTogJ+S4u+mimCcsIGtleTogJycsIFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChoLCBwYXJhbXMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnbGFiZWwnLCBwYXJhbXMucm93LmJ1c2luZXNzRGV0YWlsLnByb2plY3RUaXRsZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5LqL6aG5Jywga2V5OiAndGFza05hbWUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfnirbmgIEnLCBrZXk6ICdzdGF0dXMnLCBcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoaCwgcGFyYW1zKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ2xhYmVsJywgIHBhcmFtcy5yb3cuYnVzaW5lc3NEZXRhaWwucHJvamVjdFN0YXR1c1RleHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+WkhOeQhuS6uicsIGtleTogJ2xhc3RIYW5kbGVyJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5aSE55CG5pe26Ze0Jywga2V5OiAnY3JlYXRlVGltZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+eUs+ivt+S6uicsIGtleTogJ2FwcGxpY2FudCcsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGgsIHBhcmFtcyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdsYWJlbCcsICBwYXJhbXMucm93LmJ1c2luZXNzRGV0YWlsLmFwcGx5VXNlck5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+eUs+ivt+aXtumXtCcsIGtleTogJycsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGgsIHBhcmFtcyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdsYWJlbCcsICBwYXJhbXMucm93LmJ1c2luZXNzRGV0YWlsLmFwcGx5RGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aTjeS9nCcsIGFsaWduOiAnY2VudGVyJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnZGl2JywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBwYXJhbXMucm93Lm5lZWRSZWNlaXZlID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm91dGUgPSB7cGFyYW1zOiB7aWQ6IHBhcmFtcy5yb3cuYnVzaW5lc3NEZXRhaWwuaWQsIHBhZ2VOdW06IF90aGlzLnNlYXJjaC5wYWdlTnVtfX07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbXMucm93LnRhc2tOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+WIneivhOS8sOWAvCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ3Jldmlldyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn5YaF5a6hMSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ2hvdXNlaG9sZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn5LiL5oi35Lu75Yqh5YiG6YWNJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLm5hbWUgPSAnYWxsb2NhdGlvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn5YaF5a6hMic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ2ludGVybmFsQXVkaXQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+WuoeaguCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ2V4YW1pbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+e7iOivhOS8sOWAvCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ2ZpbmFsQ29tbWVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn56Gu6K6k5LiK5oqlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLm5hbWUgPSAnY29uZmlybVJlcG9ydCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn5LiA57qn5a6h5om557uP55CGJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLm5hbWUgPSAnYXBwcm92YWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+WuoeaJueS6jOe6pyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ2FwcHJvdmFsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICfotLflrqHkvJrlrqHmibknOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUubmFtZSA9ICd0cmlhbE1lZXRpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+i1t+iNieWGs+iuric6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ2RyYWZ0UmVzb2x1dGlvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn5Yaz6K6u5a6h5om55Lq6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLm5hbWUgPSAncmVzb2x1dGlvbkFwcHJvdmFsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICfpgJrpgZPljLnphY0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUubmFtZSA9ICdjaGFubmVsTWF0Y2hpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+adg+ivgeS4k+WRmOWIhumFjSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ3dhcnJhbnREaXN0cmlidXRpb24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+WQiOWQjOimgee0oOWHhuWkhyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ2NvbnRyYWN0RWxlbWVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn6YCa6YGT56Gu6K6kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLm5hbWUgPSAnY2hhbm5lbENvbmZpcm1hdGlvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn5ZCI5ZCM5omT5Y2wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLm5hbWUgPSAnY29udHJhY3RQcmludGluZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn6aOO5o6n5oC755uR6JC95a6e5p2h5Lu2JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLm5hbWUgPSAnaW1wbGVtZW50QnlXaW5kQ29udHJvbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn5YiG5YWs5Y+46LSi5Yqh5pS26LS5KOWNoSnnoa7orqQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUubmFtZSA9ICdicmFuY2hGaW5hbmNlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICfmgLvlhazlj7jotKLliqHmlLbotLko5Y2hKeehruiupCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ2hlYWRGaW5hbmNlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICfov5DokKXkuJPlkZjokL3lrp7mnaHku7YnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUubmFtZSA9ICdvcGVyYXRpb25TcGVjaWFsaXN0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICfnoa7orqTmlL7mrL4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUubmFtZSA9ICdjb25maXJtTG9hbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn56Gu6K6k55m76K6wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLm5hbWUgPSAnbG9SZWdpc3RyYXRpb24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+WIhuWFrOWPuOaOp+WNoeaUtui0ueehruiupCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ2JyYW5jaENvbnRyb2xDYXJkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICfmgLvlhazlj7jmjqfljaHmlLbotLnnoa7orqQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUubmFtZSA9ICdoZWFkQ29udHJvbENhcmQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+W9kuahoyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5uYW1lID0gJ3BsYWNlRmlsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2gocm91dGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdUb29sdGlwJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5aSE55CGJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ0ljb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21kLWNyZWF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjk5MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogcGFyYW1zLnJvdy5uZWVkUmVjZWl2ZSA/ICdibG9jaycgOiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5uZWVkUmVjZWl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmjqXlj5cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY2hlY2ttYXJrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2hhbmdlUGFnZShwYWdlTnVtKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZU51bSA9IHBhZ2VOdW07XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQgPSB0aW1lVXRpbC5nZXREYXRlVGltZSh0aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZCA9IHRpbWVVdGlsLmdldERhdGVUaW1lKHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQpO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2Uvd29ya0Zsb3cvcmVhZC9xdWVyeU15VGFzayc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB0aGlzLnNlYXJjaH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5sYXN0SGFuZGxlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lmxhc3RIYW5kbGVyID0gZWxlbWVudC5sYXN0SGFuZGxlci5yZXBsYWNlKC9cXFwiL2csXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKCFlbGVtZW50LmJ1c2luZXNzRGV0YWlsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYnVzaW5lc3NEZXRhaWwgPSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGF0YT1bXTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNlYXJjaC50b3RhbCA9IDE7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIC8qICAgIHRoaXMubGlzdERhdGEgPSBbe1xuICAgICAgICAgICAgICAgIGlkOiAnMjAxODExMTYxMTA5NDAwMjMwMDAwOCcsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICfkuK3lpK7oirHlm63mirXmirwnLFxuICAgICAgICAgICAgICAgIHRhc2s6ICfliJ3or4QnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ+W+heWKnicsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgaGFuZGxlclRpbWU6ICcyMDE4LTExLTA0IDEyOjMwOjQ1JyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICfmnY7lm5snLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudFRpbWU6ICcyMDE4LTExLTA0IDEwOjEwOjA1JyxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogJzIwMTgxMTE2MTEwOTQwMDIzMDAwMDgnLFxuICAgICAgICAgICAgICAgIHRoZW1lOiAn5Lit5aSu6Iqx5Zut5oq15oq8JyxcbiAgICAgICAgICAgICAgICB0YXNrOiAn55Sz6K+35LiL5oi3JyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICflvoXlip4nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICflvKDkuIknLFxuICAgICAgICAgICAgICAgIGhhbmRsZXJUaW1lOiAnMjAxOC0xMS0wNCAxMjozMDo0NScsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAn5p2O5ZubJyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnRUaW1lOiAnMjAxOC0xMS0wNCAxMDoxMDowNScsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6ICcyMDE4MTExNjExMDk0MDAyMzAwMDA4JyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ+S4reWkruiKseWbreaKteaKvCcsXG4gICAgICAgICAgICAgICAgdGFzazogJ+S4i+aIt+S7u+WKoeWIhumFjScsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAn5b6F5YqeJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyVGltZTogJzIwMTgtMTEtMDQgMTI6MzA6NDUnLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50VGltZTogJzIwMTgtMTEtMDQgMTA6MTA6MDUnLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAnMjAxODExMTYxMTA5NDAwMjMwMDAwOCcsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICfkuK3lpK7oirHlm63mirXmirwnLFxuICAgICAgICAgICAgICAgIHRhc2s6ICflhoXlrqEnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ+W+heWKnicsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgaGFuZGxlclRpbWU6ICcyMDE4LTExLTA0IDEyOjMwOjQ1JyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICfmnY7lm5snLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudFRpbWU6ICcyMDE4LTExLTA0IDEwOjEwOjA1JyxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogJzIwMTgxMTE2MTEwOTQwMDIzMDAwMDgnLFxuICAgICAgICAgICAgICAgIHRoZW1lOiAn5Lit5aSu6Iqx5Zut5oq15oq8JyxcbiAgICAgICAgICAgICAgICB0YXNrOiAn6aOO5o6n5a6h5qC4JyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICflvoXlip4nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICflvKDkuIknLFxuICAgICAgICAgICAgICAgIGhhbmRsZXJUaW1lOiAnMjAxOC0xMS0wNCAxMjozMDo0NScsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAn5p2O5ZubJyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnRUaW1lOiAnMjAxOC0xMS0wNCAxMDoxMDowNScsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6ICcyMDE4MTExNjExMDk0MDAyMzAwMDA4JyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ+S4reWkruiKseWbreaKteaKvCcsXG4gICAgICAgICAgICAgICAgdGFzazogJ+e7iOivhCcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAn5b6F5YqeJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyVGltZTogJzIwMTgtMTEtMDQgMTI6MzA6NDUnLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50VGltZTogJzIwMTgtMTEtMDQgMTA6MTA6MDUnLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAnMjAxODExMTYxMTA5NDAwMjMwMDAwOCcsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICfkuK3lpK7oirHlm63mirXmirwnLFxuICAgICAgICAgICAgICAgIHRhc2s6ICfpobnnm67kuIrmiqUnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ+W+heWKnicsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgaGFuZGxlclRpbWU6ICcyMDE4LTExLTA0IDEyOjMwOjQ1JyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICfmnY7lm5snLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudFRpbWU6ICcyMDE4LTExLTA0IDEwOjEwOjA1JyxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogJzIwMTgxMTE2MTEwOTQwMDIzMDAwMDgnLFxuICAgICAgICAgICAgICAgIHRoZW1lOiAn5Lit5aSu6Iqx5Zut5oq15oq8JyxcbiAgICAgICAgICAgICAgICB0YXNrOiAn5a6h5om5JyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICflvoXlip4nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICflvKDkuIknLFxuICAgICAgICAgICAgICAgIGhhbmRsZXJUaW1lOiAnMjAxOC0xMS0wNCAxMjozMDo0NScsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAn5p2O5ZubJyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnRUaW1lOiAnMjAxOC0xMS0wNCAxMDoxMDowNScsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6ICcyMDE4MTExNjExMDk0MDAyMzAwMDA4JyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ+S4reWkruiKseWbreaKteaKvCcsXG4gICAgICAgICAgICAgICAgdGFzazogJ+i0t+WuoeS8muWuoeaJuScsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAn5b6F5YqeJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyVGltZTogJzIwMTgtMTEtMDQgMTI6MzA6NDUnLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50VGltZTogJzIwMTgtMTEtMDQgMTA6MTA6MDUnLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAnMjAxODExMTYxMTA5NDAwMjMwMDAwOCcsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICfkuK3lpK7oirHlm63mirXmirwnLFxuICAgICAgICAgICAgICAgIHRhc2s6ICfotbfojYnlhrPorq4nLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ+W+heWKnicsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgaGFuZGxlclRpbWU6ICcyMDE4LTExLTA0IDEyOjMwOjQ1JyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICfmnY7lm5snLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudFRpbWU6ICcyMDE4LTExLTA0IDEwOjEwOjA1JyxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogJzIwMTgxMTE2MTEwOTQwMDIzMDAwMDgnLFxuICAgICAgICAgICAgICAgIHRoZW1lOiAn5Lit5aSu6Iqx5Zut5oq15oq8JyxcbiAgICAgICAgICAgICAgICB0YXNrOiAn5Yaz6K6u5a6h5om5JyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICflvoXlip4nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICflvKDkuIknLFxuICAgICAgICAgICAgICAgIGhhbmRsZXJUaW1lOiAnMjAxOC0xMS0wNCAxMjozMDo0NScsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAn5p2O5ZubJyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnRUaW1lOiAnMjAxOC0xMS0wNCAxMDoxMDowNScsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6ICcyMDE4MTExNjExMDk0MDAyMzAwMDA4JyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ+S4reWkruiKseWbreaKteaKvCcsXG4gICAgICAgICAgICAgICAgdGFzazogJ+mAmumBk+WMuemFjScsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAn5b6F5YqeJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyVGltZTogJzIwMTgtMTEtMDQgMTI6MzA6NDUnLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50VGltZTogJzIwMTgtMTEtMDQgMTA6MTA6MDUnLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAnMjAxODExMTYxMTA5NDAwMjMwMDAwOCcsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICfkuK3lpK7oirHlm63mirXmirwnLFxuICAgICAgICAgICAgICAgIHRhc2s6ICfmnYPor4HkuJPlkZjliIbphY0nLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ+W+heWKnicsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgaGFuZGxlclRpbWU6ICcyMDE4LTExLTA0IDEyOjMwOjQ1JyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICfmnY7lm5snLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudFRpbWU6ICcyMDE4LTExLTA0IDEwOjEwOjA1JyxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogJzIwMTgxMTE2MTEwOTQwMDIzMDAwMDgnLFxuICAgICAgICAgICAgICAgIHRoZW1lOiAn5Lit5aSu6Iqx5Zut5oq15oq8JyxcbiAgICAgICAgICAgICAgICB0YXNrOiAn5ZCI5ZCM6KaB57Sg5YeG5aSHJyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICflvoXlip4nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICflvKDkuIknLFxuICAgICAgICAgICAgICAgIGhhbmRsZXJUaW1lOiAnMjAxOC0xMS0wNCAxMjozMDo0NScsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAn5p2O5ZubJyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnRUaW1lOiAnMjAxOC0xMS0wNCAxMDoxMDowNScsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6ICcyMDE4MTExNjExMDk0MDAyMzAwMDA4JyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ+S4reWkruiKseWbreaKteaKvCcsXG4gICAgICAgICAgICAgICAgdGFzazogJ+mAmumBk+ehruiupCcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAn5b6F5YqeJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyVGltZTogJzIwMTgtMTEtMDQgMTI6MzA6NDUnLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50VGltZTogJzIwMTgtMTEtMDQgMTA6MTA6MDUnLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAxNixcbiAgICAgICAgICAgICAgICB0aGVtZTogJ+S4reWkruiKseWbreaKteaKvCcsXG4gICAgICAgICAgICAgICAgdGFzazogJ+WQiOWQjOaJk+WNsCcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAn5b6F5YqeJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyVGltZTogJzIwMTgtMTEtMDQgMTI6MzA6NDUnLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50VGltZTogJzIwMTgtMTEtMDQgMTA6MTA6MDUnLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAnMjAxODExMTYxMTA5NDAwMjMwMDAwOCcsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICfkuK3lpK7oirHlm63mirXmirwnLFxuICAgICAgICAgICAgICAgIHRhc2s6ICfpo47mjqfmgLvnm5HokL3lrp7mnaHku7YnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ+W+heWKnicsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgaGFuZGxlclRpbWU6ICcyMDE4LTExLTA0IDEyOjMwOjQ1JyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICfmnY7lm5snLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudFRpbWU6ICcyMDE4LTExLTA0IDEwOjEwOjA1JyxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMTgsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICfkuK3lpK7oirHlm63mirXmirwnLFxuICAgICAgICAgICAgICAgIHRhc2s6ICfliIblhazlj7jotKLliqHmlLbotLko5Y2hKeehruiupCcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAn5b6F5YqeJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyVGltZTogJzIwMTgtMTEtMDQgMTI6MzA6NDUnLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50VGltZTogJzIwMTgtMTEtMDQgMTA6MTA6MDUnLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAxOSxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ+S4reWkruiKseWbreaKteaKvCcsXG4gICAgICAgICAgICAgICAgdGFzazogJ+aAu+WFrOWPuOi0ouWKoeaUtui0uSjljaEp56Gu6K6kJyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICflvoXlip4nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICflvKDkuIknLFxuICAgICAgICAgICAgICAgIGhhbmRsZXJUaW1lOiAnMjAxOC0xMS0wNCAxMjozMDo0NScsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50OiAn5p2O5ZubJyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnRUaW1lOiAnMjAxOC0xMS0wNCAxMDoxMDowNScsXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6ICcyMDE4MTExNjExMDk0MDAyMzAwMDA4JyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ+S4reWkruiKseWbreaKteaKvCcsXG4gICAgICAgICAgICAgICAgdGFzazogJ+i/kOiQpeS4k+WRmOiQveWunuadoeS7ticsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAn5b6F5YqeJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyVGltZTogJzIwMTgtMTEtMDQgMTI6MzA6NDUnLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50VGltZTogJzIwMTgtMTEtMDQgMTA6MTA6MDUnLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyMSxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ+S4reWkruiKseWbreaKteaKvCcsXG4gICAgICAgICAgICAgICAgdGFzazogJ+ehruiupOaUvuasvicsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAn5b6F5YqeJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyVGltZTogJzIwMTgtMTEtMDQgMTI6MzA6NDUnLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudDogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgYXBwbGljYW50VGltZTogJzIwMTgtMTEtMDQgMTA6MTA6MDUnLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAnMjAxODExMTYxMTA5NDAwMjMwMDAwOCcsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICfkuK3lpK7oirHlm63mirXmirwnLFxuICAgICAgICAgICAgICAgIHRhc2s6ICfnoa7orqTnmbvorrAnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ+W+heWKnicsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgaGFuZGxlclRpbWU6ICcyMDE4LTExLTA0IDEyOjMwOjQ1JyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICfmnY7lm5snLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudFRpbWU6ICcyMDE4LTExLTA0IDEwOjEwOjA1JyxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMjMsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICfkuK3lpK7oirHlm63mirXmirwnLFxuICAgICAgICAgICAgICAgIHRhc2s6ICfliIblhazlj7jmjqfljaHmlLbotLnnoa7orqQnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ+W+heWKnicsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgaGFuZGxlclRpbWU6ICcyMDE4LTExLTA0IDEyOjMwOjQ1JyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICfmnY7lm5snLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudFRpbWU6ICcyMDE4LTExLTA0IDEwOjEwOjA1JyxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMjQsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICfkuK3lpK7oirHlm63mirXmirwnLFxuICAgICAgICAgICAgICAgIHRhc2s6ICfmgLvlhazlj7jmjqfljaHmlLbotLnnoa7orqQnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ+W+heWKnicsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgaGFuZGxlclRpbWU6ICcyMDE4LTExLTA0IDEyOjMwOjQ1JyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICfmnY7lm5snLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudFRpbWU6ICcyMDE4LTExLTA0IDEwOjEwOjA1JyxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMjUsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICfkuK3lpK7oirHlm63mirXmirwnLFxuICAgICAgICAgICAgICAgIHRhc2s6ICflvZLmoaMnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ+W+heWKnicsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgaGFuZGxlclRpbWU6ICcyMDE4LTExLTA0IDEyOjMwOjQ1JyxcbiAgICAgICAgICAgICAgICBhcHBsaWNhbnQ6ICfmnY7lm5snLFxuICAgICAgICAgICAgICAgIGFwcGxpY2FudFRpbWU6ICcyMDE4LTExLTA0IDEwOjEwOjA1JyxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2VcbiAgICAgICAgICAgIH1dOyAgICovXG4gICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JyZWFkY3J1bWInKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKDEpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9iYWNrbG9nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==