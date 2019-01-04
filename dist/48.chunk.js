webpackJsonp([48],{

/***/ 1129:
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
      "title": "添加账户",
      "width": 640
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
      "label-width": 80
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "开户机构",
      "prop": "organ"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择开户机构"
    },
    model: {
      value: (_vm.formValidate.organ),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "organ", $$v)
      },
      expression: "formValidate.organ"
    }
  }, _vm._l((_vm.dicts.ORGAN), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "开户性质",
      "prop": "accountNature"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择开户性质"
    },
    model: {
      value: (_vm.formValidate.accountNature),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "accountNature", $$v)
      },
      expression: "formValidate.accountNature"
    }
  }, _vm._l((_vm.dicts.ACCOUNTNATURE), function(item) {
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
      "label": "账户账号",
      "prop": "accountNumber"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请输入账户账号"
    },
    model: {
      value: (_vm.formValidate.accountNumber),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "accountNumber", $$v)
      },
      expression: "formValidate.accountNumber"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "开户银行",
      "prop": "openBank"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写开户银行"
    },
    model: {
      value: (_vm.formValidate.openBank),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "openBank", $$v)
      },
      expression: "formValidate.openBank"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "开户分行",
      "prop": "openSubbranch"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写开户分行"
    },
    model: {
      value: (_vm.formValidate.openSubbranch),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "openSubbranch", $$v)
      },
      expression: "formValidate.openSubbranch"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "开户日期",
      "prop": "openDate"
    }
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "date",
      "editable": false,
      "placeholder": "请填写开户日期"
    },
    model: {
      value: (_vm.formValidate.openDate),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "openDate", $$v)
      },
      expression: "formValidate.openDate"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "账户状态",
      "prop": "accountState"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择账户状态"
    },
    model: {
      value: (_vm.formValidate.accountState),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "accountState", $$v)
      },
      expression: "formValidate.accountState"
    }
  }, _vm._l((_vm.dicts.ACCOUNTSTATE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "销户日期",
      "prop": "closeAccountDate"
    }
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "date",
      "editable": false,
      "placeholder": "请填写销户日期"
    },
    model: {
      value: (_vm.formValidate.closeAccountDate),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "closeAccountDate", $$v)
      },
      expression: "formValidate.closeAccountDate"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "是否网银",
      "prop": "cyberBank"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择是否网银"
    },
    model: {
      value: (_vm.formValidate.cyberBank),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "cyberBank", $$v)
      },
      expression: "formValidate.cyberBank"
    }
  }, _vm._l((_vm.dicts.CYBERBANK), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
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
     __webpack_require__(202).rerender("data-v-3fe97d90", module.exports)
  }
}

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(981),
  /* template */
  __webpack_require__(1129),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/account.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] account.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fe97d90", Component.options)
  } else {
    hotAPI.reload("data-v-3fe97d90", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 981:
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
            columns: [{ title: '开户机构', key: 'organText' }, { title: '账户性质', key: 'accountNatureText' }, { title: '账户账号', key: 'accountNumber' }, { title: '开户银行', key: 'openBank' }, { title: '开户支行', key: 'openSubbranch' }, { title: '开户日期', key: 'openDate' }, { title: '账号状态', key: 'accountStateText' }, { title: '销户日期', key: 'closeAccountDate' }, { title: '开通网银', key: 'cyberBankText' }, { title: '备注', key: 'remarks' }, { title: '是否启用', key: 'startStateText' }, {
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
                organ: '', //开户机构
                accountNature: '', //账户性质
                accountNumber: '', //账户账号
                openBank: '', //开户银行
                openSubbranch: '', //开户支行
                openDate: '', //开户日期
                accountState: '', //账号状态
                closeAccountDate: '', //销户日期
                cyberBank: '', //开通网银
                remarks: '', //备注
                startState: '' //是否启用
            },
            ruleValidate: {
                organ: [{ required: true, message: '开户机构不能为空', trigger: 'blur' }],
                accountNature: [{ required: true, message: '开户性质不能为空', trigger: 'blur' }],
                accountNumber: [{ required: true, message: '账户账号不能为空', trigger: 'blur' }],
                openBank: [{ required: true, message: '开户银行不能为空', trigger: 'blur' }],
                openSubbranch: [{ required: true, message: '请填写开户分行', trigger: 'blur' }],
                accountState: [{ required: true, message: '请填写账号状态', trigger: 'blur' }],
                cyberBank: [{ required: false, message: '请选择是否网银', trigger: 'blur' }],
                remarks: [{ required: false, message: '请选择是否开启', trigger: 'blur' }],
                startState: [{ required: false, message: '请填写备注', trigger: 'blur' }]
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
            this.$axios.options.url = '/houseMortgage/hmAccount/read/list';
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
            this.$axios.options.url = '/houseMortgage/hmAccount/add';
            this.formValidate.openDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.openDate);
            this.formValidate.closeAccountDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.closeAccountDate);
            this.$axios.request({ data: this.formValidate }).then(function (res) {
                _this5.$Message.success('创建成功!');
                _this5.showModal = false;
                _this5.changePage(1);
            });
        },
        editData: function editData() {
            var _this6 = this;

            //编辑用户
            this.$axios.options.url = '/houseMortgage/hmAccount/update';
            this.formValidate.openDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.openDate);
            this.formValidate.closeAccountDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.closeAccountDate);
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
            this.$axios.options.url = '/houseMortgage/hmAccount/delete';
            this.$axios.request({ data: { id: dataId } }).then(function (res) {
                _this8.$Message.success('删除成功!');
                _this8.changePage(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWNjb3VudC52dWU/MzE4OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWNjb3VudC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3VudC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2hvd01vZGFsIiwibW9kYWxUeXBlIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJkaWN0cyIsImNvbHVtbnMiLCJ0aXRsZSIsImtleSIsImFsaWduIiwicmVuZGVyIiwiaCIsInBhcmFtcyIsInN0eWxlIiwib24iLCJjbGljayIsIm9wZW5Nb2RhbCIsInJvdyIsInByb3BzIiwiY29udGVudCIsInBsYWNlbWVudCIsInR5cGUiLCJzaXplIiwiY29sb3IiLCJjb25maXJtRGVsZXRlIiwiZm9ybVZhbGlkYXRlIiwib3JnYW4iLCJhY2NvdW50TmF0dXJlIiwiYWNjb3VudE51bWJlciIsIm9wZW5CYW5rIiwib3BlblN1YmJyYW5jaCIsIm9wZW5EYXRlIiwiYWNjb3VudFN0YXRlIiwiY2xvc2VBY2NvdW50RGF0ZSIsImN5YmVyQmFuayIsInJlbWFya3MiLCJzdGFydFN0YXRlIiwicnVsZVZhbGlkYXRlIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwidHJpZ2dlciIsIm1ldGhvZHMiLCJjaGFuZ2VQYWdlIiwicGFnZU51bSIsInRpbWVVdGlsIiwiZ2V0RGF0ZVRpbWUiLCIkYXhpb3MiLCJvcHRpb25zIiwidXJsIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImh0dHBDb2RlIiwiJE1lc3NhZ2UiLCJlcnJvciIsIm1zZyIsIkVSUk9SIiwibGlzdCIsImNhdGNoIiwiZmxhZyIsIiRyZWZzIiwicmVzZXRGaWVsZHMiLCJjbGVhck9iamVjdCIsIk9iamVjdCIsImFzc2lnbiIsImhhbmRsZVN1Ym1pdCIsIm5hbWUiLCJ2YWxpZGF0ZSIsInZhbGlkIiwiY3JlYXRlRGF0YSIsImVkaXREYXRhIiwiY2xvc2VNb2RhbCIsImdldEN1cnJlbnREYXRlIiwicmVzIiwic3VjY2VzcyIsIiRNb2RhbCIsImNvbmZpcm0iLCJvbk9rIiwiZGVsZXRlRGF0YSIsImlkIiwib25DYW5jZWwiLCJkYXRhSWQiLCJtb3VudGVkIiwiJHJvb3QiLCJldmVudEh1YiIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLGFBQWE7QUFDN0c7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNB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aUNBQTFCO0FBQ0EsaUJBQUtGLE1BQUwsQ0FBWUcsT0FBWixDQUFvQixFQUFDakUsTUFBTSxFQUFDK0YsSUFBSUUsTUFBTCxFQUFQLEVBQXBCLEVBQTJDL0IsSUFBM0MsQ0FBZ0QsVUFBQ3VCLEdBQUQsRUFBTztBQUNuRCx1QkFBS3BCLFFBQUwsQ0FBY3FCLE9BQWQsQ0FBc0IsT0FBdEI7QUFDQSx1QkFBS2hDLFVBQUwsQ0FBZ0IsQ0FBaEI7QUFDSCxhQUhEO0FBSUg7QUF2RkksS0EvSUU7QUF3T1h3QyxXQXhPVyxxQkF3T0Q7QUFDTixhQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLEtBQXBCLENBQTBCLFlBQTFCO0FBQ0EsYUFBSzNDLFVBQUwsQ0FBZ0IsQ0FBaEI7QUFDSDtBQTNPVSxDQUFmLEUiLCJmaWxlIjoiNDguY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoISgnYnV0dG9uJyBpbiAkZXZlbnQpICYmIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKSkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdGb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlubGluZVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdJbnB1dCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjMwMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWFs+mUruWtl1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoLmtleXdvcmQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImtleXdvcmRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmtleXdvcmRcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0Zvcm1JdGVtJywgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImlvcy1zZWFyY2hcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jaGFuZ2VQYWdlKDEpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmkJzntKJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcImljb25cIjogXCJtZC1hZGRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuTW9kYWwoJ2NyZWF0ZScsIG51bGwpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwi5Yib5bu6XCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xlYXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJsb2FkaW5nXCI6IF92bS5sb2FkaW5nLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5kYXRhXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdQYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG90YWxcIjogX3ZtLnNlYXJjaC50b3RhbCxcbiAgICAgIFwiY3VycmVudFwiOiBfdm0uc2VhcmNoLnBhZ2VOdW0sXG4gICAgICBcInBhZ2Utc2l6ZVwiOiBfdm0uc2VhcmNoLnBhZ2VTaXplLFxuICAgICAgXCJzaG93LWVsZXZhdG9yXCI6IFwiXCIsXG4gICAgICBcInNob3ctdG90YWxcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jaGFuZ2VQYWdlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbGVhclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnTW9kYWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCLmt7vliqDotKbmiLdcIixcbiAgICAgIFwid2lkdGhcIjogNjQwXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJvbi1jYW5jZWxcIjogX3ZtLmNsb3NlTW9kYWxcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zaG93TW9kYWwpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc2hvd01vZGFsID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzaG93TW9kYWxcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCBbX2MoJ0Zvcm0nLCB7XG4gICAgcmVmOiBcImZvcm1WYWxpZGF0ZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5mb3JtVmFsaWRhdGUsXG4gICAgICBcInJ1bGVzXCI6IF92bS5ydWxlVmFsaWRhdGUsXG4gICAgICBcIndpZHRoXCI6IDQwMCxcbiAgICAgIFwibGFiZWwtd2lkdGhcIjogODBcbiAgICB9XG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLlvIDmiLfmnLrmnoRcIixcbiAgICAgIFwicHJvcFwiOiBcIm9yZ2FuXCJcbiAgICB9XG4gIH0sIFtfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36YCJ5oup5byA5oi35py65p6EXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5mb3JtVmFsaWRhdGUub3JnYW4pLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcIm9yZ2FuXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5vcmdhblwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5kaWN0cy5PUkdBTiksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLlvIDmiLfmgKfotKhcIixcbiAgICAgIFwicHJvcFwiOiBcImFjY291bnROYXR1cmVcIlxuICAgIH1cbiAgfSwgW19jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7fpgInmi6nlvIDmiLfmgKfotKhcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5hY2NvdW50TmF0dXJlKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJhY2NvdW50TmF0dXJlXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5hY2NvdW50TmF0dXJlXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLmRpY3RzLkFDQ09VTlROQVRVUkUpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdPcHRpb24nLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInZhbHVlXCI6IGl0ZW0uaWRcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS50ZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIui0puaIt+i0puWPt1wiLFxuICAgICAgXCJwcm9wXCI6IFwiYWNjb3VudE51bWJlclwiXG4gICAgfVxuICB9LCBbX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36L6T5YWl6LSm5oi36LSm5Y+3XCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5mb3JtVmFsaWRhdGUuYWNjb3VudE51bWJlciksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwiYWNjb3VudE51bWJlclwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtVmFsaWRhdGUuYWNjb3VudE51bWJlclwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLlvIDmiLfpk7booYxcIixcbiAgICAgIFwicHJvcFwiOiBcIm9wZW5CYW5rXCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7floavlhpnlvIDmiLfpk7booYxcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5vcGVuQmFuayksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwib3BlbkJhbmtcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLm9wZW5CYW5rXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLlvIDmiLfliIbooYxcIixcbiAgICAgIFwicHJvcFwiOiBcIm9wZW5TdWJicmFuY2hcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeW8gOaIt+WIhuihjFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLm9wZW5TdWJicmFuY2gpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcIm9wZW5TdWJicmFuY2hcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLm9wZW5TdWJicmFuY2hcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi5byA5oi35pel5pyfXCIsXG4gICAgICBcInByb3BcIjogXCJvcGVuRGF0ZVwiXG4gICAgfVxuICB9LCBbX2MoJ0RhdGVQaWNrZXInLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIyMjBweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZVwiLFxuICAgICAgXCJlZGl0YWJsZVwiOiBmYWxzZSxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7floavlhpnlvIDmiLfml6XmnJ9cIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5vcGVuRGF0ZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwib3BlbkRhdGVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLm9wZW5EYXRlXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLotKbmiLfnirbmgIFcIixcbiAgICAgIFwicHJvcFwiOiBcImFjY291bnRTdGF0ZVwiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+mAieaLqei0puaIt+eKtuaAgVwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmFjY291bnRTdGF0ZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwiYWNjb3VudFN0YXRlXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5hY2NvdW50U3RhdGVcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uZGljdHMuQUNDT1VOVFNUQVRFKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIumUgOaIt+aXpeacn1wiLFxuICAgICAgXCJwcm9wXCI6IFwiY2xvc2VBY2NvdW50RGF0ZVwiXG4gICAgfVxuICB9LCBbX2MoJ0RhdGVQaWNrZXInLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIyMjBweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZVwiLFxuICAgICAgXCJlZGl0YWJsZVwiOiBmYWxzZSxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7floavlhpnplIDmiLfml6XmnJ9cIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5jbG9zZUFjY291bnREYXRlKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJjbG9zZUFjY291bnREYXRlXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5jbG9zZUFjY291bnREYXRlXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLmmK/lkKbnvZHpk7ZcIixcbiAgICAgIFwicHJvcFwiOiBcImN5YmVyQmFua1wiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+mAieaLqeaYr+WQpue9kemTtlwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmN5YmVyQmFuayksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwiY3liZXJCYW5rXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5jeWJlckJhbmtcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uZGljdHMuQ1lCRVJCQU5LKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuaYr+WQpuW8gOWQr1wiLFxuICAgICAgXCJwcm9wXCI6IFwic3RhcnRTdGF0ZVwiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+mAieaLqeaYr+WQpuW8gOWQr1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLnN0YXJ0U3RhdGUpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcInN0YXJ0U3RhdGVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLnN0YXJ0U3RhdGVcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uZGljdHMuU1RBUlRTVEFURSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi5aSH5rOoXCIsXG4gICAgICBcInByb3BcIjogXCJyZW1hcmtzXCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7floavlhpnlpIfms6hcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5yZW1hcmtzKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJyZW1hcmtzXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5yZW1hcmtzXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiZm9vdGVyXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiZm9vdGVyXCJcbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcImxhcmdlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2xvc2VNb2RhbCgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwi5Y+W5raIXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIixcbiAgICAgIFwic2l6ZVwiOiBcImxhcmdlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaGFuZGxlU3VibWl0KCdmb3JtVmFsaWRhdGUnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIuehruWumlwiKV0pXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTNmZTk3ZDkwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtM2ZlOTdkOTBcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy9hY2NvdW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDQ4IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uL2NvbXBvbmVudHMvYWNjb3VudC5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2ZlOTdkOTBcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vYWNjb3VudC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvYWNjb3VudC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhY2NvdW50LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zZmU5N2Q5MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNmZTk3ZDkwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9hY2NvdW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODY1XG4vLyBtb2R1bGUgY2h1bmtzID0gNDgiLCJpbXBvcnQge3RpbWVVdGlsLCBjbGVhck9iamVjdH0gZnJvbSAnLi4vbGlicy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9yZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgbW9kYWxUeXBlOiAnJyxcbiAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLiRjb25maWcucGFnZVNpemVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0dXM6IFtdLFxuICAgICAgICAgICAgaGFuZGxlcjogW10sXG4gICAgICAgICAgICBhcHBsaWNhbnQ6IFtdLFxuICAgICAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZSAmJiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZCAmJiBkYXRlLnZhbHVlT2YoKSA+IF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kLnZhbHVlT2YoKSAtIF90aGlzLiRjb25maWcubWlsbHNlY29uZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kOiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWREYXRlKGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUgJiYgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCAmJiBkYXRlLnZhbHVlT2YoKSA8IF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQudmFsdWVPZigpICsgX3RoaXMuJGNvbmZpZy5taWxsc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgZGljdHM6IFtdLFxuICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+W8gOaIt+acuuaehCcsIGtleTogJ29yZ2FuVGV4dCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+i0puaIt+aAp+i0qCcsIGtleTogJ2FjY291bnROYXR1cmVUZXh0J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn6LSm5oi36LSm5Y+3Jywga2V5OiAnYWNjb3VudE51bWJlcid9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+W8gOaIt+mTtuihjCcsIGtleTogJ29wZW5CYW5rJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5byA5oi35pSv6KGMJywga2V5OiAnb3BlblN1YmJyYW5jaCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+W8gOaIt+aXpeacnycsIGtleTogJ29wZW5EYXRlJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn6LSm5Y+354q25oCBJywga2V5OiAnYWNjb3VudFN0YXRlVGV4dCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+mUgOaIt+aXpeacnycsIGtleTogJ2Nsb3NlQWNjb3VudERhdGUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflvIDpgJrnvZHpk7YnLCBrZXk6ICdjeWJlckJhbmtUZXh0J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5aSH5rOoJywga2V5OiAncmVtYXJrcyd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+aYr+WQpuWQr+eUqCcsIGtleTogJ3N0YXJ0U3RhdGVUZXh0J30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aTjeS9nCcsIGFsaWduOiAnY2VudGVyJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnZGl2JywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBwYXJhbXMucm93Lm11bHRpcGxlID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdjdXN0b21lckluZm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXJhbXM6IHtpZDogcGFyYW1zLnJvdy5pZCwgcGFnZU51bTogX3RoaXMuc2VhcmNoLnBhZ2VOdW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbCgnZWRpdCcgLCBwYXJhbXMucm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdUb29sdGlwJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn57yW6L6RJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ0ljb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21kLWNyZWF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjk5MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogcGFyYW1zLnJvdy5tdWx0aXBsZSA/ICdibG9jaycgOiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRGVsZXRlKHBhcmFtcy5yb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfliKDpmaQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmYzMzQ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBmb3JtVmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICBvcmdhbjogJycsIC8v5byA5oi35py65p6EXG4gICAgICAgICAgICAgICAgYWNjb3VudE5hdHVyZTogJycsIC8v6LSm5oi35oCn6LSoXG4gICAgICAgICAgICAgICAgYWNjb3VudE51bWJlcjogJycsIC8v6LSm5oi36LSm5Y+3XG4gICAgICAgICAgICAgICAgb3BlbkJhbms6ICcnLCAvL+W8gOaIt+mTtuihjFxuICAgICAgICAgICAgICAgIG9wZW5TdWJicmFuY2g6ICcnLCAvL+W8gOaIt+aUr+ihjFxuICAgICAgICAgICAgICAgIG9wZW5EYXRlOiAnJywgLy/lvIDmiLfml6XmnJ9cbiAgICAgICAgICAgICAgICBhY2NvdW50U3RhdGU6ICcnLCAvL+i0puWPt+eKtuaAgVxuICAgICAgICAgICAgICAgIGNsb3NlQWNjb3VudERhdGU6ICcnLCAvL+mUgOaIt+aXpeacn1xuICAgICAgICAgICAgICAgIGN5YmVyQmFuazogJycsIC8v5byA6YCa572R6ZO2XG4gICAgICAgICAgICAgICAgcmVtYXJrczogJycsIC8v5aSH5rOoXG4gICAgICAgICAgICAgICAgc3RhcnRTdGF0ZTogJycgLy/mmK/lkKblkK/nlKhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydWxlVmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICBvcmdhbjogW1xuICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn5byA5oi35py65p6E5LiN6IO95Li656m6JywgdHJpZ2dlcjogJ2JsdXInIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGFjY291bnROYXR1cmU6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+W8gOaIt+aAp+i0qOS4jeiDveS4uuepuicsIHRyaWdnZXI6ICdibHVyJyB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhY2NvdW50TnVtYmVyOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfotKbmiLfotKblj7fkuI3og73kuLrnqbonLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgb3BlbkJhbms6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+W8gOaIt+mTtuihjOS4jeiDveS4uuepuicsIHRyaWdnZXI6ICdibHVyJyB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBvcGVuU3ViYnJhbmNoOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7floavlhpnlvIDmiLfliIbooYwnLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYWNjb3VudFN0YXRlOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7floavlhpnotKblj7fnirbmgIEnLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgY3liZXJCYW5rOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IGZhbHNlLCBtZXNzYWdlOiAn6K+36YCJ5oup5piv5ZCm572R6ZO2JywgdHJpZ2dlcjogJ2JsdXInIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlbWFya3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogZmFsc2UsIG1lc3NhZ2U6ICfor7fpgInmi6nmmK/lkKblvIDlkK8nLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhcnRTdGF0ZTogW1xuICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiBmYWxzZSwgbWVzc2FnZTogJ+ivt+Whq+WGmeWkh+azqCcsIHRyaWdnZXI6ICdibHVyJyB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2hhbmdlUGFnZShwYWdlTnVtKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZU51bSA9IHBhZ2VOdW07XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQgPSB0aW1lVXRpbC5nZXREYXRlVGltZSh0aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZCA9IHRpbWVVdGlsLmdldERhdGVUaW1lKHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQpO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1BY2NvdW50L3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB0aGlzLnNlYXJjaH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YS5saXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdHMgPSByZXNwb25zZS5kaWN0c1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvcGVuTW9kYWwoZmxhZywgZGF0YSl7XG4gICAgICAgICAgICB0aGlzLiRyZWZzWydmb3JtVmFsaWRhdGUnXS5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgY2xlYXJPYmplY3QodGhpcy5mb3JtVmFsaWRhdGUpIFxuICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLm1vZGFsVHlwZSA9IGZsYWdcbiAgICAgICAgICAgIGlmKGZsYWcgPT0gJ2VkaXQnKXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZm9ybVZhbGlkYXRlLCBkYXRhKVxuICAgICAgICAgICAgfSAgXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZVN1Ym1pdCAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy4kcmVmc1tuYW1lXS52YWxpZGF0ZSgodmFsaWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5tb2RhbFR5cGUgPT0gJ2NyZWF0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEYXRhKClcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXREYXRhKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoJ+ivt+WujOWWhOS/oeaBryEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZU1vZGFsKCl7IC8v5YWz6Zet5by55qGGXG4gICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZURhdGEoKXsgLy/liJvlu7rotKbmiLdcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htQWNjb3VudC9hZGQnO1xuICAgICAgICAgICAgdGhpcy5mb3JtVmFsaWRhdGUub3BlbkRhdGUgPSB0aW1lVXRpbC5nZXRDdXJyZW50RGF0ZSh0aGlzLmZvcm1WYWxpZGF0ZS5vcGVuRGF0ZSlcbiAgICAgICAgICAgIHRoaXMuZm9ybVZhbGlkYXRlLmNsb3NlQWNjb3VudERhdGUgPSB0aW1lVXRpbC5nZXRDdXJyZW50RGF0ZSh0aGlzLmZvcm1WYWxpZGF0ZS5jbG9zZUFjY291bnREYXRlKVxuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YTogdGhpcy5mb3JtVmFsaWRhdGV9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5zdWNjZXNzKCfliJvlu7rmiJDlip8hJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGFnZSgxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXREYXRhKCl7IC8v57yW6L6R55So5oi3XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obUFjY291bnQvdXBkYXRlJztcbiAgICAgICAgICAgIHRoaXMuZm9ybVZhbGlkYXRlLm9wZW5EYXRlID0gdGltZVV0aWwuZ2V0Q3VycmVudERhdGUodGhpcy5mb3JtVmFsaWRhdGUub3BlbkRhdGUpXG4gICAgICAgICAgICB0aGlzLmZvcm1WYWxpZGF0ZS5jbG9zZUFjY291bnREYXRlID0gdGltZVV0aWwuZ2V0Q3VycmVudERhdGUodGhpcy5mb3JtVmFsaWRhdGUuY2xvc2VBY2NvdW50RGF0ZSlcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHRoaXMuZm9ybVZhbGlkYXRlfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2Uuc3VjY2Vzcygn5L+u5pS55oiQ5YqfIScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoMSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtRGVsZXRlKGRhdGEpeyAvL+ehruiupOWIoOmZpFxuICAgICAgICAgICAgdGhpcy4kTW9kYWwuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliKDpmaQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8cD7noa7orqTopoHliKDpmaTor6XmlbDmja7lkJfvvJ88L3A+JyxcbiAgICAgICAgICAgICAgICBvbk9rOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRGF0YShkYXRhLmlkKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZURhdGEoZGF0YUlkKXsgLy/liKDpmaRcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htQWNjb3VudC9kZWxldGUnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2lkOiBkYXRhSWR9IH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLnN1Y2Nlc3MoJ+WIoOmZpOaIkOWKnyEnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoMSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRlbWl0KCdicmVhZGNydW1iJyk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSgxKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYWNjb3VudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=