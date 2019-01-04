webpackJsonp([32],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this2 = this;

        var _this = this;
        return {
            searchModel: {
                sysType: 1,
                keyword: '',
                pageNum: 1,
                pageSize: this.$config.pageSize
            },
            sysRoleList: [],
            sysRoleModal: false,
            sysUserModal: false,
            loading: true,
            total: 1,
            menuList: ['编辑', '角色', '重置密码', '解冻/冻结账号'],
            columns: [{
                title: '账号',
                key: 'account'
            }, {
                title: '名称',
                key: 'userName'
            }, {
                title: '部门',
                key: 'deptName'
            }, {
                title: '联系方式',
                key: 'phone'
            }, {
                title: '冻结',
                maxWidth: 100,
                key: 'lockedText'
            }, {
                title: '操作',
                align: 'center',
                width: 80,
                render: function render(h, params) {
                    return h('Dropdown', {
                        props: {
                            placement: "bottom-end",
                            trigger: 'click'
                        },
                        on: {
                            'on-click': function onClick(name) {
                                switch (name) {
                                    case '编辑':
                                        _this2.showUser(true);
                                        Object.assign(_this2.userInfo, params.row);
                                        _this2.userInfo.password = null;
                                        if (params.row.avatar) {
                                            _this2.userInfo.avatar = params.row.avatar;
                                        }
                                        // if (this.userInfo.avatar) {
                                        //     this.$refs['uploadPhoto'].defaultFileList.length = 0;
                                        //     this.$refs['uploadPhoto'].defaultFileList.push({
                                        //         id:this.userInfo.avatar,
                                        //         name: this.userInfo.avatar,
                                        //         url: this.$config.downloadUrl + this.userInfo.avatar
                                        //     });
                                        // }
                                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["h" /* setSelectedNode */])(_this2.deptList, _this2.userInfo.deptId);
                                        break;
                                    case '角色':
                                        _this2.currentId = params.row.id;
                                        _this2.$axios.options.url = 'sys/user/read/role';
                                        _this2.$axios.request({
                                            data: {
                                                id: params.row.id,
                                                sysType: 1
                                                // sysType: this.$localStorage.get('sys')
                                            }
                                        }).then(function (response) {
                                            if (response.httpCode != 200) {
                                                _this2.sysRoleList = [];
                                                return;
                                            }
                                            response.dicts.forEach(function (value) {
                                                value.title = value.roleName;
                                                value.checked = value.isSelected === '1';
                                            });
                                            _this2.sysRoleList = response.dicts;
                                        }).catch(function (error) {
                                            _this2.sysRoleList = [];
                                        });
                                        _this2.sysRoleModal = true;
                                        break;
                                    case '重置密码':
                                        _this2.$axios.options.url = 'sys/user/update/resetPassword';
                                        _this2.$axios.request({
                                            data: {
                                                id: params.row.id
                                            }
                                        }).then(function (response) {
                                            if (response.httpCode != 200) {
                                                _this2.$Message.error('操作失败');
                                                return;
                                            }
                                            _this2.$Message.success('操作成功');
                                        }).catch(function (error) {
                                            _this2.$Message.error(error);
                                        });
                                        break;
                                    case '解冻/冻结账号':
                                        _this2.$axios.options.url = 'sys/user/lock';
                                        _this2.$axios.request({
                                            data: {
                                                id: params.row.id,
                                                lock: params.row.locked ? 0 : 1
                                            }
                                        }).then(function (response) {
                                            if (response.httpCode != 200) {
                                                _this2.$Message.error('操作失败');
                                                return;
                                            }
                                            params.row.locked = !params.row.locked;
                                            params.row.lockedText = params.row.locked ? '确认' : '取消';
                                        }).catch(function (error) {
                                            _this2.$Message.error(error);
                                        });
                                        break;
                                }
                            }
                        }
                    }, [h('a', {
                        style: {
                            color: '#860C14'
                        }
                    }, [h('span', '菜单'), h('Icon', {
                        props: {
                            type: 'ios-arrow-down'
                        }
                    })]), h('DropdownMenu', {
                        slot: 'list',
                        style: {
                            'text-align': 'left'
                        }
                    }, _this2.menuList.map(function (item) {
                        return h('DropdownItem', {
                            props: {
                                name: item
                            }
                        }, item);
                    }))]);
                }
            }],
            items: [],
            userInfo: {
                account: '',
                userName: '',
                phone: '',
                deptName: '',
                deptId: ''
            },
            userRules: {
                account: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                userName: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                phone: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }, {
                    type: 'string',
                    pattern: /^\d{11,18}$/,
                    message: '格式错误',
                    trigger: 'blur'
                }],
                deptName: [{
                    required: true,
                    message: '必填'
                }]
            },
            deptList: [],
            agencyDeptList: [],
            departmentModal: false,
            isEdit: false,
            currentId: null
        };
    },

    methods: {
        load: function load() {
            var _this3 = this;

            this.loading = true;
            this.$axios.options.url = '/sys/user/read/list';
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
                response.data.list.forEach(function (value, index) {
                    value.lockedText = value.locked ? '确认' : '取消';
                    value._highlight = index === _this3.$router.currentRoute.params.index;
                });
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
        showUser: function showUser(flag) {
            this.$refs['userForm'].resetFields();
            // this.$refs['uploadPhoto'].clearFiles();
            this.isEdit = flag;
            if (!flag) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["g" /* clearObject */])(this.userInfo);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["h" /* setSelectedNode */])(this.deptList, '');
            }
            this.sysUserModal = true;
        },
        ok: function ok() {
            var _this4 = this;

            this.loading = true;
            var data = [];
            this.$refs['sysRoleTree'].getCheckedNodes().forEach(function (value) {
                data.push(value.roleId);
            });
            this.$axios.options.url = 'sys/user/role/add';
            this.$axios.request({
                data: {
                    id: this.currentId,
                    role: data,
                    sysType: 1
                    // sysType: this.$localStorage.get('sys')
                }
            }).then(function (response) {
                _this4.loading = false;
                if (response.httpCode != 200) {
                    _this4.$Message.error('提交失败');
                    return;
                }
                _this4.sysRoleModal = false;
            }).catch(function (error) {
                _this4.loading = false;
                _this4.$Message.error(error);
            });
        },
        submit: function submit(name) {
            var _this5 = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    _this5.loading = true;
                    _this5.$axios.options.url = _this5.isEdit ? 'sys/user/update' : 'sys/user/add';
                    if (_this5.$refs['uploadPhoto'].fileList.length > 0) {
                        _this5.userInfo.avatar = _this5.$refs['uploadPhoto'].fileList[0].id;
                    }
                    _this5.$axios.request({
                        data: _this5.userInfo
                    }).then(function (response) {
                        _this5.loading = false;
                        if (response.httpCode != 200) {
                            _this5.$Message.error('提交失败');
                            return;
                        }
                        _this5.changePage(_this5.isEdit ? _this5.searchModel.pageNum : 1);
                        _this5.sysUserModal = false;
                    }).catch(function (error) {
                        _this5.loading = false;
                        _this5.$Message.error(error);
                    });
                }
            });
        },
        confirm: function confirm() {
            var _this6 = this;

            var nodes = this.$refs['deptTree'].getSelectedNodes();
            if (this.sysUserModal) {
                if (nodes.length > 0) {
                    this.userInfo.deptId = nodes[0].id;
                    this.userInfo.deptName = nodes[0].title;
                }
                this.departmentModal = false;
            } else {
                this.$axios.options.url = 'asm/asmDeptAgent/update';
                this.loading = true;
                this.$axios.request({
                    data: {
                        deptId: nodes.length > 0 ? nodes[0].id : null,
                        userId: this.currentId
                    }
                }).then(function (response) {
                    _this6.loading = false;
                    if (response.httpCode != 200) {
                        _this6.$Message.error('提交失败');
                        return;
                    }
                    _this6.departmentModal = false;
                    _this6.changePage(_this6.searchModel.pageNum);
                }).catch(function (error) {
                    _this6.loading = _this6.departmentModal = false;
                    _this6.$Message.error(error);
                });
            }
        },
        loadDept: function loadDept() {
            var _this7 = this;

            this.$axios.options.url = 'sys/dept/read/allDept';
            this.$axios.request().then(function (response) {
                if (response.httpCode != 200) {
                    _this7.deptList = [];
                    return;
                }
                var root = response.data.filter(function (value) {
                    return value.parentId === '-1';
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["i" /* getTreeData */])(root[0], response.data);
                _this7.deptList = root;
            }).catch(function (error) {
                _this7.deptList = [];
                _this7.$Message.error(error);
            });
        },
        preview: function preview(file) {
            window.open(file.url ? file.url : this.$config.downloadUrl + file.response.data.files[0].id);
        },
        uploadPhotoSuccess: function uploadPhotoSuccess(response, file, fileList) {
            if (fileList.length > 1) fileList.shift();
            fileList[0].id = response.data.files[0].id;
        },
        uploadError: function uploadError(error, file, fileList) {
            fileList.splice(fileList.indexOf(file), 1);
            this.$Message.error(error);
        }
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        this.load();
        this.loadDept();
    },
    beforeDestroy: function beforeDestroy() {
        this.$root.eventHub.$off('delConfirm');
    }
});

/***/ }),

/***/ 1107:
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
        _vm.showUser(false)
      }
    }
  }, [_vm._v("\n            新用户\n        ")])], 1)], 1), _vm._v(" "), _c('Table', {
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
  }, [_c('h3', [_vm._v("\n                角色\n            ")])]), _vm._v(" "), _c('div', [_c('Tree', {
    ref: "sysRoleTree",
    attrs: {
      "data": _vm.sysRoleList,
      "show-checkbox": ""
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
        _vm.sysRoleModal = false
      }
    }
  }, [_vm._v("\n                取消\n            ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "loading": _vm.loading
    },
    on: {
      "click": _vm.ok
    }
  }, [_vm._v("\n                确认\n            ")])], 1)]), _vm._v(" "), _c('Modal', {
    model: {
      value: (_vm.sysUserModal),
      callback: function($$v) {
        _vm.sysUserModal = $$v
      },
      expression: "sysUserModal"
    }
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('h3', [_vm._v("\n                用户\n            ")])]), _vm._v(" "), _c('div', [_c('Form', {
    ref: "userForm",
    attrs: {
      "model": _vm.userInfo,
      "rules": _vm.userRules,
      "label-width": 90
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.submit('userForm')
      }
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "account"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                        账号\n                    ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "placeholder": "账号",
      "maxlength": 20,
      "type": "text",
      "clearable": ""
    },
    model: {
      value: (_vm.userInfo.account),
      callback: function($$v) {
        _vm.$set(_vm.userInfo, "account", $$v)
      },
      expression: "userInfo.account"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "userName"
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
      value: (_vm.userInfo.userName),
      callback: function($$v) {
        _vm.$set(_vm.userInfo, "userName", $$v)
      },
      expression: "userInfo.userName"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "phone"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                       联系方式\n                    ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "placeholder": "联系方式",
      "type": "text",
      "clearable": ""
    },
    model: {
      value: (_vm.userInfo.phone),
      callback: function($$v) {
        _vm.$set(_vm.userInfo, "phone", $$v)
      },
      expression: "userInfo.phone"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "deptName"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                        部门\n                    ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "placeholder": "部门",
      "type": "text",
      "readonly": "",
      "clearable": ""
    },
    model: {
      value: (_vm.userInfo.deptName),
      callback: function($$v) {
        _vm.$set(_vm.userInfo, "deptName", $$v)
      },
      expression: "userInfo.deptName"
    }
  }, [_c('Button', {
    attrs: {
      "slot": "prepend",
      "icon": "md-list"
    },
    on: {
      "click": function($event) {
        _vm.departmentModal = true
      }
    },
    slot: "prepend"
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "text-right",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    on: {
      "click": function($event) {
        _vm.sysUserModal = false
      }
    }
  }, [_vm._v("\n                取消\n            ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "loading": _vm.loading
    },
    on: {
      "click": function($event) {
        _vm.submit('userForm')
      }
    }
  }, [_vm._v("\n                确认\n            ")])], 1)]), _vm._v(" "), _c('Modal', {
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
  }, [_c('h3', [_vm._v("\n                部门\n            ")])]), _vm._v(" "), _c('div', [_c('Tree', {
    ref: "deptTree",
    attrs: {
      "data": _vm.deptList
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
        _vm.departmentModal = false
      }
    }
  }, [_vm._v("\n               取消\n            ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "loading": _vm.loading
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("\n               确认\n            ")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-171c33ca", module.exports)
  }
}

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1027),
  /* template */
  __webpack_require__(1107),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/sysUser.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sysUser.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-171c33ca", Component.options)
  } else {
    hotAPI.reload("data-v-171c33ca", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zeXNVc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zeXNVc2VyLnZ1ZT8yODJmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zeXNVc2VyLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJzZWFyY2hNb2RlbCIsInN5c1R5cGUiLCJrZXl3b3JkIiwicGFnZU51bSIsInBhZ2VTaXplIiwiJGNvbmZpZyIsInN5c1JvbGVMaXN0Iiwic3lzUm9sZU1vZGFsIiwic3lzVXNlck1vZGFsIiwibG9hZGluZyIsInRvdGFsIiwibWVudUxpc3QiLCJjb2x1bW5zIiwidGl0bGUiLCJrZXkiLCJtYXhXaWR0aCIsImFsaWduIiwid2lkdGgiLCJyZW5kZXIiLCJoIiwicGFyYW1zIiwicHJvcHMiLCJwbGFjZW1lbnQiLCJ0cmlnZ2VyIiwib24iLCJuYW1lIiwic2hvd1VzZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJ1c2VySW5mbyIsInJvdyIsInBhc3N3b3JkIiwiYXZhdGFyIiwic2V0U2VsZWN0ZWROb2RlIiwiZGVwdExpc3QiLCJkZXB0SWQiLCJjdXJyZW50SWQiLCJpZCIsIiRheGlvcyIsIm9wdGlvbnMiLCJ1cmwiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiaHR0cENvZGUiLCJkaWN0cyIsImZvckVhY2giLCJ2YWx1ZSIsInJvbGVOYW1lIiwiY2hlY2tlZCIsImlzU2VsZWN0ZWQiLCJjYXRjaCIsImVycm9yIiwiJE1lc3NhZ2UiLCJzdWNjZXNzIiwibG9jayIsImxvY2tlZCIsImxvY2tlZFRleHQiLCJzdHlsZSIsImNvbG9yIiwidHlwZSIsInNsb3QiLCJtYXAiLCJpdGVtIiwiaXRlbXMiLCJhY2NvdW50IiwidXNlck5hbWUiLCJwaG9uZSIsImRlcHROYW1lIiwidXNlclJ1bGVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwicGF0dGVybiIsImFnZW5jeURlcHRMaXN0IiwiZGVwYXJ0bWVudE1vZGFsIiwiaXNFZGl0IiwibWV0aG9kcyIsImxvYWQiLCJsaXN0IiwiaW5kZXgiLCJfaGlnaGxpZ2h0IiwiJHJvdXRlciIsImN1cnJlbnRSb3V0ZSIsImNoYW5nZVBhZ2UiLCJmbGFnIiwiJHJlZnMiLCJyZXNldEZpZWxkcyIsImNsZWFyT2JqZWN0Iiwib2siLCJnZXRDaGVja2VkTm9kZXMiLCJwdXNoIiwicm9sZUlkIiwicm9sZSIsInN1Ym1pdCIsInZhbGlkYXRlIiwidmFsaWQiLCJmaWxlTGlzdCIsImxlbmd0aCIsImNvbmZpcm0iLCJub2RlcyIsImdldFNlbGVjdGVkTm9kZXMiLCJ1c2VySWQiLCJsb2FkRGVwdCIsInJvb3QiLCJmaWx0ZXIiLCJwYXJlbnRJZCIsImdldFRyZWVEYXRhIiwicHJldmlldyIsImZpbGUiLCJ3aW5kb3ciLCJvcGVuIiwiZG93bmxvYWRVcmwiLCJmaWxlcyIsInVwbG9hZFBob3RvU3VjY2VzcyIsInNoaWZ0IiwidXBsb2FkRXJyb3IiLCJzcGxpY2UiLCJpbmRleE9mIiwibW91bnRlZCIsIiRyb290IiwiZXZlbnRIdWIiLCIkZW1pdCIsImJlZm9yZURlc3Ryb3kiLCIkb2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLCtEQUFlO0FBQ1hBLFFBRFcsa0JBQ0o7QUFBQTs7QUFDSCxZQUFNQyxRQUFRLElBQWQ7QUFDQSxlQUFPO0FBQ0hDLHlCQUFhO0FBQ1RDLHlCQUFTLENBREE7QUFFVEMseUJBQVMsRUFGQTtBQUdUQyx5QkFBUyxDQUhBO0FBSVRDLDBCQUFVLEtBQUtDLE9BQUwsQ0FBYUQ7QUFKZCxhQURWO0FBT0hFLHlCQUFhLEVBUFY7QUFRSEMsMEJBQWMsS0FSWDtBQVNIQywwQkFBYyxLQVRYO0FBVUhDLHFCQUFTLElBVk47QUFXSEMsbUJBQU8sQ0FYSjtBQVlIQyxzQkFBVSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsTUFBYixFQUFxQixTQUFyQixDQVpQO0FBYUhDLHFCQUFTLENBQUM7QUFDRkMsdUJBQU8sSUFETDtBQUVGQyxxQkFBSztBQUZILGFBQUQs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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnR0FBZ0csYUFBYTtBQUM3RztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsImZpbGUiOiIzMi5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dGltZVV0aWwsIGdldFRyZWVEYXRhLCBzZXRTZWxlY3RlZE5vZGUsIGNsZWFyT2JqZWN0fSBmcm9tICcuLi9saWJzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWFyY2hNb2RlbDoge1xuICAgICAgICAgICAgICAgIHN5c1R5cGU6IDEsXG4gICAgICAgICAgICAgICAga2V5d29yZDogJycsXG4gICAgICAgICAgICAgICAgcGFnZU51bTogMSxcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy4kY29uZmlnLnBhZ2VTaXplLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN5c1JvbGVMaXN0OiBbXSxcbiAgICAgICAgICAgIHN5c1JvbGVNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBzeXNVc2VyTW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHRvdGFsOiAxLFxuICAgICAgICAgICAgbWVudUxpc3Q6IFsn57yW6L6RJywgJ+inkuiJsicsICfph43nva7lr4bnoIEnLCAn6Kej5Ya7L+WGu+e7k+i0puWPtyddLFxuICAgICAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfotKblj7cnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdhY2NvdW50J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WQjeensCcsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3VzZXJOYW1lJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+mDqOmXqCcsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2RlcHROYW1lJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+iBlOezu+aWueW8jycsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Bob25lJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WGu+e7kycsXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2xvY2tlZFRleHQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pON5L2cJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0Ryb3Bkb3duJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJib3R0b20tZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb24tY2xpY2snOiAobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAn57yW6L6RJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VXNlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnVzZXJJbmZvLCBwYXJhbXMucm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5wYXNzd29yZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucm93LmF2YXRhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5hdmF0YXIgPSBwYXJhbXMucm93LmF2YXRhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy51c2VySW5mby5hdmF0YXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuJHJlZnNbJ3VwbG9hZFBob3RvJ10uZGVmYXVsdEZpbGVMaXN0Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLiRyZWZzWyd1cGxvYWRQaG90byddLmRlZmF1bHRGaWxlTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZDp0aGlzLnVzZXJJbmZvLmF2YXRhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBuYW1lOiB0aGlzLnVzZXJJbmZvLmF2YXRhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB1cmw6IHRoaXMuJGNvbmZpZy5kb3dubG9hZFVybCArIHRoaXMudXNlckluZm8uYXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZE5vZGUodGhpcy5kZXB0TGlzdCwgdGhpcy51c2VySW5mby5kZXB0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICfop5LoibInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5yb3cuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ3N5cy91c2VyL3JlYWQvcm9sZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMucm93LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5c1R5cGU6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzeXNUeXBlOiB0aGlzLiRsb2NhbFN0b3JhZ2UuZ2V0KCdzeXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3lzUm9sZUxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kaWN0cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnRpdGxlID0gdmFsdWUucm9sZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuY2hlY2tlZCA9IHZhbHVlLmlzU2VsZWN0ZWQgPT09ICcxJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeXNSb2xlTGlzdCA9IHJlc3BvbnNlLmRpY3RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3lzUm9sZUxpc3QgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeXNSb2xlTW9kYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICfph43nva7lr4bnoIEnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdzeXMvdXNlci91cGRhdGUvcmVzZXRQYXNzd29yZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMucm93LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoJ+aTjeS9nOWksei0pScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2Uuc3VjY2Vzcygn5pON5L2c5oiQ5YqfJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ+ino+WGuy/lhrvnu5PotKblj7cnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdzeXMvdXNlci9sb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcmFtcy5yb3cuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jazogcGFyYW1zLnJvdy5sb2NrZWQgPyAwIDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoJ+aTjeS9nOWksei0pScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cubG9ja2VkID0gIXBhcmFtcy5yb3cubG9ja2VkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5sb2NrZWRUZXh0ID0gcGFyYW1zLnJvdy5sb2NrZWQgPyAn56Gu6K6kJyA6ICflj5bmtognO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzg2MEMxNCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnc3BhbicsICfoj5zljZUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2lvcy1hcnJvdy1kb3duJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ0Ryb3Bkb3duTWVudScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogJ2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtYWxpZ24nOiAnbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMubWVudUxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdEcm9wZG93bkl0ZW0nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiAnJyxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogJycsXG4gICAgICAgICAgICAgICAgcGhvbmU6ICcnLFxuICAgICAgICAgICAgICAgIGRlcHROYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBkZXB0SWQ6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlclJ1bGVzOiB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogW3tcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICflv4XloasnLFxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYmx1cidcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogW3tcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICflv4XloasnLFxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYmx1cidcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBwaG9uZTogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+W/heWhqycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYmx1cidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlxcZHsxMSwxOH0kLyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfmoLzlvI/plJnor68nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2JsdXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGRlcHROYW1lOiBbe1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+W/heWhqydcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcHRMaXN0OiBbXSxcbiAgICAgICAgICAgIGFnZW5jeURlcHRMaXN0OiBbXSxcbiAgICAgICAgICAgIGRlcGFydG1lbnRNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBpc0VkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgY3VycmVudElkOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvc3lzL3VzZXIvcmVhZC9saXN0JztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc2VhcmNoTW9kZWxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoJ+S4i+i9veWksei0pScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEubGlzdC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUubG9ja2VkVGV4dCA9IHZhbHVlLmxvY2tlZCA/ICfnoa7orqQnIDogJ+WPlua2iCc7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLl9oaWdobGlnaHQgPSBpbmRleCA9PT0gdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaW5kZXg7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLmRhdGEubGlzdDtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VQYWdlKHBhZ2VOdW0pIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoTW9kZWwucGFnZU51bSA9IHBhZ2VOdW07XG4gICAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd1VzZXIoZmxhZykge1xuICAgICAgICAgICAgdGhpcy4kcmVmc1sndXNlckZvcm0nXS5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgLy8gdGhpcy4kcmVmc1sndXBsb2FkUGhvdG8nXS5jbGVhckZpbGVzKCk7XG4gICAgICAgICAgICB0aGlzLmlzRWRpdCA9IGZsYWc7XG4gICAgICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgICAgICBjbGVhck9iamVjdCh0aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZE5vZGUodGhpcy5kZXB0TGlzdCwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zeXNVc2VyTW9kYWwgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBvaygpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgICAgICAgdGhpcy4kcmVmc1snc3lzUm9sZVRyZWUnXS5nZXRDaGVja2VkTm9kZXMoKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEucHVzaCh2YWx1ZS5yb2xlSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdzeXMvdXNlci9yb2xlL2FkZCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmN1cnJlbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgc3lzVHlwZTogMVxuICAgICAgICAgICAgICAgICAgICAvLyBzeXNUeXBlOiB0aGlzLiRsb2NhbFN0b3JhZ2UuZ2V0KCdzeXMnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKCfmj5DkuqTlpLHotKUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN5c1JvbGVNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWl0KG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnNbbmFtZV0udmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gdGhpcy5pc0VkaXQgPyAnc3lzL3VzZXIvdXBkYXRlJyA6ICdzeXMvdXNlci9hZGQnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4kcmVmc1sndXBsb2FkUGhvdG8nXS5maWxlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmF2YXRhciA9IHRoaXMuJHJlZnNbJ3VwbG9hZFBob3RvJ10uZmlsZUxpc3RbMF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKCfmj5DkuqTlpLHotKUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhZ2UodGhpcy5pc0VkaXQgPyB0aGlzLnNlYXJjaE1vZGVsLnBhZ2VOdW0gOiAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3lzVXNlck1vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtKCkge1xuICAgICAgICAgICAgbGV0IG5vZGVzID0gdGhpcy4kcmVmc1snZGVwdFRyZWUnXS5nZXRTZWxlY3RlZE5vZGVzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zeXNVc2VyTW9kYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmRlcHRJZCA9IG5vZGVzWzBdLmlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmRlcHROYW1lID0gbm9kZXNbMF0udGl0bGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudE1vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ2FzbS9hc21EZXB0QWdlbnQvdXBkYXRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0SWQ6IG5vZGVzLmxlbmd0aCA+IDAgPyBub2Rlc1swXS5pZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMuY3VycmVudElkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcign5o+Q5Lqk5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50TW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMuc2VhcmNoTW9kZWwucGFnZU51bSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRoaXMuZGVwYXJ0bWVudE1vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsb2FkRGVwdCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ3N5cy9kZXB0L3JlYWQvYWxsRGVwdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVwdExpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgcm9vdCA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUucGFyZW50SWQgPT09ICctMSc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZ2V0VHJlZURhdGEocm9vdFswXSwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXB0TGlzdCA9IHJvb3Q7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlcHRMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmlldyhmaWxlKSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihmaWxlLnVybCA/IGZpbGUudXJsIDogdGhpcy4kY29uZmlnLmRvd25sb2FkVXJsICsgZmlsZS5yZXNwb25zZS5kYXRhLmZpbGVzWzBdLmlkKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBsb2FkUGhvdG9TdWNjZXNzKHJlc3BvbnNlLCBmaWxlLCBmaWxlTGlzdCkge1xuICAgICAgICAgICAgaWYgKGZpbGVMaXN0Lmxlbmd0aCA+IDEpXG4gICAgICAgICAgICAgICAgZmlsZUxpc3Quc2hpZnQoKTtcbiAgICAgICAgICAgIGZpbGVMaXN0WzBdLmlkID0gcmVzcG9uc2UuZGF0YS5maWxlc1swXS5pZDtcbiAgICAgICAgfSxcbiAgICAgICAgdXBsb2FkRXJyb3IoZXJyb3IsIGZpbGUsIGZpbGVMaXN0KSB7XG4gICAgICAgICAgICBmaWxlTGlzdC5zcGxpY2UoZmlsZUxpc3QuaW5kZXhPZihmaWxlKSwgMSk7XG4gICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JyZWFkY3J1bWInKTtcbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIHRoaXMubG9hZERlcHQoKTtcbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJG9mZignZGVsQ29uZmlybScpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zeXNVc2VyLmpzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxOFwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaW5saW5lXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoISgnYnV0dG9uJyBpbiAkZXZlbnQpICYmIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKSkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdGb3JtSXRlbScsIFtfYygnSW5wdXQnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIzMDBweFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJzZWFyY2hcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLlhbPplK7lrZdcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tc2VhcmNoXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaE1vZGVsLmtleXdvcmQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoTW9kZWwsIFwia2V5d29yZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hNb2RlbC5rZXl3b3JkXCJcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiLFxuICAgICAgXCJpY29uXCI6IFwibWQtYWRkXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc2hvd1VzZXIoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5paw55So5oi3XFxuICAgICAgICBcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsb2FkaW5nXCI6IF92bS5sb2FkaW5nLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5pdGVtc1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUGFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvdGFsXCI6IF92bS50b3RhbCxcbiAgICAgIFwicGFnZS1zaXplXCI6IF92bS5zZWFyY2hNb2RlbC5wYWdlU2l6ZSxcbiAgICAgIFwiY3VycmVudFwiOiBfdm0uc2VhcmNoTW9kZWwucGFnZU51bSxcbiAgICAgIFwic2hvdy1lbGV2YXRvclwiOiBcIlwiLFxuICAgICAgXCJzaG93LXRvdGFsXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uY2hhbmdlUGFnZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xlYXJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ01vZGFsJywge1xuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zeXNSb2xlTW9kYWwpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc3lzUm9sZU1vZGFsID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzeXNSb2xlTW9kYWxcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImhlYWRlclwiXG4gICAgfSxcbiAgICBzbG90OiBcImhlYWRlclwiXG4gIH0sIFtfYygnaDMnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOinkuiJslxcbiAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ1RyZWUnLCB7XG4gICAgcmVmOiBcInN5c1JvbGVUcmVlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YVwiOiBfdm0uc3lzUm9sZUxpc3QsXG4gICAgICBcInNob3ctY2hlY2tib3hcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImZvb3RlclwiXG4gICAgfSxcbiAgICBzbG90OiBcImZvb3RlclwiXG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc3lzUm9sZU1vZGFsID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5Y+W5raIXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIixcbiAgICAgIFwibG9hZGluZ1wiOiBfdm0ubG9hZGluZ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9rXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOehruiupFxcbiAgICAgICAgICAgIFwiKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ01vZGFsJywge1xuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zeXNVc2VyTW9kYWwpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc3lzVXNlck1vZGFsID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzeXNVc2VyTW9kYWxcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImhlYWRlclwiXG4gICAgfSxcbiAgICBzbG90OiBcImhlYWRlclwiXG4gIH0sIFtfYygnaDMnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOeUqOaIt1xcbiAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ0Zvcm0nLCB7XG4gICAgcmVmOiBcInVzZXJGb3JtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibW9kZWxcIjogX3ZtLnVzZXJJbmZvLFxuICAgICAgXCJydWxlc1wiOiBfdm0udXNlclJ1bGVzLFxuICAgICAgXCJsYWJlbC13aWR0aFwiOiA5MFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwia2V5dXBcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICghKCdidXR0b24nIGluICRldmVudCkgJiYgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpKSB7IHJldHVybiBudWxsOyB9XG4gICAgICAgIF92bS5zdWJtaXQoJ3VzZXJGb3JtJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcImFjY291bnRcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6LSm5Y+3XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6LSm5Y+3XCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiAyMCxcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS51c2VySW5mby5hY2NvdW50KSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXJJbmZvLCBcImFjY291bnRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwidXNlckluZm8uYWNjb3VudFwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvcFwiOiBcInVzZXJOYW1lXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJsYWJlbFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWQjeensFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWQjeensFwiLFxuICAgICAgXCJtYXhsZW5ndGhcIjogMjAsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0udXNlckluZm8udXNlck5hbWUpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0udXNlckluZm8sIFwidXNlck5hbWVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwidXNlckluZm8udXNlck5hbWVcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0Zvcm1JdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInByb3BcIjogXCJwaG9uZVwiXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgc2xvdDogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIOiBlOezu+aWueW8j1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdJbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuiBlOezu+aWueW8j1wiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGVhcmFibGVcIjogXCJcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnVzZXJJbmZvLnBob25lKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXJJbmZvLCBcInBob25lXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInVzZXJJbmZvLnBob25lXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwcm9wXCI6IFwiZGVwdE5hbWVcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImxhYmVsXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6YOo6ZeoXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6YOo6ZeoXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInJlYWRvbmx5XCI6IFwiXCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0udXNlckluZm8uZGVwdE5hbWUpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0udXNlckluZm8sIFwiZGVwdE5hbWVcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwidXNlckluZm8uZGVwdE5hbWVcIlxuICAgIH1cbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcInByZXBlbmRcIixcbiAgICAgIFwiaWNvblwiOiBcIm1kLWxpc3RcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5kZXBhcnRtZW50TW9kYWwgPSB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBzbG90OiBcInByZXBlbmRcIlxuICB9KV0sIDEpXSwgMSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiZm9vdGVyXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiZm9vdGVyXCJcbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zeXNVc2VyTW9kYWwgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDlj5bmtohcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiLFxuICAgICAgXCJsb2FkaW5nXCI6IF92bS5sb2FkaW5nXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnN1Ym1pdCgndXNlckZvcm0nKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDnoa7orqRcXG4gICAgICAgICAgICBcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdNb2RhbCcsIHtcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZGVwYXJ0bWVudE1vZGFsKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmRlcGFydG1lbnRNb2RhbCA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGVwYXJ0bWVudE1vZGFsXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJoZWFkZXJcIlxuICAgIH0sXG4gICAgc2xvdDogXCJoZWFkZXJcIlxuICB9LCBbX2MoJ2gzJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDpg6jpl6hcXG4gICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdUcmVlJywge1xuICAgIHJlZjogXCJkZXB0VHJlZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFcIjogX3ZtLmRlcHRMaXN0XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiZm9vdGVyXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiZm9vdGVyXCJcbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5kZXBhcnRtZW50TW9kYWwgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgIOWPlua2iFxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcImxvYWRpbmdcIjogX3ZtLmxvYWRpbmdcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jb25maXJtXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAg56Gu6K6kXFxuICAgICAgICAgICAgXCIpXSldLCAxKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTcxYzMzY2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xNzFjMzNjYVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3N5c1VzZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMzIiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9zeXNVc2VyLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xNzFjMzNjYVxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9zeXNVc2VyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy9zeXNVc2VyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHN5c1VzZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTE3MWMzM2NhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTcxYzMzY2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3N5c1VzZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5MTBcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiJdLCJzb3VyY2VSb290IjoiIn0=