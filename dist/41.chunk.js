webpackJsonp([41],{

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this = this;
        return {
            more: false,
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
            items: [],
            columns: [{ title: '主题', key: '',
                render: function render(h, params) {
                    return h('label', params.row.businessDetail.projectTitle);
                }
            }, { title: '事项', key: 'taskName' }, { title: '状态', key: 'status',
                render: function render(h, params) {
                    return h('label', params.row.businessDetail.projectStatusText);
                }
            }, { title: '处理人', key: 'lastHandler' }, { title: '处理时间', key: 'createTime' }, { title: '申请人', key: 'applicant',
                render: function render(h, params) {
                    return h('label', params.row.businessDetail.applyUserName);
                }
            }, { title: '申请时间', key: '',
                render: function render(h, params) {
                    return h('label', params.row.businessDetail.applyDate);
                }
            }]
        };
    },

    methods: {
        changePage: function changePage(pageNum) {
            var _this2 = this;

            this.loading = true;
            this.search.pageNum = pageNum;
            this.search.createTimeStart = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeStart);
            this.search.createTimeEnd = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeEnd);
            this.$axios.options.url = '/houseMortgage/workFlow/read/queryMyHistoryTask';
            this.$axios.request({ data: this.search }).then(function (response) {
                _this2.loading = false;
                if (response.httpCode !== 200) {
                    _this2.items = [];
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                _this2.items = response.data.data;
                _this2.search.total = response.data.total;
            }).catch(function (error) {
                _this2.loading = false;
                _this2.items = [];
                _this2.$Message.error(_this2.$config.ERROR);
            });
        }
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        this.changePage(1);
    }
});

/***/ }),

/***/ 1147:
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
      "placement": "top-start",
      "content": "更多筛选"
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
  }, [_vm._v("\n                    搜索\n                ")])], 1)], 1), _vm._v(" "), (_vm.more) ? _c('Form', {
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
      "label": "处理人"
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
  }))], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "申请人"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "180px"
    },
    model: {
      value: (_vm.search.applicant),
      callback: function($$v) {
        _vm.$set(_vm.search, "applicant", $$v)
      },
      expression: "search.applicant"
    }
  }, _vm._l((_vm.applicant), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                        " + _vm._s(item.text) + "\n                    ")])
  }))], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "申请时间"
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "11"
    }
  }, [_c('DatePicker', {
    attrs: {
      "type": "datetime",
      "placeholder": "开始时间",
      "options": _vm.start
    },
    model: {
      value: (_vm.search.createTimeStart),
      callback: function($$v) {
        _vm.$set(_vm.search, "createTimeStart", $$v)
      },
      expression: "search.createTimeStart"
    }
  })], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-center",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n                        -\n                    ")]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "11"
    }
  }, [_c('DatePicker', {
    attrs: {
      "type": "datetime",
      "placeholder": "结束时间",
      "options": _vm.end
    },
    model: {
      value: (_vm.search.createTimeEnd),
      callback: function($$v) {
        _vm.$set(_vm.search, "createTimeEnd", $$v)
      },
      expression: "search.createTimeEnd"
    }
  })], 1)], 1)], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "loading": _vm.loading,
      "columns": _vm.columns,
      "data": _vm.items
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
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-67bae897", module.exports)
  }
}

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1004),
  /* template */
  __webpack_require__(1147),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/havedone.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] havedone.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67bae897", Component.options)
  } else {
    hotAPI.reload("data-v-67bae897", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYXZlZG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaGF2ZWRvbmUudnVlPzZmMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hhdmVkb25lLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJpdGVtcyIsImNvbHVtbnMiLCJ0aXRsZSIsImtleSIsInJlbmRlciIsImgiLCJwYXJhbXMiLCJyb3ciLCJidXNpbmVzc0RldGFpbCIsInByb2plY3RUaXRsZSIsInByb2plY3RTdGF0dXNUZXh0IiwiYXBwbHlVc2VyTmFtZSIsImFwcGx5RGF0ZSIsIm1ldGhvZHMiLCJjaGFuZ2VQYWdlIiwicGFnZU51bSIsInRpbWVVdGlsIiwiZ2V0RGF0ZVRpbWUiLCIkYXhpb3MiLCJvcHRpb25zIiwidXJsIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImh0dHBDb2RlIiwiJE1lc3NhZ2UiLCJlcnJvciIsIm1zZyIsIkVSUk9SIiwiY2F0Y2giLCJtb3VudGVkIiwiJHJvb3QiLCJldmVudEh1YiIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLCtEQUFlO0FBQ1hBLFFBRFcsa0JBQ0o7QUFDSCxZQUFNQyxRQUFRLElBQWQ7QUFDQSxlQUFPO0FBQ0hDLGtCQUFNLEtBREg7QUFFSEMsb0JBQVE7QUFDSkMsdUJBQU8sQ0FESDtBQUVKQywwQkFBVSxLQUFLQyxPQUFMLENBQWFEO0FBRm5CLGFBRkw7QUFNSEUsb0JBQVEsRUFOTDtBQU9IQyxxQkFBUyxFQVBOO0FB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SDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxXQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoiNDEuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RpbWVVdGlsfSBmcm9tICcuLi9saWJzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLiRjb25maWcucGFnZVNpemVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0dXM6IFtdLFxuICAgICAgICAgICAgaGFuZGxlcjogW10sXG4gICAgICAgICAgICBhcHBsaWNhbnQ6IFtdLFxuICAgICAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZSAmJiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZUVuZCAmJiBkYXRlLnZhbHVlT2YoKSA+IF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kLnZhbHVlT2YoKSAtIF90aGlzLiRjb25maWcubWlsbHNlY29uZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kOiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWREYXRlKGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUgJiYgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCAmJiBkYXRlLnZhbHVlT2YoKSA8IF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lU3RhcnQudmFsdWVPZigpICsgX3RoaXMuJGNvbmZpZy5taWxsc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIGNvbHVtbnM6W3t0aXRsZTogJ+S4u+mimCcsIGtleTogJycsIFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChoLCBwYXJhbXMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnbGFiZWwnLCAgcGFyYW1zLnJvdy5idXNpbmVzc0RldGFpbC5wcm9qZWN0VGl0bGUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+S6i+mhuScsIGtleTogJ3Rhc2tOYW1lJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn54q25oCBJywga2V5OiAnc3RhdHVzJywgXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGgsIHBhcmFtcyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdsYWJlbCcsICBwYXJhbXMucm93LmJ1c2luZXNzRGV0YWlsLnByb2plY3RTdGF0dXNUZXh0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflpITnkIbkuronLCBrZXk6ICdsYXN0SGFuZGxlcid9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+WkhOeQhuaXtumXtCcsIGtleTogJ2NyZWF0ZVRpbWUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfnlLPor7fkuronLCBrZXk6ICdhcHBsaWNhbnQnLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChoLCBwYXJhbXMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnbGFiZWwnLCAgcGFyYW1zLnJvdy5idXNpbmVzc0RldGFpbC5hcHBseVVzZXJOYW1lKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfnlLPor7fml7bpl7QnLCBrZXk6ICcnLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChoLCBwYXJhbXMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnbGFiZWwnLCAgcGFyYW1zLnJvdy5idXNpbmVzc0RldGFpbC5hcHBseURhdGUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoYW5nZVBhZ2UocGFnZU51bSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnBhZ2VOdW0gPSBwYWdlTnVtO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ID0gdGltZVV0aWwuZ2V0RGF0ZVRpbWUodGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQgPSB0aW1lVXRpbC5nZXREYXRlVGltZSh0aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kKTtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL3dvcmtGbG93L3JlYWQvcXVlcnlNeUhpc3RvcnlUYXNrJztcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLnJlcXVlc3Qoe2RhdGE6IHRoaXMuc2VhcmNofSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cENvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2gudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJGVtaXQoJ2JyZWFkY3J1bWInKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKDEpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9oYXZlZG9uZS5qcyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgb246IHtcbiAgICAgIFwia2V5dXBcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICghKCdidXR0b24nIGluICRldmVudCkgJiYgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpKSB7IHJldHVybiBudWxsOyB9XG4gICAgICAgIF92bS5jaGFuZ2VQYWdlKDEpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ0Zvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaW5saW5lXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCBbX2MoJ1Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2VtZW50XCI6IFwidG9wLXN0YXJ0XCIsXG4gICAgICBcImNvbnRlbnRcIjogXCLmm7TlpJrnrZvpgIlcIlxuICAgIH1cbiAgfSwgW19jKCdJY29uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJtZC1mdW5uZWxcIixcbiAgICAgIFwic2l6ZVwiOiBcIjIyXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubW9yZSA9ICFfdm0ubW9yZVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCBbX2MoJ0lucHV0Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMzAwcHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xlYXJhYmxlXCI6IFwiXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5YWz6ZSu5a2XXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2gua2V5d29yZCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwia2V5d29yZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gua2V5d29yZFwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnRm9ybUl0ZW0nLCBbX2MoJ0J1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiaW9zLXNlYXJjaFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNoYW5nZVBhZ2UoMSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIOaQnOe0olxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIChfdm0ubW9yZSkgPyBfYygnRm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbC13aWR0aFwiOiA2MCxcbiAgICAgIFwiaW5saW5lXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnRm9ybUl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCLnirbmgIFcIlxuICAgIH1cbiAgfSwgW19jKCdTZWxlY3QnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxODBweFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoLnN0YXR1cyksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic3RhdHVzXCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zdGF0dXNcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uc3RhdHVzKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIuWkhOeQhuS6ulwiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjE4MHB4XCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2guaGFuZGxlciksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiaGFuZGxlclwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guaGFuZGxlclwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5oYW5kbGVyKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnT3B0aW9uJywge1xuICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpdGVtLmlkXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgfSkpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIueUs+ivt+S6ulwiXG4gICAgfVxuICB9LCBbX2MoJ1NlbGVjdCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjE4MHB4XCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2guYXBwbGljYW50KSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJhcHBsaWNhbnRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmFwcGxpY2FudFwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5hcHBsaWNhbnQpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdPcHRpb24nLCB7XG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInZhbHVlXCI6IGl0ZW0uaWRcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS50ZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKVxuICB9KSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdGb3JtSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIueUs+ivt+aXtumXtFwiXG4gICAgfVxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIxMVwiXG4gICAgfVxuICB9LCBbX2MoJ0RhdGVQaWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImRhdGV0aW1lXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5byA5aeL5pe26Ze0XCIsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnN0YXJ0XG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoLmNyZWF0ZVRpbWVTdGFydCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiY3JlYXRlVGltZVN0YXJ0XCIsICQkdilcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jcmVhdGVUaW1lU3RhcnRcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAtXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0NvbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcGFuXCI6IFwiMTFcIlxuICAgIH1cbiAgfSwgW19jKCdEYXRlUGlja2VyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJkYXRldGltZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIue7k+adn+aXtumXtFwiLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5lbmRcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2guY3JlYXRlVGltZUVuZCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiY3JlYXRlVGltZUVuZFwiLCAkJHYpXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guY3JlYXRlVGltZUVuZFwiXG4gICAgfVxuICB9KV0sIDEpXSwgMSldLCAxKV0sIDEpIDogX3ZtLl9lKCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1RhYmxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxvYWRpbmdcIjogX3ZtLmxvYWRpbmcsXG4gICAgICBcImNvbHVtbnNcIjogX3ZtLmNvbHVtbnMsXG4gICAgICBcImRhdGFcIjogX3ZtLml0ZW1zXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdQYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG90YWxcIjogX3ZtLnNlYXJjaC50b3RhbCxcbiAgICAgIFwiY3VycmVudFwiOiBfdm0uc2VhcmNoLnBhZ2VOdW0sXG4gICAgICBcInBhZ2Utc2l6ZVwiOiBfdm0uc2VhcmNoLnBhZ2VTaXplLFxuICAgICAgXCJzaG93LWVsZXZhdG9yXCI6IFwiXCIsXG4gICAgICBcInNob3ctdG90YWxcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jaGFuZ2VQYWdlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbGVhclwiXG4gIH0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjdiYWU4OTdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02N2JhZTg5N1wifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL2hhdmVkb25lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uL2NvbXBvbmVudHMvaGF2ZWRvbmUuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY3YmFlODk3XFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2hhdmVkb25lLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy9oYXZlZG9uZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBoYXZlZG9uZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjdiYWU4OTdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02N2JhZTg5N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvaGF2ZWRvbmUudnVlXG4vLyBtb2R1bGUgaWQgPSA4ODhcbi8vIG1vZHVsZSBjaHVua3MgPSA0MSJdLCJzb3VyY2VSb290IjoiIn0=