webpackJsonp([7],{

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: {},
            workInfo: {},
            manageInfo: {},
            dicts: {}
        };
    },

    filters: {
        maritalStatusFilter: function maritalStatusFilter(value) {
            var str = '-';
            switch (value) {
                case '0':
                    str = '已婚';
                    break;
                case '1':
                    str = '未婚';
                    break;
                case '2':
                    str = '离异';
                    break;
                case '3':
                    str = '丧偶';
                    break;
                case '4':
                    str = '再婚';
                    break;
                case '5':
                    str = '再婚3+';
                    break;
                default:
                    str = '-';
                    break;
            }
            return str;
        }
    },
    created: function created() {
        var _this = this;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["g" /* clearObject */])(this.model);
        var userId = this.$route.params.id;
        this.$axios.options.url = '/houseMortgage/hmClient/read/detail';
        this.$axios.request({ data: { id: userId } }).then(function (response) {
            if (response.httpCode != 200) {
                _this.$Message.error(response.msg || _this.$config.ERROR);
                return;
            }
            _this.model = response.data;
            _this.dicts = response.dicts;
        }).catch(function (error) {
            _this.$Message.error(_this.$config.ERROR);
        });
    }
});

/***/ }),

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['projectId'],
    data: function data() {
        var _this = this;

        return {
            showModal: false,
            project: {},
            projectList: [],
            modalInfo: {},
            columns1: [{
                title: '项目编号',
                key: 'productId',
                render: function render(h, params) {
                    return h('div', [h('a', {
                        on: {
                            'click': function click() {
                                _this.showModal = true;
                                _this.modalInfo = params.row;
                            }
                        }
                    }, params.row.id)]);
                }
            }, {
                title: '抵押物编号',
                key: 'id',
                render: function render(h, params) {
                    return h('div', [h('a', {
                        on: {
                            'click': function click() {
                                _this.showModal = true;
                                _this.modalInfo = params.row;
                            }
                        }
                    }, params.row.pawnList[0] ? params.row.pawnList[0].id : '')]);
                }
            }, {
                title: '客户名称',
                key: 'userName',
                render: function render(h, params) {
                    return h('div', {}, params.row.client.clientName);
                }
            }, {
                title: '抵押物终评估值',
                key: 'evalResult'
            }, {
                title: '方案申请金额（元）',
                key: 'firstEvalue'
            }, {
                title: '批复金额（元）',
                key: 'evalResult'
            }, {
                title: '贷款期限（天）',
                key: 'initLoanPeriod'
            }, {
                title: '项目状态',
                key: 'projectStatusText'
            }]
        };
    },
    created: function created() {},
    mounted: function mounted() {
        this.getprojectByProjectId();
    },

    methods: {
        getprojectByProjectId: function getprojectByProjectId() {
            var _this2 = this;

            this.$axios.options.url = '/houseMortgage/hmProject/read/detail';
            this.$axios.request({ data: { id: this.projectId } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                _this2.project = response.data;
                _this2.getClientById(response.data.clientId);
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        },
        getClientById: function getClientById(clientId) {
            var _this3 = this;

            this.$axios.options.url = '/houseMortgage/hmClient/read/detail';
            this.$axios.request({ data: { id: clientId } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.project.client = response.data;
                _this3.getPawnByProjectId();
            }).catch(function (error) {
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },
        getPawnByProjectId: function getPawnByProjectId() {
            var _this4 = this;

            this.$axios.options.url = '/houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.projectId } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this4.$Message.error(response.msg || _this4.$config.ERROR);
                    return;
                }
                _this4.project.pawnList = response.data;
                console.log(_this4.project);
                _this4.projectList.push(_this4.project);
            }).catch(function (error) {
                _this4.$Message.error(_this4.$config.ERROR);
            });
        }
    }
});

/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            columns1: [],
            familyMember: []
        };
    },
    created: function created() {
        var _this2 = this;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["g" /* clearObject */])(this.model);
        this.$axios.options.url = 'sys/user/read/current';
        this.$axios.request().then(function (response) {
            if (response.httpCode != 200) {
                _this2.$Message.error(response.msg || _this2.$config.ERROR);
                return;
            }
            //this.model = response.data;
            var _this = _this2;
            _this2.columns1 = [{
                title: '变更时间',
                key: 'code'
            }, {
                title: '操作人',
                key: 'code'
            }, {
                title: '类型',
                key: 'type'
            }, {
                title: '类型',
                key: 'owner'
            }, {
                title: '内容',
                key: 'certifyNumber'
            }];
            _this2.familyMember = [{
                code: '97986875765',
                type: '房产证',
                owner: '张三',
                certifyNumber: 'v97986875765',
                address: '北京路122号',
                price: '200，000，00'
            }, {
                code: '97986875098',
                type: '房产证',
                owner: '李四',
                certifyNumber: 'v97986875765',
                address: '北京路332号',
                price: '200，000，00'
            }];
        }).catch(function (error) {
            _this2.$Message.error(_this2.$config.ERROR);
        });
    }
});

/***/ }),

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['projectId', 'spouseId'],
    data: function data() {
        return {
            mateInfo: {},
            columns1: [{
                title: '征信情况',
                key: 'creditTypeText'
            }, {
                title: '是否为当期',
                key: 'isNow'
            }, {
                title: '连续逾期情况(信用卡+贷款)',
                key: 'continuousOverdue'
            }, {
                title: '累计逾期情况(信用卡+贷款)',
                key: 'accumulativeOverdue'
            }],
            socialColumn: [{
                title: '社会信息来源',
                key: 'socialinfoTypeText'
            }, {
                title: '是否存在',
                key: 'existsFlagText'
            }, {
                title: '连续逾期情况(信用卡+贷款)',
                key: 'continuousOverdue'
            }, {
                title: '累计逾期情况(信用卡+贷款)',
                key: 'accumulativeOverdue'
            }],
            loanInfo: [],
            socialInfo: [],
            spouseLoanInfo: [],
            spouseSocialInfo: []
        };
    },
    created: function created() {
        this.getCreditinvest();
        this.getSocialInfo();
        this.getSpouseCreditinvest();
        this.getSpouseSocialInfo();
    },

    methods: {
        getCreditinvest: function getCreditinvest() {
            var _this = this;

            //查询征信信息
            var userId = this.$route.params.id;
            this.$axios.options.url = '/houseMortgage/hmProjCreditinvest/read/list';
            this.$axios.request({ data: { clientId: userId } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.loanInfo = response.data.list;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        getSocialInfo: function getSocialInfo() {
            var _this2 = this;

            //社会信息查询
            var projectId = this.projectId;
            this.$axios.options.url = '/houseMortgage/hmProjSocialinfo/read/list';
            this.$axios.request({ data: { projectId: projectId } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                _this2.socialInfo = response.data.list;
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        },
        getSpouseCreditinvest: function getSpouseCreditinvest() {
            var _this3 = this;

            //查询配偶征信信息
            var spouseId = this.spouseId;
            this.$axios.options.url = '/houseMortgage/hmProjCreditinvest/read/list';
            this.$axios.request({ data: { clientId: spouseId } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.spouseLoanInfo = response.data.list;
            }).catch(function (error) {
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },
        getSpouseSocialInfo: function getSpouseSocialInfo() {
            var _this4 = this;

            //配偶社会信息查询
            var spouseId = this.spouseId;
            this.$axios.options.url = '/houseMortgage/hmProjSocialinfo/read/list';
            this.$axios.request({ data: { clientId: spouseId } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this4.$Message.error(response.msg || _this4.$config.ERROR);
                    return;
                }
                _this4.spouseSocialInfo = response.data.list;
            }).catch(function (error) {
                _this4.$Message.error(_this4.$config.ERROR);
            });
        }
    }
});

/***/ }),

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['spouseId', 'projectId'],
    data: function data() {
        return _defineProperty({
            model: {},
            columns: [],
            haveFamilies: false,
            familyMember: []
        }, 'columns', [{
            type: 'index',
            title: '序号',
            width: 60,
            align: 'center'
        }, {
            title: '姓名',
            key: 'name'
        }, {
            title: '证件类型',
            key: 'certificatesTypeText'
        }, {
            title: '证件号码',
            key: 'certificatesNumber'
        }, {
            title: '与申请人关系',
            key: 'relationshipText'
        }, {
            title: '关系',
            key: 'busiTypeText'
        }, {
            title: '职业及其他说明',
            key: 'remark'
        }]);
    },
    created: function created() {
        if (this.spouseId) {
            this.getClient(this.spouseId);
        } else {
            this.model = null;
        }
        this.getFamilies({
            clientId: this.$route.params.id,
            projectId: this.projectId
        });
    },

    methods: {
        getClient: function getClient(clientId) {
            var _this = this;

            //获取客户
            this.$axios.options.url = '/houseMortgage/hmClient/read/detail';
            this.$axios.request({ data: {
                    id: clientId
                } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.model = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },

        // 获取家庭成员
        getFamilies: function getFamilies(param) {
            var _this2 = this;

            this.$axios.options.url = '/houseMortgage/hmProjStakeholder/read/queryByProjectId';
            this.$axios.request({ data: param }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                if (response.data.length == 0) {
                    _this2.haveFamilies = false;
                } else {
                    _this2.haveFamilies = true;
                    _this2.familyMember = response.data;
                }
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        }
    }

});

/***/ }),

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['projectId'],
    data: function data() {
        return {
            showModal: false,
            columns: [],
            model: [],
            modalInfo: {}
        };
    },
    created: function created() {
        var _this2 = this;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["g" /* clearObject */])(this.model);
        var userId = this.$route.params.id;
        this.$axios.options.url = '/houseMortgage/hmPawn/read/queryByProjectId';
        this.$axios.request({ data: {
                projectId: this.projectId,
                backupFlag: 0
            } }).then(function (response) {
            if (response.httpCode != 200) {
                _this2.$Message.error(response.msg || _this2.$config.ERROR);
                return;
            }
            _this2.model = response.data;
            var _this = _this2;
            _this2.columns = [{
                title: '编号',
                key: 'projectId',
                render: function render(h, params) {
                    return h('div', [h('a', {
                        on: {
                            'click': function click() {
                                _this.showModal = true;
                                _this.modalInfo = params.row;
                            }
                        }
                    }, params.row.projectId)]);
                }
            }, {
                title: '类型',
                key: 'houseTypeText'
            }, {
                title: '产权人',
                key: 'propertyHolder'
            }, {
                title: '产权证书（或不动产证）编号',
                key: 'certificateCode'
            }, {
                title: '坐落',
                key: 'detailedAddress'
            }, {
                title: '评估价值（元）',
                key: 'price'
            }];
        }).catch(function (error) {
            _this2.$Message.error(_this2.$config.ERROR);
        });
    }
});

/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1030),
  /* template */
  __webpack_require__(1110),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/basicInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] basicInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1de88db2", Component.options)
  } else {
    hotAPI.reload("data-v-1de88db2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1032),
  /* template */
  __webpack_require__(1165),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/businessInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] businessInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a37f27bc", Component.options)
  } else {
    hotAPI.reload("data-v-a37f27bc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1033),
  /* template */
  __webpack_require__(1172),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/changeHistory.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] changeHistory.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba5eca40", Component.options)
  } else {
    hotAPI.reload("data-v-ba5eca40", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1034),
  /* template */
  __webpack_require__(1143),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/creditInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] creditInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e38dd5b", Component.options)
  } else {
    hotAPI.reload("data-v-5e38dd5b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1035),
  /* template */
  __webpack_require__(1126),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/familyMember.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] familyMember.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-375ba2b2", Component.options)
  } else {
    hotAPI.reload("data-v-375ba2b2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1037),
  /* template */
  __webpack_require__(1130),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/guarantyInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] guarantyInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45f4861a", Component.options)
  } else {
    hotAPI.reload("data-v-45f4861a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg-white pd10"
  }, [_c('Tabs', {
    attrs: {
      "animated": false
    },
    model: {
      value: (_vm.tabName),
      callback: function($$v) {
        _vm.tabName = $$v
      },
      expression: "tabName"
    }
  }, [_vm._l((_vm.tabs), function(item) {
    return _c('TabPane', {
      key: item.id,
      attrs: {
        "name": item.id,
        "label": item.text
      }
    })
  }), _vm._v(" "), _c('Button', {
    attrs: {
      "slot": "extra",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.$root.eventHub.$emit('back', {
          name: 'customer',
          params: _vm.$router.currentRoute.params
        })
      }
    },
    slot: "extra"
  }, [_vm._v("\n            返回\n        ")])], 2), _vm._v(" "), _c(_vm.currentTabComponent, {
    tag: "component",
    attrs: {
      "projectId": _vm.projectId,
      "spouseId": _vm.spouseId
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-0a0bedd9", module.exports)
  }
}

/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "information"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "information",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                个人\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        客户编号\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.id || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        证件类型\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.certificatesTypeText || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        婚姻状况\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.maritalStatusText || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        内部员工\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.internalFlagText || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        证件号码\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.certificatesNumber || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        子女情况\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.childrenText || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        客户姓名\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.clientName || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        性别\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.sexText || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        家庭人数\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.familyPeopleNumber) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        曾用名\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.oldName || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        出生日期\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.birthday || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        个人年收入\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.income) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        最高学历\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.educationText || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        国籍\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.country || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        家庭年收入\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.familyIncome) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        客户来源\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.customerSourceText || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        年龄\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.age || ' ') + "\n                    ")])], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "attachment"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "attachment",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                职业\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        工作情况\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.workSituationText || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        企业性质\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.businessNatureText || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        职业\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.occupationText || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        企业规模\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.enterpriseScaleText || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        职务\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.jobText || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        单位地址\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.companyAddress || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        单位名称\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.companyName || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        详细地址\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.address) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        行业类别\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.industryTypeText || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        单位电话\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.companyPhone || ' ') + "\n                    ")])], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "manage"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "manage",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                管护\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        客户经理\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.createByName || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        首次录入\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.createByName || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        首次录入时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.createTime || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        最后修改\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.updateByName || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        最后修改时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.updateTime || ' ') + "\n                    ")])], 1)], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-1de88db2", module.exports)
  }
}

/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "model"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "model",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                配偶基本信息\n            ")]), _vm._v(" "), (!_vm.model) ? _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._v("\n                暂无配偶信息\n            ")]) : _vm._e(), _vm._v(" "), (_vm.model) ? _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        姓名\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.clientName || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        性别\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.sexText || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        证件类型\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.certificatesTypeText || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        证件号码\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.certificatesNumber || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        年龄\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.age || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        婚姻状况\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.maritalStatusText || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        证件地址\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.certificatesAddress || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        最高学历\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.education || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        手机号码\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.phoneNumber || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        固定电话\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.companyPhone || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        居住地址\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.nowLiveAddress || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        工作单位\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.companyName || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        单位地址\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.companyAddress || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        现单位工作年限\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        单位性质/劳动关系\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.workSituation || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        部门\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.companyName || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        技术职称\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.jobText || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        职务\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.jobText || ' ') + "\n                    ")])], 1)], 1) : _vm._e()])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                家庭基本信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [(!_vm.haveFamilies) ? _c('div', [_vm._v("暂无家庭成员信息")]) : _vm._e(), _vm._v(" "), (_vm.haveFamilies) ? _c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.columns,
      "data": _vm.familyMember
    }
  }) : _vm._e()], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-375ba2b2", module.exports)
  }
}

/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                抵押物列表\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.columns,
      "data": _vm.model
    }
  })], 1)])], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "抵押物信息",
      "width": 720
    },
    model: {
      value: (_vm.showModal),
      callback: function($$v) {
        _vm.showModal = $$v
      },
      expression: "showModal"
    }
  }, [_c('div', [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        编号:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.projectId || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        类型:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.certificateTypeText || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        产权人:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.propertyHolder || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        产权证书（或不动产证）编号:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.certificateCode || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        坐落:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.detailedAddress || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        评估价值（元）:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.firstEvalue || ' ') + "\n                    ")])], 1)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-45f4861a", module.exports)
  }
}

/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h3', [_vm._v("客户征信信息 （" + _vm._s(_vm.loanInfo !== undefined && _vm.loanInfo.length > 0 ? _vm.loanInfo[0].clientId : ' ') + "）")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "loanInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "loanInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                征信查询信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('h3', [_vm._v("贷款/信用卡情况")]), _vm._v(" "), _c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.columns1,
      "data": _vm.loanInfo
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', [_c('Row', [_c('Col', {
    staticClass: "text-right grey-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                            近半年查询次数(有效查询):\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.loanInfo !== undefined && _vm.loanInfo.length > 0 ? _vm.loanInfo[0].latestQueryNum : ' ') + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            征信查询日期\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.loanInfo !== undefined && _vm.loanInfo.length > 0 ? _vm.loanInfo[0].queryDate : ' ') + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                            征信贷款总计\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.loanInfo !== undefined && _vm.loanInfo.length > 0 ? _vm.loanInfo[0].totalLoanNum : ' ') + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                            征信评价\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.loanInfo !== undefined && _vm.loanInfo.length > 0 ? _vm.loanInfo[0].creditDesc : ' ') + "\n                        ")])], 1)], 1)], 1)])], 1), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                社会信息查询\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.socialColumn,
      "data": _vm.socialInfo
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("配偶征信信息 (" + _vm._s(_vm.spouseId) + ")")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                征信查询信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('h3', [_vm._v("贷款/信用卡情况")]), _vm._v(" "), _c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.columns1,
      "data": _vm.spouseLoanInfo
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', [_c('Row', [_c('Col', {
    staticClass: "text-right grey-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                            近半年查询次数(有效查询)\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.spouseLoanInfo !== undefined && _vm.spouseLoanInfo.length > 0 ? _vm.spouseLoanInfo[0].latestQueryNum : ' ') + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                            贷款到期分布\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.spouseLoanInfo !== undefined && _vm.spouseLoanInfo.length > 0 ? _vm.spouseLoanInfo[0].queryDate : ' ') + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                            征信贷款总计\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.spouseLoanInfo !== undefined && _vm.spouseLoanInfo.length > 0 ? _vm.spouseLoanInfo[0].totalLoanNum : ' ') + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                            征信评价\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.spouseLoanInfo !== undefined && _vm.spouseLoanInfo.length > 0 ? _vm.spouseLoanInfo[0].creditDesc : ' ') + "\n                        ")])], 1)], 1)], 1)])], 1), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                社会信息查询\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.socialColumn,
      "data": _vm.spouseSocialInfo
    }
  })], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-5e38dd5b", module.exports)
  }
}

/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                抵押物列表\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "disabled-hover": true,
      "columns": _vm.columns1,
      "data": _vm.projectList
    }
  })], 1)])], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "抵押物信息",
      "width": 720
    },
    model: {
      value: (_vm.showModal),
      callback: function($$v) {
        _vm.showModal = $$v
      },
      expression: "showModal"
    }
  }, [_c('div', [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        编号:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.id || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        类型:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.houseTypeText || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        产权人:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.owner || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        产权证书（或不动产证）编号:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.certificateCode || ' ') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                        坐落:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.detailedAddress || ' ') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        评估价值（元）:\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.modalInfo.price || ' ') + "\n                    ")])], 1)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-a37f27bc", module.exports)
  }
}

/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "familyInfo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "familyInfo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                抵押物列表\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Table', {
    ref: "selection",
    attrs: {
      "border": "",
      "columns": _vm.columns1,
      "data": _vm.familyMember
    }
  })], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-ba5eca40", module.exports)
  }
}

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(997),
  /* template */
  __webpack_require__(1104),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/customerInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] customerInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a0bedd9", Component.options)
  } else {
    hotAPI.reload("data-v-0a0bedd9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_basicInformation__ = __webpack_require__(1070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_basicInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_basicInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_familyMember__ = __webpack_require__(1075);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_familyMember___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_familyMember__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_guarantyInfo__ = __webpack_require__(1077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_guarantyInfo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_tabs_guarantyInfo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_tabs_creditInfo__ = __webpack_require__(1074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_tabs_creditInfo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_tabs_creditInfo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_tabs_businessInfo__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_tabs_businessInfo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_tabs_businessInfo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_tabs_changeHistory__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_tabs_changeHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_tabs_changeHistory__);







/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            tabName: 'basicInformation',
            tabs: [{ id: 'basicInformation', text: '基本信息' }, { id: 'familyMember', text: '家庭成员' }, { id: 'guarantyInfo', text: '抵押物信息' }, { id: 'creditInfo', text: '征信信息' }, { id: 'businessInfo', text: '业务信息' }, { id: 'changeHistory', text: '变更历史' }],
            projectId: '',
            spouseId: ''
        };
    },

    computed: {
        currentTabComponent: function currentTabComponent() {
            return this.tabName;
        }
    },
    components: {
        basicInformation: __WEBPACK_IMPORTED_MODULE_0__views_tabs_basicInformation___default.a,
        familyMember: __WEBPACK_IMPORTED_MODULE_1__views_tabs_familyMember___default.a,
        guarantyInfo: __WEBPACK_IMPORTED_MODULE_2__views_tabs_guarantyInfo___default.a,
        creditInfo: __WEBPACK_IMPORTED_MODULE_3__views_tabs_creditInfo___default.a,
        businessInfo: __WEBPACK_IMPORTED_MODULE_4__views_tabs_businessInfo___default.a,
        changeHistory: __WEBPACK_IMPORTED_MODULE_5__views_tabs_changeHistory___default.a
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
    },
    created: function created() {
        var _this = this;

        var userId = this.$route.params.id;
        this.$axios.options.url = '/houseMortgage/hmClient/read/detail';
        this.$axios.request({ data: { id: userId } }).then(function (response) {
            if (response.httpCode != 200) {
                _this.$Message.error(response.msg || _this.$config.ERROR);
                return;
            }
            _this.projectId = response.data.projectId; //查询客户信息，保存projectId，props向其他组件传递
            _this.spouseId = response.data.spouseId;
        }).catch(function (error) {
            _this.$Message.error(_this.$config.ERROR);
        });
    }
});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2Jhc2ljSW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9idXNpbmVzc0luZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFicy9jaGFuZ2VIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMvY3JlZGl0SW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2ZhbWlseU1lbWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2d1YXJhbnR5SW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9iYXNpY0luZm9ybWF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9idXNpbmVzc0luZm8udnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2NoYW5nZUhpc3RvcnkudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2NyZWRpdEluZm8udnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2ZhbWlseU1lbWJlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvZ3VhcmFudHlJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY3VzdG9tZXJJbmZvLnZ1ZT9hZmRkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2Jhc2ljSW5mb3JtYXRpb24udnVlPzU5Y2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYnMvZmFtaWx5TWVtYmVyLnZ1ZT82ZjM1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2d1YXJhbnR5SW5mby52dWU/YTc3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9jcmVkaXRJbmZvLnZ1ZT8yZWZkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2J1c2luZXNzSW5mby52dWU/MDk3ZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9jaGFuZ2VIaXN0b3J5LnZ1ZT9hNDg4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jdXN0b21lckluZm8udnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2N1c3RvbWVySW5mby5qcyJdLCJuYW1lcyI6WyJkYXRhIiwibW9kZWwiLCJ3b3JrSW5mbyIsIm1hbmFnZUluZm8iLCJkaWN0cyIsImZpbHRlcnMiLCJtYXJpdGFsU3RhdHVzRmlsdGVyIiwidmFsdWUiLCJzdHIiLCJjcmVhdGVkIiwiY2xlYXJPYmplY3QiLCJ1c2VySWQiLCIkcm91dGUiLCJwYXJhbXMiLCJpZCIsIiRheGlvcyIsIm9wdGlvbnMiLCJ1cmwiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiaHR0cENvZGUiLCIkTWVzc2FnZSIsImVycm9yIiwibXNnIiwiJGNvbmZpZyIsIkVSUk9SIiwiY2F0Y2giLCJwcm9wcyIsInNob3dNb2RhbCIsInByb2plY3QiLCJwcm9qZWN0TGlzdCIsIm1vZGFsSW5mbyIsImNvbHVtbnMxIiwidGl0bGUiLCJrZXkiLCJyZW5kZXIiLCJoIiwib24iLCJyb3ciLCJwYXduTGlzdCIsImNsaWVudCIsImNsaWVudE5hbWUiLCJtb3VudGVkIiwiZ2V0cHJvamVjdEJ5UHJvamVjdElkIiwibWV0aG9kcyIsInByb2plY3RJZCIsImdldENsaWVudEJ5SWQiLCJjbGllbnRJZCIsImdldFBhd25CeVByb2plY3RJZCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZmFtaWx5TWVtYmVyIiwiX3RoaXMiLCJjb2RlIiwidHlwZSIsIm93bmVyIiwiY2VydGlmeU51bWJlciIsImFkZHJlc3MiLCJwcmljZSIsIm1hdGVJbmZvIiwic29jaWFsQ29sdW1uIiwibG9hbkluZm8iLCJzb2NpYWxJbmZvIiwic3BvdXNlTG9hbkluZm8iLCJzcG91c2VTb2NpYWxJbmZvIiwiZ2V0Q3JlZGl0aW52ZXN0IiwiZ2V0U29jaWFsSW5mbyIsImdldFNwb3VzZUNyZWRpdGludmVzdCIsImdldFNwb3VzZVNvY2lhbEluZm8iLCJsaXN0Iiwic3BvdXNlSWQiLCJjb2x1bW5zIiwiaGF2ZUZhbWlsaWVzIiwid2lkdGgiLCJhbGlnbiIsImdldENsaWVudCIsImdldEZhbWlsaWVzIiwicGFyYW0iLCJsZW5ndGgiLCJiYWNrdXBGbGFnIiwidGFiTmFtZSIsInRhYnMiLCJ0ZXh0IiwiY29tcHV0ZWQiLCJjdXJyZW50VGFiQ29tcG9uZW50IiwiY29tcG9uZW50cyIsImJhc2ljSW5mb3JtYXRpb24iLCJndWFyYW50eUluZm8iLCJjcmVkaXRJbmZvIiwiYnVzaW5lc3NJbmZvIiwiY2hhbmdlSGlzdG9yeSIsIiRyb290IiwiZXZlbnRIdWIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSwrREFBZTtBQUNYQSxRQURXLGtCQUNKO0FBQ0gsZUFBTztBQUNIQyxtQkFBTyxFQURKO0FBRUhDLHNCQUFVLEVBRlA7QUFHSEMsd0JBQVksRUFIVDtBQUlIQyxtQkFBTztBQUpKLFNBQVA7QUFNSCxLQVJVOztBQVNYQyxhQUFVO0FBQ05DLDJCQURNLCtCQUNlQyxLQURmLEVBQ3NCO0FBQ3hCLGdCQUFJQyxNQUFNLEdBQVY7QUFDQSxvQkFBT0QsS0FBUDtBQUNJLHFCQUFLLEdBQUw7QUFDSUMsMEJBQU0sSUFBTjtBQUNBO0FBQ0oscUJBQUssR0FBTDtBQUNJQSwwQkFBTSxJQUFOO0FBQ0E7QUFDSixxQkFBSyxHQUFMO0FBQ0lBLDBCQUFNLElBQU47QUFDQTtBQUNKLHFCQUFLLEdBQUw7QUFDSUEsMEJBQU0sSUFBTjtBQUNBO0FBQ0oscUJBQUssR0FBTDtBQUNJQSwwQkFBTSxJQUFOO0FBQ0E7QUFDSixxQkFBSyxHQUFMO0FBQ0lBLDBCQUFNLE1BQU47QUFDQTtBQUNKO0FBQ0lBLDBCQUFNLEdBQU47QUFDQTtBQXJCUjtBQXVCQSxtQkFBT0EsR0FBUDtBQUNIO0FBM0JLLEtBVEM7QUFzQ1hDLFdBdENXLHFCQXNDRDtBQUFBOztBQUNOQyxR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O0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDblhBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JPQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdEdBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM3S0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7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LEVBQUNjLElBQUlILE1BQUwsRUFBUCxFQUFwQixFQUEwQ1EsSUFBMUMsQ0FBK0MsVUFBQ0MsUUFBRCxFQUFjO0FBQ3pELGdCQUFJQSxTQUFTQyxRQUFULElBQXFCLEdBQXpCLEVBQThCO0FBQzFCLHNCQUFLQyxRQUFMLENBQWNDLEtBQWQsQ0FBb0JILFNBQVNJLEdBQVQsSUFBZ0IsTUFBS0MsT0FBTCxDQUFhQyxLQUFqRDtBQUNBO0FBQ0g7QUFDRCxrQkFBS29CLFNBQUwsR0FBaUIxQixTQUFTcEIsSUFBVCxDQUFjOEMsU0FBL0IsQ0FMeUQsQ0FLZjtBQUMxQyxrQkFBSzBCLFFBQUwsR0FBZ0JwRCxTQUFTcEIsSUFBVCxDQUFjd0UsUUFBOUI7QUFDSCxTQVBELEVBT0c3QyxLQVBILENBT1MsVUFBQ0osS0FBRCxFQUFXO0FBQ2hCLGtCQUFLRCxRQUFMLENBQWNDLEtBQWQsQ0FBb0IsTUFBS0UsT0FBTCxDQUFhQyxLQUFqQztBQUNILFNBVEQ7QUFVSDtBQTVDVSxDQUFmLEUiLCJmaWxlIjoiNy5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2xlYXJPYmplY3R9IGZyb20gXCIuLi8uLi9saWJzL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2RlbDoge30sXG4gICAgICAgICAgICB3b3JrSW5mbzoge30sXG4gICAgICAgICAgICBtYW5hZ2VJbmZvOiB7fSxcbiAgICAgICAgICAgIGRpY3RzOiB7fVxuICAgICAgICB9XG4gICAgfSxcbiAgICBmaWx0ZXJzIDoge1xuICAgICAgICBtYXJpdGFsU3RhdHVzRmlsdGVyICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHN0ciA9ICctJ1xuICAgICAgICAgICAgc3dpdGNoKHZhbHVlKXtcbiAgICAgICAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJ+W3suWpmidcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJ+acquWpmidcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJ+emu+W8gidcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJ+S4p+WBtidcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJ+WGjeWpmidcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICc1JzpcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJ+WGjeWpmjMrJ1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9ICctJ1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgY2xlYXJPYmplY3QodGhpcy5tb2RlbCk7XG4gICAgICAgIHZhciB1c2VySWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWRcbiAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1DbGllbnQvcmVhZC9kZXRhaWwnO1xuICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7aWQ6IHVzZXJJZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmRpY3RzID0gcmVzcG9uc2UuZGljdHM7XG5cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YWJzL2Jhc2ljSW5mb3JtYXRpb24uanMiLCJpbXBvcnQge2NsZWFyT2JqZWN0fSBmcm9tIFwiLi4vLi4vbGlicy91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydwcm9qZWN0SWQnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2plY3Q6IHt9LFxuICAgICAgICAgICAgcHJvamVjdExpc3Q6IFtdLFxuICAgICAgICAgICAgbW9kYWxJbmZvOiB7fSxcbiAgICAgICAgICAgIGNvbHVtbnMxOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+mhueebrue8luWPtycsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Byb2R1Y3RJZCcsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xpY2snOigpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbEluZm8gPSBwYXJhbXMucm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBwYXJhbXMucm93LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmirXmirzniannvJblj7cnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xpY2snOigpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbEluZm8gPSBwYXJhbXMucm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBwYXJhbXMucm93LnBhd25MaXN0WzBdP3BhcmFtcy5yb3cucGF3bkxpc3RbMF0uaWQ6JycpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WuouaIt+WQjeensCcsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3VzZXJOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge30sIHBhcmFtcy5yb3cuY2xpZW50LmNsaWVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oq15oq854mp57uI6K+E5Lyw5YC8JyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnZXZhbFJlc3VsdCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmlrnmoYjnlLPor7fph5Hpop3vvIjlhYPvvIknLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdmaXJzdEV2YWx1ZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmibnlpI3ph5Hpop3vvIjlhYPvvIknLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdldmFsUmVzdWx0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+i0t+asvuacn+mZkO+8iOWkqe+8iScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2luaXRMb2FuUGVyaW9kJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+mhueebrueKtuaAgScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Byb2plY3RTdGF0dXNUZXh0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG5cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0cHJvamVjdEJ5UHJvamVjdElkKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0cHJvamVjdEJ5UHJvamVjdElkKCl7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obVByb2plY3QvcmVhZC9kZXRhaWwnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2lkOiB0aGlzLnByb2plY3RJZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3QgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDbGllbnRCeUlkKHJlc3BvbnNlLmRhdGEuY2xpZW50SWQpXG5cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDbGllbnRCeUlkKGNsaWVudElkKXtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htQ2xpZW50L3JlYWQvZGV0YWlsJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtpZDogY2xpZW50SWR9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0LmNsaWVudCA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhd25CeVByb2plY3RJZCgpXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UGF3bkJ5UHJvamVjdElkKCl7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obVBhd24vcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwcm9qZWN0SWQ6IHRoaXMucHJvamVjdElkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdC5wYXduTGlzdCA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3QpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKHRoaXMucHJvamVjdClcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9idXNpbmVzc0luZm8uanMiLCJpbXBvcnQge2NsZWFyT2JqZWN0fSBmcm9tIFwiLi4vLi4vbGlicy91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sdW1uczE6IFtdLFxuICAgICAgICAgICAgZmFtaWx5TWVtYmVyOiBbXSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgY2xlYXJPYmplY3QodGhpcy5tb2RlbCk7XG4gICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJ3N5cy91c2VyL3JlYWQvY3VycmVudCc7XG4gICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3QoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy90aGlzLm1vZGVsID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgICAgICAgIHRoaXMuY29sdW1uczEgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPmOabtOaXtumXtCcsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2NvZGUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pON5L2c5Lq6JyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnY29kZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnsbvlnosnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICd0eXBlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+exu+WeiycsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ293bmVyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WGheWuuScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2NlcnRpZnlOdW1iZXInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHRoaXMuZmFtaWx5TWVtYmVyID0gW3tcbiAgICAgICAgICAgICAgICBjb2RlOiAnOTc5ODY4NzU3NjUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICfmiL/kuqfor4EnLFxuICAgICAgICAgICAgICAgIG93bmVyOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICBjZXJ0aWZ5TnVtYmVyOiAndjk3OTg2ODc1NzY1JyxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiAn5YyX5Lqs6LevMTIy5Y+3JyxcbiAgICAgICAgICAgICAgICBwcmljZTogJzIwMO+8jDAwMO+8jDAwJ1xuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgY29kZTogJzk3OTg2ODc1MDk4JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAn5oi/5Lqn6K+BJyxcbiAgICAgICAgICAgICAgICBvd25lcjogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgY2VydGlmeU51bWJlcjogJ3Y5Nzk4Njg3NTc2NScsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogJ+WMl+S6rOi3rzMzMuWPtycsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICcyMDDvvIwwMDDvvIwwMCdcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgIFxuXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9jaGFuZ2VIaXN0b3J5LmpzIiwiaW1wb3J0IHtjbGVhck9iamVjdH0gZnJvbSBcIi4uLy4uL2xpYnMvdXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsncHJvamVjdElkJywgJ3Nwb3VzZUlkJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1hdGVJbmZvOiB7fSxcbiAgICAgICAgICAgIGNvbHVtbnMxOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+W+geS/oeaDheWGtScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2NyZWRpdFR5cGVUZXh0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aYr+WQpuS4uuW9k+acnycsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2lzTm93J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+i/nue7remAvuacn+aDheWGtSjkv6HnlKjljaEr6LS35qy+KScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2NvbnRpbnVvdXNPdmVyZHVlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e0r+iuoemAvuacn+aDheWGtSjkv6HnlKjljaEr6LS35qy+KScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2FjY3VtdWxhdGl2ZU92ZXJkdWUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNvY2lhbENvbHVtbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnpL7kvJrkv6Hmga/mnaXmupAnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdzb2NpYWxpbmZvVHlwZVRleHQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5piv5ZCm5a2Y5ZyoJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnZXhpc3RzRmxhZ1RleHQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6L+e57ut6YC+5pyf5oOF5Ya1KOS/oeeUqOWNoSvotLfmrL4pJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnY29udGludW91c092ZXJkdWUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn57Sv6K6h6YC+5pyf5oOF5Ya1KOS/oeeUqOWNoSvotLfmrL4pJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnYWNjdW11bGF0aXZlT3ZlcmR1ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9hbkluZm86IFtdLFxuICAgICAgICAgICAgc29jaWFsSW5mbzogW10sXG4gICAgICAgICAgICBzcG91c2VMb2FuSW5mbzogW10sXG4gICAgICAgICAgICBzcG91c2VTb2NpYWxJbmZvOiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmdldENyZWRpdGludmVzdCgpXG4gICAgICAgIHRoaXMuZ2V0U29jaWFsSW5mbygpXG4gICAgICAgIHRoaXMuZ2V0U3BvdXNlQ3JlZGl0aW52ZXN0KClcbiAgICAgICAgdGhpcy5nZXRTcG91c2VTb2NpYWxJbmZvKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0Q3JlZGl0aW52ZXN0KCl7IC8v5p+l6K+i5b6B5L+h5L+h5oGvXG4gICAgICAgICAgICB2YXIgdXNlcklkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkXG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obVByb2pDcmVkaXRpbnZlc3QvcmVhZC9saXN0JztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtjbGllbnRJZDogdXNlcklkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubG9hbkluZm8gPSByZXNwb25zZS5kYXRhLmxpc3Q7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRTb2NpYWxJbmZvKCl7IC8v56S+5Lya5L+h5oGv5p+l6K+iXG4gICAgICAgICAgICB2YXIgcHJvamVjdElkID0gdGhpcy5wcm9qZWN0SWRcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htUHJvalNvY2lhbGluZm8vcmVhZC9saXN0JztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtwcm9qZWN0SWQ6IHByb2plY3RJZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNvY2lhbEluZm8gPSByZXNwb25zZS5kYXRhLmxpc3Q7IFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFNwb3VzZUNyZWRpdGludmVzdCgpeyAvL+afpeivoumFjeWBtuW+geS/oeS/oeaBr1xuICAgICAgICAgICAgdmFyIHNwb3VzZUlkID0gdGhpcy5zcG91c2VJZFxuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Qcm9qQ3JlZGl0aW52ZXN0L3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB7Y2xpZW50SWQ6IHNwb3VzZUlkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3BvdXNlTG9hbkluZm8gPSByZXNwb25zZS5kYXRhLmxpc3Q7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0U3BvdXNlU29jaWFsSW5mbygpeyAvL+mFjeWBtuekvuS8muS/oeaBr+afpeivolxuICAgICAgICAgICAgdmFyIHNwb3VzZUlkID0gdGhpcy5zcG91c2VJZFxuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1Qcm9qU29jaWFsaW5mby9yZWFkL2xpc3QnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge2NsaWVudElkOiBzcG91c2VJZH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNwb3VzZVNvY2lhbEluZm8gPSByZXNwb25zZS5kYXRhLmxpc3Q7IFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RhYnMvY3JlZGl0SW5mby5qcyIsImltcG9ydCB7Y2xlYXJPYmplY3R9IGZyb20gXCIuLi8uLi9saWJzL3V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ3Nwb3VzZUlkJywncHJvamVjdElkJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZGVsOiB7fSxcbiAgICAgICAgICAgIGNvbHVtbnM6IFtdLFxuICAgICAgICAgICAgaGF2ZUZhbWlsaWVzOiBmYWxzZSxcbiAgICAgICAgICAgIGZhbWlseU1lbWJlcjogW10sXG4gICAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+W6j+WPtycsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5aeT5ZCNJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnbmFtZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor4Hku7bnsbvlnosnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdjZXJ0aWZpY2F0ZXNUeXBlVGV4dCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor4Hku7blj7fnoIEnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdjZXJ0aWZpY2F0ZXNOdW1iZXInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5LiO55Sz6K+35Lq65YWz57O7JyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncmVsYXRpb25zaGlwVGV4dCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflhbPns7snLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdidXNpVHlwZVRleHQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6IGM5Lia5Y+K5YW25LuW6K+05piOJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncmVtYXJrJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgaWYodGhpcy5zcG91c2VJZCl7XG4gICAgICAgICAgICB0aGlzLmdldENsaWVudCh0aGlzLnNwb3VzZUlkKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRGYW1pbGllcyh7XG4gICAgICAgICAgICBjbGllbnRJZDogdGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLnByb2plY3RJZFxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRDbGllbnQoY2xpZW50SWQpeyAvL+iOt+WPluWuouaIt1xuICAgICAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnL2hvdXNlTW9ydGdhZ2UvaG1DbGllbnQvcmVhZC9kZXRhaWwnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiBjbGllbnRJZFxuICAgICAgICAgICAgfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOiOt+WPluWutuW6reaIkOWRmFxuICAgICAgICBnZXRGYW1pbGllcyhwYXJhbSl7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obVByb2pTdGFrZWhvbGRlci9yZWFkL3F1ZXJ5QnlQcm9qZWN0SWQnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YTogcGFyYW19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEubGVuZ3RoID09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXZlRmFtaWxpZXMgPSBmYWxzZVxuICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGF2ZUZhbWlsaWVzID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhbWlseU1lbWJlciA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFicy9mYW1pbHlNZW1iZXIuanMiLCJpbXBvcnQge2NsZWFyT2JqZWN0fSBmcm9tIFwiLi4vLi4vbGlicy91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydwcm9qZWN0SWQnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbHVtbnM6IFtdLFxuICAgICAgICAgICAgbW9kZWw6IFtdLFxuICAgICAgICAgICAgbW9kYWxJbmZvOiB7fVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBjbGVhck9iamVjdCh0aGlzLm1vZGVsKTtcbiAgICAgICAgdmFyIHVzZXJJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZFxuICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obVBhd24vcmVhZC9xdWVyeUJ5UHJvamVjdElkJztcbiAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge1xuICAgICAgICAgICAgcHJvamVjdElkOiB0aGlzLnByb2plY3RJZCxcbiAgICAgICAgICAgIGJhY2t1cEZsYWc6IDBcbiAgICAgICAgfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn57yW5Y+3JyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncHJvamVjdElkJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnZGl2JywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGljayc6KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zaG93TW9kYWwgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubW9kYWxJbmZvID0gcGFyYW1zLnJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcGFyYW1zLnJvdy5wcm9qZWN0SWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+exu+WeiycsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2hvdXNlVHlwZVRleHQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Lqn5p2D5Lq6JyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncHJvcGVydHlIb2xkZXInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Lqn5p2D6K+B5Lmm77yI5oiW5LiN5Yqo5Lqn6K+B77yJ57yW5Y+3JyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnY2VydGlmaWNhdGVDb2RlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WdkOiQvScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2RldGFpbGVkQWRkcmVzcydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor4TkvLDku7flgLzvvIjlhYPvvIknLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdwcmljZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICBcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YWJzL2d1YXJhbnR5SW5mby5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvYmFzaWNJbmZvcm1hdGlvbi5qc1wiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWRlODhkYjJcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pdmlldy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vYmFzaWNJbmZvcm1hdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9iYXNpY0luZm9ybWF0aW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGJhc2ljSW5mb3JtYXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFkZTg4ZGIyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWRlODhkYjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3RhYnMvYmFzaWNJbmZvcm1hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDEwNzBcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9idXNpbmVzc0luZm8uanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWEzN2YyN2JjXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2J1c2luZXNzSW5mby52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvdGFicy9idXNpbmVzc0luZm8udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYnVzaW5lc3NJbmZvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hMzdmMjdiY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWEzN2YyN2JjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWJzL2J1c2luZXNzSW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IDEwNzJcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL2NvbXBvbmVudHMvdGFicy9jaGFuZ2VIaXN0b3J5LmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1iYTVlY2E0MFxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9jaGFuZ2VIaXN0b3J5LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy90YWJzL2NoYW5nZUhpc3RvcnkudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2hhbmdlSGlzdG9yeS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYmE1ZWNhNDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iYTVlY2E0MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9jaGFuZ2VIaXN0b3J5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vY29tcG9uZW50cy90YWJzL2NyZWRpdEluZm8uanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlMzhkZDViXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2NyZWRpdEluZm8udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3RhYnMvY3JlZGl0SW5mby52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjcmVkaXRJbmZvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZTM4ZGQ1YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlMzhkZDViXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWJzL2NyZWRpdEluZm8udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvZmFtaWx5TWVtYmVyLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zNzViYTJiMlxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9mYW1pbHlNZW1iZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3RhYnMvZmFtaWx5TWVtYmVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZhbWlseU1lbWJlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzc1YmEyYjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNzViYTJiMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9mYW1pbHlNZW1iZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9jb21wb25lbnRzL3RhYnMvZ3VhcmFudHlJbmZvLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00NWY0ODYxYVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9ndWFyYW50eUluZm8udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3RhYnMvZ3VhcmFudHlJbmZvLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGd1YXJhbnR5SW5mby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDVmNDg2MWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NWY0ODYxYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdGFicy9ndWFyYW50eUluZm8udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJnLXdoaXRlIHBkMTBcIlxuICB9LCBbX2MoJ1RhYnMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYW5pbWF0ZWRcIjogZmFsc2VcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS50YWJOYW1lKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLnRhYk5hbWUgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInRhYk5hbWVcIlxuICAgIH1cbiAgfSwgW192bS5fbCgoX3ZtLnRhYnMpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdUYWJQYW5lJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJuYW1lXCI6IGl0ZW0uaWQsXG4gICAgICAgIFwibGFiZWxcIjogaXRlbS50ZXh0XG4gICAgICB9XG4gICAgfSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImV4dHJhXCIsXG4gICAgICBcInNpemVcIjogXCJzbWFsbFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRyb290LmV2ZW50SHViLiRlbWl0KCdiYWNrJywge1xuICAgICAgICAgIG5hbWU6ICdjdXN0b21lcicsXG4gICAgICAgICAgcGFyYW1zOiBfdm0uJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBzbG90OiBcImV4dHJhXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIOi/lOWbnlxcbiAgICAgICAgXCIpXSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoX3ZtLmN1cnJlbnRUYWJDb21wb25lbnQsIHtcbiAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicHJvamVjdElkXCI6IF92bS5wcm9qZWN0SWQsXG4gICAgICBcInNwb3VzZUlkXCI6IF92bS5zcG91c2VJZFxuICAgIH1cbiAgfSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wYTBiZWRkOVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTBhMGJlZGQ5XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvY3VzdG9tZXJJbmZvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJpbmZvcm1hdGlvblwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJpbmZvcm1hdGlvblwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDkuKrkurpcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqLmiLfnvJblj7dcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmlkIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDor4Hku7bnsbvlnotcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNlcnRpZmljYXRlc1R5cGVUZXh0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlqZrlp7vnirblhrVcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLm1hcml0YWxTdGF0dXNUZXh0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWGhemDqOWRmOW3pVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuaW50ZXJuYWxGbGFnVGV4dCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6K+B5Lu25Y+356CBXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jZXJ0aWZpY2F0ZXNOdW1iZXIgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWtkOWls+aDheWGtVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY2hpbGRyZW5UZXh0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWuouaIt+Wnk+WQjVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY2xpZW50TmFtZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5oCn5YirXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5zZXhUZXh0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrrbluq3kurrmlbBcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmZhbWlseVBlb3BsZU51bWJlcikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5pu+55So5ZCNXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5vbGROYW1lIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlh7rnlJ/ml6XmnJ9cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmJpcnRoZGF5IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkuKrkurrlubTmlLblhaVcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmluY29tZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5pyA6auY5a2m5Y6GXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5lZHVjYXRpb25UZXh0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlm73nsY1cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNvdW50cnkgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWutuW6reW5tOaUtuWFpVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZmFtaWx5SW5jb21lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqLmiLfmnaXmupBcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmN1c3RvbWVyU291cmNlVGV4dCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5bm06b6EXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5hZ2UgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImF0dGFjaG1lbnRcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiYXR0YWNobWVudFwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDogYzkuJpcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlt6XkvZzmg4XlhrVcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLndvcmtTaXR1YXRpb25UZXh0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkvIHkuJrmgKfotKhcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmJ1c2luZXNzTmF0dXJlVGV4dCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDogYzkuJpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLm9jY3VwYXRpb25UZXh0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkvIHkuJrop4TmqKFcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmVudGVycHJpc2VTY2FsZVRleHQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6IGM5YqhXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5qb2JUZXh0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDljZXkvY3lnLDlnYBcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNvbXBhbnlBZGRyZXNzIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWNleS9jeWQjeensFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY29tcGFueU5hbWUgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOivpue7huWcsOWdgFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuYWRkcmVzcykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6KGM5Lia57G75YirXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5pbmR1c3RyeVR5cGVUZXh0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDljZXkvY3nlLXor51cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNvbXBhbnlQaG9uZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwibWFuYWdlXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcIm1hbmFnZVwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDnrqHmiqRcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqLmiLfnu4/nkIZcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNyZWF0ZUJ5TmFtZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDpppbmrKHlvZXlhaVcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNyZWF0ZUJ5TmFtZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6aaW5qyh5b2V5YWl5pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jcmVhdGVUaW1lIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOacgOWQjuS/ruaUuVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwudXBkYXRlQnlOYW1lIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmnIDlkI7kv67mlLnml7bpl7RcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLnVwZGF0ZVRpbWUgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTFkZTg4ZGIyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMWRlODhkYjJcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL2Jhc2ljSW5mb3JtYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJtb2RlbFwiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJtb2RlbFwiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDphY3lgbbln7rmnKzkv6Hmga9cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0ubW9kZWwpID8gX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOaaguaXoOmFjeWBtuS/oeaBr1xcbiAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ubW9kZWwpID8gX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlp5PlkI1cXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNsaWVudE5hbWUgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaAp+WIq1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuc2V4VGV4dCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDor4Hku7bnsbvlnotcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNlcnRpZmljYXRlc1R5cGVUZXh0IHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDor4Hku7blj7fnoIFcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNlcnRpZmljYXRlc051bWJlciB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlubTpvoRcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmFnZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5ama5ae754q25Ya1XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5tYXJpdGFsU3RhdHVzVGV4dCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDor4Hku7blnLDlnYBcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmNlcnRpZmljYXRlc0FkZHJlc3MgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOacgOmrmOWtpuWOhlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuZWR1Y2F0aW9uIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaJi+acuuWPt+eggVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwucGhvbmVOdW1iZXIgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWbuuWumueUteivnVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY29tcGFueVBob25lIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWxheS9j+WcsOWdgFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwubm93TGl2ZUFkZHJlc3MgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOW3peS9nOWNleS9jVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuY29tcGFueU5hbWUgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Y2V5L2N5Zyw5Z2AXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jb21wYW55QWRkcmVzcyB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg546w5Y2V5L2N5bel5L2c5bm06ZmQXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Y2V5L2N5oCn6LSoL+WKs+WKqOWFs+ezu1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwud29ya1NpdHVhdGlvbiB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6YOo6ZeoXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RlbC5jb21wYW55TmFtZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDmioDmnK/ogYznp7BcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGVsLmpvYlRleHQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOiBjOWKoVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kZWwuam9iVGV4dCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSkgOiBfdm0uX2UoKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJmYW1pbHlJbmZvXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImZhbWlseUluZm9cIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5a625bqt5Z+65pys5L+h5oGvXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgWyghX3ZtLmhhdmVGYW1pbGllcykgPyBfYygnZGl2JywgW192bS5fdihcIuaaguaXoOWutuW6reaIkOWRmOS/oeaBr1wiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uaGF2ZUZhbWlsaWVzKSA/IF9jKCdUYWJsZScsIHtcbiAgICByZWY6IFwic2VsZWN0aW9uXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYm9yZGVyXCI6IFwiXCIsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLmNvbHVtbnMsXG4gICAgICBcImRhdGFcIjogX3ZtLmZhbWlseU1lbWJlclxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM3NWJhMmIyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzc1YmEyYjJcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL2ZhbWlseU1lbWJlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjZcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImZhbWlseUluZm9cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZmFtaWx5SW5mb1wiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDmirXmirznianliJfooahcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1RhYmxlJywge1xuICAgIHJlZjogXCJzZWxlY3Rpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJib3JkZXJcIjogXCJcIixcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1ucyxcbiAgICAgIFwiZGF0YVwiOiBfdm0ubW9kZWxcbiAgICB9XG4gIH0pXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnTW9kYWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCLmirXmirzniankv6Hmga9cIixcbiAgICAgIFwid2lkdGhcIjogNzIwXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2hvd01vZGFsKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLnNob3dNb2RhbCA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2hvd01vZGFsXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2JywgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg57yW5Y+3OlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kYWxJbmZvLnByb2plY3RJZCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg57G75Z6LOlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kYWxJbmZvLmNlcnRpZmljYXRlVHlwZVRleHQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Lqn5p2D5Lq6OlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kYWxJbmZvLnByb3BlcnR5SG9sZGVyIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkuqfmnYPor4HkuabvvIjmiJbkuI3liqjkuqfor4HvvInnvJblj7c6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RhbEluZm8uY2VydGlmaWNhdGVDb2RlIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWdkOiQvTpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGFsSW5mby5kZXRhaWxlZEFkZHJlc3MgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOivhOS8sOS7t+WAvO+8iOWFg++8iTpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGFsSW5mby5maXJzdEV2YWx1ZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ1ZjQ4NjFhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDVmNDg2MWFcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL2d1YXJhbnR5SW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IDExMzBcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2gzJywgW192bS5fdihcIuWuouaIt+W+geS/oeS/oeaBryDvvIhcIiArIF92bS5fcyhfdm0ubG9hbkluZm8gIT09IHVuZGVmaW5lZCAmJiBfdm0ubG9hbkluZm8ubGVuZ3RoID4gMCA/IF92bS5sb2FuSW5mb1swXS5jbGllbnRJZCA6ICfCoCcpICsgXCLvvIlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImxvYW5JbmZvXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImxvYW5JbmZvXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOW+geS/oeafpeivouS/oeaBr1xcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnaDMnLCBbX3ZtLl92KFwi6LS35qy+L+S/oeeUqOWNoeaDheWGtVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnVGFibGUnLCB7XG4gICAgcmVmOiBcInNlbGVjdGlvblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImJvcmRlclwiOiBcIlwiLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zMSxcbiAgICAgIFwiZGF0YVwiOiBfdm0ubG9hbkluZm9cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDov5HljYrlubTmn6Xor6LmrKHmlbAo5pyJ5pWI5p+l6K+iKTpcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubG9hbkluZm8gIT09IHVuZGVmaW5lZCAmJiBfdm0ubG9hbkluZm8ubGVuZ3RoID4gMCA/IF92bS5sb2FuSW5mb1swXS5sYXRlc3RRdWVyeU51bSA6ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOW+geS/oeafpeivouaXpeacn1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sb2FuSW5mbyAhPT0gdW5kZWZpbmVkICYmIF92bS5sb2FuSW5mby5sZW5ndGggPiAwID8gX3ZtLmxvYW5JbmZvWzBdLnF1ZXJ5RGF0ZSA6ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5b6B5L+h6LS35qy+5oC76K6hXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxvYW5JbmZvICE9PSB1bmRlZmluZWQgJiYgX3ZtLmxvYW5JbmZvLmxlbmd0aCA+IDAgPyBfdm0ubG9hbkluZm9bMF0udG90YWxMb2FuTnVtIDogJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlvoHkv6Hor4Tku7dcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubG9hbkluZm8gIT09IHVuZGVmaW5lZCAmJiBfdm0ubG9hbkluZm8ubGVuZ3RoID4gMCA/IF92bS5sb2FuSW5mb1swXS5jcmVkaXREZXNjIDogJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZmFtaWx5SW5mb1wiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJmYW1pbHlJbmZvXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOekvuS8muS/oeaBr+afpeivolxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnVGFibGUnLCB7XG4gICAgcmVmOiBcInNlbGVjdGlvblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImJvcmRlclwiOiBcIlwiLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5zb2NpYWxDb2x1bW4sXG4gICAgICBcImRhdGFcIjogX3ZtLnNvY2lhbEluZm9cbiAgICB9XG4gIH0pXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIFtfdm0uX3YoXCLphY3lgbblvoHkv6Hkv6Hmga8gKFwiICsgX3ZtLl9zKF92bS5zcG91c2VJZCkgKyBcIilcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImZhbWlseUluZm9cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZmFtaWx5SW5mb1wiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDlvoHkv6Hmn6Xor6Lkv6Hmga9cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ2gzJywgW192bS5fdihcIui0t+asvi/kv6HnlKjljaHmg4XlhrVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1RhYmxlJywge1xuICAgIHJlZjogXCJzZWxlY3Rpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJib3JkZXJcIjogXCJcIixcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1uczEsXG4gICAgICBcImRhdGFcIjogX3ZtLnNwb3VzZUxvYW5JbmZvXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6L+R5Y2K5bm05p+l6K+i5qyh5pWwKOacieaViOafpeivoilcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uc3BvdXNlTG9hbkluZm8gIT09IHVuZGVmaW5lZCAmJiBfdm0uc3BvdXNlTG9hbkluZm8ubGVuZ3RoID4gMCA/IF92bS5zcG91c2VMb2FuSW5mb1swXS5sYXRlc3RRdWVyeU51bSA6ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0t+asvuWIsOacn+WIhuW4g1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5zcG91c2VMb2FuSW5mbyAhPT0gdW5kZWZpbmVkICYmIF92bS5zcG91c2VMb2FuSW5mby5sZW5ndGggPiAwID8gX3ZtLnNwb3VzZUxvYW5JbmZvWzBdLnF1ZXJ5RGF0ZSA6ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5b6B5L+h6LS35qy+5oC76K6hXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnNwb3VzZUxvYW5JbmZvICE9PSB1bmRlZmluZWQgJiYgX3ZtLnNwb3VzZUxvYW5JbmZvLmxlbmd0aCA+IDAgPyBfdm0uc3BvdXNlTG9hbkluZm9bMF0udG90YWxMb2FuTnVtIDogJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlvoHkv6Hor4Tku7dcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uc3BvdXNlTG9hbkluZm8gIT09IHVuZGVmaW5lZCAmJiBfdm0uc3BvdXNlTG9hbkluZm8ubGVuZ3RoID4gMCA/IF92bS5zcG91c2VMb2FuSW5mb1swXS5jcmVkaXREZXNjIDogJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbGxhcHNlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiZmFtaWx5SW5mb1wiXG4gICAgfVxuICB9LCBbX2MoJ1BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJmYW1pbHlJbmZvXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOekvuS8muS/oeaBr+afpeivolxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNsb3RcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiY29udGVudFwiXG4gIH0sIFtfYygnVGFibGUnLCB7XG4gICAgcmVmOiBcInNlbGVjdGlvblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImJvcmRlclwiOiBcIlwiLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5zb2NpYWxDb2x1bW4sXG4gICAgICBcImRhdGFcIjogX3ZtLnNwb3VzZVNvY2lhbEluZm9cbiAgICB9XG4gIH0pXSwgMSldKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWUzOGRkNWJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZTM4ZGQ1YlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3RhYnMvY3JlZGl0SW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IDExNDNcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImZhbWlseUluZm9cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZmFtaWx5SW5mb1wiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDmirXmirznianliJfooahcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1RhYmxlJywge1xuICAgIHJlZjogXCJzZWxlY3Rpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJib3JkZXJcIjogXCJcIixcbiAgICAgIFwiZGlzYWJsZWQtaG92ZXJcIjogdHJ1ZSxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1uczEsXG4gICAgICBcImRhdGFcIjogX3ZtLnByb2plY3RMaXN0XG4gICAgfVxuICB9KV0sIDEpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ01vZGFsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwi5oq15oq854mp5L+h5oGvXCIsXG4gICAgICBcIndpZHRoXCI6IDcyMFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dNb2RhbCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5zaG93TW9kYWwgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNob3dNb2RhbFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIFtfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOe8luWPtzpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGFsSW5mby5pZCB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg57G75Z6LOlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kYWxJbmZvLmhvdXNlVHlwZVRleHQgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Lqn5p2D5Lq6OlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubW9kYWxJbmZvLm93bmVyIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDkuqfmnYPor4HkuabvvIjmiJbkuI3liqjkuqfor4HvvInnvJblj7c6XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5tb2RhbEluZm8uY2VydGlmaWNhdGVDb2RlIHx8ICfCoCcpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWdkOiQvTpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGFsSW5mby5kZXRhaWxlZEFkZHJlc3MgfHwgJ8KgJykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOivhOS8sOS7t+WAvO+8iOWFg++8iTpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1vZGFsSW5mby5wcmljZSB8fCAnwqAnKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWEzN2YyN2JjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYTM3ZjI3YmNcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL2J1c2luZXNzSW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdDb2xsYXBzZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcImZhbWlseUluZm9cIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZmFtaWx5SW5mb1wiLFxuICAgICAgXCJoaWRlLWFycm93XCI6IHRydWVcbiAgICB9XG4gIH0sIFtfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDmirXmirznianliJfooahcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ1RhYmxlJywge1xuICAgIHJlZjogXCJzZWxlY3Rpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJib3JkZXJcIjogXCJcIixcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1uczEsXG4gICAgICBcImRhdGFcIjogX3ZtLmZhbWlseU1lbWJlclxuICAgIH1cbiAgfSldLCAxKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1iYTVlY2E0MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWJhNWVjYTQwXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvdGFicy9jaGFuZ2VIaXN0b3J5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9jdXN0b21lckluZm8uanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTBhMGJlZGQ5XFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2N1c3RvbWVySW5mby52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qb3NodWEvRGVza3RvcC9obS1VSS9zcmMvdmlld3MvY3VzdG9tZXJJbmZvLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGN1c3RvbWVySW5mby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMGEwYmVkZDlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wYTBiZWRkOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvY3VzdG9tZXJJbmZvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODgxXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsImltcG9ydCBiYXNpY0luZm9ybWF0aW9uIGZyb20gJy4uL3ZpZXdzL3RhYnMvYmFzaWNJbmZvcm1hdGlvbidcbmltcG9ydCBmYW1pbHlNZW1iZXIgZnJvbSAnLi4vdmlld3MvdGFicy9mYW1pbHlNZW1iZXInXG5pbXBvcnQgZ3VhcmFudHlJbmZvIGZyb20gJy4uL3ZpZXdzL3RhYnMvZ3VhcmFudHlJbmZvJ1xuaW1wb3J0IGNyZWRpdEluZm8gZnJvbSAnLi4vdmlld3MvdGFicy9jcmVkaXRJbmZvJ1xuaW1wb3J0IGJ1c2luZXNzSW5mbyBmcm9tICcuLi92aWV3cy90YWJzL2J1c2luZXNzSW5mbydcbmltcG9ydCBjaGFuZ2VIaXN0b3J5IGZyb20gJy4uL3ZpZXdzL3RhYnMvY2hhbmdlSGlzdG9yeSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWJOYW1lOiAnYmFzaWNJbmZvcm1hdGlvbicsXG4gICAgICAgICAgICB0YWJzOiBbe2lkOiAnYmFzaWNJbmZvcm1hdGlvbicsIHRleHQ6ICfln7rmnKzkv6Hmga8nfSxcbiAgICAgICAgICAgICAgICB7aWQ6ICdmYW1pbHlNZW1iZXInLCB0ZXh0OiAn5a625bqt5oiQ5ZGYJ30sXG4gICAgICAgICAgICAgICAge2lkOiAnZ3VhcmFudHlJbmZvJywgdGV4dDogJ+aKteaKvOeJqeS/oeaBryd9LFxuICAgICAgICAgICAgICAgIHtpZDogJ2NyZWRpdEluZm8nLCB0ZXh0OiAn5b6B5L+h5L+h5oGvJ30sXG4gICAgICAgICAgICAgICAge2lkOiAnYnVzaW5lc3NJbmZvJywgdGV4dDogJ+S4muWKoeS/oeaBryd9LFxuICAgICAgICAgICAgICAgIHtpZDogJ2NoYW5nZUhpc3RvcnknLCB0ZXh0OiAn5Y+Y5pu05Y6G5Y+yJ30sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcHJvamVjdElkOiAnJyxcbiAgICAgICAgICAgIHNwb3VzZUlkOiAnJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjdXJyZW50VGFiQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFiTmFtZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBiYXNpY0luZm9ybWF0aW9uLFxuICAgICAgICBmYW1pbHlNZW1iZXIsXG4gICAgICAgIGd1YXJhbnR5SW5mbyxcbiAgICAgICAgY3JlZGl0SW5mbyxcbiAgICAgICAgYnVzaW5lc3NJbmZvLFxuICAgICAgICBjaGFuZ2VIaXN0b3J5LFxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC5ldmVudEh1Yi4kZW1pdCgnYnJlYWRjcnVtYicpO1xuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdmFyIHVzZXJJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZFxuICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICcvaG91c2VNb3J0Z2FnZS9obUNsaWVudC9yZWFkL2RldGFpbCc7XG4gICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHtpZDogdXNlcklkfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcihyZXNwb25zZS5tc2cgfHwgdGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2plY3RJZCA9IHJlc3BvbnNlLmRhdGEucHJvamVjdElkOyAvL+afpeivouWuouaIt+S/oeaBr++8jOS/neWtmHByb2plY3RJZO+8jHByb3Bz5ZCR5YW25LuW57uE5Lu25Lyg6YCSXG4gICAgICAgICAgICB0aGlzLnNwb3VzZUlkID0gcmVzcG9uc2UuZGF0YS5zcG91c2VJZFxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jdXN0b21lckluZm8uanMiXSwic291cmNlUm9vdCI6IiJ9