webpackJsonp([44],{

/***/ 1162:
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
     __webpack_require__(202).rerender("data-v-96fa44ea", module.exports)
  }
}

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(996),
  /* template */
  __webpack_require__(1162),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/customer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] customer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96fa44ea", Component.options)
  } else {
    hotAPI.reload("data-v-96fa44ea", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 996:
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
            columns: [{ title: '客户编号', key: 'id' }, { title: '客户名称', key: 'clientName' }, { title: '创建日期', key: 'createTime' }, { title: '证件类型', key: 'certificatesTypeText' }, { title: '证件号码', key: 'certificatesNumber' }, { title: '客户经理', key: 'customerManager' }, { title: '业务笔数', key: 'businessNumber' }, { title: '房产数量', key: 'houseNumber' }, {
                title: '操作', align: 'center', render: function render(h, params) {
                    return h('div', [h('a', {
                        style: {
                            display: params.row.multiple ? 'none' : 'block'
                        },
                        on: {
                            click: function click() {
                                _this2.$router.push({
                                    name: 'customerInfo',
                                    params: { id: params.row.id, pageNum: _this.search.pageNum }
                                });
                            }
                        }
                    }, [h('Tooltip', {
                        props: {
                            content: '查看',
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
            this.$axios.options.url = '/houseMortgage/hmClient/read/list';
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY3VzdG9tZXIudnVlP2M5ZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2N1c3RvbWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXN0b21lci5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiX3RoaXMiLCJtb3JlIiwic2VhcmNoIiwidG90YWwiLCJwYWdlU2l6ZSIsIiRjb25maWciLCJzdGF0dXMiLCJoYW5kbGVyIiwiYXBwbGljYW50Iiwic3RhcnQiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwiY3JlYXRlVGltZUVuZCIsInZhbHVlT2YiLCJtaWxsc2Vjb25kcyIsImVuZCIsImNyZWF0ZVRpbWVTdGFydCIsImxvYWRpbmciLCJjb2x1bW5zIiwidGl0bGUiLCJrZXkiLCJhbGlnbiIsInJlbmRlciIsImgiLCJwYXJhbXMiLCJzdHlsZSIsImRpc3BsYXkiLCJyb3ciLCJtdWx0aXBsZSIsIm9uIiwiY2xpY2siLCIkcm91dGVyIiwicHVzaCIsIm5hbWUiLCJpZCIsInBhZ2VOdW0iLCJwcm9wcyIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJ0eXBlIiwic2l6ZSIsImNvbG9yIiwibWV0aG9kcyIsImNoYW5nZVBhZ2UiLCJ0aW1lVXRpbCIsImdldERhdGVUaW1lIiwiJGF4aW9zIiwib3B0aW9ucyIsInVybCIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJodHRwQ29kZSIsIiRNZXNzYWdlIiwiZXJyb3IiLCJtc2ciLCJFUlJPUiIsImxpc3QiLCJjYXRjaCIsIm1vdW50ZWQiLCIkcm9vdCIsImV2ZW50SHViIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0csYUFBYTtBQUM3RztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7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Y2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoISgnYnV0dG9uJyBpbiAkZXZlbnQpICYmIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKSkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICBfdm0uY2hhbmdlUGFnZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdGb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlubGluZVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ0Zvcm1JdGVtJywgW19jKCdJbnB1dCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjMwMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsZWFyYWJsZVwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuWFs+mUruWtl1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoLmtleXdvcmQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImtleXdvcmRcIiwgJCR2KVxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmtleXdvcmRcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0Zvcm1JdGVtJywgW19jKCdCdXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImlvcy1zZWFyY2hcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jaGFuZ2VQYWdlKDEpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDmkJzntKJcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdUYWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsb2FkaW5nXCI6IF92bS5sb2FkaW5nLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zLFxuICAgICAgXCJkYXRhXCI6IF92bS5kYXRhXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdQYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG90YWxcIjogX3ZtLnNlYXJjaC50b3RhbCxcbiAgICAgIFwiY3VycmVudFwiOiBfdm0uc2VhcmNoLnBhZ2VOdW0sXG4gICAgICBcInBhZ2Utc2l6ZVwiOiBfdm0uc2VhcmNoLnBhZ2VTaXplLFxuICAgICAgXCJzaG93LWVsZXZhdG9yXCI6IFwiXCIsXG4gICAgICBcInNob3ctdG90YWxcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jaGFuZ2VQYWdlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbGVhclwiXG4gIH0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOTZmYTQ0ZWFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05NmZhNDRlYVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi9pdmlldy1sb2FkZXI/e1wicHJlZml4XCI6ZmFsc2V9IS4vc3JjL3ZpZXdzL2N1c3RvbWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDQ0IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uL2NvbXBvbmVudHMvY3VzdG9tZXIuanNcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTk2ZmE0NGVhXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuLi8uLi9ub2RlX21vZHVsZXMvaXZpZXctbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2N1c3RvbWVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2pvc2h1YS9EZXNrdG9wL2htLVVJL3NyYy92aWV3cy9jdXN0b21lci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjdXN0b21lci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOTZmYTQ0ZWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi05NmZhNDRlYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvY3VzdG9tZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA4ODBcbi8vIG1vZHVsZSBjaHVua3MgPSA0NCIsImltcG9ydCB7dGltZVV0aWx9IGZyb20gJy4uL2xpYnMvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMuJGNvbmZpZy5wYWdlU2l6ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czogW10sXG4gICAgICAgICAgICBoYW5kbGVyOiBbXSxcbiAgICAgICAgICAgIGFwcGxpY2FudDogW10sXG4gICAgICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZShkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlICYmIF90aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kICYmIGRhdGUudmFsdWVPZigpID4gX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQudmFsdWVPZigpIC0gX3RoaXMuJGNvbmZpZy5taWxsc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZSAmJiBfdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ICYmIGRhdGUudmFsdWVPZigpIDwgX3RoaXMuc2VhcmNoLmNyZWF0ZVRpbWVTdGFydC52YWx1ZU9mKCkgKyBfdGhpcy4kY29uZmlnLm1pbGxzZWNvbmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBjb2x1bW5zOiBbe3RpdGxlOiAn5a6i5oi357yW5Y+3Jywga2V5OiAnaWQnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICflrqLmiLflkI3np7AnLCBrZXk6ICdjbGllbnROYW1lJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5Yib5bu65pel5pyfJywga2V5OiAnY3JlYXRlVGltZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ+ivgeS7tuexu+WeiycsIGtleTogJ2NlcnRpZmljYXRlc1R5cGVUZXh0J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn6K+B5Lu25Y+356CBJywga2V5OiAnY2VydGlmaWNhdGVzTnVtYmVyJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5a6i5oi357uP55CGJywga2V5OiAnY3VzdG9tZXJNYW5hZ2VyJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAn5Lia5Yqh56yU5pWwJywga2V5OiAnYnVzaW5lc3NOdW1iZXInfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICfmiL/kuqfmlbDph48nLCBrZXk6ICdob3VzZU51bWJlcid9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmk43kvZwnLCBhbGlnbjogJ2NlbnRlcicsIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogcGFyYW1zLnJvdy5tdWx0aXBsZSA/ICdub25lJyA6ICdibG9jaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY3VzdG9tZXJJbmZvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7aWQ6IHBhcmFtcy5yb3cuaWQsIHBhZ2VOdW06IF90aGlzLnNlYXJjaC5wYWdlTnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ1Rvb2x0aXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmn6XnnIsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCgnSWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWQtY3JlYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmOTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBwYXJhbXMucm93Lm11bHRpcGxlID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoKCdUb29sdGlwJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5o6l5Y+XJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ0ljb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21kLWNoZWNrbWFyaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjk5MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoYW5nZVBhZ2UocGFnZU51bSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLnBhZ2VOdW0gPSBwYWdlTnVtO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0ID0gdGltZVV0aWwuZ2V0RGF0ZVRpbWUodGhpcy5zZWFyY2guY3JlYXRlVGltZVN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmNyZWF0ZVRpbWVFbmQgPSB0aW1lVXRpbC5nZXREYXRlVGltZSh0aGlzLnNlYXJjaC5jcmVhdGVUaW1lRW5kKTtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLm9wdGlvbnMudXJsID0gJy9ob3VzZU1vcnRnYWdlL2htQ2xpZW50L3JlYWQvbGlzdCc7XG4gICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KHtkYXRhOiB0aGlzLnNlYXJjaH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YS5saXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IodGhpcy4kY29uZmlnLkVSUk9SKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRlbWl0KCdicmVhZGNydW1iJyk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSgxKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY3VzdG9tZXIuanMiXSwic291cmNlUm9vdCI6IiJ9