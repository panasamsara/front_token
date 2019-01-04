webpackJsonp([35],{

/***/ 1022:
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
            columns: [
            // {title: '项目编号', key: 'code'},
            { title: '项目名称', key: 'projectTitle' }, { title: '客户名称', key: 'client.clientName',
                render: function render(h, params) {
                    return h('div', {}, params.row.client ? params.row.client.clientName : '');
                }
            }, { title: '客户经理', key: 'applyUserName' }, { title: '房产坐落', key: 'address',
                render: function render(h, params) {
                    return h('div', {}, params.row.pawnList[0] ? params.row.pawnList[0].detailedAddress : '');
                }
            }, { title: '房产估值(元）', key: 'firstEvalue' }, { title: '申请金额(元）', key: 'initLoanAmount' }, { title: '批复金额(元）', key: 'evalResult' }, { title: '项目状态', key: 'projectStatusText' }, {
                title: '操作', align: 'center', render: function render(h, params) {
                    return h('div', [h('a', {
                        style: {
                            display: params.row.multiple ? 'none' : 'block'
                        },
                        on: {
                            click: function click() {
                                _this2.$router.push({
                                    name: 'projectInfo',
                                    params: { id: params.row.id }
                                });
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
            }]
        };
    },

    methods: {
        changePage: function changePage(pageNum) {
            var _this3 = this;

            this.loading = true;
            this.search.pageNum = pageNum;
            this.search.createTimeStart = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeStart);
            this.search.createTimeEnd = __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getDateTime(this.search.createTimeEnd);
            this.$axios.options.url = '/houseMortgage/hmProject/read/list';
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
        }
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        this.changePage(1);
    }
});

/***/ }),

/***/ 1141:
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
  }, [_vm._v("\n                    搜索\n                ")])], 1)], 1)], 1), _vm._v(" "), _c('Table', {
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
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-57782f08", module.exports)
  }
}

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1022),
  /* template */
  __webpack_require__(1141),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/project.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] project.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57782f08", Component.options)
  } else {
    hotAPI.reload("data-v-57782f08", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wcm9qZWN0LnZ1ZT82ZTE4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wcm9qZWN0LnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJjb2x1bW5zIiwidGl0bGUiLCJrZXkiLCJyZW5kZXIiLCJoIiwicGFyYW1zIiwicm93IiwiY2xpZW50IiwiY2xpZW50TmFtZSIsInBhd25MaXN0IiwiZGV0YWlsZWRBZGRyZXNzIiwiYWxpZ24iLCJzdHlsZSIsImRpc3BsYXkiLCJtdWx0aXBsZSIsIm9uIiwiY2xpY2siLCIkcm91dGVyIiwicHVzaCIsIm5hbWUiLCJpZCIsInByb3BzIiwiY29udGVudCIsInBsYWNlbWVudCIsInR5cGUiLCJzaXplIiwiY29sb3IiLCJtZXRob2RzIiwiY2hhbmdlUGFnZSIsInBhZ2VOdW0iLCJ0aW1lVXRpbCIsImdldERhdGVUaW1lIiwiJGF4aW9zIiwib3B0aW9ucyIsInVybCIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJodHRwQ29kZSIsIiRNZXNzYWdlIiwiZXJyb3IiLCJtc2ciLCJFUlJPUiIsImxpc3QiLCJjYXRjaCIsIm1vdW50ZWQiLCIkcm9vdCIsImV2ZW50SHViIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsK0RBQWU7QUFDWEEsUUFEVyxrQkFDSjtBQUFBOztBQUNILFlBQU1DLFFBQVEsSUFBZDtBQUNBLGVBQU87QUFDSEMsa0JBQU0sS0FESDtB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QUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFdBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsImZpbGUiOiIzNS5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dGltZVV0aWx9IGZyb20gJy4uL2xpYnMvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMuJGNvbmZpZy5wYWdlU2l6ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czogW10sXG4gICAgICAgICAgICBoYW5kbGVyOiBbXSxcbiAgICAgICAgICAgIGFwcGxpY2FudDogW10sXG4gICAgICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZShkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlICYmIF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kICYmIGRhdGUudmFsdWVPZigpID4gX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQudmFsdWVPZigpIC0gX3RoaXMuJGNvbmZpZy5taWxsc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZSAmJiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ICYmIGRhdGUudmFsdWVPZigpIDwgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydC52YWx1ZU9mKCkgKyBfdGhpcy4kY29uZmlnLm1pbGxzZWNvbmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICAgICAgLy8ge3RpdGxlOiAn6aG555uu57yW5Y+3Jywga2V5OiAnY29kZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+mhueebruWQjeensCcsIGtleTogJ3Byb2plY3RUaXRsZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+WuouaIt+WQjeensCcsIGtleTogJ2NsaWVudC5jbGllbnROYW1lJywgXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGgsIHBhcmFtcyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCdkaXYnLCB7fSwgcGFyYW1zLnJvdy5jbGllbnQ/IHBhcmFtcy5yb3cuY2xpZW50LmNsaWVudE5hbWU6ICcnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflrqLmiLfnu4/nkIYnLCBrZXk6ICdhcHBseVVzZXJOYW1lJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5oi/5Lqn5Z2Q6JC9Jywga2V5OiAnYWRkcmVzcycsIFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChoLCBwYXJhbXMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge30sIHBhcmFtcy5yb3cucGF3bkxpc3RbMF0/IHBhcmFtcy5yb3cucGF3bkxpc3RbMF0uZGV0YWlsZWRBZGRyZXNzIDogJycgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmiL/kuqfkvLDlgLwo5YWD77yJJywga2V5OiAnZmlyc3RFdmFsdWUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfnlLPor7fph5Hpop0o5YWD77yJJywga2V5OiAnaW5pdExvYW5BbW91bnQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmibnlpI3ph5Hpop0o5YWD77yJJywga2V5OiAnZXZhbFJlc3VsdCd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+mhueebrueKtuaAgScsIGtleTogJ3Byb2plY3RTdGF0dXNUZXh0J30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aTjeS9nCcsIGFsaWduOiAnY2VudGVyJywgcmVuZGVyOiAoaCwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgnZGl2JywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBwYXJhbXMucm93Lm11bHRpcGxlID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9qZWN0SW5mbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge2lkOiBwYXJhbXMucm93LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflpITnkIYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY3JlYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBwYXJhbXMucm93Lm11bHRpcGxlID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdUb29sdGlwJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5o6l5Y+XJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ0ljb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21kLWNoZWNrbWFyaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjk5MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoYW5nZVBhZ2UocGFnZU51bSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnBhZ2VOdW0gPSBwYWdlTnVtO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ID0gdGltZVV0aWwuZ2V0RGF0ZVRpbWUodGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQgPSB0aW1lVXRpbC5nZXREYXRlVGltZSh0aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kKTtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htUHJvamVjdC9yZWFkL2xpc3QnO1xuICAgICAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YTogdGhpcy5zZWFyY2h9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5odHRwQ29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHJlc3BvbnNlLm1zZyB8fCB0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGEubGlzdDtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC50b3RhbCA9IHJlc3BvbnNlLmRhdGEudG90YWw7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLiRNZXNzYWdlLmVycm9yKHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kcm9vdC5ldmVudEh1Yi4kZW1pdCgnYnJlYWRjcnVtYicpO1xuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoMSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3Byb2plY3QuanMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoISgnYnV0dG9uJyBpbiAkZXZlbnQpICYmIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKSkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdGb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlubGluZVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdJbnB1dCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjMwMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWFs+mUruWtl1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoLmtleXdvcmQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImtleXdvcmRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmtleXdvcmRcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0Zvcm1JdGVtJywgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImlvcy1zZWFyY2hcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jaGFuZ2VQYWdlKDEpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmkJzntKJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsb2FkaW5nXCI6IF92bS5sb2FkaW5nLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5kYXRhXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdQYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG90YWxcIjogX3ZtLnNlYXJjaC50b3RhbCxcbiAgICAgIFwiY3VycmVudFwiOiBfdm0uc2VhcmNoLnBhZ2VOdW0sXG4gICAgICBcInBhZ2Utc2l6ZVwiOiBfdm0uc2VhcmNoLnBhZ2VTaXplLFxuICAgICAgXCJzaG93LWVsZXZhdG9yXCI6IFwiXCIsXG4gICAgICBcInNob3ctdG90YWxcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jaGFuZ2VQYWdlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbGVhclwiXG4gIH0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTc3ODJmMDhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01Nzc4MmYwOFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL3Byb2plY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMzUiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vY29tcG9uZW50cy9wcm9qZWN0LmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01Nzc4MmYwOFxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9wcm9qZWN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy9wcm9qZWN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHByb2plY3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU3NzgyZjA4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTc3ODJmMDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3Byb2plY3QudnVlXG4vLyBtb2R1bGUgaWQgPSA5MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAzNSJdLCJzb3VyY2VSb290IjoiIn0=