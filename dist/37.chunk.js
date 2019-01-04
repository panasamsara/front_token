webpackJsonp([37],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            deptList: [],
            buttonProps: {
                type: 'default',
                size: 'small'
            },
            departmentInfo: {
                deptName: '',
                deptNo: ''
            },
            departmentRules: {
                deptName: [{ required: true, message: '必须填写', trigger: 'blur' }],
                deptNo: [{ required: true, message: '必须填写', trigger: 'blur' }, {
                    type: 'string',
                    pattern: /^[0-9A-Za-z]{0,20}$/,
                    message: '格式错误',
                    trigger: 'blur'
                }]
            },
            departmentModal: false,
            loading: false,
            isEdit: false
        };
    },

    methods: {
        renderContent: function renderContent(h, _ref) {
            var _this = this;

            var root = _ref.root,
                node = _ref.node,
                data = _ref.data;

            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [h('span', [h('span', data.title)]), h('span', {
                style: {
                    display: 'inline-block',
                    float: 'right',
                    marginRight: '22px'
                }
            }, [h('Button', {
                props: Object.assign({}, this.buttonProps, {
                    icon: 'md-add'
                }),
                style: {
                    marginRight: '8px'
                },
                on: {
                    click: function click() {
                        _this.showDepartment(false);
                        _this.departmentInfo.parentId = data.id;
                    }
                }
            }), h('Button', {
                props: Object.assign({}, this.buttonProps, {
                    icon: 'md-create'
                }),
                style: {
                    marginRight: '8px'
                },
                on: {
                    click: function click() {
                        _this.showDepartment(true);
                        Object.assign(_this.departmentInfo, data);
                    }
                }
            }), h('Button', {
                props: Object.assign({}, this.buttonProps, {
                    icon: 'md-remove'
                }),
                on: {
                    click: function click() {
                        _this.$root.eventHub.$emit('delete', data.id);
                    }
                }
            })])]);
        },
        delete: function _delete(id) {
            var _this2 = this;

            this.$axios.options.url = 'sys/dept/delete';
            this.$axios.request({ data: { id: id } }).then(function (response) {
                if (response.httpCode !== 200) {
                    _this2.$Message.error('删除失败');
                    return;
                }
                _this2.loadDept();
            }).catch(function (error) {
                _this2.$Message.error(error);
            });
        },
        loadDept: function loadDept() {
            var _this3 = this;

            this.$axios.options.url = '/sys/dept/read/allDept';
            this.$axios.request().then(function (response) {
                if (response.httpCode !== 200) {
                    _this3.$Message.error('下载失败');
                    return;
                }
                var root = response.data.filter(function (value) {
                    return value.parentId === '-1';
                });
                root[0].render = function (h, _ref2) {
                    var root = _ref2.root,
                        node = _ref2.node,
                        data = _ref2.data;

                    return h('span', {
                        style: {
                            display: 'inline-block',
                            width: '100%'
                        }
                    }, [h('span', [h('span', data.title)]), h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '22px'
                        }
                    }, [h('Button', {
                        props: Object.assign({}, _this3.buttonProps, {
                            icon: 'md-add'
                        }),
                        style: {
                            width: '64px',
                            marginRight: '8px'
                        },
                        on: {
                            click: function click() {
                                _this3.showDepartment(false);
                                _this3.departmentInfo.parentId = data.id;
                            }
                        }
                    }), h('Button', {
                        props: Object.assign({}, _this3.buttonProps, {
                            icon: 'md-create'
                        }),
                        on: {
                            click: function click() {
                                _this3.showDepartment(true);
                            }
                        }
                    })])]);
                };
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["i" /* getTreeData */])(root[0], response.data);
                _this3.deptList = root;
            }).catch(function (error) {
                _this3.$Message.error(error);
            });
        },
        showDepartment: function showDepartment(flag) {
            this.$refs['departmentForm'].resetFields();
            this.isEdit = flag;
            if (!flag) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["g" /* clearObject */])(this.departmentInfo);
            this.departmentModal = true;
        },
        submit: function submit(name) {
            var _this4 = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    _this4.loading = true;
                    _this4.$axios.options.url = _this4.isEdit ? 'sys/dept/update' : 'sys/dept/add';
                    _this4.$axios.request({ data: _this4.departmentInfo }).then(function (response) {
                        _this4.loading = false;
                        if (response.httpCode !== 200) {
                            _this4.$Message.error('网络错误');
                            return;
                        }
                        _this4.departmentModal = false;
                        _this4.loadDept();
                    }).catch(function (error) {
                        _this4.loading = false;
                        _this4.$Message.error(error);
                    });
                }
            });
        }
    },
    mounted: function mounted() {
        var _this5 = this;

        this.$root.eventHub.$emit('breadcrumb');
        this.$root.eventHub.$on('delConfirm', function (params) {
            _this5.delete(params);
        });
        this.loadDept();
    },
    beforeDestroy: function beforeDestroy() {
        this.$root.eventHub.$off('delConfirm');
    }
});

/***/ }),

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Tree', {
    attrs: {
      "data": _vm.deptList,
      "render": _vm.renderContent
    }
  }), _vm._v(" "), _c('Modal', {
    model: {
      value: (_vm.departmentModal),
      callback: function($$v) {
        _vm.departmentModal = $$v
      },
      expression: "departmentModal"
    }
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('h3', [_vm._v("\n                部门\n            ")])]), _vm._v(" "), _c('div', [_c('Form', {
    ref: "departmentForm",
    attrs: {
      "model": _vm.departmentInfo,
      "rules": _vm.departmentRules,
      "label-width": 60
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.submit('departmentForm')
      }
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "deptName"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                        名称\n                    ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "placeholder": "名称",
      "maxlength": 20,
      "type": "text",
      "clearable": ""
    },
    model: {
      value: (_vm.departmentInfo.deptName),
      callback: function($$v) {
        _vm.$set(_vm.departmentInfo, "deptName", $$v)
      },
      expression: "departmentInfo.deptName"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "deptNo"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                        编码\n                    ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "placeholder": "编码",
      "maxlength": 20,
      "type": "text",
      "clearable": ""
    },
    model: {
      value: (_vm.departmentInfo.deptNo),
      callback: function($$v) {
        _vm.$set(_vm.departmentInfo, "deptNo", $$v)
      },
      expression: "departmentInfo.deptNo"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "text-right",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    on: {
      "click": function($event) {
        _vm.departmentModal = false
      }
    }
  }, [_vm._v("\n                取消\n            ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "loading": _vm.loading
    },
    on: {
      "click": function($event) {
        _vm.submit('departmentForm')
      }
    }
  }, [_vm._v("\n                保存\n            ")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-75711660", module.exports)
  }
}

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1019),
  /* template */
  __webpack_require__(1156),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/organize.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] organize.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75711660", Component.options)
  } else {
    hotAPI.reload("data-v-75711660", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvb3JnYW5pemUudnVlPzQxMTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL29yZ2FuaXplLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiZGVwdExpc3QiLCJidXR0b25Qcm9wcyIsInR5cGUiLCJzaXplIiwiZGVwYXJ0bWVudEluZm8iLCJkZXB0TmFtZSIsImRlcHRObyIsImRlcGFydG1lbnRSdWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsInRyaWdnZXIiLCJwYXR0ZXJuIiwiZGVwYXJ0bWVudE1vZGFsIiwibG9hZGluZyIsImlzRWRpdCIsIm1ldGhvZHMiLCJyZW5kZXJDb250ZW50IiwiaCIsInJvb3QiLCJub2RlIiwic3R5bGUiLCJkaXNwbGF5Iiwid2lkdGgiLCJ0aXRsZSIsImZsb2F0IiwibWFyZ2luUmlnaHQiLCJwcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsImljb24iLCJvbiIsImNsaWNrIiwic2hvd0RlcGFydG1lbnQiLCJwYXJlbnRJZCIsImlkIiwiJHJvb3QiLCJldmVudEh1YiIsIiRlbWl0IiwiZGVsZXRlIiwiJGF4aW9zIiwib3B0aW9ucyIsInVybCIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJodHRwQ29kZSIsIiRNZXNzYWdlIiwiZXJyb3IiLCJsb2FkRGVwdCIsImNhdGNoIiwiZmlsdGVyIiwidmFsdWUiLCJyZW5kZXIiLCJnZXRUcmVlRGF0YSIsImZsYWciLCIkcmVmcyIsInJlc2V0RmllbGRzIiwiY2xlYXJPYmplY3QiLCJzdWJtaXQiLCJuYW1lIiwidmFsaWRhdGUiLCJ2YWxpZCIsIm1vdW50ZWQiLCIkb24iLCJwYXJhbXMiLCJiZWZvcmVEZXN0cm95IiwiJG9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFNQSwrREFBZTtBQUNYQSxRQURXLGtCQUNKO0FBQ0gsZUFBTztBQUNIQyxzQkFBVSxFQURQ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QUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxXQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoiMzcuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGdldFRyZWVEYXRhLFxuICAgIHNldFNlbGVjdGVkTm9kZSxcbiAgICBjbGVhck9iamVjdFxufSBmcm9tICcuLi9saWJzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVwdExpc3Q6IFtdLFxuICAgICAgICAgICAgYnV0dG9uUHJvcHM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgc2l6ZTogJ3NtYWxsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcGFydG1lbnRJbmZvOiB7XG4gICAgICAgICAgICAgICAgZGVwdE5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGRlcHRObzogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXBhcnRtZW50UnVsZXM6IHtcbiAgICAgICAgICAgICAgICBkZXB0TmFtZTogW1xuICAgICAgICAgICAgICAgICAgICB7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICflv4XpobvloavlhpknLCB0cmlnZ2VyOiAnYmx1cid9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBkZXB0Tm86IFtcbiAgICAgICAgICAgICAgICAgICAge3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn5b+F6aG75aGr5YaZJywgdHJpZ2dlcjogJ2JsdXInfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlswLTlBLVphLXpdezAsMjB9JC8sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5qC85byP6ZSZ6K+vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdibHVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcGFydG1lbnRNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRWRpdDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICByZW5kZXJDb250ZW50KGgsIHtyb290LCBub2RlLCBkYXRhfSkge1xuICAgICAgICAgICAgcmV0dXJuIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgaCgnc3BhbicsIFtcbiAgICAgICAgICAgICAgICAgICAgaCgnc3BhbicsIGRhdGEudGl0bGUpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzIycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGgoJ0J1dHRvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmJ1dHRvblByb3BzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kLWFkZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzhweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RlcGFydG1lbnQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRJbmZvLnBhcmVudElkID0gZGF0YS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBoKCdCdXR0b24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5idXR0b25Qcm9wcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdtZC1jcmVhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc4cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dEZXBhcnRtZW50KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGVwYXJ0bWVudEluZm8sIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGgoJ0J1dHRvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmJ1dHRvblByb3BzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kLXJlbW92ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRlbWl0KCdkZWxldGUnLCBkYXRhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9LFxuICAgICAgICBkZWxldGUoaWQpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ3N5cy9kZXB0L2RlbGV0ZSc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IGlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcign5Yig6Zmk5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGVwdCgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZERlcHQoKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvc3lzL2RlcHQvcmVhZC9hbGxEZXB0JztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3QoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoJ+S4i+i9veWksei0pScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCByb290ID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5wYXJlbnRJZCA9PT0gJy0xJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByb290WzBdLnJlbmRlciA9IChoLCB7cm9vdCwgbm9kZSwgZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgaCgnc3BhbicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdzcGFuJywgZGF0YS50aXRsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMjJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnQnV0dG9uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5idXR0b25Qcm9wcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21kLWFkZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc2NHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dEZXBhcnRtZW50KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRJbmZvLnBhcmVudElkID0gZGF0YS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ0J1dHRvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYnV0dG9uUHJvcHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdtZC1jcmVhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dEZXBhcnRtZW50KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGdldFRyZWVEYXRhKHJvb3RbMF0sIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVwdExpc3QgPSByb290O1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0RlcGFydG1lbnQoZmxhZykge1xuICAgICAgICAgICAgdGhpcy4kcmVmc1snZGVwYXJ0bWVudEZvcm0nXS5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgdGhpcy5pc0VkaXQgPSBmbGFnO1xuICAgICAgICAgICAgaWYgKCFmbGFnKVxuICAgICAgICAgICAgICAgIGNsZWFyT2JqZWN0KHRoaXMuZGVwYXJ0bWVudEluZm8pO1xuICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50TW9kYWwgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBzdWJtaXQobmFtZSkge1xuICAgICAgICAgICAgdGhpcy4kcmVmc1tuYW1lXS52YWxpZGF0ZSgodmFsaWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSB0aGlzLmlzRWRpdCA/ICdzeXMvZGVwdC91cGRhdGUnIDogJ3N5cy9kZXB0L2FkZCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHRoaXMuZGVwYXJ0bWVudEluZm99KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoJ+e9kee7nOmUmeivrycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudE1vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWREZXB0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRlbWl0KCdicmVhZGNydW1iJyk7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJG9uKCdkZWxDb25maXJtJywgKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGUocGFyYW1zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZERlcHQoKTtcbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJG9mZignZGVsQ29uZmlybScpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9vcmdhbml6ZS5qcyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdUcmVlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFcIjogX3ZtLmRlcHRMaXN0LFxuICAgICAgXCJyZW5kZXJcIjogX3ZtLnJlbmRlckNvbnRlbnRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnTW9kYWwnLCB7XG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmRlcGFydG1lbnRNb2RhbCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5kZXBhcnRtZW50TW9kYWwgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImRlcGFydG1lbnRNb2RhbFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiaGVhZGVyXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiaGVhZGVyXCJcbiAgfSwgW19jKCdoMycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg6YOo6ZeoXFxuICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnRm9ybScsIHtcbiAgICByZWY6IFwiZGVwYXJ0bWVudEZvcm1cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtb2RlbFwiOiBfdm0uZGVwYXJ0bWVudEluZm8sXG4gICAgICBcInJ1bGVzXCI6IF92bS5kZXBhcnRtZW50UnVsZXMsXG4gICAgICBcImxhYmVsLXdpZHRoXCI6IDYwXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJrZXl1cFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCEoJ2J1dHRvbicgaW4gJGV2ZW50KSAmJiBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIikpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgX3ZtLnN1Ym1pdCgnZGVwYXJ0bWVudEZvcm0nKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwcm9wXCI6IFwiZGVwdE5hbWVcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5ZCN56ewXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5ZCN56ewXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiAyMCxcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5kZXBhcnRtZW50SW5mby5kZXB0TmFtZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5kZXBhcnRtZW50SW5mbywgXCJkZXB0TmFtZVwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJkZXBhcnRtZW50SW5mby5kZXB0TmFtZVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcImRlcHROb1wiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDnvJbnoIFcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLnvJbnoIFcIixcbiAgICAgIFwibWF4bGVuZ3RoXCI6IDIwLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmRlcGFydG1lbnRJbmZvLmRlcHRObyksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5kZXBhcnRtZW50SW5mbywgXCJkZXB0Tm9cIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGVwYXJ0bWVudEluZm8uZGVwdE5vXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiZm9vdGVyXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiZm9vdGVyXCJcbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5kZXBhcnRtZW50TW9kYWwgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDlj5bmtohcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiLFxuICAgICAgXCJsb2FkaW5nXCI6IF92bS5sb2FkaW5nXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnN1Ym1pdCgnZGVwYXJ0bWVudEZvcm0nKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDkv53lrZhcXG4gICAgICAgICAgICBcIildKV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03NTcxMTY2MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTc1NzExNjYwXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3Mvb3JnYW5pemUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMzciLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9vcmdhbml6ZS5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzU3MTE2NjBcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vb3JnYW5pemUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL29yZ2FuaXplLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG9yZ2FuaXplLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03NTcxMTY2MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc1NzExNjYwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9vcmdhbml6ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDkwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDM3Il0sInNvdXJjZVJvb3QiOiIifQ==