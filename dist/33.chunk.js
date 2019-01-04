webpackJsonp([33],{

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this = this;

        return {
            searchModel: {
                keyword: '',
                pageNum: 1,
                pageSize: this.$config.pageSize
            },
            sysMenuModel: {
                roleId: '',
                menu: []
            },
            loading: true,
            sysRoleModal: false,
            sysMenuModal: false,
            sysMenuList: [],
            total: 0,
            columns: [{
                title: '名称',
                key: 'roleName'
            }, {
                title: '编码',
                key: 'roleCode'
            }, {
                title: '操作',
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('a', {
                        style: {
                            color: '#860C14',
                            margin: '0 3px'
                        },
                        on: {
                            click: function click() {
                                _this.showRole(true);
                                Object.assign(_this.roleInfo, params.row);
                            }
                        }
                    }, '编辑'), h('a', {
                        style: {
                            color: '#860C14',
                            margin: '0 3px'
                        },
                        on: {
                            click: function click() {
                                _this.sysMenuModel.roleId = params.row.id;
                                _this.sysMenuList = [];
                                _this.$axios.options.url = 'sys/role/read/menu';
                                _this.$axios.request({
                                    data: {
                                        id: params.row.id
                                    }
                                }).then(function (response) {
                                    if (response.httpCode != 200) {
                                        _this.$Message.error(response.msg ? response.msg : '错误');
                                        return;
                                    }
                                    var root = response.data.filter(function (value) {
                                        return value.parentId === '0';
                                    });
                                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["d" /* getSysMenuTreeData */])(root[0], response.data);
                                    _this.sysMenuList = root;
                                }).catch(function (error) {
                                    _this.$Message.error(error);
                                });
                                _this.sysMenuModal = true;
                            }
                        }
                    }, '菜单'), h('a', {
                        style: {
                            color: '#860C14',
                            margin: '0 3px'
                        },
                        on: {
                            click: function click() {
                                _this.$root.eventHub.$emit('delete', params.row.id);
                            }
                        }
                    }, '删除')]);
                }
            }],
            items: [],
            roleInfo: {
                roleName: '',
                roleCode: ''
            },
            roleRules: {
                roleName: [{
                    required: true,
                    message: '必填项',
                    trigger: 'blur'
                }],
                roleCode: [{
                    required: true,
                    message: '必填项',
                    trigger: 'blur'
                }, {
                    type: 'string',
                    pattern: /^[0-9A-Za-z]{0,20}$/,
                    message: '格式错误',
                    trigger: 'blur'
                }]
            },
            isEdit: false
        };
    },

    methods: {
        delete: function _delete(id) {
            var _this2 = this;

            this.$axios.options.url = 'sys/role/delete';
            this.$axios.request({
                data: {
                    id: id
                }
            }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error('删除失败');
                    return;
                }
                _this2.changePage(1);
            }).catch(function (error) {
                _this2.$Message.error(error);
            });
        },
        renderContent: function renderContent(h, _ref) {
            var root = _ref.root,
                node = _ref.node,
                data = _ref.data;

            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [h('span', [h('Checkbox', {
                props: {
                    value: data.selected
                },
                style: {
                    marginRight: '8px'
                },
                on: {
                    'on-change': function onChange(flag) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["e" /* setChildrenNode */])(data, flag);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["f" /* setParentNode */])(root, data, flag);
                    }
                }
            }), h('span', data.title)])]);
        },
        load: function load() {
            var _this3 = this;

            this.loading = true;
            this.$axios.options.url = 'sys/role/read/list';
            this.$axios.request({
                data: this.searchModel
            }).then(function (response) {
                _this3.loading = false;
                if (response.httpCode != 200) {
                    _this3.items = [];
                    _this3.$Message.error('下载失败');
                    return;
                }
                _this3.total = response.data.total;
                _this3.items = response.data.list;
            }).catch(function (error) {
                _this3.loading = false;
                _this3.items = [];
                _this3.$Message.error(error);
            });
        },
        changePage: function changePage(pageNum) {
            this.searchModel.pageNum = pageNum;
            this.load();
        },
        confirm: function confirm() {
            var _this4 = this;

            this.sysMenuModel.menu.length = 0;
            this.$refs['sysMenuTree'].getSelectedNodes().forEach(function (value) {
                _this4.sysMenuModel.menu.push(value.id);
            });
            this.$axios.options.url = 'sys/role/menu/update';
            this.$axios.request({
                data: this.sysMenuModel
            }).then(function (response) {
                if (response.httpCode != 200) {
                    _this4.$Message.error('提交失败');
                    return;
                }
                _this4.sysMenuModal = false;
            }).catch(function (error) {
                _this4.$Message.error(error);
            });
        },
        showRole: function showRole(flag) {
            this.$refs['roleForm'].resetFields();
            this.isEdit = flag;
            if (!flag) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["g" /* clearObject */])(this.roleInfo);
            this.sysRoleModal = true;
        },
        submit: function submit(name) {
            var _this5 = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    _this5.loading = true;
                    _this5.$axios.options.url = _this5.isEdit ? 'sys/role/update' : 'sys/role/add';
                    _this5.$axios.request({
                        data: _this5.roleInfo
                    }).then(function (response) {
                        _this5.loading = false;
                        if (response.httpCode != 200) {
                            _this5.$Message.error(response.msg);
                            return;
                        }
                        _this5.changePage(_this5.isEdit ? _this5.searchModel.pageNum : 1);
                        _this5.sysRoleModal = false;
                    }).catch(function (error) {
                        _this5.loading = false;
                        _this5.$Message.error(error);
                    });
                }
            });
        }
    },
    mounted: function mounted() {
        var _this6 = this;

        this.$root.eventHub.$emit('breadcrumb');
        this.$root.eventHub.$on('delConfirm', function (params) {
            _this6.delete(params);
        });
        this.load();
    },
    beforeDestroy: function beforeDestroy() {
        this.$root.eventHub.$off('delConfirm');
    }
});

/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', [_c('Col', {
    attrs: {
      "span": "18"
    }
  }, [_c('Form', {
    attrs: {
      "inline": ""
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.changePage(1)
      }
    }
  }, [_c('FormItem', [_c('Input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "search": "",
      "placeholder": "关键字"
    },
    on: {
      "on-search": function($event) {
        _vm.changePage(1)
      }
    },
    model: {
      value: (_vm.searchModel.keyword),
      callback: function($$v) {
        _vm.$set(_vm.searchModel, "keyword", $$v)
      },
      expression: "searchModel.keyword"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "6"
    }
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        _vm.showRole(false)
      }
    }
  }, [_vm._v("\n            新建角色\n        ")])], 1)], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "loading": _vm.loading,
      "columns": _vm.columns,
      "data": _vm.items
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Page', {
    staticClass: "fr",
    attrs: {
      "total": _vm.total,
      "page-size": _vm.searchModel.pageSize,
      "current": _vm.searchModel.pageNum,
      "show-elevator": "",
      "show-total": ""
    },
    on: {
      "on-change": _vm.changePage
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "clear"
  }), _vm._v(" "), _c('Modal', {
    model: {
      value: (_vm.sysMenuModal),
      callback: function($$v) {
        _vm.sysMenuModal = $$v
      },
      expression: "sysMenuModal"
    }
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('h3', [_vm._v("\n                菜单\n            ")])]), _vm._v(" "), _c('div', [_c('Tree', {
    ref: "sysMenuTree",
    attrs: {
      "data": _vm.sysMenuList,
      "render": _vm.renderContent
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "text-right",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    on: {
      "click": function($event) {
        _vm.sysMenuModal = false
      }
    }
  }, [_vm._v("\n                取消\n            ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "loading": _vm.loading
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("\n               确认\n            ")])], 1)]), _vm._v(" "), _c('Modal', {
    model: {
      value: (_vm.sysRoleModal),
      callback: function($$v) {
        _vm.sysRoleModal = $$v
      },
      expression: "sysRoleModal"
    }
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('h3', [_vm._v("\n                角色\n            ")])]), _vm._v(" "), _c('div', [_c('Form', {
    ref: "roleForm",
    attrs: {
      "model": _vm.roleInfo,
      "rules": _vm.roleRules,
      "label-width": 70
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.submit('roleForm')
      }
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "roleName"
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
      value: (_vm.roleInfo.roleName),
      callback: function($$v) {
        _vm.$set(_vm.roleInfo, "roleName", $$v)
      },
      expression: "roleInfo.roleName"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "roleCode"
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
      value: (_vm.roleInfo.roleCode),
      callback: function($$v) {
        _vm.$set(_vm.roleInfo, "roleCode", $$v)
      },
      expression: "roleInfo.roleCode"
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
        _vm.sysRoleModal = false
      }
    }
  }, [_vm._v("\n                取消\n            ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "loading": _vm.loading
    },
    on: {
      "click": function($event) {
        _vm.submit('roleForm')
      }
    }
  }, [_vm._v("\n                保存\n            ")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-e3a1b6ba", module.exports)
  }
}

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1026),
  /* template */
  __webpack_require__(1181),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/role.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] role.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3a1b6ba", Component.options)
  } else {
    hotAPI.reload("data-v-e3a1b6ba", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb2xlLnZ1ZT8yNmZlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb2xlLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwic2VhcmNoTW9kZWwiLCJrZXl3b3JkIiwicGFnZU51bSIsInBhZ2VTaXplIiwiJGNvbmZpZyIsInN5c01lbnVNb2RlbCIsInJvbGVJZCIsIm1lbnUiLCJsb2FkaW5nIiwic3lzUm9sZU1vZGFsIiwic3lzTWVudU1vZGFsIiwic3lzTWVudUxpc3QiLCJ0b3RhbCIsImNvbHVtbnMiLCJ0aXRsZSIsImtleSIsImFsaWduIiwicmVuZGVyIiwiaCIsInBhcmFtcyIsInN0eWxlIiwiY29sb3IiLCJtYXJnaW4iLCJvbiIsImNsaWNrIiwic2hvd1JvbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJyb2xlSW5mbyIsInJvdyIsImlkIiwiJGF4aW9zIiwib3B0aW9ucyIsInVybCIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJodHRwQ29kZSIsIiRNZXNzYWdlIiwiZXJyb3IiLCJtc2ciLCJyb290IiwiZmlsdGVyIiwidmFsdWUiLCJwYXJlbnRJZCIsImdldFN5c01lbnVUcmVlRGF0YSIsImNhdGNoIiwiJHJvb3QiLCJldmVudEh1YiIsIiRlbWl0IiwiaXRlbXMiLCJyb2xlTmFtZSIsInJvbGVDb2RlIiwicm9sZVJ1bGVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwidHJpZ2dlciIsInR5cGUiLCJwYXR0ZXJuIiwiaXNFZGl0IiwibWV0aG9kcyIsImRlbGV0ZSIsImNoYW5nZVBhZ2UiLCJyZW5kZXJDb250ZW50Iiwibm9kZSIsImRpc3BsYXkiLCJ3aWR0aCIsInByb3BzIiwic2VsZWN0ZWQiLCJtYXJnaW5SaWdodCIsImZsYWciLCJzZXRDaGlsZHJlbk5vZGUiLCJzZXRQYXJlbnROb2RlIiwibG9hZCIsImxpc3QiLCJjb25maXJtIiwibGVuZ3RoIiwiJHJlZnMiLCJnZXRTZWxlY3RlZE5vZGVzIiwiZm9yRWFjaCIsInB1c2giLCJyZXNldEZpZWxkcyIsImNsZWFyT2JqZWN0Iiwic3VibWl0IiwibmFtZSIsInZhbGlkYXRlIiwidmFsaWQiLCJtb3VudGVkIiwiJG9uIiwiYmVmb3JlRGVzdHJveSIsIiRvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBTUEsK0RBQWU7QUFDWEEsUUFEVyxrQkFDSjtBQUFBOztBQUNILGVBQU87QUFDSEMseUJBQWE7QUFDVEMseUJBQVMsRUFEQTtBQUVUQyx5QkFBUyxDQUZBO0FBR1RDLDBCQUFVLEtBQUtDLE9BQUwsQ0FBYUQ7QUFIZCxhQURWO0FBTUhFLDBCQUFjO0FBQ1ZDLHdCQUFRLEVBREU7QUFFVkMsc0JBQU07QUFGSSxhQU5YO0FBVUhDLHFCQUFTLElBVk47QUFXSEMsMEJBQWMsS0FYWDtBQVlIQywwQkFBYyxLQVpYO0FBYUhDLHlCQUFhLEVBYlY7QUFjSEMsbUJBQU8sQ0FkSjtBQWVIQyxxQkFBUyxDQUFDO0FBQ0ZDLHVCQUFPLElBREw7QUFFRkMscUJBQUs7QUFGSCxhQUFELEVBSUw7QUFDSUQsdUJBQU8sSUFEWDtBQUVJQyxxQkFBSztBQUZULGFBSkssRUFRTDtBQUNJRCx1QkFBTyxJQURYO0FBRUlFLHVCQUFPLFFBRlg7QUFHSUMsd0JBQVEsZ0JBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQ25CLDJCQUFPRCxFQUFFLEtBQUYsRUFBUyxDQUNaQSxFQUFFLEdBQUYsRUFBTztBQUNIRSwrQkFBTztBQUNIQyxtQ0FBTyxTQURKO0FBRUhDLG9DQUFRO0FBRkwseUJBREo7QUFLSEMsNEJBQUk7QUFDQUMsbUNBQU8saUJBQU07QUFDVCxzQ0FBS0MsUUFBTCxDQUFjLElBQWQ7QUFDQUMsdUNBQU9DLE1BQVAsQ0FBYyxNQUFLQyxRQUFuQixFQUE2QlQsT0FBT1UsR0FBcEM7QUFDSDtBQUpEO0FBTEQscUJBQVAsRUFXRyxJQVhILENBRFksRUFhWlgsRUFBRSxHQUFGLEVBQU87QUFDSEUsK0JBQU87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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdHQUFnRyxhQUFhO0FBQzdHO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsImZpbGUiOiIzMy5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dGltZVV0aWwsIFxuICAgIGNsZWFyT2JqZWN0LCBcbiAgICBnZXRTeXNNZW51VHJlZURhdGEsIFxuICAgIHNldENoaWxkcmVuTm9kZSxcbiAgICBzZXRQYXJlbnROb2RlfSBmcm9tICcuLi9saWJzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VhcmNoTW9kZWw6IHtcbiAgICAgICAgICAgICAgICBrZXl3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICBwYWdlTnVtOiAxLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLiRjb25maWcucGFnZVNpemUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3lzTWVudU1vZGVsOiB7XG4gICAgICAgICAgICAgICAgcm9sZUlkOiAnJyxcbiAgICAgICAgICAgICAgICBtZW51OiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBzeXNSb2xlTW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgc3lzTWVudU1vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIHN5c01lbnVMaXN0OiBbXSxcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflkI3np7AnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdyb2xlTmFtZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvJbnoIEnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdyb2xlQ29kZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmk43kvZwnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjODYwQzE0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgM3B4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSb2xlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5yb2xlSW5mbywgcGFyYW1zLnJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAn57yW6L6RJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzg2MEMxNCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDNweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeXNNZW51TW9kZWwucm9sZUlkID0gcGFyYW1zLnJvdy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5c01lbnVMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnc3lzL3JvbGUvcmVhZC9tZW51JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcmFtcy5yb3cuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyA/IHJlc3BvbnNlLm1zZyA6ICfplJnor68nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm9vdCA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnBhcmVudElkID09PSAnMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTeXNNZW51VHJlZURhdGEocm9vdFswXSwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3lzTWVudUxpc3QgPSByb290O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5c01lbnVNb2RhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAn6I+c5Y2VJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzg2MEMxNCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDNweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5ldmVudEh1Yi4kZW1pdCgnZGVsZXRlJywgcGFyYW1zLnJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAn5Yig6ZmkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgcm9sZUluZm86IHtcbiAgICAgICAgICAgICAgICByb2xlTmFtZTogJycsXG4gICAgICAgICAgICAgICAgcm9sZUNvZGU6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9sZVJ1bGVzOiB7XG4gICAgICAgICAgICAgICAgcm9sZU5hbWU6IFt7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5b+F5aGr6aG5JyxcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2JsdXInXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgcm9sZUNvZGU6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICflv4XloavpobknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2JsdXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogL15bMC05QS1aYS16XXswLDIwfSQvLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+agvOW8j+mUmeivrycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYmx1cidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0VkaXQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZGVsZXRlKGlkKSB7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdzeXMvcm9sZS9kZWxldGUnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcign5Yig6Zmk5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKDEpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZW5kZXJDb250ZW50KGgsIHtcbiAgICAgICAgICAgIHJvb3QsXG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9KSB7XG4gICAgICAgICAgICByZXR1cm4gaCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICBoKCdzcGFuJywgW1xuICAgICAgICAgICAgICAgICAgICBoKCdDaGVja2JveCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29uLWNoYW5nZSc6IChmbGFnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoaWxkcmVuTm9kZShkYXRhLGZsYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJlbnROb2RlKHJvb3QsZGF0YSxmbGFnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGgoJ3NwYW4nLCBkYXRhLnRpdGxlKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdzeXMvcm9sZS9yZWFkL2xpc3QnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zZWFyY2hNb2RlbFxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcign5LiL6L295aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3BvbnNlLmRhdGEudG90YWw7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLmRhdGEubGlzdDtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VQYWdlKHBhZ2VOdW0pIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoTW9kZWwucGFnZU51bSA9IHBhZ2VOdW07XG4gICAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybSgpIHtcbiAgICAgICAgICAgIHRoaXMuc3lzTWVudU1vZGVsLm1lbnUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMuJHJlZnNbJ3N5c01lbnVUcmVlJ10uZ2V0U2VsZWN0ZWROb2RlcygpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeXNNZW51TW9kZWwubWVudS5wdXNoKHZhbHVlLmlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnc3lzL3JvbGUvbWVudS91cGRhdGUnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zeXNNZW51TW9kZWxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKCfmj5DkuqTlpLHotKUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN5c01lbnVNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzaG93Um9sZShmbGFnKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzWydyb2xlRm9ybSddLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgICB0aGlzLmlzRWRpdCA9IGZsYWc7XG4gICAgICAgICAgICBpZiAoIWZsYWcpXG4gICAgICAgICAgICAgICAgY2xlYXJPYmplY3QodGhpcy5yb2xlSW5mbyk7XG4gICAgICAgICAgICB0aGlzLnN5c1JvbGVNb2RhbCA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzW25hbWVdLnZhbGlkYXRlKCh2YWxpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9IHRoaXMuaXNFZGl0ID8gJ3N5cy9yb2xlL3VwZGF0ZScgOiAnc3lzL3JvbGUvYWRkJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnJvbGVJbmZvXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMuaXNFZGl0ID8gdGhpcy5zZWFyY2hNb2RlbC5wYWdlTnVtIDogMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5c1JvbGVNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC5ldmVudEh1Yi4kZW1pdCgnYnJlYWRjcnVtYicpO1xuICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRvbignZGVsQ29uZmlybScsIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKHBhcmFtcyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJG9mZignZGVsQ29uZmlybScpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb2xlLmpzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaW5saW5lXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoISgnYnV0dG9uJyBpbiAkZXZlbnQpICYmIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKSkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnSW5wdXQnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIzMDBweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJzZWFyY2hcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLlhbPplK7lrZdcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tc2VhcmNoXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaE1vZGVsLmtleXdvcmQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoTW9kZWwsIFwia2V5d29yZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hNb2RlbC5rZXl3b3JkXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiLFxuICAgICAgXCJpY29uXCI6IFwibWQtYWRkXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc2hvd1JvbGUoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5paw5bu66KeS6ImyXFxuICAgICAgICBcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsb2FkaW5nXCI6IF92bS5sb2FkaW5nLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5pdGVtc1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUGFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvdGFsXCI6IF92bS50b3RhbCxcbiAgICAgIFwicGFnZS1zaXplXCI6IF92bS5zZWFyY2hNb2RlbC5wYWdlU2l6ZSxcbiAgICAgIFwiY3VycmVudFwiOiBfdm0uc2VhcmNoTW9kZWwucGFnZU51bSxcbiAgICAgIFwic2hvdy1lbGV2YXRvclwiOiBcIlwiLFxuICAgICAgXCJzaG93LXRvdGFsXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uY2hhbmdlUGFnZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xlYXJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ01vZGFsJywge1xuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zeXNNZW51TW9kYWwpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc3lzTWVudU1vZGFsID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzeXNNZW51TW9kYWxcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImhlYWRlclwiXG4gICAgfSxcbiAgICBzbG90OiBcImhlYWRlclwiXG4gIH0sIFtfYygnaDMnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOiPnOWNlVxcbiAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ1RyZWUnLCB7XG4gICAgcmVmOiBcInN5c01lbnVUcmVlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YVwiOiBfdm0uc3lzTWVudUxpc3QsXG4gICAgICBcInJlbmRlclwiOiBfdm0ucmVuZGVyQ29udGVudFxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImZvb3RlclwiXG4gICAgfSxcbiAgICBzbG90OiBcImZvb3RlclwiXG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc3lzTWVudU1vZGFsID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5Y+W5raIXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIixcbiAgICAgIFwibG9hZGluZ1wiOiBfdm0ubG9hZGluZ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNvbmZpcm1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICDnoa7orqRcXG4gICAgICAgICAgICBcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdNb2RhbCcsIHtcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc3lzUm9sZU1vZGFsKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLnN5c1JvbGVNb2RhbCA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic3lzUm9sZU1vZGFsXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJoZWFkZXJcIlxuICAgIH0sXG4gICAgc2xvdDogXCJoZWFkZXJcIlxuICB9LCBbX2MoJ2gzJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDop5LoibJcXG4gICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdGb3JtJywge1xuICAgIHJlZjogXCJyb2xlRm9ybVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVsXCI6IF92bS5yb2xlSW5mbyxcbiAgICAgIFwicnVsZXNcIjogX3ZtLnJvbGVSdWxlcyxcbiAgICAgIFwibGFiZWwtd2lkdGhcIjogNzBcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoISgnYnV0dG9uJyBpbiAkZXZlbnQpICYmIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKSkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICBfdm0uc3VibWl0KCdyb2xlRm9ybScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInByb3BcIjogXCJyb2xlTmFtZVwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlkI3np7BcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnSW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLlkI3np7BcIixcbiAgICAgIFwibWF4bGVuZ3RoXCI6IDIwLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnJvbGVJbmZvLnJvbGVOYW1lKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLnJvbGVJbmZvLCBcInJvbGVOYW1lXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInJvbGVJbmZvLnJvbGVOYW1lXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwcm9wXCI6IFwicm9sZUNvZGVcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg57yW56CBXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi57yW56CBXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiAyMCxcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5yb2xlSW5mby5yb2xlQ29kZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5yb2xlSW5mbywgXCJyb2xlQ29kZVwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJyb2xlSW5mby5yb2xlQ29kZVwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImZvb3RlclwiXG4gICAgfSxcbiAgICBzbG90OiBcImZvb3RlclwiXG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc3lzUm9sZU1vZGFsID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5Y+W5raIXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIixcbiAgICAgIFwibG9hZGluZ1wiOiBfdm0ubG9hZGluZ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zdWJtaXQoJ3JvbGVGb3JtJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5L+d5a2YXFxuICAgICAgICAgICAgXCIpXSldLCAxKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZTNhMWI2YmFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1lM2ExYjZiYVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3JvbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMzMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9yb2xlLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1lM2ExYjZiYVxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9yb2xlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy9yb2xlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHJvbGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWUzYTFiNmJhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTNhMWI2YmFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3JvbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA5MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAzMyJdLCJzb3VyY2VSb290IjoiIn0=