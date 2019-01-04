webpackJsonp([43],{

/***/ 1169:
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
      "data": _vm.decisonList
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
      "title": "决议详情",
      "width": 1000
    },
    model: {
      value: (_vm.showModal),
      callback: function($$v) {
        _vm.showModal = $$v
      },
      expression: "showModal"
    }
  }, [_c('div', [_c('Divider', [_vm._v("基础信息")]), _vm._v(" "), _c('div', [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        借款主体\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.basicInfo.mainLoanClient || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        共同借款人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.basicInfo.shareLoanHolder || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        贷款额度(元)\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.basicInfo.loanAmount || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        贷款期限(天)\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.basicInfo.loanPeriod || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        还款方式\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.basicInfo.repaymentMethodText || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        其他还款方式说明\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.basicInfo.repaymentRemark || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        上报息费(按月)\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.basicInfo.reportFee || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        批复息费(按月)\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "9"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.basicInfo.allowFee || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br')], 1), _vm._v(" "), _c('Divider', [_vm._v("风控措施")]), _vm._v(" "), _c('div', [_c('Collapse', {
    attrs: {
      "value": "pawnList"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "pawnList",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                        抵押物列表\n                    ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.pawnColumns,
      "data": _vm.pawnItems
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "guarantorLegalList"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "guarantorLegalList",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                        担保人(法人)列表\n                    ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.guarantorLegalColumns,
      "data": _vm.guarantorLegalItems
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "guarantorList"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "guarantorList",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                        担保人(自然人)列表\n                    ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.guarantorColumns,
      "data": _vm.guarantorItems
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "workableTermList"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "workableTermList",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                        放款前落实条件\n                    ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.workableTermColumns,
      "data": _vm.workableTermItems
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        其他说明\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.basicInfo.otherDesc) + "\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.showModal = false
      }
    }
  }, [_vm._v("返回")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-b1b542ee", module.exports)
  }
}

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(998),
  /* template */
  __webpack_require__(1169),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/decision.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] decision.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1b542ee", Component.options)
  } else {
    hotAPI.reload("data-v-b1b542ee", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 998:
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
            showModal: false,
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
            decisonList: [],
            columns: [{ title: '决议编号', key: 'id' }, { title: '项目编号', key: 'projectId' }, { title: '项目名称', key: 'productName' }, { title: '借款人', key: 'mainLoanClient' }, { title: '申请人', key: 'applyUserName' }, { title: '初始借款金额', key: 'loanAmount' }, { title: '上报息费', key: 'reportFee' }, { title: '批复息费', key: 'allowFee' }, { title: '决议状态', key: 'resolutionStatusText' }, {
                title: '操作', align: 'center', render: function render(h, params) {
                    return h('div', [h('a', {
                        style: {
                            // display: params.row.multiple ? 'none' : 'block'
                        },
                        on: {
                            click: function click() {
                                _this2.showModal = true;
                                _this2.basicInfo = params.row;
                                _this2.getpawnList(params.row.projectId);
                                _this2.getGuarantorLegalList(params.row.projectId);
                                _this2.getGuarantorList(params.row.projectId);
                                _this2.getworkableTermList(params.row.projectId);
                            }
                        }
                    }, [h('Tooltip', {
                        props: {
                            content: '查看',
                            placement: 'top'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-search',
                            size: 20,
                            color: '#ff9900'
                        }
                    })])]),
                    /*  h('a', {
                            style: {
                                // display: params.row.multiple ? 'block' : 'none'
                            },
                            on: {
                                click: () => {
                                 }
                            }
                        }, [
                            h('Tooltip', {
                                props: {
                                    content: '决议更改',
                                    placement: 'top'
                                }
                            }, [
                                h('Icon', {
                                    props: {
                                        type: 'md-create',
                                        size: 20,
                                        color: '#ff9900'
                                    }
                                })
                            ])
                        ]),*/
                    h('a', {
                        style: {
                            // display: params.row.multiple ? 'block' : 'none'
                        },
                        on: {
                            click: function click() {
                                _this2.$router.push({
                                    name: 'channelMatching',
                                    params: { id: params.row.projectId, pageNum: _this.search.pageNum }
                                });
                            }
                        }
                    }, [h('Tooltip', {
                        props: {
                            content: '发起通道匹配',
                            placement: 'top'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-locate',
                            size: 20,
                            color: '#ff9900'
                        }
                    })])])]);
                }
            }],
            basicInfo: {},
            pawnItems: [],
            pawnColumns: [{ title: '抵押物编号', key: 'id' }, { title: '抵押物证件', key: 'certificateTypeText' }, { title: '抵押物证件号', key: 'certificateCode' }, { title: '类型', key: 'houseTypeText' }, { title: '房产现状', key: 'propertyStaticText' }, { title: '坐落', key: 'detailedAddress' }, { title: '终评值', key: 'id' }, { title: '抵押率', key: 'id' }],
            guarantorLegalItems: [],
            guarantorLegalColumns: [{ title: '法人名称', key: 'name' }, { title: '证件类型', key: 'certificatesTypeText' }, { title: '证件号码', key: 'certificatesNumber' }, { title: '与借款主体关系', key: 'relationshipText' }, { title: '备注', key: 'remark' }],
            guarantorItems: [],
            guarantorColumns: [{ title: '姓名', key: 'name' }, { title: '证件类型', key: 'occupationText' }, { title: '证件号码', key: 'certificatesNumber' }, { title: '与借款主体关系', key: 'relationshipText' }, { title: '备注', key: 'remark' }],
            workableTermItems: [],
            workableTermColumns: [{ title: '序号', key: 'id' }, { title: '落实条件说明', key: 'projectId' }]
        };
    },

    methods: {
        changePage: function changePage(pageNum) {
            var _this3 = this;

            this.loading = true;
            this.search.pageNum = pageNum;
            this.search.createTimeStart = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeStart);
            this.search.createTimeEnd = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeEnd);
            this.$axios.options.url = '/houseMortgage/hmProjPlan/read/list';
            this.$axios.request({ data: this.search }).then(function (response) {
                _this3.loading = false;
                if (response.httpCode !== 200) {
                    _this3.decisonList = [];
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.decisonList = response.data.list;
                _this3.search.total = response.data.total;
                // for(let i =0; i<response.data.list.length; i++){
                //     response.data.list[i].project = this.getProjectById(response.data.list[i])
                // }
                // this.decisonList = this.decisonList.map(function (item,index,input) {  
                //      this.getProjectById(item)
                // }) 
            }).catch(function (error) {
                _this3.loading = false;
                _this3.decisonList = [];
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },

        // getProjectById(decision){
        //     this.$axios.options.url = 'houseMortgage/hmProject/read/detail';
        //     this.$axios.request({data: {id: decision.projectId}}).then((response) => {
        //         if (response.httpCode != 200) {
        //             this.$Message.error(response.msg || this.$config.ERROR);
        //             return;
        //         }
        //         decision.project = response.data;
        //         return decision
        //     }).catch((error) => {
        //         this.$Message.error(this.$config.ERROR);
        //     });
        // }
        getGuarantorLegalList: function getGuarantorLegalList(id) {
            var _this4 = this;

            this.$axios.options.url = '/houseMortgage/hmProjStakeholder/read/queryByProjectId';
            this.$axios.request({ data: { projectId: id, busiType: 1, naturalFlag: 0 } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this4.$Message.error(response.msg || _this4.$config.ERROR);
                    return;
                }
                _this4.guarantorLegalItems = response.data;
            }).catch(function (error) {
                _this4.$Message.error(_this4.$config.ERROR);
            });
        },
        getGuarantorList: function getGuarantorList(id) {
            var _this5 = this;

            this.$axios.options.url = '/houseMortgage/hmProjStakeholder/read/queryByProjectId';
            this.$axios.request({ data: { projectId: id, busiType: 1, naturalFlag: 1 } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this5.$Message.error(response.msg || _this5.$config.ERROR);
                    return;
                }
                _this5.guarantorItems = response.data;
            }).catch(function (error) {
                _this5.$Message.error(_this5.$config.ERROR);
            });
        },
        getpawnList: function getpawnList(id) {
            var _this6 = this;

            this.$axios.options.url = '/houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({ data: { projectId: id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this6.$Message.error(response.msg || _this6.$config.ERROR);
                    return;
                }
                _this6.pawnItems = response.data;
            }).catch(function (error) {
                _this6.$Message.error(_this6.$config.ERROR);
            });
        },
        getworkableTermList: function getworkableTermList(id) {
            var _this7 = this;

            this.$axios.options.url = '/houseMortgage/hmProjPlanrequire/read/queryByPlanId';
            this.$axios.request({ data: { planId: id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this7.$Message.error(response.msg || _this7.$config.ERROR);
                    return;
                }
                _this7.workableTermItems = response.data;
            }).catch(function (error) {
                _this7.$Message.error(_this7.$config.ERROR);
            });
        }
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        this.changePage(1);
    }
});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjaXNpb24udnVlP2E0MGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2RlY2lzaW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWNpc2lvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzaG93TW9kYWwiLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJkZWNpc29uTGlzdCIsImNvbHVtbnMiLCJ0aXRsZSIsImtleSIsImFsaWduIiwicmVuZGVyIiwiaCIsInBhcmFtcyIsInN0eWxlIiwib24iLCJjbGljayIsImJhc2ljSW5mbyIsInJvdyIsImdldHBhd25MaXN0IiwicHJvamVjdElkIiwiZ2V0R3VhcmFudG9yTGVnYWxMaXN0IiwiZ2V0R3VhcmFudG9yTGlzdCIsImdldHdvcmthYmxlVGVybUxpc3QiLCJwcm9wcyIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJ0eXBlIiwic2l6ZSIsImNvbG9yIiwiJHJvdXRlciIsInB1c2giLCJuYW1lIiwiaWQiLCJwYWdlTnVtIiwicGF3bkl0ZW1zIiwicGF3bkNvbHVtbnMiLCJndWFyYW50b3JMZWdhbEl0ZW1zIiwiZ3VhcmFudG9yTGVnYWxDb2x1bW5zIiwiZ3VhcmFudG9ySXRlbXMiLCJndWFyYW50b3JDb2x1bW5zIiwid29ya2FibGVUZXJtSXRlbXMiLCJ3b3JrYWJsZVRlcm1Db2x1bW5zIiwibWV0aG9kcyIsImNoYW5nZVBhZ2UiLCJ0aW1lVXRpbCIsImdldERhdGVUaW1lIiwiJGF4aW9zIiwib3B0aW9ucyIsInVybCIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJodHRwQ29kZSIsIiRNZXNzYWdlIiwiZXJyb3IiLCJtc2ciLCJFUlJPUiIsImxpc3QiLCJjYXRjaCIsImJ1c2lUeXBlIiwibmF0dXJhbEZsYWciLCJwbGFuSWQiLCJtb3VudGVkIiwiJHJvb3QiLCJldmVudEh1YiIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLGFBQWE7QUFDN0c7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3pRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7QUMzQkE7O0FBRUEsK0RBQWU7QUFDWEEsUUFEVyxrQkFDSjtBQUFBOztBQUNILFlBQU1DLFFBQVEsSUFBZDtBQUNBLGVBQU87QUFDSEMsa0JBQU0sS0FESDtBQUVIQyxvQkFBUTtBQUNKQyx1QkFBTyxDQURIO0FBRUpDLDBCQUFVLEtBQUtDLE9BQUwsQ0FBYUQ7QUFGbkIsYUFGTDtBQU1IRSx1QkFBVSxLQU5QO0FBT0hDLG9CQUFRLEVBUEw7QUFRSEMscUJBQVMsRUFSTjtBQVNIQyx1QkFBVyxFQVRSO0FBVUhDLG1CQUFPO0FBQ0hDLDRCQURHLHdCQUNVQyxJQURWLEVBQ2dCO0FBQ2YsMkJBQU9BLFFBQVFaLE1BQU1FLE1BQU4sQ0FBYVcsYUFBckIsSUFBc0NELEtBQUtFLE9BQUwsS0FBaUJkLE1BQU1FLE1BQU4sQ0FBYVcsYUFBYixDQUEyQkMsT0FBM0IsS0FBdUNkLE1BQU1LLE9BQU4sQ0FBY1UsV0FBbkg7QUFDSDtBQUhFLGFBVko7QUFlSEMsaUJBQUs7QUFDREwsNEJBREMsd0JBQ1lDLElBRFosRUFDa0I7QUFDZiwyQkFBT0EsUUFBUVosTUFBTUUsTUFBTixDQUFhZSxlQUFyQixJQUF3Q0wsS0FBS0UsT0FBTCxLQUFpQmQsTUFBTUUsTUFBTixDQUFhZSxlQUFiLENBQTZCSCxPQUE3QixLQUF5Q2QsTUFBTUssT0FBTixDQUFjVSxXQUF2SDtBQUNIO0FBSEEsYUFmRjtBQW9CSEcscUJBQVMsS0FwQk47QUFxQkhDLHlCQUFhLEVBckJWO0FBc0JIQyxxQkFBUyxDQUNMLEVBQUNDLE9BQU8sTUFBUixFQUFnQkMsS0FBSyxJQUFyQixFQURLLEVBRUwsRUFBQ0QsT0FBTyxNQUFSLEVBQWdCQyxLQUFLLFdBQXJCLEVBRkssRUFHTCxFQUFDRCxPQUFPLE1BQVIsRUFBZ0JDLEtBQUssYUFBckIsRUFISyxFQUlMLEVBQUNELE9BQU8sS0FBUixFQUFlQyxLQUFLLGdCQUFwQixFQUpLLEVBS0wsRUFBQ0QsT0FBTyxLQUFSLEVBQWVDLEtBQUssZUFBcEIsRUFMSyxFQU1MLEVBQUNELE9BQU8sUUFBUixFQUFrQkMsS0FBSyxZQUF2QixFQU5LLEVBT0wsRUFBQ0QsT0FBTyxNQUFSLEVBQWdCQyxLQUFLLFdBQXJCLEVBUEssRUFRTCxFQUFDRCxPQUFPLE1BQVIsRUFBZ0JDLEtBQUssVUFBckIsRUFSSyxFQVNMLEVBQUNELE9BQU8sTUFBUixFQUFnQkMsS0FBSyxzQkFBckIsRUFUSyxFQVVMO0FBQ0lELHVCQUFPLElBRFgsRUFDaUJFLE9BQU8sUUFEeEIsRUFDa0NDLFFBQVEsZ0JBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQ2pELDJCQUFPRCxFQUFFLEtBQUYsRUFBUyxDQUNaQSxFQUFFLEdBQUYsRUFBTztBQUNIRSwrQkFBTztBQUNIO0FBREcseUJBREo7QUFJSEMsNEJBQUk7QUFDQUMsbUNBQU8saUJBQU07QUFDVCx1Q0FBS3ZCLFNBQUwsR0FBaUIsSUFBakI7QUFDQSx1Q0FBS3dCLFNBQUwsR0FBaUJKLE9BQU9LLEdBQXhCO0FBQ0EsdUNBQUtDLFdBQUwsQ0FBaUJOLE9BQU9LLEdBQVAsQ0FBV0UsU0FBNUI7QUFDQSx1Q0FBS0MscUJBQUwsQ0FBMkJSLE9BQU9LLEdBQVAsQ0FBV0UsU0FBdEM7QUFDQSx1Q0FBS0UsZ0JBQUwsQ0FBc0JULE9BQU9LLEdBQVAsQ0FBV0UsU0FBakM7QUFDQSx1Q0FBS0csbUJBQUwsQ0FBeUJWLE9BQU9LLEdBQVAsQ0FBV0UsU0FBcEM7QUFDSDtBQVJEO0FBSkQscUJBQVAsRUFjRyxDQUNDUixFQUFFLFNBQUYsRUFBYTtBQUNUWSwrQkFBTztBQUNIQyxxQ0FBUyxJQUROO0FBRUhDLHVDQUFXO0FBRlI7QUFERSxxQkFBYixFQUtHLENBQ0NkLEVBQUUsTUFBRixFQUFVO0FBQ05ZLCtCQUFPO0FBQ0hHLGtDQUFNLFdBREg7QUFFSEMsa0NBQU0sRUFGSDtBQUdIQyxtQ0FBTztBQUhKO0FBREQscUJBQVYsQ0FERCxDQUxILENBREQsQ0FkSCxDQURZO0FBK0JoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJLakIsc0JBQUUsR0FBRixFQUFPO0FBQ0pFLCtCQUFPO0FBQ0g7QUFERyx5QkFESDtBQUlKQyw0QkFBSTtBQUNBQyxtQ0FBTyxpQkFBTTtBQUNULHVDQUFLYyxPQUFMLENBQWFDLElBQWIsQ0FBa0I7QUFDZEMsMENBQU0saUJBRFE7QUFFZG5CLDRDQUFRLEVBQUNvQixJQUFJcEIsT0FBT0ssR0FBUCxDQUFXRSxTQUFoQixFQUEyQmMsU0FBUy9DLE1BQU1FLE1BQU4sQ0FBYTZDLE9BQWpEO0FBRk0saUNBQWxCO0FBSUg7QUFORDtBQUpBLHFCQUFQLEVBWUUsQ0FDQ3RCLEVBQUUsU0FBRixFQUFhO0FBQ1RZLCtCQUFPO0FBQ0hDLHFDQUFTLFFBRE47QUFFSEMsdUNBQVc7QUFGUjtBQURFLHFCQUFiLEVBS0csQ0FDQ2QsRUFBRSxNQUFGLEVBQVU7QUFDTlksK0JBQU87QUFDSEcsa0NBQU0sV0FESDtBQUVIQyxrQ0FBTSxFQUZIO0FBR0hDLG1DQUFPO0FBSEo7QUFERCxxQkFBVixDQURELENBTEgsQ0FERCxDQVpGLENBeERXLENBQVQsQ0FBUDtBQXFGSDtBQXZGTCxhQVZLLENBdEJOO0FBeUhIWix1QkFBVSxFQXpIUDtBQTBISGtCLHVCQUFVLEVBMUhQO0FBMkhIQyx5QkFBWSxDQUFDLEVBQUM1QixPQUFPLE9BQVIsRUFBaUJDLEtBQUssSUFBdEIsRUFBRCxFQUNaLEVBQUNELE9BQU8sT0FBUixFQUFpQkMsS0FBSyxxQkFBdEIsRUFEWSxFQUVaLEVBQUNELE9BQU8sUUFBUixFQUFrQkMsS0FBSyxpQkFBdkIsRUFGWSxFQUdaLEVBQUNELE9BQU8sSUFBUixFQUFjQyxLQUFLLGVBQW5CLEVBSFksRUFJWixFQUFDRCxPQUFPLE1BQVIsRUFBZ0JDLEtBQUssb0JBQXJCLEVBSlksRUFLWixFQUFDRCxPQUFPLElBQVIsRUFBY0MsS0FBSyxpQkFBbkIsRUFMWSxFQU1aLEVBQUNELE9BQU8sS0FBUixFQUFlQyxLQUFLLElBQXBCLEVBTlksRUFPWixFQUFDRCxPQUFPLEtBQVIsRUFBZUMsS0FBSyxJQUFwQixFQVBZLENBM0hUO0FBbUlINEIsaUNBQW9CLEVBbklqQjtBQW9JSEMsbUNBQXNCLENBQUMsRUFBQzlCLE9BQU8sTUFBUixFQUFnQkMsS0FBSyxNQUFyQixFQUFELEVBQ3RCLEVBQUNELE9BQU8sTUFBUixFQUFnQkMsS0FBSyxzQkFBckIsRUFEc0IsRUFFdEIsRUFBQ0QsT0FBTyxNQUFSLEVBQWdCQyxLQUFLLG9CQUFyQixFQUZzQixFQUd0QixFQUFDRCxPQUFPLFNBQVIsRUFBbUJDLEtBQUssa0JBQXhCLEVBSHNCLEVBSXRCLEVBQUNELE9BQU8sSUFBUixFQUFjQyxLQUFLLFFBQW5CLEVBSnNCLENBcEluQjtBQXlJSDhCLDRCQUFlLEVBeklaO0FBMElIQyw4QkFBaUIsQ0FBQyxFQUFDaEMsT0FBTyxJQUFSLEVBQWNDLEtBQUssTUFBbkIsRUFBRCxFQUNqQixFQUFDRCxPQUFPLE1BQVIsRUFBZ0JDLEtBQUssZ0JBQXJCLEVBRGlCLEVBRWpCLEVBQUNELE9BQU8sTUFBUixFQUFnQkMsS0FBSyxvQkFBckIsRUFGaUIsRUFHakIsRUFBQ0QsT0FBTyxTQUFSLEVBQW1CQyxLQUFLLGtCQUF4QixFQUhpQixFQUlqQixFQUFDRCxPQUFPLElBQVIsRUFBY0MsS0FBSyxRQUFuQixFQUppQixDQTFJZDtBQStJSGdDLCtCQUFrQixFQS9JZjtBQWdKSEMsaUNBQW9CLENBQUMsRUFBQ2xDLE9BQU8sSUFBUixFQUFjQyxLQUFLLElBQW5CLEVBQUQsRUFDcEIsRUFBQ0QsT0FBTyxRQUFSLEVBQWtCQyxLQUFLLFdBQXZCLEVBRG9CO0FBaEpqQixTQUFQO0FBbUpILEtBdEpVOztBQXVKWGtDLGFBQVM7QUFDTEMsa0JBREssc0JBQ01WLE9BRE4sRUFDZTtBQUFBOztBQUNoQixpQkFBSzdCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsaUJBQUtoQixNQUFMLENBQVk2QyxPQUFaLEdBQXNCQSxPQUF0QjtBQUNBLGlCQUFLN0MsTUFBTCxDQUFZZSxlQUFaLEdBQThCLDREQUFBeUMsQ0FBU0MsV0FBVCxDQUFxQixLQUFLekQsTUFBTCxDQUFZZSxlQUFqQyxDQUE5QjtBQUNBLGlCQUFLZixNQUFMLENBQVlXLGFBQVosR0FBNEIsNERBQUE2QyxDQUFTQyxXQUFULENBQXFCLEtBQUt6RCxNQUFMLENBQVlXLGFBQWpDLENBQTVCO0FBQ0EsaUJBQUsrQyxNQUFMLENBQVlDLE9BQVosQ0FBb0JDLEdBQXBCLEdBQTBCLHFDQUExQjtBQUNBLGlCQUFLRixNQUFMLENBQVlHLE9BQVosQ0FBb0IsRUFBQ2hFLE1BQU0sS0FBS0csTUFBWixFQUFwQixFQUF5QzhELElBQXpDLENBQThDLFVBQUNDLFFBQUQsRUFBYztBQUN4RCx1QkFBSy9DLE9BQUwsR0FBZSxLQUFmO0FBQ0Esb0JBQUkrQyxTQUFTQyxRQUFULEtBQXNCLEdBQTFCLEVBQStCO0FBQzNCLDJCQUFLL0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLDJCQUFLZ0QsUUFBTCxDQUFjQyxLQUFkLENBQW9CSCxTQUFTSSxHQUFULElBQWdCLE9BQUtoRSxPQUFMLENBQWFpRSxLQUFqRDtBQUNBO0FBQ0g7QUFDRCx1QkFBS25ELFdBQUwsR0FBbUI4QyxTQUFTbEUsSUFBVCxDQUFjd0UsSUFBakM7QUFDQSx1QkFBS3JFLE1BQUwsQ0FBWUMsS0FBWixHQUFvQjhELFNBQVNsRSxJQUFULENBQWNJLEtBQWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsYUFmRCxFQWVHcUUsS0FmSCxDQWVTLFVBQUNKLEtBQUQsRUFBVztBQUNoQix1QkFBS2xELE9BQUwsR0FBZSxLQUFmO0FBQ0EsdUJBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSx1QkFBS2dELFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixPQUFLL0QsT0FBTCxDQUFhaUUsS0FBakM7QUFDSCxhQW5CRDtBQW9CSCxTQTNCSTs7QUE0Qkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXBDLDZCQXpDSyxpQ0F5Q2lCWSxFQXpDakIsRUF5Q29CO0FBQUE7O0FBQ3JCLGlCQUFLYyxNQUFMLENBQVlDLE9BQVosQ0FBb0JDLEdBQXBCLEdBQTBCLHdEQUExQjtBQUNBLGlCQUFLRixNQUFMLENBQVlHLE9BQVosQ0FBb0IsRUFBQ2hFLE1BQU0sRUFBQ2tDLFdBQVVhLEVBQVgsRUFBYzJCLFVBQVMsQ0FBdkIsRUFBeUJDLGFBQVksQ0FBckMsRUFBUCxFQUFwQixFQUFxRVYsSUFBckUsQ0FBMEUsVUFBQ0MsUUFBRCxFQUFjO0FBQ3BGLG9CQUFJQSxTQUFTQyxRQUFULElBQXFCLEdBQXpCLEVBQThCO0FBQzFCLDJCQUFLQyxRQUFMLENBQWNDLEtBQWQsQ0FBb0JILFNBQVNJLEdBQVQsSUFBZ0IsT0FBS2hFLE9BQUwsQ0FBYWlFLEtBQWpEO0FBQ0E7QUFDSDtBQUNELHVCQUFLcEIsbUJBQUwsR0FBMkJlLFNBQVNsRSxJQUFwQztBQUNILGFBTkQsRUFNR3lFLEtBTkgsQ0FNUyxVQUFDSixLQUFELEVBQVc7QUFDaEIsdUJBQUtELFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixPQUFLL0QsT0FBTCxDQUFhaUUsS0FBakM7QUFDSCxhQVJEO0FBU0gsU0FwREk7QUFxRExuQyx3QkFyREssNEJBcURZVyxFQXJEWixFQXFEZTtBQUFBOztBQUNoQixpQkFBS2MsTUFBTCxDQUFZQyxPQUFaLENBQW9CQyxHQUFwQixHQUEwQix3REFBMUI7QUFDQSxpQkFBS0YsTUFBTCxDQUFZRyxPQUFaLENBQW9CLEVBQUNoRSxNQUFNLEVBQUNrQyxXQUFVYSxFQUFYLEVBQWMyQixVQUFTLENBQXZCLEVBQXlCQyxhQUFZLENBQXJDLEVBQVAsRUFBcEIsRUFBcUVWLElBQXJFLENBQTBFLFVBQUNDLFFBQUQsRUFBYztBQUNwRixvQkFBSUEsU0FBU0MsUUFBVCxJQUFxQixHQUF6QixFQUE4QjtBQUMxQiwyQkFBS0MsUUFBTCxDQUFjQyxLQUFkLENBQW9CSCxTQUFTSSxHQUFULElBQWdCLE9BQUtoRSxPQUFMLENBQWFpRSxLQUFqRDtBQUNBO0FBQ0g7QUFDRCx1QkFBS2xCLGNBQUwsR0FBc0JhLFNBQVNsRSxJQUEvQjtBQUNILGFBTkQsRUFNR3lFLEtBTkgsQ0FNUyxVQUFDSixLQUFELEVBQVc7QUFDaEIsdUJBQUtELFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixPQUFLL0QsT0FBTCxDQUFhaUUsS0FBakM7QUFDSCxhQVJEO0FBU0gsU0FoRUk7QUFpRUx0QyxtQkFqRUssdUJBaUVPYyxFQWpFUCxFQWlFVTtBQUFBOztBQUNYLGlCQUFLYyxNQUFMLENBQVlDLE9BQVosQ0FBb0JDLEdBQXBCLEdBQTBCLDZDQUExQjtBQUNBLGlCQUFLRixNQUFMLENBQVlHLE9BQVosQ0FBb0IsRUFBQ2hFLE1BQU0sRUFBQ2tDLFdBQVVhLEVBQVgsRUFBUCxFQUFwQixFQUE0Q2tCLElBQTVDLENBQWlELFVBQUNDLFFBQUQsRUFBYztBQUMzRCxvQkFBSUEsU0FBU0MsUUFBVCxJQUFxQixHQUF6QixFQUE4QjtBQUMxQiwyQkFBS0MsUUFBTCxDQUFjQyxLQUFkLENBQW9CSCxTQUFTSSxHQUFULElBQWdCLE9BQUtoRSxPQUFMLENBQWFpRSxLQUFqRDtBQUNBO0FBQ0g7QUFDRCx1QkFBS3RCLFNBQUwsR0FBaUJpQixTQUFTbEUsSUFBMUI7QUFDSCxhQU5ELEVBTUd5RSxLQU5ILENBTVMsVUFBQ0osS0FBRCxFQUFXO0FBQ2hCLHVCQUFLRCxRQUFMLENBQWNDLEtBQWQsQ0FBb0IsT0FBSy9ELE9BQUwsQ0FBYWlFLEtBQWpDO0FBQ0gsYUFSRDtBQVNILFNBNUVJO0FBNkVMbEMsMkJBN0VLLCtCQTZFZVUsRUE3RWYsRUE2RWtCO0FBQUE7O0FBQ25CLGlCQUFLYyxNQUFMLENBQVlDLE9BQVosQ0FBb0JDLEdBQXBCLEdBQTBCLHFEQUExQjtBQUNBLGlCQUFLRixNQUFMLENBQVlHLE9BQVosQ0FBb0IsRUFBQ2hFLE1BQU0sRUFBQzRFLFFBQU83QixFQUFSLEVBQVAsRUFBcEIsRUFBeUNrQixJQUF6QyxDQUE4QyxVQUFDQyxRQUFELEVBQWM7QUFDeEQsb0JBQUlBLFNBQVNDLFFBQVQsSUFBcUIsR0FBekIsRUFBOEI7QUFDMUIsMkJBQUtDLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkgsU0FBU0ksR0FBVCxJQUFnQixPQUFLaEUsT0FBTCxDQUFhaUUsS0FBakQ7QUFDQTtBQUNIO0FBQ0QsdUJBQUtoQixpQkFBTCxHQUF5QlcsU0FBU2xFLElBQWxDO0FBQ0gsYUFORCxFQU1HeUUsS0FOSCxDQU1TLFVBQUNKLEtBQUQsRUFBVztBQUNoQix1QkFBS0QsUUFBTCxDQUFjQyxLQUFkLENBQW9CLE9BQUsvRCxPQUFMLENBQWFpRSxLQUFqQztBQUNILGFBUkQ7QUFTSDtBQXhGSSxLQXZKRTtBQWlQWE0sV0FqUFcscUJBaVBEO0FBQ04sYUFBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxLQUFwQixDQUEwQixZQUExQjtBQUNBLGFBQUt0QixVQUFMLENBQWdCLENBQWhCO0FBQ0g7QUFwUFUsQ0FBZixFIiwiZmlsZSI6IjQzLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBvbjoge1xuICAgICAgXCJrZXl1cFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCEoJ2J1dHRvbicgaW4gJGV2ZW50KSAmJiBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIikpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgX3ZtLmNoYW5nZVBhZ2UoMSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnRm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpbmxpbmVcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnSW5wdXQnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIzMDBweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLlhbPplK7lrZdcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaC5rZXl3b3JkKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJrZXl3b3JkXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5rZXl3b3JkXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIFtfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJpb3Mtc2VhcmNoXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5pCc57SiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibG9hZGluZ1wiOiBfdm0ubG9hZGluZyxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1ucyxcbiAgICAgIFwiZGF0YVwiOiBfdm0uZGVjaXNvbkxpc3RcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1BhZ2UnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZnJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b3RhbFwiOiBfdm0uc2VhcmNoLnRvdGFsLFxuICAgICAgXCJjdXJyZW50XCI6IF92bS5zZWFyY2gucGFnZU51bSxcbiAgICAgIFwicGFnZS1zaXplXCI6IF92bS5zZWFyY2gucGFnZVNpemUsXG4gICAgICBcInNob3ctZWxldmF0b3JcIjogXCJcIixcbiAgICAgIFwic2hvdy10b3RhbFwiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLmNoYW5nZVBhZ2VcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdNb2RhbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIuWGs+iuruivpuaDhVwiLFxuICAgICAgXCJ3aWR0aFwiOiAxMDAwXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2hvd01vZGFsKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLnNob3dNb2RhbCA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2hvd01vZGFsXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2JywgW19jKCdEaXZpZGVyJywgW192bS5fdihcIuWfuuehgOS/oeaBr1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5YCf5qy+5Li75L2TXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5iYXNpY0luZm8ubWFpbkxvYW5DbGllbnQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWFseWQjOWAn+asvuS6ulxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uYmFzaWNJbmZvLnNoYXJlTG9hbkhvbGRlciB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDotLfmrL7pop3luqYo5YWDKVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uYmFzaWNJbmZvLmxvYW5BbW91bnQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOi0t+asvuacn+mZkCjlpKkpXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5iYXNpY0luZm8ubG9hblBlcmlvZCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDov5jmrL7mlrnlvI9cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmJhc2ljSW5mby5yZXBheW1lbnRNZXRob2RUZXh0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWFtuS7lui/mOasvuaWueW8j+ivtOaYjlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uYmFzaWNJbmZvLnJlcGF5bWVudFJlbWFyayB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkuIrmiqXmga/otLko5oyJ5pyIKVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI5XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uYmFzaWNJbmZvLnJlcG9ydEZlZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5om55aSN5oGv6LS5KOaMieaciClcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiOVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmJhc2ljSW5mby5hbGxvd0ZlZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRGl2aWRlcicsIFtfdm0uX3YoXCLpo47mjqfmjqrmlr1cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJwYXduTGlzdFwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJwYXduTGlzdFwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaKteaKvOeJqeWIl+ihqFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdUYWJsZScsIHtcbiAgICByZWY6IFwic2VsZWN0aW9uXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYm9yZGVyXCI6IFwiXCIsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLnBhd25Db2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5wYXduSXRlbXNcbiAgICB9XG4gIH0pXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZ3VhcmFudG9yTGVnYWxMaXN0XCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImd1YXJhbnRvckxlZ2FsTGlzdFwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaLheS/neS6uijms5Xkurop5YiX6KGoXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1RhYmxlJywge1xuICAgIHJlZjogXCJzZWxlY3Rpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJib3JkZXJcIjogXCJcIixcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uZ3VhcmFudG9yTGVnYWxDb2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5ndWFyYW50b3JMZWdhbEl0ZW1zXG4gICAgfVxuICB9KV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImd1YXJhbnRvckxpc3RcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZ3VhcmFudG9yTGlzdFwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaLheS/neS6uijoh6rnhLbkurop5YiX6KGoXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1RhYmxlJywge1xuICAgIHJlZjogXCJzZWxlY3Rpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJib3JkZXJcIjogXCJcIixcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uZ3VhcmFudG9yQ29sdW1ucyxcbiAgICAgIFwiZGF0YVwiOiBfdm0uZ3VhcmFudG9ySXRlbXNcbiAgICB9XG4gIH0pXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwid29ya2FibGVUZXJtTGlzdFwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJ3b3JrYWJsZVRlcm1MaXN0XCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5pS+5qy+5YmN6JC95a6e5p2h5Lu2XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1RhYmxlJywge1xuICAgIHJlZjogXCJzZWxlY3Rpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJib3JkZXJcIjogXCJcIixcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0ud29ya2FibGVUZXJtQ29sdW1ucyxcbiAgICAgIFwiZGF0YVwiOiBfdm0ud29ya2FibGVUZXJtSXRlbXNcbiAgICB9XG4gIH0pXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlhbbku5bor7TmmI5cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMjFcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5iYXNpY0luZm8ub3RoZXJEZXNjKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiZm9vdGVyXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiZm9vdGVyXCJcbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcImxhcmdlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc2hvd01vZGFsID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLov5Tlm55cIildKV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1iMWI1NDJlZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWIxYjU0MmVlXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvZGVjaXNpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gNDMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9kZWNpc2lvbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjFiNTQyZWVcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vZGVjaXNpb24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL2RlY2lzaW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRlY2lzaW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1iMWI1NDJlZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWIxYjU0MmVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9kZWNpc2lvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDg4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDQzIiwiaW1wb3J0IHt0aW1lVXRpbH0gZnJvbSAnLi4vbGlicy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9yZTogZmFsc2UsXG4gICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy4kY29uZmlnLnBhZ2VTaXplXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vZGFsOmZhbHNlLFxuICAgICAgICAgICAgc3RhdHVzOiBbXSxcbiAgICAgICAgICAgIGhhbmRsZXI6IFtdLFxuICAgICAgICAgICAgYXBwbGljYW50OiBbXSxcbiAgICAgICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWREYXRlKGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUgJiYgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQgJiYgZGF0ZS52YWx1ZU9mKCkgPiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZC52YWx1ZU9mKCkgLSBfdGhpcy4kY29uZmlnLm1pbGxzZWNvbmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZDoge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZShkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlICYmIF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQgJiYgZGF0ZS52YWx1ZU9mKCkgPCBfdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0LnZhbHVlT2YoKSArIF90aGlzLiRjb25maWcubWlsbHNlY29uZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBkZWNpc29uTGlzdDogW10sXG4gICAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5Yaz6K6u57yW5Y+3Jywga2V5OiAnaWQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfpobnnm67nvJblj7cnLCBrZXk6ICdwcm9qZWN0SWQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfpobnnm67lkI3np7AnLCBrZXk6ICdwcm9kdWN0TmFtZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+WAn+asvuS6uicsIGtleTogJ21haW5Mb2FuQ2xpZW50J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn55Sz6K+35Lq6Jywga2V5OiAnYXBwbHlVc2VyTmFtZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+WIneWni+WAn+asvumHkeminScsIGtleTogJ2xvYW5BbW91bnQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfkuIrmiqXmga/otLknLCBrZXk6ICdyZXBvcnRGZWUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmibnlpI3mga/otLknLCBrZXk6ICdhbGxvd0ZlZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+WGs+iurueKtuaAgScsIGtleTogJ3Jlc29sdXRpb25TdGF0dXNUZXh0J30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aTjeS9nCcsIGFsaWduOiAnY2VudGVyJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnZGl2JywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBwYXJhbXMucm93Lm11bHRpcGxlID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNpY0luZm8gPSBwYXJhbXMucm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0cGF3bkxpc3QocGFyYW1zLnJvdy5wcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0R3VhcmFudG9yTGVnYWxMaXN0KHBhcmFtcy5yb3cucHJvamVjdElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEd1YXJhbnRvckxpc3QocGFyYW1zLnJvdy5wcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0d29ya2FibGVUZXJtTGlzdChwYXJhbXMucm93LnByb2plY3RJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnVG9vbHRpcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+afpeeciycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdJY29uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZC1zZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmY5OTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IHBhcmFtcy5yb3cubXVsdGlwbGUgPyAnYmxvY2snIDogJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflhrPorq7mm7TmlLknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY3JlYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLCovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBwYXJhbXMucm93Lm11bHRpcGxlID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGFubmVsTWF0Y2hpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtpZDogcGFyYW1zLnJvdy5wcm9qZWN0SWQsIHBhZ2VOdW06IF90aGlzLnNlYXJjaC5wYWdlTnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflj5HotbfpgJrpgZPljLnphY0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtbG9jYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgYmFzaWNJbmZvOnt9LFxuICAgICAgICAgICAgcGF3bkl0ZW1zOltdLFxuICAgICAgICAgICAgcGF3bkNvbHVtbnM6W3t0aXRsZTogJ+aKteaKvOeJqee8luWPtycsIGtleTogJ2lkJ30sXG4gICAgICAgICAgICB7dGl0bGU6ICfmirXmirznianor4Hku7YnLCBrZXk6ICdjZXJ0aWZpY2F0ZVR5cGVUZXh0J30sXG4gICAgICAgICAgICB7dGl0bGU6ICfmirXmirznianor4Hku7blj7cnLCBrZXk6ICdjZXJ0aWZpY2F0ZUNvZGUnfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+exu+WeiycsIGtleTogJ2hvdXNlVHlwZVRleHQnfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+aIv+S6p+eOsOeKticsIGtleTogJ3Byb3BlcnR5U3RhdGljVGV4dCd9LFxuICAgICAgICAgICAge3RpdGxlOiAn5Z2Q6JC9Jywga2V5OiAnZGV0YWlsZWRBZGRyZXNzJ30sXG4gICAgICAgICAgICB7dGl0bGU6ICfnu4jor4TlgLwnLCBrZXk6ICdpZCd9LFxuICAgICAgICAgICAge3RpdGxlOiAn5oq15oq8546HJywga2V5OiAnaWQnfV0sXG4gICAgICAgICAgICBndWFyYW50b3JMZWdhbEl0ZW1zOltdLFxuICAgICAgICAgICAgZ3VhcmFudG9yTGVnYWxDb2x1bW5zOlt7dGl0bGU6ICfms5XkurrlkI3np7AnLCBrZXk6ICduYW1lJ30sXG4gICAgICAgICAgICB7dGl0bGU6ICfor4Hku7bnsbvlnosnLCBrZXk6ICdjZXJ0aWZpY2F0ZXNUeXBlVGV4dCd9LFxuICAgICAgICAgICAge3RpdGxlOiAn6K+B5Lu25Y+356CBJywga2V5OiAnY2VydGlmaWNhdGVzTnVtYmVyJ30sXG4gICAgICAgICAgICB7dGl0bGU6ICfkuI7lgJ/mrL7kuLvkvZPlhbPns7snLCBrZXk6ICdyZWxhdGlvbnNoaXBUZXh0J30sXG4gICAgICAgICAgICB7dGl0bGU6ICflpIfms6gnLCBrZXk6ICdyZW1hcmsnfV0sXG4gICAgICAgICAgICBndWFyYW50b3JJdGVtczpbXSxcbiAgICAgICAgICAgIGd1YXJhbnRvckNvbHVtbnM6W3t0aXRsZTogJ+Wnk+WQjScsIGtleTogJ25hbWUnfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+ivgeS7tuexu+WeiycsIGtleTogJ29jY3VwYXRpb25UZXh0J30sXG4gICAgICAgICAgICB7dGl0bGU6ICfor4Hku7blj7fnoIEnLCBrZXk6ICdjZXJ0aWZpY2F0ZXNOdW1iZXInfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+S4juWAn+asvuS4u+S9k+WFs+ezuycsIGtleTogJ3JlbGF0aW9uc2hpcFRleHQnfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+Wkh+azqCcsIGtleTogJ3JlbWFyayd9XSxcbiAgICAgICAgICAgIHdvcmthYmxlVGVybUl0ZW1zOltdLFxuICAgICAgICAgICAgd29ya2FibGVUZXJtQ29sdW1uczpbe3RpdGxlOiAn5bqP5Y+3Jywga2V5OiAnaWQnfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+iQveWunuadoeS7tuivtOaYjicsIGtleTogJ3Byb2plY3RJZCd9XSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjaGFuZ2VQYWdlKHBhZ2VOdW0pIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5wYWdlTnVtID0gcGFnZU51bTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCA9IHRpbWVVdGlsLmdldERhdGVUaW1lKHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kID0gdGltZVV0aWwuZ2V0RGF0ZVRpbWUodGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZCk7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obVByb2pQbGFuL3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB0aGlzLnNlYXJjaH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNpc29uTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGVjaXNvbkxpc3QgPSByZXNwb25zZS5kYXRhLmxpc3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgIC8vIGZvcihsZXQgaSA9MDsgaTxyZXNwb25zZS5kYXRhLmxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIC8vICAgICByZXNwb25zZS5kYXRhLmxpc3RbaV0ucHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdEJ5SWQocmVzcG9uc2UuZGF0YS5saXN0W2ldKVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRlY2lzb25MaXN0ID0gdGhpcy5kZWNpc29uTGlzdC5tYXAoZnVuY3Rpb24gKGl0ZW0saW5kZXgsaW5wdXQpIHsgIFxuICAgICAgICAgICAgICAgIC8vICAgICAgdGhpcy5nZXRQcm9qZWN0QnlJZChpdGVtKVxuICAgICAgICAgICAgICAgIC8vIH0pIFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWNpc29uTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBnZXRQcm9qZWN0QnlJZChkZWNpc2lvbil7XG4gICAgICAgIC8vICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdob3VzZU1vcnRnYWdlL2htUHJvamVjdC9yZWFkL2RldGFpbCc7XG4gICAgICAgIC8vICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IGRlY2lzaW9uLnByb2plY3RJZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBkZWNpc2lvbi5wcm9qZWN0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gZGVjaXNpb25cbiAgICAgICAgLy8gICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIGdldEd1YXJhbnRvckxlZ2FsTGlzdChpZCl7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obVByb2pTdGFrZWhvbGRlci9yZWFkL3F1ZXJ5QnlQcm9qZWN0SWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge3Byb2plY3RJZDppZCxidXNpVHlwZToxLG5hdHVyYWxGbGFnOjB9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ndWFyYW50b3JMZWdhbEl0ZW1zID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRHdWFyYW50b3JMaXN0KGlkKXtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htUHJvalN0YWtlaG9sZGVyL3JlYWQvcXVlcnlCeVByb2plY3RJZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7cHJvamVjdElkOmlkLGJ1c2lUeXBlOjEsbmF0dXJhbEZsYWc6MX19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmd1YXJhbnRvckl0ZW1zID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRwYXduTGlzdChpZCl7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obVBhd24vcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwcm9qZWN0SWQ6aWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wYXduSXRlbXMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldHdvcmthYmxlVGVybUxpc3QoaWQpe1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Qcm9qUGxhbnJlcXVpcmUvcmVhZC9xdWVyeUJ5UGxhbklkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwbGFuSWQ6aWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53b3JrYWJsZVRlcm1JdGVtcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JyZWFkY3J1bWInKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKDEpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9kZWNpc2lvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=