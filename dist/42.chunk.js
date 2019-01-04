webpackJsonp([42],{

/***/ 1003:
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
            columns: [
            // {title: '资金渠道编号', key: 'code'},
            { title: '渠道名称', key: 'channelName' }, { title: '创建日期', key: 'channelDate' }, { title: '渠道证件类型', key: 'channelIdTypeText' }, { title: '渠道证件号码', key: 'channelNumber' }, { title: '联系人', key: 'contacts' }, { title: '联系电话', key: 'contactPhone' }, { title: '是否启用', key: 'channelStateText' }, { title: '备注', key: 'remarks' }, { title: '业务笔数', key: 'businessNum' }, {
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
                channelName: '', //渠道名称
                channelDate: '', //创建日期
                channelIdType: '', //渠道证件类型
                channelNumber: '', //渠道证件号码
                contacts: '', //联系人
                contactPhone: '', //联系电话
                channelState: '', //是否启用
                remarks: '', //备注
                businessNum: '' //业务笔数
            },
            ruleValidate: {
                channelName: [{ required: true, message: '渠道名称不能为空', trigger: 'blur' }],
                channelDate: [{ required: false, message: '渠道创建日期不能为空' }],
                channelIdType: [{ required: true, message: '请选择渠道证件类型', trigger: 'blur' }],
                channelNumber: [{ required: true, message: '请填写证件号码', trigger: 'blur' }],
                contacts: [{ required: true, message: '请填写联系人', trigger: 'change' }],
                contactPhone: [{ required: true, message: '请填写联系号码', trigger: 'blur' }],
                channelState: [{ required: false, message: '请选择是否开启', trigger: 'blur' }],
                remarks: [{ required: false, message: '请填写备注', trigger: 'blur' }]
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
            this.$axios.options.url = '/houseMortgage/hmConfigFundchannal/read/list';
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
            this.$axios.options.url = '/houseMortgage/hmConfigFundchannal/add';
            this.formValidate.channelDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.channelDate);
            this.$axios.request({ data: this.formValidate }).then(function (res) {
                _this5.$Message.success('创建成功!');
                _this5.showModal = false;
                _this5.changePage(1);
            });
        },
        editData: function editData() {
            var _this6 = this;

            //编辑用户
            this.$axios.options.url = '/houseMortgage/hmConfigFundchannal/update';
            this.formValidate.channelDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.channelDate);
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
            this.$axios.options.url = '/houseMortgage/hmConfigFundchannal/delete';
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

/***/ }),

/***/ 1148:
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
      "width": 720
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
      "label-width": 120
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "渠道名称",
      "prop": "channelName"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请输入渠道名称"
    },
    model: {
      value: (_vm.formValidate.channelName),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "channelName", $$v)
      },
      expression: "formValidate.channelName"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "创建日期",
      "prop": "channelDate"
    }
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "date",
      "editable": false,
      "placeholder": "请填写创建日期"
    },
    model: {
      value: (_vm.formValidate.channelDate),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "channelDate", $$v)
      },
      expression: "formValidate.channelDate"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "渠道证件类型",
      "prop": "channelIdType"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择渠道证件类型"
    },
    model: {
      value: (_vm.formValidate.channelIdType),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "channelIdType", $$v)
      },
      expression: "formValidate.channelIdType"
    }
  }, _vm._l((_vm.dicts.CHANNELIDTYPE), function(item) {
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
      "label": "证件号码",
      "prop": "channelNumber"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写证件号码"
    },
    model: {
      value: (_vm.formValidate.channelNumber),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "channelNumber", $$v)
      },
      expression: "formValidate.channelNumber"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "联系人",
      "prop": "contacts"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写联系人"
    },
    model: {
      value: (_vm.formValidate.contacts),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "contacts", $$v)
      },
      expression: "formValidate.contacts"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "联系电话",
      "prop": "contactPhone"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写联系电话"
    },
    model: {
      value: (_vm.formValidate.contactPhone),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "contactPhone", $$v)
      },
      expression: "formValidate.contactPhone"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "是否开启",
      "prop": "channelState"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择是否开启"
    },
    model: {
      value: (_vm.formValidate.channelState),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "channelState", $$v)
      },
      expression: "formValidate.channelState"
    }
  }, _vm._l((_vm.dicts.CHANNELSTATE), function(item) {
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
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "业务笔数",
      "prop": "businessNum"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写业务笔数"
    },
    model: {
      value: (_vm.formValidate.businessNum),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "businessNum", $$v)
      },
      expression: "formValidate.businessNum"
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
     __webpack_require__(202).rerender("data-v-68438f92", module.exports)
  }
}

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1003),
  /* template */
  __webpack_require__(1148),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/fundPath.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fundPath.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68438f92", Component.options)
  } else {
    hotAPI.reload("data-v-68438f92", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mdW5kUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZnVuZFBhdGgudnVlPzU1NDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Z1bmRQYXRoLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2hvd01vZGFsIiwibW9kYWxUeXBlIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJkaWN0cyIsImNvbHVtbnMiLCJ0aXRsZSIsImtleSIsImFsaWduIiwicmVuZGVyIiwiaCIsInBhcmFtcyIsInN0eWxlIiwib24iLCJjbGljayIsIm9wZW5Nb2RhbCIsInJvdyIsInByb3BzIiwiY29udGVudCIsInBsYWNlbWVudCIsInR5cGUiLCJzaXplIiwiY29sb3IiLCJjb25maXJtRGVsZXRlIiwiZm9ybVZhbGlkYXRlIiwiY2hhbm5lbE5hbWUiLCJjaGFubmVsRGF0ZSIsImNoYW5uZWxJZFR5cGUiLCJjaGFubmVsTnVtYmVyIiwiY29udGFjdHMiLCJjb250YWN0UGhvbmUiLCJjaGFubmVsU3RhdGUiLCJyZW1hcmtzIiwiYnVzaW5lc3NOdW0iLCJydWxlVmFsaWRhdGUiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJ0cmlnZ2VyIiwibWV0aG9kcyIsImNoYW5nZVBhZ2UiLCJwYWdlTnVtIiwidGltZVV0aWwiLCJnZXREYXRlVGltZSIsIiRheGlvcyIsIm9wdGlvbnMiLCJ1cmwiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiaHR0cENvZGUiLCIkTWVzc2FnZSIsImVycm9yIiwibXNnIiwiRVJST1IiLCJsaXN0IiwiY2F0Y2giLCJmbGFnIiwiJHJlZnMiLCJyZXNldEZpZWxkcyIsImNsZWFyT2JqZWN0IiwiT2JqZWN0IiwiYXNzaWduIiwiaGFuZGxlU3VibWl0IiwibmFtZSIsInZhbGlkYXRlIiwidmFsaWQiLCJjcmVhdGVEYXRhIiwiZWRpdERhdGEiLCJjbG9zZU1vZGFsIiwiZ2V0Q3VycmVudERhdGUiLCJyZXMiLCJzdWNjZXNzIiwiJE1vZGFsIiwiY29uZmlybSIsIm9uT2siLCJkZWxldGVEYXRhIiwiaWQiLCJvbkNhbmNlbCIsImRhdGFJZCIsIm1vdW50ZWQiLCIkcm9vdCIsImV2ZW50SHViIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsK0RBQWU7QUFDWEEsUUFEVyxrQkFDSjtBQUFBOztBQUNILFlBQU1DLFFBQVEsSUFBZDtBQUNBLGVBQU87QUFDSEMsa0JBQU0sS0FESDtBQUVIQyx1QkFBVyxLQUZSO0FBR0hDLHVCQUFXLEVBSFI7QUFJSEMsb0JBQVE7QUFDSkMsdUJBQU8sQ0FESDtBQUVKQywwQkFBVSxLQUFLQyxPQUFMLENBQWFEO0FBRm5CLGFBSkw7QUFRSEUsb0JBQVEsRUFSTDtBQVNIQyxxQkFBUyxFQVROO0FBVUhDLHVCQUFXLEVBVlI7QUFXSEMsbUJBQU87QUFDSEMsNEJBREcsd0JBQ1VDLElBRFYsRUFDZ0I7QUFDZiwyQkFBT0EsUUFBUWIsTUFBTUksTUFBTixDQUFhVSxhQUFyQixJQUFzQ0QsS0FBS0UsT0FBTCxLQUFpQmYsTUFBTUksTUFBTixDQUFhVSxhQUFiLENBQTJCQyxPQUEzQixLQUF1Q2YsTUFBTU8sT0FBTixDQUFjUyxXQUFuSDtBQUNIO0FBSEUsYUFYSjtBQWdCSEMsaUJBQUs7QUFDREwsNEJBREMsd0JBQ1lDLElBRFosRUFDa0I7QUFDZiwyQkFBT0EsUUFBUWIsTUFBTUksTUFBTixDQUFhYyxlQUFyQixJQUF3Q0wsS0FBS0UsT0FBTCxLQUFpQmYsTUFBTUksTUFBTixDQUFhYyxlQUFiLENBQTZCSCxPQUE3QixLQUF5Q2YsTUFBTU8sT0FBTixDQUFjUyxXQUF2SDtB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QUFDQSxnR0FBZ0csYUFBYTtBQUM3RztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNuVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxXQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoiNDIuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RpbWVVdGlsLCBjbGVhck9iamVjdH0gZnJvbSAnLi4vbGlicy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9yZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgbW9kYWxUeXBlOiAnJyxcbiAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLiRjb25maWcucGFnZVNpemVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0dXM6IFtdLFxuICAgICAgICAgICAgaGFuZGxlcjogW10sXG4gICAgICAgICAgICBhcHBsaWNhbnQ6IFtdLFxuICAgICAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZSAmJiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZCAmJiBkYXRlLnZhbHVlT2YoKSA+IF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kLnZhbHVlT2YoKSAtIF90aGlzLiRjb25maWcubWlsbHNlY29uZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kOiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWREYXRlKGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUgJiYgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCAmJiBkYXRlLnZhbHVlT2YoKSA8IF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQudmFsdWVPZigpICsgX3RoaXMuJGNvbmZpZy5taWxsc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgZGljdHM6IFtdLFxuICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgIC8vIHt0aXRsZTogJ+i1hOmHkea4oOmBk+e8luWPtycsIGtleTogJ2NvZGUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmuKDpgZPlkI3np7AnLCBrZXk6ICdjaGFubmVsTmFtZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+WIm+W7uuaXpeacnycsIGtleTogJ2NoYW5uZWxEYXRlJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5rig6YGT6K+B5Lu257G75Z6LJywga2V5OiAnY2hhbm5lbElkVHlwZVRleHQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmuKDpgZPor4Hku7blj7fnoIEnLCBrZXk6ICdjaGFubmVsTnVtYmVyJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn6IGU57O75Lq6Jywga2V5OiAnY29udGFjdHMnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfogZTns7vnlLXor50nLCBrZXk6ICdjb250YWN0UGhvbmUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmmK/lkKblkK/nlKgnLCBrZXk6ICdjaGFubmVsU3RhdGVUZXh0J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5aSH5rOoJywga2V5OiAncmVtYXJrcyd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+S4muWKoeeslOaVsCcsIGtleTogJ2J1c2luZXNzTnVtJ30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aTjeS9nCcsIGFsaWduOiAnY2VudGVyJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnZGl2JywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBwYXJhbXMucm93Lm11bHRpcGxlID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdjdXN0b21lckluZm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXJhbXM6IHtpZDogcGFyYW1zLnJvdy5pZCwgcGFnZU51bTogX3RoaXMuc2VhcmNoLnBhZ2VOdW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbCgnZWRpdCcgLCBwYXJhbXMucm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdUb29sdGlwJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn57yW6L6RJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ0ljb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21kLWNyZWF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjk5MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogcGFyYW1zLnJvdy5tdWx0aXBsZSA/ICdibG9jaycgOiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRGVsZXRlKHBhcmFtcy5yb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfliKDpmaQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmYzMzQ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBmb3JtVmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICBjaGFubmVsTmFtZTogJycsIC8v5rig6YGT5ZCN56ewXG4gICAgICAgICAgICAgICAgY2hhbm5lbERhdGU6ICcnLCAvL+WIm+W7uuaXpeacn1xuICAgICAgICAgICAgICAgIGNoYW5uZWxJZFR5cGU6ICcnLCAvL+a4oOmBk+ivgeS7tuexu+Wei1xuICAgICAgICAgICAgICAgIGNoYW5uZWxOdW1iZXI6ICcnLCAvL+a4oOmBk+ivgeS7tuWPt+eggVxuICAgICAgICAgICAgICAgIGNvbnRhY3RzOiAnJywgLy/ogZTns7vkurpcbiAgICAgICAgICAgICAgICBjb250YWN0UGhvbmU6ICcnLCAvL+iBlOezu+eUteivnVxuICAgICAgICAgICAgICAgIGNoYW5uZWxTdGF0ZTogJycsIC8v5piv5ZCm5ZCv55SoXG4gICAgICAgICAgICAgICAgcmVtYXJrczogJycsIC8v5aSH5rOoXG4gICAgICAgICAgICAgICAgYnVzaW5lc3NOdW06ICcnIC8v5Lia5Yqh56yU5pWwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnVsZVZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbE5hbWU6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+a4oOmBk+WQjeensOS4jeiDveS4uuepuicsIHRyaWdnZXI6ICdibHVyJyB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjaGFubmVsRGF0ZTogW1xuICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiBmYWxzZSwgbWVzc2FnZTogJ+a4oOmBk+WIm+W7uuaXpeacn+S4jeiDveS4uuepuid9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjaGFubmVsSWRUeXBlOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7fpgInmi6nmuKDpgZPor4Hku7bnsbvlnosnLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgY2hhbm5lbE51bWJlcjogW1xuICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+35aGr5YaZ6K+B5Lu25Y+356CBJywgdHJpZ2dlcjogJ2JsdXInIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7floavlhpnogZTns7vkuronLCB0cmlnZ2VyOiAnY2hhbmdlJyB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjb250YWN0UGhvbmU6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+Whq+WGmeiBlOezu+WPt+eggScsIHRyaWdnZXI6ICdibHVyJyB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjaGFubmVsU3RhdGU6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogZmFsc2UsIG1lc3NhZ2U6ICfor7fpgInmi6nmmK/lkKblvIDlkK8nLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVtYXJrczogW1xuICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiBmYWxzZSwgbWVzc2FnZTogJ+ivt+Whq+WGmeWkh+azqCcsIHRyaWdnZXI6ICdibHVyJyB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjaGFuZ2VQYWdlKHBhZ2VOdW0pIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5wYWdlTnVtID0gcGFnZU51bTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCA9IHRpbWVVdGlsLmdldERhdGVUaW1lKHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kID0gdGltZVV0aWwuZ2V0RGF0ZVRpbWUodGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZCk7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obUNvbmZpZ0Z1bmRjaGFubmFsL3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB0aGlzLnNlYXJjaH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YS5saXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdHMgPSByZXNwb25zZS5kaWN0c1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvcGVuTW9kYWwoZmxhZywgZGF0YSl7XG4gICAgICAgICAgICB0aGlzLiRyZWZzWydmb3JtVmFsaWRhdGUnXS5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgY2xlYXJPYmplY3QodGhpcy5mb3JtVmFsaWRhdGUpICBcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5tb2RhbFR5cGUgPSBmbGFnXG4gICAgICAgICAgICBpZihmbGFnID09ICdlZGl0Jyl7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmZvcm1WYWxpZGF0ZSwgZGF0YSlcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVTdWJtaXQgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnNbbmFtZV0udmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubW9kYWxUeXBlID09ICdjcmVhdGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0RGF0YSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKCfor7flrozlloTkv6Hmga8hJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VNb2RhbCgpeyAvL+WFs+mXreW8ueahhlxuICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVEYXRhKCl7IC8v5Yib5bu66LSm5oi3XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obUNvbmZpZ0Z1bmRjaGFubmFsL2FkZCc7XG4gICAgICAgICAgICB0aGlzLmZvcm1WYWxpZGF0ZS5jaGFubmVsRGF0ZSA9IHRpbWVVdGlsLmdldEN1cnJlbnREYXRlKHRoaXMuZm9ybVZhbGlkYXRlLmNoYW5uZWxEYXRlKVxuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YTogdGhpcy5mb3JtVmFsaWRhdGV9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5zdWNjZXNzKCfliJvlu7rmiJDlip8hJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGFnZSgxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXREYXRhKCl7IC8v57yW6L6R55So5oi3XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obUNvbmZpZ0Z1bmRjaGFubmFsL3VwZGF0ZSc7XG4gICAgICAgICAgICB0aGlzLmZvcm1WYWxpZGF0ZS5jaGFubmVsRGF0ZSA9IHRpbWVVdGlsLmdldEN1cnJlbnREYXRlKHRoaXMuZm9ybVZhbGlkYXRlLmNoYW5uZWxEYXRlKVxuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YTogdGhpcy5mb3JtVmFsaWRhdGV9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5zdWNjZXNzKCfkv67mlLnmiJDlip8hJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGFnZSgxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm1EZWxldGUoZGF0YSl7IC8v56Gu6K6k5Yig6ZmkXG4gICAgICAgICAgICB0aGlzLiRNb2RhbC5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WIoOmZpCcsXG4gICAgICAgICAgICAgICAgY29udGVudDogJzxwPuehruiupOimgeWIoOmZpOivpeaVsOaNruWQl++8nzwvcD4nLFxuICAgICAgICAgICAgICAgIG9uT2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVEYXRhKGRhdGEuaWQpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlRGF0YShkYXRhSWQpeyAvL+WIoOmZpFxuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Db25maWdGdW5kY2hhbm5hbC9kZWxldGUnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2lkOiBkYXRhSWR9IH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLnN1Y2Nlc3MoJ+WIoOmZpOaIkOWKnyEnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoMSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRlbWl0KCdicmVhZGNydW1iJyk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSgxKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZnVuZFBhdGguanMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoISgnYnV0dG9uJyBpbiAkZXZlbnQpICYmIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKSkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdGb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlubGluZVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdJbnB1dCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjMwMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWFs+mUruWtl1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoLmtleXdvcmQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImtleXdvcmRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmtleXdvcmRcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0Zvcm1JdGVtJywgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImlvcy1zZWFyY2hcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jaGFuZ2VQYWdlKDEpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmkJzntKJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcImljb25cIjogXCJtZC1hZGRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuTW9kYWwoJ2NyZWF0ZScsIG51bGwpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwi5Yib5bu6XCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xlYXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJsb2FkaW5nXCI6IF92bS5sb2FkaW5nLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5kYXRhXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdQYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG90YWxcIjogX3ZtLnNlYXJjaC50b3RhbCxcbiAgICAgIFwiY3VycmVudFwiOiBfdm0uc2VhcmNoLnBhZ2VOdW0sXG4gICAgICBcInBhZ2Utc2l6ZVwiOiBfdm0uc2VhcmNoLnBhZ2VTaXplLFxuICAgICAgXCJzaG93LWVsZXZhdG9yXCI6IFwiXCIsXG4gICAgICBcInNob3ctdG90YWxcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jaGFuZ2VQYWdlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbGVhclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnTW9kYWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCLmt7vliqDmuKDpgZNcIixcbiAgICAgIFwid2lkdGhcIjogNzIwXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJvbi1jYW5jZWxcIjogX3ZtLmNsb3NlTW9kYWxcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zaG93TW9kYWwpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc2hvd01vZGFsID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzaG93TW9kYWxcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCBbX2MoJ0Zvcm0nLCB7XG4gICAgcmVmOiBcImZvcm1WYWxpZGF0ZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5mb3JtVmFsaWRhdGUsXG4gICAgICBcInJ1bGVzXCI6IF92bS5ydWxlVmFsaWRhdGUsXG4gICAgICBcIndpZHRoXCI6IDQwMCxcbiAgICAgIFwibGFiZWwtd2lkdGhcIjogMTIwXG4gICAgfVxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi5rig6YGT5ZCN56ewXCIsXG4gICAgICBcInByb3BcIjogXCJjaGFubmVsTmFtZVwiXG4gICAgfVxuICB9LCBbX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36L6T5YWl5rig6YGT5ZCN56ewXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5mb3JtVmFsaWRhdGUuY2hhbm5lbE5hbWUpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcImNoYW5uZWxOYW1lXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5jaGFubmVsTmFtZVwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLliJvlu7rml6XmnJ9cIixcbiAgICAgIFwicHJvcFwiOiBcImNoYW5uZWxEYXRlXCJcbiAgICB9XG4gIH0sIFtfYygnRGF0ZVBpY2tlcicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjIyMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJkYXRlXCIsXG4gICAgICBcImVkaXRhYmxlXCI6IGZhbHNlLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeWIm+W7uuaXpeacn1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmNoYW5uZWxEYXRlKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJjaGFubmVsRGF0ZVwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtVmFsaWRhdGUuY2hhbm5lbERhdGVcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIua4oOmBk+ivgeS7tuexu+Wei1wiLFxuICAgICAgXCJwcm9wXCI6IFwiY2hhbm5lbElkVHlwZVwiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+mAieaLqea4oOmBk+ivgeS7tuexu+Wei1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmNoYW5uZWxJZFR5cGUpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcImNoYW5uZWxJZFR5cGVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmNoYW5uZWxJZFR5cGVcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uZGljdHMuQ0hBTk5FTElEVFlQRSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLor4Hku7blj7fnoIFcIixcbiAgICAgIFwicHJvcFwiOiBcImNoYW5uZWxOdW1iZXJcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeivgeS7tuWPt+eggVwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmNoYW5uZWxOdW1iZXIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcImNoYW5uZWxOdW1iZXJcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmNoYW5uZWxOdW1iZXJcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuiBlOezu+S6ulwiLFxuICAgICAgXCJwcm9wXCI6IFwiY29udGFjdHNcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeiBlOezu+S6ulwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmNvbnRhY3RzKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJjb250YWN0c1wiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtVmFsaWRhdGUuY29udGFjdHNcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi6IGU57O755S16K+dXCIsXG4gICAgICBcInByb3BcIjogXCJjb250YWN0UGhvbmVcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeiBlOezu+eUteivnVwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmNvbnRhY3RQaG9uZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwiY29udGFjdFBob25lXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5jb250YWN0UGhvbmVcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuaYr+WQpuW8gOWQr1wiLFxuICAgICAgXCJwcm9wXCI6IFwiY2hhbm5lbFN0YXRlXCJcbiAgICB9XG4gIH0sIFtfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36YCJ5oup5piv5ZCm5byA5ZCvXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5mb3JtVmFsaWRhdGUuY2hhbm5lbFN0YXRlKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJjaGFubmVsU3RhdGVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmNoYW5uZWxTdGF0ZVwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5kaWN0cy5DSEFOTkVMU1RBVEUpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdPcHRpb24nLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInZhbHVlXCI6IGl0ZW0uaWRcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS50ZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi5aSH5rOoXCIsXG4gICAgICBcInByb3BcIjogXCJyZW1hcmtzXCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7floavlhpnlpIfms6hcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5yZW1hcmtzKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJyZW1hcmtzXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5yZW1hcmtzXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLkuJrliqHnrJTmlbBcIixcbiAgICAgIFwicHJvcFwiOiBcImJ1c2luZXNzTnVtXCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7floavlhpnkuJrliqHnrJTmlbBcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5idXNpbmVzc051bSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwiYnVzaW5lc3NOdW1cIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmJ1c2luZXNzTnVtXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiZm9vdGVyXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiZm9vdGVyXCJcbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcImxhcmdlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2xvc2VNb2RhbCgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwi5Y+W5raIXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIixcbiAgICAgIFwic2l6ZVwiOiBcImxhcmdlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaGFuZGxlU3VibWl0KCdmb3JtVmFsaWRhdGUnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIuehruWumlwiKV0pXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTY4NDM4ZjkyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjg0MzhmOTJcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy9mdW5kUGF0aC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNDhcbi8vIG1vZHVsZSBjaHVua3MgPSA0MiIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi9jb21wb25lbnRzL2Z1bmRQYXRoLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02ODQzOGY5MlxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9mdW5kUGF0aC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvZnVuZFBhdGgudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZnVuZFBhdGgudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY4NDM4ZjkyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjg0MzhmOTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL2Z1bmRQYXRoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODg3XG4vLyBtb2R1bGUgY2h1bmtzID0gNDIiXSwic291cmNlUm9vdCI6IiJ9