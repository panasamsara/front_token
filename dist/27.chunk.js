webpackJsonp([27],{

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "control"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "control",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                控卡信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        决议编号\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        放款编号\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        借款人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        客户经理\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        部门\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        控卡时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        银行卡号\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        开户银行\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        银行卡有效期\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  })], 1), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        相关凭证\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "6"
    }
  }, [_c('a', {
    attrs: {
      "href": _vm.$config.downloadUrl
    }
  }, [_vm._v("查看")])]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        备注\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "14"
    }
  })], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('finance', {
    attrs: {
      "model": _vm.model
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "text-right"
  }, [_c('Button', {
    on: {
      "click": function($event) {
        _vm.$root.eventHub.$emit('back', {
          name: 'backlog',
          params: _vm.$router.currentRoute.params
        })
      }
    }
  }, [_vm._v("\n            返回\n        ")]), _vm._v("\n         \n        "), _c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n            提交\n        ")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-c6e54ca4", module.exports)
  }
}

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(988),
  /* template */
  __webpack_require__(1176),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/branchControlCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] branchControlCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c6e54ca4", Component.options)
  } else {
    hotAPI.reload("data-v-c6e54ca4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object
    },
    data: function data() {
        return {
            chargeColumns: [{ title: '序号', key: '' }, { title: '收费项目', key: '' }, {
                title: '我司收费帐号', key: '', render: function render(h, params) {
                    return h('Input', {
                        props: {
                            type: 'text',
                            maxlength: 20,
                            clearable: true,
                            placeholder: '我司收费帐号'
                        }
                    });
                }
            }, {
                title: '应收金额(元)', key: '', render: function render(h, params) {
                    return h('InputNumber', {
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '我司收费帐号'
                        }
                    });
                }
            }, {
                title: '实收金额(元)', key: '', render: function render(h, params) {
                    return h('InputNumber', {
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '我司收费帐号'
                        }
                    });
                }
            }, {
                title: '收费时间', key: '', render: function render(h, params) {
                    return h('DatePicker', {
                        props: {
                            type: 'date',
                            clearable: true,
                            placeholder: '选择收费时间'
                        }
                    });
                }
            }, {
                title: '收费方式', key: '', render: function render(h, params) {
                    return h('Select', {
                        props: {
                            placeholder: '选择收费方式',
                            clearable: true
                        }
                    }, []);
                }
            }, {
                title: '确认收取', key: '', render: function render(h, params) {
                    return h('Checkbox', {
                        props: {
                            label: '确认'
                        }
                    }, '确认');
                }
            }, {
                title: '财务编码', key: '', render: function render(h, params) {
                    return h('Input', {
                        props: {
                            type: 'text',
                            placeholder: '财务编码',
                            clearable: true,
                            maxlength: 20
                        }
                    });
                }
            }, {
                title: '收费凭证', key: '', render: function render(h, params) {
                    h('div', [h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '查看'), h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '重新上传'), h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '上传')]);
                }
            }],
            cardColumns: [{ title: '项目', key: '' }, {
                title: '卡号', key: '', render: function render(h, params) {
                    return h('Input', {
                        props: {
                            type: 'text',
                            maxlength: 20,
                            clearable: true,
                            placeholder: '卡号'
                        }
                    });
                }
            }, {
                title: '有效期', key: '', render: function render(h, params) {
                    return h('DatePicker', {
                        props: {
                            type: 'data',
                            clearable: 'true',
                            placeholder: '选择有效期'
                        }
                    });
                }
            }, {
                title: '开户银行', key: '', render: function render(h, params) {
                    return h('Input', {
                        props: {
                            type: 'text',
                            maxlength: 20,
                            clearable: true,
                            placeholder: '开户银行'
                        }
                    });
                }
            }, {
                title: '收卡时间', key: '', render: function render(h, params) {
                    return h('DatePicker', {
                        props: {
                            type: 'data',
                            clearable: 'true',
                            placeholder: '选择有效期'
                        }
                    });
                }
            }, {
                title: '确认收取', key: '', render: function render(h, params) {
                    return h('Checkbox', {
                        props: {
                            label: '确认'
                        }
                    }, '确认');
                }
            }, { title: '备注', key: '' }, {
                title: '收费凭证', key: '', render: function render(h, params) {
                    h('div', [h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '查看'), h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '重新上传'), h('a', {
                        on: {
                            click: function click() {}
                        }
                    }, '上传')]);
                }
            }]
        };
    }
});

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(937),
  /* template */
  __webpack_require__(943),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/finance.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] finance.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a347ff6", Component.options)
  } else {
    hotAPI.reload("data-v-4a347ff6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "charge"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "charge",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n            收费信息\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Icon', {
    attrs: {
      "type": "md-list"
    }
  }), _vm._v("\n            收费表(综合费率：0.08%)\n            "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "data": _vm.model.chargeData,
      "columns": _vm.chargeColumns
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Table', {
    attrs: {
      "data": _vm.model.cardData,
      "columns": _vm.cardColumns
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-4a347ff6", module.exports)
  }
}

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_finance__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_finance___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_finance__);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: {
                chargeData: [],
                cardData: []
            }
        };
    },

    components: {
        'finance': __WEBPACK_IMPORTED_MODULE_0__views_tabs_finance___default.a
    },
    methods: {
        submit: function submit() {}
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
    }
});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYnJhbmNoQ29udHJvbENhcmQudnVlPzczNDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2JyYW5jaENvbnRyb2xDYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzL2ZpbmFuY2UuanM/OTNjZSoqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJzL2ZpbmFuY2UudnVlP2UwYWUqKiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFicy9maW5hbmNlLnZ1ZT8xMWIwKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JyYW5jaENvbnRyb2xDYXJkLmpzIl0sIm5hbWVzIjpbInByb3BzIiwibW9kZWwiLCJPYmplY3QiLCJkYXRhIiwiY2hhcmdlQ29sdW1ucyIsInRpdGxlIiwia2V5IiwicmVuZGVyIiwiaCIsInBhcmFtcyIsInR5cGUiLCJtYXhsZW5ndGgiLCJjbGVhcmFibGUiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwib24iLCJjbGljayIsImNhcmRDb2x1bW5zIiwiY2hhcmdlRGF0YSIsImNhcmREYXRhIiwiY29tcG9uZW50cyIsImZpbmFuY2UiLCJtZXRob2RzIiwic3VibWl0IiwibW91bnRlZCIsIiRyb290IiwiZXZlbnRIdWIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxXQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7QUMzQkEsK0RBQWU7QUFDWEEsV0FBTTtBQUNGQyxlQUFNQztBQURKLEtBREs7QUFJWEMsUUFKVyxrQkFJTDtBQUNGLGVBQU07QUFDRkMsMkJBQWUsQ0FBQyxFQUFDQyxPQUFPLElBQVIsRUFBY0MsS0FBSyxFQUFuQixFQUFELEVBQ1gsRUFBQ0QsT0FBTyxNQUFSLEVBQWdCQyxLQUFLLEVBQXJCLEVBRFcsRUFFWDtBQUNJRCx1QkFBTyxRQURYLEVBQ3FCQyxLQUFLLEVBRDFCLEVBQzhCQyxRQUFRLGdCQUFDQyxDQUFELEVBQUlDLE1BQUosRUFBZTtBQUM3QywyQkFBT0QsRUFBRSxPQUFGLEVBQVc7QUFDZFIsK0JBQU87QUFDSFUsa0NBQU0sTUFESDtBQUVIQyx1Q0FBVyxFQUZSO0FBR0hDLHVDQUFXLElBSFI7QUFJSEMseUNBQWE7QUFKVjtBQURPLHFCQUFYLENBQVA7QUFRSDtBQVZMLGFBRlcsRUFhUjtBQUNDUix1QkFBTyxTQURSLEVBQ21CQyxLQUFLLEVBRHhCLEVBQzRCQyxRQUFRLGdCQUFDQyxDQUFELEVBQUlDLE1BQUosRUFBZTtBQUM5QywyQkFBT0QsRUFBRSxhQUFGLEVBQWlCO0FBQ3BCUiwrQkFBTztBQUNIVyx1Q0FBVyxFQURSO0FBRUhDLHVDQUFXLElBRlI7QUFHSEMseUNBQWE7QUFIVjtBQURhLHFCQUFqQixDQUFQO0FBT0g7QUFURixhQWJRLEVBdUJSO0FBQ0NSLHVCQUFPLFNBRFIsRUFDbUJDLEtBQUssRUFEeEIsRUFDNEJDLFFBQVEsZ0JBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQzlDLDJCQUFPRCxFQUFFLGFBQUYsRUFBaUI7QUFDcEJSLCtCQUFPO0FBQ0hXLHVDQUFXLEVBRFI7QUFFSEMsdUNBQVcsSUFGUjtBQUdIQyx5Q0FBYTtBQUhWO0FBRGEscUJBQWpCLENBQVA7QUFPSDtBQVRGLGFBdkJRLEVBaUNSO0FBQ0NSLHVCQUFPLE1BRFIsRUFDZ0JDLEtBQUssRUFEckIsRUFDeUJDLFFBQVEsZ0JBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQzNDLDJCQUFPRCxFQUFFLFlBQUYsRUFBZ0I7QUFDbkJSLCtCQUFPO0FBQ0hVLGtDQUFNLE1BREg7QUFFSEUsdUNBQVcsSUFGUjtBQUdIQyx5Q0FBYTtBQUhWO0FBRFkscUJBQWhCLENBQVA7QUFPSDtBQVRGLGFBakNRLEVBMkNSO0FBQ0NSLHVCQUFPLE1BRFIsRUFDZ0JDLEtBQUssRUFEckIsRUFDeUJDLFFBQVEsZ0JBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQzNDLDJCQUFPRCxFQUFFLFFBQUYsRUFBWTtBQUNmUiwrQkFBTztBQUNIYSx5Q0FBYSxRQURWO0FBRUhELHVDQUFXO0FBRlI7QUFEUSxxQkFBWixFQUtKLEVBTEksQ0FBUDtBQU1IO0FBUkYsYUEzQ1EsRUFvRFI7QUFDQ1AsdUJBQU8sTUFEUixFQUNnQkMsS0FBSyxFQURyQixFQUN5QkMsUUFBUSxnQkFBQ0MsQ0FBRCxFQUFJQyxNQUFKLEVBQWU7QUFDM0MsMkJBQU9ELEVBQUUsVUFBRixFQUFjO0FBQ2pCUiwrQkFBTztBQUNIYyxtQ0FBTztBQURKO0FBRFUscUJBQWQsRUFJSixJQUpJLENBQVA7QUFLSDtBQVBGLGFBcERRLEVBNERSO0FBQ0NULHVCQUFPLE1BRFIsRUFDZ0JDLEtBQUssRUFEckIsRUFDeUJDLFFBQVEsZ0JBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQzNDLDJCQUFPRCxFQUFFLE9BQUYsRUFBVztBQUNkUiwrQkFBTztBQUNIVSxrQ0FBTSxNQURIO0FBRUhHLHlDQUFhLE1BRlY7QUFHSEQsdUNBQVcsSUFIUjtBQUlIRCx1Q0FBVztBQUpSO0FBRE8scUJBQVgsQ0FBUDtBQVFIO0FBVkYsYUE1RFEsRUF1RVI7QUFDQ04sdUJBQU8sTUFEUixFQUNnQkMsS0FBSyxFQURyQixFQUN5QkMsUUFBUSxnQkFBQ0MsQ0FBRCxFQUFJQyxNQUFKLEVBQWU7QUFDM0NELHNCQUFFLEtBQUYsRUFBUyxDQUNMQSxFQUFFLEdBQUYsRUFBTztBQUNITyw0QkFBSTtBQUNBQyxtQ0FBTyxpQkFBTSxDQUVaO0FBSEQ7QUFERCxxQkFBUCxFQU1HLElBTkgsQ0FESyxFQVFMUixFQUFFLEdBQUYsRUFBTztBQUNITyw0QkFBSTtBQUNBQyxtQ0FBTyxpQkFBTSxDQUVaO0FBSEQ7QUFERCxxQkFBUCxFQU1HLE1BTkgsQ0FSSyxFQWVMUixFQUFFLEdBQUYsRUFBTztBQUNITyw0QkFBSTtBQUNBQyxtQ0FBTyxpQkFBTSxDQUVaO0FBSEQ7QUFERCxxQkFBUCxFQU1HLElBTkgsQ0FmSyxDQUFUO0FBdUJIO0FBekJGLGFBdkVRLENBRGI7QUFtR0ZDLHlCQUFhLENBQUMsRUFBQ1osT0FBTyxJQUFSLEVBQWNDLEtBQUssRUFBbkIsRUFBRCxFQUNUO0FBQ0lELHVCQUFPLElBRFgsRUFDaUJDLEtBQUssRUFEdEIsRUFDMEJDLFFBQVEsZ0JBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQ3pDLDJCQUFPRCxFQUFFLE9BQUYsRUFBVztBQUNkUiwrQkFBTztBQUNIVSxrQ0FBTSxNQURIO0FBRUhDLHVDQUFXLEVBRlI7QUFHSEMsdUNBQVcsSUFIUjtBQUlIQyx5Q0FBYTtBQUpWO0FBRE8scUJBQVgsQ0FBUDtBQVFIO0FBVkwsYUFEUyxFQVlOO0FBQ0NSLHVCQUFPLEtBRFIsRUFDZUMsS0FBSyxFQURwQixFQUN3QkMsUUFBUSxnQkFBQ0MsQ0FBRCxFQUFJQyxNQUFKLEVBQWU7QUFDMUMsMkJBQU9ELEVBQUUsWUFBRixFQUFnQjtBQUNuQlIsK0JBQU87QUFDSFUsa0NBQU0sTUFESDtBQUVIRSx1Q0FBVyxNQUZSO0FBR0hDLHlDQUFhO0FBSFY7QUFEWSxxQkFBaEIsQ0FBUDtBQU9IO0FBVEYsYUFaTSxFQXVCVDtBQUNJUix1QkFBTyxNQURYLEVBQ21CQyxLQUFLLEVBRHhCLEVBQzRCQyxRQUFRLGdCQUFDQyxDQUFELEVBQUlDLE1BQUosRUFBZTtBQUMzQywyQkFBT0QsRUFBRSxPQUFGLEVBQVc7QUFDZFIsK0JBQU87QUFDSFUsa0NBQU0sTUFESDtBQUVIQyx1Q0FBVyxFQUZSO0FBR0hDLHVDQUFXLElBSFI7QUFJSEMseUNBQWE7QUFKVjtBQURPLHFCQUFYLENBQVA7QUFRSDtBQVZMLGFBdkJTLEVBa0NOO0FBQ0NSLHVCQUFPLE1BRFIsRUFDZ0JDLEtBQUssRUFEckIsRUFDeUJDLFFBQVEsZ0JBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQzNDLDJCQUFPRCxFQUFFLFlBQUYsRUFBZ0I7QUFDbkJSLCtCQUFPO0FBQ0hVLGtDQUFNLE1BREg7QUFFSEUsdUNBQVcsTUFGUjtBQUdIQyx5Q0FBYTtBQUhWO0FBRFkscUJBQWhCLENBQVA7QUFPSDtBQVRGLGFBbENNLEVBNENOO0FBQ0NSLHVCQUFPLE1BRFIsRUFDZ0JDLEtBQUssRUFEckIsRUFDeUJDLFFBQVEsZ0JBQUNDLENBQUQsRUFBSUMsTUFBSixFQUFlO0FBQzNDLDJCQUFPRCxFQUFFLFVBQUYsRUFBYztBQUNqQlIsK0JBQU87QUFDSGMsbUNBQU87QUFESjtBQURVLHFCQUFkLEVBSUosSUFKSSxDQUFQO0FBS0g7QUFQRixhQTVDTSxFQXFEVCxFQUFDVCxPQUFPLElBQVIsRUFBY0MsS0FBSyxFQUFuQixFQXJEUyxFQXNEVDtBQUNJRCx1QkFBTyxNQURYLEVBQ21CQyxLQUFLLEVBRHhCLEVBQzRCQyxRQUFRLGdCQUFDQyxDQUFELEVBQUlDLE1BQUosRUFBZTtBQUMzQ0Qsc0JBQUUsS0FBRixFQUFTLENBQ0xBLEVBQUUsR0FBRixFQUFPO0FBQ0hPLDRCQUFJO0FBQ0FDLG1DQUFPLGlCQUFNLENBRVo7QUFIRDtBQURELHFCQUFQLEVBTUcsSUFOSCxDQURLLEVBUUxSLEVBQUUsR0FBRixFQUFPO0FBQ0hPLDRCQUFJO0FBQ0FDLG1DQUFPLGlCQUFNLENBRVo7QUFIRDtBQURELHFCQUFQLEVBTUcsTUFOSCxDQVJLLEVBZUxSLEVBQUUsR0FBRixFQUFPO0FBQ0hPLDRCQUFJO0FBQ0FDLG1DQUFPLGlCQUFNLENBRVo7QUFIRDtBQURELHFCQUFQLEVBTUcsSUFOSCxDQWZLLENBQVQ7QUF1Qkg7QUF6QkwsYUF0RFM7QUFuR1gsU0FBTjtBQXFMSDtBQTFMVSxDQUFmLEU7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzRztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMzQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ3RDQTs7QUFFQSwrREFBZTtBQUNYYixRQURXLGtCQUNKO0FBQ0gsZUFBTztBQUNIRixtQkFBTTtBQUNGaUIsNEJBQVcsRUFEVDtBQUVGQywwQkFBUztBQUZQO0FBREgsU0FBUDtBQU1ILEtBUlU7O0FBU1hDLGdCQUFZO0FBQ1IsbUJBQVcsMkRBQUFDO0FBREgsS0FURDtBQVlYQyxhQUFRO0FBQ0pDLGNBREksb0JBQ0ksQ0FFUDtBQUhHLEtBWkc7QUFpQlhDLFdBakJXLHFCQWlCRDtBQUNOLGFBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsS0FBcEIsQ0FBMEIsWUFBMUI7QUFDSDtBQW5CVSxDQUFmLEUiLCJmaWxlIjoiMjcuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJjb250cm9sXCJcbiAgICB9XG4gIH0sIFtfYygnUGFuZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImNvbnRyb2xcIixcbiAgICAgIFwiaGlkZS1hcnJvd1wiOiB0cnVlXG4gICAgfVxuICB9LCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg5o6n5Y2h5L+h5oGvXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2xvdFwiOiBcImNvbnRlbnRcIlxuICAgIH0sXG4gICAgc2xvdDogXCJjb250ZW50XCJcbiAgfSwgW19jKCdSb3cnLCBbX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Yaz6K6u57yW5Y+3XFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaUvuasvue8luWPt1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlgJ/mrL7kurpcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlrqLmiLfnu4/nkIZcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6YOo6ZeoXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOaOp+WNoeaXtumXtFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnUm93JywgW19jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOmTtuihjOWNoeWPt1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI2XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDlvIDmiLfpk7booYxcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGdyZXktbGlnaHQtY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg6ZO26KGM5Y2h5pyJ5pWI5pyfXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwbDEwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjZcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZ3JleS1saWdodC1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDnm7jlhbPlh63or4FcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiNlwiXG4gICAgfVxuICB9LCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBfdm0uJGNvbmZpZy5kb3dubG9hZFVybFxuICAgIH1cbiAgfSwgW192bS5fdihcIuafpeeci1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBncmV5LWxpZ2h0LWNvbG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhblwiOiBcIjJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIOWkh+azqFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdDb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGwxMFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxNFwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2ZpbmFuY2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibW9kZWxcIjogX3ZtLm1vZGVsXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiXG4gIH0sIFtfYygnQnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JhY2snLCB7XG4gICAgICAgICAgbmFtZTogJ2JhY2tsb2cnLFxuICAgICAgICAgIHBhcmFtczogX3ZtLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIOi/lOWbnlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgwqBcXG4gICAgICAgIFwiKSwgX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc3VibWl0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5o+Q5LqkXFxuICAgICAgICBcIildKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYzZlNTRjYTRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1jNmU1NGNhNFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL2JyYW5jaENvbnRyb2xDYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDI3IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uL2NvbXBvbmVudHMvYnJhbmNoQ29udHJvbENhcmQuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWM2ZTU0Y2E0XFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2JyYW5jaENvbnRyb2xDYXJkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy9icmFuY2hDb250cm9sQ2FyZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBicmFuY2hDb250cm9sQ2FyZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYzZlNTRjYTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1jNmU1NGNhNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvYnJhbmNoQ29udHJvbENhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA4NzJcbi8vIG1vZHVsZSBjaHVua3MgPSAyNyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczp7XG4gICAgICAgIG1vZGVsOk9iamVjdFxuICAgIH0sXG4gICAgZGF0YSgpe1xuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICBjaGFyZ2VDb2x1bW5zOiBbe3RpdGxlOiAn5bqP5Y+3Jywga2V5OiAnJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5pS26LS56aG555uuJywga2V5OiAnJ30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkeWPuOaUtui0ueW4kOWPtycsIGtleTogJycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+aIkeWPuOaUtui0ueW4kOWPtydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+W6lOaUtumHkeminSjlhYMpJywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXROdW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+aIkeWPuOaUtui0ueW4kOWPtydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WunuaUtumHkeminSjlhYMpJywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXROdW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+aIkeWPuOaUtui0ueW4kOWPtydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aUtui0ueaXtumXtCcsIGtleTogJycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0RhdGVQaWNrZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6YCJ5oup5pS26LS55pe26Ze0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pS26LS55pa55byPJywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnU2VsZWN0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6YCJ5oup5pS26LS55pa55byPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5pS25Y+WJywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnQ2hlY2tib3gnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICfnoa7orqQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ+ehruiupCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6LSi5Yqh57yW56CBJywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnSW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+i0ouWKoee8lueggScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pS26LS55Yet6K+BJywga2V5OiAnJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoKCdkaXYnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICfmn6XnnIsnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ+mHjeaWsOS4iuS8oCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAn5LiK5LygJylcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGNhcmRDb2x1bW5zOiBbe3RpdGxlOiAn6aG555uuJywga2V5OiAnJ30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WNoeWPtycsIGtleTogJycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+WNoeWPtydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+acieaViOacnycsIGtleTogJycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0RhdGVQaWNrZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfpgInmi6nmnInmlYjmnJ8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+W8gOaIt+mTtuihjCcsIGtleTogJycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+W8gOaIt+mTtuihjCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aUtuWNoeaXtumXtCcsIGtleTogJycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ0RhdGVQaWNrZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfpgInmi6nmnInmlYjmnJ8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmlLblj5YnLCBrZXk6ICcnLCByZW5kZXI6IChoLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdDaGVja2JveCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+ehruiupCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAn56Gu6K6kJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5aSH5rOoJywga2V5OiAnJ30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aUtui0ueWHreivgScsIGtleTogJycsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaCgnZGl2JywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAn5p+l55yLJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICfph43mlrDkuIrkvKAnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ+S4iuS8oCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YWJzL2ZpbmFuY2UuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vY29tcG9uZW50cy90YWJzL2ZpbmFuY2UuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRhMzQ3ZmY2XFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2ZpbmFuY2UudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL3RhYnMvZmluYW5jZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBmaW5hbmNlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00YTM0N2ZmNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRhMzQ3ZmY2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWJzL2ZpbmFuY2UudnVlXG4vLyBtb2R1bGUgaWQgPSA5NDFcbi8vIG1vZHVsZSBjaHVua3MgPSAyMCAyMyAyNiAyNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnQ29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJjaGFyZ2VcIlxuICAgIH1cbiAgfSwgW19jKCdQYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiY2hhcmdlXCIsXG4gICAgICBcImhpZGUtYXJyb3dcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg5pS26LS55L+h5oGvXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiY29udGVudFwiXG4gICAgfSxcbiAgICBzbG90OiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ0ljb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcIm1kLWxpc3RcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgIOaUtui0ueihqCjnu7zlkIjotLnnjofvvJowLjA4JSlcXG4gICAgICAgICAgICBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtdDVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhXCI6IF92bS5tb2RlbC5jaGFyZ2VEYXRhLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jaGFyZ2VDb2x1bW5zXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhXCI6IF92bS5tb2RlbC5jYXJkRGF0YSxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY2FyZENvbHVtbnNcbiAgICB9XG4gIH0pXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTRhMzQ3ZmY2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGEzNDdmZjZcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vaXZpZXctbG9hZGVyP3tcInByZWZpeFwiOmZhbHNlfSEuL3NyYy92aWV3cy90YWJzL2ZpbmFuY2UudnVlXG4vLyBtb2R1bGUgaWQgPSA5NDNcbi8vIG1vZHVsZSBjaHVua3MgPSAyMCAyMyAyNiAyNyIsImltcG9ydCBmaW5hbmNlIGZyb20gJy4uL3ZpZXdzL3RhYnMvZmluYW5jZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2RlbDp7XG4gICAgICAgICAgICAgICAgY2hhcmdlRGF0YTpbXSxcbiAgICAgICAgICAgICAgICBjYXJkRGF0YTpbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICdmaW5hbmNlJzogZmluYW5jZVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIHN1Ym1pdCgpe1xuXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JyZWFkY3J1bWInKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJhbmNoQ29udHJvbENhcmQuanMiXSwic291cmNlUm9vdCI6IiJ9