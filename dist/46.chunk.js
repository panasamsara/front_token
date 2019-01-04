webpackJsonp([46],{

/***/ 1139:
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
      "width": 640
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
      "label-width": 100
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "渠道名称",
      "prop": "channalName"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请输入渠道名称"
    },
    model: {
      value: (_vm.formValidate.channalName),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "channalName", $$v)
      },
      expression: "formValidate.channalName"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "渠道类型",
      "prop": "channalType"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择渠道类型"
    },
    model: {
      value: (_vm.formValidate.channalType),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "channalType", $$v)
      },
      expression: "formValidate.channalType"
    }
  }, _vm._l((_vm.dicts.CHANNELTYPE), function(item) {
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
      "label": "联系人",
      "prop": "contact"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写联系人"
    },
    model: {
      value: (_vm.formValidate.contact),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "contact", $$v)
      },
      expression: "formValidate.contact"
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
      "label": "创建渠道日期",
      "prop": "channalDate"
    }
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "date",
      "editable": false,
      "placeholder": "请填写创建渠道日期"
    },
    model: {
      value: (_vm.formValidate.channalDate),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "channalDate", $$v)
      },
      expression: "formValidate.channalDate"
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
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "账户",
      "prop": "bankAccount"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写账户"
    },
    model: {
      value: (_vm.formValidate.bankAccount),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "bankAccount", $$v)
      },
      expression: "formValidate.bankAccount"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "开户银行",
      "prop": "bankNo"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择开户银行"
    },
    model: {
      value: (_vm.formValidate.bankNo),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "bankNo", $$v)
      },
      expression: "formValidate.bankNo"
    }
  }, _vm._l((_vm.banks), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.bankName
      }
    }, [_vm._v("\n                                    " + _vm._s(item.bankName) + "\n                                ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "是否开启",
      "prop": "channalStatic"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择是否开启"
    },
    model: {
      value: (_vm.formValidate.channalStatic),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "channalStatic", $$v)
      },
      expression: "formValidate.channalStatic"
    }
  }, _vm._l((_vm.dicts.CHANNELSTATIC), function(item) {
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
     __webpack_require__(202).rerender("data-v-56507f92", module.exports)
  }
}

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(983),
  /* template */
  __webpack_require__(1139),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/agencyPath.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] agencyPath.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56507f92", Component.options)
  } else {
    hotAPI.reload("data-v-56507f92", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 983:
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
            banks: [],
            columns: [
            // {title: '渠道编号', key: 'code'},
            { title: '渠道名称', key: 'channalName' }, { title: '创建日期', key: 'channalDate' }, { title: '渠道类型', key: 'channalTypeText' }, { title: '联系人', key: 'contact' }, { title: '联系电话', key: 'contactPhone' }, { title: '是否启用', key: 'channalStaticText' }, { title: '业务笔数', key: 'business' }, { title: '备注', key: 'remarks' }, {
                title: '操作', align: 'center', render: function render(h, params) {
                    return h('div', [h('a', {
                        style: {
                            // display: params.row.multiple ? 'none' : 'block'
                        },
                        on: {
                            click: function click() {
                                // this.$router.push({
                                //     name: 'review',
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
                channalName: '', //渠道名称
                channalDate: '', //创建日期
                channalType: '', //渠道类型
                contact: '', //联系人
                contactPhone: '', //联系电话
                channalStatic: '', //是否启用
                business: '', //业务笔数
                remarks: '' //备注
            },
            ruleValidate: {
                channalName: [{ required: true, message: '渠道名称不能为空', trigger: 'blur' }],
                channalType: [{ required: true, message: '请选择渠道类型' }],
                contact: [{ required: true, message: '请填写联系电话', trigger: 'blur' }]
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
            this.$axios.options.url = '/houseMortgage/hmConfigChannal/read/list';
            this.$axios.request({ data: this.search }).then(function (response) {
                _this3.loading = false;
                if (response.httpCode !== 200) {
                    _this3.data = [];
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.data = response.data.list;
                _this3.search.total = response.data.total;
                _this3.dicts = response.dicts;
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
        modalOK: function modalOK() {
            this.showModal = false;
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

            //创建
            this.$axios.options.url = '/houseMortgage/hmConfigChannal/add';
            this.formValidate.channalDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.channalDate);
            this.$axios.request({ data: this.formValidate }).then(function (res) {
                _this5.showModal = false;
                _this5.changePage(1);
            });
        },
        editData: function editData() {
            var _this6 = this;

            //编辑
            this.$axios.options.url = '/houseMortgage/hmConfigChannal/update';
            this.formValidate.channalDate = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(this.formValidate.channalDate);
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
            this.$axios.options.url = '/houseMortgage/hmConfigChannal/delete';
            this.$axios.request({ data: { id: dataId } }).then(function (res) {
                _this8.$Message.success('删除成功!');
                _this8.changePage(1);
            });
        },
        getBanks: function getBanks() {
            var _this9 = this;

            this.$axios.options.url = '/houseMortgage/hmBank/read/list';
            this.$axios.request().then(function (res) {
                _this9.banks = res.data.list;
            });
        }
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        this.changePage(1);
        this.getBanks();
    }
});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWdlbmN5UGF0aC52dWU/YTI5MSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWdlbmN5UGF0aC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWdlbmN5UGF0aC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2hvd01vZGFsIiwibW9kYWxUeXBlIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJkaWN0cyIsImJhbmtzIiwiY29sdW1ucyIsInRpdGxlIiwia2V5IiwiYWxpZ24iLCJyZW5kZXIiLCJoIiwicGFyYW1zIiwic3R5bGUiLCJvbiIsImNsaWNrIiwib3Blbk1vZGFsIiwicm93IiwicHJvcHMiLCJjb250ZW50IiwicGxhY2VtZW50IiwidHlwZSIsInNpemUiLCJjb2xvciIsImNvbmZpcm1EZWxldGUiLCJmb3JtVmFsaWRhdGUiLCJjaGFubmFsTmFtZSIsImNoYW5uYWxEYXRlIiwiY2hhbm5hbFR5cGUiLCJjb250YWN0IiwiY29udGFjdFBob25lIiwiY2hhbm5hbFN0YXRpYyIsImJ1c2luZXNzIiwicmVtYXJrcyIsInJ1bGVWYWxpZGF0ZSIsInJlcXVpcmVkIiwibWVzc2FnZSIsInRyaWdnZXIiLCJtZXRob2RzIiwiY2hhbmdlUGFnZSIsInBhZ2VOdW0iLCJ0aW1lVXRpbCIsImdldERhdGVUaW1lIiwiJGF4aW9zIiwib3B0aW9ucyIsInVybCIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJodHRwQ29kZSIsIiRNZXNzYWdlIiwiZXJyb3IiLCJtc2ciLCJFUlJPUiIsImxpc3QiLCJjYXRjaCIsImZsYWciLCIkcmVmcyIsInJlc2V0RmllbGRzIiwiY2xlYXJPYmplY3QiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2RhbE9LIiwiaGFuZGxlU3VibWl0IiwibmFtZSIsInZhbGlkYXRlIiwidmFsaWQiLCJjcmVhdGVEYXRhIiwiZWRpdERhdGEiLCJjbG9zZU1vZGFsIiwiZ2V0Q3VycmVudERhdGUiLCJyZXMiLCJzdWNjZXNzIiwiJE1vZGFsIiwiY29uZmlybSIsIm9uT2siLCJkZWxldGVEYXRhIiwiaWQiLCJvbkNhbmNlbCIsImRhdGFJZCIsImdldEJhbmtzIiwibW91bnRlZCIsIiRyb290IiwiZXZlbnRIdWIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRyxhQUFhO0FBQzdHO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNB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THlDLGdCQXZGSyxzQkF1Rks7QUFBQTs7QUFDTixpQkFBS3JDLE1BQUwsQ0FBWUMsT0FBWixDQUFvQkMsR0FBcEIsR0FBMEIsaUNBQTFCO0FBQ0EsaUJBQUtGLE1BQUwsQ0FBWUcsT0FBWixHQUFzQkMsSUFBdEIsQ0FBMkIsVUFBQ3dCLEdBQUQsRUFBTztBQUM5Qix1QkFBS2xFLEtBQUwsR0FBYWtFLElBQUl4RixJQUFKLENBQVN1RSxJQUF0QjtBQUNILGFBRkQ7QUFHSDtBQTVGSSxLQTFIRTtBQXdOWDJCLFdBeE5XLHFCQXdORDtBQUNOLGFBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsS0FBcEIsQ0FBMEIsWUFBMUI7QUFDQSxhQUFLN0MsVUFBTCxDQUFnQixDQUFoQjtBQUNBLGFBQUt5QyxRQUFMO0FBQ0g7QUE1TlUsQ0FBZixFIiwiZmlsZSI6IjQ2LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBvbjoge1xuICAgICAgXCJrZXl1cFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCEoJ2J1dHRvbicgaW4gJGV2ZW50KSAmJiBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIikpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgX3ZtLmNoYW5nZVBhZ2UoMSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnRm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpbmxpbmVcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnSW5wdXQnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIzMDBweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLlhbPplK7lrZdcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaC5rZXl3b3JkKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJrZXl3b3JkXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5rZXl3b3JkXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIFtfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJpb3Mtc2VhcmNoXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5pCc57SiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdCdXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZnJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiLFxuICAgICAgXCJpY29uXCI6IFwibWQtYWRkXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3Blbk1vZGFsKCdjcmVhdGUnLCBudWxsKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIuWIm+W7ulwiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1RhYmxlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibG9hZGluZ1wiOiBfdm0ubG9hZGluZyxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1ucyxcbiAgICAgIFwiZGF0YVwiOiBfdm0uZGF0YVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUGFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvdGFsXCI6IF92bS5zZWFyY2gudG90YWwsXG4gICAgICBcImN1cnJlbnRcIjogX3ZtLnNlYXJjaC5wYWdlTnVtLFxuICAgICAgXCJwYWdlLXNpemVcIjogX3ZtLnNlYXJjaC5wYWdlU2l6ZSxcbiAgICAgIFwic2hvdy1lbGV2YXRvclwiOiBcIlwiLFxuICAgICAgXCJzaG93LXRvdGFsXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uY2hhbmdlUGFnZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xlYXJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ01vZGFsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwi5re75Yqg5rig6YGTXCIsXG4gICAgICBcIndpZHRoXCI6IDY0MFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dNb2RhbCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5zaG93TW9kYWwgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNob3dNb2RhbFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIFtfYygnRm9ybScsIHtcbiAgICByZWY6IFwiZm9ybVZhbGlkYXRlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibW9kZWxcIjogX3ZtLmZvcm1WYWxpZGF0ZSxcbiAgICAgIFwicnVsZXNcIjogX3ZtLnJ1bGVWYWxpZGF0ZSxcbiAgICAgIFwid2lkdGhcIjogNDAwLFxuICAgICAgXCJsYWJlbC13aWR0aFwiOiAxMDBcbiAgICB9XG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLmuKDpgZPlkI3np7BcIixcbiAgICAgIFwicHJvcFwiOiBcImNoYW5uYWxOYW1lXCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7fovpPlhaXmuKDpgZPlkI3np7BcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5jaGFubmFsTmFtZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwiY2hhbm5hbE5hbWVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmNoYW5uYWxOYW1lXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIua4oOmBk+exu+Wei1wiLFxuICAgICAgXCJwcm9wXCI6IFwiY2hhbm5hbFR5cGVcIlxuICAgIH1cbiAgfSwgW19jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7fpgInmi6nmuKDpgZPnsbvlnotcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5jaGFubmFsVHlwZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwiY2hhbm5hbFR5cGVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmNoYW5uYWxUeXBlXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLmRpY3RzLkNIQU5ORUxUWVBFKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLogZTns7vkurpcIixcbiAgICAgIFwicHJvcFwiOiBcImNvbnRhY3RcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeiBlOezu+S6ulwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmNvbnRhY3QpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcImNvbnRhY3RcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmNvbnRhY3RcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi6IGU57O755S16K+dXCIsXG4gICAgICBcInByb3BcIjogXCJjb250YWN0UGhvbmVcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeiBlOezu+eUteivnVwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmNvbnRhY3RQaG9uZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwiY29udGFjdFBob25lXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5jb250YWN0UGhvbmVcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuWIm+W7uua4oOmBk+aXpeacn1wiLFxuICAgICAgXCJwcm9wXCI6IFwiY2hhbm5hbERhdGVcIlxuICAgIH1cbiAgfSwgW19jKCdEYXRlUGlja2VyJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMjAwcHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImRhdGVcIixcbiAgICAgIFwiZWRpdGFibGVcIjogZmFsc2UsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+35aGr5YaZ5Yib5bu65rig6YGT5pel5pyfXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5mb3JtVmFsaWRhdGUuY2hhbm5hbERhdGUpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcImNoYW5uYWxEYXRlXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5jaGFubmFsRGF0ZVwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLkuJrliqHnrJTmlbBcIixcbiAgICAgIFwicHJvcFwiOiBcImJ1c2luZXNzXCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7floavlhpnkuJrliqHnrJTmlbBcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5idXNpbmVzcyksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwiYnVzaW5lc3NcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmJ1c2luZXNzXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLotKbmiLdcIixcbiAgICAgIFwicHJvcFwiOiBcImJhbmtBY2NvdW50XCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7floavlhpnotKbmiLdcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5iYW5rQWNjb3VudCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwiYmFua0FjY291bnRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmJhbmtBY2NvdW50XCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuW8gOaIt+mTtuihjFwiLFxuICAgICAgXCJwcm9wXCI6IFwiYmFua05vXCJcbiAgICB9XG4gIH0sIFtfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36YCJ5oup5byA5oi36ZO26KGMXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5mb3JtVmFsaWRhdGUuYmFua05vKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJiYW5rTm9cIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmJhbmtOb1wiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5iYW5rcyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5iYW5rTmFtZVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmJhbmtOYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuaYr+WQpuW8gOWQr1wiLFxuICAgICAgXCJwcm9wXCI6IFwiY2hhbm5hbFN0YXRpY1wiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+mAieaLqeaYr+WQpuW8gOWQr1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLmNoYW5uYWxTdGF0aWMpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcImNoYW5uYWxTdGF0aWNcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmNoYW5uYWxTdGF0aWNcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uZGljdHMuQ0hBTk5FTFNUQVRJQyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLlpIfms6hcIixcbiAgICAgIFwicHJvcFwiOiBcInJlbWFya3NcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeWkh+azqFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLnJlbWFya3MpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcInJlbWFya3NcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLnJlbWFya3NcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJmb290ZXJcIlxuICAgIH0sXG4gICAgc2xvdDogXCJmb290ZXJcIlxuICB9LCBbX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzaXplXCI6IFwibGFyZ2VcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jbG9zZU1vZGFsKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLlj5bmtohcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiLFxuICAgICAgXCJzaXplXCI6IFwibGFyZ2VcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5oYW5kbGVTdWJtaXQoJ2Zvcm1WYWxpZGF0ZScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwi56Gu5a6aXCIpXSldLCAxKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTY1MDdmOTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01NjUwN2Y5MlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL2FnZW5jeVBhdGgudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gNDYiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9hZ2VuY3lQYXRoLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NjUwN2Y5MlxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9hZ2VuY3lQYXRoLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy9hZ2VuY3lQYXRoLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFnZW5jeVBhdGgudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU2NTA3ZjkyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTY1MDdmOTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL2FnZW5jeVBhdGgudnVlXG4vLyBtb2R1bGUgaWQgPSA4Njdcbi8vIG1vZHVsZSBjaHVua3MgPSA0NiIsImltcG9ydCB7dGltZVV0aWwsIGNsZWFyT2JqZWN0fSBmcm9tICcuLi9saWJzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBtb2RhbFR5cGU6ICcnLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMuJGNvbmZpZy5wYWdlU2l6ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czogW10sXG4gICAgICAgICAgICBoYW5kbGVyOiBbXSxcbiAgICAgICAgICAgIGFwcGxpY2FudDogW10sXG4gICAgICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZShkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlICYmIF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kICYmIGRhdGUudmFsdWVPZigpID4gX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQudmFsdWVPZigpIC0gX3RoaXMuJGNvbmZpZy5taWxsc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZSAmJiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ICYmIGRhdGUudmFsdWVPZigpIDwgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydC52YWx1ZU9mKCkgKyBfdGhpcy4kY29uZmlnLm1pbGxzZWNvbmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBkaWN0czogW10sXG4gICAgICAgICAgICBiYW5rczogW10sXG4gICAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICAgICAgLy8ge3RpdGxlOiAn5rig6YGT57yW5Y+3Jywga2V5OiAnY29kZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+a4oOmBk+WQjeensCcsIGtleTogJ2NoYW5uYWxOYW1lJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5Yib5bu65pel5pyfJywga2V5OiAnY2hhbm5hbERhdGUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmuKDpgZPnsbvlnosnLCBrZXk6ICdjaGFubmFsVHlwZVRleHQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfogZTns7vkuronLCBrZXk6ICdjb250YWN0J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn6IGU57O755S16K+dJywga2V5OiAnY29udGFjdFBob25lJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5piv5ZCm5ZCv55SoJywga2V5OiAnY2hhbm5hbFN0YXRpY1RleHQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfkuJrliqHnrJTmlbAnLCBrZXk6ICdidXNpbmVzcyd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+Wkh+azqCcsIGtleTogJ3JlbWFya3MnfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pON5L2cJywgYWxpZ246ICdjZW50ZXInLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdkaXYnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IHBhcmFtcy5yb3cubXVsdGlwbGUgPyAnbm9uZScgOiAnYmxvY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogJ3JldmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhcmFtczoge2lkOiBwYXJhbXMucm93LmlkLCBwYWdlTnVtOiBfdGhpcy5zZWFyY2gucGFnZU51bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKCdlZGl0JyAsIHBhcmFtcy5yb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfnvJbovpEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY3JlYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBwYXJhbXMucm93Lm11bHRpcGxlID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1EZWxldGUocGFyYW1zLnJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnVG9vbHRpcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WIoOmZpCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdJY29uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZC1jbG9zZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjMzNDQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBmb3JtVmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5hbE5hbWU6ICcnLCAvL+a4oOmBk+WQjeensFxuICAgICAgICAgICAgICAgICAgICBjaGFubmFsRGF0ZTogJycsIC8v5Yib5bu65pel5pyfXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uYWxUeXBlOiAnJywgLy/muKDpgZPnsbvlnotcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdDogJycsIC8v6IGU57O75Lq6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RQaG9uZTogJycsIC8v6IGU57O755S16K+dXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uYWxTdGF0aWM6ICcnLCAvL+aYr+WQpuWQr+eUqFxuICAgICAgICAgICAgICAgICAgICBidXNpbmVzczogJycsIC8v5Lia5Yqh56yU5pWwXG4gICAgICAgICAgICAgICAgICAgIHJlbWFya3M6ICcnLCAvL+Wkh+azqFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcnVsZVZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5uYWxOYW1lOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn5rig6YGT5ZCN56ew5LiN6IO95Li656m6JywgdHJpZ2dlcjogJ2JsdXInIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5hbFR5cGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7fpgInmi6nmuKDpgZPnsbvlnosnLCB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3Q6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7floavlhpnogZTns7vnlLXor50nLCB0cmlnZ2VyOiAnYmx1cicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHsgdHlwZTogJ2VtYWlsJywgbWVzc2FnZTogJ0luY29ycmVjdCBlbWFpbCBmb3JtYXQnLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjaGFuZ2VQYWdlKHBhZ2VOdW0pIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5wYWdlTnVtID0gcGFnZU51bTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCA9IHRpbWVVdGlsLmdldERhdGVUaW1lKHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kID0gdGltZVV0aWwuZ2V0RGF0ZVRpbWUodGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZCk7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obUNvbmZpZ0NoYW5uYWwvcmVhZC9saXN0JztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHRoaXMuc2VhcmNofSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhLmxpc3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2gudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdHMgPSByZXNwb25zZS5kaWN0c1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5Nb2RhbChmbGFnLCBkYXRhKXtcbiAgICAgICAgICAgIHRoaXMuJHJlZnNbJ2Zvcm1WYWxpZGF0ZSddLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgICBjbGVhck9iamVjdCh0aGlzLmZvcm1WYWxpZGF0ZSkgICBcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5tb2RhbFR5cGUgPSBmbGFnXG4gICAgICAgICAgICBpZihmbGFnID09ICdlZGl0Jyl7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmZvcm1WYWxpZGF0ZSwgZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9kYWxPSygpe1xuICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVTdWJtaXQgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnNbbmFtZV0udmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubW9kYWxUeXBlID09ICdjcmVhdGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0RGF0YSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKCfor7flrozlloTkv6Hmga8hJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VNb2RhbCgpeyAvL+WFs+mXreW8ueahhlxuICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVEYXRhKCl7IC8v5Yib5bu6XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obUNvbmZpZ0NoYW5uYWwvYWRkJztcbiAgICAgICAgICAgIHRoaXMuZm9ybVZhbGlkYXRlLmNoYW5uYWxEYXRlID0gdGltZVV0aWwuZ2V0Q3VycmVudERhdGUodGhpcy5mb3JtVmFsaWRhdGUuY2hhbm5hbERhdGUpXG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB0aGlzLmZvcm1WYWxpZGF0ZX0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKDEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdERhdGEoKXsgLy/nvJbovpFcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htQ29uZmlnQ2hhbm5hbC91cGRhdGUnO1xuICAgICAgICAgICAgdGhpcy5mb3JtVmFsaWRhdGUuY2hhbm5hbERhdGUgPSB0aW1lVXRpbC5nZXRDdXJyZW50RGF0ZSh0aGlzLmZvcm1WYWxpZGF0ZS5jaGFubmFsRGF0ZSlcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHRoaXMuZm9ybVZhbGlkYXRlfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2Uuc3VjY2Vzcygn5L+u5pS55oiQ5YqfIScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoMSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtRGVsZXRlKGRhdGEpeyAvL+ehruiupOWIoOmZpFxuICAgICAgICAgICAgdGhpcy4kTW9kYWwuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliKDpmaQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8cD7noa7orqTopoHliKDpmaTor6XmlbDmja7lkJfvvJ88L3A+JyxcbiAgICAgICAgICAgICAgICBvbk9rOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRGF0YShkYXRhLmlkKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZURhdGEoZGF0YUlkKXsgLy/liKDpmaRcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htQ29uZmlnQ2hhbm5hbC9kZWxldGUnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2lkOiBkYXRhSWR9IH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLnN1Y2Nlc3MoJ+WIoOmZpOaIkOWKnyEnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoMSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBnZXRCYW5rcygpe1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1CYW5rL3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KCkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuYmFua3MgPSByZXMuZGF0YS5saXN0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRlbWl0KCdicmVhZGNydW1iJyk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSgxKTtcbiAgICAgICAgdGhpcy5nZXRCYW5rcygpXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FnZW5jeVBhdGguanMiXSwic291cmNlUm9vdCI6IiJ9