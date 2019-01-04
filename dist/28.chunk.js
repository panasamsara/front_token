webpackJsonp([28],{

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


var tempParams = '';
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var currentDate = new Date();
        var dayOfWeek = function dayOfWeek(day) {
            var week_day = void 0;
            switch (day) {
                case 0:
                    week_day = '日';
                    break;
                case 1:
                    week_day = '一';
                    break;
                case 2:
                    week_day = '二';
                    break;
                case 3:
                    week_day = '三';
                    break;
                case 4:
                    week_day = '四';
                    break;
                case 5:
                    week_day = '五';
                    break;
                case 6:
                    week_day = '六';
                    break;
            }
            return '星期' + week_day;
        };
        return {
            menus: JSON.parse(this.$localStorage.get('menus')) || [],
            user: JSON.parse(this.$localStorage.get('user')),
            breadcrumbs: [],
            date: __WEBPACK_IMPORTED_MODULE_0__libs_util__["b" /* timeUtil */].getCurrentDate(currentDate) + ' ' + dayOfWeek(currentDate.getDay()),
            delModal: false
        };
    },

    methods: {
        sys_click: function sys_click(name) {
            switch (name) {
                case 'logout':
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["c" /* removeToken */])();
                    this.$axios.options.url = 'logout';
                    this.$axios.request().then(function (response) {}).catch(function (error) {});
                    this.$localStorage.remove('user');
                    this.$localStorage.remove('menus');
                    this.$router.push({ name: 'login' });
                    break;
            }
        },
        confirm: function confirm() {
            this.delModal = false;
            this.$root.eventHub.$emit('delConfirm', tempParams);
        }
    },
    created: function created() {
        var _this = this;

        this.$root.eventHub.$on('breadcrumb', function () {
            _this.breadcrumbs = _this.$router.currentRoute.meta.breadcrumb === '' ? [] : _this.$router.currentRoute.meta.breadcrumb.split('/');
            _this.$nextTick(function () {
                if (_this.$refs['side_menu']) {
                    _this.$refs['side_menu'].updateOpened();
                    _this.$refs['side_menu'].updateActiveName();
                }
            });
        });
        this.$root.eventHub.$on('back', function (data) {
            _this.$router.push(data);
        });
        this.$root.eventHub.$on('delete', function (params) {
            _this.delModal = true;
            tempParams = params;
        });
    },
    mounted: function mounted() {
        var _this2 = this;

        if (this.$localStorage.get('menus')) return;
        this.$axios.options.url = 'sys/menu/read/getSysMenu';
        this.$axios.request({ data: {} }).then(function (response) {
            if (response.httpCode != 200) {
                _this2.$Message.error(response.msg || _this2.$config.ERROR);
                return;
            }
            _this2.menus = response.menus;
            _this2.$localStorage.set('menus', JSON.stringify(_this2.menus));
            _this2.$router.push({ name: 'home' });
        }).catch(function (error) {
            _this2.$Message.error(_this2.$config.ERROR);
        });
    },
    beforeDestroy: function beforeDestroy() {
        this.$root.eventHub.$off('breadcrumb');
        this.$root.eventHub.$off('back');
    }
});

/***/ }),

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cdaf80eb02e484ea8943d34262acaa04.png";

/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Layout', [_c('Header', {
    staticClass: "header"
  }, [_c('img', {
    staticClass: "fl",
    attrs: {
      "src": __webpack_require__(1067),
      "vspace": "12",
      "hspace": "15"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "inline-block line-v font14 pl10"
  }, [_c('h3', {
    staticClass: "pl10"
  }, [_vm._v("广宇金融业务系统")])]), _vm._v(" "), _c('div', {
    staticClass: "fr font14"
  }, [_c('Icon', {
    staticClass: "mr5 grey-color",
    attrs: {
      "type": "ios-contact",
      "size": "20"
    }
  }), _vm._v(" "), _c('Dropdown', {
    staticClass: "lh14 mr24",
    attrs: {
      "trigger": "click",
      "placement": "bottom-end"
    },
    on: {
      "on-click": _vm.sys_click
    }
  }, [_vm._v("\n                " + _vm._s(_vm.user.account) + "\n                "), _c('Icon', {
    staticClass: "dark-color",
    attrs: {
      "type": "ios-arrow-down"
    }
  }), _vm._v(" "), _c('DropdownMenu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('DropdownItem', {
    attrs: {
      "name": "logout"
    }
  }, [_vm._v("\n                        登出\n                    ")])], 1)], 1)], 1)]), _vm._v(" "), _c('Layout', {
    staticClass: "layout_top"
  }, [_c('Sider', {
    staticClass: "menu",
    attrs: {
      "hide-trigger": ""
    }
  }, [_c('Menu', {
    ref: "side_menu",
    attrs: {
      "accordion": "",
      "theme": "dark",
      "width": "auto",
      "active-name": _vm.$config.menu.active,
      "open-names": _vm.$config.menu.opens
    }
  }, [_vm._l((_vm.menus), function(item1) {
    return _c('MenuItem', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!item1.menuBeans),
        expression: "!item1.menuBeans"
      }],
      key: item1.id + '01',
      attrs: {
        "name": item1.id,
        "to": item1.request
      }
    }, [_c('Icon', {
      attrs: {
        "type": item1.iconcls
      }
    }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(item1.menuName))])], 1)
  }), _vm._v(" "), _vm._l((_vm.menus), function(item) {
    return _c('Submenu', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.menuBeans),
        expression: "item.menuBeans"
      }],
      key: item.id,
      attrs: {
        "name": item.id
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('Icon', {
      attrs: {
        "type": item.iconcls
      }
    }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(item.menuName))])], 1), _vm._v(" "), _vm._l((item.menuBeans), function(sub) {
      return _c('MenuItem', {
        key: sub.id,
        attrs: {
          "name": sub.id,
          "to": sub.request
        }
      }, [_vm._v("\n                        " + _vm._s(sub.menuName) + "\n                    ")])
    })], 2)
  })], 2), _vm._v(" "), _c('br'), _c('br'), _c('br'), _c('br')], 1), _vm._v(" "), _c('Layout', {
    staticClass: "layout-content"
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "20"
    }
  }, [_c('Breadcrumb', {
    staticClass: "m12"
  }, _vm._l((_vm.breadcrumbs), function(item) {
    return _c('BreadcrumbItem', {
      key: item
    }, [_vm._v("\n                            " + _vm._s(item) + "\n                        ")])
  }))], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('label', {
    staticClass: "fr m12"
  }, [_vm._v("\n                        " + _vm._s(_vm.date) + "\n                    ")])])], 1), _vm._v(" "), _c('Content', {
    staticClass: "pd10 bg-white"
  }, [_c('router-view')], 1)], 1)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "closable": false,
      "mask-closable": false,
      "width": "360"
    },
    model: {
      value: (_vm.delModal),
      callback: function($$v) {
        _vm.delModal = $$v
      },
      expression: "delModal"
    }
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('h2', [_c('Icon', {
    staticClass: "cancel",
    attrs: {
      "type": "md-alert",
      "size": "28"
    }
  }), _vm._v("\n                确认\n            ")], 1)]), _vm._v(" "), _c('div', {
    staticClass: "font14"
  }, [_vm._v("\n            确认删除？\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    on: {
      "click": function($event) {
        _vm.delModal = false
      }
    }
  }, [_vm._v("\n                取消\n            ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "error"
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("\n                确认\n            ")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-2bf3274f", module.exports)
  }
}

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1017),
  /* template */
  __webpack_require__(1119),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/master.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] master.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bf3274f", Component.options)
  } else {
    hotAPI.reload("data-v-2bf3274f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWFzdGVyLnZ1ZT9kNjNmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tYXN0ZXIudnVlIl0sIm5hbWVzIjpbInRlbXBQYXJhbXMiLCJkYXRhIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZGF5T2ZXZWVrIiwiZGF5Iiwid2Vla19kYXkiLCJtZW51cyIsIkpTT04iLCJwYXJzZSIsIiRsb2NhbFN0b3JhZ2UiLCJnZXQiLCJ1c2VyIiwiYnJlYWRjcnVtYnMiLCJkYXRlIiwidGltZVV0aWwiLCJnZXRDdXJyZW50RGF0ZSIsImdldERheSIsImRlbE1vZGFsIiwibWV0aG9kcyIsInN5c19jbGljayIsIm5hbWUiLCJyZW1vdmVUb2tlbiIsIiRheGlvcyIsIm9wdGlvbnMiLCJ1cmwiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsInJlbW92ZSIsIiRyb3V0ZXIiLCJwdXNoIiwiY29uZmlybSIsIiRyb290IiwiZXZlbnRIdWIiLCIkZW1pdCIsImNyZWF0ZWQiLCIkb24iLCJjdXJyZW50Um91dGUiLCJtZXRhIiwiYnJlYWRjcnVtYiIsInNwbGl0IiwiJG5leHRUaWNrIiwiJHJlZnMiLCJ1cGRhdGVPcGVuZWQiLCJ1cGRhdGVBY3RpdmVOYW1lIiwicGFyYW1zIiwibW91bnRlZCIsImh0dHBDb2RlIiwiJE1lc3NhZ2UiLCJtc2ciLCIkY29uZmlnIiwiRVJST1IiLCJzZXQiLCJzdHJpbmdpZnkiLCJiZWZvcmVEZXN0cm95IiwiJG9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQSxhQUFhLEVBQWpCO0FBQ0EsK0RBQWU7QUFDWEMsUUFEVyxrQkFDSjtBQUNILFlBQU1DLGNBQWMsSUFBSUMsSUFBSixFQUFwQjtBQUNBLFlBQU1DLFlBQVksU0FB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Q0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQW1HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsV0FBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwiZmlsZSI6IjI4LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZW1vdmVUb2tlbiwgdGltZVV0aWx9IGZyb20gJy4uL2xpYnMvdXRpbCdcblxudmFyIHRlbXBQYXJhbXMgPSAnJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGRheU9mV2VlayA9IChkYXkpID0+IHtcbiAgICAgICAgICAgIGxldCB3ZWVrX2RheTtcbiAgICAgICAgICAgIHN3aXRjaCAoZGF5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwIDpcbiAgICAgICAgICAgICAgICAgICAgd2Vla19kYXkgPSAn5pelJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxIDpcbiAgICAgICAgICAgICAgICAgICAgd2Vla19kYXkgPSAn5LiAJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyIDpcbiAgICAgICAgICAgICAgICAgICAgd2Vla19kYXkgPSAn5LqMJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzIDpcbiAgICAgICAgICAgICAgICAgICAgd2Vla19kYXkgPSAn5LiJJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0IDpcbiAgICAgICAgICAgICAgICAgICAgd2Vla19kYXkgPSAn5ZubJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1IDpcbiAgICAgICAgICAgICAgICAgICAgd2Vla19kYXkgPSAn5LqUJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2IDpcbiAgICAgICAgICAgICAgICAgICAgd2Vla19kYXkgPSAn5YWtJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ+aYn+acnycgKyB3ZWVrX2RheTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lbnVzOiBKU09OLnBhcnNlKHRoaXMuJGxvY2FsU3RvcmFnZS5nZXQoJ21lbnVzJykpIHx8IFtdLFxuICAgICAgICAgICAgdXNlcjogSlNPTi5wYXJzZSh0aGlzLiRsb2NhbFN0b3JhZ2UuZ2V0KCd1c2VyJykpLFxuICAgICAgICAgICAgYnJlYWRjcnVtYnM6IFtdLFxuICAgICAgICAgICAgZGF0ZTogdGltZVV0aWwuZ2V0Q3VycmVudERhdGUoY3VycmVudERhdGUpICsgJyAnICsgZGF5T2ZXZWVrKGN1cnJlbnREYXRlLmdldERheSgpKSxcbiAgICAgICAgICAgIGRlbE1vZGFsOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHN5c19jbGljayhuYW1lKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsb2dvdXQnOlxuICAgICAgICAgICAgICAgICAgICByZW1vdmVUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRheGlvcy5vcHRpb25zLnVybCA9ICdsb2dvdXQnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRheGlvcy5yZXF1ZXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGxvY2FsU3RvcmFnZS5yZW1vdmUoJ3VzZXInKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLnJlbW92ZSgnbWVudXMnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdsb2dpbid9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm0oKSB7XG4gICAgICAgICAgICB0aGlzLmRlbE1vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRlbWl0KCdkZWxDb25maXJtJywgdGVtcFBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJG9uKCdicmVhZGNydW1iJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5icmVhZGNydW1icyA9IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUubWV0YS5icmVhZGNydW1iID09PSAnJyA/IFtdIDogdGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5tZXRhLmJyZWFkY3J1bWIuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcmVmc1snc2lkZV9tZW51J10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmc1snc2lkZV9tZW51J10udXBkYXRlT3BlbmVkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ3NpZGVfbWVudSddLnVwZGF0ZUFjdGl2ZU5hbWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJG9uKCdiYWNrJywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kcm9vdC5ldmVudEh1Yi4kb24oJ2RlbGV0ZScsIChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsTW9kYWwgPSB0cnVlO1xuICAgICAgICAgICAgdGVtcFBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBpZiAodGhpcy4kbG9jYWxTdG9yYWdlLmdldCgnbWVudXMnKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy4kYXhpb3Mub3B0aW9ucy51cmwgPSAnc3lzL21lbnUvcmVhZC9nZXRTeXNNZW51JztcbiAgICAgICAgdGhpcy4kYXhpb3MucmVxdWVzdCh7ZGF0YToge319KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBDb2RlICE9IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJE1lc3NhZ2UuZXJyb3IocmVzcG9uc2UubXNnIHx8IHRoaXMuJGNvbmZpZy5FUlJPUik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tZW51cyA9IHJlc3BvbnNlLm1lbnVzO1xuICAgICAgICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLnNldCgnbWVudXMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLm1lbnVzKSk7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2hvbWUnfSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy4kTWVzc2FnZS5lcnJvcih0aGlzLiRjb25maWcuRVJST1IpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJHJvb3QuZXZlbnRIdWIuJG9mZignYnJlYWRjcnVtYicpO1xuICAgICAgICB0aGlzLiRyb290LmV2ZW50SHViLiRvZmYoJ2JhY2snKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbWFzdGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2RhZjgwZWIwMmU0ODRlYTg5NDNkMzQyNjJhY2FhMDQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2VzL2xvZ28ucG5nXG4vLyBtb2R1bGUgaWQgPSAxMDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMjgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ0xheW91dCcsIFtfYygnSGVhZGVyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImhlYWRlclwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IHJlcXVpcmUoXCIuLi9pbWFnZXMvbG9nby5wbmdcIiksXG4gICAgICBcInZzcGFjZVwiOiBcIjEyXCIsXG4gICAgICBcImhzcGFjZVwiOiBcIjE1XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlubGluZS1ibG9jayBsaW5lLXYgZm9udDE0IHBsMTBcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBsMTBcIlxuICB9LCBbX3ZtLl92KFwi5bm/5a6H6YeR6J6N5Lia5Yqh57O757ufXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmciBmb250MTRcIlxuICB9LCBbX2MoJ0ljb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXI1IGdyZXktY29sb3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiaW9zLWNvbnRhY3RcIixcbiAgICAgIFwic2l6ZVwiOiBcIjIwXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnRHJvcGRvd24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGgxNCBtcjI0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHJpZ2dlclwiOiBcImNsaWNrXCIsXG4gICAgICBcInBsYWNlbWVudFwiOiBcImJvdHRvbS1lbmRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib24tY2xpY2tcIjogX3ZtLnN5c19jbGlja1xuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udXNlci5hY2NvdW50KSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKSwgX2MoJ0ljb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGFyay1jb2xvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJpb3MtYXJyb3ctZG93blwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ0Ryb3Bkb3duTWVudScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwibGlzdFwiXG4gICAgfSxcbiAgICBzbG90OiBcImxpc3RcIlxuICB9LCBbX2MoJ0Ryb3Bkb3duSXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwibG9nb3V0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDnmbvlh7pcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdMYXlvdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0X3RvcFwiXG4gIH0sIFtfYygnU2lkZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWVudVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhpZGUtdHJpZ2dlclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ01lbnUnLCB7XG4gICAgcmVmOiBcInNpZGVfbWVudVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFjY29yZGlvblwiOiBcIlwiLFxuICAgICAgXCJ0aGVtZVwiOiBcImRhcmtcIixcbiAgICAgIFwid2lkdGhcIjogXCJhdXRvXCIsXG4gICAgICBcImFjdGl2ZS1uYW1lXCI6IF92bS4kY29uZmlnLm1lbnUuYWN0aXZlLFxuICAgICAgXCJvcGVuLW5hbWVzXCI6IF92bS4kY29uZmlnLm1lbnUub3BlbnNcbiAgICB9XG4gIH0sIFtfdm0uX2woKF92bS5tZW51cyksIGZ1bmN0aW9uKGl0ZW0xKSB7XG4gICAgcmV0dXJuIF9jKCdNZW51SXRlbScsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICB2YWx1ZTogKCFpdGVtMS5tZW51QmVhbnMpLFxuICAgICAgICBleHByZXNzaW9uOiBcIiFpdGVtMS5tZW51QmVhbnNcIlxuICAgICAgfV0sXG4gICAgICBrZXk6IGl0ZW0xLmlkICsgJzAxJyxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibmFtZVwiOiBpdGVtMS5pZCxcbiAgICAgICAgXCJ0b1wiOiBpdGVtMS5yZXF1ZXN0XG4gICAgICB9XG4gICAgfSwgW19jKCdJY29uJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0eXBlXCI6IGl0ZW0xLmljb25jbHNcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0xLm1lbnVOYW1lKSldKV0sIDEpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5tZW51cyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ1N1Ym1lbnUnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgdmFsdWU6IChpdGVtLm1lbnVCZWFucyksXG4gICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5tZW51QmVhbnNcIlxuICAgICAgfV0sXG4gICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm5hbWVcIjogaXRlbS5pZFxuICAgICAgfVxuICAgIH0sIFtfYygndGVtcGxhdGUnLCB7XG4gICAgICBzbG90OiBcInRpdGxlXCJcbiAgICB9LCBbX2MoJ0ljb24nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogaXRlbS5pY29uY2xzXG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyhpdGVtLm1lbnVOYW1lKSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKGl0ZW0ubWVudUJlYW5zKSwgZnVuY3Rpb24oc3ViKSB7XG4gICAgICByZXR1cm4gX2MoJ01lbnVJdGVtJywge1xuICAgICAgICBrZXk6IHN1Yi5pZCxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcIm5hbWVcIjogc3ViLmlkLFxuICAgICAgICAgIFwidG9cIjogc3ViLnJlcXVlc3RcbiAgICAgICAgfVxuICAgICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKHN1Yi5tZW51TmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSlcbiAgICB9KV0sIDIpXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfYygnYnInKSwgX2MoJ2JyJyksIF9jKCdicicpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdMYXlvdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0LWNvbnRlbnRcIlxuICB9LCBbX2MoJ1JvdycsIFtfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCIyMFwiXG4gICAgfVxuICB9LCBbX2MoJ0JyZWFkY3J1bWInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibTEyXCJcbiAgfSwgX3ZtLl9sKChfdm0uYnJlYWRjcnVtYnMpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdCcmVhZGNydW1iSXRlbScsIHtcbiAgICAgIGtleTogaXRlbVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnQ29sJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNwYW5cIjogXCI0XCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZnIgbTEyXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5kYXRlKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdDb250ZW50Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBkMTAgYmctd2hpdGVcIlxuICB9LCBbX2MoJ3JvdXRlci12aWV3JyldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdNb2RhbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjbG9zYWJsZVwiOiBmYWxzZSxcbiAgICAgIFwibWFzay1jbG9zYWJsZVwiOiBmYWxzZSxcbiAgICAgIFwid2lkdGhcIjogXCIzNjBcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmRlbE1vZGFsKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmRlbE1vZGFsID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJkZWxNb2RhbFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiaGVhZGVyXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiaGVhZGVyXCJcbiAgfSwgW19jKCdoMicsIFtfYygnSWNvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYW5jZWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibWQtYWxlcnRcIixcbiAgICAgIFwic2l6ZVwiOiBcIjI4XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg56Gu6K6kXFxuICAgICAgICAgICAgXCIpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb250MTRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg56Gu6K6k5Yig6Zmk77yfXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzbG90XCI6IFwiZm9vdGVyXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiZm9vdGVyXCJcbiAgfSwgW19jKCdCdXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5kZWxNb2RhbCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOWPlua2iFxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnQnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJlcnJvclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY29uZmlybVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDnoa7orqRcXG4gICAgICAgICAgICBcIildKV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yYmYzMjc0ZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTJiZjMyNzRmXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L2l2aWV3LWxvYWRlcj97XCJwcmVmaXhcIjpmYWxzZX0hLi9zcmMvdmlld3MvbWFzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDI4IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uL2NvbXBvbmVudHMvbWFzdGVyLmpzXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yYmYzMjc0ZlxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi4vLi4vbm9kZV9tb2R1bGVzL2l2aWV3LWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9tYXN0ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvam9zaHVhL0Rlc2t0b3AvaG0tVUkvc3JjL3ZpZXdzL21hc3Rlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBtYXN0ZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJiZjMyNzRmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmJmMzI3NGZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL21hc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDkwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDI4Il0sInNvdXJjZVJvb3QiOiIifQ==