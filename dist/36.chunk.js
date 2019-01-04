webpackJsonp([36],{

/***/ 1021:
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
            columns: [{
                title: '序号', align: 'center', render: function render(h, params) {
                    return h('div', [h('span', {
                        // style: {
                        //     // display: params.row.multiple ? 'none' : 'block'
                        // },
                        // on: {
                        //     click: () => {
                        //         this.openModal('edit' , params.row)
                        //     }
                        // }
                    }, [params.row._index + 1])]);
                }
            }, { title: '产品名称', key: 'productName' }, {
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
                            // display: params.row.multiple ? 'block' : 'none'
                        },
                        on: {
                            click: function click() {
                                _this2.confirmDelete(params.row);
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
                            color: '#ff3344'
                        }
                    })])])]);
                }
            }],
            formValidate: {
                productName: '' //产品名称
            },
            ruleValidate: {
                productName: [{ required: true, message: '产品名称不能为空', trigger: 'blur' }]
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
            this.$axios.options.url = '/houseMortgage/hmProduct/read/list';
            this.$axios.request({ data: this.search }).then(function (response) {
                _this3.loading = false;
                if (response.httpCode !== 200) {
                    _this3.data = [];
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.data = response.data.list;
                _this3.search.total = response.data.total;
            }).catch(function (error) {
                _this3.loading = false;
                _this3.data = [];
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },
        openModal: function openModal(flag, data) {
            this.showModal = true;
            this.modalType = flag;
            if (flag == 'edit') {
                this.formValidate = data;
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
        handleReset: function handleReset(name) {
            this.showModal = false;
        },
        closeModal: function closeModal() {
            //关闭弹框
            this.showModal = false;
            this.formValidate = {
                bankName: '', //银行名称
                bankAbbreviation: '', //银行简称
                superiorBank: '', //上级银行
                bankNumber: '', //联行号码
                sequestrationState: '', //封存标志
                bankState: '', //是否启用
                address: '' //所在地址
            };
        },
        createData: function createData() {
            var _this5 = this;

            //创建银行
            this.$axios.options.url = '/houseMortgage/hmProduct/add';
            this.$axios.request({ data: this.formValidate }).then(function (res) {
                _this5.$Message.success('创建成功!');
                _this5.showModal = false;
                _this5.changePage(1);
                _this5.formValidate = {
                    bankName: '', //银行名称
                    bankAbbreviation: '', //银行简称
                    superiorBank: '', //上级银行
                    bankNumber: '', //联行号码
                    sequestrationState: '', //封存标志
                    bankState: '', //是否启用
                    address: '' //所在地址
                };
            });
        },
        editData: function editData() {
            var _this6 = this;

            //编辑银行
            this.$axios.options.url = '/houseMortgage/hmProduct/update';
            this.$axios.request({ data: this.formValidate }).then(function (res) {
                _this6.$Message.success('修改成功!');
                _this6.showModal = false;
                _this6.changePage(1);
                _this6.formValidate = {
                    bankName: '', //银行名称
                    bankAbbreviation: '', //银行简称
                    superiorBank: '', //上级银行
                    bankNumber: '', //联行号码
                    sequestrationState: '', //封存标志
                    bankState: '', //是否启用
                    address: '' //所在地址
                };
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
            this.$axios.options.url = '/houseMortgage/hmProduct/delete';
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

/***/ 1160:
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
      "content": "更多筛选",
      "placement": "top-start"
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
  }, [_vm._v("创建")])], 1), _vm._v(" "), (_vm.more) ? _c('Form', {
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
      "label": "创建人"
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
  }))], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c('Table', {
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
      "title": "添加银行",
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
      "label": "产品名称",
      "prop": "productName"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "请输入产品名称"
    },
    model: {
      value: (_vm.formValidate.productName),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "productName", $$v)
      },
      expression: "formValidate.productName"
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
        _vm.handleReset()
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
     __webpack_require__(202).rerender("data-v-874607de", module.exports)
  }
}

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1021),
  /* template */
  __webpack_require__(1160),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/products.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] products.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-874607de", Component.options)
  } else {
    hotAPI.reload("data-v-874607de", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcHJvZHVjdHMudnVlPzcxZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Byb2R1Y3RzLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2hvd01vZGFsIiwibW9kYWxUeXBlIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJjb2x1bW5zIiwidGl0bGUiLCJhbGlnbiIsInJlbmRlciIsImgiLCJwYXJhbXMiLCJyb3ciLCJfaW5kZXgiLCJrZXkiLCJzdHlsZSIsIm9uIiwiY2xpY2siLCJvcGVuTW9kYWwiLCJwcm9wcyIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJ0eXBlIiwic2l6ZSIsImNvbG9yIiwiY29uZmlybURlbGV0ZSIsImZvcm1WYWxpZGF0ZSIsInByb2R1Y3ROYW1lIiwicnVsZVZhbGlkYXRlIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwidHJpZ2dlciIsIm1ldGhvZHMiLCJjaGFuZ2VQYWdlIiwicGFnZU51bSIsInRpbWVVdGlsIiwiZ2V0RGF0ZVRpbWUiLCIkYXhpb3MiLCJvcHRpb25zIiwidXJsIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImh0dHBDb2RlIiwiJE1lc3NhZ2UiLCJlcnJvciIsIm1zZyIsIkVSUk9SIiwibGlzdCIsImNhdGNoIiwiZmxhZyIsImhhbmRsZVN1Ym1pdCIsIm5hbWUiLCIkcmVmcyIsInZhbGlkYXRlIiwidmFsaWQiLCJjcmVhdGVEYXRhIiwiZWRpdERhdGEiLCJoYW5kbGVSZXNldCIsImNsb3NlTW9kYWwiLCJiYW5rTmFtZSIsImJhbmtBYmJyZXZpYXRpb24iLCJzdXBlcmlvckJhbmsiLCJiYW5rTnVtYmVyIiwic2VxdWVzdHJhdGlvblN0YXRlIiwiYmFua1N0YXRlIiwiYWRkcmVzcyIsInJlcyIsInN1Y2Nlc3MiLCIkTW9kYWwiLCJjb25maXJtIiwib25PayIsImRlbGV0ZURhdGEiLCJpZCIsIm9uQ2FuY2VsIiwiZGF0YUlkIiwibW91bnRlZCIsIiRyb290IiwiZXZlbnRIdWIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSwrREFBZTtBQUNYQSxRQURXLGtCQUNKO0FBQUE7O0FBQ0gsWUFBTUMsUUFBUSxJQUFkO0FBQ0EsZUFBTztBQUNIQyxrQkFBTSxLQURIO0FBRUhDLHVCQUFXLEtBRlI7QUFHSEMsdUJBQVcsRUFIUjtBQUlIQyxvQkFBUTtBQUNKQyx1QkFBTyxDQURIO0FBRUpDLDBCQUFVLEtBQUtDLE9BQUwsQ0FBYUQ7QUFGbkIsYUFKTDtBQVFIRSxvQkFBUSxFQVJMO0FBU0hDLHFCQUFTLEVBVE47QUFVSEMsdUJBQVcsRUFWUjtBQVdIQyxtQkFBTztBQUNIQyw0QkFERyx3QkFDVUMsSUFEVixFQUNnQjtBQUNmLDJCQUFPQSxRQUFRYixNQUFNSSxNQUFOLENBQWFVLGFBQXJCLElBQXNDRCxLQUFLRSxPQUFMLEtBQWlCZixNQUFNSSxNQUFOLENBQWFVLGFBQWIsQ0FBMkJDLE9BQTNCLEtBQXVDZixNQUFNTyxPQUFOLENBQWNTLFdBQW5IO0FBQ0g7QUFIRSxhQVhKO0FBZ0JIQyxpQkFBSztBQUNETCw0QkFEQyx3QkFDWUMsSUFEWixFQUNrQjtBQUNmLDJCQUFPQSxRQUFRYixNQUFNSSxNQUFOLENBQWFjLGVBQXJCLElBQXdDTCxLQUFLRSxPQUFMLEtBQWlCZixNQUFNSSxNQUFOLENBQWFjLGVBQWIsQ0FBNkJILE9BQTdCLEtBQXlDZixNQUFNTyxPQUFOLENBQWNTLFdBQXZIO0FBQ0g7QUFIQSxhQWhCRjtBQXFCSEcscUJBQVMsS0FyQk47QUFzQkhwQixrQkFBTSxFQXRCSDtBQXVC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Q0EsQ0FBQzs7QUFFRCIsImZpbGUiOiIzNi5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dGltZVV0aWx9IGZyb20gJy4uL2xpYnMvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIG1vZGFsVHlwZTogJycsXG4gICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy4kY29uZmlnLnBhZ2VTaXplXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhdHVzOiBbXSxcbiAgICAgICAgICAgIGhhbmRsZXI6IFtdLFxuICAgICAgICAgICAgYXBwbGljYW50OiBbXSxcbiAgICAgICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWREYXRlKGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUgJiYgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQgJiYgZGF0ZS52YWx1ZU9mKCkgPiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZC52YWx1ZU9mKCkgLSBfdGhpcy4kY29uZmlnLm1pbGxzZWNvbmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZDoge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZShkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlICYmIF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQgJiYgZGF0ZS52YWx1ZU9mKCkgPCBfdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0LnZhbHVlT2YoKSArIF90aGlzLiRjb25maWcubWlsbHNlY29uZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5bqP5Y+3JywgYWxpZ246ICdjZW50ZXInLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdkaXYnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGRpc3BsYXk6IHBhcmFtcy5yb3cubXVsdGlwbGUgPyAnbm9uZScgOiAnYmxvY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMub3Blbk1vZGFsKCdlZGl0JyAsIHBhcmFtcy5yb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbIHBhcmFtcy5yb3cuX2luZGV4KzEgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+S6p+WTgeWQjeensCcsIGtleTogJ3Byb2R1Y3ROYW1lJ30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aTjeS9nCcsIGFsaWduOiAnY2VudGVyJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnZGl2JywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBwYXJhbXMucm93Lm11bHRpcGxlID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdjdXN0b21lckluZm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXJhbXM6IHtpZDogcGFyYW1zLnJvdy5pZCwgcGFnZU51bTogX3RoaXMuc2VhcmNoLnBhZ2VOdW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbCgnZWRpdCcgLCBwYXJhbXMucm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdUb29sdGlwJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5aSE55CGJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ0ljb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21kLWNyZWF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjk5MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogcGFyYW1zLnJvdy5tdWx0aXBsZSA/ICdibG9jaycgOiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRGVsZXRlKHBhcmFtcy5yb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmjqXlj5cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmYzMzQ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBmb3JtVmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZTogJycsIC8v5Lqn5ZOB5ZCN56ewXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnVsZVZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdE5hbWU6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+S6p+WTgeWQjeensOS4jeiDveS4uuepuicsIHRyaWdnZXI6ICdibHVyJyB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2hhbmdlUGFnZShwYWdlTnVtKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gucGFnZU51bSA9IHBhZ2VOdW07XG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQgPSB0aW1lVXRpbC5nZXREYXRlVGltZSh0aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZCA9IHRpbWVVdGlsLmdldERhdGVUaW1lKHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQpO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Qcm9kdWN0L3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB0aGlzLnNlYXJjaH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YS5saXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvcGVuTW9kYWwoZmxhZywgZGF0YSl7XG4gICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMubW9kYWxUeXBlID0gZmxhZ1xuICAgICAgICAgICAgaWYoZmxhZyA9PSAnZWRpdCcpe1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybVZhbGlkYXRlID0gZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZVN1Ym1pdCAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy4kcmVmc1tuYW1lXS52YWxpZGF0ZSgodmFsaWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5tb2RhbFR5cGUgPT0gJ2NyZWF0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEYXRhKClcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXREYXRhKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcign6K+35a6M5ZaE5L+h5oGvIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZVJlc2V0IChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlTW9kYWwoKXsgLy/lhbPpl63lvLnmoYZcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuZm9ybVZhbGlkYXRlID0ge1xuICAgICAgICAgICAgICAgIGJhbmtOYW1lOiAnJywgLy/pk7booYzlkI3np7BcbiAgICAgICAgICAgICAgICBiYW5rQWJicmV2aWF0aW9uOiAnJywgLy/pk7booYznroDnp7BcbiAgICAgICAgICAgICAgICBzdXBlcmlvckJhbms6ICcnLCAvL+S4iue6p+mTtuihjFxuICAgICAgICAgICAgICAgIGJhbmtOdW1iZXI6ICcnLCAvL+iBlOihjOWPt+eggVxuICAgICAgICAgICAgICAgIHNlcXVlc3RyYXRpb25TdGF0ZTogJycsIC8v5bCB5a2Y5qCH5b+XXG4gICAgICAgICAgICAgICAgYmFua1N0YXRlOiAnJywgLy/mmK/lkKblkK/nlKhcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiAnJywgLy/miYDlnKjlnLDlnYBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlRGF0YSgpeyAvL+WIm+W7uumTtuihjFxuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Qcm9kdWN0L2FkZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB0aGlzLmZvcm1WYWxpZGF0ZX0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLnN1Y2Nlc3MoJ+WIm+W7uuaIkOWKnyEnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybVZhbGlkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICBiYW5rTmFtZTogJycsIC8v6ZO26KGM5ZCN56ewXG4gICAgICAgICAgICAgICAgICAgIGJhbmtBYmJyZXZpYXRpb246ICcnLCAvL+mTtuihjOeugOensFxuICAgICAgICAgICAgICAgICAgICBzdXBlcmlvckJhbms6ICcnLCAvL+S4iue6p+mTtuihjFxuICAgICAgICAgICAgICAgICAgICBiYW5rTnVtYmVyOiAnJywgLy/ogZTooYzlj7fnoIFcbiAgICAgICAgICAgICAgICAgICAgc2VxdWVzdHJhdGlvblN0YXRlOiAnJywgLy/lsIHlrZjmoIflv5dcbiAgICAgICAgICAgICAgICAgICAgYmFua1N0YXRlOiAnJywgLy/mmK/lkKblkK/nlKhcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogJycsIC8v5omA5Zyo5Zyw5Z2AXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdERhdGEoKXsgLy/nvJbovpHpk7booYxcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htUHJvZHVjdC91cGRhdGUnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YTogdGhpcy5mb3JtVmFsaWRhdGV9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5zdWNjZXNzKCfkv67mlLnmiJDlip8hJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGFnZSgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1WYWxpZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmFua05hbWU6ICcnLCAvL+mTtuihjOWQjeensFxuICAgICAgICAgICAgICAgICAgICBiYW5rQWJicmV2aWF0aW9uOiAnJywgLy/pk7booYznroDnp7BcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJpb3JCYW5rOiAnJywgLy/kuIrnuqfpk7booYxcbiAgICAgICAgICAgICAgICAgICAgYmFua051bWJlcjogJycsIC8v6IGU6KGM5Y+356CBXG4gICAgICAgICAgICAgICAgICAgIHNlcXVlc3RyYXRpb25TdGF0ZTogJycsIC8v5bCB5a2Y5qCH5b+XXG4gICAgICAgICAgICAgICAgICAgIGJhbmtTdGF0ZTogJycsIC8v5piv5ZCm5ZCv55SoXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcnLCAvL+aJgOWcqOWcsOWdgFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm1EZWxldGUoZGF0YSl7IC8v56Gu6K6k5Yig6ZmkXG4gICAgICAgICAgICB0aGlzLiRNb2RhbC5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WIoOmZpCcsXG4gICAgICAgICAgICAgICAgY29udGVudDogJzxwPuehruiupOimgeWIoOmZpOivpeaVsOaNruWQl++8nzwvcD4nLFxuICAgICAgICAgICAgICAgIG9uT2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVEYXRhKGRhdGEuaWQpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlRGF0YShkYXRhSWQpeyAvL+WIoOmZpFxuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Qcm9kdWN0L2RlbGV0ZSc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IGRhdGFJZH0gfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2Uuc3VjY2Vzcygn5Yig6Zmk5oiQ5YqfIScpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGFnZSgxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JyZWFkY3J1bWInKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKDEpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy5qcyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgb246IHtcbiAgICAgIFwia2V5dXBcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICghKCdidXR0b24nIGluICRldmVudCkgJiYgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpKSB7IHJldHVybiBudWxsOyB9XG4gICAgICAgIF92bS5jaGFuZ2VQYWdlKDEpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ0Zvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaW5saW5lXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ1Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29udGVudFwiOiBcIuabtOWkmuetm+mAiVwiLFxuICAgICAgXCJwbGFjZW1lbnRcIjogXCJ0b3Atc3RhcnRcIlxuICAgIH1cbiAgfSwgW19jKCdJY29uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJtZC1mdW5uZWxcIixcbiAgICAgIFwic2l6ZVwiOiBcIjIyXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubW9yZSA9ICFfdm0ubW9yZVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCBbX2MoJ0lucHV0Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMzAwcHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5YWz6ZSu5a2XXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2gua2V5d29yZCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwia2V5d29yZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gua2V5d29yZFwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCBbX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiaW9zLXNlYXJjaFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNoYW5nZVBhZ2UoMSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOaQnOe0olxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIixcbiAgICAgIFwiaWNvblwiOiBcIm1kLWFkZFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW5Nb2RhbCgnY3JlYXRlJywgbnVsbClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLliJvlu7pcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLm1vcmUpID8gX2MoJ0Zvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWwtd2lkdGhcIjogNjAsXG4gICAgICBcImlubGluZVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwi54q25oCBXCJcbiAgICB9XG4gIH0sIFtfYygnU2VsZWN0Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTgwcHhcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaC5zdGF0dXMpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guc3RhdHVzXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLnN0YXR1cyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLliJvlu7rkurpcIlxuICAgIH1cbiAgfSwgW19jKCdTZWxlY3QnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxODBweFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoLmhhbmRsZXIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImhhbmRsZXJcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmhhbmRsZXJcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uaGFuZGxlciksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ09wdGlvbicsIHtcbiAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpXSwgMSkgOiBfdm0uX2UoKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xlYXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJsb2FkaW5nXCI6IF92bS5sb2FkaW5nLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5kYXRhXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdQYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG90YWxcIjogX3ZtLnNlYXJjaC50b3RhbCxcbiAgICAgIFwiY3VycmVudFwiOiBfdm0uc2VhcmNoLnBhZ2VOdW0sXG4gICAgICBcInBhZ2Utc2l6ZVwiOiBfdm0uc2VhcmNoLnBhZ2VTaXplLFxuICAgICAgXCJzaG93LWVsZXZhdG9yXCI6IFwiXCIsXG4gICAgICBcInNob3ctdG90YWxcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jaGFuZ2VQYWdlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbGVhclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnTW9kYWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCLmt7vliqDpk7booYxcIixcbiAgICAgIFwid2lkdGhcIjogNjQwXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJvbi1jYW5jZWxcIjogX3ZtLmNsb3NlTW9kYWxcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zaG93TW9kYWwpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc2hvd01vZGFsID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzaG93TW9kYWxcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCBbX2MoJ0Zvcm0nLCB7XG4gICAgcmVmOiBcImZvcm1WYWxpZGF0ZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5mb3JtVmFsaWRhdGUsXG4gICAgICBcInJ1bGVzXCI6IF92bS5ydWxlVmFsaWRhdGUsXG4gICAgICBcIndpZHRoXCI6IDQwMCxcbiAgICAgIFwibGFiZWwtd2lkdGhcIjogODBcbiAgICB9XG4gIH0sIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjEyXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLkuqflk4HlkI3np7BcIixcbiAgICAgIFwicHJvcFwiOiBcInByb2R1Y3ROYW1lXCJcbiAgICB9XG4gIH0sIFtfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7fovpPlhaXkuqflk4HlkI3np7BcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1WYWxpZGF0ZS5wcm9kdWN0TmFtZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5mb3JtVmFsaWRhdGUsIFwicHJvZHVjdE5hbWVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybVZhbGlkYXRlLnByb2R1Y3ROYW1lXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiZm9vdGVyXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiZm9vdGVyXCJcbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcImxhcmdlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaGFuZGxlUmVzZXQoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIuWPlua2iFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcInNpemVcIjogXCJsYXJnZVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmhhbmRsZVN1Ym1pdCgnZm9ybVZhbGlkYXRlJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLnoa7lrppcIildKV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi04NzQ2MDdkZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTg3NDYwN2RlXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvcHJvZHVjdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMzYiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9wcm9kdWN0cy5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtODc0NjA3ZGVcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vcHJvZHVjdHMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3Byb2R1Y3RzLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHByb2R1Y3RzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04NzQ2MDdkZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTg3NDYwN2RlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9wcm9kdWN0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDkwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDM2Il0sInNvdXJjZVJvb3QiOiIifQ==