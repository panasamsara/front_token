webpackJsonp([31],{

/***/ 1064:
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
            showModal: false,
            modalType: '',
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
            dicts: [],
            fundChannals: [],
            columns: [
            // {title: '信托计划编号', key: 'code'},
            { title: '信托计划名称', key: 'trustName' }, { title: '信托计划所属公司', key: 'companyId' }, { title: '信托规模', key: 'scale' }, { title: '剩余规模', key: 'surplusScale' }, { title: '信托计划开始日期', key: 'startDate' }, { title: '信托计划到期日期', key: 'endDate' }, { title: '信托投向', key: 'trustInvestment' }, { title: '是否开启', key: 'startStateText' }, { title: '备注', key: 'remarks' }, { title: '业务笔数', key: 'business' }, {
                title: '操作', align: 'center', render: function render(h, params) {
                    return h('div', [h('a', {
                        style: {
                            // display: params.row.multiple ? 'none' : 'block'
                        },
                        on: {
                            click: function click() {
                                // this.$router.push({
                                //     name: 'customerInfo',
                                //     params: {id: params.row.id, pageNum: _this.search.pageNum}
                                // })
                                _this2.openModal('edit', params.row);
                            }
                        }
                    }, [h('Tooltip', {
                        props: {
                            content: '编辑',
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
                            // display: params.row.multiple ? 'block' : 'none'
                        },
                        on: {
                            click: function click() {
                                _this2.confirmDelete(params.row);
                            }
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
                            color: '#ff3344'
                        }
                    })])])]);
                }
            }],
            formValidate: {
                trustName: '', //信托计划名称
                companyId: '', //信托计划所属公司
                scale: '', //信托规模
                surplusScale: '', //剩余规模
                startDate: '', //信托计划开始日期
                endDate: '', //信托计划到期日期
                trustInvestment: '', //信托投向
                startState: '', //是否开启
                remarks: '', //备注
                business: '' //业务笔数
            },
            ruleValidate: {
                trustName: [{ required: true, message: '信托计划名称不能为空', trigger: 'blur' }],
                companyId: [{ required: true, message: '信托计划所属公司不能为空', trigger: 'blur' }],
                scale: [{ required: true, message: '请填写信托规模' }],
                surplusScale: [{ required: true, message: '请填写剩余规模' }],
                trustInvestment: [{ required: true, message: '请填写信托投向', trigger: 'blur' }]

            }
        };
    },

    methods: {
        changePage: function changePage(pageNum) {
            var _this3 = this;

            this.loading = true;
            this.search.pageNum = pageNum;
            this.search.createTimeStart = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeStart);
            this.search.createTimeEnd = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeEnd);
            this.$axios.options.url = '/houseMortgage/hmConfigTrustplan/read/list';
            this.$axios.request({ data: this.search }).then(function (response) {
                _this3.loading = false;
                if (response.httpCode !== 200) {
                    _this3.data = [];
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.data = response.data.list;
                _this3.dicts = response.dicts;
                _this3.search.total = response.data.total;
            }).catch(function (error) {
                _this3.loading = false;
                _this3.data = [];
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },
        openModal: function openModal(flag, data) {
            this.$refs['formValidate'].resetFields();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["g" /* clearObject */])(this.formValidate);
            this.showModal = true;
            this.modalType = flag;
            if (flag == 'edit') {
                Object.assign(this.formValidate, data);
            }
        },
        handleSubmit: function handleSubmit(name) {
            var _this4 = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    if (_this4.modalType == 'create') {
                        _this4.createData();
                    } else {
                        _this4.editData();
                    }
                } else {
                    _this4.$Message.error('请完善信息!');
                }
            });
        },
        closeModal: function closeModal() {
            //关闭弹框
            this.showModal = false;
        },
        createData: function createData() {
            var _this5 = this;

            //创建账户
            this.$axios.options.url = '/houseMortgage/hmConfigTrustplan/add';
            this.formValidate.startDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.startDate);
            this.formValidate.endDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.endDate);
            this.$axios.request({ data: this.formValidate }).then(function (res) {
                _this5.showModal = false;
                _this5.changePage(1);
            });
        },
        editData: function editData() {
            var _this6 = this;

            //编辑用户
            this.$axios.options.url = '/houseMortgage/hmConfigTrustplan/update';
            this.formValidate.startDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.startDate);
            this.formValidate.endDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.endDate);
            this.$axios.request({ data: this.formValidate }).then(function (res) {
                _this6.$Message.success('修改成功!');
                _this6.showModal = false;
                _this6.changePage(1);
            });
        },
        confirmDelete: function confirmDelete(data) {
            var _this7 = this;

            //确认删除
            this.$Modal.confirm({
                title: '删除',
                content: '<p>确认要删除该数据吗？</p>',
                onOk: function onOk() {
                    _this7.deleteData(data.id);
                },
                onCancel: function onCancel() {}
            });
        },
        deleteData: function deleteData(dataId) {
            var _this8 = this;

            //删除
            this.$axios.options.url = '/houseMortgage/hmConfigTrustplan/delete';
            this.$axios.request({ data: { id: dataId } }).then(function (res) {
                _this8.$Message.success('删除成功!');
                _this8.changePage(1);
            });
        },
        getFundChannal: function getFundChannal() {
            var _this9 = this;

            //获取资金渠道（新增信托计划时需要）
            this.$axios.options.url = '/houseMortgage/hmConfigFundchannal/read/list';
            this.$axios.request().then(function (res) {
                _this9.fundChannals = res.data.list;
            });
        }
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        this.changePage(1);
        this.getFundChannal();
    }
});

/***/ }),

/***/ 1120:
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
  }, [_vm._v("\n                    搜索\n                ")])], 1), _vm._v(" "), _c('Button', {
    staticClass: "fr",
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        _vm.openModal('create', null)
      }
    }
  }, [_vm._v("创建")])], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "clear",
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
      "title": "添加渠道",
      "width": 840
    },
    on: {
      "on-cancel": _vm.closeModal
    },
    model: {
      value: (_vm.showModal),
      callback: function($$v) {
        _vm.showModal = $$v
      },
      expression: "showModal"
    }
  }, [_c('div', [_c('Form', {
    ref: "formValidate",
    attrs: {
      "model": _vm.formValidate,
      "rules": _vm.ruleValidate,
      "width": 400,
      "label-width": 130
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "信托计划名称",
      "prop": "trustName"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请输入信托计划名称"
    },
    model: {
      value: (_vm.formValidate.trustName),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "trustName", $$v)
      },
      expression: "formValidate.trustName"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "信托计划所属公司",
      "prop": "companyId"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择信托计划所属公司"
    },
    model: {
      value: (_vm.formValidate.companyId),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "companyId", $$v)
      },
      expression: "formValidate.companyId"
    }
  }, _vm._l((_vm.fundChannals), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.channelName) + "\n                                ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "信托规模",
      "prop": "scale"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写信托规模"
    },
    model: {
      value: (_vm.formValidate.scale),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "scale", $$v)
      },
      expression: "formValidate.scale"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "剩余规模",
      "prop": "surplusScale"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写剩余规模"
    },
    model: {
      value: (_vm.formValidate.surplusScale),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "surplusScale", $$v)
      },
      expression: "formValidate.surplusScale"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "信托计划开始日期",
      "prop": "startDate"
    }
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "270px"
    },
    attrs: {
      "type": "date",
      "editable": false,
      "placeholder": "请填写信托计划开始日期"
    },
    model: {
      value: (_vm.formValidate.startDate),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "startDate", $$v)
      },
      expression: "formValidate.startDate"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "信托计划结束日期",
      "prop": "endDate"
    }
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "270px"
    },
    attrs: {
      "type": "date",
      "editable": false,
      "placeholder": "请填写信托计划结束日期"
    },
    model: {
      value: (_vm.formValidate.endDate),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "endDate", $$v)
      },
      expression: "formValidate.endDate"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "信托投向",
      "prop": "trustInvestment"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写信托投向"
    },
    model: {
      value: (_vm.formValidate.trustInvestment),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "trustInvestment", $$v)
      },
      expression: "formValidate.trustInvestment"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "是否开启",
      "prop": "startState"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择是否开启"
    },
    model: {
      value: (_vm.formValidate.startState),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "startState", $$v)
      },
      expression: "formValidate.startState"
    }
  }, _vm._l((_vm.dicts.STARTSTATE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "备注",
      "prop": "remarks"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写备注"
    },
    model: {
      value: (_vm.formValidate.remarks),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "remarks", $$v)
      },
      expression: "formValidate.remarks"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "业务笔数",
      "prop": "business"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写业务笔数"
    },
    model: {
      value: (_vm.formValidate.business),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "business", $$v)
      },
      expression: "formValidate.business"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
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
        _vm.closeModal()
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.handleSubmit('formValidate')
      }
    }
  }, [_vm._v("确定")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-2d682de0", module.exports)
  }
}

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1064),
  /* template */
  __webpack_require__(1120),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/trustFund.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] trustFund.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d682de0", Component.options)
  } else {
    hotAPI.reload("data-v-2d682de0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cnVzdEZ1bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RydXN0RnVuZC52dWU/NWVkMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdHJ1c3RGdW5kLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2hvd01vZGFsIiwibW9kYWxUeXBlIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJkaWN0cyIsImZ1bmRDaGFubmFscyIsImNvbHVtbnMiLCJ0aXRsZSIsImtleSIsImFsaWduIiwicmVuZGVyIiwiaCIsInBhcmFtcyIsInN0eWxlIiwib24iLCJjbGljayIsIm9wZW5Nb2RhbCIsInJvdyIsInByb3BzIiwiY29udGVudCIsInBsYWNlbWVudCIsInR5cGUiLCJzaXplIiwiY29sb3IiLCJjb25maXJtRGVsZXRlIiwiZm9ybVZhbGlkYXRlIiwidHJ1c3ROYW1lIiwiY29tcGFueUlkIiwic2NhbGUiLCJzdXJwbHVzU2NhbGUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwidHJ1c3RJbnZlc3RtZW50Iiwic3RhcnRTdGF0ZSIsInJlbWFya3MiLCJidXNpbmVzcyIsInJ1bGVWYWxpZGF0ZSIsInJlcXVpcmVkIiwibWVzc2FnZSIsInRyaWdnZXIiLCJtZXRob2RzIiwiY2hhbmdlUGFnZSIsInBhZ2VOdW0iLCJ0aW1lVXRpbCIsImdldERhdGVUaW1lIiwiJGF4aW9zIiwib3B0aW9ucyIsInVybCIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJodHRwQ29kZSIsIiRNZXNzYWdlIiwiZXJyb3IiLCJtc2ciLCJFUlJPUiIsImxpc3QiLCJjYXRjaCIsImZsYWciLCIkcmVmcyIsInJlc2V0RmllbGRzIiwiY2xlYXJPYmplY3QiLCJPYmplY3QiLCJhc3NpZ24iLCJoYW5kbGVTdWJtaXQiLCJuYW1lIiwidmFsaWRhdGUiLCJ2YWxpZCIsImNyZWF0ZURhdGEiLCJlZGl0RGF0YSIsImNsb3NlTW9kYWwiLCJnZXRDdXJyZW50RGF0ZSIsInJlcyIsInN1Y2Nlc3MiLCIkTW9kYWwiLCJjb25maXJtIiwib25PayIsImRlbGV0ZURhdGEiLCJpZCIsIm9uQ2FuY2VsIiwiZGF0YUlkIiwiZ2V0RnVuZENoYW5uYWwiLCJtb3VudGVkIiwiJHJvb3QiLCJldmVudEh1YiIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLCtEQUFlO0FBQ1hBLFFBRFcsa0JBQ0o7QUFBQTs7QUFDSCxZQUFNQyxRQUFRLElBQWQ7QUFDQSxlQUFPO0FBQ0hDLGtCQUFNLEtBREg7QUFFSEMsdUJBQVcsS0FGUjtBQUdIQyx1QkFBVyxFQUhSO0FBSUhDLG9CQUFRO0FBQ0pDLHVCQUFPLENBREg7QUFFSkMsMEJBQVUsS0FBS0MsT0FBTCxDQUFhRDtBQUZuQixhQUpMO0FBUUhFLG9CQUFRLEVBUkw7QUFTSEMscUJBQVMsRUFUTjtBQVVIQyx1QkFBVyxFQVZSO0FBV0hDLG1CQUFPO0FBQ0hDLDRCQURHLHdCQUNVQyxJQURWLEVBQ2dCO0FBQ2YsMkJBQU9BLFFBQVFiLE1BQU1JLE1BQU4sQ0FBYVUsYUFBckIsSUFBc0NELEtBQUtFLE9BQUwsS0FBaUJmLE1BQU1JLE1BQU4sQ0FBYVUsYUFBYixDQUEyQkMsT0FBM0IsS0FBdUNmLE1BQU1PLE9BQU4sQ0FBY1MsV0FBbkg7QUFDSDtBQUhFLGFBWEo7QUFnQkhDLGlCQUFLO0FBQ0RMLDRCQURDLHdCQUNZQyxJQURaLEVBQ2tCO0FBQ2YsMkJBQU9BLFFBQVFiLE1BQU1JLE1BQU4sQ0FBYWMsZUFBckIsSUFBd0NMLEtBQUtFLE9BQUwsS0FBaUJmLE1BQU1JLE1BQU4sQ0FBYWMsZUFBYixDQUE2QkgsT0FBN0Is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O0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM1VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxXQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoiMzEuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RpbWVVdGlsLCBjbGVhck9iamVjdH0gZnJvbSAnLi4vbGlicy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9yZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgbW9kYWxUeXBlOiAnJyxcbiAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLiRjb25maWcucGFnZVNpemVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0dXM6IFtdLFxuICAgICAgICAgICAgaGFuZGxlcjogW10sXG4gICAgICAgICAgICBhcHBsaWNhbnQ6IFtdLFxuICAgICAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZSAmJiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZCAmJiBkYXRlLnZhbHVlT2YoKSA+IF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kLnZhbHVlT2YoKSAtIF90aGlzLiRjb25maWcubWlsbHNlY29uZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kOiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWREYXRlKGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUgJiYgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCAmJiBkYXRlLnZhbHVlT2YoKSA8IF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQudmFsdWVPZigpICsgX3RoaXMuJGNvbmZpZy5taWxsc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgZGljdHM6IFtdLFxuICAgICAgICAgICAgZnVuZENoYW5uYWxzOiBbXSxcbiAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICAvLyB7dGl0bGU6ICfkv6HmiZjorqHliJLnvJblj7cnLCBrZXk6ICdjb2RlJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5L+h5omY6K6h5YiS5ZCN56ewJywga2V5OiAndHJ1c3ROYW1lJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5L+h5omY6K6h5YiS5omA5bGe5YWs5Y+4Jywga2V5OiAnY29tcGFueUlkJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5L+h5omY6KeE5qihJywga2V5OiAnc2NhbGUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfliankvZnop4TmqKEnLCBrZXk6ICdzdXJwbHVzU2NhbGUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfkv6HmiZjorqHliJLlvIDlp4vml6XmnJ8nLCBrZXk6ICdzdGFydERhdGUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfkv6HmiZjorqHliJLliLDmnJ/ml6XmnJ8nLCBrZXk6ICdlbmREYXRlJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5L+h5omY5oqV5ZCRJywga2V5OiAndHJ1c3RJbnZlc3RtZW50J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5piv5ZCm5byA5ZCvJywga2V5OiAnc3RhcnRTdGF0ZVRleHQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflpIfms6gnLCBrZXk6ICdyZW1hcmtzJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5Lia5Yqh56yU5pWwJywga2V5OiAnYnVzaW5lc3MnfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pON5L2cJywgYWxpZ246ICdjZW50ZXInLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdkaXYnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IHBhcmFtcy5yb3cubXVsdGlwbGUgPyAnbm9uZScgOiAnYmxvY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogJ2N1c3RvbWVySW5mbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhcmFtczoge2lkOiBwYXJhbXMucm93LmlkLCBwYWdlTnVtOiBfdGhpcy5zZWFyY2gucGFnZU51bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKCdlZGl0JyAsIHBhcmFtcy5yb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfnvJbovpEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY3JlYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBwYXJhbXMucm93Lm11bHRpcGxlID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1EZWxldGUocGFyYW1zLnJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnVG9vbHRpcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WIoOmZpCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdJY29uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZC1jbG9zZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjMzNDQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGZvcm1WYWxpZGF0ZToge1xuICAgICAgICAgICAgICAgIHRydXN0TmFtZTogJycsIC8v5L+h5omY6K6h5YiS5ZCN56ewXG4gICAgICAgICAgICAgICAgY29tcGFueUlkOiAnJywgLy/kv6HmiZjorqHliJLmiYDlsZ7lhazlj7hcbiAgICAgICAgICAgICAgICBzY2FsZTogJycsIC8v5L+h5omY6KeE5qihXG4gICAgICAgICAgICAgICAgc3VycGx1c1NjYWxlOiAnJywgLy/liankvZnop4TmqKFcbiAgICAgICAgICAgICAgICBzdGFydERhdGU6ICcnLCAvL+S/oeaJmOiuoeWIkuW8gOWni+aXpeacn1xuICAgICAgICAgICAgICAgIGVuZERhdGU6ICcnLCAvL+S/oeaJmOiuoeWIkuWIsOacn+aXpeacn1xuICAgICAgICAgICAgICAgIHRydXN0SW52ZXN0bWVudDogJycsIC8v5L+h5omY5oqV5ZCRXG4gICAgICAgICAgICAgICAgc3RhcnRTdGF0ZTogJycsIC8v5piv5ZCm5byA5ZCvXG4gICAgICAgICAgICAgICAgcmVtYXJrczogJycsIC8v5aSH5rOoXG4gICAgICAgICAgICAgICAgYnVzaW5lc3M6ICcnIC8v5Lia5Yqh56yU5pWwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnVsZVZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgdHJ1c3ROYW1lOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfkv6HmiZjorqHliJLlkI3np7DkuI3og73kuLrnqbonLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgY29tcGFueUlkOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfkv6HmiZjorqHliJLmiYDlsZ7lhazlj7jkuI3og73kuLrnqbonLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc2NhbGU6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+Whq+WGmeS/oeaJmOinhOaooScsIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN1cnBsdXNTY2FsZTogW1xuICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+35aGr5YaZ5Ymp5L2Z6KeE5qihJywgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHRydXN0SW52ZXN0bWVudDogW1xuICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+35aGr5YaZ5L+h5omY5oqV5ZCRJywgdHJpZ2dlcjogJ2JsdXInIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoYW5nZVBhZ2UocGFnZU51bSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnBhZ2VOdW0gPSBwYWdlTnVtO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ID0gdGltZVV0aWwuZ2V0RGF0ZVRpbWUodGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQgPSB0aW1lVXRpbC5nZXREYXRlVGltZSh0aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kKTtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htQ29uZmlnVHJ1c3RwbGFuL3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB0aGlzLnNlYXJjaH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YS5saXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdHMgPSByZXNwb25zZS5kaWN0c1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvcGVuTW9kYWwoZmxhZywgZGF0YSl7XG4gICAgICAgICAgICB0aGlzLiRyZWZzWydmb3JtVmFsaWRhdGUnXS5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgY2xlYXJPYmplY3QodGhpcy5mb3JtVmFsaWRhdGUpICBcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5tb2RhbFR5cGUgPSBmbGFnXG4gICAgICAgICAgICBpZihmbGFnID09ICdlZGl0Jyl7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmZvcm1WYWxpZGF0ZSwgZGF0YSlcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVTdWJtaXQgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnNbbmFtZV0udmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubW9kYWxUeXBlID09ICdjcmVhdGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0RGF0YSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKCfor7flrozlloTkv6Hmga8hJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VNb2RhbCgpeyAvL+WFs+mXreW8ueahhlxuICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVEYXRhKCl7IC8v5Yib5bu66LSm5oi3XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obUNvbmZpZ1RydXN0cGxhbi9hZGQnO1xuICAgICAgICAgICAgdGhpcy5mb3JtVmFsaWRhdGUuc3RhcnREYXRlID0gdGltZVV0aWwuZ2V0Q3VycmVudERhdGUodGhpcy5mb3JtVmFsaWRhdGUuc3RhcnREYXRlKVxuICAgICAgICAgICAgdGhpcy5mb3JtVmFsaWRhdGUuZW5kRGF0ZSA9IHRpbWVVdGlsLmdldEN1cnJlbnREYXRlKHRoaXMuZm9ybVZhbGlkYXRlLmVuZERhdGUpXG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB0aGlzLmZvcm1WYWxpZGF0ZX0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKDEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdERhdGEoKXsgLy/nvJbovpHnlKjmiLdcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htQ29uZmlnVHJ1c3RwbGFuL3VwZGF0ZSc7XG4gICAgICAgICAgICB0aGlzLmZvcm1WYWxpZGF0ZS5zdGFydERhdGUgPSB0aW1lVXRpbC5nZXRDdXJyZW50RGF0ZSh0aGlzLmZvcm1WYWxpZGF0ZS5zdGFydERhdGUpXG4gICAgICAgICAgICB0aGlzLmZvcm1WYWxpZGF0ZS5lbmREYXRlID0gdGltZVV0aWwuZ2V0Q3VycmVudERhdGUodGhpcy5mb3JtVmFsaWRhdGUuZW5kRGF0ZSlcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHRoaXMuZm9ybVZhbGlkYXRlfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2Uuc3VjY2Vzcygn5L+u5pS55oiQ5YqfIScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoMSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtRGVsZXRlKGRhdGEpeyAvL+ehruiupOWIoOmZpFxuICAgICAgICAgICAgdGhpcy4kTW9kYWwuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliKDpmaQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8cD7noa7orqTopoHliKDpmaTor6XmlbDmja7lkJfvvJ88L3A+JyxcbiAgICAgICAgICAgICAgICBvbk9rOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRGF0YShkYXRhLmlkKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZURhdGEoZGF0YUlkKXsgLy/liKDpmaRcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htQ29uZmlnVHJ1c3RwbGFuL2RlbGV0ZSc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IGRhdGFJZH0gfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2Uuc3VjY2Vzcygn5Yig6Zmk5oiQ5YqfIScpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGFnZSgxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGdldEZ1bmRDaGFubmFsKCl7IC8v6I635Y+W6LWE6YeR5rig6YGT77yI5paw5aKe5L+h5omY6K6h5YiS5pe26ZyA6KaB77yJXG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obUNvbmZpZ0Z1bmRjaGFubmFsL3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KCkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuZnVuZENoYW5uYWxzID0gcmVzLmRhdGEubGlzdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC5ldmVudEh1Yi4kZW1pdCgnYnJlYWRjcnVtYicpO1xuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoMSk7XG4gICAgICAgIHRoaXMuZ2V0RnVuZENoYW5uYWwoKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90cnVzdEZ1bmQuanMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoISgnYnV0dG9uJyBpbiAkZXZlbnQpICYmIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKSkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdGb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlubGluZVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdJbnB1dCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjMwMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWFs+mUruWtl1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoLmtleXdvcmQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImtleXdvcmRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmtleXdvcmRcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0Zvcm1JdGVtJywgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImlvcy1zZWFyY2hcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jaGFuZ2VQYWdlKDEpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmkJzntKJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcImljb25cIjogXCJtZC1hZGRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuTW9kYWwoJ2NyZWF0ZScsIG51bGwpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwi5Yib5bu6XCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xlYXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJsb2FkaW5nXCI6IF92bS5sb2FkaW5nLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5kYXRhXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdQYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG90YWxcIjogX3ZtLnNlYXJjaC50b3RhbCxcbiAgICAgIFwiY3VycmVudFwiOiBfdm0uc2VhcmNoLnBhZ2VOdW0sXG4gICAgICBcInBhZ2Utc2l6ZVwiOiBfdm0uc2VhcmNoLnBhZ2VTaXplLFxuICAgICAgXCJzaG93LWVsZXZhdG9yXCI6IFwiXCIsXG4gICAgICBcInNob3ctdG90YWxcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jaGFuZ2VQYWdlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbGVhclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnTW9kYWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCLmt7vliqDmuKDpgZNcIixcbiAgICAgIFwid2lkdGhcIjogODQwXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJvbi1jYW5jZWxcIjogX3ZtLmNsb3NlTW9kYWxcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zaG93TW9kYWwpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc2hvd01vZGFsID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzaG93TW9kYWxcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCBbX2MoJ0Zvcm0nLCB7XG4gICAgcmVmOiBcImZvcm1WYWxpZGF0ZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5mb3JtVmFsaWRhdGUsXG4gICAgICBcInJ1bGVzXCI6IF92bS5ydWxlVmFsaWRhdGUsXG4gICAgICBcIndpZHRoXCI6IDQwMCxcbiAgICAgIFwibGFiZWwtd2lkdGhcIjogMTMwXG4gICAgfVxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi5L+h5omY6K6h5YiS5ZCN56ewXCIsXG4gICAgICBcInByb3BcIjogXCJ0cnVzdE5hbWVcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+i+k+WFpeS/oeaJmOiuoeWIkuWQjeensFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLnRydXN0TmFtZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwidHJ1c3ROYW1lXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS50cnVzdE5hbWVcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi5L+h5omY6K6h5YiS5omA5bGe5YWs5Y+4XCIsXG4gICAgICBcInByb3BcIjogXCJjb21wYW55SWRcIlxuICAgIH1cbiAgfSwgW19jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7fpgInmi6nkv6HmiZjorqHliJLmiYDlsZ7lhazlj7hcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5jb21wYW55SWQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcImNvbXBhbnlJZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtVmFsaWRhdGUuY29tcGFueUlkXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLmZ1bmRDaGFubmFscyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmNoYW5uZWxOYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuS/oeaJmOinhOaooVwiLFxuICAgICAgXCJwcm9wXCI6IFwic2NhbGVcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeS/oeaJmOinhOaooVwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLnNjYWxlKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJzY2FsZVwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtVmFsaWRhdGUuc2NhbGVcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi5Ymp5L2Z6KeE5qihXCIsXG4gICAgICBcInByb3BcIjogXCJzdXJwbHVzU2NhbGVcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeWJqeS9meinhOaooVwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLnN1cnBsdXNTY2FsZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwic3VycGx1c1NjYWxlXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5zdXJwbHVzU2NhbGVcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuS/oeaJmOiuoeWIkuW8gOWni+aXpeacn1wiLFxuICAgICAgXCJwcm9wXCI6IFwic3RhcnREYXRlXCJcbiAgICB9XG4gIH0sIFtfYygnRGF0ZVBpY2tlcicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjI3MHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJkYXRlXCIsXG4gICAgICBcImVkaXRhYmxlXCI6IGZhbHNlLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeS/oeaJmOiuoeWIkuW8gOWni+aXpeacn1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLnN0YXJ0RGF0ZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwic3RhcnREYXRlXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5zdGFydERhdGVcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi5L+h5omY6K6h5YiS57uT5p2f5pel5pyfXCIsXG4gICAgICBcInByb3BcIjogXCJlbmREYXRlXCJcbiAgICB9XG4gIH0sIFtfYygnRGF0ZVBpY2tlcicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjI3MHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJkYXRlXCIsXG4gICAgICBcImVkaXRhYmxlXCI6IGZhbHNlLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeS/oeaJmOiuoeWIkue7k+adn+aXpeacn1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmVuZERhdGUpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcImVuZERhdGVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmVuZERhdGVcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuS/oeaJmOaKleWQkVwiLFxuICAgICAgXCJwcm9wXCI6IFwidHJ1c3RJbnZlc3RtZW50XCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7floavlhpnkv6HmiZjmipXlkJFcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS50cnVzdEludmVzdG1lbnQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcInRydXN0SW52ZXN0bWVudFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtVmFsaWRhdGUudHJ1c3RJbnZlc3RtZW50XCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuaYr+WQpuW8gOWQr1wiLFxuICAgICAgXCJwcm9wXCI6IFwic3RhcnRTdGF0ZVwiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+mAieaLqeaYr+WQpuW8gOWQr1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLnN0YXJ0U3RhdGUpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcInN0YXJ0U3RhdGVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLnN0YXJ0U3RhdGVcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uZGljdHMuU1RBUlRTVEFURSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi5aSH5rOoXCIsXG4gICAgICBcInByb3BcIjogXCJyZW1hcmtzXCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7floavlhpnlpIfms6hcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5yZW1hcmtzKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJyZW1hcmtzXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5yZW1hcmtzXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuS4muWKoeeslOaVsFwiLFxuICAgICAgXCJwcm9wXCI6IFwiYnVzaW5lc3NcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeS4muWKoeeslOaVsFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmJ1c2luZXNzKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJidXNpbmVzc1wiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtVmFsaWRhdGUuYnVzaW5lc3NcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJmb290ZXJcIlxuICAgIH0sXG4gICAgc2xvdDogXCJmb290ZXJcIlxuICB9LCBbX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzaXplXCI6IFwibGFyZ2VcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jbG9zZU1vZGFsKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLlj5bmtohcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiLFxuICAgICAgXCJzaXplXCI6IFwibGFyZ2VcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5oYW5kbGVTdWJtaXQoJ2Zvcm1WYWxpZGF0ZScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwi56Gu5a6aXCIpXSldLCAxKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMmQ2ODJkZTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yZDY4MmRlMFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RydXN0RnVuZC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi9jb21wb25lbnRzL3RydXN0RnVuZC5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmQ2ODJkZTBcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vdHJ1c3RGdW5kLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy90cnVzdEZ1bmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdHJ1c3RGdW5kLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZDY4MmRlMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJkNjgyZGUwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90cnVzdEZ1bmQudnVlXG4vLyBtb2R1bGUgaWQgPSA5MTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSJdLCJzb3VyY2VSb290IjoiIn0=