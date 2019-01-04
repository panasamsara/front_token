webpackJsonp([47],{

/***/ 1112:
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
      "label-width": 80
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "渠道名称",
      "prop": "pathname"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请输入渠道名称"
    },
    model: {
      value: (_vm.formValidate.pathname),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "pathname", $$v)
      },
      expression: "formValidate.pathname"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "渠道类型",
      "prop": "pathtype"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择渠道类型"
    },
    model: {
      value: (_vm.formValidate.pathtype),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "pathtype", $$v)
      },
      expression: "formValidate.pathtype"
    }
  }, [_c('Option', {
    attrs: {
      "value": "beijing"
    }
  }, [_vm._v("New York")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "shanghai"
    }
  }, [_vm._v("London")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "shenzhen"
    }
  }, [_vm._v("Sydney")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "渠道证件类型",
      "prop": "pathidtype"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择渠道类型"
    },
    model: {
      value: (_vm.formValidate.pathidtype),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "pathidtype", $$v)
      },
      expression: "formValidate.pathidtype"
    }
  }, [_c('Option', {
    attrs: {
      "value": "beijing"
    }
  }, [_vm._v("New York")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "shanghai"
    }
  }, [_vm._v("London")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "shenzhen"
    }
  }, [_vm._v("Sydney")])], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "证件号码",
      "prop": "pathid"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写证件号码"
    },
    model: {
      value: (_vm.formValidate.pathid),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "pathid", $$v)
      },
      expression: "formValidate.pathid"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "联系人",
      "prop": "name"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写联系人"
    },
    model: {
      value: (_vm.formValidate.name),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "name", $$v)
      },
      expression: "formValidate.name"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "联系电话",
      "prop": "tel"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写联系电话"
    },
    model: {
      value: (_vm.formValidate.tel),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "tel", $$v)
      },
      expression: "formValidate.tel"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "是否启用",
      "prop": "isOpen"
    }
  }, [_c('Select', {
    attrs: {
      "placeholder": "请选择是否开启"
    },
    model: {
      value: (_vm.formValidate.isOpen),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "isOpen", $$v)
      },
      expression: "formValidate.isOpen"
    }
  }, [_c('Option', {
    attrs: {
      "value": "beijing"
    }
  }, [_vm._v("New York")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "shanghai"
    }
  }, [_vm._v("London")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "shenzhen"
    }
  }, [_vm._v("Sydney")])], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "备注",
      "prop": "remark"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请填写备注"
    },
    model: {
      value: (_vm.formValidate.remark),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "remark", $$v)
      },
      expression: "formValidate.remark"
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
        _vm.handleReset('formValidate')
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
     __webpack_require__(202).rerender("data-v-1f7cf785", module.exports)
  }
}

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(982),
  /* template */
  __webpack_require__(1112),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/adMoneyPath.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] adMoneyPath.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f7cf785", Component.options)
  } else {
    hotAPI.reload("data-v-1f7cf785", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 982:
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
            columns: [{ title: '渠道编号', key: 'code' }, { title: '渠道名称', key: 'name' }, { title: '创建日期', key: 'createTime' }, { title: '渠道证件类型', key: 'type' }, { title: '渠道证件号码', key: 'pathCodeNumber' }, { title: '是否启用', key: 'isable' }, { title: '业务笔数', key: 'businessNumber' }, { title: '备注', key: 'remark' }, {
                title: '操作', align: 'center', render: function render(h, params) {
                    return h('div', [h('a', {
                        style: {
                            display: params.row.multiple ? 'none' : 'block'
                        },
                        on: {
                            click: function click() {
                                // this.$router.push({
                                //     name: 'review',
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
            }],
            formValidate: {
                pathname: '',
                name: '',
                tel: '',
                pathtype: '',
                pathidtype: '',
                pathid: '',
                isOpen: '',
                remark: ''
            },
            ruleValidate: {
                pathname: [{ required: true, message: '渠道名称不能为空', trigger: 'blur' }],
                name: [{ required: true, message: '请填写联系人', trigger: 'blur' }],
                tel: [{ required: true, message: '请填写联系电话', trigger: 'blur' }],
                pathtype: [{ required: true, message: '请选择渠道类型', trigger: 'change' }],
                pathidtype: [{ required: true, message: '请选择渠道证件类型', trigger: 'change' }],
                pathid: [{ required: true, message: '请填写证件号码', trigger: 'blur' }],
                isOpen: [{ required: false, message: '请选择是否开启', trigger: 'blur' }],
                remark: [{ required: false, message: '请填写备注', trigger: 'blur' }]
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
                    code: 'DSD233423423',
                    name: '张三',
                    createTime: '2018-11-04',
                    type: '组织机构代码证',
                    pathCodeNumber: 'DSD233423423',
                    isable: '已启用',
                    businessNumber: '24',
                    remark: 'hskjhdkjh'
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
        handleSubmit: function handleSubmit(name) {
            var _this4 = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    _this4.$Message.success('创建成功!');
                } else {

                    _this4.$Message.error('请完善信息!');
                }
            });
        },
        handleReset: function handleReset(name) {
            this.$refs[name].resetFields();
        }
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        // this.changePage(1);
    }
});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWRNb25leVBhdGgudnVlP2FjMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkTW9uZXlQYXRoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZE1vbmV5UGF0aC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2hvd01vZGFsIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJjb2x1bW5zIiwidGl0bGUiLCJrZXkiLCJhbGlnbiIsInJlbmRlciIsImgiLCJwYXJhbXMiLCJzdHlsZSIsImRpc3BsYXkiLCJyb3ciLCJtdWx0aXBsZSIsIm9uIiwiY2xpY2siLCJvcGVuTW9kYWwiLCJwcm9wcyIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJ0eXBlIiwic2l6ZSIsImNvbG9yIiwiZm9ybVZhbGlkYXRlIiwicGF0aG5hbWUiLCJuYW1lIiwidGVsIiwicGF0aHR5cGUiLCJwYXRoaWR0eXBlIiwicGF0aGlkIiwiaXNPcGVuIiwicmVtYXJrIiwicnVsZVZhbGlkYXRlIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwidHJpZ2dlciIsIm1ldGhvZHMiLCJjaGFuZ2VQYWdlIiwicGFnZU51bSIsInRpbWVVdGlsIiwiZ2V0RGF0ZVRpbWUiLCIkYXhpb3MiLCJvcHRpb25zIiwidXJsIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImh0dHBDb2RlIiwiJE1lc3NhZ2UiLCJlcnJvciIsIm1zZyIsIkVSUk9SIiwiaWQiLCJjb2RlIiwiY3JlYXRlVGltZSIsInBhdGhDb2RlTnVtYmVyIiwiaXNhYmxlIiwiYnVzaW5lc3NOdW1iZXIiLCJjYXRjaCIsImhhbmRsZVN1Ym1pdCIsIiRyZWZzIiwidmFsaWRhdGUiLCJ2YWxpZCIsInN1Y2Nlc3MiLCJoYW5kbGVSZXNldCIsInJlc2V0RmllbGRzIiwibW91bnRlZCIsIiRyb290IiwiZXZlbnRIdWIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRyxhQUFhO0FBQzdHO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNB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QUEwQixVQUFDQyxLQUFELEVBQVc7QUFDakMsb0JBQUlBLEtBQUosRUFBVztBQUNQLDJCQUFLZCxRQUFMLENBQWNlLE9BQWQsQ0FBc0IsT0FBdEI7QUFDSCxpQkFGRCxNQUVPOztBQUVILDJCQUFLZixRQUFMLENBQWNDLEtBQWQsQ0FBb0IsUUFBcEI7QUFDSDtBQUNKLGFBUEQ7QUFRSCxTQTlDSTtBQStDTGUsbUJBL0NLLHVCQStDUXZDLElBL0NSLEVBK0NjO0FBQ2YsaUJBQUttQyxLQUFMLENBQVduQyxJQUFYLEVBQWlCd0MsV0FBakI7QUFDSDtBQWpESSxLQW5JRTtBQXNMWEMsV0F0TFcscUJBc0xEO0FBQ04sYUFBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxLQUFwQixDQUEwQixZQUExQjtBQUNBO0FBQ0g7QUF6TFUsQ0FBZixFIiwiZmlsZSI6IjQ3LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBvbjoge1xuICAgICAgXCJrZXl1cFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCEoJ2J1dHRvbicgaW4gJGV2ZW50KSAmJiBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIikpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgX3ZtLmNoYW5nZVBhZ2UoMSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnRm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpbmxpbmVcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnSW5wdXQnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIzMDBweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLlhbPplK7lrZdcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaC5rZXl3b3JkKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJrZXl3b3JkXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5rZXl3b3JkXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIFtfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJpb3Mtc2VhcmNoXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg5pCc57SiXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdCdXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZnJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiLFxuICAgICAgXCJpY29uXCI6IFwibWQtYWRkXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3Blbk1vZGFsKCdjcmVhdGUnLCBudWxsKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIuWIm+W7ulwiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1RhYmxlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibG9hZGluZ1wiOiBfdm0ubG9hZGluZyxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1ucyxcbiAgICAgIFwiZGF0YVwiOiBfdm0uZGF0YVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUGFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvdGFsXCI6IF92bS5zZWFyY2gudG90YWwsXG4gICAgICBcImN1cnJlbnRcIjogX3ZtLnNlYXJjaC5wYWdlTnVtLFxuICAgICAgXCJwYWdlLXNpemVcIjogX3ZtLnNlYXJjaC5wYWdlU2l6ZSxcbiAgICAgIFwic2hvdy1lbGV2YXRvclwiOiBcIlwiLFxuICAgICAgXCJzaG93LXRvdGFsXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uY2hhbmdlUGFnZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xlYXJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ01vZGFsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwi5re75Yqg5rig6YGTXCIsXG4gICAgICBcIndpZHRoXCI6IDY0MFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dNb2RhbCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5zaG93TW9kYWwgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNob3dNb2RhbFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIFtfYygnRm9ybScsIHtcbiAgICByZWY6IFwiZm9ybVZhbGlkYXRlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibW9kZWxcIjogX3ZtLmZvcm1WYWxpZGF0ZSxcbiAgICAgIFwicnVsZXNcIjogX3ZtLnJ1bGVWYWxpZGF0ZSxcbiAgICAgIFwibGFiZWwtd2lkdGhcIjogODBcbiAgICB9XG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLmuKDpgZPlkI3np7BcIixcbiAgICAgIFwicHJvcFwiOiBcInBhdGhuYW1lXCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7fovpPlhaXmuKDpgZPlkI3np7BcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5wYXRobmFtZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwicGF0aG5hbWVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLnBhdGhuYW1lXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIua4oOmBk+exu+Wei1wiLFxuICAgICAgXCJwcm9wXCI6IFwicGF0aHR5cGVcIlxuICAgIH1cbiAgfSwgW19jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7fpgInmi6nmuKDpgZPnsbvlnotcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5wYXRodHlwZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwicGF0aHR5cGVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLnBhdGh0eXBlXCJcbiAgICB9XG4gIH0sIFtfYygnT3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiYmVpamluZ1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTmV3IFlvcmtcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ09wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInNoYW5naGFpXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb25kb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ09wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInNoZW56aGVuXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTeWRuZXlcIildKV0sIDEpXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLmuKDpgZPor4Hku7bnsbvlnotcIixcbiAgICAgIFwicHJvcFwiOiBcInBhdGhpZHR5cGVcIlxuICAgIH1cbiAgfSwgW19jKCdTZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7fpgInmi6nmuKDpgZPnsbvlnotcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5wYXRoaWR0eXBlKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJwYXRoaWR0eXBlXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS5wYXRoaWR0eXBlXCJcbiAgICB9XG4gIH0sIFtfYygnT3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiYmVpamluZ1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTmV3IFlvcmtcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ09wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInNoYW5naGFpXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb25kb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ09wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcInNoZW56aGVuXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTeWRuZXlcIildKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuivgeS7tuWPt+eggVwiLFxuICAgICAgXCJwcm9wXCI6IFwicGF0aGlkXCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7floavlhpnor4Hku7blj7fnoIFcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5wYXRoaWQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcInBhdGhpZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtVmFsaWRhdGUucGF0aGlkXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLogZTns7vkurpcIixcbiAgICAgIFwicHJvcFwiOiBcIm5hbWVcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeiBlOezu+S6ulwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLm5hbWUpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uZm9ybVZhbGlkYXRlLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLm5hbWVcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi6IGU57O755S16K+dXCIsXG4gICAgICBcInByb3BcIjogXCJ0ZWxcIlxuICAgIH1cbiAgfSwgW19jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+Whq+WGmeiBlOezu+eUteivnVwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybVZhbGlkYXRlLnRlbCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwidGVsXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1WYWxpZGF0ZS50ZWxcIlxuICAgIH1cbiAgfSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTJcIlxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuaYr+WQpuWQr+eUqFwiLFxuICAgICAgXCJwcm9wXCI6IFwiaXNPcGVuXCJcbiAgICB9XG4gIH0sIFtfYygnU2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36YCJ5oup5piv5ZCm5byA5ZCvXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5mb3JtVmFsaWRhdGUuaXNPcGVuKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJpc09wZW5cIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLmlzT3BlblwiXG4gICAgfVxuICB9LCBbX2MoJ09wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImJlaWppbmdcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk5ldyBZb3JrXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdPcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJzaGFuZ2hhaVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9uZG9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdPcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJzaGVuemhlblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3lkbmV5XCIpXSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLlpIfms6hcIixcbiAgICAgIFwicHJvcFwiOiBcInJlbWFya1wiXG4gICAgfVxuICB9LCBbX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+35aGr5YaZ5aSH5rOoXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5mb3JtVmFsaWRhdGUucmVtYXJrKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1WYWxpZGF0ZSwgXCJyZW1hcmtcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLnJlbWFya1wiXG4gICAgfVxuICB9KV0sIDEpXSwgMSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImZvb3RlclwiXG4gICAgfSxcbiAgICBzbG90OiBcImZvb3RlclwiXG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNpemVcIjogXCJsYXJnZVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmhhbmRsZVJlc2V0KCdmb3JtVmFsaWRhdGUnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIuWPlua2iFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcInNpemVcIjogXCJsYXJnZVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmhhbmRsZVN1Ym1pdCgnZm9ybVZhbGlkYXRlJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLnoa7lrppcIildKV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xZjdjZjc4NVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFmN2NmNzg1XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvYWRNb25leVBhdGgudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gNDciLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9hZE1vbmV5UGF0aC5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWY3Y2Y3ODVcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vYWRNb25leVBhdGgudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL2FkTW9uZXlQYXRoLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFkTW9uZXlQYXRoLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xZjdjZjc4NVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFmN2NmNzg1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9hZE1vbmV5UGF0aC52dWVcbi8vIG1vZHVsZSBpZCA9IDg2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDQ3IiwiaW1wb3J0IHt0aW1lVXRpbH0gZnJvbSAnLi4vbGlicy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9yZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMuJGNvbmZpZy5wYWdlU2l6ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czogW10sXG4gICAgICAgICAgICBoYW5kbGVyOiBbXSxcbiAgICAgICAgICAgIGFwcGxpY2FudDogW10sXG4gICAgICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZShkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlICYmIF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kICYmIGRhdGUudmFsdWVPZigpID4gX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQudmFsdWVPZigpIC0gX3RoaXMuJGNvbmZpZy5taWxsc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZSAmJiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ICYmIGRhdGUudmFsdWVPZigpIDwgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydC52YWx1ZU9mKCkgKyBfdGhpcy4kY29uZmlnLm1pbGxzZWNvbmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBjb2x1bW5zOiBbe3RpdGxlOiAn5rig6YGT57yW5Y+3Jywga2V5OiAnY29kZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+a4oOmBk+WQjeensCcsIGtleTogJ25hbWUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfliJvlu7rml6XmnJ8nLCBrZXk6ICdjcmVhdGVUaW1lJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5rig6YGT6K+B5Lu257G75Z6LJywga2V5OiAndHlwZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+a4oOmBk+ivgeS7tuWPt+eggScsIGtleTogJ3BhdGhDb2RlTnVtYmVyJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5piv5ZCm5ZCv55SoJywga2V5OiAnaXNhYmxlJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5Lia5Yqh56yU5pWwJywga2V5OiAnYnVzaW5lc3NOdW1iZXInfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflpIfms6gnLCBrZXk6ICdyZW1hcmsnfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pON5L2cJywgYWxpZ246ICdjZW50ZXInLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdkaXYnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHBhcmFtcy5yb3cubXVsdGlwbGUgPyAnbm9uZScgOiAnYmxvY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogJ3JldmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhcmFtczoge2lkOiBwYXJhbXMucm93LmlkLCBwYWdlTnVtOiBfdGhpcy5zZWFyY2gucGFnZU51bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnVG9vbHRpcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WkhOeQhicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdJY29uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZC1jcmVhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmY5OTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHBhcmFtcy5yb3cubXVsdGlwbGUgPyAnYmxvY2snIDogJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmjqXlj5cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY2hlY2ttYXJrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgZm9ybVZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHRlbDogJycsXG4gICAgICAgICAgICAgICAgcGF0aHR5cGU6ICcnLFxuICAgICAgICAgICAgICAgIHBhdGhpZHR5cGU6ICcnLFxuICAgICAgICAgICAgICAgIHBhdGhpZDogJycsXG4gICAgICAgICAgICAgICAgaXNPcGVuOiAnJyxcbiAgICAgICAgICAgICAgICByZW1hcms6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnVsZVZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+a4oOmBk+WQjeensOS4jeiDveS4uuepuicsIHRyaWdnZXI6ICdibHVyJyB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBuYW1lOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7floavlhpnogZTns7vkuronLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgdGVsOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7floavlhpnogZTns7vnlLXor50nLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcGF0aHR5cGU6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+mAieaLqea4oOmBk+exu+WeiycsIHRyaWdnZXI6ICdjaGFuZ2UnIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHBhdGhpZHR5cGU6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+mAieaLqea4oOmBk+ivgeS7tuexu+WeiycsIHRyaWdnZXI6ICdjaGFuZ2UnIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHBhdGhpZDogW1xuICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+35aGr5YaZ6K+B5Lu25Y+356CBJywgdHJpZ2dlcjogJ2JsdXInIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGlzT3BlbjogW1xuICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiBmYWxzZSwgbWVzc2FnZTogJ+ivt+mAieaLqeaYr+WQpuW8gOWQrycsIHRyaWdnZXI6ICdibHVyJyB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICByZW1hcms6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogZmFsc2UsIG1lc3NhZ2U6ICfor7floavlhpnlpIfms6gnLCB0cmlnZ2VyOiAnYmx1cicgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2hhbmdlUGFnZShwYWdlTnVtKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZU51bSA9IHBhZ2VOdW07XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQgPSB0aW1lVXRpbC5nZXREYXRlVGltZSh0aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZCA9IHRpbWVVdGlsLmdldERhdGVUaW1lKHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQpO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnYXNtL2FzbUFzc2V0UmVxL3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB0aGlzLnNlYXJjaH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhLmxpc3Q7XG4gICAgICAgICAgICAgICAgLy90aGlzLnNlYXJjaC50b3RhbCA9IHJlc3BvbnNlLmRhdGEudG90YWw7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gW3tcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6ICdEU0QyMzM0MjM0MjMnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZTogJzIwMTgtMTEtMDQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAn57uE57uH5py65p6E5Luj56CB6K+BJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aENvZGVOdW1iZXI6ICdEU0QyMzM0MjM0MjMnLFxuICAgICAgICAgICAgICAgICAgICBpc2FibGU6ICflt7LlkK/nlKgnLFxuICAgICAgICAgICAgICAgICAgICBidXNpbmVzc051bWJlcjogJzI0JyxcbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrOiAnaHNramhka2poJ1xuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRvdGFsID0gMTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvcGVuTW9kYWwoKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVTdWJtaXQgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnNbbmFtZV0udmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2Uuc3VjY2Vzcygn5Yib5bu65oiQ5YqfIScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcign6K+35a6M5ZaE5L+h5oGvIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZVJlc2V0IChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzW25hbWVdLnJlc2V0RmllbGRzKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JyZWFkY3J1bWInKTtcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VQYWdlKDEpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hZE1vbmV5UGF0aC5qcyJdLCJzb3VyY2VSb290IjoiIn0=