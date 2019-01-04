webpackJsonp([0],{

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_auditInformation__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_auditInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_auditInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_householdData__ = __webpack_require__(1084);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_householdData___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_householdData__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_borrowerInformation__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tabs_borrowerInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_tabs_borrowerInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_tabs_mortgagesInformation__ = __webpack_require__(1090);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_tabs_mortgagesInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_tabs_mortgagesInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_tabs_projectInformation__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_tabs_projectInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_tabs_projectInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_tabs_chargeInformation__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_tabs_chargeInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_tabs_chargeInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_tabs_taskHistory__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_tabs_taskHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_tabs_taskHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_tabs_supplementInformation__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_tabs_supplementInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_tabs_supplementInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_tabs_internalAuditForm__ = __webpack_require__(1086);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_tabs_internalAuditForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_tabs_internalAuditForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__libs_util__ = __webpack_require__(203);











/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: {
                client: {},
                product_name: {},
                hmProjectClob: {},
                hmProjPlan: {},
                pawnList: [{}]
            },
            dicts: {},
            rules: {
                'client.clientName': [{ required: true, message: '客户姓名不能为空', trigger: 'blur' }],
                'client.oldName': [{ required: true, message: '曾用名不能为空', trigger: 'blur' }],
                'client.sex': [{ required: true, message: '性别不能为空' }],
                'client.birthday': [{ required: true, message: '出生日期不能为空' }],
                'client.certificatesType': [{ required: true, message: '证件类型不能为空' }],
                'client.certificatesNumber': [{ required: true, message: '证件号不能为空' }, {
                    pattern: /^[0-9A-Za-z]{18,20}$/,
                    message: '证件号格式错误',
                    trigger: 'blur'
                }],
                'client.maritalStatus': [{ required: true, message: '婚姻状况不能为空' }],
                'client.children': [{ required: true, message: '子女情况不能为空' }],
                'client.personalIncome': [{
                    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }],
                'client.householdIncome': [{
                    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }],
                'client.workSituation': [{ required: true, message: '工作情况不能为空' }],
                'client.businessNature': [{ required: true, message: '企业性质不能为空' }],
                'client.occupation': [{ required: true, message: '职业不能为空' }],
                'client.enterpriseScale': [{ required: true, message: '企业规模不能为空' }],
                'client.job': [{ required: true, message: '职务不能为空' }],
                'client.phoneNumber': [{ required: true, message: '手机不能为空', trigger: 'blur' }, {
                    pattern: /^\d{11}$/,
                    message: '手机格式错误',
                    trigger: 'blur'
                }],
                'client.liveAddress': [{ required: true, message: '居住情况不能为空' }],
                'client.sameAddress': [{ required: true, message: '与抵押物相同不能为空' }],
                'client.nowLiveAddress': [{ required: true, message: '现居住地址不能为空', trigger: 'blur' }],
                'client.mailAddress': [{ required: true, message: '通信地址不能为空', trigger: 'blur' }],
                'client.certificatesAddress': [{ required: true, message: '证件地址不能为空', trigger: 'blur' }],
                'client.permanentAddress': [{ required: true, message: '户籍地址不能为空', trigger: 'blur' }],
                'client.spouse.clientName': [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
                'client.spouse.oldName': [{ required: true, message: '曾用名不能为空', trigger: 'blur' }],
                'client.spouse.sex': [{ required: true, message: '性别不能为空' }],
                'client.spouse.birthday': [{ required: true, message: '出生日期不能为空' }],
                'client.spouse.certificatesType': [{ required: true, message: '证件类型不能为空' }],
                'client.spouse.certificatesNumber': [{ required: true, message: '证件号不能为空' }],
                'client.spouse.personalIncome': [{
                    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }],
                'client.spouse.nowLiveAddress': [{ required: true, message: '现居住地址不能为空', trigger: 'blur' }],
                'client.spouse.permanentAddress': [{ required: true, message: '户籍地址不能为空', trigger: 'blur' }],
                'client.spouse.workSituation': [{ required: true, message: '工作情况不能为空' }],
                'client.spouse.businessNature': [{ required: true, message: '企业性质不能为空' }],
                'client.spouse.occupation': [{ required: true, message: '职业不能为空' }],
                'client.spouse.enterpriseScale': [{ required: true, message: '企业规模不能为空' }],
                'client.spouse.job': [{ required: true, message: '职务不能为空' }],
                'client.spouse.phoneNumber': [{ required: true, message: '手机不能为空', trigger: 'blur' }, {
                    pattern: /^\d{11}$/,
                    message: '手机格式错误',
                    trigger: 'blur'
                }],
                'client.shareSaving': [{
                    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }],
                'hmProjectClob.clientDesc': [{ required: true, message: '借款人及担保人信息描述不能为空', trigger: 'blur' }],
                'hmProjectClob.managementDesc': [{ required: true, message: '经营情况描述不能为空', trigger: 'blur' }],
                'pawnList[0].certificateType': [{ required: true, message: '证件类型不能为空' }],
                'pawnList[0].certificateCode': [{ required: true, message: '证件编号不能为空', trigger: 'blur' }, {
                    pattern: /^[0-9A-Za-z]{18,20}$/,
                    message: '证件号格式错误',
                    trigger: 'blur'
                }],
                'pawnList[0].timeOfIssuing': [{ required: true, message: '发证日期不能为空' }],
                'pawnList[0].landCardCode': [{ required: true, message: '土地证编号不能为空', trigger: 'blur' }, {
                    pattern: /^[0-9A-Za-z]{18,20}$/,
                    message: '证件号格式错误',
                    trigger: 'blur'
                }],
                'pawnList[0].dateOfIssuing': [{ required: true, message: '发证日期不能为空' }],
                'pawnList[0].detailedAddress': [{ required: true, message: '具体地址不能为空', trigger: 'blur' }],
                'pawnList[0].communityName': [{ required: true, message: '小区名称不能为空', trigger: 'blur' }],
                'pawnList[0].buildingNumber': [{ required: true, message: '楼栋号不能为空', trigger: 'blur' }],
                'pawnList[0].totalFloor': [{ required: true, message: '总楼层不能为空', trigger: 'blur' }],
                'pawnList[0].onFloor': [{ required: true, message: '所在楼层不能为空', trigger: 'blur' }],
                'pawnList[0].roomNumber': [{ required: true, message: '房间号不能为空', trigger: 'blur' }],
                'pawnList[0].orientation': [{ required: true, message: '朝向不能为空' }],
                'pawnList[0].houseAcreage': [{ required: true, message: '房屋面积不能为空', trigger: 'blur' }, {
                    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }],
                'pawnList[0].houseType': [{ required: true, message: '房屋类型不能为空' }],
                'pawnList[0].houseNature': [{ required: true, message: '房屋性质不能为空' }],
                'pawnList[0].getTpye': [{ required: true, message: '房产获得方式不能为空' }],
                'pawnList[0].landSource': [{ required: true, message: '土地来源不能为空' }],
                'pawnList[0].landType': [{ required: true, message: '土地性质不能为空' }],
                'pawnList[0].ageOfCompletion': [{ required: true, message: '建成年代不能为空' }],
                'pawnList[0].propertyStatic': [{ required: true, message: '房产现状不能为空' }],
                'pawnList[1].certificateType': [{ required: true, message: '证件类型不能为空' }],
                'pawnList[1].certificateCode': [{ required: true, message: '证件编号不能为空', trigger: 'blur' }, {
                    pattern: /^[0-9A-Za-z]{18,20}$/,
                    message: '证件号格式错误',
                    trigger: 'blur'
                }],
                'pawnList[1].timeOfIssuing': [{ required: true, message: '发证日期不能为空' }],
                'pawnList[1].landCardCode': [{ required: true, message: '土地证编号不能为空', trigger: 'blur' }, {
                    pattern: /^[0-9A-Za-z]{18,20}$/,
                    message: '证件号格式错误',
                    trigger: 'blur'
                }],
                'pawnList[1].dateOfIssuing': [{ required: true, message: '发证日期不能为空' }],
                'pawnList[1].detailedAddress': [{ required: true, message: '具体地址不能为空', trigger: 'blur' }],
                'pawnList[1].communityName': [{ required: true, message: '小区名称不能为空', trigger: 'blur' }],
                'pawnList[1].buildingNumber': [{ required: true, message: '楼栋号不能为空', trigger: 'blur' }],
                'pawnList[1].totalFloor': [{ required: true, message: '总楼层不能为空', trigger: 'blur' }],
                'pawnList[1].onFloor': [{ required: true, message: '所在楼层不能为空', trigger: 'blur' }],
                'pawnList[1].roomNumber': [{ required: true, message: '房间号不能为空', trigger: 'blur' }],
                'pawnList[1].orientation': [{ required: true, message: '朝向不能为空' }],
                'pawnList[1].houseAcreage': [{ required: true, message: '房屋面积不能为空', trigger: 'blur' }, {
                    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
                    message: '数值格式错误',
                    trigger: 'blur'
                }],
                'pawnList[1].houseType': [{ required: true, message: '房屋类型不能为空' }],
                'pawnList[1].houseNature': [{ required: true, message: '房屋性质不能为空' }],
                'pawnList[1].getTpye': [{ required: true, message: '房产获得方式不能为空' }],
                'pawnList[1].landSource': [{ required: true, message: '土地来源不能为空' }],
                'pawnList[1].landType': [{ required: true, message: '土地性质不能为空' }],
                'pawnList[1].ageOfCompletion': [{ required: true, message: '建成年代不能为空' }],
                'pawnList[1].propertyStatic': [{ required: true, message: '房产现状不能为空' }],
                'hmProjectClob.internalAuditAdvice': [{ required: true, message: '内审建议不能为空', trigger: 'blur' }]
            },
            tabName: 'auditInformation',
            tabs: [{ id: 'auditInformation', text: '申请信息' }, { id: 'householdData', text: '下户资料' }, { id: 'borrowerInformation', text: '借款人信息' }, { id: 'mortgagesInformation', text: '抵押物信息' }, { id: 'projectInformation', text: '项目资料' }, { id: 'chargeInformation', text: '收费信息' }, { id: 'taskHistory', text: '任务历史' }, { id: 'supplementInformation', text: '补充资料' }, { id: 'internalAuditForm', text: '内审表' }],
            isSubmit: false,
            isCancel: false
        };
    },

    computed: {
        currentTabComponent: function currentTabComponent() {
            return this.tabName;
        }
    },
    components: {
        'auditInformation': __WEBPACK_IMPORTED_MODULE_0__views_tabs_auditInformation___default.a,
        'householdData': __WEBPACK_IMPORTED_MODULE_1__views_tabs_householdData___default.a,
        'borrowerInformation': __WEBPACK_IMPORTED_MODULE_2__views_tabs_borrowerInformation___default.a,
        'mortgagesInformation': __WEBPACK_IMPORTED_MODULE_3__views_tabs_mortgagesInformation___default.a,
        'projectInformation': __WEBPACK_IMPORTED_MODULE_4__views_tabs_projectInformation___default.a,
        'chargeInformation': __WEBPACK_IMPORTED_MODULE_5__views_tabs_chargeInformation___default.a,
        'taskHistory': __WEBPACK_IMPORTED_MODULE_6__views_tabs_taskHistory___default.a,
        'supplementInformation': __WEBPACK_IMPORTED_MODULE_7__views_tabs_supplementInformation___default.a,
        'internalAuditForm': __WEBPACK_IMPORTED_MODULE_8__views_tabs_internalAuditForm___default.a
    },
    methods: {
        loadClient: function loadClient(id) {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmClient/read/detail';
            this.$axios.request({ data: { id: id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.model.client = response.data;
                Object.assign(_this.dicts, response.dicts);
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        loadClob: function loadClob(id) {
            var _this2 = this;

            this.$axios.options.url = 'houseMortgage/hmProjectClob/read/detail';
            this.$axios.request({ data: { id: id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                _this2.model.hmProjectClob = response.data;
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        },
        loadMortgage: function loadMortgage(id) {
            var _this3 = this;

            this.$axios.options.url = 'houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({ data: { projectId: id, backupFlag: 0 } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.model.pawnList = response.data[0] ? response.data : [{}];
                Object.assign(_this3.dicts, response.dicts);
            }).catch(function (error) {
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },
        loadPlan: function loadPlan(id) {
            var _this4 = this;

            this.$axios.options.url = 'houseMortgage/hmProjPlan/read/queryByProjectId';
            this.$axios.request({ data: { projectId: id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this4.$Message.error(response.msg || _this4.$config.ERROR);
                    return;
                }
                _this4.model.hmProjPlan = response.data[0] || {};
            }).catch(function (error) {
                _this4.$Message.error(_this4.$config.ERROR);
            });
        },
        loadModel: function loadModel() {
            var _this5 = this;

            this.$axios.options.url = 'houseMortgage/hmProject/read/detail';
            this.$axios.request({ data: { id: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this5.$Message.error(response.msg || _this5.$config.ERROR);
                    return;
                }
                response.data.client = {};
                response.data.product_name = response.data.product_name || {};
                response.data.hmProjPlan = {};
                response.data.initLoanAmountText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__libs_util__["j" /* formatMoney */])(response.data.initLoanAmount);
                response.data.firstEvalueText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__libs_util__["j" /* formatMoney */])(response.data.firstEvalue);
                _this5.model = response.data;
                _this5.loadClient(response.data.clientId);
                _this5.loadClob(response.data.id);
                _this5.loadMortgage(response.data.id);
                _this5.loadPlan(response.data.id);
            }).catch(function (error) {
                _this5.$Message.error(_this5.$config.ERROR);
            });
        },
        cancel: function cancel() {
            var _this6 = this;

            this.isCancel = true;
            this.model.client.birthday = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(this.model.client.birthday);
            this.model.client.spouse.birthday = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(this.model.client.spouse.birthday);
            this.model.hmProjectCreditinvesBeanList[0].queryDate = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(this.model.hmProjectCreditinvesBeanList[0].queryDate);
            this.model.socialSearchDate = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(this.model.socialSearchDate);
            this.model.pawnList[0].timeOfIssuing = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(this.model.pawnList[0].timeOfIssuing);
            this.model.pawnList[0].dateOfIssuing = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(this.model.pawnList[0].dateOfIssuing);
            this.model.pawnList[0].ageOfCompletion = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(this.model.pawnList[0].ageOfCompletion);
            if (this.model.pawnList.length > 1) {
                this.model.pawnList[1].timeOfIssuing = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(this.model.pawnList[1].timeOfIssuing);
                this.model.pawnList[1].dateOfIssuing = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(this.model.pawnList[1].dateOfIssuing);
                this.model.pawnList[1].ageOfCompletion = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(this.model.pawnList[1].ageOfCompletion);
            }
            this.model.operation = 0;
            this.$axios.options.url = 'houseMortgage/hmProject/neishen2submit';
            this.$axios.request({ data: JSON.stringify(this.model) }, 'json').then(function (response) {
                _this6.isCancel = false;
                if (response.httpCode != 200) {
                    _this6.$Message.error(response.msg || _this6.$config.ERROR);
                    return;
                }
                _this6.$router.push('backlog');
            }).catch(function (error) {
                _this6.isCancel = false;
                _this6.$Message.error(_this6.$config.ERROR);
            });
        },
        submit: function submit() {
            var _this7 = this;

            this.$refs.instance.validate(function (valid) {
                if (valid) {
                    if (!_this7.model.client.clientName || !model.pawnList[0].certificateType || !model.hmProjectClob.clientDesc) {
                        _this7.$Message.error('提交信息不完整，请完相关信息。');
                        return;
                    }
                    _this7.isSubmit = true;
                    _this7.model.client.birthday = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(_this7.model.client.birthday);
                    _this7.model.client.spouse.birthday = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(_this7.model.client.spouse.birthday);
                    _this7.model.hmProjectCreditinvesBeanList[0].queryDate = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(_this7.model.hmProjectCreditinvesBeanList[0].queryDate);
                    _this7.model.socialSearchDate = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(_this7.model.socialSearchDate);
                    _this7.model.pawnList[0].timeOfIssuing = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(_this7.model.pawnList[0].timeOfIssuing);
                    _this7.model.pawnList[0].dateOfIssuing = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(_this7.model.pawnList[0].dateOfIssuing);
                    _this7.model.pawnList[0].ageOfCompletion = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(_this7.model.pawnList[0].ageOfCompletion);
                    if (_this7.model.pawnList.length > 1) {
                        _this7.model.pawnList[1].timeOfIssuing = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(_this7.model.pawnList[1].timeOfIssuing);
                        _this7.model.pawnList[1].dateOfIssuing = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(_this7.model.pawnList[1].dateOfIssuing);
                        _this7.model.pawnList[1].ageOfCompletion = __WEBPACK_IMPORTED_MODULE_9__libs_util__["b" /* timeUtil */].getCurrentDate(_this7.model.pawnList[1].ageOfCompletion);
                    }
                    _this7.model.operation = 1;
                    _this7.$axios.options.url = 'houseMortgage/hmProject/neishen2submit';
                    _this7.$axios.request({ data: JSON.stringify(_this7.model) }, 'json').then(function (response) {
                        _this7.isSubmit = false;
                        if (response.httpCode != 200) {
                            _this7.$Message.error(response.msg || _this7.$config.ERROR);
                            return;
                        }
                        _this7.$router.push({ name: 'backlog' });
                    }).catch(function (error) {
                        _this7.isSubmit = false;
                        _this7.$Message.error(_this7.$config.ERROR);
                    });
                }
            });
        }
    },
    created: function created() {
        this.loadModel();
    },
    mounted: function mounted() {
        this.$root.eventHub.$emit('breadcrumb');
    }
});

/***/ }),

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_photo__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_photo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_photo__);



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object
    },
    data: function data() {
        return {
            interview: {}
        };
    },

    components: {
        'photo': __WEBPACK_IMPORTED_MODULE_1__views_tabs_photo___default.a
    },
    methods: {
        loadInterview: function loadInterview() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjInterview/read/detail';
            this.$axios.request({ data: { id: this.model.interviewId } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                response.data.yearlyRental = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(response.data.yearlyRental);
                response.data.aroundYearlyRental = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(response.data.aroundYearlyRental);
                response.data.aroundSellingPrice = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(response.data.aroundSellingPrice);
                response.data.taxTotal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(response.data.taxTotal);
                _this.interview = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        }
    },
    created: function created() {
        this.loadInterview();
    }
});

/***/ }),

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object,
        dicts: Object
    },
    data: function data() {
        return {
            files: [],
            interview: {}
        };
    },

    methods: {
        loadFiles: function loadFiles() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                var fileList = response.data.filter(function (item) {
                    return item.projectFileGroup === '24';
                });
                _this.files = fileList[0] ? fileList[0].files : [];
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        loadInterview: function loadInterview() {
            var _this2 = this;

            this.$axios.options.url = 'houseMortgage/hmProjInterview/read/detail';
            this.$axios.request({ data: { id: this.model.interviewId } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                response.data.yearlyRental = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(response.data.yearlyRental);
                response.data.aroundYearlyRental = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(response.data.aroundYearlyRental);
                response.data.aroundSellingPrice = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(response.data.aroundSellingPrice);
                response.data.taxTotal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(response.data.taxTotal);
                _this2.interview = response.data;
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        },
        uploadSuccess: function uploadSuccess(response, file, fileList) {
            if (fileList.length > 1) fileList.shift();
            response.files[0].fileId = response.files[0].id;
            response.files[0].projectFileGroup = response.projectFileGroup;
            this.model.fileList.push(response.files[0]);
        },
        uploadError: function uploadError(error, file, fileList) {
            fileList.splice(fileList.indexOf(file), 1);
            this.$Message.error('上传失败');
        },
        preview: function preview(file) {
            window.open(file.response.files[0].path);
        },
        remove: function remove(file) {
            this.model.fileList.splice(this.model.fileList.indexOf(file.response.files[0]), 1);
        },
        formatError: function formatError(file) {
            this.$Message.error('文件(' + file.name + ')类型错误，请选择图片或PDF文件。');
        }
    },
    created: function created() {
        if (!this.model.fileList) this.model.fileList = [];
        this.loadFiles();
        this.loadInterview();
    }
});

/***/ }),

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_photo__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_photo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_photo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_area__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_util__ = __webpack_require__(203);




/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object,
        dicts: Object
    },
    data: function data() {
        return {
            local: [],
            area: __WEBPACK_IMPORTED_MODULE_1__libs_area__["a" /* default */],
            evaluationList: []
        };
    },

    components: {
        'photo': __WEBPACK_IMPORTED_MODULE_0__views_tabs_photo___default.a
    },
    methods: {
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjEvaluation/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id, evalPeriod: 0 } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                response.data.forEach(function (item) {
                    item.evalVal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__libs_util__["j" /* formatMoney */])(item.evalVal);
                });
                _this.evaluationList = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        add: function add() {
            this.model.pawnList.push({ backupFlag: 1, propertyHolder: this.model.pawnList[0].propertyHolder });
        },
        del: function del() {
            this.model.pawnList.pop();
        }
    },
    created: function created() {
        this.loadModel();
        this.local = [this.model.pawnList[0].province, this.model.pawnList[0].city, this.model.pawnList[0].area];
    }
});

/***/ }),

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: []
        };
    },

    methods: {
        loadFiles: function loadFiles() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.model = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        getFiles: function getFiles(flag) {
            var array = this.model.filter(function (item) {
                return item.projectFileGroup === flag;
            });
            return array[0] ? array[0].files : [];
        }
    },
    created: function created() {
        this.loadFiles();
    }
});

/***/ }),

/***/ 1062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object
    },
    data: function data() {
        return {
            defaults: {
                basic: [],
                associates: [],
                mortgages: [],
                other: []
            },
            uploads: {
                basic: [],
                associates: [],
                mortgages: [],
                other: []
            }
        };
    },

    methods: {
        getFiles: function getFiles(list, flag) {
            var array = list.filter(function (item) {
                return item.projectFileGroup === flag;
            });
            if (array[0]) this.model.fileList = this.model.fileList.concat(array[0].files);
            return array[0] ? array[0].files : [];
        },
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.defaults.basic = _this.getFiles(response.data, '10');
                _this.defaults.associates = _this.getFiles(response.data, '11');
                _this.defaults.mortgages = _this.getFiles(response.data, '12');
                _this.defaults.other = _this.getFiles(response.data, '13');
                setTimeout(function () {
                    _this.uploads.associates = _this.$refs.associates.fileList;
                    _this.uploads.basic = _this.$refs.basic.fileList;
                    _this.uploads.mortgages = _this.$refs.mortgages.fileList;
                    _this.uploads.other = _this.$refs.other.fileList;
                }, 1000);
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        uploadSuccess: function uploadSuccess(response, file) {
            response.files[0].fileId = response.files[0].id;
            response.files[0].projectFileGroup = response.projectFileGroup;
            this.model.fileList.push(response.files[0]);
        },
        uploadError: function uploadError(error, file, fileList) {
            fileList.splice(fileList.indexOf(file), 1);
            this.$Message.error('上传失败');
        },
        remove: function remove(name, file) {
            this.$refs[name].fileList.splice(this.$refs[name].fileList.indexOf(file), 1);
            this.model.fileList.splice(this.model.fileList.indexOf(file.response.files[0]), 1);
        },
        formatError: function formatError(file) {
            this.$Message.error('文件(' + file.name + ')类型错误，请选择图片或PDF文件。');
        }
    },
    created: function created() {
        if (!this.model.fileList) this.model.fileList = [];
    },
    mounted: function mounted() {
        this.loadModel();
    }
});

/***/ }),

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1044),
  /* template */
  __webpack_require__(1184),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/householdData.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] householdData.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eebff476", Component.options)
  } else {
    hotAPI.reload("data-v-eebff476", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1046),
  /* template */
  __webpack_require__(1102),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/internalAuditForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] internalAuditForm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-059347c4", Component.options)
  } else {
    hotAPI.reload("data-v-059347c4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1090:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1050),
  /* template */
  __webpack_require__(1142),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/mortgagesInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mortgagesInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58b8652e", Component.options)
  } else {
    hotAPI.reload("data-v-58b8652e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1062),
  /* template */
  __webpack_require__(1114),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/supplementInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] supplementInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24f62b4f", Component.options)
  } else {
    hotAPI.reload("data-v-24f62b4f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('FormItem', {
    attrs: {
      "label-width": 170
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n            评估报告\n        ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "1"
    }
  }, [(_vm.files.length > 0) ? [_vm._v("\n                    是\n                ")] : [_vm._v("\n                    否\n                ")]], 2), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "23"
    }
  }, [_c('Upload', {
    attrs: {
      "action": _vm.$config.uploadUrl,
      "data": {
        projectFileGroup: '24'
      },
      "on-preview": _vm.preview,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-remove": _vm.remove,
      "on-format-error": _vm.formatError
    }
  }, [_c('Button', {
    attrs: {
      "icon": "md-cloud-upload"
    }
  }, [_vm._v("\n                        上传预估单\n                    ")]), _vm._v(" "), _c('label', {
    staticClass: "grey-light-color pl10"
  }, [_vm._v("\n                        若无预估单请上传其他预估凭证\n                    ")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 170
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n            抵押物信息描述\n        ")]), _vm._v("\n        " + _vm._s(_vm.model.hmProjectClob.pawnFileRemark) + "\n    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 170
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                    下户人员\n                ")]), _vm._v("\n                " + _vm._s(_vm.interview.interviewer) + "\n            ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 170
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                    下户时间\n                ")]), _vm._v("\n                " + _vm._s(_vm.interview.interviewTime) + "\n            ")])], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 170,
      "prop": "hmProjectClob.clientDesc"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n            借款人及担保人信息描述\n        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "借款人及担保人信息描述 | 必填",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.hmProjectClob.clientDesc),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "clientDesc", $$v)
      },
      expression: "model.hmProjectClob.clientDesc"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 170,
      "prop": "hmProjectClob.managementDesc"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n            经营情况描述\n        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "经营情况描述 | 必填",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.hmProjectClob.managementDesc),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "managementDesc", $$v)
      },
      expression: "model.hmProjectClob.managementDesc"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 170,
      "prop": "hmProjectClob.internalAuditAdvice"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n            内审建议\n        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "下户建议",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.hmProjectClob.internalAuditAdvice),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "internalAuditAdvice", $$v)
      },
      expression: "model.hmProjectClob.internalAuditAdvice"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-059347c4", module.exports)
  }
}

/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "basic"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "basic",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                借款人基本资料\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._l((_vm.uploads.basic), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16 text-center"
    }, [(item.status === 'finished') ? [_c('Tooltip', {
      staticStyle: {
        "position": "absolute",
        "margin": "96px 0 0 36px"
      },
      attrs: {
        "placement": "left-end",
        "content": "删除"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-close-circle",
        "size": "24",
        "color": "#ed4014"
      },
      on: {
        "click": function($event) {
          _vm.remove('basic', item)
        }
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })] : [(item.showProgress) ? _c('Progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()]], 2)
  }), _vm._v(" "), _c('Upload', {
    ref: "basic",
    staticClass: "inline-block",
    attrs: {
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "default-file-list": _vm.defaults.basic,
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-format-error": _vm.formatError,
      "data": {
        projectFileGroup: '10'
      },
      "type": "drag",
      "multiple": "",
      "action": _vm.$config.uploadUrl
    }
  }, [_c('div', {
    staticClass: "upload"
  }, [_c('div', {
    staticClass: "child mask text-center"
  }, [_c('Icon', {
    attrs: {
      "type": "md-cloud-upload",
      "color": "#0071b9",
      "size": "40"
    }
  }), _vm._v(" "), _c('p', [_vm._v("上传文件")])], 1)])]), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 40
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("备注")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "maxlength": 500,
      "placeholder": "备注"
    },
    model: {
      value: (_vm.model.hmProjectClob.clientReplenishRemark),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "clientReplenishRemark", $$v)
      },
      expression: "model.hmProjectClob.clientReplenishRemark"
    }
  })], 1)], 2)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "associates"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "associates",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                其他关联人信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._l((_vm.uploads.associates), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16 text-center"
    }, [(item.status === 'finished') ? [_c('Tooltip', {
      staticStyle: {
        "position": "absolute",
        "margin": "96px 0 0 36px"
      },
      attrs: {
        "placement": "left-end",
        "content": "删除"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-close-circle",
        "size": "24",
        "color": "#ed4014"
      },
      on: {
        "click": function($event) {
          _vm.remove('associates', item)
        }
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })] : [_c('div', {
      staticStyle: {
        "line-height": "120px",
        "width": "100%"
      }
    }, [(item.showProgress) ? _c('Progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()], 1)]], 2)
  }), _vm._v(" "), _c('Upload', {
    ref: "associates",
    staticClass: "inline-block",
    attrs: {
      "show-upload-list": false,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "default-file-list": _vm.defaults.associates,
      "data": {
        projectFileGroup: '11'
      },
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-format-error": _vm.formatError,
      "type": "drag",
      "multiple": "",
      "action": _vm.$config.uploadUrl
    }
  }, [_c('div', {
    staticClass: "upload"
  }, [_c('div', {
    staticClass: "child mask text-center"
  }, [_c('Icon', {
    attrs: {
      "type": "md-cloud-upload",
      "color": "#0071b9",
      "size": "40"
    }
  }), _vm._v(" "), _c('p', [_vm._v("上传文件")])], 1)])]), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 40
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("备注")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "maxlength": 500,
      "placeholder": "备注"
    },
    model: {
      value: (_vm.model.hmProjectClob.warrantorReplenishRemark),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "warrantorReplenishRemark", $$v)
      },
      expression: "model.hmProjectClob.warrantorReplenishRemark"
    }
  })], 1)], 2)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "mortgages"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "mortgages",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                抵押物信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._l((_vm.uploads.mortgages), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16 text-center"
    }, [(item.status === 'finished') ? [_c('Tooltip', {
      staticStyle: {
        "position": "absolute",
        "margin": "96px 0 0 36px"
      },
      attrs: {
        "placement": "left-end",
        "content": "删除"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-close-circle",
        "size": "24",
        "color": "#ed4014"
      },
      on: {
        "click": function($event) {
          _vm.remove('mortgages', item)
        }
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })] : [(item.showProgress) ? _c('Progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()]], 2)
  }), _vm._v(" "), _c('Upload', {
    ref: "mortgages",
    staticClass: "inline-block",
    attrs: {
      "show-upload-list": false,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "default-file-list": _vm.defaults.mortgages,
      "data": {
        projectFileGroup: '12'
      },
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-format-error": _vm.formatError,
      "type": "drag",
      "multiple": "",
      "action": _vm.$config.uploadUrl
    }
  }, [_c('div', {
    staticClass: "upload"
  }, [_c('div', {
    staticClass: "child mask text-center"
  }, [_c('Icon', {
    attrs: {
      "type": "md-cloud-upload",
      "color": "#0071b9",
      "size": "40"
    }
  }), _vm._v(" "), _c('p', [_vm._v("上传文件")])], 1)])]), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 40
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("备注")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "maxlength": 500,
      "placeholder": "备注"
    },
    model: {
      value: (_vm.model.hmProjectClob.pawnReplenishRemark),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "pawnReplenishRemark", $$v)
      },
      expression: "model.hmProjectClob.pawnReplenishRemark"
    }
  })], 1)], 2)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "other"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "other",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                其他\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._l((_vm.uploads.other), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16 text-center"
    }, [(item.status === 'finished') ? [_c('Tooltip', {
      staticStyle: {
        "position": "absolute",
        "margin": "96px 0 0 36px"
      },
      attrs: {
        "placement": "left-end",
        "content": "删除"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-close-circle",
        "size": "24",
        "color": "#ed4014"
      },
      on: {
        "click": function($event) {
          _vm.remove('other', item)
        }
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })] : [(item.showProgress) ? _c('Progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()]], 2)
  }), _vm._v(" "), _c('Upload', {
    ref: "other",
    staticClass: "inline-block",
    attrs: {
      "show-upload-list": false,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "default-file-list": _vm.defaults.other,
      "data": {
        projectFileGroup: '13'
      },
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-format-error": _vm.formatError,
      "type": "drag",
      "multiple": "",
      "action": _vm.$config.uploadUrl
    }
  }, [_c('div', {
    staticClass: "upload"
  }, [_c('div', {
    staticClass: "child mask text-center"
  }, [_c('Icon', {
    attrs: {
      "type": "md-cloud-upload",
      "color": "#0071b9",
      "size": "40"
    }
  }), _vm._v(" "), _c('p', [_vm._v("上传文件")])], 1)])]), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 40
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("备注")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "maxlength": 500,
      "placeholder": "备注"
    },
    model: {
      value: (_vm.model.hmProjectClob.otherReplenishRemark),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "otherReplenishRemark", $$v)
      },
      expression: "model.hmProjectClob.otherReplenishRemark"
    }
  })], 1)], 2)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-24f62b4f", module.exports)
  }
}

/***/ }),

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "house"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "house",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                房产基本信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                房产编号\n                            ")]), _vm._v("\n                            " + _vm._s(_vm.model.pawnList[0].id) + "\n                        ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                产权人\n                            ")]), _vm._v("\n                            " + _vm._s(_vm.model.pawnList[0].propertyHolder) + "\n                        ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                共有类型\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择共有类型"
    },
    model: {
      value: (_vm.model.pawnList[0].commonType),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "commonType", $$v)
      },
      expression: "model.pawnList[0].commonType"
    }
  }, _vm._l((_vm.dicts.COMMONTYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].certificateType"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                证件类型\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择证件类型 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].certificateType),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "certificateType", $$v)
      },
      expression: "model.pawnList[0].certificateType"
    }
  }, _vm._l((_vm.dicts.CERTIFICATETYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].certificateCode"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                证件编号\n                            ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "证件编号 | 必填",
      "maxlength": 20
    },
    model: {
      value: (_vm.model.pawnList[0].certificateCode),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "certificateCode", $$v)
      },
      expression: "model.pawnList[0].certificateCode"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].timeOfIssuing"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                发证日期\n                            ")]), _vm._v(" "), _c('DatePicker', {
    attrs: {
      "type": "date",
      "placeholder": "选择发证日期 | 必填",
      "clearable": ""
    },
    model: {
      value: (_vm.model.pawnList[0].timeOfIssuing),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "timeOfIssuing", $$v)
      },
      expression: "model.pawnList[0].timeOfIssuing"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].landCardCode"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                土地证编号\n                            ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "土地证编号 | 必填",
      "maxlength": 20
    },
    model: {
      value: (_vm.model.pawnList[0].landCardCode),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "landCardCode", $$v)
      },
      expression: "model.pawnList[0].landCardCode"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].dateOfIssuing"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                发证日期\n                            ")]), _vm._v(" "), _c('DatePicker', {
    attrs: {
      "type": "date",
      "placeholder": "选择发证日期 | 必填",
      "clearable": ""
    },
    model: {
      value: (_vm.model.pawnList[0].dateOfIssuing),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "dateOfIssuing", $$v)
      },
      expression: "model.pawnList[0].dateOfIssuing"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].detailedAddress"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                地址\n                            ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Cascader', {
    attrs: {
      "clearable": "",
      "data": _vm.area,
      "placeholder": "选择省/市/区县"
    },
    model: {
      value: (_vm.local),
      callback: function($$v) {
        _vm.local = $$v
      },
      expression: "local"
    }
  })], 1), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "16"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 100,
      "clearable": "",
      "placeholder": "具体地址（到门牌号）"
    },
    model: {
      value: (_vm.model.pawnList[0].detailedAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "detailedAddress", $$v)
      },
      expression: "model.pawnList[0].detailedAddress"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].communityName"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                小区名称\n                            ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 50,
      "clearable": "",
      "placeholder": "小区名称 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].communityName),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "communityName", $$v)
      },
      expression: "model.pawnList[0].communityName"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].buildingNumber"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                楼栋号\n                            ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 50,
      "clearable": "",
      "placeholder": "楼栋号 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].buildingNumber),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "buildingNumber", $$v)
      },
      expression: "model.pawnList[0].buildingNumber"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].totalFloor"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                总楼层\n                            ")]), _vm._v(" "), _c('InputNumber', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "min": 0,
      "precision": 0,
      "clearable": "",
      "placeholder": "总楼层 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].totalFloor),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "totalFloor", $$v)
      },
      expression: "model.pawnList[0].totalFloor"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].onFloor"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                所在楼层\n                            ")]), _vm._v(" "), _c('InputNumber', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "min": 0,
      "precision": 0,
      "clearable": "",
      "placeholder": "所在楼层 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].onFloor),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "onFloor", $$v)
      },
      expression: "model.pawnList[0].onFloor"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].roomNumber"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                房间号\n                            ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 50,
      "clearable": "",
      "placeholder": "房间号 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].roomNumber),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "roomNumber", $$v)
      },
      expression: "model.pawnList[0].roomNumber"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].orientation"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                朝向\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择朝向 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].orientation),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "orientation", $$v)
      },
      expression: "model.pawnList[0].orientation"
    }
  }, _vm._l((_vm.dicts.ORIENTATION), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                户型\n                            ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('InputNumber', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "min": 10,
      "precision": 0,
      "clearable": "",
      "placeholder": "室"
    },
    model: {
      value: (_vm.model.pawnList[0].room),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "room", $$v)
      },
      expression: "model.pawnList[0].room"
    }
  })], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('InputNumber', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "min": 10,
      "precision": 0,
      "clearable": "",
      "placeholder": "厅"
    },
    model: {
      value: (_vm.model.pawnList[0].hall),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "hall", $$v)
      },
      expression: "model.pawnList[0].hall"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].houseAcreage"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                房屋面积\n                            ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 10,
      "clearable": "",
      "placeholder": "房屋面积 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].houseAcreage),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "houseAcreage", $$v)
      },
      expression: "model.pawnList[0].houseAcreage"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("平米")])])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].houseType"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                房屋类型\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择房屋类型 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].houseType),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "houseType", $$v)
      },
      expression: "model.pawnList[0].houseType"
    }
  }, _vm._l((_vm.dicts.HOUSETYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].houseNature"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                房屋性质\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择房屋性质 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].houseNature),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "houseNature", $$v)
      },
      expression: "model.pawnList[0].houseNature"
    }
  }, _vm._l((_vm.dicts.HOUSENATURE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].getTpye"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                房产获得方式\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择房产获得方式 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].getTpye),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "getTpye", $$v)
      },
      expression: "model.pawnList[0].getTpye"
    }
  }, _vm._l((_vm.dicts.GETTPYE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].landSource"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                土地来源\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择土地来源 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].landSource),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "landSource", $$v)
      },
      expression: "model.pawnList[0].landSource"
    }
  }, _vm._l((_vm.dicts.LANDSOURCE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].landType"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                土地性质\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择土地性质 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].landType),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "landType", $$v)
      },
      expression: "model.pawnList[0].landType"
    }
  }, _vm._l((_vm.dicts.LANDTYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].ageOfCompletion"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                建成年代\n                            ")]), _vm._v(" "), _c('DatePicker', {
    attrs: {
      "type": "year",
      "placeholder": "选择建成年代 | 必填",
      "clearable": ""
    },
    model: {
      value: (_vm.model.pawnList[0].ageOfCompletion),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "ageOfCompletion", $$v)
      },
      expression: "model.pawnList[0].ageOfCompletion"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[0].propertyStatic"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                房产现状\n                            ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择房产现状 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[0].propertyStatic),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[0], "propertyStatic", $$v)
      },
      expression: "model.pawnList[0].propertyStatic"
    }
  }, _vm._l((_vm.dicts.PROPERTYSTATIC), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                    " + _vm._s(item.text) + "\n                                ")])
  }))], 1)], 1)], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('photo'), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "cost"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "cost",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                价值评估\n            ")]), _vm._v(" "), _c('Card', {
    attrs: {
      "slot": "content",
      "dis-hover": ""
    },
    slot: "content"
  }, [_c('label', {
    staticClass: "font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    初评信息\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "font12"
  }, [_vm._l((_vm.evaluationList.filter(function (value) {
    return value.evalType === '2'
  })), function(item) {
    return _c('Row', {
      key: item.id,
      staticClass: "mb16"
    }, [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n                            " + _vm._s(item.agencyText + '估价') + "\n                        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n                            " + _vm._s(item.evalVal + '元') + "\n                        ")]), _vm._v(" "), (item.reportFile) ? _c('Col', {
      attrs: {
        "span": "2"
      }
    }, [_c('a', {
      attrs: {
        "href": item.reportFilePath,
        "target": "_blank"
      }
    }, [_vm._v("\n                                评估报告\n                            ")])]) : _vm._e(), _vm._v(" "), (item.preEvalFile) ? _c('Col', {
      attrs: {
        "span": "2"
      }
    }, [_c('a', {
      attrs: {
        "href": item.preEvalFilePath,
        "target": "_blank"
      }
    }, [_vm._v("\n                                预估单\n                            ")])]) : _vm._e()], 1)
  }), _vm._v(" "), _vm._l((_vm.evaluationList.filter(function (value) {
    return value.evalType === '0'
  })), function(item) {
    return _c('Row', {
      key: item.id,
      staticClass: "mb16"
    }, [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n                            " + _vm._s(item.agencyText + '估价') + "\n                        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n                            " + _vm._s(item.evalVal + '元') + "\n                        ")]), _vm._v(" "), (item.url) ? _c('Col', {
      attrs: {
        "span": "4"
      }
    }, [_c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_vm._v("\n                                查看\n                            ")])]) : _vm._e()], 1)
  }), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                            初评结论\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.firstEvalueText + '元') + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                            初评意见\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "20"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.hmProjectClob.firstEvalDesc) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                            初评人\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.firstEvalUser) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "4"
    }
  }, [_vm._v("\n                            初评提交时间\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.firstEvalDate) + "\n                        ")])], 1)], 2)])], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "spare"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "spare",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                备用资产信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('div', {
    staticClass: "text-right"
  }, [_c('Button', {
    attrs: {
      "size": "small",
      "disabled": _vm.model.pawnList.length > 1,
      "icon": "md-add",
      "type": "primary"
    },
    on: {
      "click": _vm.add
    }
  }, [_vm._v("\n                        添加\n                    ")])], 1), _vm._v(" "), (_vm.model.pawnList.length > 1) ? _c('div', [_c('Divider'), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    产权人\n                                ")]), _vm._v("\n                                " + _vm._s(_vm.model.pawnList[1].propertyHolder) + "\n                            ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    共有类型\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择共有类型"
    },
    model: {
      value: (_vm.model.pawnList[1].commonType),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "commonType", $$v)
      },
      expression: "model.pawnList[1].commonType"
    }
  }, _vm._l((_vm.dicts.COMMONTYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].certificateType"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    证件类型\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择证件类型 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].certificateType),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "certificateType", $$v)
      },
      expression: "model.pawnList[1].certificateType"
    }
  }, _vm._l((_vm.dicts.CERTIFICATETYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].certificateCode"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    证件编号\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "证件编号 | 必填",
      "maxlength": 20
    },
    model: {
      value: (_vm.model.pawnList[1].certificateCode),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "certificateCode", $$v)
      },
      expression: "model.pawnList[1].certificateCode"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].timeOfIssuing"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    发证日期\n                                ")]), _vm._v(" "), _c('DatePicker', {
    attrs: {
      "type": "date",
      "placeholder": "选择发证日期 | 必填",
      "clearable": ""
    },
    model: {
      value: (_vm.model.pawnList[1].timeOfIssuing),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "timeOfIssuing", $$v)
      },
      expression: "model.pawnList[1].timeOfIssuing"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].landCardCode"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    土地证编号\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "土地证编号 | 必填",
      "maxlength": 20
    },
    model: {
      value: (_vm.model.pawnList[1].landCardCode),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "landCardCode", $$v)
      },
      expression: "model.pawnList[1].landCardCode"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].dateOfIssuing"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    发证日期\n                                ")]), _vm._v(" "), _c('DatePicker', {
    attrs: {
      "type": "date",
      "placeholder": "选择发证日期 | 必填",
      "clearable": ""
    },
    model: {
      value: (_vm.model.pawnList[1].dateOfIssuing),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "dateOfIssuing", $$v)
      },
      expression: "model.pawnList[1].dateOfIssuing"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].detailedAddress"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    地址\n                                ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Cascader', {
    attrs: {
      "clearable": "",
      "data": _vm.area,
      "placeholder": "选择省/市/区县"
    },
    model: {
      value: (_vm.local),
      callback: function($$v) {
        _vm.local = $$v
      },
      expression: "local"
    }
  })], 1), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "16"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 100,
      "clearable": "",
      "placeholder": "具体地址（到门牌号）"
    },
    model: {
      value: (_vm.model.pawnList[1].detailedAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "detailedAddress", $$v)
      },
      expression: "model.pawnList[1].detailedAddress"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].communityName"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    小区名称\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 50,
      "clearable": "",
      "placeholder": "小区名称 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].communityName),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "communityName", $$v)
      },
      expression: "model.pawnList[1].communityName"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].buildingNumber"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    楼栋号\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 50,
      "clearable": "",
      "placeholder": "楼栋号 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].buildingNumber),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "buildingNumber", $$v)
      },
      expression: "model.pawnList[1].buildingNumber"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].totalFloor"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    总楼层\n                                ")]), _vm._v(" "), _c('InputNumber', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "min": 0,
      "precision": 0,
      "clearable": "",
      "placeholder": "总楼层 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].totalFloor),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "totalFloor", $$v)
      },
      expression: "model.pawnList[1].totalFloor"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].onFloor"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    所在楼层\n                                ")]), _vm._v(" "), _c('InputNumber', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "min": 0,
      "precision": 0,
      "clearable": "",
      "placeholder": "所在楼层 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].onFloor),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "onFloor", $$v)
      },
      expression: "model.pawnList[1].onFloor"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].roomNumber"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    房间号\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 50,
      "clearable": "",
      "placeholder": "房间号 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].roomNumber),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "roomNumber", $$v)
      },
      expression: "model.pawnList[1].roomNumber"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].orientation"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    朝向\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择朝向 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].orientation),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "orientation", $$v)
      },
      expression: "model.pawnList[1].orientation"
    }
  }, _vm._l((_vm.dicts.ORIENTATION), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    户型\n                                ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('InputNumber', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "min": 10,
      "precision": 0,
      "clearable": "",
      "placeholder": "室"
    },
    model: {
      value: (_vm.model.pawnList[1].room),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "room", $$v)
      },
      expression: "model.pawnList[1].room"
    }
  })], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('InputNumber', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "min": 10,
      "precision": 0,
      "clearable": "",
      "placeholder": "厅"
    },
    model: {
      value: (_vm.model.pawnList[1].hall),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "hall", $$v)
      },
      expression: "model.pawnList[1].hall"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].houseAcreage"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    房屋面积\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 10,
      "clearable": "",
      "placeholder": "房屋面积 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].houseAcreage),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "houseAcreage", $$v)
      },
      expression: "model.pawnList[1].houseAcreage"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("平米")])])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].houseType"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    房屋类型\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择房屋类型 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].houseType),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "houseType", $$v)
      },
      expression: "model.pawnList[1].houseType"
    }
  }, _vm._l((_vm.dicts.HOUSETYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].houseNature"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    房屋性质\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择房屋性质 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].houseNature),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "houseNature", $$v)
      },
      expression: "model.pawnList[1].houseNature"
    }
  }, _vm._l((_vm.dicts.HOUSENATURE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].getTpye"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    房产获得方式\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择房产获得方式 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].getTpye),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "getTpye", $$v)
      },
      expression: "model.pawnList[1].getTpye"
    }
  }, _vm._l((_vm.dicts.GETTPYE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].landSource"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    土地来源\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择土地来源 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].landSource),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "landSource", $$v)
      },
      expression: "model.pawnList[1].landSource"
    }
  }, _vm._l((_vm.dicts.LANDSOURCE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].landType"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    土地性质\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择土地性质 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].landType),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "landType", $$v)
      },
      expression: "model.pawnList[1].landType"
    }
  }, _vm._l((_vm.dicts.LANDTYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].ageOfCompletion"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    建成年代\n                                ")]), _vm._v(" "), _c('DatePicker', {
    attrs: {
      "type": "year",
      "placeholder": "选择建成年代 | 必填",
      "clearable": ""
    },
    model: {
      value: (_vm.model.pawnList[1].ageOfCompletion),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "ageOfCompletion", $$v)
      },
      expression: "model.pawnList[1].ageOfCompletion"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "pawnList[1].propertyStatic"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    房产现状\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择房产现状 | 必填"
    },
    model: {
      value: (_vm.model.pawnList[1].propertyStatic),
      callback: function($$v) {
        _vm.$set(_vm.model.pawnList[1], "propertyStatic", $$v)
      },
      expression: "model.pawnList[1].propertyStatic"
    }
  }, _vm._l((_vm.dicts.PROPERTYSTATIC), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('Tooltip', {
    attrs: {
      "content": "删除",
      "placement": "top"
    }
  }, [_c('a', {
    on: {
      "click": _vm.del
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-close",
      "size": 20,
      "color": "#ed4014"
    }
  })], 1)])], 1)], 1)], 1)], 1) : _vm._e()])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-58b8652e", module.exports)
  }
}

/***/ }),

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "photo"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "photo",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n            现场照片\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    小区正门\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('15')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    小区内景\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('16')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    建筑外观\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('17')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    进入楼门\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('18')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    开门进屋\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('19')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    室内照片\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('20')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    客户合影\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('21')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    客厅自拍\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('22')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    中介头像合影\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('23')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-c13d5964", module.exports)
  }
}

/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Tabs', {
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
  }), _vm._v(" "), _c('ButtonGroup', {
    attrs: {
      "slot": "extra"
    },
    slot: "extra"
  }, [_c('Button', {
    on: {
      "click": function($event) {
        _vm.$root.eventHub.$emit('back', {
          name: 'backlog',
          params: _vm.$router.currentRoute.params
        })
      }
    }
  }, [_vm._v("\n                返回\n            ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "disabled": _vm.isSubmit,
      "loading": _vm.isCancel,
      "type": "warning"
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("\n                退回\n            ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "disabled": _vm.isCancel,
      "loading": _vm.isSubmit,
      "type": "primary"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n                提交\n            ")])], 1)], 2), _vm._v(" "), _c('Form', {
    ref: "instance",
    attrs: {
      "model": _vm.model,
      "rules": _vm.rules,
      "label-width": 100
    }
  }, [_c('keep-alive', [_c(_vm.currentTabComponent, {
    tag: "component",
    attrs: {
      "model": _vm.model,
      "dicts": _vm.dicts,
      "step": 2
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-ce1e7c7e", module.exports)
  }
}

/***/ }),

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n            下户人\n        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.interview.interviewer) + "\n        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n            其他人员\n        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.interview.otherInterviewer) + "\n        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "2"
    }
  }, [_vm._v("\n            下户时间\n        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.interview.interviewTime) + "\n        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "house"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "house",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                房产信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        内部结构\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.structureType) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        朝向\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.orientation) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        户型结构\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        原始户型\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.primitiveType) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        几梯几户\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.ladderHouseholds) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        装修情况\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.decorateFlag) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        有遮盖\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.coverFlagText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        采光\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.lightFlag) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        双拼房\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.doubleHouseText) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        有异形\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.abnormityFlagText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        异形部位\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.abnormityPlace) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        有打通\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.knockFlagText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        打通部位\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.knockType) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        有赠送\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.giveText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        赠送部位\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.giveParts) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        赠送面积\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.giveArea + '平米') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        有花园\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.gardenText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        花园面积\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.gardenArea + '平米') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        有露台\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.terraceText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        露台面积\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.terraceArea + '平米') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        景观房\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.viewRoomText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        对应景观\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.landscape) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        是否海砂房、辐射屋、危楼等不易处置的抵押物\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "18"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.unsuitableDisposalText) + "\n                    ")])], 1), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        有垃圾站\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.garbageStationText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        有变电站\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.substationText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        临街\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.streetFlagText) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        有违章建筑\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.illegalFlagText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        违建位置\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.illegalPlace) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        有标志性建筑\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.landmarkFlagText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        标志性建筑\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.landmarkBuilding) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        公交线路/公交站\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.busStation) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        距离公交车站距离\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.busDistance + '米') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        地铁站\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.metroStation) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        距离地铁站距离\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.metroDistance + '米') + "\n                    ")])], 1), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        学区房\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.schoolHouseText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        重点学区\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.school) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        有车位\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.parkingText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        车位面积\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.parkingArea + '平米') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        置空率\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.vacancyRate) + "\n                    ")])], 1), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        商铺面宽\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.shopBreadth) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        年租金\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.yearlyRental + '元') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        周边年租金\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.aroundYearlyRental + '元') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        周边售价\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.aroundSellingPrice + '元') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        品牌商家\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.brandBusiness) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        所属商圈\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.businessCircle) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        税费类型\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.taxType) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        税费合计数\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.taxTotal + '元') + "\n                    ")])], 1), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        借款人向居住人介绍调查员身份\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "18"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.introInterviewer) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        借款人向居住人介绍上门的目的\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "18"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.goalInterviewer) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        借款人在现场如何做居住人的思想工作\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "18"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.loanerIntro) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        居住者签署资料的配合度及其他情况\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "18"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.cooperate) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        家中有80以上老人居住\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "18"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.oldPeopleText) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        有病人、残疾人等居住\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "18"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.disabledText) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        发现黄赌毒等迹象\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "18"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.illegalityText) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        特殊备注\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "18"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.specialNotes) + "\n                    ")])], 1), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "6"
    }
  }, [_vm._v("\n                        现场拍照时发现的异常(如有)\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "18"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.interview.photoException) + "\n                    ")])], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('photo')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-eebff476", module.exports)
  }
}

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1012),
  /* template */
  __webpack_require__(1179),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/internalAudit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] internalAudit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ce1e7c7e", Component.options)
  } else {
    hotAPI.reload("data-v-ce1e7c7e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            evaluationList: []
        };
    },

    props: {
        model: Object,
        step: Number
    },
    methods: {
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjEvaluation/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$router.currentRoute.params.id,
                    evalPeriod: 0
                }
            }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                response.data.forEach(function (item) {
                    item.evalVal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(item.evalVal);
                });
                _this.evaluationList = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        }
    },
    created: function created() {
        this.loadModel();
    }
});

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_evaluation__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_evaluation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_evaluation__);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            mortgage: {}
        };
    },

    props: {
        model: Object,
        step: Number
    },
    components: {
        'evaluation': __WEBPACK_IMPORTED_MODULE_0__views_tabs_evaluation___default.a
    },
    methods: {
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$router.currentRoute.params.id,
                    backupFlag: 0
                }
            }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.mortgage = response.data[0] || {};
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        }
    },
    created: function created() {
        this.loadModel();
    }
});

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(917),
  /* template */
  __webpack_require__(921),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/evaluation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] evaluation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-505d82d0", Component.options)
  } else {
    hotAPI.reload("data-v-505d82d0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(918),
  /* template */
  __webpack_require__(922),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/mortgageInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mortgageInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bbdf83e8", Component.options)
  } else {
    hotAPI.reload("data-v-bbdf83e8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.evaluationList.filter(function (value) {
    return value.evalType === '2'
  })), function(item) {
    return (_vm.step > 0) ? _c('Row', {
      key: item.id,
      staticClass: "mb16"
    }, [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "3"
      }
    }, [_vm._v("\n            机构评估\n        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "5"
      }
    }, [_vm._v("\n            " + _vm._s(item.agencyText) + "\n        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_vm._v("\n            " + _vm._s(item.evalVal + '元') + "\n        ")]), _vm._v(" "), (item.preEvalFile) ? _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_c('a', {
      attrs: {
        "href": item.preEvalFilePath,
        "target": "_blank"
      }
    }, [_vm._v("\n                预估单\n            ")])]) : _vm._e()], 1) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.evaluationList.filter(function (value) {
    return value.evalType === '0'
  })), function(item) {
    return (_vm.step > 1) ? _c('Row', {
      key: item.id,
      staticClass: "mb16"
    }, [_c('Col', {
      staticClass: "text-right grey-light-color",
      attrs: {
        "span": "3"
      }
    }, [_vm._v("\n            中介评估\n        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "5"
      }
    }, [_vm._v("\n            " + _vm._s(item.agencyText) + "\n        ")]), _vm._v(" "), _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_vm._v("\n            " + _vm._s(item.evalVal + '元') + "\n        ")]), _vm._v(" "), (item.url) ? _c('Col', {
      staticClass: "pl10",
      attrs: {
        "span": "8"
      }
    }, [_c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_vm._v("\n                查看\n            ")])]) : _vm._e()], 1) : _vm._e()
  }), _vm._v(" "), (_vm.step > 0) ? _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n            初评价值\n        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.model.firstEvalueText + '元') + "\n        ")])], 1) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-505d82d0", module.exports)
  }
}

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "mortgages"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "mortgages",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n            抵押物信息\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    竣工日期\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.completionDate) + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    建成日期\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.dateCompletion) + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    测绘日期\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.mappingDate) + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    土地取得日期\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.landGetDate) + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    建筑面积\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.buidingAcreage + '平米') + "\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    房屋类型\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.houseTypeText) + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                    地址\n                ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.mortgage.province + _vm.mortgage.city + _vm.mortgage.area + _vm.mortgage.detailedAddress) + "\n                ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('evaluation', {
    attrs: {
      "model": _vm.model,
      "step": _vm.step
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-bbdf83e8", module.exports)
  }
}

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: []
        };
    },

    methods: {
        loadFiles: function loadFiles() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.model = response.data;
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        getFiles: function getFiles(flag) {
            var array = this.model.filter(function (item) {
                return item.projectFileGroup === flag;
            });
            return array[0] ? array[0].files : [];
        }
    },
    created: function created() {
        this.loadFiles();
    }
});

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            history: []
        };
    },

    methods: {
        detail: function detail() {},
        loadHistory: function loadHistory() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmHisTask/read/list';
            this.$axios.request().then(function (response) {
                if (response.httpCode != 200) {
                    _this.history = [];
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                //this.history=response.data;
                _this.history = [{
                    id: '1',
                    createTime: '2018-11-04 12:40:15',
                    nodeName: '决议审批',
                    submitUserName: '李四',
                    result: '',
                    otherDesc: 'test'
                }];
            }).catch(function (error) {
                _this.history = [];
                _this.$Message.error(_this.$config.ERROR);
            });
        }
    },
    created: function created() {
        this.loadHistory();
    }
});

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(936),
  /* template */
  __webpack_require__(946),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/files.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] files.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6f9b5da", Component.options)
  } else {
    hotAPI.reload("data-v-f6f9b5da", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(938),
  /* template */
  __webpack_require__(945),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/taskHistory.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] taskHistory.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ce54fa2a", Component.options)
  } else {
    hotAPI.reload("data-v-ce54fa2a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pl10"
  }, [_c('Timeline', _vm._l((_vm.history), function(item) {
    return _c('TimelineItem', {
      key: item.id
    }, [_c('strong', [_vm._v(_vm._s(item.createTime))]), _vm._v(" "), _c('Card', {
      staticStyle: {
        "width": "50%"
      },
      attrs: {
        "dis-hover": ""
      }
    }, [_c('label', {
      staticClass: "font12",
      attrs: {
        "slot": "title"
      },
      slot: "title"
    }, [_vm._v("\n                    " + _vm._s(item.nodeName + '      提交人: ' + item.submitUserName) + "\n                ")]), _vm._v(" "), _c('a', {
      staticClass: "font12",
      attrs: {
        "slot": "extra"
      },
      on: {
        "click": _vm.detail
      },
      slot: "extra"
    }, [_vm._v("\n                    详情\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "font12"
    }, [(item.result) ? _c('Row', [_c('Col', {
      attrs: {
        "span": "2"
      }
    }, [_vm._v("\n                            结论\n                        ")]), _vm._v(" "), _c('Col', {
      attrs: {
        "span": "22"
      }
    }, [_c('div', {
      staticClass: "note"
    }, [_vm._v("\n                                " + _vm._s(item.result) + "\n                            ")])])], 1) : _vm._e(), _vm._v(" "), (item.result) ? _c('br') : _vm._e(), _vm._v(" "), (item.otherDesc) ? _c('Row', [_c('Col', {
      attrs: {
        "span": "2"
      }
    }, [_vm._v("\n                            意见\n                        ")]), _vm._v(" "), _c('Col', {
      attrs: {
        "span": "22"
      }
    }, [_vm._v("\n                            " + _vm._s(item.otherDesc) + "\n                        ")])], 1) : _vm._e()], 1)])], 1)
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-ce54fa2a", module.exports)
  }
}

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Collapse', {
    attrs: {
      "value": "attachment"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "attachment",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n            附件\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    房产证/不动产登记证\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('0')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    土地证\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('1')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    身份证\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('2')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                    配偶身份证\n                ")]), _vm._v(" "), _vm._l((_vm.getFiles('3')), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mb16"
    }, [_c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })])
  })], 2)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-f6f9b5da", module.exports)
  }
}

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation__);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },

    props: {
        model: Object,
        dicts: Object,
        step: Number
    },
    components: {
        'mortgage': __WEBPACK_IMPORTED_MODULE_0__views_tabs_mortgageInformation___default.a
    }
});

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_apply__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tabs_apply___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_tabs_apply__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_files__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tabs_files___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_tabs_files__);



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },

    props: {
        model: Object,
        dicts: Object,
        step: Number
    },
    components: {
        'apply': __WEBPACK_IMPORTED_MODULE_0__views_tabs_apply___default.a,
        'files': __WEBPACK_IMPORTED_MODULE_1__views_tabs_files___default.a
    }
});

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var area = [{
  "value": "北京市",
  "label": "北京市",
  "children": [{
    "value": "市辖区",
    "label": "市辖区",
    "children": [{
      "value": "东城区",
      "label": "东城区"
    }, {
      "value": "西城区",
      "label": "西城区"
    }, {
      "value": "朝阳区",
      "label": "朝阳区"
    }, {
      "value": "丰台区",
      "label": "丰台区"
    }, {
      "value": "石景山区",
      "label": "石景山区"
    }, {
      "value": "海淀区",
      "label": "海淀区"
    }, {
      "value": "门头沟区",
      "label": "门头沟区"
    }, {
      "value": "房山区",
      "label": "房山区"
    }, {
      "value": "通州区",
      "label": "通州区"
    }, {
      "value": "顺义区",
      "label": "顺义区"
    }, {
      "value": "昌平区",
      "label": "昌平区"
    }, {
      "value": "大兴区",
      "label": "大兴区"
    }, {
      "value": "怀柔区",
      "label": "怀柔区"
    }, {
      "value": "平谷区",
      "label": "平谷区"
    }, {
      "value": "密云区",
      "label": "密云区"
    }, {
      "value": "延庆区",
      "label": "延庆区"
    }]
  }]
}, {
  "value": "天津市",
  "label": "天津市",
  "children": [{
    "value": "市辖区",
    "label": "市辖区",
    "children": [{
      "value": "和平区",
      "label": "和平区"
    }, {
      "value": "河东区",
      "label": "河东区"
    }, {
      "value": "河西区",
      "label": "河西区"
    }, {
      "value": "南开区",
      "label": "南开区"
    }, {
      "value": "河北区",
      "label": "河北区"
    }, {
      "value": "红桥区",
      "label": "红桥区"
    }, {
      "value": "东丽区",
      "label": "东丽区"
    }, {
      "value": "西青区",
      "label": "西青区"
    }, {
      "value": "津南区",
      "label": "津南区"
    }, {
      "value": "北辰区",
      "label": "北辰区"
    }, {
      "value": "武清区",
      "label": "武清区"
    }, {
      "value": "宝坻区",
      "label": "宝坻区"
    }, {
      "value": "滨海新区",
      "label": "滨海新区"
    }, {
      "value": "宁河区",
      "label": "宁河区"
    }, {
      "value": "静海区",
      "label": "静海区"
    }, {
      "value": "蓟州区",
      "label": "蓟州区"
    }]
  }]
}, {
  "value": "河北省",
  "label": "河北省",
  "children": [{
    "value": "石家庄市",
    "label": "石家庄市",
    "children": [{
      "value": "长安区",
      "label": "长安区"
    }, {
      "value": "桥西区",
      "label": "桥西区"
    }, {
      "value": "新华区",
      "label": "新华区"
    }, {
      "value": "井陉矿区",
      "label": "井陉矿区"
    }, {
      "value": "裕华区",
      "label": "裕华区"
    }, {
      "value": "藁城区",
      "label": "藁城区"
    }, {
      "value": "鹿泉区",
      "label": "鹿泉区"
    }, {
      "value": "栾城区",
      "label": "栾城区"
    }, {
      "value": "井陉县",
      "label": "井陉县"
    }, {
      "value": "正定县",
      "label": "正定县"
    }, {
      "value": "行唐县",
      "label": "行唐县"
    }, {
      "value": "灵寿县",
      "label": "灵寿县"
    }, {
      "value": "高邑县",
      "label": "高邑县"
    }, {
      "value": "深泽县",
      "label": "深泽县"
    }, {
      "value": "赞皇县",
      "label": "赞皇县"
    }, {
      "value": "无极县",
      "label": "无极县"
    }, {
      "value": "平山县",
      "label": "平山县"
    }, {
      "value": "元氏县",
      "label": "元氏县"
    }, {
      "value": "赵县",
      "label": "赵县"
    }, {
      "value": "晋州市",
      "label": "晋州市"
    }, {
      "value": "新乐市",
      "label": "新乐市"
    }]
  }, {
    "value": "唐山市",
    "label": "唐山市",
    "children": [{
      "value": "路南区",
      "label": "路南区"
    }, {
      "value": "路北区",
      "label": "路北区"
    }, {
      "value": "古冶区",
      "label": "古冶区"
    }, {
      "value": "开平区",
      "label": "开平区"
    }, {
      "value": "丰南区",
      "label": "丰南区"
    }, {
      "value": "丰润区",
      "label": "丰润区"
    }, {
      "value": "曹妃甸区",
      "label": "曹妃甸区"
    }, {
      "value": "滦县",
      "label": "滦县"
    }, {
      "value": "滦南县",
      "label": "滦南县"
    }, {
      "value": "乐亭县",
      "label": "乐亭县"
    }, {
      "value": "迁西县",
      "label": "迁西县"
    }, {
      "value": "玉田县",
      "label": "玉田县"
    }, {
      "value": "遵化市",
      "label": "遵化市"
    }, {
      "value": "迁安市",
      "label": "迁安市"
    }]
  }, {
    "value": "秦皇岛市",
    "label": "秦皇岛市",
    "children": [{
      "value": "海港区",
      "label": "海港区"
    }, {
      "value": "山海关区",
      "label": "山海关区"
    }, {
      "value": "北戴河区",
      "label": "北戴河区"
    }, {
      "value": "抚宁区",
      "label": "抚宁区"
    }, {
      "value": "青龙满族自治县",
      "label": "青龙满族自治县"
    }, {
      "value": "昌黎县",
      "label": "昌黎县"
    }, {
      "value": "卢龙县",
      "label": "卢龙县"
    }]
  }, {
    "value": "邯郸市",
    "label": "邯郸市",
    "children": [{
      "value": "邯山区",
      "label": "邯山区"
    }, {
      "value": "丛台区",
      "label": "丛台区"
    }, {
      "value": "复兴区",
      "label": "复兴区"
    }, {
      "value": "峰峰矿区",
      "label": "峰峰矿区"
    }, {
      "value": "邯郸县",
      "label": "邯郸县"
    }, {
      "value": "临漳县",
      "label": "临漳县"
    }, {
      "value": "成安县",
      "label": "成安县"
    }, {
      "value": "大名县",
      "label": "大名县"
    }, {
      "value": "涉县",
      "label": "涉县"
    }, {
      "value": "磁县",
      "label": "磁县"
    }, {
      "value": "肥乡县",
      "label": "肥乡县"
    }, {
      "value": "永年县",
      "label": "永年县"
    }, {
      "value": "邱县",
      "label": "邱县"
    }, {
      "value": "鸡泽县",
      "label": "鸡泽县"
    }, {
      "value": "广平县",
      "label": "广平县"
    }, {
      "value": "馆陶县",
      "label": "馆陶县"
    }, {
      "value": "魏县",
      "label": "魏县"
    }, {
      "value": "曲周县",
      "label": "曲周县"
    }, {
      "value": "武安市",
      "label": "武安市"
    }]
  }, {
    "value": "邢台市",
    "label": "邢台市",
    "children": [{
      "value": "桥东区",
      "label": "桥东区"
    }, {
      "value": "桥西区",
      "label": "桥西区"
    }, {
      "value": "邢台县",
      "label": "邢台县"
    }, {
      "value": "临城县",
      "label": "临城县"
    }, {
      "value": "内丘县",
      "label": "内丘县"
    }, {
      "value": "柏乡县",
      "label": "柏乡县"
    }, {
      "value": "隆尧县",
      "label": "隆尧县"
    }, {
      "value": "任县",
      "label": "任县"
    }, {
      "value": "南和县",
      "label": "南和县"
    }, {
      "value": "宁晋县",
      "label": "宁晋县"
    }, {
      "value": "巨鹿县",
      "label": "巨鹿县"
    }, {
      "value": "新河县",
      "label": "新河县"
    }, {
      "value": "广宗县",
      "label": "广宗县"
    }, {
      "value": "平乡县",
      "label": "平乡县"
    }, {
      "value": "威县",
      "label": "威县"
    }, {
      "value": "清河县",
      "label": "清河县"
    }, {
      "value": "临西县",
      "label": "临西县"
    }, {
      "value": "南宫市",
      "label": "南宫市"
    }, {
      "value": "沙河市",
      "label": "沙河市"
    }]
  }, {
    "value": "保定市",
    "label": "保定市",
    "children": [{
      "value": "竞秀区",
      "label": "竞秀区"
    }, {
      "value": "莲池区",
      "label": "莲池区"
    }, {
      "value": "满城区",
      "label": "满城区"
    }, {
      "value": "清苑区",
      "label": "清苑区"
    }, {
      "value": "徐水区",
      "label": "徐水区"
    }, {
      "value": "涞水县",
      "label": "涞水县"
    }, {
      "value": "阜平县",
      "label": "阜平县"
    }, {
      "value": "定兴县",
      "label": "定兴县"
    }, {
      "value": "唐县",
      "label": "唐县"
    }, {
      "value": "高阳县",
      "label": "高阳县"
    }, {
      "value": "容城县",
      "label": "容城县"
    }, {
      "value": "涞源县",
      "label": "涞源县"
    }, {
      "value": "望都县",
      "label": "望都县"
    }, {
      "value": "安新县",
      "label": "安新县"
    }, {
      "value": "易县",
      "label": "易县"
    }, {
      "value": "曲阳县",
      "label": "曲阳县"
    }, {
      "value": "蠡县",
      "label": "蠡县"
    }, {
      "value": "顺平县",
      "label": "顺平县"
    }, {
      "value": "博野县",
      "label": "博野县"
    }, {
      "value": "雄县",
      "label": "雄县"
    }, {
      "value": "涿州市",
      "label": "涿州市"
    }, {
      "value": "安国市",
      "label": "安国市"
    }, {
      "value": "高碑店市",
      "label": "高碑店市"
    }]
  }, {
    "value": "张家口市",
    "label": "张家口市",
    "children": [{
      "value": "桥东区",
      "label": "桥东区"
    }, {
      "value": "桥西区",
      "label": "桥西区"
    }, {
      "value": "宣化区",
      "label": "宣化区"
    }, {
      "value": "下花园区",
      "label": "下花园区"
    }, {
      "value": "万全区",
      "label": "万全区"
    }, {
      "value": "崇礼区",
      "label": "崇礼区"
    }, {
      "value": "张北县",
      "label": "张北县"
    }, {
      "value": "康保县",
      "label": "康保县"
    }, {
      "value": "沽源县",
      "label": "沽源县"
    }, {
      "value": "尚义县",
      "label": "尚义县"
    }, {
      "value": "蔚县",
      "label": "蔚县"
    }, {
      "value": "阳原县",
      "label": "阳原县"
    }, {
      "value": "怀安县",
      "label": "怀安县"
    }, {
      "value": "怀来县",
      "label": "怀来县"
    }, {
      "value": "涿鹿县",
      "label": "涿鹿县"
    }, {
      "value": "赤城县",
      "label": "赤城县"
    }]
  }, {
    "value": "承德市",
    "label": "承德市",
    "children": [{
      "value": "双桥区",
      "label": "双桥区"
    }, {
      "value": "双滦区",
      "label": "双滦区"
    }, {
      "value": "鹰手营子矿区",
      "label": "鹰手营子矿区"
    }, {
      "value": "承德县",
      "label": "承德县"
    }, {
      "value": "兴隆县",
      "label": "兴隆县"
    }, {
      "value": "平泉县",
      "label": "平泉县"
    }, {
      "value": "滦平县",
      "label": "滦平县"
    }, {
      "value": "隆化县",
      "label": "隆化县"
    }, {
      "value": "丰宁满族自治县",
      "label": "丰宁满族自治县"
    }, {
      "value": "宽城满族自治县",
      "label": "宽城满族自治县"
    }, {
      "value": "围场满族蒙古族自治县",
      "label": "围场满族蒙古族自治县"
    }]
  }, {
    "value": "沧州市",
    "label": "沧州市",
    "children": [{
      "value": "沧州市",
      "label": "沧州市"
    }, {
      "value": "运河区",
      "label": "运河区"
    }, {
      "value": "沧县",
      "label": "沧县"
    }, {
      "value": "青县",
      "label": "青县"
    }, {
      "value": "东光县",
      "label": "东光县"
    }, {
      "value": "海兴县",
      "label": "海兴县"
    }, {
      "value": "盐山县",
      "label": "盐山县"
    }, {
      "value": "肃宁县",
      "label": "肃宁县"
    }, {
      "value": "南皮县",
      "label": "南皮县"
    }, {
      "value": "吴桥县",
      "label": "吴桥县"
    }, {
      "value": "献县",
      "label": "献县"
    }, {
      "value": "孟村回族自治县",
      "label": "孟村回族自治县"
    }, {
      "value": "泊头市",
      "label": "泊头市"
    }, {
      "value": "任丘市",
      "label": "任丘市"
    }, {
      "value": "黄骅市",
      "label": "黄骅市"
    }, {
      "value": "河间市",
      "label": "河间市"
    }]
  }, {
    "value": "廊坊市",
    "label": "廊坊市",
    "children": [{
      "value": "安次区",
      "label": "安次区"
    }, {
      "value": "广阳区",
      "label": "广阳区"
    }, {
      "value": "固安县",
      "label": "固安县"
    }, {
      "value": "永清县",
      "label": "永清县"
    }, {
      "value": "香河县",
      "label": "香河县"
    }, {
      "value": "大城县",
      "label": "大城县"
    }, {
      "value": "文安县",
      "label": "文安县"
    }, {
      "value": "大厂回族自治县",
      "label": "大厂回族自治县"
    }, {
      "value": "霸州市",
      "label": "霸州市"
    }, {
      "value": "三河市",
      "label": "三河市"
    }]
  }, {
    "value": "衡水市",
    "label": "衡水市",
    "children": [{
      "value": "桃城区",
      "label": "桃城区"
    }, {
      "value": "冀州区",
      "label": "冀州区"
    }, {
      "value": "枣强县",
      "label": "枣强县"
    }, {
      "value": "武邑县",
      "label": "武邑县"
    }, {
      "value": "武强县",
      "label": "武强县"
    }, {
      "value": "饶阳县",
      "label": "饶阳县"
    }, {
      "value": "安平县",
      "label": "安平县"
    }, {
      "value": "故城县",
      "label": "故城县"
    }, {
      "value": "景县",
      "label": "景县"
    }, {
      "value": "阜城县",
      "label": "阜城县"
    }, {
      "value": "深州市",
      "label": "深州市"
    }]
  }, {
    "value": "省直辖县级行政区划",
    "label": "省直辖县级行政区划",
    "children": [{
      "value": "定州市",
      "label": "定州市"
    }, {
      "value": "辛集市",
      "label": "辛集市"
    }]
  }]
}, {
  "value": "山西省",
  "label": "山西省",
  "children": [{
    "value": "太原市",
    "label": "太原市",
    "children": [{
      "value": "小店区",
      "label": "小店区"
    }, {
      "value": "迎泽区",
      "label": "迎泽区"
    }, {
      "value": "杏花岭区",
      "label": "杏花岭区"
    }, {
      "value": "尖草坪区",
      "label": "尖草坪区"
    }, {
      "value": "万柏林区",
      "label": "万柏林区"
    }, {
      "value": "晋源区",
      "label": "晋源区"
    }, {
      "value": "清徐县",
      "label": "清徐县"
    }, {
      "value": "阳曲县",
      "label": "阳曲县"
    }, {
      "value": "娄烦县",
      "label": "娄烦县"
    }, {
      "value": "古交市",
      "label": "古交市"
    }]
  }, {
    "value": "大同市",
    "label": "大同市",
    "children": [{
      "value": "城区",
      "label": "城区"
    }, {
      "value": "矿区",
      "label": "矿区"
    }, {
      "value": "南郊区",
      "label": "南郊区"
    }, {
      "value": "新荣区",
      "label": "新荣区"
    }, {
      "value": "阳高县",
      "label": "阳高县"
    }, {
      "value": "天镇县",
      "label": "天镇县"
    }, {
      "value": "广灵县",
      "label": "广灵县"
    }, {
      "value": "灵丘县",
      "label": "灵丘县"
    }, {
      "value": "浑源县",
      "label": "浑源县"
    }, {
      "value": "左云县",
      "label": "左云县"
    }, {
      "value": "大同县",
      "label": "大同县"
    }]
  }, {
    "value": "阳泉市",
    "label": "阳泉市",
    "children": [{
      "value": "城区",
      "label": "城区"
    }, {
      "value": "矿区",
      "label": "矿区"
    }, {
      "value": "郊区",
      "label": "郊区"
    }, {
      "value": "平定县",
      "label": "平定县"
    }, {
      "value": "盂县",
      "label": "盂县"
    }]
  }, {
    "value": "长治市",
    "label": "长治市",
    "children": [{
      "value": "城区",
      "label": "城区"
    }, {
      "value": "郊区",
      "label": "郊区"
    }, {
      "value": "长治县",
      "label": "长治县"
    }, {
      "value": "襄垣县",
      "label": "襄垣县"
    }, {
      "value": "屯留县",
      "label": "屯留县"
    }, {
      "value": "平顺县",
      "label": "平顺县"
    }, {
      "value": "黎城县",
      "label": "黎城县"
    }, {
      "value": "壶关县",
      "label": "壶关县"
    }, {
      "value": "长子县",
      "label": "长子县"
    }, {
      "value": "武乡县",
      "label": "武乡县"
    }, {
      "value": "沁县",
      "label": "沁县"
    }, {
      "value": "沁源县",
      "label": "沁源县"
    }, {
      "value": "潞城市",
      "label": "潞城市"
    }]
  }, {
    "value": "晋城市",
    "label": "晋城市",
    "children": [{
      "value": "城区",
      "label": "城区"
    }, {
      "value": "沁水县",
      "label": "沁水县"
    }, {
      "value": "阳城县",
      "label": "阳城县"
    }, {
      "value": "陵川县",
      "label": "陵川县"
    }, {
      "value": "泽州县",
      "label": "泽州县"
    }, {
      "value": "高平市",
      "label": "高平市"
    }]
  }, {
    "value": "朔州市",
    "label": "朔州市",
    "children": [{
      "value": "朔城区",
      "label": "朔城区"
    }, {
      "value": "平鲁区",
      "label": "平鲁区"
    }, {
      "value": "山阴县",
      "label": "山阴县"
    }, {
      "value": "应县",
      "label": "应县"
    }, {
      "value": "右玉县",
      "label": "右玉县"
    }, {
      "value": "怀仁县",
      "label": "怀仁县"
    }]
  }, {
    "value": "晋中市",
    "label": "晋中市",
    "children": [{
      "value": "榆次区",
      "label": "榆次区"
    }, {
      "value": "榆社县",
      "label": "榆社县"
    }, {
      "value": "左权县",
      "label": "左权县"
    }, {
      "value": "和顺县",
      "label": "和顺县"
    }, {
      "value": "昔阳县",
      "label": "昔阳县"
    }, {
      "value": "寿阳县",
      "label": "寿阳县"
    }, {
      "value": "太谷县",
      "label": "太谷县"
    }, {
      "value": "祁县",
      "label": "祁县"
    }, {
      "value": "平遥县",
      "label": "平遥县"
    }, {
      "value": "灵石县",
      "label": "灵石县"
    }, {
      "value": "介休市",
      "label": "介休市"
    }]
  }, {
    "value": "运城市",
    "label": "运城市",
    "children": [{
      "value": "盐湖区",
      "label": "盐湖区"
    }, {
      "value": "临猗县",
      "label": "临猗县"
    }, {
      "value": "万荣县",
      "label": "万荣县"
    }, {
      "value": "闻喜县",
      "label": "闻喜县"
    }, {
      "value": "稷山县",
      "label": "稷山县"
    }, {
      "value": "新绛县",
      "label": "新绛县"
    }, {
      "value": "绛县",
      "label": "绛县"
    }, {
      "value": "垣曲县",
      "label": "垣曲县"
    }, {
      "value": "夏县",
      "label": "夏县"
    }, {
      "value": "平陆县",
      "label": "平陆县"
    }, {
      "value": "芮城县",
      "label": "芮城县"
    }, {
      "value": "永济市",
      "label": "永济市"
    }, {
      "value": "河津市",
      "label": "河津市"
    }]
  }, {
    "value": "忻州市",
    "label": "忻州市",
    "children": [{
      "value": "忻府区",
      "label": "忻府区"
    }, {
      "value": "定襄县",
      "label": "定襄县"
    }, {
      "value": "五台县",
      "label": "五台县"
    }, {
      "value": "代县",
      "label": "代县"
    }, {
      "value": "繁峙县",
      "label": "繁峙县"
    }, {
      "value": "宁武县",
      "label": "宁武县"
    }, {
      "value": "静乐县",
      "label": "静乐县"
    }, {
      "value": "神池县",
      "label": "神池县"
    }, {
      "value": "五寨县",
      "label": "五寨县"
    }, {
      "value": "岢岚县",
      "label": "岢岚县"
    }, {
      "value": "河曲县",
      "label": "河曲县"
    }, {
      "value": "保德县",
      "label": "保德县"
    }, {
      "value": "偏关县",
      "label": "偏关县"
    }, {
      "value": "原平市",
      "label": "原平市"
    }]
  }, {
    "value": "临汾市",
    "label": "临汾市",
    "children": [{
      "value": "尧都区",
      "label": "尧都区"
    }, {
      "value": "曲沃县",
      "label": "曲沃县"
    }, {
      "value": "翼城县",
      "label": "翼城县"
    }, {
      "value": "襄汾县",
      "label": "襄汾县"
    }, {
      "value": "洪洞县",
      "label": "洪洞县"
    }, {
      "value": "古县",
      "label": "古县"
    }, {
      "value": "安泽县",
      "label": "安泽县"
    }, {
      "value": "浮山县",
      "label": "浮山县"
    }, {
      "value": "吉县",
      "label": "吉县"
    }, {
      "value": "乡宁县",
      "label": "乡宁县"
    }, {
      "value": "大宁县",
      "label": "大宁县"
    }, {
      "value": "隰县",
      "label": "隰县"
    }, {
      "value": "永和县",
      "label": "永和县"
    }, {
      "value": "蒲县",
      "label": "蒲县"
    }, {
      "value": "汾西县",
      "label": "汾西县"
    }, {
      "value": "侯马市",
      "label": "侯马市"
    }, {
      "value": "霍州市",
      "label": "霍州市"
    }]
  }, {
    "value": "吕梁市",
    "label": "吕梁市",
    "children": [{
      "value": "离石区",
      "label": "离石区"
    }, {
      "value": "文水县",
      "label": "文水县"
    }, {
      "value": "交城县",
      "label": "交城县"
    }, {
      "value": "兴县",
      "label": "兴县"
    }, {
      "value": "临县",
      "label": "临县"
    }, {
      "value": "柳林县",
      "label": "柳林县"
    }, {
      "value": "石楼县",
      "label": "石楼县"
    }, {
      "value": "岚县",
      "label": "岚县"
    }, {
      "value": "方山县",
      "label": "方山县"
    }, {
      "value": "中阳县",
      "label": "中阳县"
    }, {
      "value": "交口县",
      "label": "交口县"
    }, {
      "value": "孝义市",
      "label": "孝义市"
    }, {
      "value": "汾阳市",
      "label": "汾阳市"
    }]
  }]
}, {
  "value": "内蒙古自治区",
  "label": "内蒙古自治区",
  "children": [{
    "value": "呼和浩特市",
    "label": "呼和浩特市",
    "children": [{
      "value": "新城区",
      "label": "新城区"
    }, {
      "value": "回民区",
      "label": "回民区"
    }, {
      "value": "玉泉区",
      "label": "玉泉区"
    }, {
      "value": "赛罕区",
      "label": "赛罕区"
    }, {
      "value": "土默特左旗",
      "label": "土默特左旗"
    }, {
      "value": "托克托县",
      "label": "托克托县"
    }, {
      "value": "和林格尔县",
      "label": "和林格尔县"
    }, {
      "value": "清水河县",
      "label": "清水河县"
    }, {
      "value": "武川县",
      "label": "武川县"
    }]
  }, {
    "value": "包头市",
    "label": "包头市",
    "children": [{
      "value": "东河区",
      "label": "东河区"
    }, {
      "value": "昆都仑区",
      "label": "昆都仑区"
    }, {
      "value": "青山区",
      "label": "青山区"
    }, {
      "value": "石拐区",
      "label": "石拐区"
    }, {
      "value": "白云鄂博矿区",
      "label": "白云鄂博矿区"
    }, {
      "value": "九原区",
      "label": "九原区"
    }, {
      "value": "土默特右旗",
      "label": "土默特右旗"
    }, {
      "value": "固阳县",
      "label": "固阳县"
    }, {
      "value": "达尔罕茂明安联合旗",
      "label": "达尔罕茂明安联合旗"
    }]
  }, {
    "value": "乌海市",
    "label": "乌海市",
    "children": [{
      "value": "海勃湾区",
      "label": "海勃湾区"
    }, {
      "value": "海南区",
      "label": "海南区"
    }, {
      "value": "乌达区",
      "label": "乌达区"
    }]
  }, {
    "value": "赤峰市",
    "label": "赤峰市",
    "children": [{
      "value": "红山区",
      "label": "红山区"
    }, {
      "value": "元宝山区",
      "label": "元宝山区"
    }, {
      "value": "松山区",
      "label": "松山区"
    }, {
      "value": "阿鲁科尔沁旗",
      "label": "阿鲁科尔沁旗"
    }, {
      "value": "巴林左旗",
      "label": "巴林左旗"
    }, {
      "value": "巴林右旗",
      "label": "巴林右旗"
    }, {
      "value": "林西县",
      "label": "林西县"
    }, {
      "value": "克什克腾旗",
      "label": "克什克腾旗"
    }, {
      "value": "翁牛特旗",
      "label": "翁牛特旗"
    }, {
      "value": "喀喇沁旗",
      "label": "喀喇沁旗"
    }, {
      "value": "宁城县",
      "label": "宁城县"
    }, {
      "value": "敖汉旗",
      "label": "敖汉旗"
    }]
  }, {
    "value": "通辽市",
    "label": "通辽市",
    "children": [{
      "value": "科尔沁区",
      "label": "科尔沁区"
    }, {
      "value": "科尔沁左翼中旗",
      "label": "科尔沁左翼中旗"
    }, {
      "value": "科尔沁左翼后旗",
      "label": "科尔沁左翼后旗"
    }, {
      "value": "开鲁县",
      "label": "开鲁县"
    }, {
      "value": "库伦旗",
      "label": "库伦旗"
    }, {
      "value": "奈曼旗",
      "label": "奈曼旗"
    }, {
      "value": "扎鲁特旗",
      "label": "扎鲁特旗"
    }, {
      "value": "霍林郭勒市",
      "label": "霍林郭勒市"
    }]
  }, {
    "value": "鄂尔多斯市",
    "label": "鄂尔多斯市",
    "children": [{
      "value": "东胜区",
      "label": "东胜区"
    }, {
      "value": "康巴什区",
      "label": "康巴什区"
    }, {
      "value": "达拉特旗",
      "label": "达拉特旗"
    }, {
      "value": "准格尔旗",
      "label": "准格尔旗"
    }, {
      "value": "鄂托克前旗",
      "label": "鄂托克前旗"
    }, {
      "value": "鄂托克旗",
      "label": "鄂托克旗"
    }, {
      "value": "杭锦旗",
      "label": "杭锦旗"
    }, {
      "value": "乌审旗",
      "label": "乌审旗"
    }, {
      "value": "伊金霍洛旗",
      "label": "伊金霍洛旗"
    }]
  }, {
    "value": "呼伦贝尔市",
    "label": "呼伦贝尔市",
    "children": [{
      "value": "海拉尔区",
      "label": "海拉尔区"
    }, {
      "value": "扎赉诺尔区",
      "label": "扎赉诺尔区"
    }, {
      "value": "阿荣旗",
      "label": "阿荣旗"
    }, {
      "value": "莫力达瓦达斡尔族自治旗",
      "label": "莫力达瓦达斡尔族自治旗"
    }, {
      "value": "鄂伦春自治旗",
      "label": "鄂伦春自治旗"
    }, {
      "value": "鄂温克族自治旗",
      "label": "鄂温克族自治旗"
    }, {
      "value": "陈巴尔虎旗",
      "label": "陈巴尔虎旗"
    }, {
      "value": "新巴尔虎左旗",
      "label": "新巴尔虎左旗"
    }, {
      "value": "新巴尔虎右旗",
      "label": "新巴尔虎右旗"
    }, {
      "value": "满洲里市",
      "label": "满洲里市"
    }, {
      "value": "牙克石市",
      "label": "牙克石市"
    }, {
      "value": "扎兰屯市",
      "label": "扎兰屯市"
    }, {
      "value": "额尔古纳市",
      "label": "额尔古纳市"
    }, {
      "value": "根河市",
      "label": "根河市"
    }]
  }, {
    "value": "巴彦淖尔市",
    "label": "巴彦淖尔市",
    "children": [{
      "value": "临河区",
      "label": "临河区"
    }, {
      "value": "五原县",
      "label": "五原县"
    }, {
      "value": "磴口县",
      "label": "磴口县"
    }, {
      "value": "乌拉特前旗",
      "label": "乌拉特前旗"
    }, {
      "value": "乌拉特中旗",
      "label": "乌拉特中旗"
    }, {
      "value": "乌拉特后旗",
      "label": "乌拉特后旗"
    }, {
      "value": "杭锦后旗",
      "label": "杭锦后旗"
    }]
  }, {
    "value": "乌兰察布市",
    "label": "乌兰察布市",
    "children": [{
      "value": "集宁区",
      "label": "集宁区"
    }, {
      "value": "卓资县",
      "label": "卓资县"
    }, {
      "value": "化德县",
      "label": "化德县"
    }, {
      "value": "商都县",
      "label": "商都县"
    }, {
      "value": "兴和县",
      "label": "兴和县"
    }, {
      "value": "凉城县",
      "label": "凉城县"
    }, {
      "value": "察哈尔右翼前旗",
      "label": "察哈尔右翼前旗"
    }, {
      "value": "察哈尔右翼中旗",
      "label": "察哈尔右翼中旗"
    }, {
      "value": "察哈尔右翼后旗",
      "label": "察哈尔右翼后旗"
    }, {
      "value": "四子王旗",
      "label": "四子王旗"
    }, {
      "value": "丰镇市",
      "label": "丰镇市"
    }]
  }, {
    "value": "兴安盟",
    "label": "兴安盟",
    "children": [{
      "value": "乌兰浩特市",
      "label": "乌兰浩特市"
    }, {
      "value": "阿尔山市",
      "label": "阿尔山市"
    }, {
      "value": "科尔沁右翼前旗",
      "label": "科尔沁右翼前旗"
    }, {
      "value": "科尔沁右翼中旗",
      "label": "科尔沁右翼中旗"
    }, {
      "value": "扎赉特旗",
      "label": "扎赉特旗"
    }, {
      "value": "突泉县",
      "label": "突泉县"
    }]
  }, {
    "value": "锡林郭勒盟",
    "label": "锡林郭勒盟",
    "children": [{
      "value": "二连浩特市",
      "label": "二连浩特市"
    }, {
      "value": "锡林浩特市",
      "label": "锡林浩特市"
    }, {
      "value": "阿巴嘎旗",
      "label": "阿巴嘎旗"
    }, {
      "value": "苏尼特左旗",
      "label": "苏尼特左旗"
    }, {
      "value": "苏尼特右旗",
      "label": "苏尼特右旗"
    }, {
      "value": "东乌珠穆沁旗",
      "label": "东乌珠穆沁旗"
    }, {
      "value": "西乌珠穆沁旗",
      "label": "西乌珠穆沁旗"
    }, {
      "value": "太仆寺旗",
      "label": "太仆寺旗"
    }, {
      "value": "镶黄旗",
      "label": "镶黄旗"
    }, {
      "value": "正镶白旗",
      "label": "正镶白旗"
    }, {
      "value": "正蓝旗",
      "label": "正蓝旗"
    }, {
      "value": "多伦县",
      "label": "多伦县"
    }]
  }, {
    "value": "阿拉善盟",
    "label": "阿拉善盟",
    "children": [{
      "value": "阿拉善左旗",
      "label": "阿拉善左旗"
    }, {
      "value": "阿拉善右旗",
      "label": "阿拉善右旗"
    }, {
      "value": "额济纳旗",
      "label": "额济纳旗"
    }]
  }]
}, {
  "value": "辽宁省",
  "label": "辽宁省",
  "children": [{
    "value": "沈阳市",
    "label": "沈阳市",
    "children": [{
      "value": "和平区",
      "label": "和平区"
    }, {
      "value": "沈河区",
      "label": "沈河区"
    }, {
      "value": "大东区",
      "label": "大东区"
    }, {
      "value": "皇姑区",
      "label": "皇姑区"
    }, {
      "value": "铁西区",
      "label": "铁西区"
    }, {
      "value": "苏家屯区",
      "label": "苏家屯区"
    }, {
      "value": "浑南区",
      "label": "浑南区"
    }, {
      "value": "沈北新区",
      "label": "沈北新区"
    }, {
      "value": "于洪区",
      "label": "于洪区"
    }, {
      "value": "辽中区",
      "label": "辽中区"
    }, {
      "value": "康平县",
      "label": "康平县"
    }, {
      "value": "法库县",
      "label": "法库县"
    }, {
      "value": "新民市",
      "label": "新民市"
    }]
  }, {
    "value": "大连市",
    "label": "大连市",
    "children": [{
      "value": "中山区",
      "label": "中山区"
    }, {
      "value": "西岗区",
      "label": "西岗区"
    }, {
      "value": "沙河口区",
      "label": "沙河口区"
    }, {
      "value": "甘井子区",
      "label": "甘井子区"
    }, {
      "value": "旅顺口区",
      "label": "旅顺口区"
    }, {
      "value": "金州区",
      "label": "金州区"
    }, {
      "value": "普兰店区",
      "label": "普兰店区"
    }, {
      "value": "长海县",
      "label": "长海县"
    }, {
      "value": "瓦房店市",
      "label": "瓦房店市"
    }, {
      "value": "庄河市",
      "label": "庄河市"
    }]
  }, {
    "value": "鞍山市",
    "label": "鞍山市",
    "children": [{
      "value": "铁东区",
      "label": "铁东区"
    }, {
      "value": "铁西区",
      "label": "铁西区"
    }, {
      "value": "立山区",
      "label": "立山区"
    }, {
      "value": "千山区",
      "label": "千山区"
    }, {
      "value": "台安县",
      "label": "台安县"
    }, {
      "value": "岫岩满族自治县",
      "label": "岫岩满族自治县"
    }, {
      "value": "海城市",
      "label": "海城市"
    }]
  }, {
    "value": "抚顺市",
    "label": "抚顺市",
    "children": [{
      "value": "新抚区",
      "label": "新抚区"
    }, {
      "value": "东洲区",
      "label": "东洲区"
    }, {
      "value": "望花区",
      "label": "望花区"
    }, {
      "value": "顺城区",
      "label": "顺城区"
    }, {
      "value": "抚顺县",
      "label": "抚顺县"
    }, {
      "value": "新宾满族自治县",
      "label": "新宾满族自治县"
    }, {
      "value": "清原满族自治县",
      "label": "清原满族自治县"
    }]
  }, {
    "value": "本溪市",
    "label": "本溪市",
    "children": [{
      "value": "平山区",
      "label": "平山区"
    }, {
      "value": "溪湖区",
      "label": "溪湖区"
    }, {
      "value": "明山区",
      "label": "明山区"
    }, {
      "value": "南芬区",
      "label": "南芬区"
    }, {
      "value": "本溪满族自治县",
      "label": "本溪满族自治县"
    }, {
      "value": "桓仁满族自治县",
      "label": "桓仁满族自治县"
    }]
  }, {
    "value": "丹东市",
    "label": "丹东市",
    "children": [{
      "value": "丹东市",
      "label": "丹东市"
    }, {
      "value": "振兴区",
      "label": "振兴区"
    }, {
      "value": "振安区",
      "label": "振安区"
    }, {
      "value": "宽甸满族自治县",
      "label": "宽甸满族自治县"
    }, {
      "value": "东港市",
      "label": "东港市"
    }, {
      "value": "凤城市",
      "label": "凤城市"
    }]
  }, {
    "value": "锦州市",
    "label": "锦州市",
    "children": [{
      "value": "古塔区",
      "label": "古塔区"
    }, {
      "value": "凌河区",
      "label": "凌河区"
    }, {
      "value": "太和区",
      "label": "太和区"
    }, {
      "value": "黑山县",
      "label": "黑山县"
    }, {
      "value": "义县",
      "label": "义县"
    }, {
      "value": "凌海市",
      "label": "凌海市"
    }, {
      "value": "北镇市",
      "label": "北镇市"
    }]
  }, {
    "value": "营口市",
    "label": "营口市",
    "children": [{
      "value": "站前区",
      "label": "站前区"
    }, {
      "value": "西市区",
      "label": "西市区"
    }, {
      "value": "鲅鱼圈区",
      "label": "鲅鱼圈区"
    }, {
      "value": "老边区",
      "label": "老边区"
    }, {
      "value": "盖州市",
      "label": "盖州市"
    }, {
      "value": "大石桥市",
      "label": "大石桥市"
    }]
  }, {
    "value": "阜新市",
    "label": "阜新市",
    "children": [{
      "value": "海州区",
      "label": "海州区"
    }, {
      "value": "新邱区",
      "label": "新邱区"
    }, {
      "value": "太平区",
      "label": "太平区"
    }, {
      "value": "清河门区",
      "label": "清河门区"
    }, {
      "value": "细河区",
      "label": "细河区"
    }, {
      "value": "阜新蒙古族自治县",
      "label": "阜新蒙古族自治县"
    }, {
      "value": "彰武县",
      "label": "彰武县"
    }]
  }, {
    "value": "辽阳市",
    "label": "辽阳市",
    "children": [{
      "value": "白塔区",
      "label": "白塔区"
    }, {
      "value": "文圣区",
      "label": "文圣区"
    }, {
      "value": "宏伟区",
      "label": "宏伟区"
    }, {
      "value": "弓长岭区",
      "label": "弓长岭区"
    }, {
      "value": "太子河区",
      "label": "太子河区"
    }, {
      "value": "辽阳县",
      "label": "辽阳县"
    }, {
      "value": "灯塔市",
      "label": "灯塔市"
    }]
  }, {
    "value": "盘锦市",
    "label": "盘锦市",
    "children": [{
      "value": "双台子区",
      "label": "双台子区"
    }, {
      "value": "兴隆台区",
      "label": "兴隆台区"
    }, {
      "value": "大洼区",
      "label": "大洼区"
    }, {
      "value": "盘山县",
      "label": "盘山县"
    }]
  }, {
    "value": "铁岭市",
    "label": "铁岭市",
    "children": [{
      "value": "银州区",
      "label": "银州区"
    }, {
      "value": "清河区",
      "label": "清河区"
    }, {
      "value": "铁岭县",
      "label": "铁岭县"
    }, {
      "value": "西丰县",
      "label": "西丰县"
    }, {
      "value": "昌图县",
      "label": "昌图县"
    }, {
      "value": "调兵山市",
      "label": "调兵山市"
    }, {
      "value": "开原市",
      "label": "开原市"
    }]
  }, {
    "value": "朝阳市",
    "label": "朝阳市",
    "children": [{
      "value": "双塔区",
      "label": "双塔区"
    }, {
      "value": "龙城区",
      "label": "龙城区"
    }, {
      "value": "朝阳县",
      "label": "朝阳县"
    }, {
      "value": "建平县",
      "label": "建平县"
    }, {
      "value": "喀喇沁左翼蒙古族自治县",
      "label": "喀喇沁左翼蒙古族自治县"
    }, {
      "value": "北票市",
      "label": "北票市"
    }, {
      "value": "凌源市",
      "label": "凌源市"
    }]
  }, {
    "value": "葫芦岛市",
    "label": "葫芦岛市",
    "children": [{
      "value": "连山区",
      "label": "连山区"
    }, {
      "value": "龙港区",
      "label": "龙港区"
    }, {
      "value": "南票区",
      "label": "南票区"
    }, {
      "value": "绥中县",
      "label": "绥中县"
    }, {
      "value": "建昌县",
      "label": "建昌县"
    }, {
      "value": "兴城市",
      "label": "兴城市"
    }]
  }]
}, {
  "value": "吉林省",
  "label": "吉林省",
  "children": [{
    "value": "长春市",
    "label": "长春市",
    "children": [{
      "value": "南关区",
      "label": "南关区"
    }, {
      "value": "宽城区",
      "label": "宽城区"
    }, {
      "value": "朝阳区",
      "label": "朝阳区"
    }, {
      "value": "二道区",
      "label": "二道区"
    }, {
      "value": "绿园区",
      "label": "绿园区"
    }, {
      "value": "双阳区",
      "label": "双阳区"
    }, {
      "value": "九台区",
      "label": "九台区"
    }, {
      "value": "农安县",
      "label": "农安县"
    }, {
      "value": "榆树市",
      "label": "榆树市"
    }, {
      "value": "德惠市",
      "label": "德惠市"
    }]
  }, {
    "value": "吉林市",
    "label": "吉林市",
    "children": [{
      "value": "昌邑区",
      "label": "昌邑区"
    }, {
      "value": "龙潭区",
      "label": "龙潭区"
    }, {
      "value": "船营区",
      "label": "船营区"
    }, {
      "value": "丰满区",
      "label": "丰满区"
    }, {
      "value": "永吉县",
      "label": "永吉县"
    }, {
      "value": "蛟河市",
      "label": "蛟河市"
    }, {
      "value": "桦甸市",
      "label": "桦甸市"
    }, {
      "value": "舒兰市",
      "label": "舒兰市"
    }, {
      "value": "磐石市",
      "label": "磐石市"
    }]
  }, {
    "value": "四平市",
    "label": "四平市",
    "children": [{
      "value": "铁西区",
      "label": "铁西区"
    }, {
      "value": "铁东区",
      "label": "铁东区"
    }, {
      "value": "梨树县",
      "label": "梨树县"
    }, {
      "value": "伊通满族自治县",
      "label": "伊通满族自治县"
    }, {
      "value": "公主岭市",
      "label": "公主岭市"
    }, {
      "value": "双辽市",
      "label": "双辽市"
    }]
  }, {
    "value": "辽源市",
    "label": "辽源市",
    "children": [{
      "value": "龙山区",
      "label": "龙山区"
    }, {
      "value": "西安区",
      "label": "西安区"
    }, {
      "value": "东丰县",
      "label": "东丰县"
    }, {
      "value": "东辽县",
      "label": "东辽县"
    }]
  }, {
    "value": "通化市",
    "label": "通化市",
    "children": [{
      "value": "东昌区",
      "label": "东昌区"
    }, {
      "value": "二道江区",
      "label": "二道江区"
    }, {
      "value": "通化县",
      "label": "通化县"
    }, {
      "value": "辉南县",
      "label": "辉南县"
    }, {
      "value": "柳河县",
      "label": "柳河县"
    }, {
      "value": "梅河口市",
      "label": "梅河口市"
    }, {
      "value": "集安市",
      "label": "集安市"
    }]
  }, {
    "value": "白山市",
    "label": "白山市",
    "children": [{
      "value": "浑江区",
      "label": "浑江区"
    }, {
      "value": "江源区",
      "label": "江源区"
    }, {
      "value": "抚松县",
      "label": "抚松县"
    }, {
      "value": "靖宇县",
      "label": "靖宇县"
    }, {
      "value": "长白朝鲜族自治县",
      "label": "长白朝鲜族自治县"
    }, {
      "value": "临江市",
      "label": "临江市"
    }]
  }, {
    "value": "松原市",
    "label": "松原市",
    "children": [{
      "value": "宁江区",
      "label": "宁江区"
    }, {
      "value": "前郭尔罗斯蒙古族自治县",
      "label": "前郭尔罗斯蒙古族自治县"
    }, {
      "value": "长岭县",
      "label": "长岭县"
    }, {
      "value": "乾安县",
      "label": "乾安县"
    }, {
      "value": "扶余市",
      "label": "扶余市"
    }]
  }, {
    "value": "白城市",
    "label": "白城市",
    "children": [{
      "value": "洮北区",
      "label": "洮北区"
    }, {
      "value": "洮北区",
      "label": "洮北区"
    }, {
      "value": "通榆县",
      "label": "通榆县"
    }, {
      "value": "洮南市",
      "label": "洮南市"
    }, {
      "value": "大安市",
      "label": "大安市"
    }]
  }, {
    "value": "延边朝鲜族自治州",
    "label": "延边朝鲜族自治州",
    "children": [{
      "value": "延吉市",
      "label": "延吉市"
    }, {
      "value": "图们市",
      "label": "图们市"
    }, {
      "value": "敦化市",
      "label": "敦化市"
    }, {
      "value": "珲春市",
      "label": "珲春市"
    }, {
      "value": "龙井市",
      "label": "龙井市"
    }, {
      "value": "和龙市",
      "label": "和龙市"
    }, {
      "value": "汪清县",
      "label": "汪清县"
    }, {
      "value": "安图县",
      "label": "安图县"
    }]
  }]
}, {
  "value": "黑龙江省",
  "label": "黑龙江省",
  "children": [{
    "value": "哈尔滨市",
    "label": "哈尔滨市",
    "children": [{
      "value": "道里区",
      "label": "道里区"
    }, {
      "value": "南岗区",
      "label": "南岗区"
    }, {
      "value": "道外区",
      "label": "道外区"
    }, {
      "value": "平房区",
      "label": "平房区"
    }, {
      "value": "松北区",
      "label": "松北区"
    }, {
      "value": "香坊区",
      "label": "香坊区"
    }, {
      "value": "呼兰区",
      "label": "呼兰区"
    }, {
      "value": "阿城区",
      "label": "阿城区"
    }, {
      "value": "双城区",
      "label": "双城区"
    }, {
      "value": "依兰县",
      "label": "依兰县"
    }, {
      "value": "方正县",
      "label": "方正县"
    }, {
      "value": "宾县",
      "label": "宾县"
    }, {
      "value": "巴彦县",
      "label": "巴彦县"
    }, {
      "value": "木兰县",
      "label": "木兰县"
    }, {
      "value": "通河县",
      "label": "通河县"
    }, {
      "value": "延寿县",
      "label": "延寿县"
    }, {
      "value": "尚志市",
      "label": "尚志市"
    }, {
      "value": "五常市",
      "label": "五常市"
    }]
  }, {
    "value": "齐齐哈尔市",
    "label": "齐齐哈尔市",
    "children": [{
      "value": "龙沙区",
      "label": "龙沙区"
    }, {
      "value": "建华区",
      "label": "建华区"
    }, {
      "value": "铁锋区",
      "label": "铁锋区"
    }, {
      "value": "昂昂溪区",
      "label": "昂昂溪区"
    }, {
      "value": "富拉尔基区",
      "label": "富拉尔基区"
    }, {
      "value": "碾子山区",
      "label": "碾子山区"
    }, {
      "value": "梅里斯达斡尔族区",
      "label": "梅里斯达斡尔族区"
    }, {
      "value": "龙江县",
      "label": "龙江县"
    }, {
      "value": "依安县",
      "label": "依安县"
    }, {
      "value": "泰来县",
      "label": "泰来县"
    }, {
      "value": "甘南县",
      "label": "甘南县"
    }, {
      "value": "富裕县",
      "label": "富裕县"
    }, {
      "value": "克山县",
      "label": "克山县"
    }, {
      "value": "克东县",
      "label": "克东县"
    }, {
      "value": "拜泉县",
      "label": "拜泉县"
    }, {
      "value": "讷河市",
      "label": "讷河市"
    }]
  }, {
    "value": "鸡西市",
    "label": "鸡西市",
    "children": [{
      "value": "鸡冠区",
      "label": "鸡冠区"
    }, {
      "value": "恒山区",
      "label": "恒山区"
    }, {
      "value": "滴道区",
      "label": "滴道区"
    }, {
      "value": "梨树区",
      "label": "梨树区"
    }, {
      "value": "城子河区",
      "label": "城子河区"
    }, {
      "value": "麻山区",
      "label": "麻山区"
    }, {
      "value": "鸡东县",
      "label": "鸡东县"
    }, {
      "value": "虎林市",
      "label": "虎林市"
    }, {
      "value": "密山市",
      "label": "密山市"
    }]
  }, {
    "value": "鹤岗市",
    "label": "鹤岗市",
    "children": [{
      "value": "向阳区",
      "label": "向阳区"
    }, {
      "value": "工农区",
      "label": "工农区"
    }, {
      "value": "南山区",
      "label": "南山区"
    }, {
      "value": "兴安区",
      "label": "兴安区"
    }, {
      "value": "东山区",
      "label": "东山区"
    }, {
      "value": "兴山区",
      "label": "兴山区"
    }, {
      "value": "萝北县",
      "label": "萝北县"
    }, {
      "value": "绥滨县",
      "label": "绥滨县"
    }]
  }, {
    "value": "双鸭山市",
    "label": "双鸭山市",
    "children": [{
      "value": "尖山区",
      "label": "尖山区"
    }, {
      "value": "岭东区",
      "label": "岭东区"
    }, {
      "value": "四方台区",
      "label": "四方台区"
    }, {
      "value": "宝山区",
      "label": "宝山区"
    }, {
      "value": "集贤县",
      "label": "集贤县"
    }, {
      "value": "友谊县",
      "label": "友谊县"
    }, {
      "value": "宝清县",
      "label": "宝清县"
    }, {
      "value": "饶河县",
      "label": "饶河县"
    }]
  }, {
    "value": "大庆市",
    "label": "大庆市",
    "children": [{
      "value": "萨尔图区",
      "label": "萨尔图区"
    }, {
      "value": "龙凤区",
      "label": "龙凤区"
    }, {
      "value": "让胡路区",
      "label": "让胡路区"
    }, {
      "value": "红岗区",
      "label": "红岗区"
    }, {
      "value": "大同区",
      "label": "大同区"
    }, {
      "value": "肇州县",
      "label": "肇州县"
    }, {
      "value": "肇源县",
      "label": "肇源县"
    }, {
      "value": "林甸县",
      "label": "林甸县"
    }, {
      "value": "杜尔伯特蒙古族自治县",
      "label": "杜尔伯特蒙古族自治县"
    }]
  }, {
    "value": "伊春市",
    "label": "伊春市",
    "children": [{
      "value": "伊春区",
      "label": "伊春区"
    }, {
      "value": "南岔区",
      "label": "南岔区"
    }, {
      "value": "友好区",
      "label": "友好区"
    }, {
      "value": "西林区",
      "label": "西林区"
    }, {
      "value": "翠峦区",
      "label": "翠峦区"
    }, {
      "value": "新青区",
      "label": "新青区"
    }, {
      "value": "美溪区",
      "label": "美溪区"
    }, {
      "value": "金山屯区",
      "label": "金山屯区"
    }, {
      "value": "五营区",
      "label": "五营区"
    }, {
      "value": "乌马河区",
      "label": "乌马河区"
    }, {
      "value": "汤旺河区",
      "label": "汤旺河区"
    }, {
      "value": "带岭区",
      "label": "带岭区"
    }, {
      "value": "乌伊岭区",
      "label": "乌伊岭区"
    }, {
      "value": "红星区",
      "label": "红星区"
    }, {
      "value": "上甘岭区",
      "label": "上甘岭区"
    }, {
      "value": "嘉荫县",
      "label": "嘉荫县"
    }, {
      "value": "铁力市",
      "label": "铁力市"
    }]
  }, {
    "value": "佳木斯市",
    "label": "佳木斯市",
    "children": [{
      "value": "向阳区",
      "label": "向阳区"
    }, {
      "value": "前进区",
      "label": "前进区"
    }, {
      "value": "东风区",
      "label": "东风区"
    }, {
      "value": "郊区",
      "label": "郊区"
    }, {
      "value": "桦南县",
      "label": "桦南县"
    }, {
      "value": "桦川县",
      "label": "桦川县"
    }, {
      "value": "汤原县",
      "label": "汤原县"
    }, {
      "value": "同江市",
      "label": "同江市"
    }, {
      "value": "富锦市",
      "label": "富锦市"
    }, {
      "value": "抚远市",
      "label": "抚远市"
    }]
  }, {
    "value": "七台河市",
    "label": "七台河市",
    "children": [{
      "value": "新兴区",
      "label": "新兴区"
    }, {
      "value": "桃山区",
      "label": "桃山区"
    }, {
      "value": "茄子河区",
      "label": "茄子河区"
    }, {
      "value": "勃利县",
      "label": "勃利县"
    }]
  }, {
    "value": "牡丹江市",
    "label": "牡丹江市",
    "children": [{
      "value": "东安区",
      "label": "东安区"
    }, {
      "value": "阳明区",
      "label": "阳明区"
    }, {
      "value": "爱民区",
      "label": "爱民区"
    }, {
      "value": "西安区",
      "label": "西安区"
    }, {
      "value": "林口县",
      "label": "林口县"
    }, {
      "value": "绥芬河市",
      "label": "绥芬河市"
    }, {
      "value": "海林市",
      "label": "海林市"
    }, {
      "value": "宁安市",
      "label": "宁安市"
    }, {
      "value": "穆棱市",
      "label": "穆棱市"
    }, {
      "value": "东宁市",
      "label": "东宁市"
    }]
  }, {
    "value": "黑河市",
    "label": "黑河市",
    "children": [{
      "value": "爱辉区",
      "label": "爱辉区"
    }, {
      "value": "嫩江县",
      "label": "嫩江县"
    }, {
      "value": "逊克县",
      "label": "逊克县"
    }, {
      "value": "孙吴县",
      "label": "孙吴县"
    }, {
      "value": "北安市",
      "label": "北安市"
    }, {
      "value": "五大连池市",
      "label": "五大连池市"
    }]
  }, {
    "value": "绥化市",
    "label": "绥化市",
    "children": [{
      "value": "北林区",
      "label": "北林区"
    }, {
      "value": "望奎县",
      "label": "望奎县"
    }, {
      "value": "兰西县",
      "label": "兰西县"
    }, {
      "value": "青冈县",
      "label": "青冈县"
    }, {
      "value": "庆安县",
      "label": "庆安县"
    }, {
      "value": "明水县",
      "label": "明水县"
    }, {
      "value": "绥棱县",
      "label": "绥棱县"
    }, {
      "value": "安达市",
      "label": "安达市"
    }, {
      "value": "肇东市",
      "label": "肇东市"
    }, {
      "value": "海伦市",
      "label": "海伦市"
    }]
  }, {
    "value": "大兴安岭地区",
    "label": "大兴安岭地区",
    "children": [{
      "value": "呼玛县",
      "label": "呼玛县"
    }, {
      "value": "塔河县",
      "label": "塔河县"
    }, {
      "value": "漠河县",
      "label": "漠河县"
    }]
  }]
}, {
  "value": "上海市",
  "label": "上海市",
  "children": [{
    "value": "市辖区",
    "label": "市辖区",
    "children": [{
      "value": "黄浦区",
      "label": "黄浦区"
    }, {
      "value": "徐汇区",
      "label": "徐汇区"
    }, {
      "value": "长宁区",
      "label": "长宁区"
    }, {
      "value": "静安区",
      "label": "静安区"
    }, {
      "value": "普陀区",
      "label": "普陀区"
    }, {
      "value": "虹口区",
      "label": "虹口区"
    }, {
      "value": "杨浦区",
      "label": "杨浦区"
    }, {
      "value": "闵行区",
      "label": "闵行区"
    }, {
      "value": "宝山区",
      "label": "宝山区"
    }, {
      "value": "嘉定区",
      "label": "嘉定区"
    }, {
      "value": "浦东新区",
      "label": "浦东新区"
    }, {
      "value": "金山区",
      "label": "金山区"
    }, {
      "value": "松江区",
      "label": "松江区"
    }, {
      "value": "青浦区",
      "label": "青浦区"
    }, {
      "value": "奉贤区",
      "label": "奉贤区"
    }, {
      "value": "崇明区",
      "label": "崇明区"
    }]
  }]
}, {
  "value": "江苏省",
  "label": "江苏省",
  "children": [{
    "value": "南京市",
    "label": "南京市",
    "children": [{
      "value": "玄武区",
      "label": "玄武区"
    }, {
      "value": "秦淮区",
      "label": "秦淮区"
    }, {
      "value": "建邺区",
      "label": "建邺区"
    }, {
      "value": "鼓楼区",
      "label": "鼓楼区"
    }, {
      "value": "浦口区",
      "label": "浦口区"
    }, {
      "value": "栖霞区",
      "label": "栖霞区"
    }, {
      "value": "雨花台区",
      "label": "雨花台区"
    }, {
      "value": "江宁区",
      "label": "江宁区"
    }, {
      "value": "六合区",
      "label": "六合区"
    }, {
      "value": "溧水区",
      "label": "溧水区"
    }, {
      "value": "高淳区",
      "label": "高淳区"
    }]
  }, {
    "value": "无锡市",
    "label": "无锡市",
    "children": [{
      "value": "锡山区",
      "label": "锡山区"
    }, {
      "value": "惠山区",
      "label": "惠山区"
    }, {
      "value": "滨湖区",
      "label": "滨湖区"
    }, {
      "value": "梁溪区",
      "label": "梁溪区"
    }, {
      "value": "新吴区",
      "label": "新吴区"
    }, {
      "value": "江阴市",
      "label": "江阴市"
    }, {
      "value": "宜兴市",
      "label": "宜兴市"
    }]
  }, {
    "value": "徐州市",
    "label": "徐州市",
    "children": [{
      "value": "鼓楼区",
      "label": "鼓楼区"
    }, {
      "value": "云龙区",
      "label": "云龙区"
    }, {
      "value": "贾汪区",
      "label": "贾汪区"
    }, {
      "value": "泉山区",
      "label": "泉山区"
    }, {
      "value": "铜山区",
      "label": "铜山区"
    }, {
      "value": "丰县",
      "label": "丰县"
    }, {
      "value": "沛县",
      "label": "沛县"
    }, {
      "value": "睢宁县",
      "label": "睢宁县"
    }, {
      "value": "新沂市",
      "label": "新沂市"
    }, {
      "value": "邳州市",
      "label": "邳州市"
    }]
  }, {
    "value": "常州市",
    "label": "常州市",
    "children": [{
      "value": "天宁区",
      "label": "天宁区"
    }, {
      "value": "钟楼区",
      "label": "钟楼区"
    }, {
      "value": "新北区",
      "label": "新北区"
    }, {
      "value": "武进区",
      "label": "武进区"
    }, {
      "value": "金坛区",
      "label": "金坛区"
    }, {
      "value": "溧阳市",
      "label": "溧阳市"
    }]
  }, {
    "value": "苏州市",
    "label": "苏州市",
    "children": [{
      "value": "虎丘区",
      "label": "虎丘区"
    }, {
      "value": "吴中区",
      "label": "吴中区"
    }, {
      "value": "相城区",
      "label": "相城区"
    }, {
      "value": "姑苏区",
      "label": "姑苏区"
    }, {
      "value": "吴江区",
      "label": "吴江区"
    }, {
      "value": "常熟市",
      "label": "常熟市"
    }, {
      "value": "张家港市",
      "label": "张家港市"
    }, {
      "value": "昆山市",
      "label": "昆山市"
    }, {
      "value": "太仓市",
      "label": "太仓市"
    }]
  }, {
    "value": "南通市",
    "label": "南通市",
    "children": [{
      "value": "崇川区",
      "label": "崇川区"
    }, {
      "value": "港闸区",
      "label": "港闸区"
    }, {
      "value": "通州区",
      "label": "通州区"
    }, {
      "value": "海安县",
      "label": "海安县"
    }, {
      "value": "如东县",
      "label": "如东县"
    }, {
      "value": "启东市",
      "label": "启东市"
    }, {
      "value": "如皋市",
      "label": "如皋市"
    }, {
      "value": "海门市",
      "label": "海门市"
    }]
  }, {
    "value": "连云港市",
    "label": "连云港市",
    "children": [{
      "value": "连云区",
      "label": "连云区"
    }, {
      "value": "海州区",
      "label": "海州区"
    }, {
      "value": "赣榆区",
      "label": "赣榆区"
    }, {
      "value": "东海县",
      "label": "东海县"
    }, {
      "value": "灌云县",
      "label": "灌云县"
    }, {
      "value": "灌南县",
      "label": "灌南县"
    }]
  }, {
    "value": "淮安市",
    "label": "淮安市",
    "children": [{
      "value": "淮安区",
      "label": "淮安区"
    }, {
      "value": "淮阴区",
      "label": "淮阴区"
    }, {
      "value": "清江浦区",
      "label": "清江浦区"
    }, {
      "value": "洪泽区",
      "label": "洪泽区"
    }, {
      "value": "涟水县",
      "label": "涟水县"
    }, {
      "value": "盱眙县",
      "label": "盱眙县"
    }, {
      "value": "金湖县",
      "label": "金湖县"
    }]
  }, {
    "value": "盐城市",
    "label": "盐城市",
    "children": [{
      "value": "亭湖区",
      "label": "亭湖区"
    }, {
      "value": "盐都区",
      "label": "盐都区"
    }, {
      "value": "大丰区",
      "label": "大丰区"
    }, {
      "value": "响水县",
      "label": "响水县"
    }, {
      "value": "滨海县",
      "label": "滨海县"
    }, {
      "value": "阜宁县",
      "label": "阜宁县"
    }, {
      "value": "射阳县",
      "label": "射阳县"
    }, {
      "value": "建湖县",
      "label": "建湖县"
    }, {
      "value": "东台市",
      "label": "东台市"
    }]
  }, {
    "value": "扬州市",
    "label": "扬州市",
    "children": [{
      "value": "广陵区",
      "label": "广陵区"
    }, {
      "value": "邗江区",
      "label": "邗江区"
    }, {
      "value": "江都区",
      "label": "江都区"
    }, {
      "value": "宝应县",
      "label": "宝应县"
    }, {
      "value": "仪征市",
      "label": "仪征市"
    }, {
      "value": "高邮市",
      "label": "高邮市"
    }]
  }, {
    "value": "镇江市",
    "label": "镇江市",
    "children": [{
      "value": "京口区",
      "label": "京口区"
    }, {
      "value": "润州区",
      "label": "润州区"
    }, {
      "value": "丹徒区",
      "label": "丹徒区"
    }, {
      "value": "丹阳市",
      "label": "丹阳市"
    }, {
      "value": "扬中市",
      "label": "扬中市"
    }, {
      "value": "句容市",
      "label": "句容市"
    }]
  }, {
    "value": "泰州市",
    "label": "泰州市",
    "children": [{
      "value": "海陵区",
      "label": "海陵区"
    }, {
      "value": "高港区",
      "label": "高港区"
    }, {
      "value": "姜堰区",
      "label": "姜堰区"
    }, {
      "value": "兴化市",
      "label": "兴化市"
    }, {
      "value": "靖江市",
      "label": "靖江市"
    }, {
      "value": "泰兴市",
      "label": "泰兴市"
    }]
  }, {
    "value": "宿迁市",
    "label": "宿迁市",
    "children": [{
      "value": "宿城区",
      "label": "宿城区"
    }, {
      "value": "宿豫区",
      "label": "宿豫区"
    }, {
      "value": "沭阳县",
      "label": "沭阳县"
    }, {
      "value": "泗阳县",
      "label": "泗阳县"
    }, {
      "value": "泗洪县",
      "label": "泗洪县"
    }]
  }]
}, {
  "value": "浙江省",
  "label": "浙江省",
  "children": [{
    "value": "杭州市",
    "label": "杭州市",
    "children": [{
      "value": "上城区",
      "label": "上城区"
    }, {
      "value": "下城区",
      "label": "下城区"
    }, {
      "value": "江干区",
      "label": "江干区"
    }, {
      "value": "拱墅区",
      "label": "拱墅区"
    }, {
      "value": "西湖区",
      "label": "西湖区"
    }, {
      "value": "滨江区",
      "label": "滨江区"
    }, {
      "value": "萧山区",
      "label": "萧山区"
    }, {
      "value": "余杭区",
      "label": "余杭区"
    }, {
      "value": "富阳区",
      "label": "富阳区"
    }, {
      "value": "桐庐县",
      "label": "桐庐县"
    }, {
      "value": "淳安县",
      "label": "淳安县"
    }, {
      "value": "建德市",
      "label": "建德市"
    }, {
      "value": "临安市",
      "label": "临安市"
    }]
  }, {
    "value": "宁波市",
    "label": "宁波市",
    "children": [{
      "value": "海曙区",
      "label": "海曙区"
    }, {
      "value": "江东区",
      "label": "江东区"
    }, {
      "value": "江北区",
      "label": "江北区"
    }, {
      "value": "北仑区",
      "label": "北仑区"
    }, {
      "value": "镇海区",
      "label": "镇海区"
    }, {
      "value": "鄞州区",
      "label": "鄞州区"
    }, {
      "value": "象山县",
      "label": "象山县"
    }, {
      "value": "宁海县",
      "label": "宁海县"
    }, {
      "value": "余姚市",
      "label": "余姚市"
    }, {
      "value": "慈溪市",
      "label": "慈溪市"
    }, {
      "value": "奉化市",
      "label": "奉化市"
    }]
  }, {
    "value": "温州市",
    "label": "温州市",
    "children": [{
      "value": "鹿城区",
      "label": "鹿城区"
    }, {
      "value": "龙湾区",
      "label": "龙湾区"
    }, {
      "value": "瓯海区",
      "label": "瓯海区"
    }, {
      "value": "洞头区",
      "label": "洞头区"
    }, {
      "value": "永嘉县",
      "label": "永嘉县"
    }, {
      "value": "平阳县",
      "label": "平阳县"
    }, {
      "value": "苍南县",
      "label": "苍南县"
    }, {
      "value": "文成县",
      "label": "文成县"
    }, {
      "value": "泰顺县",
      "label": "泰顺县"
    }, {
      "value": "瑞安市",
      "label": "瑞安市"
    }, {
      "value": "乐清市",
      "label": "乐清市"
    }]
  }, {
    "value": "嘉兴市",
    "label": "嘉兴市",
    "children": [{
      "value": "南湖区",
      "label": "南湖区"
    }, {
      "value": "秀洲区",
      "label": "秀洲区"
    }, {
      "value": "嘉善县",
      "label": "嘉善县"
    }, {
      "value": "海盐县",
      "label": "海盐县"
    }, {
      "value": "海宁市",
      "label": "海宁市"
    }, {
      "value": "平湖市",
      "label": "平湖市"
    }, {
      "value": "桐乡市",
      "label": "桐乡市"
    }]
  }, {
    "value": "湖州市",
    "label": "湖州市",
    "children": [{
      "value": "吴兴区",
      "label": "吴兴区"
    }, {
      "value": "南浔区",
      "label": "南浔区"
    }, {
      "value": "德清县",
      "label": "德清县"
    }, {
      "value": "长兴县",
      "label": "长兴县"
    }, {
      "value": "安吉县",
      "label": "安吉县"
    }]
  }, {
    "value": "绍兴市",
    "label": "绍兴市",
    "children": [{
      "value": "越城区",
      "label": "越城区"
    }, {
      "value": "柯桥区",
      "label": "柯桥区"
    }, {
      "value": "上虞区",
      "label": "上虞区"
    }, {
      "value": "新昌县",
      "label": "新昌县"
    }, {
      "value": "诸暨市",
      "label": "诸暨市"
    }, {
      "value": "嵊州市",
      "label": "嵊州市"
    }]
  }, {
    "value": "金华市",
    "label": "金华市",
    "children": [{
      "value": "婺城区",
      "label": "婺城区"
    }, {
      "value": "金东区",
      "label": "金东区"
    }, {
      "value": "武义县",
      "label": "武义县"
    }, {
      "value": "浦江县",
      "label": "浦江县"
    }, {
      "value": "磐安县",
      "label": "磐安县"
    }, {
      "value": "兰溪市",
      "label": "兰溪市"
    }, {
      "value": "义乌市",
      "label": "义乌市"
    }, {
      "value": "东阳市",
      "label": "东阳市"
    }, {
      "value": "永康市",
      "label": "永康市"
    }]
  }, {
    "value": "衢州市",
    "label": "衢州市",
    "children": [{
      "value": "柯城区",
      "label": "柯城区"
    }, {
      "value": "衢江区",
      "label": "衢江区"
    }, {
      "value": "常山县",
      "label": "常山县"
    }, {
      "value": "开化县",
      "label": "开化县"
    }, {
      "value": "龙游县",
      "label": "龙游县"
    }, {
      "value": "江山市",
      "label": "江山市"
    }]
  }, {
    "value": "舟山市",
    "label": "舟山市",
    "children": [{
      "value": "定海区",
      "label": "定海区"
    }, {
      "value": "普陀区",
      "label": "普陀区"
    }, {
      "value": "岱山县",
      "label": "岱山县"
    }, {
      "value": "嵊泗县",
      "label": "嵊泗县"
    }]
  }, {
    "value": "台州市",
    "label": "台州市",
    "children": [{
      "value": "椒江区",
      "label": "椒江区"
    }, {
      "value": "黄岩区",
      "label": "黄岩区"
    }, {
      "value": "路桥区",
      "label": "路桥区"
    }, {
      "value": "玉环县",
      "label": "玉环县"
    }, {
      "value": "三门县",
      "label": "三门县"
    }, {
      "value": "天台县",
      "label": "天台县"
    }, {
      "value": "仙居县",
      "label": "仙居县"
    }, {
      "value": "温岭市",
      "label": "温岭市"
    }, {
      "value": "临海市",
      "label": "临海市"
    }]
  }, {
    "value": "丽水市",
    "label": "丽水市",
    "children": [{
      "value": "莲都区",
      "label": "莲都区"
    }, {
      "value": "青田县",
      "label": "青田县"
    }, {
      "value": "缙云县",
      "label": "缙云县"
    }, {
      "value": "遂昌县",
      "label": "遂昌县"
    }, {
      "value": "松阳县",
      "label": "松阳县"
    }, {
      "value": "云和县",
      "label": "云和县"
    }, {
      "value": "庆元县",
      "label": "庆元县"
    }, {
      "value": "景宁畲族自治县",
      "label": "景宁畲族自治县"
    }, {
      "value": "龙泉市",
      "label": "龙泉市"
    }]
  }]
}, {
  "value": "安徽省",
  "label": "安徽省",
  "children": [{
    "value": "合肥市",
    "label": "合肥市",
    "children": [{
      "value": "瑶海区",
      "label": "瑶海区"
    }, {
      "value": "庐阳区",
      "label": "庐阳区"
    }, {
      "value": "蜀山区",
      "label": "蜀山区"
    }, {
      "value": "包河区",
      "label": "包河区"
    }, {
      "value": "长丰县",
      "label": "长丰县"
    }, {
      "value": "肥东县",
      "label": "肥东县"
    }, {
      "value": "肥西县",
      "label": "肥西县"
    }, {
      "value": "庐江县",
      "label": "庐江县"
    }, {
      "value": "巢湖市",
      "label": "巢湖市"
    }]
  }, {
    "value": "芜湖市",
    "label": "芜湖市",
    "children": [{
      "value": "镜湖区",
      "label": "镜湖区"
    }, {
      "value": "弋江区",
      "label": "弋江区"
    }, {
      "value": "鸠江区",
      "label": "鸠江区"
    }, {
      "value": "三山区",
      "label": "三山区"
    }, {
      "value": "芜湖县",
      "label": "芜湖县"
    }, {
      "value": "繁昌县",
      "label": "繁昌县"
    }, {
      "value": "南陵县",
      "label": "南陵县"
    }, {
      "value": "无为县",
      "label": "无为县"
    }]
  }, {
    "value": "蚌埠市",
    "label": "蚌埠市",
    "children": [{
      "value": "龙子湖区",
      "label": "龙子湖区"
    }, {
      "value": "蚌山区",
      "label": "蚌山区"
    }, {
      "value": "禹会区",
      "label": "禹会区"
    }, {
      "value": "淮上区",
      "label": "淮上区"
    }, {
      "value": "怀远县",
      "label": "怀远县"
    }, {
      "value": "五河县",
      "label": "五河县"
    }, {
      "value": "固镇县",
      "label": "固镇县"
    }]
  }, {
    "value": "淮南市",
    "label": "淮南市",
    "children": [{
      "value": "大通区",
      "label": "大通区"
    }, {
      "value": "田家庵区",
      "label": "田家庵区"
    }, {
      "value": "谢家集区",
      "label": "谢家集区"
    }, {
      "value": "八公山区",
      "label": "八公山区"
    }, {
      "value": "潘集区",
      "label": "潘集区"
    }, {
      "value": "凤台县",
      "label": "凤台县"
    }, {
      "value": "寿县",
      "label": "寿县"
    }]
  }, {
    "value": "马鞍山市",
    "label": "马鞍山市",
    "children": [{
      "value": "花山区",
      "label": "花山区"
    }, {
      "value": "雨山区",
      "label": "雨山区"
    }, {
      "value": "博望区",
      "label": "博望区"
    }, {
      "value": "当涂县",
      "label": "当涂县"
    }, {
      "value": "含山县",
      "label": "含山县"
    }, {
      "value": "和县",
      "label": "和县"
    }]
  }, {
    "value": "淮北市",
    "label": "淮北市",
    "children": [{
      "value": "杜集区",
      "label": "杜集区"
    }, {
      "value": "相山区",
      "label": "相山区"
    }, {
      "value": "烈山区",
      "label": "烈山区"
    }, {
      "value": "濉溪县",
      "label": "濉溪县"
    }]
  }, {
    "value": "铜陵市",
    "label": "铜陵市",
    "children": [{
      "value": "铜官区",
      "label": "铜官区"
    }, {
      "value": "义安区",
      "label": "义安区"
    }, {
      "value": "郊区",
      "label": "郊区"
    }, {
      "value": "枞阳县",
      "label": "枞阳县"
    }]
  }, {
    "value": "安庆市",
    "label": "安庆市",
    "children": [{
      "value": "迎江区",
      "label": "迎江区"
    }, {
      "value": "大观区",
      "label": "大观区"
    }, {
      "value": "宜秀区",
      "label": "宜秀区"
    }, {
      "value": "怀宁县",
      "label": "怀宁县"
    }, {
      "value": "潜山县",
      "label": "潜山县"
    }, {
      "value": "太湖县",
      "label": "太湖县"
    }, {
      "value": "宿松县",
      "label": "宿松县"
    }, {
      "value": "望江县",
      "label": "望江县"
    }, {
      "value": "岳西县",
      "label": "岳西县"
    }, {
      "value": "桐城市",
      "label": "桐城市"
    }]
  }, {
    "value": "黄山市",
    "label": "黄山市",
    "children": [{
      "value": "屯溪区",
      "label": "屯溪区"
    }, {
      "value": "黄山区",
      "label": "黄山区"
    }, {
      "value": "徽州区",
      "label": "徽州区"
    }, {
      "value": "歙县",
      "label": "歙县"
    }, {
      "value": "休宁县",
      "label": "休宁县"
    }, {
      "value": "黟县",
      "label": "黟县"
    }, {
      "value": "祁门县",
      "label": "祁门县"
    }]
  }, {
    "value": "滁州市",
    "label": "滁州市",
    "children": [{
      "value": "琅琊区",
      "label": "琅琊区"
    }, {
      "value": "南谯区",
      "label": "南谯区"
    }, {
      "value": "来安县",
      "label": "来安县"
    }, {
      "value": "全椒县",
      "label": "全椒县"
    }, {
      "value": "定远县",
      "label": "定远县"
    }, {
      "value": "凤阳县",
      "label": "凤阳县"
    }, {
      "value": "天长市",
      "label": "天长市"
    }, {
      "value": "明光市",
      "label": "明光市"
    }]
  }, {
    "value": "阜阳市",
    "label": "阜阳市",
    "children": [{
      "value": "颍州区",
      "label": "颍州区"
    }, {
      "value": "颍东区",
      "label": "颍东区"
    }, {
      "value": "颍泉区",
      "label": "颍泉区"
    }, {
      "value": "临泉县",
      "label": "临泉县"
    }, {
      "value": "太和县",
      "label": "太和县"
    }, {
      "value": "阜南县",
      "label": "阜南县"
    }, {
      "value": "颍上县",
      "label": "颍上县"
    }, {
      "value": "界首市",
      "label": "界首市"
    }]
  }, {
    "value": "宿州市",
    "label": "宿州市",
    "children": [{
      "value": "埇桥区",
      "label": "埇桥区"
    }, {
      "value": "砀山县",
      "label": "砀山县"
    }, {
      "value": "萧县",
      "label": "萧县"
    }, {
      "value": "灵璧县",
      "label": "灵璧县"
    }, {
      "value": "泗县",
      "label": "泗县"
    }]
  }, {
    "value": "六安市",
    "label": "六安市",
    "children": [{
      "value": "金安区",
      "label": "金安区"
    }, {
      "value": "裕安区",
      "label": "裕安区"
    }, {
      "value": "叶集区",
      "label": "叶集区"
    }, {
      "value": "霍邱县",
      "label": "霍邱县"
    }, {
      "value": "舒城县",
      "label": "舒城县"
    }, {
      "value": "金寨县",
      "label": "金寨县"
    }, {
      "value": "霍山县",
      "label": "霍山县"
    }]
  }, {
    "value": "亳州市",
    "label": "亳州市",
    "children": [{
      "value": "谯城区",
      "label": "谯城区"
    }, {
      "value": "涡阳县",
      "label": "涡阳县"
    }, {
      "value": "蒙城县",
      "label": "蒙城县"
    }, {
      "value": "利辛县",
      "label": "利辛县"
    }]
  }, {
    "value": "池州市",
    "label": "池州市",
    "children": [{
      "value": "贵池区",
      "label": "贵池区"
    }, {
      "value": "东至县",
      "label": "东至县"
    }, {
      "value": "石台县",
      "label": "石台县"
    }, {
      "value": "青阳县",
      "label": "青阳县"
    }]
  }, {
    "value": "宣城市",
    "label": "宣城市",
    "children": [{
      "value": "宣州区",
      "label": "宣州区"
    }, {
      "value": "郎溪县",
      "label": "郎溪县"
    }, {
      "value": "广德县",
      "label": "广德县"
    }, {
      "value": "泾县",
      "label": "泾县"
    }, {
      "value": "绩溪县",
      "label": "绩溪县"
    }, {
      "value": "旌德县",
      "label": "旌德县"
    }, {
      "value": "宁国市",
      "label": "宁国市"
    }]
  }]
}, {
  "value": "福建省",
  "label": "福建省",
  "children": [{
    "value": "福州市",
    "label": "福州市",
    "children": [{
      "value": "鼓楼区",
      "label": "鼓楼区"
    }, {
      "value": "台江区",
      "label": "台江区"
    }, {
      "value": "仓山区",
      "label": "仓山区"
    }, {
      "value": "马尾区",
      "label": "马尾区"
    }, {
      "value": "晋安区",
      "label": "晋安区"
    }, {
      "value": "闽侯县",
      "label": "闽侯县"
    }, {
      "value": "连江县",
      "label": "连江县"
    }, {
      "value": "罗源县",
      "label": "罗源县"
    }, {
      "value": "闽清县",
      "label": "闽清县"
    }, {
      "value": "永泰县",
      "label": "永泰县"
    }, {
      "value": "平潭县",
      "label": "平潭县"
    }, {
      "value": "福清市",
      "label": "福清市"
    }, {
      "value": "长乐市",
      "label": "长乐市"
    }]
  }, {
    "value": "厦门市",
    "label": "厦门市",
    "children": [{
      "value": "思明区",
      "label": "思明区"
    }, {
      "value": "海沧区",
      "label": "海沧区"
    }, {
      "value": "湖里区",
      "label": "湖里区"
    }, {
      "value": "集美区",
      "label": "集美区"
    }, {
      "value": "同安区",
      "label": "同安区"
    }, {
      "value": "翔安区",
      "label": "翔安区"
    }]
  }, {
    "value": "莆田市",
    "label": "莆田市",
    "children": [{
      "value": "城厢区",
      "label": "城厢区"
    }, {
      "value": "涵江区",
      "label": "涵江区"
    }, {
      "value": "荔城区",
      "label": "荔城区"
    }, {
      "value": "秀屿区",
      "label": "秀屿区"
    }, {
      "value": "仙游县",
      "label": "仙游县"
    }]
  }, {
    "value": "三明市",
    "label": "三明市",
    "children": [{
      "value": "梅列区",
      "label": "梅列区"
    }, {
      "value": "三元区",
      "label": "三元区"
    }, {
      "value": "明溪县",
      "label": "明溪县"
    }, {
      "value": "清流县",
      "label": "清流县"
    }, {
      "value": "宁化县",
      "label": "宁化县"
    }, {
      "value": "大田县",
      "label": "大田县"
    }, {
      "value": "尤溪县",
      "label": "尤溪县"
    }, {
      "value": "沙县",
      "label": "沙县"
    }, {
      "value": "将乐县",
      "label": "将乐县"
    }, {
      "value": "泰宁县",
      "label": "泰宁县"
    }, {
      "value": "建宁县",
      "label": "建宁县"
    }, {
      "value": "永安市",
      "label": "永安市"
    }]
  }, {
    "value": "泉州市",
    "label": "泉州市",
    "children": [{
      "value": "鲤城区",
      "label": "鲤城区"
    }, {
      "value": "丰泽区",
      "label": "丰泽区"
    }, {
      "value": "洛江区",
      "label": "洛江区"
    }, {
      "value": "泉港区",
      "label": "泉港区"
    }, {
      "value": "惠安县",
      "label": "惠安县"
    }, {
      "value": "安溪县",
      "label": "安溪县"
    }, {
      "value": "永春县",
      "label": "永春县"
    }, {
      "value": "德化县",
      "label": "德化县"
    }, {
      "value": "金门县",
      "label": "金门县"
    }, {
      "value": "石狮市",
      "label": "石狮市"
    }, {
      "value": "晋江市",
      "label": "晋江市"
    }, {
      "value": "南安市",
      "label": "南安市"
    }]
  }, {
    "value": "漳州市",
    "label": "漳州市",
    "children": [{
      "value": "芗城区",
      "label": "芗城区"
    }, {
      "value": "龙文区",
      "label": "龙文区"
    }, {
      "value": "云霄县",
      "label": "云霄县"
    }, {
      "value": "漳浦县",
      "label": "漳浦县"
    }, {
      "value": "诏安县",
      "label": "诏安县"
    }, {
      "value": "长泰县",
      "label": "长泰县"
    }, {
      "value": "东山县",
      "label": "东山县"
    }, {
      "value": "南靖县",
      "label": "南靖县"
    }, {
      "value": "平和县",
      "label": "平和县"
    }, {
      "value": "华安县",
      "label": "华安县"
    }, {
      "value": "龙海市",
      "label": "龙海市"
    }]
  }, {
    "value": "南平市",
    "label": "南平市",
    "children": [{
      "value": "延平区",
      "label": "延平区"
    }, {
      "value": "建阳区",
      "label": "建阳区"
    }, {
      "value": "顺昌县",
      "label": "顺昌县"
    }, {
      "value": "浦城县",
      "label": "浦城县"
    }, {
      "value": "光泽县",
      "label": "光泽县"
    }, {
      "value": "松溪县",
      "label": "松溪县"
    }, {
      "value": "政和县",
      "label": "政和县"
    }, {
      "value": "邵武市",
      "label": "邵武市"
    }, {
      "value": "武夷山市",
      "label": "武夷山市"
    }, {
      "value": "建瓯市",
      "label": "建瓯市"
    }]
  }, {
    "value": "龙岩市",
    "label": "龙岩市",
    "children": [{
      "value": "新罗区",
      "label": "新罗区"
    }, {
      "value": "永定区",
      "label": "永定区"
    }, {
      "value": "长汀县",
      "label": "长汀县"
    }, {
      "value": "上杭县",
      "label": "上杭县"
    }, {
      "value": "武平县",
      "label": "武平县"
    }, {
      "value": "连城县",
      "label": "连城县"
    }, {
      "value": "漳平市",
      "label": "漳平市"
    }]
  }, {
    "value": "宁德市",
    "label": "宁德市",
    "children": [{
      "value": "蕉城区",
      "label": "蕉城区"
    }, {
      "value": "霞浦县",
      "label": "霞浦县"
    }, {
      "value": "古田县",
      "label": "古田县"
    }, {
      "value": "屏南县",
      "label": "屏南县"
    }, {
      "value": "寿宁县",
      "label": "寿宁县"
    }, {
      "value": "周宁县",
      "label": "周宁县"
    }, {
      "value": "柘荣县",
      "label": "柘荣县"
    }, {
      "value": "福安市",
      "label": "福安市"
    }, {
      "value": "福鼎市",
      "label": "福鼎市"
    }]
  }]
}, {
  "value": "江西省",
  "label": "江西省",
  "children": [{
    "value": "南昌市",
    "label": "南昌市",
    "children": [{
      "value": "东湖区",
      "label": "东湖区"
    }, {
      "value": "西湖区",
      "label": "西湖区"
    }, {
      "value": "青云谱区",
      "label": "青云谱区"
    }, {
      "value": "湾里区",
      "label": "湾里区"
    }, {
      "value": "青山湖区",
      "label": "青山湖区"
    }, {
      "value": "新建区",
      "label": "新建区"
    }, {
      "value": "南昌县",
      "label": "南昌县"
    }, {
      "value": "安义县",
      "label": "安义县"
    }, {
      "value": "进贤县",
      "label": "进贤县"
    }]
  }, {
    "value": "景德镇市",
    "label": "景德镇市",
    "children": [{
      "value": "昌江区",
      "label": "昌江区"
    }, {
      "value": "珠山区",
      "label": "珠山区"
    }, {
      "value": "浮梁县",
      "label": "浮梁县"
    }, {
      "value": "乐平市",
      "label": "乐平市"
    }]
  }, {
    "value": "萍乡市",
    "label": "萍乡市",
    "children": [{
      "value": "安源区",
      "label": "安源区"
    }, {
      "value": "湘东区",
      "label": "湘东区"
    }, {
      "value": "莲花县",
      "label": "莲花县"
    }, {
      "value": "上栗县",
      "label": "上栗县"
    }, {
      "value": "芦溪县",
      "label": "芦溪县"
    }]
  }, {
    "value": "九江市",
    "label": "九江市",
    "children": [{
      "value": "濂溪区",
      "label": "濂溪区"
    }, {
      "value": "浔阳区",
      "label": "浔阳区"
    }, {
      "value": "九江县",
      "label": "九江县"
    }, {
      "value": "武宁县",
      "label": "武宁县"
    }, {
      "value": "修水县",
      "label": "修水县"
    }, {
      "value": "永修县",
      "label": "永修县"
    }, {
      "value": "德安县",
      "label": "德安县"
    }, {
      "value": "都昌县",
      "label": "都昌县"
    }, {
      "value": "湖口县",
      "label": "湖口县"
    }, {
      "value": "彭泽县",
      "label": "彭泽县"
    }, {
      "value": "瑞昌市",
      "label": "瑞昌市"
    }, {
      "value": "共青城市",
      "label": "共青城市"
    }, {
      "value": "庐山市",
      "label": "庐山市"
    }]
  }, {
    "value": "新余市",
    "label": "新余市",
    "children": [{
      "value": "渝水区",
      "label": "渝水区"
    }, {
      "value": "分宜县",
      "label": "分宜县"
    }]
  }, {
    "value": "鹰潭市",
    "label": "鹰潭市",
    "children": [{
      "value": "月湖区",
      "label": "月湖区"
    }, {
      "value": "余江县",
      "label": "余江县"
    }, {
      "value": "贵溪市",
      "label": "贵溪市"
    }]
  }, {
    "value": "赣州市",
    "label": "赣州市",
    "children": [{
      "value": "章贡区",
      "label": "章贡区"
    }, {
      "value": "南康区",
      "label": "南康区"
    }, {
      "value": "赣县",
      "label": "赣县"
    }, {
      "value": "信丰县",
      "label": "信丰县"
    }, {
      "value": "大余县",
      "label": "大余县"
    }, {
      "value": "上犹县",
      "label": "上犹县"
    }, {
      "value": "崇义县",
      "label": "崇义县"
    }, {
      "value": "安远县",
      "label": "安远县"
    }, {
      "value": "龙南县",
      "label": "龙南县"
    }, {
      "value": "定南县",
      "label": "定南县"
    }, {
      "value": "全南县",
      "label": "全南县"
    }, {
      "value": "宁都县",
      "label": "宁都县"
    }, {
      "value": "于都县",
      "label": "于都县"
    }, {
      "value": "兴国县",
      "label": "兴国县"
    }, {
      "value": "会昌县",
      "label": "会昌县"
    }, {
      "value": "寻乌县",
      "label": "寻乌县"
    }, {
      "value": "石城县",
      "label": "石城县"
    }, {
      "value": "瑞金市",
      "label": "瑞金市"
    }]
  }, {
    "value": "吉安市",
    "label": "吉安市",
    "children": [{
      "value": "吉州区",
      "label": "吉州区"
    }, {
      "value": "青原区",
      "label": "青原区"
    }, {
      "value": "吉安县",
      "label": "吉安县"
    }, {
      "value": "吉水县",
      "label": "吉水县"
    }, {
      "value": "峡江县",
      "label": "峡江县"
    }, {
      "value": "新干县",
      "label": "新干县"
    }, {
      "value": "永丰县",
      "label": "永丰县"
    }, {
      "value": "泰和县",
      "label": "泰和县"
    }, {
      "value": "遂川县",
      "label": "遂川县"
    }, {
      "value": "万安县",
      "label": "万安县"
    }, {
      "value": "安福县",
      "label": "安福县"
    }, {
      "value": "永新县",
      "label": "永新县"
    }, {
      "value": "井冈山市",
      "label": "井冈山市"
    }]
  }, {
    "value": "宜春市",
    "label": "宜春市",
    "children": [{
      "value": "袁州区",
      "label": "袁州区"
    }, {
      "value": "奉新县",
      "label": "奉新县"
    }, {
      "value": "万载县",
      "label": "万载县"
    }, {
      "value": "上高县",
      "label": "上高县"
    }, {
      "value": "宜丰县",
      "label": "宜丰县"
    }, {
      "value": "靖安县",
      "label": "靖安县"
    }, {
      "value": "铜鼓县",
      "label": "铜鼓县"
    }, {
      "value": "丰城市",
      "label": "丰城市"
    }, {
      "value": "樟树市",
      "label": "樟树市"
    }, {
      "value": "高安市",
      "label": "高安市"
    }]
  }, {
    "value": "抚州市",
    "label": "抚州市",
    "children": [{
      "value": "临川区",
      "label": "临川区"
    }, {
      "value": "南城县",
      "label": "南城县"
    }, {
      "value": "黎川县",
      "label": "黎川县"
    }, {
      "value": "南丰县",
      "label": "南丰县"
    }, {
      "value": "崇仁县",
      "label": "崇仁县"
    }, {
      "value": "乐安县",
      "label": "乐安县"
    }, {
      "value": "宜黄县",
      "label": "宜黄县"
    }, {
      "value": "金溪县",
      "label": "金溪县"
    }, {
      "value": "资溪县",
      "label": "资溪县"
    }, {
      "value": "东乡县",
      "label": "东乡县"
    }, {
      "value": "广昌县",
      "label": "广昌县"
    }]
  }, {
    "value": "上饶市",
    "label": "上饶市",
    "children": [{
      "value": "信州区",
      "label": "信州区"
    }, {
      "value": "广丰区",
      "label": "广丰区"
    }, {
      "value": "上饶县",
      "label": "上饶县"
    }, {
      "value": "玉山县",
      "label": "玉山县"
    }, {
      "value": "铅山县",
      "label": "铅山县"
    }, {
      "value": "横峰县",
      "label": "横峰县"
    }, {
      "value": "弋阳县",
      "label": "弋阳县"
    }, {
      "value": "余干县",
      "label": "余干县"
    }, {
      "value": "鄱阳县",
      "label": "鄱阳县"
    }, {
      "value": "万年县",
      "label": "万年县"
    }, {
      "value": "婺源县",
      "label": "婺源县"
    }, {
      "value": "德兴市",
      "label": "德兴市"
    }]
  }]
}, {
  "value": "山东省",
  "label": "山东省",
  "children": [{
    "value": "济南市",
    "label": "济南市",
    "children": [{
      "value": "历下区",
      "label": "历下区"
    }, {
      "value": "市中区",
      "label": "市中区"
    }, {
      "value": "槐荫区",
      "label": "槐荫区"
    }, {
      "value": "天桥区",
      "label": "天桥区"
    }, {
      "value": "历城区",
      "label": "历城区"
    }, {
      "value": "长清区",
      "label": "长清区"
    }, {
      "value": "平阴县",
      "label": "平阴县"
    }, {
      "value": "济阳县",
      "label": "济阳县"
    }, {
      "value": "商河县",
      "label": "商河县"
    }, {
      "value": "章丘市",
      "label": "章丘市"
    }]
  }, {
    "value": "青岛市",
    "label": "青岛市",
    "children": [{
      "value": "市南区",
      "label": "市南区"
    }, {
      "value": "市北区",
      "label": "市北区"
    }, {
      "value": "黄岛区",
      "label": "黄岛区"
    }, {
      "value": "崂山区",
      "label": "崂山区"
    }, {
      "value": "李沧区",
      "label": "李沧区"
    }, {
      "value": "城阳区",
      "label": "城阳区"
    }, {
      "value": "胶州市",
      "label": "胶州市"
    }, {
      "value": "即墨市",
      "label": "即墨市"
    }, {
      "value": "平度市",
      "label": "平度市"
    }, {
      "value": "莱西市",
      "label": "莱西市"
    }]
  }, {
    "value": "淄博市",
    "label": "淄博市",
    "children": [{
      "value": "淄川区",
      "label": "淄川区"
    }, {
      "value": "张店区",
      "label": "张店区"
    }, {
      "value": "博山区",
      "label": "博山区"
    }, {
      "value": "临淄区",
      "label": "临淄区"
    }, {
      "value": "周村区",
      "label": "周村区"
    }, {
      "value": "桓台县",
      "label": "桓台县"
    }, {
      "value": "高青县",
      "label": "高青县"
    }, {
      "value": "沂源县",
      "label": "沂源县"
    }]
  }, {
    "value": "枣庄市",
    "label": "枣庄市",
    "children": [{
      "value": "市中区",
      "label": "市中区"
    }, {
      "value": "薛城区",
      "label": "薛城区"
    }, {
      "value": "峄城区",
      "label": "峄城区"
    }, {
      "value": "台儿庄区",
      "label": "台儿庄区"
    }, {
      "value": "山亭区",
      "label": "山亭区"
    }, {
      "value": "滕州市",
      "label": "滕州市"
    }]
  }, {
    "value": "东营市",
    "label": "东营市",
    "children": [{
      "value": "东营区",
      "label": "东营区"
    }, {
      "value": "河口区",
      "label": "河口区"
    }, {
      "value": "垦利区",
      "label": "垦利区"
    }, {
      "value": "利津县",
      "label": "利津县"
    }, {
      "value": "广饶县",
      "label": "广饶县"
    }]
  }, {
    "value": "烟台市",
    "label": "烟台市",
    "children": [{
      "value": "芝罘区",
      "label": "芝罘区"
    }, {
      "value": "福山区",
      "label": "福山区"
    }, {
      "value": "牟平区",
      "label": "牟平区"
    }, {
      "value": "莱山区",
      "label": "莱山区"
    }, {
      "value": "长岛县",
      "label": "长岛县"
    }, {
      "value": "龙口市",
      "label": "龙口市"
    }, {
      "value": "莱阳市",
      "label": "莱阳市"
    }, {
      "value": "莱州市",
      "label": "莱州市"
    }, {
      "value": "蓬莱市",
      "label": "蓬莱市"
    }, {
      "value": "招远市",
      "label": "招远市"
    }, {
      "value": "栖霞市",
      "label": "栖霞市"
    }, {
      "value": "海阳市",
      "label": "海阳市"
    }]
  }, {
    "value": "潍坊市",
    "label": "潍坊市",
    "children": [{
      "value": "潍城区",
      "label": "潍城区"
    }, {
      "value": "寒亭区",
      "label": "寒亭区"
    }, {
      "value": "坊子区",
      "label": "坊子区"
    }, {
      "value": "奎文区",
      "label": "奎文区"
    }, {
      "value": "临朐县",
      "label": "临朐县"
    }, {
      "value": "昌乐县",
      "label": "昌乐县"
    }, {
      "value": "青州市",
      "label": "青州市"
    }, {
      "value": "诸城市",
      "label": "诸城市"
    }, {
      "value": "寿光市",
      "label": "寿光市"
    }, {
      "value": "安丘市",
      "label": "安丘市"
    }, {
      "value": "高密市",
      "label": "高密市"
    }, {
      "value": "昌邑市",
      "label": "昌邑市"
    }]
  }, {
    "value": "济宁市",
    "label": "济宁市",
    "children": [{
      "value": "任城区",
      "label": "任城区"
    }, {
      "value": "兖州区",
      "label": "兖州区"
    }, {
      "value": "微山县",
      "label": "微山县"
    }, {
      "value": "鱼台县",
      "label": "鱼台县"
    }, {
      "value": "金乡县",
      "label": "金乡县"
    }, {
      "value": "嘉祥县",
      "label": "嘉祥县"
    }, {
      "value": "汶上县",
      "label": "汶上县"
    }, {
      "value": "泗水县",
      "label": "泗水县"
    }, {
      "value": "梁山县",
      "label": "梁山县"
    }, {
      "value": "曲阜市",
      "label": "曲阜市"
    }, {
      "value": "邹城市",
      "label": "邹城市"
    }]
  }, {
    "value": "泰安市",
    "label": "泰安市",
    "children": [{
      "value": "泰山区",
      "label": "泰山区"
    }, {
      "value": "岱岳区",
      "label": "岱岳区"
    }, {
      "value": "宁阳县",
      "label": "宁阳县"
    }, {
      "value": "东平县",
      "label": "东平县"
    }, {
      "value": "新泰市",
      "label": "新泰市"
    }, {
      "value": "肥城市",
      "label": "肥城市"
    }]
  }, {
    "value": "威海市",
    "label": "威海市",
    "children": [{
      "value": "环翠区",
      "label": "环翠区"
    }, {
      "value": "文登区",
      "label": "文登区"
    }, {
      "value": "荣成市",
      "label": "荣成市"
    }, {
      "value": "乳山市",
      "label": "乳山市"
    }]
  }, {
    "value": "日照市",
    "label": "日照市",
    "children": [{
      "value": "东港区",
      "label": "东港区"
    }, {
      "value": "岚山区",
      "label": "岚山区"
    }, {
      "value": "五莲县",
      "label": "五莲县"
    }, {
      "value": "莒县",
      "label": "莒县"
    }]
  }, {
    "value": "莱芜市",
    "label": "莱芜市",
    "children": [{
      "value": "莱城区",
      "label": "莱城区"
    }, {
      "value": "钢城区",
      "label": "钢城区"
    }]
  }, {
    "value": "临沂市",
    "label": "临沂市",
    "children": [{
      "value": "兰山区",
      "label": "兰山区"
    }, {
      "value": "罗庄区",
      "label": "罗庄区"
    }, {
      "value": "河东区",
      "label": "河东区"
    }, {
      "value": "沂南县",
      "label": "沂南县"
    }, {
      "value": "郯城县",
      "label": "郯城县"
    }, {
      "value": "沂水县",
      "label": "沂水县"
    }, {
      "value": "兰陵县",
      "label": "兰陵县"
    }, {
      "value": "费县",
      "label": "费县"
    }, {
      "value": "平邑县",
      "label": "平邑县"
    }, {
      "value": "莒南县",
      "label": "莒南县"
    }, {
      "value": "蒙阴县",
      "label": "蒙阴县"
    }, {
      "value": "临沭县",
      "label": "临沭县"
    }]
  }, {
    "value": "德州市",
    "label": "德州市",
    "children": [{
      "value": "德城区",
      "label": "德城区"
    }, {
      "value": "陵城区",
      "label": "陵城区"
    }, {
      "value": "宁津县",
      "label": "宁津县"
    }, {
      "value": "庆云县",
      "label": "庆云县"
    }, {
      "value": "临邑县",
      "label": "临邑县"
    }, {
      "value": "齐河县",
      "label": "齐河县"
    }, {
      "value": "平原县",
      "label": "平原县"
    }, {
      "value": "夏津县",
      "label": "夏津县"
    }, {
      "value": "武城县",
      "label": "武城县"
    }, {
      "value": "乐陵市",
      "label": "乐陵市"
    }, {
      "value": "禹城市",
      "label": "禹城市"
    }]
  }, {
    "value": "聊城市",
    "label": "聊城市",
    "children": [{
      "value": "东昌府区",
      "label": "东昌府区"
    }, {
      "value": "阳谷县",
      "label": "阳谷县"
    }, {
      "value": "莘县",
      "label": "莘县"
    }, {
      "value": "茌平县",
      "label": "茌平县"
    }, {
      "value": "东阿县",
      "label": "东阿县"
    }, {
      "value": "冠县",
      "label": "冠县"
    }, {
      "value": "高唐县",
      "label": "高唐县"
    }, {
      "value": "临清市",
      "label": "临清市"
    }]
  }, {
    "value": "滨州市",
    "label": "滨州市",
    "children": [{
      "value": "滨城区",
      "label": "滨城区"
    }, {
      "value": "沾化区",
      "label": "沾化区"
    }, {
      "value": "惠民县",
      "label": "惠民县"
    }, {
      "value": "阳信县",
      "label": "阳信县"
    }, {
      "value": "无棣县",
      "label": "无棣县"
    }, {
      "value": "博兴县",
      "label": "博兴县"
    }, {
      "value": "邹平县",
      "label": "邹平县"
    }]
  }, {
    "value": "菏泽市",
    "label": "菏泽市",
    "children": [{
      "value": "牡丹区",
      "label": "牡丹区"
    }, {
      "value": "定陶区",
      "label": "定陶区"
    }, {
      "value": "曹县",
      "label": "曹县"
    }, {
      "value": "单县",
      "label": "单县"
    }, {
      "value": "成武县",
      "label": "成武县"
    }, {
      "value": "巨野县",
      "label": "巨野县"
    }, {
      "value": "郓城县",
      "label": "郓城县"
    }, {
      "value": "鄄城县",
      "label": "鄄城县"
    }, {
      "value": "东明县",
      "label": "东明县"
    }]
  }]
}, {
  "value": "河南省",
  "label": "河南省",
  "children": [{
    "value": "郑州市",
    "label": "郑州市",
    "children": [{
      "value": "中原区",
      "label": "中原区"
    }, {
      "value": "二七区",
      "label": "二七区"
    }, {
      "value": "管城回族区",
      "label": "管城回族区"
    }, {
      "value": "金水区",
      "label": "金水区"
    }, {
      "value": "上街区",
      "label": "上街区"
    }, {
      "value": "惠济区",
      "label": "惠济区"
    }, {
      "value": "中牟县",
      "label": "中牟县"
    }, {
      "value": "巩义市",
      "label": "巩义市"
    }, {
      "value": "荥阳市",
      "label": "荥阳市"
    }, {
      "value": "新密市",
      "label": "新密市"
    }, {
      "value": "新郑市",
      "label": "新郑市"
    }, {
      "value": "登封市",
      "label": "登封市"
    }]
  }, {
    "value": "开封市",
    "label": "开封市",
    "children": [{
      "value": "龙亭区",
      "label": "龙亭区"
    }, {
      "value": "顺河回族区",
      "label": "顺河回族区"
    }, {
      "value": "鼓楼区",
      "label": "鼓楼区"
    }, {
      "value": "禹王台区",
      "label": "禹王台区"
    }, {
      "value": "金明区",
      "label": "金明区"
    }, {
      "value": "祥符区",
      "label": "祥符区"
    }, {
      "value": "杞县",
      "label": "杞县"
    }, {
      "value": "通许县",
      "label": "通许县"
    }, {
      "value": "尉氏县",
      "label": "尉氏县"
    }, {
      "value": "兰考县",
      "label": "兰考县"
    }]
  }, {
    "value": "洛阳市",
    "label": "洛阳市",
    "children": [{
      "value": "老城区",
      "label": "老城区"
    }, {
      "value": "西工区",
      "label": "西工区"
    }, {
      "value": "瀍河回族区",
      "label": "瀍河回族区"
    }, {
      "value": "涧西区",
      "label": "涧西区"
    }, {
      "value": "吉利区",
      "label": "吉利区"
    }, {
      "value": "洛龙区",
      "label": "洛龙区"
    }, {
      "value": "孟津县",
      "label": "孟津县"
    }, {
      "value": "新安县",
      "label": "新安县"
    }, {
      "value": "栾川县",
      "label": "栾川县"
    }, {
      "value": "嵩县",
      "label": "嵩县"
    }, {
      "value": "汝阳县",
      "label": "汝阳县"
    }, {
      "value": "宜阳县",
      "label": "宜阳县"
    }, {
      "value": "洛宁县",
      "label": "洛宁县"
    }, {
      "value": "伊川县",
      "label": "伊川县"
    }, {
      "value": "偃师市",
      "label": "偃师市"
    }]
  }, {
    "value": "平顶山市",
    "label": "平顶山市",
    "children": [{
      "value": "新华区",
      "label": "新华区"
    }, {
      "value": "卫东区",
      "label": "卫东区"
    }, {
      "value": "石龙区",
      "label": "石龙区"
    }, {
      "value": "湛河区",
      "label": "湛河区"
    }, {
      "value": "宝丰县",
      "label": "宝丰县"
    }, {
      "value": "叶县",
      "label": "叶县"
    }, {
      "value": "鲁山县",
      "label": "鲁山县"
    }, {
      "value": "郏县",
      "label": "郏县"
    }, {
      "value": "舞钢市",
      "label": "舞钢市"
    }, {
      "value": "汝州市",
      "label": "汝州市"
    }]
  }, {
    "value": "安阳市",
    "label": "安阳市",
    "children": [{
      "value": "文峰区",
      "label": "文峰区"
    }, {
      "value": "北关区",
      "label": "北关区"
    }, {
      "value": "殷都区",
      "label": "殷都区"
    }, {
      "value": "龙安区",
      "label": "龙安区"
    }, {
      "value": "安阳县",
      "label": "安阳县"
    }, {
      "value": "汤阴县",
      "label": "汤阴县"
    }, {
      "value": "滑县",
      "label": "滑县"
    }, {
      "value": "内黄县",
      "label": "内黄县"
    }, {
      "value": "林州市",
      "label": "林州市"
    }]
  }, {
    "value": "鹤壁市",
    "label": "鹤壁市",
    "children": [{
      "value": "鹤山区",
      "label": "鹤山区"
    }, {
      "value": "山城区",
      "label": "山城区"
    }, {
      "value": "淇滨区",
      "label": "淇滨区"
    }, {
      "value": "浚县",
      "label": "浚县"
    }, {
      "value": "淇县",
      "label": "淇县"
    }]
  }, {
    "value": "新乡市",
    "label": "新乡市",
    "children": [{
      "value": "红旗区",
      "label": "红旗区"
    }, {
      "value": "卫滨区",
      "label": "卫滨区"
    }, {
      "value": "凤泉区",
      "label": "凤泉区"
    }, {
      "value": "牧野区",
      "label": "牧野区"
    }, {
      "value": "新乡县",
      "label": "新乡县"
    }, {
      "value": "获嘉县",
      "label": "获嘉县"
    }, {
      "value": "原阳县",
      "label": "原阳县"
    }, {
      "value": "延津县",
      "label": "延津县"
    }, {
      "value": "封丘县",
      "label": "封丘县"
    }, {
      "value": "长垣县",
      "label": "长垣县"
    }, {
      "value": "卫辉市",
      "label": "卫辉市"
    }, {
      "value": "辉县市",
      "label": "辉县市"
    }]
  }, {
    "value": "焦作市",
    "label": "焦作市",
    "children": [{
      "value": "解放区",
      "label": "解放区"
    }, {
      "value": "中站区",
      "label": "中站区"
    }, {
      "value": "马村区",
      "label": "马村区"
    }, {
      "value": "山阳区",
      "label": "山阳区"
    }, {
      "value": "修武县",
      "label": "修武县"
    }, {
      "value": "博爱县",
      "label": "博爱县"
    }, {
      "value": "武陟县",
      "label": "武陟县"
    }, {
      "value": "温县",
      "label": "温县"
    }, {
      "value": "沁阳市",
      "label": "沁阳市"
    }, {
      "value": "孟州市",
      "label": "孟州市"
    }]
  }, {
    "value": "濮阳市",
    "label": "濮阳市",
    "children": [{
      "value": "华龙区",
      "label": "华龙区"
    }, {
      "value": "清丰县",
      "label": "清丰县"
    }, {
      "value": "南乐县",
      "label": "南乐县"
    }, {
      "value": "范县",
      "label": "范县"
    }, {
      "value": "台前县",
      "label": "台前县"
    }, {
      "value": "濮阳县",
      "label": "濮阳县"
    }]
  }, {
    "value": "许昌市",
    "label": "许昌市",
    "children": [{
      "value": "魏都区",
      "label": "魏都区"
    }, {
      "value": "许昌县",
      "label": "许昌县"
    }, {
      "value": "鄢陵县",
      "label": "鄢陵县"
    }, {
      "value": "襄城县",
      "label": "襄城县"
    }, {
      "value": "禹州市",
      "label": "禹州市"
    }, {
      "value": "长葛市",
      "label": "长葛市"
    }]
  }, {
    "value": "漯河市",
    "label": "漯河市",
    "children": [{
      "value": "源汇区",
      "label": "源汇区"
    }, {
      "value": "郾城区",
      "label": "郾城区"
    }, {
      "value": "召陵区",
      "label": "召陵区"
    }, {
      "value": "舞阳县",
      "label": "舞阳县"
    }, {
      "value": "临颍县",
      "label": "临颍县"
    }]
  }, {
    "value": "三门峡市",
    "label": "三门峡市",
    "children": [{
      "value": "湖滨区",
      "label": "湖滨区"
    }, {
      "value": "陕州区",
      "label": "陕州区"
    }, {
      "value": "渑池县",
      "label": "渑池县"
    }, {
      "value": "卢氏县",
      "label": "卢氏县"
    }, {
      "value": "义马市",
      "label": "义马市"
    }, {
      "value": "灵宝市",
      "label": "灵宝市"
    }]
  }, {
    "value": "南阳市",
    "label": "南阳市",
    "children": [{
      "value": "宛城区",
      "label": "宛城区"
    }, {
      "value": "卧龙区",
      "label": "卧龙区"
    }, {
      "value": "南召县",
      "label": "南召县"
    }, {
      "value": "方城县",
      "label": "方城县"
    }, {
      "value": "西峡县",
      "label": "西峡县"
    }, {
      "value": "镇平县",
      "label": "镇平县"
    }, {
      "value": "内乡县",
      "label": "内乡县"
    }, {
      "value": "淅川县",
      "label": "淅川县"
    }, {
      "value": "社旗县",
      "label": "社旗县"
    }, {
      "value": "唐河县",
      "label": "唐河县"
    }, {
      "value": "新野县",
      "label": "新野县"
    }, {
      "value": "桐柏县",
      "label": "桐柏县"
    }, {
      "value": "邓州市",
      "label": "邓州市"
    }]
  }, {
    "value": "商丘市",
    "label": "商丘市",
    "children": [{
      "value": "梁园区",
      "label": "梁园区"
    }, {
      "value": "睢阳区",
      "label": "睢阳区"
    }, {
      "value": "民权县",
      "label": "民权县"
    }, {
      "value": "睢县",
      "label": "睢县"
    }, {
      "value": "宁陵县",
      "label": "宁陵县"
    }, {
      "value": "柘城县",
      "label": "柘城县"
    }, {
      "value": "虞城县",
      "label": "虞城县"
    }, {
      "value": "夏邑县",
      "label": "夏邑县"
    }, {
      "value": "永城市",
      "label": "永城市"
    }]
  }, {
    "value": "信阳市",
    "label": "信阳市",
    "children": [{
      "value": "浉河区",
      "label": "浉河区"
    }, {
      "value": "平桥区",
      "label": "平桥区"
    }, {
      "value": "罗山县",
      "label": "罗山县"
    }, {
      "value": "光山县",
      "label": "光山县"
    }, {
      "value": "新县",
      "label": "新县"
    }, {
      "value": "商城县",
      "label": "商城县"
    }, {
      "value": "固始县",
      "label": "固始县"
    }, {
      "value": "潢川县",
      "label": "潢川县"
    }, {
      "value": "淮滨县",
      "label": "淮滨县"
    }, {
      "value": "息县",
      "label": "息县"
    }]
  }, {
    "value": "周口市",
    "label": "周口市",
    "children": [{
      "value": "川汇区",
      "label": "川汇区"
    }, {
      "value": "扶沟县",
      "label": "扶沟县"
    }, {
      "value": "西华县",
      "label": "西华县"
    }, {
      "value": "商水县",
      "label": "商水县"
    }, {
      "value": "沈丘县",
      "label": "沈丘县"
    }, {
      "value": "郸城县",
      "label": "郸城县"
    }, {
      "value": "淮阳县",
      "label": "淮阳县"
    }, {
      "value": "太康县",
      "label": "太康县"
    }, {
      "value": "鹿邑县",
      "label": "鹿邑县"
    }, {
      "value": "项城市",
      "label": "项城市"
    }]
  }, {
    "value": "驻马店市",
    "label": "驻马店市",
    "children": [{
      "value": "驿城区",
      "label": "驿城区"
    }, {
      "value": "西平县",
      "label": "西平县"
    }, {
      "value": "上蔡县",
      "label": "上蔡县"
    }, {
      "value": "平舆县",
      "label": "平舆县"
    }, {
      "value": "正阳县",
      "label": "正阳县"
    }, {
      "value": "确山县",
      "label": "确山县"
    }, {
      "value": "泌阳县",
      "label": "泌阳县"
    }, {
      "value": "汝南县",
      "label": "汝南县"
    }, {
      "value": "遂平县",
      "label": "遂平县"
    }, {
      "value": "新蔡县",
      "label": "新蔡县"
    }]
  }, {
    "value": "省直辖县级行政区划",
    "label": "省直辖县级行政区划",
    "children": [{
      "value": "济源市",
      "label": "济源市"
    }]
  }]
}, {
  "value": "湖北省",
  "label": "湖北省",
  "children": [{
    "value": "武汉市",
    "label": "武汉市",
    "children": [{
      "value": "江岸区",
      "label": "江岸区"
    }, {
      "value": "江汉区",
      "label": "江汉区"
    }, {
      "value": "硚口区",
      "label": "硚口区"
    }, {
      "value": "汉阳区",
      "label": "汉阳区"
    }, {
      "value": "武昌区",
      "label": "武昌区"
    }, {
      "value": "青山区",
      "label": "青山区"
    }, {
      "value": "洪山区",
      "label": "洪山区"
    }, {
      "value": "东西湖区",
      "label": "东西湖区"
    }, {
      "value": "汉南区",
      "label": "汉南区"
    }, {
      "value": "蔡甸区",
      "label": "蔡甸区"
    }, {
      "value": "江夏区",
      "label": "江夏区"
    }, {
      "value": "黄陂区",
      "label": "黄陂区"
    }, {
      "value": "新洲区",
      "label": "新洲区"
    }]
  }, {
    "value": "黄石市",
    "label": "黄石市",
    "children": [{
      "value": "黄石港区",
      "label": "黄石港区"
    }, {
      "value": "西塞山区",
      "label": "西塞山区"
    }, {
      "value": "下陆区",
      "label": "下陆区"
    }, {
      "value": "铁山区",
      "label": "铁山区"
    }, {
      "value": "阳新县",
      "label": "阳新县"
    }, {
      "value": "大冶市",
      "label": "大冶市"
    }]
  }, {
    "value": "十堰市",
    "label": "十堰市",
    "children": [{
      "value": "茅箭区",
      "label": "茅箭区"
    }, {
      "value": "张湾区",
      "label": "张湾区"
    }, {
      "value": "郧阳区",
      "label": "郧阳区"
    }, {
      "value": "郧西县",
      "label": "郧西县"
    }, {
      "value": "竹山县",
      "label": "竹山县"
    }, {
      "value": "竹溪县",
      "label": "竹溪县"
    }, {
      "value": "房县",
      "label": "房县"
    }, {
      "value": "丹江口市",
      "label": "丹江口市"
    }]
  }, {
    "value": "宜昌市",
    "label": "宜昌市",
    "children": [{
      "value": "西陵区",
      "label": "西陵区"
    }, {
      "value": "伍家岗区",
      "label": "伍家岗区"
    }, {
      "value": "点军区",
      "label": "点军区"
    }, {
      "value": "猇亭区",
      "label": "猇亭区"
    }, {
      "value": "夷陵区",
      "label": "夷陵区"
    }, {
      "value": "远安县",
      "label": "远安县"
    }, {
      "value": "兴山县",
      "label": "兴山县"
    }, {
      "value": "秭归县",
      "label": "秭归县"
    }, {
      "value": "长阳土家族自治县",
      "label": "长阳土家族自治县"
    }, {
      "value": "五峰土家族自治县",
      "label": "五峰土家族自治县"
    }, {
      "value": "宜都市",
      "label": "宜都市"
    }, {
      "value": "当阳市",
      "label": "当阳市"
    }, {
      "value": "枝江市",
      "label": "枝江市"
    }]
  }, {
    "value": "襄阳市",
    "label": "襄阳市",
    "children": [{
      "value": "襄城区",
      "label": "襄城区"
    }, {
      "value": "樊城区",
      "label": "樊城区"
    }, {
      "value": "襄州区",
      "label": "襄州区"
    }, {
      "value": "南漳县",
      "label": "南漳县"
    }, {
      "value": "谷城县",
      "label": "谷城县"
    }, {
      "value": "保康县",
      "label": "保康县"
    }, {
      "value": "老河口市",
      "label": "老河口市"
    }, {
      "value": "枣阳市",
      "label": "枣阳市"
    }, {
      "value": "宜城市",
      "label": "宜城市"
    }]
  }, {
    "value": "鄂州市",
    "label": "鄂州市",
    "children": [{
      "value": "梁子湖区",
      "label": "梁子湖区"
    }, {
      "value": "华容区",
      "label": "华容区"
    }, {
      "value": "鄂城区",
      "label": "鄂城区"
    }]
  }, {
    "value": "荆门市",
    "label": "荆门市",
    "children": [{
      "value": "东宝区",
      "label": "东宝区"
    }, {
      "value": "掇刀区",
      "label": "掇刀区"
    }, {
      "value": "京山县",
      "label": "京山县"
    }, {
      "value": "沙洋县",
      "label": "沙洋县"
    }, {
      "value": "钟祥市",
      "label": "钟祥市"
    }]
  }, {
    "value": "孝感市",
    "label": "孝感市",
    "children": [{
      "value": "孝南区",
      "label": "孝南区"
    }, {
      "value": "孝昌县",
      "label": "孝昌县"
    }, {
      "value": "大悟县",
      "label": "大悟县"
    }, {
      "value": "云梦县",
      "label": "云梦县"
    }, {
      "value": "应城市",
      "label": "应城市"
    }, {
      "value": "安陆市",
      "label": "安陆市"
    }, {
      "value": "汉川市",
      "label": "汉川市"
    }]
  }, {
    "value": "荆州市",
    "label": "荆州市",
    "children": [{
      "value": "沙市区",
      "label": "沙市区"
    }, {
      "value": "荆州区",
      "label": "荆州区"
    }, {
      "value": "公安县",
      "label": "公安县"
    }, {
      "value": "监利县",
      "label": "监利县"
    }, {
      "value": "江陵县",
      "label": "江陵县"
    }, {
      "value": "石首市",
      "label": "石首市"
    }, {
      "value": "洪湖市",
      "label": "洪湖市"
    }, {
      "value": "松滋市",
      "label": "松滋市"
    }]
  }, {
    "value": "黄冈市",
    "label": "黄冈市",
    "children": [{
      "value": "黄州区",
      "label": "黄州区"
    }, {
      "value": "团风县",
      "label": "团风县"
    }, {
      "value": "红安县",
      "label": "红安县"
    }, {
      "value": "罗田县",
      "label": "罗田县"
    }, {
      "value": "英山县",
      "label": "英山县"
    }, {
      "value": "浠水县",
      "label": "浠水县"
    }, {
      "value": "蕲春县",
      "label": "蕲春县"
    }, {
      "value": "黄梅县",
      "label": "黄梅县"
    }, {
      "value": "麻城市",
      "label": "麻城市"
    }, {
      "value": "武穴市",
      "label": "武穴市"
    }]
  }, {
    "value": "咸宁市",
    "label": "咸宁市",
    "children": [{
      "value": "咸安区",
      "label": "咸安区"
    }, {
      "value": "嘉鱼县",
      "label": "嘉鱼县"
    }, {
      "value": "通城县",
      "label": "通城县"
    }, {
      "value": "崇阳县",
      "label": "崇阳县"
    }, {
      "value": "通山县",
      "label": "通山县"
    }, {
      "value": "赤壁市",
      "label": "赤壁市"
    }]
  }, {
    "value": "随州市",
    "label": "随州市",
    "children": [{
      "value": "曾都区",
      "label": "曾都区"
    }, {
      "value": "随县",
      "label": "随县"
    }, {
      "value": "广水市",
      "label": "广水市"
    }]
  }, {
    "value": "恩施土家族苗族自治州",
    "label": "恩施土家族苗族自治州",
    "children": [{
      "value": "恩施市",
      "label": "恩施市"
    }, {
      "value": "利川市",
      "label": "利川市"
    }, {
      "value": "建始县",
      "label": "建始县"
    }, {
      "value": "巴东县",
      "label": "巴东县"
    }, {
      "value": "宣恩县",
      "label": "宣恩县"
    }, {
      "value": "咸丰县",
      "label": "咸丰县"
    }, {
      "value": "来凤县",
      "label": "来凤县"
    }, {
      "value": "鹤峰县",
      "label": "鹤峰县"
    }]
  }, {
    "value": "省直辖县级行政区划",
    "label": "省直辖县级行政区划",
    "children": [{
      "value": "仙桃市",
      "label": "仙桃市"
    }, {
      "value": "潜江市",
      "label": "潜江市"
    }, {
      "value": "天门市",
      "label": "天门市"
    }, {
      "value": "神农架林区",
      "label": "神农架林区"
    }]
  }]
}, {
  "value": "湖南省",
  "label": "湖南省",
  "children": [{
    "value": "长沙市",
    "label": "长沙市",
    "children": [{
      "value": "芙蓉区",
      "label": "芙蓉区"
    }, {
      "value": "天心区",
      "label": "天心区"
    }, {
      "value": "岳麓区",
      "label": "岳麓区"
    }, {
      "value": "开福区",
      "label": "开福区"
    }, {
      "value": "雨花区",
      "label": "雨花区"
    }, {
      "value": "望城区",
      "label": "望城区"
    }, {
      "value": "长沙县",
      "label": "长沙县"
    }, {
      "value": "宁乡县",
      "label": "宁乡县"
    }, {
      "value": "浏阳市",
      "label": "浏阳市"
    }]
  }, {
    "value": "株洲市",
    "label": "株洲市",
    "children": [{
      "value": "荷塘区",
      "label": "荷塘区"
    }, {
      "value": "芦淞区",
      "label": "芦淞区"
    }, {
      "value": "石峰区",
      "label": "石峰区"
    }, {
      "value": "天元区",
      "label": "天元区"
    }, {
      "value": "株洲县",
      "label": "株洲县"
    }, {
      "value": "攸县",
      "label": "攸县"
    }, {
      "value": "茶陵县",
      "label": "茶陵县"
    }, {
      "value": "炎陵县",
      "label": "炎陵县"
    }, {
      "value": "醴陵市",
      "label": "醴陵市"
    }]
  }, {
    "value": "湘潭市",
    "label": "湘潭市",
    "children": [{
      "value": "雨湖区",
      "label": "雨湖区"
    }, {
      "value": "岳塘区",
      "label": "岳塘区"
    }, {
      "value": "湘潭县",
      "label": "湘潭县"
    }, {
      "value": "湘乡市",
      "label": "湘乡市"
    }, {
      "value": "韶山市",
      "label": "韶山市"
    }]
  }, {
    "value": "衡阳市",
    "label": "衡阳市",
    "children": [{
      "value": "珠晖区",
      "label": "珠晖区"
    }, {
      "value": "雁峰区",
      "label": "雁峰区"
    }, {
      "value": "石鼓区",
      "label": "石鼓区"
    }, {
      "value": "蒸湘区",
      "label": "蒸湘区"
    }, {
      "value": "南岳区",
      "label": "南岳区"
    }, {
      "value": "衡阳县",
      "label": "衡阳县"
    }, {
      "value": "衡南县",
      "label": "衡南县"
    }, {
      "value": "衡山县",
      "label": "衡山县"
    }, {
      "value": "衡东县",
      "label": "衡东县"
    }, {
      "value": "祁东县",
      "label": "祁东县"
    }, {
      "value": "耒阳市",
      "label": "耒阳市"
    }, {
      "value": "常宁市",
      "label": "常宁市"
    }]
  }, {
    "value": "邵阳市",
    "label": "邵阳市",
    "children": [{
      "value": "双清区",
      "label": "双清区"
    }, {
      "value": "大祥区",
      "label": "大祥区"
    }, {
      "value": "北塔区",
      "label": "北塔区"
    }, {
      "value": "邵东县",
      "label": "邵东县"
    }, {
      "value": "新邵县",
      "label": "新邵县"
    }, {
      "value": "邵阳县",
      "label": "邵阳县"
    }, {
      "value": "隆回县",
      "label": "隆回县"
    }, {
      "value": "洞口县",
      "label": "洞口县"
    }, {
      "value": "绥宁县",
      "label": "绥宁县"
    }, {
      "value": "新宁县",
      "label": "新宁县"
    }, {
      "value": "城步苗族自治县",
      "label": "城步苗族自治县"
    }, {
      "value": "武冈市",
      "label": "武冈市"
    }]
  }, {
    "value": "岳阳市",
    "label": "岳阳市",
    "children": [{
      "value": "岳阳楼区",
      "label": "岳阳楼区"
    }, {
      "value": "云溪区",
      "label": "云溪区"
    }, {
      "value": "君山区",
      "label": "君山区"
    }, {
      "value": "岳阳县",
      "label": "岳阳县"
    }, {
      "value": "华容县",
      "label": "华容县"
    }, {
      "value": "湘阴县",
      "label": "湘阴县"
    }, {
      "value": "平江县",
      "label": "平江县"
    }, {
      "value": "汨罗市",
      "label": "汨罗市"
    }, {
      "value": "临湘市",
      "label": "临湘市"
    }]
  }, {
    "value": "常德市",
    "label": "常德市",
    "children": [{
      "value": "武陵区",
      "label": "武陵区"
    }, {
      "value": "鼎城区",
      "label": "鼎城区"
    }, {
      "value": "安乡县",
      "label": "安乡县"
    }, {
      "value": "汉寿县",
      "label": "汉寿县"
    }, {
      "value": "澧县",
      "label": "澧县"
    }, {
      "value": "临澧县",
      "label": "临澧县"
    }, {
      "value": "桃源县",
      "label": "桃源县"
    }, {
      "value": "石门县",
      "label": "石门县"
    }, {
      "value": "津市市",
      "label": "津市市"
    }]
  }, {
    "value": "张家界市",
    "label": "张家界市",
    "children": [{
      "value": "永定区",
      "label": "永定区"
    }, {
      "value": "武陵源区",
      "label": "武陵源区"
    }, {
      "value": "慈利县",
      "label": "慈利县"
    }, {
      "value": "桑植县",
      "label": "桑植县"
    }]
  }, {
    "value": "益阳市",
    "label": "益阳市",
    "children": [{
      "value": "资阳区",
      "label": "资阳区"
    }, {
      "value": "赫山区",
      "label": "赫山区"
    }, {
      "value": "南县",
      "label": "南县"
    }, {
      "value": "桃江县",
      "label": "桃江县"
    }, {
      "value": "安化县",
      "label": "安化县"
    }, {
      "value": "沅江市",
      "label": "沅江市"
    }]
  }, {
    "value": "郴州市",
    "label": "郴州市",
    "children": [{
      "value": "北湖区",
      "label": "北湖区"
    }, {
      "value": "苏仙区",
      "label": "苏仙区"
    }, {
      "value": "桂阳县",
      "label": "桂阳县"
    }, {
      "value": "宜章县",
      "label": "宜章县"
    }, {
      "value": "永兴县",
      "label": "永兴县"
    }, {
      "value": "嘉禾县",
      "label": "嘉禾县"
    }, {
      "value": "临武县",
      "label": "临武县"
    }, {
      "value": "汝城县",
      "label": "汝城县"
    }, {
      "value": "桂东县",
      "label": "桂东县"
    }, {
      "value": "安仁县",
      "label": "安仁县"
    }, {
      "value": "资兴市",
      "label": "资兴市"
    }]
  }, {
    "value": "永州市",
    "label": "永州市",
    "children": [{
      "value": "零陵区",
      "label": "零陵区"
    }, {
      "value": "冷水滩区",
      "label": "冷水滩区"
    }, {
      "value": "祁阳县",
      "label": "祁阳县"
    }, {
      "value": "东安县",
      "label": "东安县"
    }, {
      "value": "双牌县",
      "label": "双牌县"
    }, {
      "value": "道县",
      "label": "道县"
    }, {
      "value": "江永县",
      "label": "江永县"
    }, {
      "value": "宁远县",
      "label": "宁远县"
    }, {
      "value": "蓝山县",
      "label": "蓝山县"
    }, {
      "value": "新田县",
      "label": "新田县"
    }, {
      "value": "江华瑶族自治县",
      "label": "江华瑶族自治县"
    }]
  }, {
    "value": "怀化市",
    "label": "怀化市",
    "children": [{
      "value": "鹤城区",
      "label": "鹤城区"
    }, {
      "value": "中方县",
      "label": "中方县"
    }, {
      "value": "沅陵县",
      "label": "沅陵县"
    }, {
      "value": "辰溪县",
      "label": "辰溪县"
    }, {
      "value": "溆浦县",
      "label": "溆浦县"
    }, {
      "value": "会同县",
      "label": "会同县"
    }, {
      "value": "麻阳苗族自治县",
      "label": "麻阳苗族自治县"
    }, {
      "value": "新晃侗族自治县",
      "label": "新晃侗族自治县"
    }, {
      "value": "芷江侗族自治县",
      "label": "芷江侗族自治县"
    }, {
      "value": "靖州苗族侗族自治县",
      "label": "靖州苗族侗族自治县"
    }, {
      "value": "通道侗族自治县",
      "label": "通道侗族自治县"
    }, {
      "value": "洪江市",
      "label": "洪江市"
    }]
  }, {
    "value": "娄底市",
    "label": "娄底市",
    "children": [{
      "value": "娄星区",
      "label": "娄星区"
    }, {
      "value": "双峰县",
      "label": "双峰县"
    }, {
      "value": "新化县",
      "label": "新化县"
    }, {
      "value": "冷水江市",
      "label": "冷水江市"
    }, {
      "value": "涟源市",
      "label": "涟源市"
    }]
  }, {
    "value": "湘西土家族苗族自治州",
    "label": "湘西土家族苗族自治州",
    "children": [{
      "value": "吉首市",
      "label": "吉首市"
    }, {
      "value": "泸溪县",
      "label": "泸溪县"
    }, {
      "value": "凤凰县",
      "label": "凤凰县"
    }, {
      "value": "花垣县",
      "label": "花垣县"
    }, {
      "value": "保靖县",
      "label": "保靖县"
    }, {
      "value": "古丈县",
      "label": "古丈县"
    }, {
      "value": "永顺县",
      "label": "永顺县"
    }, {
      "value": "龙山县",
      "label": "龙山县"
    }]
  }]
}, {
  "value": "广东省",
  "label": "广东省",
  "children": [{
    "value": "广州市",
    "label": "广州市",
    "children": [{
      "value": "荔湾区",
      "label": "荔湾区"
    }, {
      "value": "越秀区",
      "label": "越秀区"
    }, {
      "value": "海珠区",
      "label": "海珠区"
    }, {
      "value": "天河区",
      "label": "天河区"
    }, {
      "value": "白云区",
      "label": "白云区"
    }, {
      "value": "黄埔区",
      "label": "黄埔区"
    }, {
      "value": "番禺区",
      "label": "番禺区"
    }, {
      "value": "花都区",
      "label": "花都区"
    }, {
      "value": "南沙区",
      "label": "南沙区"
    }, {
      "value": "从化区",
      "label": "从化区"
    }, {
      "value": "增城区",
      "label": "增城区"
    }]
  }, {
    "value": "韶关市",
    "label": "韶关市",
    "children": [{
      "value": "武江区",
      "label": "武江区"
    }, {
      "value": "浈江区",
      "label": "浈江区"
    }, {
      "value": "曲江区",
      "label": "曲江区"
    }, {
      "value": "始兴县",
      "label": "始兴县"
    }, {
      "value": "仁化县",
      "label": "仁化县"
    }, {
      "value": "翁源县",
      "label": "翁源县"
    }, {
      "value": "乳源瑶族自治县",
      "label": "乳源瑶族自治县"
    }, {
      "value": "新丰县",
      "label": "新丰县"
    }, {
      "value": "乐昌市",
      "label": "乐昌市"
    }, {
      "value": "南雄市",
      "label": "南雄市"
    }]
  }, {
    "value": "深圳市",
    "label": "深圳市",
    "children": [{
      "value": "罗湖区",
      "label": "罗湖区"
    }, {
      "value": "福田区",
      "label": "福田区"
    }, {
      "value": "南山区",
      "label": "南山区"
    }, {
      "value": "宝安区",
      "label": "宝安区"
    }, {
      "value": "龙岗区",
      "label": "龙岗区"
    }, {
      "value": "盐田区",
      "label": "盐田区"
    }]
  }, {
    "value": "珠海市",
    "label": "珠海市",
    "children": [{
      "value": "香洲区",
      "label": "香洲区"
    }, {
      "value": "斗门区",
      "label": "斗门区"
    }, {
      "value": "金湾区",
      "label": "金湾区"
    }]
  }, {
    "value": "汕头市",
    "label": "汕头市",
    "children": [{
      "value": "龙湖区",
      "label": "龙湖区"
    }, {
      "value": "金平区",
      "label": "金平区"
    }, {
      "value": "濠江区",
      "label": "濠江区"
    }, {
      "value": "潮阳区",
      "label": "潮阳区"
    }, {
      "value": "潮南区",
      "label": "潮南区"
    }, {
      "value": "澄海区",
      "label": "澄海区"
    }, {
      "value": "南澳县",
      "label": "南澳县"
    }]
  }, {
    "value": "佛山市",
    "label": "佛山市",
    "children": [{
      "value": "禅城区",
      "label": "禅城区"
    }, {
      "value": "南海区",
      "label": "南海区"
    }, {
      "value": "顺德区",
      "label": "顺德区"
    }, {
      "value": "三水区",
      "label": "三水区"
    }, {
      "value": "高明区",
      "label": "高明区"
    }]
  }, {
    "value": "江门市",
    "label": "江门市",
    "children": [{
      "value": "蓬江区",
      "label": "蓬江区"
    }, {
      "value": "江海区",
      "label": "江海区"
    }, {
      "value": "新会区",
      "label": "新会区"
    }, {
      "value": "台山市",
      "label": "台山市"
    }, {
      "value": "开平市",
      "label": "开平市"
    }, {
      "value": "鹤山市",
      "label": "鹤山市"
    }, {
      "value": "恩平市",
      "label": "恩平市"
    }]
  }, {
    "value": "湛江市",
    "label": "湛江市",
    "children": [{
      "value": "赤坎区",
      "label": "赤坎区"
    }, {
      "value": "霞山区",
      "label": "霞山区"
    }, {
      "value": "坡头区",
      "label": "坡头区"
    }, {
      "value": "麻章区",
      "label": "麻章区"
    }, {
      "value": "遂溪县",
      "label": "遂溪县"
    }, {
      "value": "徐闻县",
      "label": "徐闻县"
    }, {
      "value": "廉江市",
      "label": "廉江市"
    }, {
      "value": "雷州市",
      "label": "雷州市"
    }, {
      "value": "吴川市",
      "label": "吴川市"
    }]
  }, {
    "value": "茂名市",
    "label": "茂名市",
    "children": [{
      "value": "茂南区",
      "label": "茂南区"
    }, {
      "value": "电白区",
      "label": "电白区"
    }, {
      "value": "高州市",
      "label": "高州市"
    }, {
      "value": "化州市",
      "label": "化州市"
    }, {
      "value": "信宜市",
      "label": "信宜市"
    }]
  }, {
    "value": "肇庆市",
    "label": "肇庆市",
    "children": [{
      "value": "端州区",
      "label": "端州区"
    }, {
      "value": "鼎湖区",
      "label": "鼎湖区"
    }, {
      "value": "高要区",
      "label": "高要区"
    }, {
      "value": "广宁县",
      "label": "广宁县"
    }, {
      "value": "怀集县",
      "label": "怀集县"
    }, {
      "value": "封开县",
      "label": "封开县"
    }, {
      "value": "德庆县",
      "label": "德庆县"
    }, {
      "value": "四会市",
      "label": "四会市"
    }]
  }, {
    "value": "惠州市",
    "label": "惠州市",
    "children": [{
      "value": "惠城区",
      "label": "惠城区"
    }, {
      "value": "惠阳区",
      "label": "惠阳区"
    }, {
      "value": "博罗县",
      "label": "博罗县"
    }, {
      "value": "惠东县",
      "label": "惠东县"
    }, {
      "value": "龙门县",
      "label": "龙门县"
    }]
  }, {
    "value": "梅州市",
    "label": "梅州市",
    "children": [{
      "value": "梅江区",
      "label": "梅江区"
    }, {
      "value": "梅县区",
      "label": "梅县区"
    }, {
      "value": "大埔县",
      "label": "大埔县"
    }, {
      "value": "丰顺县",
      "label": "丰顺县"
    }, {
      "value": "五华县",
      "label": "五华县"
    }, {
      "value": "平远县",
      "label": "平远县"
    }, {
      "value": "蕉岭县",
      "label": "蕉岭县"
    }, {
      "value": "兴宁市",
      "label": "兴宁市"
    }]
  }, {
    "value": "汕尾市",
    "label": "汕尾市",
    "children": [{
      "value": "城区",
      "label": "城区"
    }, {
      "value": "海丰县",
      "label": "海丰县"
    }, {
      "value": "陆河县",
      "label": "陆河县"
    }, {
      "value": "陆丰市",
      "label": "陆丰市"
    }]
  }, {
    "value": "河源市",
    "label": "河源市",
    "children": [{
      "value": "源城区",
      "label": "源城区"
    }, {
      "value": "紫金县",
      "label": "紫金县"
    }, {
      "value": "龙川县",
      "label": "龙川县"
    }, {
      "value": "连平县",
      "label": "连平县"
    }, {
      "value": "和平县",
      "label": "和平县"
    }, {
      "value": "东源县",
      "label": "东源县"
    }]
  }, {
    "value": "阳江市",
    "label": "阳江市",
    "children": [{
      "value": "江城区",
      "label": "江城区"
    }, {
      "value": "阳东区",
      "label": "阳东区"
    }, {
      "value": "阳西县",
      "label": "阳西县"
    }, {
      "value": "阳春市",
      "label": "阳春市"
    }]
  }, {
    "value": "清远市",
    "label": "清远市",
    "children": [{
      "value": "清城区",
      "label": "清城区"
    }, {
      "value": "清新区",
      "label": "清新区"
    }, {
      "value": "佛冈县",
      "label": "佛冈县"
    }, {
      "value": "阳山县",
      "label": "阳山县"
    }, {
      "value": "连山壮族瑶族自治县",
      "label": "连山壮族瑶族自治县"
    }, {
      "value": "连南瑶族自治县",
      "label": "连南瑶族自治县"
    }, {
      "value": "英德市",
      "label": "英德市"
    }, {
      "value": "连州市",
      "label": "连州市"
    }]
  }, {
    "value": "东莞市",
    "label": "东莞市",
    "children": [{
      "value": "东城街道",
      "label": "东城街道"
    }, {
      "value": "南城街道",
      "label": "南城街道"
    }, {
      "value": "万江街道",
      "label": "万江街道"
    }, {
      "value": "莞城街道",
      "label": "莞城街道"
    }, {
      "value": "石碣镇",
      "label": "石碣镇"
    }, {
      "value": "石龙镇",
      "label": "石龙镇"
    }, {
      "value": "茶山镇",
      "label": "茶山镇"
    }, {
      "value": "石排镇",
      "label": "石排镇"
    }, {
      "value": "企石镇",
      "label": "企石镇"
    }, {
      "value": "横沥镇",
      "label": "横沥镇"
    }, {
      "value": "桥头镇",
      "label": "桥头镇"
    }, {
      "value": "谢岗镇",
      "label": "谢岗镇"
    }, {
      "value": "东坑镇",
      "label": "东坑镇"
    }, {
      "value": "常平镇",
      "label": "常平镇"
    }, {
      "value": "寮步镇",
      "label": "寮步镇"
    }, {
      "value": "樟木头镇",
      "label": "樟木头镇"
    }, {
      "value": "大朗镇",
      "label": "大朗镇"
    }, {
      "value": "黄江镇",
      "label": "黄江镇"
    }, {
      "value": "清溪镇",
      "label": "清溪镇"
    }, {
      "value": "塘厦镇",
      "label": "塘厦镇"
    }, {
      "value": "凤岗镇",
      "label": "凤岗镇"
    }, {
      "value": "大岭山镇",
      "label": "大岭山镇"
    }, {
      "value": "长安镇",
      "label": "长安镇"
    }, {
      "value": "虎门镇",
      "label": "虎门镇"
    }, {
      "value": "厚街镇",
      "label": "厚街镇"
    }, {
      "value": "沙田镇",
      "label": "沙田镇"
    }, {
      "value": "道滘镇",
      "label": "道滘镇"
    }, {
      "value": "洪梅镇",
      "label": "洪梅镇"
    }, {
      "value": "麻涌镇",
      "label": "麻涌镇"
    }, {
      "value": "望牛墩镇",
      "label": "望牛墩镇"
    }, {
      "value": "中堂镇",
      "label": "中堂镇"
    }, {
      "value": "高埗镇",
      "label": "高埗镇"
    }, {
      "value": "松山湖管委会",
      "label": "松山湖管委会"
    }, {
      "value": "虎门港管委会",
      "label": "虎门港管委会"
    }, {
      "value": "东莞生态园",
      "label": "东莞生态园"
    }]
  }, {
    "value": "中山市",
    "label": "中山市",
    "children": [{
      "value": "石岐区街道",
      "label": "石岐区街道"
    }, {
      "value": "东区街道",
      "label": "东区街道"
    }, {
      "value": "火炬开发区街道",
      "label": "火炬开发区街道"
    }, {
      "value": "西区街道",
      "label": "西区街道"
    }, {
      "value": "南区街道",
      "label": "南区街道"
    }, {
      "value": "五桂山街道",
      "label": "五桂山街道"
    }, {
      "value": "小榄镇",
      "label": "小榄镇"
    }, {
      "value": "黄圃镇",
      "label": "黄圃镇"
    }, {
      "value": "民众镇",
      "label": "民众镇"
    }, {
      "value": "东凤镇",
      "label": "东凤镇"
    }, {
      "value": "东升镇",
      "label": "东升镇"
    }, {
      "value": "古镇镇",
      "label": "古镇镇"
    }, {
      "value": "沙溪镇",
      "label": "沙溪镇"
    }, {
      "value": "坦洲镇",
      "label": "坦洲镇"
    }, {
      "value": "港口镇",
      "label": "港口镇"
    }, {
      "value": "三角镇",
      "label": "三角镇"
    }, {
      "value": "横栏镇",
      "label": "横栏镇"
    }, {
      "value": "南头镇",
      "label": "南头镇"
    }, {
      "value": "阜沙镇",
      "label": "阜沙镇"
    }, {
      "value": "南朗镇",
      "label": "南朗镇"
    }, {
      "value": "三乡镇",
      "label": "三乡镇"
    }, {
      "value": "板芙镇",
      "label": "板芙镇"
    }, {
      "value": "大涌镇",
      "label": "大涌镇"
    }, {
      "value": "神湾镇",
      "label": "神湾镇"
    }]
  }, {
    "value": "潮州市",
    "label": "潮州市",
    "children": [{
      "value": "湘桥区",
      "label": "湘桥区"
    }, {
      "value": "潮安区",
      "label": "潮安区"
    }, {
      "value": "饶平县",
      "label": "饶平县"
    }]
  }, {
    "value": "揭阳市",
    "label": "揭阳市",
    "children": [{
      "value": "榕城区",
      "label": "榕城区"
    }, {
      "value": "揭东区",
      "label": "揭东区"
    }, {
      "value": "揭西县",
      "label": "揭西县"
    }, {
      "value": "惠来县",
      "label": "惠来县"
    }, {
      "value": "普宁市",
      "label": "普宁市"
    }]
  }, {
    "value": "云浮市",
    "label": "云浮市",
    "children": [{
      "value": "云城区",
      "label": "云城区"
    }, {
      "value": "云安区",
      "label": "云安区"
    }, {
      "value": "新兴县",
      "label": "新兴县"
    }, {
      "value": "郁南县",
      "label": "郁南县"
    }, {
      "value": "罗定市",
      "label": "罗定市"
    }]
  }]
}, {
  "value": "广西壮族自治区",
  "label": "广西壮族自治区",
  "children": [{
    "value": "南宁市",
    "label": "南宁市",
    "children": [{
      "value": "兴宁区",
      "label": "兴宁区"
    }, {
      "value": "青秀区",
      "label": "青秀区"
    }, {
      "value": "江南区",
      "label": "江南区"
    }, {
      "value": "西乡塘区",
      "label": "西乡塘区"
    }, {
      "value": "良庆区",
      "label": "良庆区"
    }, {
      "value": "邕宁区",
      "label": "邕宁区"
    }, {
      "value": "武鸣区",
      "label": "武鸣区"
    }, {
      "value": "隆安县",
      "label": "隆安县"
    }, {
      "value": "马山县",
      "label": "马山县"
    }, {
      "value": "上林县",
      "label": "上林县"
    }, {
      "value": "宾阳县",
      "label": "宾阳县"
    }, {
      "value": "横县",
      "label": "横县"
    }]
  }, {
    "value": "柳州市",
    "label": "柳州市",
    "children": [{
      "value": "城中区",
      "label": "城中区"
    }, {
      "value": "鱼峰区",
      "label": "鱼峰区"
    }, {
      "value": "柳南区",
      "label": "柳南区"
    }, {
      "value": "柳北区",
      "label": "柳北区"
    }, {
      "value": "柳江区",
      "label": "柳江区"
    }, {
      "value": "柳城县",
      "label": "柳城县"
    }, {
      "value": "鹿寨县",
      "label": "鹿寨县"
    }, {
      "value": "融安县",
      "label": "融安县"
    }, {
      "value": "融水苗族自治县",
      "label": "融水苗族自治县"
    }, {
      "value": "三江侗族自治县",
      "label": "三江侗族自治县"
    }]
  }, {
    "value": "桂林市",
    "label": "桂林市",
    "children": [{
      "value": "秀峰区",
      "label": "秀峰区"
    }, {
      "value": "叠彩区",
      "label": "叠彩区"
    }, {
      "value": "象山区",
      "label": "象山区"
    }, {
      "value": "七星区",
      "label": "七星区"
    }, {
      "value": "雁山区",
      "label": "雁山区"
    }, {
      "value": "临桂区",
      "label": "临桂区"
    }, {
      "value": "阳朔县",
      "label": "阳朔县"
    }, {
      "value": "灵川县",
      "label": "灵川县"
    }, {
      "value": "全州县",
      "label": "全州县"
    }, {
      "value": "兴安县",
      "label": "兴安县"
    }, {
      "value": "永福县",
      "label": "永福县"
    }, {
      "value": "灌阳县",
      "label": "灌阳县"
    }, {
      "value": "龙胜各族自治县",
      "label": "龙胜各族自治县"
    }, {
      "value": "资源县",
      "label": "资源县"
    }, {
      "value": "平乐县",
      "label": "平乐县"
    }, {
      "value": "荔浦县",
      "label": "荔浦县"
    }, {
      "value": "恭城瑶族自治县",
      "label": "恭城瑶族自治县"
    }]
  }, {
    "value": "梧州市",
    "label": "梧州市",
    "children": [{
      "value": "万秀区",
      "label": "万秀区"
    }, {
      "value": "长洲区",
      "label": "长洲区"
    }, {
      "value": "龙圩区",
      "label": "龙圩区"
    }, {
      "value": "苍梧县",
      "label": "苍梧县"
    }, {
      "value": "藤县",
      "label": "藤县"
    }, {
      "value": "蒙山县",
      "label": "蒙山县"
    }, {
      "value": "岑溪市",
      "label": "岑溪市"
    }]
  }, {
    "value": "北海市",
    "label": "北海市",
    "children": [{
      "value": "海城区",
      "label": "海城区"
    }, {
      "value": "银海区",
      "label": "银海区"
    }, {
      "value": "铁山港区",
      "label": "铁山港区"
    }, {
      "value": "合浦县",
      "label": "合浦县"
    }]
  }, {
    "value": "防城港市",
    "label": "防城港市",
    "children": [{
      "value": "港口区",
      "label": "港口区"
    }, {
      "value": "防城区",
      "label": "防城区"
    }, {
      "value": "上思县",
      "label": "上思县"
    }, {
      "value": "东兴市",
      "label": "东兴市"
    }]
  }, {
    "value": "钦州市",
    "label": "钦州市",
    "children": [{
      "value": "钦南区",
      "label": "钦南区"
    }, {
      "value": "钦北区",
      "label": "钦北区"
    }, {
      "value": "灵山县",
      "label": "灵山县"
    }, {
      "value": "浦北县",
      "label": "浦北县"
    }]
  }, {
    "value": "贵港市",
    "label": "贵港市",
    "children": [{
      "value": "港北区",
      "label": "港北区"
    }, {
      "value": "港南区",
      "label": "港南区"
    }, {
      "value": "覃塘区",
      "label": "覃塘区"
    }, {
      "value": "平南县",
      "label": "平南县"
    }, {
      "value": "桂平市",
      "label": "桂平市"
    }]
  }, {
    "value": "玉林市",
    "label": "玉林市",
    "children": [{
      "value": "玉州区",
      "label": "玉州区"
    }, {
      "value": "福绵区",
      "label": "福绵区"
    }, {
      "value": "容县",
      "label": "容县"
    }, {
      "value": "陆川县",
      "label": "陆川县"
    }, {
      "value": "博白县",
      "label": "博白县"
    }, {
      "value": "兴业县",
      "label": "兴业县"
    }, {
      "value": "北流市",
      "label": "北流市"
    }]
  }, {
    "value": "百色市",
    "label": "百色市",
    "children": [{
      "value": "右江区",
      "label": "右江区"
    }, {
      "value": "田阳县",
      "label": "田阳县"
    }, {
      "value": "田东县",
      "label": "田东县"
    }, {
      "value": "平果县",
      "label": "平果县"
    }, {
      "value": "德保县",
      "label": "德保县"
    }, {
      "value": "那坡县",
      "label": "那坡县"
    }, {
      "value": "凌云县",
      "label": "凌云县"
    }, {
      "value": "乐业县",
      "label": "乐业县"
    }, {
      "value": "田林县",
      "label": "田林县"
    }, {
      "value": "西林县",
      "label": "西林县"
    }, {
      "value": "隆林各族自治县",
      "label": "隆林各族自治县"
    }, {
      "value": "靖西市",
      "label": "靖西市"
    }]
  }, {
    "value": "贺州市",
    "label": "贺州市",
    "children": [{
      "value": "八步区",
      "label": "八步区"
    }, {
      "value": "平桂区",
      "label": "平桂区"
    }, {
      "value": "昭平县",
      "label": "昭平县"
    }, {
      "value": "钟山县",
      "label": "钟山县"
    }, {
      "value": "富川瑶族自治县",
      "label": "富川瑶族自治县"
    }]
  }, {
    "value": "河池市",
    "label": "河池市",
    "children": [{
      "value": "金城江区",
      "label": "金城江区"
    }, {
      "value": "南丹县",
      "label": "南丹县"
    }, {
      "value": "天峨县",
      "label": "天峨县"
    }, {
      "value": "凤山县",
      "label": "凤山县"
    }, {
      "value": "东兰县",
      "label": "东兰县"
    }, {
      "value": "罗城仫佬族自治县",
      "label": "罗城仫佬族自治县"
    }, {
      "value": "环江毛南族自治县",
      "label": "环江毛南族自治县"
    }, {
      "value": "巴马瑶族自治县",
      "label": "巴马瑶族自治县"
    }, {
      "value": "都安瑶族自治县",
      "label": "都安瑶族自治县"
    }, {
      "value": "大化瑶族自治县",
      "label": "大化瑶族自治县"
    }, {
      "value": "宜州市",
      "label": "宜州市"
    }]
  }, {
    "value": "来宾市",
    "label": "来宾市",
    "children": [{
      "value": "兴宾区",
      "label": "兴宾区"
    }, {
      "value": "忻城县",
      "label": "忻城县"
    }, {
      "value": "象州县",
      "label": "象州县"
    }, {
      "value": "武宣县",
      "label": "武宣县"
    }, {
      "value": "金秀瑶族自治县",
      "label": "金秀瑶族自治县"
    }, {
      "value": "合山市",
      "label": "合山市"
    }]
  }, {
    "value": "崇左市",
    "label": "崇左市",
    "children": [{
      "value": "崇左市",
      "label": "崇左市"
    }, {
      "value": "扶绥县",
      "label": "扶绥县"
    }, {
      "value": "宁明县",
      "label": "宁明县"
    }, {
      "value": "龙州县",
      "label": "龙州县"
    }, {
      "value": "大新县",
      "label": "大新县"
    }, {
      "value": "天等县",
      "label": "天等县"
    }, {
      "value": "凭祥市",
      "label": "凭祥市"
    }]
  }]
}, {
  "value": "海南省",
  "label": "海南省",
  "children": [{
    "value": "海口市",
    "label": "海口市",
    "children": [{
      "value": "秀英区",
      "label": "秀英区"
    }, {
      "value": "龙华区",
      "label": "龙华区"
    }, {
      "value": "琼山区",
      "label": "琼山区"
    }, {
      "value": "美兰区",
      "label": "美兰区"
    }]
  }, {
    "value": "三亚市",
    "label": "三亚市",
    "children": [{
      "value": "市辖区",
      "label": "市辖区"
    }, {
      "value": "海棠区",
      "label": "海棠区"
    }, {
      "value": "吉阳区",
      "label": "吉阳区"
    }, {
      "value": "天涯区",
      "label": "天涯区"
    }, {
      "value": "崖州区",
      "label": "崖州区"
    }]
  }, {
    "value": "三沙市",
    "label": "三沙市",
    "children": [{
      "value": "西沙群岛",
      "label": "西沙群岛"
    }, {
      "value": "南沙群岛",
      "label": "南沙群岛"
    }, {
      "value": "中沙群岛的岛礁及其海域",
      "label": "中沙群岛的岛礁及其海域"
    }]
  }, {
    "value": "儋州市",
    "label": "儋州市",
    "children": [{
      "value": "那大镇",
      "label": "那大镇"
    }, {
      "value": "和庆镇",
      "label": "和庆镇"
    }, {
      "value": "南丰镇",
      "label": "南丰镇"
    }, {
      "value": "大成镇",
      "label": "大成镇"
    }, {
      "value": "雅星镇",
      "label": "雅星镇"
    }, {
      "value": "兰洋镇",
      "label": "兰洋镇"
    }, {
      "value": "光村镇",
      "label": "光村镇"
    }, {
      "value": "木棠镇",
      "label": "木棠镇"
    }, {
      "value": "海头镇",
      "label": "海头镇"
    }, {
      "value": "峨蔓镇",
      "label": "峨蔓镇"
    }, {
      "value": "三都镇",
      "label": "三都镇"
    }, {
      "value": "王五镇",
      "label": "王五镇"
    }, {
      "value": "白马井镇",
      "label": "白马井镇"
    }, {
      "value": "中和镇",
      "label": "中和镇"
    }, {
      "value": "排浦镇",
      "label": "排浦镇"
    }, {
      "value": "东成镇",
      "label": "东成镇"
    }, {
      "value": "新州镇",
      "label": "新州镇"
    }, {
      "value": "国营西培农场",
      "label": "国营西培农场"
    }, {
      "value": "国营西联农场",
      "label": "国营西联农场"
    }, {
      "value": "国营蓝洋农场",
      "label": "国营蓝洋农场"
    }, {
      "value": "国营八一农场",
      "label": "国营八一农场"
    }, {
      "value": "洋浦经济开发区",
      "label": "洋浦经济开发区"
    }, {
      "value": "华南热作学院",
      "label": "华南热作学院"
    }]
  }, {
    "value": "省直辖县级行政区划",
    "label": "省直辖县级行政区划",
    "children": [{
      "value": "五指山市",
      "label": "五指山市"
    }, {
      "value": "琼海市",
      "label": "琼海市"
    }, {
      "value": "文昌市",
      "label": "文昌市"
    }, {
      "value": "万宁市",
      "label": "万宁市"
    }, {
      "value": "东方市",
      "label": "东方市"
    }, {
      "value": "定安县",
      "label": "定安县"
    }, {
      "value": "屯昌县",
      "label": "屯昌县"
    }, {
      "value": "澄迈县",
      "label": "澄迈县"
    }, {
      "value": "临高县",
      "label": "临高县"
    }, {
      "value": "白沙黎族自治县",
      "label": "白沙黎族自治县"
    }, {
      "value": "昌江黎族自治县",
      "label": "昌江黎族自治县"
    }, {
      "value": "乐东黎族自治县",
      "label": "乐东黎族自治县"
    }, {
      "value": "陵水黎族自治县",
      "label": "陵水黎族自治县"
    }, {
      "value": "保亭黎族苗族自治县",
      "label": "保亭黎族苗族自治县"
    }, {
      "value": "琼中黎族苗族自治县",
      "label": "琼中黎族苗族自治县"
    }]
  }]
}, {
  "value": "重庆市",
  "label": "重庆市",
  "children": [{
    "value": "市辖区",
    "label": "市辖区",
    "children": [{
      "value": "万州区",
      "label": "万州区"
    }, {
      "value": "涪陵区",
      "label": "涪陵区"
    }, {
      "value": "渝中区",
      "label": "渝中区"
    }, {
      "value": "大渡口区",
      "label": "大渡口区"
    }, {
      "value": "江北区",
      "label": "江北区"
    }, {
      "value": "沙坪坝区",
      "label": "沙坪坝区"
    }, {
      "value": "九龙坡区",
      "label": "九龙坡区"
    }, {
      "value": "南岸区",
      "label": "南岸区"
    }, {
      "value": "北碚区",
      "label": "北碚区"
    }, {
      "value": "綦江区",
      "label": "綦江区"
    }, {
      "value": "大足区",
      "label": "大足区"
    }, {
      "value": "渝北区",
      "label": "渝北区"
    }, {
      "value": "巴南区",
      "label": "巴南区"
    }, {
      "value": "黔江区",
      "label": "黔江区"
    }, {
      "value": "长寿区",
      "label": "长寿区"
    }, {
      "value": "江津区",
      "label": "江津区"
    }, {
      "value": "合川区",
      "label": "合川区"
    }, {
      "value": "永川区",
      "label": "永川区"
    }, {
      "value": "南川区",
      "label": "南川区"
    }, {
      "value": "璧山区",
      "label": "璧山区"
    }, {
      "value": "铜梁区",
      "label": "铜梁区"
    }, {
      "value": "潼南区",
      "label": "潼南区"
    }, {
      "value": "荣昌区",
      "label": "荣昌区"
    }, {
      "value": "开州区",
      "label": "开州区"
    }]
  }, {
    "value": "县",
    "label": "县",
    "children": [{
      "value": "梁平县",
      "label": "梁平县"
    }, {
      "value": "城口县",
      "label": "城口县"
    }, {
      "value": "丰都县",
      "label": "丰都县"
    }, {
      "value": "垫江县",
      "label": "垫江县"
    }, {
      "value": "武隆县",
      "label": "武隆县"
    }, {
      "value": "忠县",
      "label": "忠县"
    }, {
      "value": "云阳县",
      "label": "云阳县"
    }, {
      "value": "奉节县",
      "label": "奉节县"
    }, {
      "value": "巫山县",
      "label": "巫山县"
    }, {
      "value": "巫溪县",
      "label": "巫溪县"
    }, {
      "value": "石柱土家族自治县",
      "label": "石柱土家族自治县"
    }, {
      "value": "秀山土家族苗族自治县",
      "label": "秀山土家族苗族自治县"
    }, {
      "value": "酉阳土家族苗族自治县",
      "label": "酉阳土家族苗族自治县"
    }, {
      "value": "彭水苗族土家族自治县",
      "label": "彭水苗族土家族自治县"
    }]
  }]
}, {
  "value": "四川省",
  "label": "四川省",
  "children": [{
    "value": "成都市",
    "label": "成都市",
    "children": [{
      "value": "锦江区",
      "label": "锦江区"
    }, {
      "value": "青羊区",
      "label": "青羊区"
    }, {
      "value": "金牛区",
      "label": "金牛区"
    }, {
      "value": "武侯区",
      "label": "武侯区"
    }, {
      "value": "成华区",
      "label": "成华区"
    }, {
      "value": "龙泉驿区",
      "label": "龙泉驿区"
    }, {
      "value": "青白江区",
      "label": "青白江区"
    }, {
      "value": "新都区",
      "label": "新都区"
    }, {
      "value": "温江区",
      "label": "温江区"
    }, {
      "value": "双流区",
      "label": "双流区"
    }, {
      "value": "金堂县",
      "label": "金堂县"
    }, {
      "value": "郫县",
      "label": "郫县"
    }, {
      "value": "大邑县",
      "label": "大邑县"
    }, {
      "value": "蒲江县",
      "label": "蒲江县"
    }, {
      "value": "新津县",
      "label": "新津县"
    }, {
      "value": "都江堰市",
      "label": "都江堰市"
    }, {
      "value": "彭州市",
      "label": "彭州市"
    }, {
      "value": "邛崃市",
      "label": "邛崃市"
    }, {
      "value": "崇州市",
      "label": "崇州市"
    }, {
      "value": "简阳市",
      "label": "简阳市"
    }]
  }, {
    "value": "自贡市",
    "label": "自贡市",
    "children": [{
      "value": "自流井区",
      "label": "自流井区"
    }, {
      "value": "贡井区",
      "label": "贡井区"
    }, {
      "value": "大安区",
      "label": "大安区"
    }, {
      "value": "沿滩区",
      "label": "沿滩区"
    }, {
      "value": "荣县",
      "label": "荣县"
    }, {
      "value": "富顺县",
      "label": "富顺县"
    }]
  }, {
    "value": "攀枝花市",
    "label": "攀枝花市",
    "children": [{
      "value": "东区",
      "label": "东区"
    }, {
      "value": "西区",
      "label": "西区"
    }, {
      "value": "仁和区",
      "label": "仁和区"
    }, {
      "value": "米易县",
      "label": "米易县"
    }, {
      "value": "盐边县",
      "label": "盐边县"
    }]
  }, {
    "value": "泸州市",
    "label": "泸州市",
    "children": [{
      "value": "江阳区",
      "label": "江阳区"
    }, {
      "value": "纳溪区",
      "label": "纳溪区"
    }, {
      "value": "龙马潭区",
      "label": "龙马潭区"
    }, {
      "value": "泸县",
      "label": "泸县"
    }, {
      "value": "合江县",
      "label": "合江县"
    }, {
      "value": "叙永县",
      "label": "叙永县"
    }, {
      "value": "古蔺县",
      "label": "古蔺县"
    }]
  }, {
    "value": "德阳市",
    "label": "德阳市",
    "children": [{
      "value": "旌阳区",
      "label": "旌阳区"
    }, {
      "value": "中江县",
      "label": "中江县"
    }, {
      "value": "罗江县",
      "label": "罗江县"
    }, {
      "value": "广汉市",
      "label": "广汉市"
    }, {
      "value": "什邡市",
      "label": "什邡市"
    }, {
      "value": "绵竹市",
      "label": "绵竹市"
    }]
  }, {
    "value": "绵阳市",
    "label": "绵阳市",
    "children": [{
      "value": "涪城区",
      "label": "涪城区"
    }, {
      "value": "游仙区",
      "label": "游仙区"
    }, {
      "value": "安州区",
      "label": "安州区"
    }, {
      "value": "三台县",
      "label": "三台县"
    }, {
      "value": "盐亭县",
      "label": "盐亭县"
    }, {
      "value": "梓潼县",
      "label": "梓潼县"
    }, {
      "value": "北川羌族自治县",
      "label": "北川羌族自治县"
    }, {
      "value": "平武县",
      "label": "平武县"
    }, {
      "value": "江油市",
      "label": "江油市"
    }]
  }, {
    "value": "广元市",
    "label": "广元市",
    "children": [{
      "value": "利州区",
      "label": "利州区"
    }, {
      "value": "昭化区",
      "label": "昭化区"
    }, {
      "value": "朝天区",
      "label": "朝天区"
    }, {
      "value": "旺苍县",
      "label": "旺苍县"
    }, {
      "value": "青川县",
      "label": "青川县"
    }, {
      "value": "剑阁县",
      "label": "剑阁县"
    }, {
      "value": "苍溪县",
      "label": "苍溪县"
    }]
  }, {
    "value": "遂宁市",
    "label": "遂宁市",
    "children": [{
      "value": "船山区",
      "label": "船山区"
    }, {
      "value": "安居区",
      "label": "安居区"
    }, {
      "value": "蓬溪县",
      "label": "蓬溪县"
    }, {
      "value": "射洪县",
      "label": "射洪县"
    }, {
      "value": "大英县",
      "label": "大英县"
    }]
  }, {
    "value": "内江市",
    "label": "内江市",
    "children": [{
      "value": "市中区",
      "label": "市中区"
    }, {
      "value": "东兴区",
      "label": "东兴区"
    }, {
      "value": "威远县",
      "label": "威远县"
    }, {
      "value": "资中县",
      "label": "资中县"
    }, {
      "value": "隆昌县",
      "label": "隆昌县"
    }]
  }, {
    "value": "乐山市",
    "label": "乐山市",
    "children": [{
      "value": "市中区",
      "label": "市中区"
    }, {
      "value": "沙湾区",
      "label": "沙湾区"
    }, {
      "value": "五通桥区",
      "label": "五通桥区"
    }, {
      "value": "金口河区",
      "label": "金口河区"
    }, {
      "value": "犍为县",
      "label": "犍为县"
    }, {
      "value": "井研县",
      "label": "井研县"
    }, {
      "value": "夹江县",
      "label": "夹江县"
    }, {
      "value": "沐川县",
      "label": "沐川县"
    }, {
      "value": "峨边彝族自治县",
      "label": "峨边彝族自治县"
    }, {
      "value": "马边彝族自治县",
      "label": "马边彝族自治县"
    }, {
      "value": "峨眉山市",
      "label": "峨眉山市"
    }]
  }, {
    "value": "南充市",
    "label": "南充市",
    "children": [{
      "value": "顺庆区",
      "label": "顺庆区"
    }, {
      "value": "高坪区",
      "label": "高坪区"
    }, {
      "value": "嘉陵区",
      "label": "嘉陵区"
    }, {
      "value": "南部县",
      "label": "南部县"
    }, {
      "value": "营山县",
      "label": "营山县"
    }, {
      "value": "蓬安县",
      "label": "蓬安县"
    }, {
      "value": "仪陇县",
      "label": "仪陇县"
    }, {
      "value": "西充县",
      "label": "西充县"
    }, {
      "value": "阆中市",
      "label": "阆中市"
    }]
  }, {
    "value": "眉山市",
    "label": "眉山市",
    "children": [{
      "value": "东坡区",
      "label": "东坡区"
    }, {
      "value": "彭山区",
      "label": "彭山区"
    }, {
      "value": "仁寿县",
      "label": "仁寿县"
    }, {
      "value": "洪雅县",
      "label": "洪雅县"
    }, {
      "value": "丹棱县",
      "label": "丹棱县"
    }, {
      "value": "青神县",
      "label": "青神县"
    }]
  }, {
    "value": "宜宾市",
    "label": "宜宾市",
    "children": [{
      "value": "翠屏区",
      "label": "翠屏区"
    }, {
      "value": "南溪区",
      "label": "南溪区"
    }, {
      "value": "宜宾县",
      "label": "宜宾县"
    }, {
      "value": "江安县",
      "label": "江安县"
    }, {
      "value": "长宁县",
      "label": "长宁县"
    }, {
      "value": "高县",
      "label": "高县"
    }, {
      "value": "珙县",
      "label": "珙县"
    }, {
      "value": "筠连县",
      "label": "筠连县"
    }, {
      "value": "兴文县",
      "label": "兴文县"
    }, {
      "value": "屏山县",
      "label": "屏山县"
    }]
  }, {
    "value": "广安市",
    "label": "广安市",
    "children": [{
      "value": "广安区",
      "label": "广安区"
    }, {
      "value": "前锋区",
      "label": "前锋区"
    }, {
      "value": "岳池县",
      "label": "岳池县"
    }, {
      "value": "武胜县",
      "label": "武胜县"
    }, {
      "value": "邻水县",
      "label": "邻水县"
    }, {
      "value": "华蓥市",
      "label": "华蓥市"
    }]
  }, {
    "value": "达州市",
    "label": "达州市",
    "children": [{
      "value": "通川区",
      "label": "通川区"
    }, {
      "value": "达川区",
      "label": "达川区"
    }, {
      "value": "宣汉县",
      "label": "宣汉县"
    }, {
      "value": "开江县",
      "label": "开江县"
    }, {
      "value": "大竹县",
      "label": "大竹县"
    }, {
      "value": "渠县",
      "label": "渠县"
    }, {
      "value": "万源市",
      "label": "万源市"
    }]
  }, {
    "value": "雅安市",
    "label": "雅安市",
    "children": [{
      "value": "雨城区",
      "label": "雨城区"
    }, {
      "value": "名山区",
      "label": "名山区"
    }, {
      "value": "荥经县",
      "label": "荥经县"
    }, {
      "value": "汉源县",
      "label": "汉源县"
    }, {
      "value": "石棉县",
      "label": "石棉县"
    }, {
      "value": "天全县",
      "label": "天全县"
    }, {
      "value": "芦山县",
      "label": "芦山县"
    }, {
      "value": "宝兴县",
      "label": "宝兴县"
    }]
  }, {
    "value": "巴中市",
    "label": "巴中市",
    "children": [{
      "value": "巴州区",
      "label": "巴州区"
    }, {
      "value": "恩阳区",
      "label": "恩阳区"
    }, {
      "value": "通江县",
      "label": "通江县"
    }, {
      "value": "南江县",
      "label": "南江县"
    }, {
      "value": "平昌县",
      "label": "平昌县"
    }]
  }, {
    "value": "资阳市",
    "label": "资阳市",
    "children": [{
      "value": "雁江区",
      "label": "雁江区"
    }, {
      "value": "安岳县",
      "label": "安岳县"
    }, {
      "value": "乐至县",
      "label": "乐至县"
    }]
  }, {
    "value": "阿坝藏族羌族自治州",
    "label": "阿坝藏族羌族自治州",
    "children": [{
      "value": "马尔康市",
      "label": "马尔康市"
    }, {
      "value": "汶川县",
      "label": "汶川县"
    }, {
      "value": "理县",
      "label": "理县"
    }, {
      "value": "茂县",
      "label": "茂县"
    }, {
      "value": "松潘县",
      "label": "松潘县"
    }, {
      "value": "九寨沟县",
      "label": "九寨沟县"
    }, {
      "value": "金川县",
      "label": "金川县"
    }, {
      "value": "小金县",
      "label": "小金县"
    }, {
      "value": "黑水县",
      "label": "黑水县"
    }, {
      "value": "壤塘县",
      "label": "壤塘县"
    }, {
      "value": "阿坝县",
      "label": "阿坝县"
    }, {
      "value": "若尔盖县",
      "label": "若尔盖县"
    }, {
      "value": "红原县",
      "label": "红原县"
    }]
  }, {
    "value": "甘孜藏族自治州",
    "label": "甘孜藏族自治州",
    "children": [{
      "value": "康定市",
      "label": "康定市"
    }, {
      "value": "泸定县",
      "label": "泸定县"
    }, {
      "value": "丹巴县",
      "label": "丹巴县"
    }, {
      "value": "九龙县",
      "label": "九龙县"
    }, {
      "value": "雅江县",
      "label": "雅江县"
    }, {
      "value": "道孚县",
      "label": "道孚县"
    }, {
      "value": "炉霍县",
      "label": "炉霍县"
    }, {
      "value": "甘孜县",
      "label": "甘孜县"
    }, {
      "value": "新龙县",
      "label": "新龙县"
    }, {
      "value": "德格县",
      "label": "德格县"
    }, {
      "value": "白玉县",
      "label": "白玉县"
    }, {
      "value": "石渠县",
      "label": "石渠县"
    }, {
      "value": "色达县",
      "label": "色达县"
    }, {
      "value": "理塘县",
      "label": "理塘县"
    }, {
      "value": "巴塘县",
      "label": "巴塘县"
    }, {
      "value": "乡城县",
      "label": "乡城县"
    }, {
      "value": "稻城县",
      "label": "稻城县"
    }, {
      "value": "得荣县",
      "label": "得荣县"
    }]
  }, {
    "value": "凉山彝族自治州",
    "label": "凉山彝族自治州",
    "children": [{
      "value": "西昌市",
      "label": "西昌市"
    }, {
      "value": "木里藏族自治县",
      "label": "木里藏族自治县"
    }, {
      "value": "盐源县",
      "label": "盐源县"
    }, {
      "value": "德昌县",
      "label": "德昌县"
    }, {
      "value": "会理县",
      "label": "会理县"
    }, {
      "value": "会东县",
      "label": "会东县"
    }, {
      "value": "宁南县",
      "label": "宁南县"
    }, {
      "value": "普格县",
      "label": "普格县"
    }, {
      "value": "布拖县",
      "label": "布拖县"
    }, {
      "value": "金阳县",
      "label": "金阳县"
    }, {
      "value": "昭觉县",
      "label": "昭觉县"
    }, {
      "value": "喜德县",
      "label": "喜德县"
    }, {
      "value": "冕宁县",
      "label": "冕宁县"
    }, {
      "value": "越西县",
      "label": "越西县"
    }, {
      "value": "甘洛县",
      "label": "甘洛县"
    }, {
      "value": "美姑县",
      "label": "美姑县"
    }, {
      "value": "雷波县",
      "label": "雷波县"
    }]
  }]
}, {
  "value": "贵州省",
  "label": "贵州省",
  "children": [{
    "value": "贵阳市",
    "label": "贵阳市",
    "children": [{
      "value": "南明区",
      "label": "南明区"
    }, {
      "value": "云岩区",
      "label": "云岩区"
    }, {
      "value": "花溪区",
      "label": "花溪区"
    }, {
      "value": "乌当区",
      "label": "乌当区"
    }, {
      "value": "白云区",
      "label": "白云区"
    }, {
      "value": "观山湖区",
      "label": "观山湖区"
    }, {
      "value": "开阳县",
      "label": "开阳县"
    }, {
      "value": "息烽县",
      "label": "息烽县"
    }, {
      "value": "修文县",
      "label": "修文县"
    }, {
      "value": "清镇市",
      "label": "清镇市"
    }]
  }, {
    "value": "六盘水市",
    "label": "六盘水市",
    "children": [{
      "value": "钟山区",
      "label": "钟山区"
    }, {
      "value": "六枝特区",
      "label": "六枝特区"
    }, {
      "value": "水城县",
      "label": "水城县"
    }, {
      "value": "盘县",
      "label": "盘县"
    }]
  }, {
    "value": "遵义市",
    "label": "遵义市",
    "children": [{
      "value": "红花岗区",
      "label": "红花岗区"
    }, {
      "value": "汇川区",
      "label": "汇川区"
    }, {
      "value": "播州区",
      "label": "播州区"
    }, {
      "value": "桐梓县",
      "label": "桐梓县"
    }, {
      "value": "绥阳县",
      "label": "绥阳县"
    }, {
      "value": "正安县",
      "label": "正安县"
    }, {
      "value": "道真仡佬族苗族自治县",
      "label": "道真仡佬族苗族自治县"
    }, {
      "value": "务川仡佬族苗族自治县",
      "label": "务川仡佬族苗族自治县"
    }, {
      "value": "凤冈县",
      "label": "凤冈县"
    }, {
      "value": "湄潭县",
      "label": "湄潭县"
    }, {
      "value": "余庆县",
      "label": "余庆县"
    }, {
      "value": "习水县",
      "label": "习水县"
    }, {
      "value": "赤水市",
      "label": "赤水市"
    }, {
      "value": "仁怀市",
      "label": "仁怀市"
    }]
  }, {
    "value": "安顺市",
    "label": "安顺市",
    "children": [{
      "value": "西秀区",
      "label": "西秀区"
    }, {
      "value": "平坝区",
      "label": "平坝区"
    }, {
      "value": "普定县",
      "label": "普定县"
    }, {
      "value": "镇宁布依族苗族自治县",
      "label": "镇宁布依族苗族自治县"
    }, {
      "value": "关岭布依族苗族自治县",
      "label": "关岭布依族苗族自治县"
    }, {
      "value": "紫云苗族布依族自治县",
      "label": "紫云苗族布依族自治县"
    }]
  }, {
    "value": "毕节市",
    "label": "毕节市",
    "children": [{
      "value": "七星关区",
      "label": "七星关区"
    }, {
      "value": "大方县",
      "label": "大方县"
    }, {
      "value": "黔西县",
      "label": "黔西县"
    }, {
      "value": "金沙县",
      "label": "金沙县"
    }, {
      "value": "织金县",
      "label": "织金县"
    }, {
      "value": "纳雍县",
      "label": "纳雍县"
    }, {
      "value": "威宁彝族回族苗族自治县",
      "label": "威宁彝族回族苗族自治县"
    }, {
      "value": "赫章县",
      "label": "赫章县"
    }]
  }, {
    "value": "铜仁市",
    "label": "铜仁市",
    "children": [{
      "value": "碧江区",
      "label": "碧江区"
    }, {
      "value": "万山区",
      "label": "万山区"
    }, {
      "value": "江口县",
      "label": "江口县"
    }, {
      "value": "玉屏侗族自治县",
      "label": "玉屏侗族自治县"
    }, {
      "value": "石阡县",
      "label": "石阡县"
    }, {
      "value": "思南县",
      "label": "思南县"
    }, {
      "value": "印江土家族苗族自治县",
      "label": "印江土家族苗族自治县"
    }, {
      "value": "德江县",
      "label": "德江县"
    }, {
      "value": "沿河土家族自治县",
      "label": "沿河土家族自治县"
    }, {
      "value": "松桃苗族自治县",
      "label": "松桃苗族自治县"
    }]
  }, {
    "value": "黔西南布依族苗族自治州",
    "label": "黔西南布依族苗族自治州",
    "children": [{
      "value": "兴义市",
      "label": "兴义市"
    }, {
      "value": "兴仁县",
      "label": "兴仁县"
    }, {
      "value": "普安县",
      "label": "普安县"
    }, {
      "value": "晴隆县",
      "label": "晴隆县"
    }, {
      "value": "贞丰县",
      "label": "贞丰县"
    }, {
      "value": "望谟县",
      "label": "望谟县"
    }, {
      "value": "册亨县",
      "label": "册亨县"
    }, {
      "value": "安龙县",
      "label": "安龙县"
    }]
  }, {
    "value": "黔东南苗族侗族自治州",
    "label": "黔东南苗族侗族自治州",
    "children": [{
      "value": "凯里市",
      "label": "凯里市"
    }, {
      "value": "黄平县",
      "label": "黄平县"
    }, {
      "value": "施秉县",
      "label": "施秉县"
    }, {
      "value": "三穗县",
      "label": "三穗县"
    }, {
      "value": "镇远县",
      "label": "镇远县"
    }, {
      "value": "岑巩县",
      "label": "岑巩县"
    }, {
      "value": "天柱县",
      "label": "天柱县"
    }, {
      "value": "锦屏县",
      "label": "锦屏县"
    }, {
      "value": "剑河县",
      "label": "剑河县"
    }, {
      "value": "台江县",
      "label": "台江县"
    }, {
      "value": "黎平县",
      "label": "黎平县"
    }, {
      "value": "榕江县",
      "label": "榕江县"
    }, {
      "value": "从江县",
      "label": "从江县"
    }, {
      "value": "雷山县",
      "label": "雷山县"
    }, {
      "value": "麻江县",
      "label": "麻江县"
    }, {
      "value": "丹寨县",
      "label": "丹寨县"
    }]
  }, {
    "value": "黔南布依族苗族自治州",
    "label": "黔南布依族苗族自治州",
    "children": [{
      "value": "都匀市",
      "label": "都匀市"
    }, {
      "value": "福泉市",
      "label": "福泉市"
    }, {
      "value": "荔波县",
      "label": "荔波县"
    }, {
      "value": "贵定县",
      "label": "贵定县"
    }, {
      "value": "瓮安县",
      "label": "瓮安县"
    }, {
      "value": "独山县",
      "label": "独山县"
    }, {
      "value": "平塘县",
      "label": "平塘县"
    }, {
      "value": "罗甸县",
      "label": "罗甸县"
    }, {
      "value": "长顺县",
      "label": "长顺县"
    }, {
      "value": "龙里县",
      "label": "龙里县"
    }, {
      "value": "惠水县",
      "label": "惠水县"
    }, {
      "value": "三都水族自治县",
      "label": "三都水族自治县"
    }]
  }]
}, {
  "value": "云南省",
  "label": "云南省",
  "children": [{
    "value": "昆明市",
    "label": "昆明市",
    "children": [{
      "value": "五华区",
      "label": "五华区"
    }, {
      "value": "盘龙区",
      "label": "盘龙区"
    }, {
      "value": "官渡区",
      "label": "官渡区"
    }, {
      "value": "西山区",
      "label": "西山区"
    }, {
      "value": "东川区",
      "label": "东川区"
    }, {
      "value": "呈贡区",
      "label": "呈贡区"
    }, {
      "value": "晋宁县",
      "label": "晋宁县"
    }, {
      "value": "富民县",
      "label": "富民县"
    }, {
      "value": "宜良县",
      "label": "宜良县"
    }, {
      "value": "石林彝族自治县",
      "label": "石林彝族自治县"
    }, {
      "value": "嵩明县",
      "label": "嵩明县"
    }, {
      "value": "禄劝彝族苗族自治县",
      "label": "禄劝彝族苗族自治县"
    }, {
      "value": "寻甸回族彝族自治县",
      "label": "寻甸回族彝族自治县"
    }, {
      "value": "安宁市",
      "label": "安宁市"
    }]
  }, {
    "value": "曲靖市",
    "label": "曲靖市",
    "children": [{
      "value": "麒麟区",
      "label": "麒麟区"
    }, {
      "value": "沾益区",
      "label": "沾益区"
    }, {
      "value": "马龙县",
      "label": "马龙县"
    }, {
      "value": "陆良县",
      "label": "陆良县"
    }, {
      "value": "师宗县",
      "label": "师宗县"
    }, {
      "value": "罗平县",
      "label": "罗平县"
    }, {
      "value": "富源县",
      "label": "富源县"
    }, {
      "value": "会泽县",
      "label": "会泽县"
    }, {
      "value": "宣威市",
      "label": "宣威市"
    }]
  }, {
    "value": "玉溪市",
    "label": "玉溪市",
    "children": [{
      "value": "红塔区",
      "label": "红塔区"
    }, {
      "value": "江川区",
      "label": "江川区"
    }, {
      "value": "澄江县",
      "label": "澄江县"
    }, {
      "value": "通海县",
      "label": "通海县"
    }, {
      "value": "华宁县",
      "label": "华宁县"
    }, {
      "value": "易门县",
      "label": "易门县"
    }, {
      "value": "峨山彝族自治县",
      "label": "峨山彝族自治县"
    }, {
      "value": "新平彝族傣族自治县",
      "label": "新平彝族傣族自治县"
    }, {
      "value": "元江哈尼族彝族傣族自治县",
      "label": "元江哈尼族彝族傣族自治县"
    }]
  }, {
    "value": "保山市",
    "label": "保山市",
    "children": [{
      "value": "隆阳区",
      "label": "隆阳区"
    }, {
      "value": "施甸县",
      "label": "施甸县"
    }, {
      "value": "龙陵县",
      "label": "龙陵县"
    }, {
      "value": "昌宁县",
      "label": "昌宁县"
    }, {
      "value": "腾冲市",
      "label": "腾冲市"
    }]
  }, {
    "value": "昭通市",
    "label": "昭通市",
    "children": [{
      "value": "昭阳区",
      "label": "昭阳区"
    }, {
      "value": "鲁甸县",
      "label": "鲁甸县"
    }, {
      "value": "巧家县",
      "label": "巧家县"
    }, {
      "value": "盐津县",
      "label": "盐津县"
    }, {
      "value": "大关县",
      "label": "大关县"
    }, {
      "value": "永善县",
      "label": "永善县"
    }, {
      "value": "绥江县",
      "label": "绥江县"
    }, {
      "value": "镇雄县",
      "label": "镇雄县"
    }, {
      "value": "彝良县",
      "label": "彝良县"
    }, {
      "value": "威信县",
      "label": "威信县"
    }, {
      "value": "水富县",
      "label": "水富县"
    }]
  }, {
    "value": "丽江市",
    "label": "丽江市",
    "children": [{
      "value": "古城区",
      "label": "古城区"
    }, {
      "value": "玉龙纳西族自治县",
      "label": "玉龙纳西族自治县"
    }, {
      "value": "永胜县",
      "label": "永胜县"
    }, {
      "value": "华坪县",
      "label": "华坪县"
    }, {
      "value": "宁蒗彝族自治县",
      "label": "宁蒗彝族自治县"
    }]
  }, {
    "value": "普洱市",
    "label": "普洱市",
    "children": [{
      "value": "思茅区",
      "label": "思茅区"
    }, {
      "value": "宁洱哈尼族彝族自治县",
      "label": "宁洱哈尼族彝族自治县"
    }, {
      "value": "墨江哈尼族自治县",
      "label": "墨江哈尼族自治县"
    }, {
      "value": "景东彝族自治县",
      "label": "景东彝族自治县"
    }, {
      "value": "景谷傣族彝族自治县",
      "label": "景谷傣族彝族自治县"
    }, {
      "value": "镇沅彝族哈尼族拉祜族自治县",
      "label": "镇沅彝族哈尼族拉祜族自治县"
    }, {
      "value": "江城哈尼族彝族自治县",
      "label": "江城哈尼族彝族自治县"
    }, {
      "value": "孟连傣族拉祜族佤族自治县",
      "label": "孟连傣族拉祜族佤族自治县"
    }, {
      "value": "澜沧拉祜族自治县",
      "label": "澜沧拉祜族自治县"
    }, {
      "value": "西盟佤族自治县",
      "label": "西盟佤族自治县"
    }]
  }, {
    "value": "临沧市",
    "label": "临沧市",
    "children": [{
      "value": "临翔区",
      "label": "临翔区"
    }, {
      "value": "凤庆县",
      "label": "凤庆县"
    }, {
      "value": "云县",
      "label": "云县"
    }, {
      "value": "永德县",
      "label": "永德县"
    }, {
      "value": "镇康县",
      "label": "镇康县"
    }, {
      "value": "双江拉祜族佤族布朗族傣族自治县",
      "label": "双江拉祜族佤族布朗族傣族自治县"
    }, {
      "value": "耿马傣族佤族自治县",
      "label": "耿马傣族佤族自治县"
    }, {
      "value": "沧源佤族自治县",
      "label": "沧源佤族自治县"
    }]
  }, {
    "value": "楚雄彝族自治州",
    "label": "楚雄彝族自治州",
    "children": [{
      "value": "楚雄市",
      "label": "楚雄市"
    }, {
      "value": "双柏县",
      "label": "双柏县"
    }, {
      "value": "牟定县",
      "label": "牟定县"
    }, {
      "value": "南华县",
      "label": "南华县"
    }, {
      "value": "姚安县",
      "label": "姚安县"
    }, {
      "value": "大姚县",
      "label": "大姚县"
    }, {
      "value": "永仁县",
      "label": "永仁县"
    }, {
      "value": "元谋县",
      "label": "元谋县"
    }, {
      "value": "武定县",
      "label": "武定县"
    }, {
      "value": "禄丰县",
      "label": "禄丰县"
    }]
  }, {
    "value": "红河哈尼族彝族自治州",
    "label": "红河哈尼族彝族自治州",
    "children": [{
      "value": "个旧市",
      "label": "个旧市"
    }, {
      "value": "开远市",
      "label": "开远市"
    }, {
      "value": "蒙自市",
      "label": "蒙自市"
    }, {
      "value": "弥勒市",
      "label": "弥勒市"
    }, {
      "value": "屏边苗族自治县",
      "label": "屏边苗族自治县"
    }, {
      "value": "建水县",
      "label": "建水县"
    }, {
      "value": "石屏县",
      "label": "石屏县"
    }, {
      "value": "泸西县",
      "label": "泸西县"
    }, {
      "value": "元阳县",
      "label": "元阳县"
    }, {
      "value": "红河县",
      "label": "红河县"
    }, {
      "value": "金平苗族瑶族傣族自治县",
      "label": "金平苗族瑶族傣族自治县"
    }, {
      "value": "绿春县",
      "label": "绿春县"
    }, {
      "value": "河口瑶族自治县",
      "label": "河口瑶族自治县"
    }]
  }, {
    "value": "文山壮族苗族自治州",
    "label": "文山壮族苗族自治州",
    "children": [{
      "value": "文山市",
      "label": "文山市"
    }, {
      "value": "砚山县",
      "label": "砚山县"
    }, {
      "value": "西畴县",
      "label": "西畴县"
    }, {
      "value": "麻栗坡县",
      "label": "麻栗坡县"
    }, {
      "value": "马关县",
      "label": "马关县"
    }, {
      "value": "丘北县",
      "label": "丘北县"
    }, {
      "value": "广南县",
      "label": "广南县"
    }, {
      "value": "富宁县",
      "label": "富宁县"
    }]
  }, {
    "value": "西双版纳傣族自治州",
    "label": "西双版纳傣族自治州",
    "children": [{
      "value": "景洪市",
      "label": "景洪市"
    }, {
      "value": "勐海县",
      "label": "勐海县"
    }, {
      "value": "勐腊县",
      "label": "勐腊县"
    }]
  }, {
    "value": "大理白族自治州",
    "label": "大理白族自治州",
    "children": [{
      "value": "大理市",
      "label": "大理市"
    }, {
      "value": "漾濞彝族自治县",
      "label": "漾濞彝族自治县"
    }, {
      "value": "祥云县",
      "label": "祥云县"
    }, {
      "value": "宾川县",
      "label": "宾川县"
    }, {
      "value": "弥渡县",
      "label": "弥渡县"
    }, {
      "value": "南涧彝族自治县",
      "label": "南涧彝族自治县"
    }, {
      "value": "巍山彝族回族自治县",
      "label": "巍山彝族回族自治县"
    }, {
      "value": "永平县",
      "label": "永平县"
    }, {
      "value": "云龙县",
      "label": "云龙县"
    }, {
      "value": "洱源县",
      "label": "洱源县"
    }, {
      "value": "剑川县",
      "label": "剑川县"
    }, {
      "value": "鹤庆县",
      "label": "鹤庆县"
    }]
  }, {
    "value": "德宏傣族景颇族自治州",
    "label": "德宏傣族景颇族自治州",
    "children": [{
      "value": "瑞丽市",
      "label": "瑞丽市"
    }, {
      "value": "芒市",
      "label": "芒市"
    }, {
      "value": "梁河县",
      "label": "梁河县"
    }, {
      "value": "盈江县",
      "label": "盈江县"
    }, {
      "value": "陇川县",
      "label": "陇川县"
    }]
  }, {
    "value": "怒江傈僳族自治州",
    "label": "怒江傈僳族自治州",
    "children": [{
      "value": "泸水市",
      "label": "泸水市"
    }, {
      "value": "福贡县",
      "label": "福贡县"
    }, {
      "value": "贡山独龙族怒族自治县",
      "label": "贡山独龙族怒族自治县"
    }, {
      "value": "兰坪白族普米族自治县",
      "label": "兰坪白族普米族自治县"
    }]
  }, {
    "value": "迪庆藏族自治州",
    "label": "迪庆藏族自治州",
    "children": [{
      "value": "香格里拉市",
      "label": "香格里拉市"
    }, {
      "value": "德钦县",
      "label": "德钦县"
    }, {
      "value": "维西傈僳族自治县",
      "label": "维西傈僳族自治县"
    }]
  }]
}, {
  "value": "西藏自治区",
  "label": "西藏自治区",
  "children": [{
    "value": "拉萨市",
    "label": "拉萨市",
    "children": [{
      "value": "城关区",
      "label": "城关区"
    }, {
      "value": "堆龙德庆区",
      "label": "堆龙德庆区"
    }, {
      "value": "林周县",
      "label": "林周县"
    }, {
      "value": "当雄县",
      "label": "当雄县"
    }, {
      "value": "尼木县",
      "label": "尼木县"
    }, {
      "value": "曲水县",
      "label": "曲水县"
    }, {
      "value": "达孜县",
      "label": "达孜县"
    }, {
      "value": "墨竹工卡县",
      "label": "墨竹工卡县"
    }]
  }, {
    "value": "日喀则市",
    "label": "日喀则市",
    "children": [{
      "value": "桑珠孜区",
      "label": "桑珠孜区"
    }, {
      "value": "南木林县",
      "label": "南木林县"
    }, {
      "value": "江孜县",
      "label": "江孜县"
    }, {
      "value": "定日县",
      "label": "定日县"
    }, {
      "value": "萨迦县",
      "label": "萨迦县"
    }, {
      "value": "拉孜县",
      "label": "拉孜县"
    }, {
      "value": "昂仁县",
      "label": "昂仁县"
    }, {
      "value": "谢通门县",
      "label": "谢通门县"
    }, {
      "value": "白朗县",
      "label": "白朗县"
    }, {
      "value": "仁布县",
      "label": "仁布县"
    }, {
      "value": "康马县",
      "label": "康马县"
    }, {
      "value": "定结县",
      "label": "定结县"
    }, {
      "value": "仲巴县",
      "label": "仲巴县"
    }, {
      "value": "亚东县",
      "label": "亚东县"
    }, {
      "value": "吉隆县",
      "label": "吉隆县"
    }, {
      "value": "聂拉木县",
      "label": "聂拉木县"
    }, {
      "value": "萨嘎县",
      "label": "萨嘎县"
    }, {
      "value": "岗巴县",
      "label": "岗巴县"
    }]
  }, {
    "value": "昌都市",
    "label": "昌都市",
    "children": [{
      "value": "卡若区",
      "label": "卡若区"
    }, {
      "value": "江达县",
      "label": "江达县"
    }, {
      "value": "贡觉县",
      "label": "贡觉县"
    }, {
      "value": "类乌齐县",
      "label": "类乌齐县"
    }, {
      "value": "丁青县",
      "label": "丁青县"
    }, {
      "value": "察雅县",
      "label": "察雅县"
    }, {
      "value": "八宿县",
      "label": "八宿县"
    }, {
      "value": "左贡县",
      "label": "左贡县"
    }, {
      "value": "芒康县",
      "label": "芒康县"
    }, {
      "value": "洛隆县",
      "label": "洛隆县"
    }, {
      "value": "边坝县",
      "label": "边坝县"
    }]
  }, {
    "value": "林芝市",
    "label": "林芝市",
    "children": [{
      "value": "巴宜区",
      "label": "巴宜区"
    }, {
      "value": "工布江达县",
      "label": "工布江达县"
    }, {
      "value": "米林县",
      "label": "米林县"
    }, {
      "value": "墨脱县",
      "label": "墨脱县"
    }, {
      "value": "波密县",
      "label": "波密县"
    }, {
      "value": "察隅县",
      "label": "察隅县"
    }, {
      "value": "朗县",
      "label": "朗县"
    }]
  }, {
    "value": "山南市",
    "label": "山南市",
    "children": [{
      "value": "乃东区",
      "label": "乃东区"
    }, {
      "value": "扎囊县",
      "label": "扎囊县"
    }, {
      "value": "贡嘎县",
      "label": "贡嘎县"
    }, {
      "value": "桑日县",
      "label": "桑日县"
    }, {
      "value": "琼结县",
      "label": "琼结县"
    }, {
      "value": "曲松县",
      "label": "曲松县"
    }, {
      "value": "措美县",
      "label": "措美县"
    }, {
      "value": "洛扎县",
      "label": "洛扎县"
    }, {
      "value": "加查县",
      "label": "加查县"
    }, {
      "value": "隆子县",
      "label": "隆子县"
    }, {
      "value": "错那县",
      "label": "错那县"
    }, {
      "value": "浪卡子县",
      "label": "浪卡子县"
    }]
  }, {
    "value": "那曲地区",
    "label": "那曲地区",
    "children": [{
      "value": "那曲县",
      "label": "那曲县"
    }, {
      "value": "嘉黎县",
      "label": "嘉黎县"
    }, {
      "value": "比如县",
      "label": "比如县"
    }, {
      "value": "聂荣县",
      "label": "聂荣县"
    }, {
      "value": "安多县",
      "label": "安多县"
    }, {
      "value": "申扎县",
      "label": "申扎县"
    }, {
      "value": "索县",
      "label": "索县"
    }, {
      "value": "班戈县",
      "label": "班戈县"
    }, {
      "value": "巴青县",
      "label": "巴青县"
    }, {
      "value": "尼玛县",
      "label": "尼玛县"
    }, {
      "value": "双湖县",
      "label": "双湖县"
    }]
  }, {
    "value": "阿里地区",
    "label": "阿里地区",
    "children": [{
      "value": "普兰县",
      "label": "普兰县"
    }, {
      "value": "札达县",
      "label": "札达县"
    }, {
      "value": "噶尔县",
      "label": "噶尔县"
    }, {
      "value": "日土县",
      "label": "日土县"
    }, {
      "value": "革吉县",
      "label": "革吉县"
    }, {
      "value": "改则县",
      "label": "改则县"
    }, {
      "value": "措勤县",
      "label": "措勤县"
    }]
  }]
}, {
  "value": "陕西省",
  "label": "陕西省",
  "children": [{
    "value": "西安市",
    "label": "西安市",
    "children": [{
      "value": "新城区",
      "label": "新城区"
    }, {
      "value": "碑林区",
      "label": "碑林区"
    }, {
      "value": "莲湖区",
      "label": "莲湖区"
    }, {
      "value": "灞桥区",
      "label": "灞桥区"
    }, {
      "value": "未央区",
      "label": "未央区"
    }, {
      "value": "雁塔区",
      "label": "雁塔区"
    }, {
      "value": "阎良区",
      "label": "阎良区"
    }, {
      "value": "临潼区",
      "label": "临潼区"
    }, {
      "value": "长安区",
      "label": "长安区"
    }, {
      "value": "高陵区",
      "label": "高陵区"
    }, {
      "value": "蓝田县",
      "label": "蓝田县"
    }, {
      "value": "周至县",
      "label": "周至县"
    }, {
      "value": "户县",
      "label": "户县"
    }]
  }, {
    "value": "铜川市",
    "label": "铜川市",
    "children": [{
      "value": "王益区",
      "label": "王益区"
    }, {
      "value": "印台区",
      "label": "印台区"
    }, {
      "value": "耀州区",
      "label": "耀州区"
    }, {
      "value": "宜君县",
      "label": "宜君县"
    }]
  }, {
    "value": "宝鸡市",
    "label": "宝鸡市",
    "children": [{
      "value": "渭滨区",
      "label": "渭滨区"
    }, {
      "value": "金台区",
      "label": "金台区"
    }, {
      "value": "陈仓区",
      "label": "陈仓区"
    }, {
      "value": "凤翔县",
      "label": "凤翔县"
    }, {
      "value": "岐山县",
      "label": "岐山县"
    }, {
      "value": "扶风县",
      "label": "扶风县"
    }, {
      "value": "眉县",
      "label": "眉县"
    }, {
      "value": "陇县",
      "label": "陇县"
    }, {
      "value": "千阳县",
      "label": "千阳县"
    }, {
      "value": "麟游县",
      "label": "麟游县"
    }, {
      "value": "凤县",
      "label": "凤县"
    }, {
      "value": "太白县",
      "label": "太白县"
    }]
  }, {
    "value": "咸阳市",
    "label": "咸阳市",
    "children": [{
      "value": "秦都区",
      "label": "秦都区"
    }, {
      "value": "杨陵区",
      "label": "杨陵区"
    }, {
      "value": "渭城区",
      "label": "渭城区"
    }, {
      "value": "三原县",
      "label": "三原县"
    }, {
      "value": "泾阳县",
      "label": "泾阳县"
    }, {
      "value": "乾县",
      "label": "乾县"
    }, {
      "value": "礼泉县",
      "label": "礼泉县"
    }, {
      "value": "永寿县",
      "label": "永寿县"
    }, {
      "value": "彬县",
      "label": "彬县"
    }, {
      "value": "长武县",
      "label": "长武县"
    }, {
      "value": "旬邑县",
      "label": "旬邑县"
    }, {
      "value": "淳化县",
      "label": "淳化县"
    }, {
      "value": "武功县",
      "label": "武功县"
    }, {
      "value": "兴平市",
      "label": "兴平市"
    }]
  }, {
    "value": "渭南市",
    "label": "渭南市",
    "children": [{
      "value": "临渭区",
      "label": "临渭区"
    }, {
      "value": "华州区",
      "label": "华州区"
    }, {
      "value": "潼关县",
      "label": "潼关县"
    }, {
      "value": "大荔县",
      "label": "大荔县"
    }, {
      "value": "合阳县",
      "label": "合阳县"
    }, {
      "value": "澄城县",
      "label": "澄城县"
    }, {
      "value": "蒲城县",
      "label": "蒲城县"
    }, {
      "value": "白水县",
      "label": "白水县"
    }, {
      "value": "富平县",
      "label": "富平县"
    }, {
      "value": "韩城市",
      "label": "韩城市"
    }, {
      "value": "华阴市",
      "label": "华阴市"
    }]
  }, {
    "value": "延安市",
    "label": "延安市",
    "children": [{
      "value": "宝塔区",
      "label": "宝塔区"
    }, {
      "value": "安塞区",
      "label": "安塞区"
    }, {
      "value": "延长县",
      "label": "延长县"
    }, {
      "value": "延川县",
      "label": "延川县"
    }, {
      "value": "子长县",
      "label": "子长县"
    }, {
      "value": "志丹县",
      "label": "志丹县"
    }, {
      "value": "吴起县",
      "label": "吴起县"
    }, {
      "value": "甘泉县",
      "label": "甘泉县"
    }, {
      "value": "富县",
      "label": "富县"
    }, {
      "value": "洛川县",
      "label": "洛川县"
    }, {
      "value": "宜川县",
      "label": "宜川县"
    }, {
      "value": "黄龙县",
      "label": "黄龙县"
    }, {
      "value": "黄陵县",
      "label": "黄陵县"
    }]
  }, {
    "value": "汉中市",
    "label": "汉中市",
    "children": [{
      "value": "汉台区",
      "label": "汉台区"
    }, {
      "value": "南郑县",
      "label": "南郑县"
    }, {
      "value": "城固县",
      "label": "城固县"
    }, {
      "value": "洋县",
      "label": "洋县"
    }, {
      "value": "西乡县",
      "label": "西乡县"
    }, {
      "value": "勉县",
      "label": "勉县"
    }, {
      "value": "宁强县",
      "label": "宁强县"
    }, {
      "value": "略阳县",
      "label": "略阳县"
    }, {
      "value": "镇巴县",
      "label": "镇巴县"
    }, {
      "value": "留坝县",
      "label": "留坝县"
    }, {
      "value": "佛坪县",
      "label": "佛坪县"
    }]
  }, {
    "value": "榆林市",
    "label": "榆林市",
    "children": [{
      "value": "榆阳区",
      "label": "榆阳区"
    }, {
      "value": "横山区",
      "label": "横山区"
    }, {
      "value": "神木县",
      "label": "神木县"
    }, {
      "value": "府谷县",
      "label": "府谷县"
    }, {
      "value": "靖边县",
      "label": "靖边县"
    }, {
      "value": "定边县",
      "label": "定边县"
    }, {
      "value": "绥德县",
      "label": "绥德县"
    }, {
      "value": "米脂县",
      "label": "米脂县"
    }, {
      "value": "佳县",
      "label": "佳县"
    }, {
      "value": "吴堡县",
      "label": "吴堡县"
    }, {
      "value": "清涧县",
      "label": "清涧县"
    }, {
      "value": "子洲县",
      "label": "子洲县"
    }]
  }, {
    "value": "安康市",
    "label": "安康市",
    "children": [{
      "value": "汉滨区",
      "label": "汉滨区"
    }, {
      "value": "汉阴县",
      "label": "汉阴县"
    }, {
      "value": "石泉县",
      "label": "石泉县"
    }, {
      "value": "宁陕县",
      "label": "宁陕县"
    }, {
      "value": "紫阳县",
      "label": "紫阳县"
    }, {
      "value": "岚皋县",
      "label": "岚皋县"
    }, {
      "value": "平利县",
      "label": "平利县"
    }, {
      "value": "镇坪县",
      "label": "镇坪县"
    }, {
      "value": "旬阳县",
      "label": "旬阳县"
    }, {
      "value": "白河县",
      "label": "白河县"
    }]
  }, {
    "value": "商洛市",
    "label": "商洛市",
    "children": [{
      "value": "商州区",
      "label": "商州区"
    }, {
      "value": "洛南县",
      "label": "洛南县"
    }, {
      "value": "丹凤县",
      "label": "丹凤县"
    }, {
      "value": "商南县",
      "label": "商南县"
    }, {
      "value": "山阳县",
      "label": "山阳县"
    }, {
      "value": "镇安县",
      "label": "镇安县"
    }, {
      "value": "柞水县",
      "label": "柞水县"
    }]
  }]
}, {
  "value": "甘肃省",
  "label": "甘肃省",
  "children": [{
    "value": "兰州市",
    "label": "兰州市",
    "children": [{
      "value": "城关区",
      "label": "城关区"
    }, {
      "value": "七里河区",
      "label": "七里河区"
    }, {
      "value": "西固区",
      "label": "西固区"
    }, {
      "value": "安宁区",
      "label": "安宁区"
    }, {
      "value": "红古区",
      "label": "红古区"
    }, {
      "value": "永登县",
      "label": "永登县"
    }, {
      "value": "皋兰县",
      "label": "皋兰县"
    }, {
      "value": "榆中县",
      "label": "榆中县"
    }]
  }, {
    "value": "嘉峪关市",
    "label": "嘉峪关市",
    "children": [{
      "value": "新城镇",
      "label": "新城镇"
    }, {
      "value": "峪泉镇",
      "label": "峪泉镇"
    }, {
      "value": "文殊镇",
      "label": "文殊镇"
    }, {
      "value": "雄关区",
      "label": "雄关区"
    }, {
      "value": "镜铁区",
      "label": "镜铁区"
    }, {
      "value": "长城区",
      "label": "长城区"
    }]
  }, {
    "value": "金昌市",
    "label": "金昌市",
    "children": [{
      "value": "金川区",
      "label": "金川区"
    }, {
      "value": "永昌县",
      "label": "永昌县"
    }]
  }, {
    "value": "白银市",
    "label": "白银市",
    "children": [{
      "value": "白银区",
      "label": "白银区"
    }, {
      "value": "平川区",
      "label": "平川区"
    }, {
      "value": "靖远县",
      "label": "靖远县"
    }, {
      "value": "会宁县",
      "label": "会宁县"
    }, {
      "value": "景泰县",
      "label": "景泰县"
    }]
  }, {
    "value": "天水市",
    "label": "天水市",
    "children": [{
      "value": "秦州区",
      "label": "秦州区"
    }, {
      "value": "麦积区",
      "label": "麦积区"
    }, {
      "value": "清水县",
      "label": "清水县"
    }, {
      "value": "秦安县",
      "label": "秦安县"
    }, {
      "value": "甘谷县",
      "label": "甘谷县"
    }, {
      "value": "武山县",
      "label": "武山县"
    }, {
      "value": "张家川回族自治县",
      "label": "张家川回族自治县"
    }]
  }, {
    "value": "武威市",
    "label": "武威市",
    "children": [{
      "value": "凉州区",
      "label": "凉州区"
    }, {
      "value": "民勤县",
      "label": "民勤县"
    }, {
      "value": "古浪县",
      "label": "古浪县"
    }, {
      "value": "天祝藏族自治县",
      "label": "天祝藏族自治县"
    }]
  }, {
    "value": "张掖市",
    "label": "张掖市",
    "children": [{
      "value": "甘州区",
      "label": "甘州区"
    }, {
      "value": "肃南裕固族自治县",
      "label": "肃南裕固族自治县"
    }, {
      "value": "民乐县",
      "label": "民乐县"
    }, {
      "value": "临泽县",
      "label": "临泽县"
    }, {
      "value": "高台县",
      "label": "高台县"
    }, {
      "value": "山丹县",
      "label": "山丹县"
    }]
  }, {
    "value": "平凉市",
    "label": "平凉市",
    "children": [{
      "value": "崆峒区",
      "label": "崆峒区"
    }, {
      "value": "泾川县",
      "label": "泾川县"
    }, {
      "value": "灵台县",
      "label": "灵台县"
    }, {
      "value": "崇信县",
      "label": "崇信县"
    }, {
      "value": "华亭县",
      "label": "华亭县"
    }, {
      "value": "庄浪县",
      "label": "庄浪县"
    }, {
      "value": "静宁县",
      "label": "静宁县"
    }]
  }, {
    "value": "酒泉市",
    "label": "酒泉市",
    "children": [{
      "value": "肃州区",
      "label": "肃州区"
    }, {
      "value": "金塔县",
      "label": "金塔县"
    }, {
      "value": "瓜州县",
      "label": "瓜州县"
    }, {
      "value": "肃北蒙古族自治县",
      "label": "肃北蒙古族自治县"
    }, {
      "value": "阿克塞哈萨克族自治县",
      "label": "阿克塞哈萨克族自治县"
    }, {
      "value": "玉门市",
      "label": "玉门市"
    }, {
      "value": "敦煌市",
      "label": "敦煌市"
    }]
  }, {
    "value": "庆阳市",
    "label": "庆阳市",
    "children": [{
      "value": "西峰区",
      "label": "西峰区"
    }, {
      "value": "庆城县",
      "label": "庆城县"
    }, {
      "value": "环县",
      "label": "环县"
    }, {
      "value": "华池县",
      "label": "华池县"
    }, {
      "value": "合水县",
      "label": "合水县"
    }, {
      "value": "正宁县",
      "label": "正宁县"
    }, {
      "value": "宁县",
      "label": "宁县"
    }, {
      "value": "镇原县",
      "label": "镇原县"
    }]
  }, {
    "value": "定西市",
    "label": "定西市",
    "children": [{
      "value": "安定区",
      "label": "安定区"
    }, {
      "value": "通渭县",
      "label": "通渭县"
    }, {
      "value": "陇西县",
      "label": "陇西县"
    }, {
      "value": "渭源县",
      "label": "渭源县"
    }, {
      "value": "临洮县",
      "label": "临洮县"
    }, {
      "value": "漳县",
      "label": "漳县"
    }, {
      "value": "岷县",
      "label": "岷县"
    }]
  }, {
    "value": "陇南市",
    "label": "陇南市",
    "children": [{
      "value": "武都区",
      "label": "武都区"
    }, {
      "value": "成县",
      "label": "成县"
    }, {
      "value": "文县",
      "label": "文县"
    }, {
      "value": "宕昌县",
      "label": "宕昌县"
    }, {
      "value": "康县",
      "label": "康县"
    }, {
      "value": "西和县",
      "label": "西和县"
    }, {
      "value": "礼县",
      "label": "礼县"
    }, {
      "value": "徽县",
      "label": "徽县"
    }, {
      "value": "两当县",
      "label": "两当县"
    }]
  }, {
    "value": "临夏回族自治州",
    "label": "临夏回族自治州",
    "children": [{
      "value": "临夏市",
      "label": "临夏市"
    }, {
      "value": "临夏县",
      "label": "临夏县"
    }, {
      "value": "康乐县",
      "label": "康乐县"
    }, {
      "value": "永靖县",
      "label": "永靖县"
    }, {
      "value": "广河县",
      "label": "广河县"
    }, {
      "value": "和政县",
      "label": "和政县"
    }, {
      "value": "东乡族自治县",
      "label": "东乡族自治县"
    }, {
      "value": "积石山保安族东乡族撒拉族自治县",
      "label": "积石山保安族东乡族撒拉族自治县"
    }]
  }, {
    "value": "甘南藏族自治州",
    "label": "甘南藏族自治州",
    "children": [{
      "value": "合作市",
      "label": "合作市"
    }, {
      "value": "临潭县",
      "label": "临潭县"
    }, {
      "value": "卓尼县",
      "label": "卓尼县"
    }, {
      "value": "舟曲县",
      "label": "舟曲县"
    }, {
      "value": "迭部县",
      "label": "迭部县"
    }, {
      "value": "玛曲县",
      "label": "玛曲县"
    }, {
      "value": "碌曲县",
      "label": "碌曲县"
    }, {
      "value": "夏河县",
      "label": "夏河县"
    }]
  }]
}, {
  "value": "青海省",
  "label": "青海省",
  "children": [{
    "value": "西宁市",
    "label": "西宁市",
    "children": [{
      "value": "城东区",
      "label": "城东区"
    }, {
      "value": "城中区",
      "label": "城中区"
    }, {
      "value": "城西区",
      "label": "城西区"
    }, {
      "value": "城北区",
      "label": "城北区"
    }, {
      "value": "大通回族土族自治县",
      "label": "大通回族土族自治县"
    }, {
      "value": "湟中县",
      "label": "湟中县"
    }, {
      "value": "湟源县",
      "label": "湟源县"
    }]
  }, {
    "value": "海东市",
    "label": "海东市",
    "children": [{
      "value": "乐都区",
      "label": "乐都区"
    }, {
      "value": "平安区",
      "label": "平安区"
    }, {
      "value": "民和回族土族自治县",
      "label": "民和回族土族自治县"
    }, {
      "value": "互助土族自治县",
      "label": "互助土族自治县"
    }, {
      "value": "化隆回族自治县",
      "label": "化隆回族自治县"
    }, {
      "value": "循化撒拉族自治县",
      "label": "循化撒拉族自治县"
    }]
  }, {
    "value": "海北藏族自治州",
    "label": "海北藏族自治州",
    "children": [{
      "value": "门源回族自治县",
      "label": "门源回族自治县"
    }, {
      "value": "祁连县",
      "label": "祁连县"
    }, {
      "value": "海晏县",
      "label": "海晏县"
    }, {
      "value": "刚察县",
      "label": "刚察县"
    }]
  }, {
    "value": "黄南藏族自治州",
    "label": "黄南藏族自治州",
    "children": [{
      "value": "同仁县",
      "label": "同仁县"
    }, {
      "value": "尖扎县",
      "label": "尖扎县"
    }, {
      "value": "泽库县",
      "label": "泽库县"
    }, {
      "value": "河南蒙古族自治县",
      "label": "河南蒙古族自治县"
    }]
  }, {
    "value": "海南藏族自治州",
    "label": "海南藏族自治州",
    "children": [{
      "value": "共和县",
      "label": "共和县"
    }, {
      "value": "同德县",
      "label": "同德县"
    }, {
      "value": "贵德县",
      "label": "贵德县"
    }, {
      "value": "兴海县",
      "label": "兴海县"
    }, {
      "value": "贵南县",
      "label": "贵南县"
    }]
  }, {
    "value": "果洛藏族自治州",
    "label": "果洛藏族自治州",
    "children": [{
      "value": "玛沁县",
      "label": "玛沁县"
    }, {
      "value": "班玛县",
      "label": "班玛县"
    }, {
      "value": "甘德县",
      "label": "甘德县"
    }, {
      "value": "达日县",
      "label": "达日县"
    }, {
      "value": "久治县",
      "label": "久治县"
    }, {
      "value": "玛多县",
      "label": "玛多县"
    }]
  }, {
    "value": "玉树藏族自治州",
    "label": "玉树藏族自治州",
    "children": [{
      "value": "玉树市",
      "label": "玉树市"
    }, {
      "value": "杂多县",
      "label": "杂多县"
    }, {
      "value": "称多县",
      "label": "称多县"
    }, {
      "value": "治多县",
      "label": "治多县"
    }, {
      "value": "囊谦县",
      "label": "囊谦县"
    }, {
      "value": "曲麻莱县",
      "label": "曲麻莱县"
    }]
  }, {
    "value": "海西蒙古族藏族自治州",
    "label": "海西蒙古族藏族自治州",
    "children": [{
      "value": "格尔木市",
      "label": "格尔木市"
    }, {
      "value": "德令哈市",
      "label": "德令哈市"
    }, {
      "value": "乌兰县",
      "label": "乌兰县"
    }, {
      "value": "都兰县",
      "label": "都兰县"
    }, {
      "value": "天峻县",
      "label": "天峻县"
    }]
  }]
}, {
  "value": "宁夏回族自治区",
  "label": "宁夏回族自治区",
  "children": [{
    "value": "银川市",
    "label": "银川市",
    "children": [{
      "value": "兴庆区",
      "label": "兴庆区"
    }, {
      "value": "西夏区",
      "label": "西夏区"
    }, {
      "value": "金凤区",
      "label": "金凤区"
    }, {
      "value": "永宁县",
      "label": "永宁县"
    }, {
      "value": "贺兰县",
      "label": "贺兰县"
    }, {
      "value": "灵武市",
      "label": "灵武市"
    }]
  }, {
    "value": "石嘴山市",
    "label": "石嘴山市",
    "children": [{
      "value": "大武口区",
      "label": "大武口区"
    }, {
      "value": "惠农区",
      "label": "惠农区"
    }, {
      "value": "平罗县",
      "label": "平罗县"
    }]
  }, {
    "value": "吴忠市",
    "label": "吴忠市",
    "children": [{
      "value": "利通区",
      "label": "利通区"
    }, {
      "value": "红寺堡区",
      "label": "红寺堡区"
    }, {
      "value": "盐池县",
      "label": "盐池县"
    }, {
      "value": "同心县",
      "label": "同心县"
    }, {
      "value": "青铜峡市",
      "label": "青铜峡市"
    }]
  }, {
    "value": "固原市",
    "label": "固原市",
    "children": [{
      "value": "原州区",
      "label": "原州区"
    }, {
      "value": "西吉县",
      "label": "西吉县"
    }, {
      "value": "隆德县",
      "label": "隆德县"
    }, {
      "value": "泾源县",
      "label": "泾源县"
    }, {
      "value": "彭阳县",
      "label": "彭阳县"
    }]
  }, {
    "value": "中卫市",
    "label": "中卫市",
    "children": [{
      "value": "沙坡头区",
      "label": "沙坡头区"
    }, {
      "value": "中宁县",
      "label": "中宁县"
    }, {
      "value": "海原县",
      "label": "海原县"
    }]
  }]
}, {
  "value": "新疆维吾尔自治区",
  "label": "新疆维吾尔自治区",
  "children": [{
    "value": "乌鲁木齐市",
    "label": "乌鲁木齐市",
    "children": [{
      "value": "天山区",
      "label": "天山区"
    }, {
      "value": "沙依巴克区",
      "label": "沙依巴克区"
    }, {
      "value": "新市区",
      "label": "新市区"
    }, {
      "value": "水磨沟区",
      "label": "水磨沟区"
    }, {
      "value": "头屯河区",
      "label": "头屯河区"
    }, {
      "value": "达坂城区",
      "label": "达坂城区"
    }, {
      "value": "米东区",
      "label": "米东区"
    }, {
      "value": "乌鲁木齐县",
      "label": "乌鲁木齐县"
    }]
  }, {
    "value": "克拉玛依市",
    "label": "克拉玛依市",
    "children": [{
      "value": "独山子区",
      "label": "独山子区"
    }, {
      "value": "克拉玛依区",
      "label": "克拉玛依区"
    }, {
      "value": "白碱滩区",
      "label": "白碱滩区"
    }, {
      "value": "乌尔禾区",
      "label": "乌尔禾区"
    }]
  }, {
    "value": "吐鲁番市",
    "label": "吐鲁番市",
    "children": [{
      "value": "高昌区",
      "label": "高昌区"
    }, {
      "value": "鄯善县",
      "label": "鄯善县"
    }, {
      "value": "托克逊县",
      "label": "托克逊县"
    }]
  }, {
    "value": "哈密市",
    "label": "哈密市",
    "children": [{
      "value": "伊州区",
      "label": "伊州区"
    }, {
      "value": "巴里坤哈萨克自治县",
      "label": "巴里坤哈萨克自治县"
    }, {
      "value": "伊吾县",
      "label": "伊吾县"
    }]
  }, {
    "value": "昌吉回族自治州",
    "label": "昌吉回族自治州",
    "children": [{
      "value": "昌吉市",
      "label": "昌吉市"
    }, {
      "value": "阜康市",
      "label": "阜康市"
    }, {
      "value": "呼图壁县",
      "label": "呼图壁县"
    }, {
      "value": "玛纳斯县",
      "label": "玛纳斯县"
    }, {
      "value": "奇台县",
      "label": "奇台县"
    }, {
      "value": "吉木萨尔县",
      "label": "吉木萨尔县"
    }, {
      "value": "木垒哈萨克自治县",
      "label": "木垒哈萨克自治县"
    }]
  }, {
    "value": "博尔塔拉蒙古自治州",
    "label": "博尔塔拉蒙古自治州",
    "children": [{
      "value": "博乐市",
      "label": "博乐市"
    }, {
      "value": "阿拉山口市",
      "label": "阿拉山口市"
    }, {
      "value": "精河县",
      "label": "精河县"
    }, {
      "value": "温泉县",
      "label": "温泉县"
    }]
  }, {
    "value": "巴音郭楞蒙古自治州",
    "label": "巴音郭楞蒙古自治州",
    "children": [{
      "value": "库尔勒市",
      "label": "库尔勒市"
    }, {
      "value": "轮台县",
      "label": "轮台县"
    }, {
      "value": "尉犁县",
      "label": "尉犁县"
    }, {
      "value": "若羌县",
      "label": "若羌县"
    }, {
      "value": "且末县",
      "label": "且末县"
    }, {
      "value": "焉耆回族自治县",
      "label": "焉耆回族自治县"
    }, {
      "value": "和静县",
      "label": "和静县"
    }, {
      "value": "和硕县",
      "label": "和硕县"
    }, {
      "value": "博湖县",
      "label": "博湖县"
    }]
  }, {
    "value": "阿克苏地区",
    "label": "阿克苏地区",
    "children": [{
      "value": "阿克苏市",
      "label": "阿克苏市"
    }, {
      "value": "温宿县",
      "label": "温宿县"
    }, {
      "value": "库车县",
      "label": "库车县"
    }, {
      "value": "沙雅县",
      "label": "沙雅县"
    }, {
      "value": "新和县",
      "label": "新和县"
    }, {
      "value": "拜城县",
      "label": "拜城县"
    }, {
      "value": "乌什县",
      "label": "乌什县"
    }, {
      "value": "阿瓦提县",
      "label": "阿瓦提县"
    }, {
      "value": "柯坪县",
      "label": "柯坪县"
    }]
  }, {
    "value": "克孜勒苏柯尔克孜自治州",
    "label": "克孜勒苏柯尔克孜自治州",
    "children": [{
      "value": "阿图什市",
      "label": "阿图什市"
    }, {
      "value": "阿克陶县",
      "label": "阿克陶县"
    }, {
      "value": "阿合奇县",
      "label": "阿合奇县"
    }, {
      "value": "乌恰县",
      "label": "乌恰县"
    }]
  }, {
    "value": "喀什地区",
    "label": "喀什地区",
    "children": [{
      "value": "喀什市",
      "label": "喀什市"
    }, {
      "value": "疏附县",
      "label": "疏附县"
    }, {
      "value": "疏勒县",
      "label": "疏勒县"
    }, {
      "value": "英吉沙县",
      "label": "英吉沙县"
    }, {
      "value": "泽普县",
      "label": "泽普县"
    }, {
      "value": "莎车县",
      "label": "莎车县"
    }, {
      "value": "叶城县",
      "label": "叶城县"
    }, {
      "value": "麦盖提县",
      "label": "麦盖提县"
    }, {
      "value": "岳普湖县",
      "label": "岳普湖县"
    }, {
      "value": "伽师县",
      "label": "伽师县"
    }, {
      "value": "巴楚县",
      "label": "巴楚县"
    }, {
      "value": "塔什库尔干塔吉克自治县",
      "label": "塔什库尔干塔吉克自治县"
    }]
  }, {
    "value": "和田地区",
    "label": "和田地区",
    "children": [{
      "value": "和田市",
      "label": "和田市"
    }, {
      "value": "和田县",
      "label": "和田县"
    }, {
      "value": "墨玉县",
      "label": "墨玉县"
    }, {
      "value": "皮山县",
      "label": "皮山县"
    }, {
      "value": "洛浦县",
      "label": "洛浦县"
    }, {
      "value": "策勒县",
      "label": "策勒县"
    }, {
      "value": "于田县",
      "label": "于田县"
    }, {
      "value": "民丰县",
      "label": "民丰县"
    }]
  }, {
    "value": "伊犁哈萨克自治州",
    "label": "伊犁哈萨克自治州",
    "children": [{
      "value": "伊宁市",
      "label": "伊宁市"
    }, {
      "value": "奎屯市",
      "label": "奎屯市"
    }, {
      "value": "霍尔果斯市",
      "label": "霍尔果斯市"
    }, {
      "value": "伊宁县",
      "label": "伊宁县"
    }, {
      "value": "察布查尔锡伯自治县",
      "label": "察布查尔锡伯自治县"
    }, {
      "value": "霍城县",
      "label": "霍城县"
    }, {
      "value": "巩留县",
      "label": "巩留县"
    }, {
      "value": "新源县",
      "label": "新源县"
    }, {
      "value": "昭苏县",
      "label": "昭苏县"
    }, {
      "value": "特克斯县",
      "label": "特克斯县"
    }, {
      "value": "尼勒克县",
      "label": "尼勒克县"
    }]
  }, {
    "value": "塔城地区",
    "label": "塔城地区",
    "children": [{
      "value": "塔城市",
      "label": "塔城市"
    }, {
      "value": "乌苏市",
      "label": "乌苏市"
    }, {
      "value": "额敏县",
      "label": "额敏县"
    }, {
      "value": "沙湾县",
      "label": "沙湾县"
    }, {
      "value": "托里县",
      "label": "托里县"
    }, {
      "value": "裕民县",
      "label": "裕民县"
    }, {
      "value": "和布克赛尔蒙古自治县",
      "label": "和布克赛尔蒙古自治县"
    }]
  }, {
    "value": "阿勒泰地区",
    "label": "阿勒泰地区",
    "children": [{
      "value": "阿勒泰市",
      "label": "阿勒泰市"
    }, {
      "value": "布尔津县",
      "label": "布尔津县"
    }, {
      "value": "富蕴县",
      "label": "富蕴县"
    }, {
      "value": "福海县",
      "label": "福海县"
    }, {
      "value": "哈巴河县",
      "label": "哈巴河县"
    }, {
      "value": "青河县",
      "label": "青河县"
    }, {
      "value": "吉木乃县",
      "label": "吉木乃县"
    }]
  }, {
    "value": "自治区直辖县级行政区划",
    "label": "自治区直辖县级行政区划",
    "children": [{
      "value": "石河子市",
      "label": "石河子市"
    }, {
      "value": "阿拉尔市",
      "label": "阿拉尔市"
    }, {
      "value": "图木舒克市",
      "label": "图木舒克市"
    }, {
      "value": "五家渠市",
      "label": "五家渠市"
    }, {
      "value": "铁门关市",
      "label": "铁门关市"
    }]
  }]
}];

/* harmony default export */ __webpack_exports__["a"] = (area);

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(947),
  /* template */
  __webpack_require__(960),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/apply.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] apply.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56349a8a", Component.options)
  } else {
    hotAPI.reload("data-v-56349a8a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(948),
  /* template */
  __webpack_require__(963),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/auditInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] auditInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-848c5336", Component.options)
  } else {
    hotAPI.reload("data-v-848c5336", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "apply"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "apply",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                申请基本信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        申请人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.applyUserName) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        申请时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.applyDate) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        申请部门\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.applyDeptName) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        申请产品\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.product_name.productName) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        推荐渠道\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.channalName) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        客户姓名\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.clientName) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        证件类型\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.client.certificatesTypeText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        证件号\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.client.certificatesNumber) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        借款金额\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.initLoanAmountText + '元') + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        借款日期\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.initLoanDate) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        借款期限\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.initLoanPeriod + '个月') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        借款用途\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.loanUsage) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        还款方式\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.initRepayMethodText) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        其他还款方式说明\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "13"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.hmProjPlan.repaymentRemark) + "\n                    ")])], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('mortgage', {
    attrs: {
      "step": _vm.step,
      "model": _vm.model
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-56349a8a", module.exports)
  }
}

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('apply', {
    attrs: {
      "model": _vm.model,
      "dicts": _vm.dicts,
      "step": _vm.step
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('files')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-848c5336", module.exports)
  }
}

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this = this;

        return {
            familyColumns: [{
                title: '关系', width: 200, render: function render(h, params) {
                    _this.model.stakeholderList[_this.getIndex(params.row.guid)] = params.row;
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择关系',
                            value: params.row.relationship
                        },
                        on: {
                            'on-change': function onChange(value) {
                                params.row.relationship = value;
                            }
                        }
                    }, _this.dicts.RELATIONSHIP.map(function (item) {
                        return h('Option', { props: { value: item.id, key: item.id, label: item.text } });
                    }));
                }
            }, {
                title: '姓名', width: 220, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '姓名',
                            value: params.row.name
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.name = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '证件类型', width: 200, render: function render(h, params) {
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择证件类型',
                            value: params.row.certificatesType
                        },
                        on: {
                            'on-change': function onChange(value) {
                                params.row.certificatesType = value;
                            }
                        }
                    }, _this.dicts.CERTIFICATESTYPE.map(function (item) {
                        return h('Option', { props: { value: item.id, key: item.id, label: item.text } });
                    }));
                }
            }, {
                title: '证件号', width: 320, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '证件号',
                            value: params.row.certificatesNumber
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.certificatesNumber = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '职业', width: 200, render: function render(h, params) {
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择职业',
                            value: params.row.occupation
                        },
                        on: {
                            'on-change': function onChange(value) {
                                params.row.occupation = value;
                            }
                        }
                    }, _this.dicts.OCCUPATION.map(function (item) {
                        return h('Option', { props: { value: item.id, key: item.id, label: item.text } });
                    }));
                }
            }, {
                title: '年收入(元)', width: 220, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            type: 'text',
                            maxlength: 20,
                            clearable: true,
                            placeholder: '年收入',
                            value: params.row.income
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.income = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '其他说明', width: 320, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 500,
                            clearable: true,
                            placeholder: '其他说明',
                            value: params.row.otherDesc
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.otherDesc = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '操作', width: 60, align: 'center', fixed: 'right', render: function render(h, params) {
                    return h('a', [h('Tooltip', {
                        props: {
                            content: '删除',
                            placement: 'top'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-close',
                            size: 20,
                            color: '#ed4014'
                        },
                        on: {
                            click: function click() {
                                _this.del(params.row);
                            }
                        }
                    })])]);
                }
            }],
            commonColumns: [{
                title: '关系', width: 200, render: function render(h, params) {
                    _this.model.stakeholderList[_this.getIndex(params.row.guid)] = params.row;
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择关系',
                            value: params.row.relationship
                        },
                        on: {
                            'on-change': function onChange(value) {
                                params.row.relationship = value;
                            }
                        }
                    }, _this.dicts.RELATIONSHIP.map(function (item) {
                        return h('Option', { props: { value: item.id, key: item.id, label: item.text } });
                    }));
                }
            }, {
                title: '姓名', width: 220, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '姓名',
                            value: params.row.name
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.name = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '证件类型', width: 200, render: function render(h, params) {
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择证件类型',
                            value: params.row.certificatesType
                        },
                        on: {
                            'on-change': function onChange(value) {
                                params.row.certificatesType = value;
                            }
                        }
                    }, _this.dicts.CERTIFICATESTYPE.map(function (item) {
                        return h('Option', { props: { value: item.id, key: item.id, label: item.text } });
                    }));
                }
            }, {
                title: '证件号', width: 320, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '证件号',
                            value: params.row.certificatesNumber
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.certificatesNumber = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '职业', width: 200, render: function render(h, params) {
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择职业',
                            value: params.row.occupation
                        },
                        on: {
                            'on-change': function onChange(value) {
                                params.row.occupation = value;
                            }
                        }
                    }, _this.dicts.OCCUPATION.map(function (item) {
                        return h('Option', { props: { value: item.id, key: item.id, label: item.text } });
                    }));
                }
            }, {
                title: '年收入(元)', width: 220, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            type: 'text',
                            maxlength: 20,
                            clearable: true,
                            placeholder: '年收入',
                            value: params.row.income
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.income = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '为实际用款人', width: 120, render: function render(h, params) {
                    return h('RadioGroup', {
                        props: {
                            value: params.row.actualUseFlag
                        },
                        on: {
                            'on-change': function onChange(value) {
                                params.row.actualUseFlag = value;
                            }
                        }
                    }, _this.dicts.ACTUALUSEFLAG.map(function (item) {
                        return h('Radio', {
                            props: {
                                label: item.id,
                                key: item.id
                            }
                        }, item.text);
                    }));
                }
            }, {
                title: '其他说明', width: 320, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 500,
                            clearable: true,
                            placeholder: '其他说明',
                            value: params.row.otherDesc
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.otherDesc = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '操作', width: 60, align: 'center', fixed: 'right', render: function render(h, params) {
                    return h('a', [h('Tooltip', {
                        props: {
                            content: '删除',
                            placement: 'top'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-close',
                            size: 20,
                            color: '#ed4014'
                        },
                        on: {
                            click: function click() {
                                _this.del(params.row);
                            }
                        }
                    })])]);
                }
            }],
            sociologyColumns: [{ title: '征信渠道', key: 'socialinfoTypeText' }, {
                title: '存在', render: function render(h, params) {
                    _this.model.socialInfoList[params.index] = params.row;
                    return h('RadioGroup', {
                        props: {
                            value: params.row.existsFlag
                        }
                    }, _this.dicts.EXISTSFLAG.map(function (item) {
                        return h('Radio', {
                            props: {
                                label: item.id,
                                key: item.id
                            }
                        }, item.text);
                    }));
                }
            }, {
                title: '负面信息说明', width: 500, render: function render(h, params) {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 500,
                            value: params.row.otherDesc
                        },
                        on: {
                            'on-change': function onChange(event) {
                                params.row.otherDesc = event.target.value;
                            }
                        }
                    });
                }
            }, {
                title: '操作', width: 60, align: 'center', render: function render(h, params) {
                    return h('a', {
                        style: {
                            display: params.row.socialinfoType === '4' ? 'block' : 'none'
                        }
                    }[h('Tooltip', {
                        props: {
                            content: '删除',
                            placement: 'top'
                        }
                    }, [h('Icon', {
                        props: {
                            type: 'md-close',
                            size: 20,
                            color: '#ed4014'
                        },
                        on: {
                            click: function click() {
                                _this.model.socialInfoList.splice(params.index, 1);
                            }
                        }
                    })])]);
                }
            }],
            sociologyData: [{ channel: '汇法网', existence: 0, default: true }, { channel: '全国失信人名单', existence: 0, default: true }, { channel: '被执行人查询', existence: 0, default: true }, { channel: '人法网', existence: 0, default: true }]
        };
    },

    props: {
        model: Object,
        dicts: Object
    },
    methods: {
        add: function add(flag, natural) {
            this.model.stakeholderList.push({
                busiType: flag,
                naturalFlag: natural ? natural : null,
                income: null,
                guid: new Date().getTime()
            });
        },
        getIndex: function getIndex(guid) {
            return this.model.stakeholderList.findIndex(function (item) {
                return item.guid === guid;
            });
        },
        del: function del(item) {
            this.model.stakeholderList.splice(this.getIndex(item.guid), 1);
        },
        plus: function plus() {
            var index = this.dicts.SOCIALINFOTYPE.length - 1;
            this.model.socialInfoList.push({
                socialinfoType: this.dicts.SOCIALINFOTYPE[index].id,
                socialinfoTypeText: this.dicts.SOCIALINFOTYPE[index].text,
                clientId: this.model.client.spouse.id
            });
        },
        uploadSuccess: function uploadSuccess(response, file, fileList) {
            if (fileList.length > 1) fileList.shift();
            response.files[0].fileId = response.files[0].id;
            response.files[0].projectFileGroup = response.projectFileGroup;
            this.model.fileList.push(file.response.files[0]);
        },
        uploadError: function uploadError(error, file, fileList) {
            fileList.splice(fileList.indexOf(file), 1);
            this.$Message.error('上传失败');
        },
        preview: function preview(file) {
            window.open(file.response.files[0].path);
        },
        formatError: function formatError(file) {
            this.$Message.error('文件(' + file.name + ')类型错误，请选择图片或PDF文件。');
        },
        remove: function remove(file) {
            this.model.fileList.splice(this.model.fileList.indexOf(file.response.files[0]), 1);
        },
        loadModel: function loadModel() {
            var _this2 = this;

            this.$axios.options.url = 'houseMortgage/hmProjStakeholder/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this2.$Message.error(response.msg || _this2.$config.ERROR);
                    return;
                }
                var time = new Date().getTime();
                response.data.forEach(function (item) {
                    item.guid = time++;
                });
                _this2.model.stakeholderList = response.data;
                _this2.dicts.RELATIONSHIP = response.dicts.RELATIONSHIP;
                _this2.dicts.ACTUALUSEFLAG = response.dicts.ACTUALUSEFLAG;
            }).catch(function (error) {
                _this2.$Message.error(_this2.$config.ERROR);
            });
        },
        loadCredit: function loadCredit() {
            var _this3 = this;

            this.$axios.options.url = 'houseMortgage/hmProjCreditinvest/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this3.$Message.error(response.msg || _this3.$config.ERROR);
                    return;
                }
                _this3.model.hmProjectCreditinvesBeanList = response.data.length ? response.data : [{
                    continuousOverdue: null,
                    accumlativeOverdue: null,
                    latestQueryNum: null,
                    totalLoanNum: null
                }];
                _this3.dicts.CREDITTYPE = response.dicts.CREDITTYPE;
            }).catch(function (error) {
                _this3.$Message.error(_this3.$config.ERROR);
            });
        },
        loadSocial: function loadSocial() {
            var _this4 = this;

            this.$axios.options.url = 'houseMortgage/hmProjSocialinfo/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this4.$Message.error(response.msg || _this4.$config.ERROR);
                    return;
                }
                _this4.dicts.EXISTSFLAG = response.dicts.EXISTSFLAG;
                _this4.dicts.SOCIALINFOTYPE = response.dicts.SOCIALINFOTYPE;
                _this4.model.socialInfoList = [];
                _this4.dicts.SOCIALINFOTYPE.forEach(function (item) {
                    _this4.model.socialInfoList.push({
                        socialinfoType: item.id,
                        socialinfoTypeText: item.text,
                        clientId: _this4.model.client.spouse.id
                    });
                });
            }).catch(function (error) {
                _this4.$Message.error(_this4.$config.ERROR);
            });
        },
        loadFacetalk: function loadFacetalk() {
            var _this5 = this;

            this.$axios.options.url = 'houseMortgage/hmProjFacetalk/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this5.$Message.error(response.msg || _this5.$config.ERROR);
                    return;
                }
                _this5.model.hmProjFacetalk = response.data[0] ? response.data[0] : { clientNum: null };
                _this5.dicts.STAFFCOMPOSITION = response.dicts.STAFFCOMPOSITION;
                _this5.dicts.FLUENCY = response.dicts.FLUENCY;
                _this5.dicts.FEEENTANGLED = response.dicts.FEEENTANGLED;
                _this5.dicts.CERTFLAG = response.dicts.CERTFLAG;
            }).catch(function (error) {
                _this5.$Message.error(_this5.$config.ERROR);
            });
        }
    },
    created: function created() {
        if (!this.model.fileList) this.model.fileList = [];
        this.dicts.EXISTSFLAG = [];
        this.model.hmProjFacetalk = {};
        this.model.stakeholderList = [];
        this.model.hmProjectCreditinvesBeanList = this.model.socialInfoList = [{}];
        this.loadModel();
        this.loadCredit();
        this.loadSocial();
        this.loadFacetalk();
    },
    mounted: function mounted() {
        $('#content').width($(document).width() - 270);
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(953)))

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_util__ = __webpack_require__(203);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            model: {
                cost: {},
                estimate: {}
            }
        };
    },

    methods: {
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjFee/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.model.cost = response.data.find(function (item) {
                    item.fee = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(item.fee);
                    return item.feeType === '0';
                }) || {};
                _this.model.estimate = response.data.find(function (item) {
                    item.fee = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_util__["j" /* formatMoney */])(item.fee);
                    return item.feeType === '1';
                }) || {};
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        }
    },
    created: function created() {
        this.loadModel();
    }
});

/***/ }),

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        model: Object
    },
    data: function data() {
        return {
            defaults: {
                borrower: [],
                occupation: [],
                credit: [],
                common: [],
                mortgages: []
            },
            uploads: {
                borrower: [],
                occupation: [],
                credit: [],
                common: [],
                mortgages: []
            }
        };
    },

    methods: {
        getFiles: function getFiles(list, flag) {
            var array = list.filter(function (item) {
                return item.projectFileGroup === flag;
            });
            if (array[0]) this.model.fileList = this.model.fileList.concat(array[0].files);
            return array[0] ? array[0].files : [];
        },
        loadModel: function loadModel() {
            var _this = this;

            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({ data: { projectId: this.$router.currentRoute.params.id } }).then(function (response) {
                if (response.httpCode != 200) {
                    _this.$Message.error(response.msg || _this.$config.ERROR);
                    return;
                }
                _this.defaults.borrower = _this.getFiles(response.data, '4');
                _this.defaults.occupation = _this.getFiles(response.data, '5');
                _this.defaults.credit = _this.getFiles(response.data, '6');
                _this.defaults.common = _this.getFiles(response.data, '7');
                _this.defaults.mortgages = _this.getFiles(response.data, '8');
                setTimeout(function () {
                    _this.uploads.occupation = _this.$refs.occupation.fileList;
                    _this.uploads.borrower = _this.$refs.borrower.fileList;
                    _this.uploads.credit = _this.$refs.credit.fileList;
                    _this.uploads.common = _this.$refs.common.fileList;
                    _this.uploads.mortgages = _this.$refs.mortgages.fileList;
                }, 1000);
            }).catch(function (error) {
                _this.$Message.error(_this.$config.ERROR);
            });
        },
        uploadSuccess: function uploadSuccess(response, file) {
            response.files[0].fileId = response.files[0].id;
            response.files[0].projectFileGroup = response.projectFileGroup;
            this.model.fileList.push(response.files[0]);
        },
        uploadError: function uploadError(error, file, fileList) {
            fileList.splice(fileList.indexOf(file), 1);
            this.$Message.error('上传失败');
        },
        remove: function remove(name, file) {
            this.$refs[name].fileList.splice(this.$refs[name].fileList.indexOf(file), 1);
            this.model.fileList.splice(this.model.fileList.indexOf(file.response.files[0]), 1);
        },
        formatError: function formatError(file) {
            this.$Message.error('文件(' + file.name + ')类型错误，请选择图片或PDF文件。');
        }
    },
    created: function created() {
        if (!this.model.fileList) this.model.fileList = [];
    },
    mounted: function mounted() {
        this.loadModel();
    }
});

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(964),
  /* template */
  __webpack_require__(976),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/borrowerInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] borrowerInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70c7fef4", Component.options)
  } else {
    hotAPI.reload("data-v-70c7fef4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(965),
  /* template */
  __webpack_require__(978),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/chargeInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] chargeInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d6a2a418", Component.options)
  } else {
    hotAPI.reload("data-v-d6a2a418", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(968),
  /* template */
  __webpack_require__(977),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/projectInformation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] projectInformation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c387467", Component.options)
  } else {
    hotAPI.reload("data-v-7c387467", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "content"
    }
  }, [_c('Collapse', {
    attrs: {
      "value": "borrower"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "borrower",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                借款人信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        个人信息\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    客户编号\n                                ")]), _vm._v("\n                                " + _vm._s(_vm.model.client.innerId) + "\n                            ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.clientName"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    姓名\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 20,
      "placeholder": "客户姓名 | 必填"
    },
    model: {
      value: (_vm.model.client.clientName),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "clientName", $$v)
      },
      expression: "model.client.clientName"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.oldName"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    曾用名\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 20,
      "placeholder": "曾用名 | 必填"
    },
    model: {
      value: (_vm.model.client.oldName),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "oldName", $$v)
      },
      expression: "model.client.oldName"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.sex"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    性别\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择性别 | 必填"
    },
    model: {
      value: (_vm.model.client.sex),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "sex", $$v)
      },
      expression: "model.client.sex"
    }
  }, _vm._l((_vm.dicts.SEX), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.birthday"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    出生日期\n                                ")]), _vm._v(" "), _c('DatePicker', {
    attrs: {
      "type": "date",
      "placeholder": "选择日期 | 必填"
    },
    model: {
      value: (_vm.model.client.birthday),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "birthday", $$v)
      },
      expression: "model.client.birthday"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    年龄\n                                ")]), _vm._v("\n                                " + _vm._s(_vm.model.client.age) + "\n                            ")])], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.certificatesType"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    证件类型\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择证件 | 必填"
    },
    model: {
      value: (_vm.model.client.certificatesType),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "certificatesType", $$v)
      },
      expression: "model.client.certificatesType"
    }
  }, _vm._l((_vm.dicts.CERTIFICATESTYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.certificatesNumber"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    证件号\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 20,
      "placeholder": "证件号 | 必填"
    },
    model: {
      value: (_vm.model.client.certificatesNumber),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "certificatesNumber", $$v)
      },
      expression: "model.client.certificatesNumber"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.maritalStatus"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    婚姻状况\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择婚姻状况 | 必填"
    },
    model: {
      value: (_vm.model.client.maritalStatus),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "maritalStatus", $$v)
      },
      expression: "model.client.maritalStatus"
    }
  }, _vm._l((_vm.dicts.MARITALSTATUS), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.children"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    子女情况\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择子女情况 | 必填"
    },
    model: {
      value: (_vm.model.client.children),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "children", $$v)
      },
      expression: "model.client.children"
    }
  }, _vm._l((_vm.dicts.CHILDREN), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    最高学历\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择最高学历"
    },
    model: {
      value: (_vm.model.client.education),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "education", $$v)
      },
      expression: "model.client.education"
    }
  }, _vm._l((_vm.dicts.EDUCATION), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.customerSource"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    客户来源\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择客户来源 | 必填"
    },
    model: {
      value: (_vm.model.client.customerSource),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "customerSource", $$v)
      },
      expression: "model.client.customerSource"
    }
  }, _vm._l((_vm.dicts.CUSTOMERSOURCE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.personalIncome"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    个人年收入\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 20,
      "placeholder": "个人年收入"
    },
    model: {
      value: (_vm.model.client.personalIncome),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "personalIncome", $$v)
      },
      expression: "model.client.personalIncome"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("元")])])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.householdIncome"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    家庭年收入\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 20,
      "placeholder": "个人收入"
    },
    model: {
      value: (_vm.model.client.householdIncome),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "householdIncome", $$v)
      },
      expression: "model.client.householdIncome"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("元")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        职业\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.workSituation"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    工作情况\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择工作情况 | 必填"
    },
    model: {
      value: (_vm.model.client.workSituation),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "workSituation", $$v)
      },
      expression: "model.client.workSituation"
    }
  }, _vm._l((_vm.dicts.WORKSITUATION), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.businessNature"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    企业性质\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择企业性质 | 必填"
    },
    model: {
      value: (_vm.model.client.businessNature),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "businessNature", $$v)
      },
      expression: "model.client.businessNature"
    }
  }, _vm._l((_vm.dicts.BUSINESSNATURE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    单位名称\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 50,
      "placeholder": "单位名称"
    },
    model: {
      value: (_vm.model.client.companyName),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "companyName", $$v)
      },
      expression: "model.client.companyName"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.occupation"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    职业\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择职业 | 必填"
    },
    model: {
      value: (_vm.model.client.occupation),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "occupation", $$v)
      },
      expression: "model.client.occupation"
    }
  }, _vm._l((_vm.dicts.OCCUPATION), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.enterpriseScale"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    企业规模\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择企业规模 | 必填"
    },
    model: {
      value: (_vm.model.client.enterpriseScale),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "enterpriseScale", $$v)
      },
      expression: "model.client.enterpriseScale"
    }
  }, _vm._l((_vm.dicts.ENTERPRISESCALE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    行业类别\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择行业类别"
    },
    model: {
      value: (_vm.model.client.industryType),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "industryType", $$v)
      },
      expression: "model.client.industryType"
    }
  }, _vm._l((_vm.dicts.INDUSTRYTYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.job"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    职务\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择职务 | 必填"
    },
    model: {
      value: (_vm.model.client.job),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "job", $$v)
      },
      expression: "model.client.job"
    }
  }, _vm._l((_vm.dicts.JOB), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    单位地址\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 100,
      "placeholder": "单位地址"
    },
    model: {
      value: (_vm.model.client.companyAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "companyAddress", $$v)
      },
      expression: "model.client.companyAddress"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    单位电话\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 15,
      "placeholder": "单位电话"
    },
    model: {
      value: (_vm.model.client.companyPhone),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "companyPhone", $$v)
      },
      expression: "model.client.companyPhone"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        地理&联系\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.phoneNumber"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    手机\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 11,
      "clearable": "",
      "placeholder": "手机"
    },
    model: {
      value: (_vm.model.client.phoneNumber),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "phoneNumber", $$v)
      },
      expression: "model.client.phoneNumber"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    邮政编码\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 6,
      "placeholder": "邮政编码"
    },
    model: {
      value: (_vm.model.client.postalCode),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "postalCode", $$v)
      },
      expression: "model.client.postalCode"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.liveAddress"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    居住情况\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择居住情况 | 必填"
    },
    model: {
      value: (_vm.model.client.liveAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "liveAddress", $$v)
      },
      expression: "model.client.liveAddress"
    }
  }, _vm._l((_vm.dicts.LIVEADDRESS), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.nowLiveAddress"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    现居住地址\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 100,
      "placeholder": "现居住地址 | 必填"
    },
    model: {
      value: (_vm.model.client.nowLiveAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "nowLiveAddress", $$v)
      },
      expression: "model.client.nowLiveAddress"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.sameAddress"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    与抵押物相同\n                                ")]), _vm._v(" "), _c('RadioGroup', {
    model: {
      value: (_vm.model.client.sameAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "sameAddress", $$v)
      },
      expression: "model.client.sameAddress"
    }
  }, _vm._l((_vm.dicts.SAMEADDRESS), function(item) {
    return _c('Radio', {
      key: item.id,
      attrs: {
        "label": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.mailAddress"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    通信地址\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 100,
      "placeholder": "通信地址 | 必填"
    },
    model: {
      value: (_vm.model.client.mailAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "mailAddress", $$v)
      },
      expression: "model.client.mailAddress"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  })], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.certificatesAddress"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    证件地址\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 100,
      "placeholder": "证件地址 | 必填"
    },
    model: {
      value: (_vm.model.client.certificatesAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "certificatesAddress", $$v)
      },
      expression: "model.client.certificatesAddress"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.permanentAddress"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    户籍地址\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 100,
      "placeholder": "户籍地址 | 必填"
    },
    model: {
      value: (_vm.model.client.permanentAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "permanentAddress", $$v)
      },
      expression: "model.client.permanentAddress"
    }
  })], 1)], 1)], 1)], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "spouse"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "spouse",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                配偶信息\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        个人信息\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.clientName"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    姓名\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 20,
      "placeholder": "姓名 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.clientName),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "clientName", $$v)
      },
      expression: "model.client.spouse.clientName"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.oldName"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    曾用名\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 20,
      "clearable": "",
      "placeholder": "曾用名 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.oldName),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "oldName", $$v)
      },
      expression: "model.client.spouse.oldName"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.sex"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    性别\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择性别 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.sex),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "sex", $$v)
      },
      expression: "model.client.spouse.sex"
    }
  }, _vm._l((_vm.dicts.SEX), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.birthday"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    出生日期\n                                ")]), _vm._v(" "), _c('DatePicker', {
    attrs: {
      "type": "date",
      "placeholder": "选择日期 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.birthday),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "birthday", $$v)
      },
      expression: "model.client.spouse.birthday"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    年龄\n                                ")]), _vm._v("\n                                " + _vm._s(_vm.model.client.spouse.age) + "\n                            ")])], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.certificatesType"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    证件类型\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择证件 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.certificatesType),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "certificatesType", $$v)
      },
      expression: "model.client.spouse.certificatesType"
    }
  }, _vm._l((_vm.dicts.CERTIFICATESTYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.certificatesNumber"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    证件号\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 20,
      "placeholder": "证件号 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.certificatesNumber),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "certificatesNumber", $$v)
      },
      expression: "model.client.spouse.certificatesNumber"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    最高学历\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择最高学历"
    },
    model: {
      value: (_vm.model.client.spouse.education),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "education", $$v)
      },
      expression: "model.client.spouse.education"
    }
  }, _vm._l((_vm.dicts.EDUCATION), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.personalIncome"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    个人年收入\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 20,
      "placeholder": "个人年收入"
    },
    model: {
      value: (_vm.model.client.spouse.personalIncome),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "personalIncome", $$v)
      },
      expression: "model.client.spouse.personalIncome"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("元")])])], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.nowLiveAddress"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    现居住地址\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 100,
      "placeholder": "现居住地址 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.nowLiveAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "nowLiveAddress", $$v)
      },
      expression: "model.client.spouse.nowLiveAddress"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.permanentAddress"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    户籍地址\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 100,
      "placeholder": "户籍地址 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.permanentAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "permanentAddress", $$v)
      },
      expression: "model.client.spouse.permanentAddress"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        职业\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.workSituation"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    工作情况\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择工作情况 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.workSituation),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "workSituation", $$v)
      },
      expression: "model.client.spouse.workSituation"
    }
  }, _vm._l((_vm.dicts.WORKSITUATION), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.businessNature"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    企业性质\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择企业性质 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.businessNature),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "businessNature", $$v)
      },
      expression: "model.client.spouse.businessNature"
    }
  }, _vm._l((_vm.dicts.BUSINESSNATURE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    单位名称\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 50,
      "placeholder": "单位名称"
    },
    model: {
      value: (_vm.model.client.spouse.companyName),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "companyName", $$v)
      },
      expression: "model.client.spouse.companyName"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.occupation"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    职业\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择职业 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.occupation),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "occupation", $$v)
      },
      expression: "model.client.spouse.occupation"
    }
  }, _vm._l((_vm.dicts.OCCUPATION), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.enterpriseScale"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    企业规模\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择企业规模 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.enterpriseScale),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "enterpriseScale", $$v)
      },
      expression: "model.client.spouse.enterpriseScale"
    }
  }, _vm._l((_vm.dicts.ENTERPRISESCALE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    行业类别\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择行业类别"
    },
    model: {
      value: (_vm.model.client.spouse.industryType),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "industryType", $$v)
      },
      expression: "model.client.spouse.industryType"
    }
  }, _vm._l((_vm.dicts.INDUSTRYTYPE), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.job"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    职务\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "clearable": "",
      "placeholder": "选择职务 | 必填"
    },
    model: {
      value: (_vm.model.client.spouse.job),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "job", $$v)
      },
      expression: "model.client.spouse.job"
    }
  }, _vm._l((_vm.dicts.JOB), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    单位地址\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 100,
      "placeholder": "单位地址"
    },
    model: {
      value: (_vm.model.client.spouse.companyAddress),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "companyAddress", $$v)
      },
      expression: "model.client.spouse.companyAddress"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    单位电话\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "clearable": "",
      "maxlength": 15,
      "placeholder": "单位电话"
    },
    model: {
      value: (_vm.model.client.spouse.companyPhone),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "companyPhone", $$v)
      },
      expression: "model.client.spouse.companyPhone"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        地理&联系\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.spouse.phoneNumber"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    手机\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 11,
      "clearable": "",
      "placeholder": "手机"
    },
    model: {
      value: (_vm.model.client.spouse.phoneNumber),
      callback: function($$v) {
        _vm.$set(_vm.model.client.spouse, "phoneNumber", $$v)
      },
      expression: "model.client.spouse.phoneNumber"
    }
  })], 1)], 1)], 1)], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "liabilities"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "liabilities",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                夫妻双方资产负债情况\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        资产\n                    ")]), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            房产\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "除抵押物外的其他房产，房产数量、类型、城市、面积、价值等信息",
      "clearable": "",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.client.shareHouse),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "shareHouse", $$v)
      },
      expression: "model.client.shareHouse"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            车辆\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "数量、品牌、价值等信息",
      "clearable": "",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.client.shareCar),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "shareCar", $$v)
      },
      expression: "model.client.shareCar"
    }
  })], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "client.shareSaving"
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    储蓄存款\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "存款金额",
      "clearable": "",
      "maxlength": 20
    },
    model: {
      value: (_vm.model.client.shareSaving),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "shareSaving", $$v)
      },
      expression: "model.client.shareSaving"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_vm._v("元")])])], 1)], 1)], 1), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            投资类\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "投资类型、金额",
      "clearable": "",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.client.shareInvest),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "shareInvest", $$v)
      },
      expression: "model.client.shareInvest"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            其他资产\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "其他资产",
      "clearable": "",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.client.shareOtherAsset),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "shareOtherAsset", $$v)
      },
      expression: "model.client.shareOtherAsset"
    }
  })], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        负债\n                    ")]), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            征信内负债\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "贷款机构/个人名称、贷款类型、贷款金额及余额",
      "clearable": "",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.client.shareDebt),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "shareDebt", $$v)
      },
      expression: "model.client.shareDebt"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            其他负债\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "其他负债",
      "clearable": "",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.client.shareOtherDebt),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "shareOtherDebt", $$v)
      },
      expression: "model.client.shareOtherDebt"
    }
  })], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        备注\n                    ")]), _vm._v(" "), _c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            备注\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "placeholder": "备注",
      "clearable": "",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.client.shareMemo),
      callback: function($$v) {
        _vm.$set(_vm.model.client, "shareMemo", $$v)
      },
      expression: "model.client.shareMemo"
    }
  })], 1)], 1)], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "family"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "family",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                家庭成员\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "grey-light-color font12",
    attrs: {
      "span": "20"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list",
      "size": "16"
    }
  }), _vm._v("\n                        成员列表\n                    ")], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "size": "small",
      "icon": "md-add",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.add('0')
      }
    }
  }, [_vm._v("\n                            添加\n                        ")])], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "columns": _vm.familyColumns,
      "data": _vm.model.stakeholderList.filter(function (item) {
        return item.busiType === '0';
      })
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "guarantee"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "guarantee",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                担保人\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "grey-light-color font12",
    attrs: {
      "span": "20"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list",
      "size": "16"
    }
  }), _vm._v("\n                        担保人(自然人)列表\n                    ")], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "size": "small",
      "icon": "md-add",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.add('1', '1')
      }
    }
  }, [_vm._v("\n                            添加\n                        ")])], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "columns": _vm.commonColumns,
      "data": _vm.model.stakeholderList.filter(function (item) {
        return item.busiType === '1' && item.naturalFlag === '1';
      })
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "grey-light-color font12",
    attrs: {
      "span": "20"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list",
      "size": "16"
    }
  }), _vm._v("\n                        担保人(法人)列表\n                    ")], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "size": "small",
      "icon": "md-add",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.add('1', '0')
      }
    }
  }, [_vm._v("\n                            添加\n                        ")])], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "columns": _vm.commonColumns,
      "data": _vm.model.stakeholderList.filter(function (item) {
        return item.busiType === '1' && item.naturalFlag === '0';
      })
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "common"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "common",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                共借人\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "grey-light-color font12",
    attrs: {
      "span": "20"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list",
      "size": "16"
    }
  }), _vm._v("\n                        共借人(自然人)列表\n                    ")], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "size": "small",
      "icon": "md-add",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.add('2', '1')
      }
    }
  }, [_vm._v("\n                            添加\n                        ")])], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "columns": _vm.commonColumns,
      "data": _vm.model.stakeholderList.filter(function (item) {
        return item.busiType === '2' && item.naturalFlag === '1';
      })
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "grey-light-color font12",
    attrs: {
      "span": "20"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list",
      "size": "16"
    }
  }), _vm._v("\n                        共借人(法人)列表\n                    ")], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "size": "small",
      "icon": "md-add",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.add('2', '0')
      }
    }
  }, [_vm._v("\n                            添加\n                        ")])], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "columns": _vm.commonColumns,
      "data": _vm.model.stakeholderList.filter(function (item) {
        return item.busiType === '2' && item.naturalFlag === '0';
      })
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "actual"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "actual",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                实际用款人\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "grey-light-color font12",
    attrs: {
      "span": "20"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-list",
      "size": "16"
    }
  }), _vm._v("\n                        用款人列表\n                    ")], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "size": "small",
      "icon": "md-add",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.add('3')
      }
    }
  }, [_vm._v("\n                            添加\n                        ")])], 1)], 1), _vm._v(" "), _c('Table', {
    staticClass: "mt5",
    attrs: {
      "columns": _vm.familyColumns,
      "data": _vm.model.stakeholderList.filter(function (item) {
        return item.busiType === '3'
      })
    }
  })], 1)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "credit"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "credit",
      "hide-arrow": true
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "20"
    }
  }, [_c('strong', [_vm._v("\n                        征信信息\n                    ")])])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('strong', [_vm._v("配偶：" + _vm._s(_vm.model.client.spouse.clientName + ' ' + _vm.model.client.spouse.certificatesNumber))]), _vm._v(" "), _c('Card', {
    staticClass: "mt5",
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        个人征信查询信息\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 170
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    征信报告查询日期\n                                ")]), _vm._v(" "), _c('DatePicker', {
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.model.hmProjectCreditinvesBeanList[0].queryDate),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectCreditinvesBeanList[0], "queryDate", $$v)
      },
      expression: "model.hmProjectCreditinvesBeanList[0].queryDate"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 170
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    征信情况\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择征信情况",
      "clearable": ""
    },
    model: {
      value: (_vm.model.hmProjectCreditinvesBeanList[0].creditType),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectCreditinvesBeanList[0], "creditType", $$v)
      },
      expression: "model.hmProjectCreditinvesBeanList[0].creditType"
    }
  }, _vm._l((_vm.dicts.CREDITTYPE), function(it) {
    return _c('Option', {
      key: it.id,
      attrs: {
        "value": it.id
      }
    }, [_vm._v("\n                                        " + _vm._s(it.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 170
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    逾期情况(信用卡+贷款)\n                                ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "7"
    }
  }, [_vm._v("\n                                        连\n                                        "), _c('InputNumber', {
    attrs: {
      "clearable": "",
      "placeholder": "连续",
      "min": 0,
      "precision": 2
    },
    model: {
      value: (_vm.model.hmProjectCreditinvesBeanList[0].continuousOverdue),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectCreditinvesBeanList[0], "continuousOverdue", $$v)
      },
      expression: "model.hmProjectCreditinvesBeanList[0].continuousOverdue"
    }
  })], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "7"
    }
  }, [_vm._v("\n                                        累\n                                        "), _c('InputNumber', {
    attrs: {
      "clearable": "",
      "placeholder": "累计",
      "min": 0,
      "precision": 2
    },
    model: {
      value: (_vm.model.hmProjectCreditinvesBeanList[0].accumlativeOverdue),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectCreditinvesBeanList[0], "accumlativeOverdue", $$v)
      },
      expression: "model.hmProjectCreditinvesBeanList[0].accumlativeOverdue"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 170
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    近半年查询次数(有效查询)\n                                ")]), _vm._v(" "), _c('InputNumber', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "clearable": "",
      "min": 0,
      "precision": 0,
      "placeholder": "查询次数"
    },
    model: {
      value: (_vm.model.hmProjectCreditinvesBeanList[0].latestQueryNum),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectCreditinvesBeanList[0], "latestQueryNum", $$v)
      },
      expression: "model.hmProjectCreditinvesBeanList[0].latestQueryNum"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 170
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    征信贷款总计(元)\n                                ")]), _vm._v(" "), _c('InputNumber', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "clearable": "",
      "min": 0,
      "precision": 2,
      "placeholder": "征信贷款总计"
    },
    model: {
      value: (_vm.model.hmProjectCreditinvesBeanList[0].totalLoanNum),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectCreditinvesBeanList[0], "totalLoanNum", $$v)
      },
      expression: "model.hmProjectCreditinvesBeanList[0].totalLoanNum"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 170
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    征信报告\n                                ")]), _vm._v(" "), _c('Upload', {
    attrs: {
      "on-preview": _vm.preview,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "action": _vm.$config.uploadUrl,
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-remove": _vm.remove,
      "on-format-error": _vm.formatError
    }
  }, [_c('Button', {
    attrs: {
      "icon": "md-cloud-upload"
    }
  }, [_vm._v("\n                                        上传征信报告\n                                    ")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 170
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            征信评价\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "clearable": "",
      "type": "textarea",
      "maxlength": 500,
      "placeholder": "征信评价"
    },
    model: {
      value: (_vm.model.hmProjectCreditinvesBeanList[0].creditDesc),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectCreditinvesBeanList[0], "creditDesc", $$v)
      },
      expression: "model.hmProjectCreditinvesBeanList[0].creditDesc"
    }
  })], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        社会信息查询\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "20"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 110
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    社会信息查询日期\n                                ")]), _vm._v(" "), _c('DatePicker', {
    attrs: {
      "type": "date",
      "clearable": "",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.model.socialSearchDate),
      callback: function($$v) {
        _vm.$set(_vm.model, "socialSearchDate", $$v)
      },
      expression: "model.socialSearchDate"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    staticClass: "text-right",
    attrs: {
      "span": "4"
    }
  }, [_c('Button', {
    attrs: {
      "icon": "md-add",
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.plus
    }
  }, [_vm._v("\n                                添加\n                            ")])], 1)], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "disabled-hover": "",
      "columns": _vm.sociologyColumns,
      "data": _vm.model.socialInfoList
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 110
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            社会信息汇总\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "maxlength": 500,
      "placeholder": "社会信息汇总"
    },
    model: {
      value: (_vm.model.hmProjectClob.socialInfoRemark),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "socialInfoRemark", $$v)
      },
      expression: "model.hmProjectClob.socialInfoRemark"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "interview"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "interview",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                面谈情况\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        现场面谈人员情况\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    中介人员及人数\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "中介人员及人数",
      "clearable": "",
      "maxlength": 100
    },
    model: {
      value: (_vm.model.hmProjFacetalk.agencyNum),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "agencyNum", $$v)
      },
      expression: "model.hmProjFacetalk.agencyNum"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    客户人数\n                                ")]), _vm._v(" "), _c('InputNumber', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "text",
      "precision": 0,
      "placeholder": "客户人数",
      "clearable": "",
      "maxlength": 20
    },
    model: {
      value: (_vm.model.hmProjFacetalk.clientNum),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "clientNum", $$v)
      },
      expression: "model.hmProjFacetalk.clientNum"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    我司人员构成\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择人员构成",
      "clearable": ""
    },
    model: {
      value: (_vm.model.hmProjFacetalk.staffComposition),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "staffComposition", $$v)
      },
      expression: "model.hmProjFacetalk.staffComposition"
    }
  }, _vm._l((_vm.dicts.STAFFCOMPOSITION), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    特殊人群情况\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "特殊人群情况",
      "maxlength": 100,
      "clearable": ""
    },
    model: {
      value: (_vm.model.hmProjFacetalk.specialMan),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "specialMan", $$v)
      },
      expression: "model.hmProjFacetalk.specialMan"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('FormItem', [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    实际面谈地点\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "实际面谈地点",
      "maxlength": 200,
      "clearable": ""
    },
    model: {
      value: (_vm.model.hmProjFacetalk.talkPlace),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "talkPlace", $$v)
      },
      expression: "model.hmProjFacetalk.talkPlace"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        面谈时各方人员的表现情况\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 270
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    客户本人对面谈的配合度及回答问题的流利程度\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择流利程度",
      "clearable": ""
    },
    model: {
      value: (_vm.model.hmProjFacetalk.fluency),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "fluency", $$v)
      },
      expression: "model.hmProjFacetalk.fluency"
    }
  }, _vm._l((_vm.dicts.FLUENCY), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 270
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    客户对金额及费用的纠结情况\n                                ")]), _vm._v(" "), _c('Select', {
    attrs: {
      "placeholder": "选择纠结情况",
      "clearable": ""
    },
    model: {
      value: (_vm.model.hmProjFacetalk.feeEntangled),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "feeEntangled", $$v)
      },
      expression: "model.hmProjFacetalk.feeEntangled"
    }
  }, _vm._l((_vm.dicts.FEEENTANGLED), function(item) {
    return _c('Option', {
      key: item.id,
      attrs: {
        "value": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 270
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    客户情绪如何\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "客户情绪如何",
      "maxlength": 100,
      "clearable": ""
    },
    model: {
      value: (_vm.model.hmProjFacetalk.emotion),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "emotion", $$v)
      },
      expression: "model.hmProjFacetalk.emotion"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 270
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    其他人员抢答情况，干预后继续抢答吗\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 50,
      "clearable": ""
    },
    model: {
      value: (_vm.model.hmProjFacetalk.raceDesc),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "raceDesc", $$v)
      },
      expression: "model.hmProjFacetalk.raceDesc"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Card', {
    attrs: {
      "dis-hover": ""
    }
  }, [_c('label', {
    staticClass: "grey-light-color font12",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("\n                        四证情况\n                    ")]), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 130
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    面谈是否见四证原件\n                                ")]), _vm._v(" "), _c('RadioGroup', {
    model: {
      value: (_vm.model.hmProjFacetalk.certFlag),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "certFlag", $$v)
      },
      expression: "model.hmProjFacetalk.certFlag"
    }
  }, _vm._l((_vm.dicts.CERTFLAG), function(item) {
    return _c('Radio', {
      key: item.id,
      attrs: {
        "label": item.id
      }
    }, [_vm._v("\n                                        " + _vm._s(item.text) + "\n                                    ")])
  }))], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('FormItem', {
    attrs: {
      "label-width": 130
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                                    四证是谁拿出来的\n                                ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "text",
      "maxlength": 20,
      "clearable": "",
      "placeholder": "四证是谁拿出来的"
    },
    model: {
      value: (_vm.model.hmProjFacetalk.certOwner),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "certOwner", $$v)
      },
      expression: "model.hmProjFacetalk.certOwner"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 130
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("\n                            未见四证的解释\n                        ")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "placeholder": "未见四证的解释",
      "maxlength": 500
    },
    model: {
      value: (_vm.model.hmProjFacetalk.reason),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjFacetalk, "reason", $$v)
      },
      expression: "model.hmProjFacetalk.reason"
    }
  })], 1)], 1)], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-70c7fef4", module.exports)
  }
}

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "borrower"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "borrower",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                借款人基本资料\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._l((_vm.uploads.borrower), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16 text-center"
    }, [(item.status === 'finished') ? [_c('Tooltip', {
      staticStyle: {
        "position": "absolute",
        "margin": "96px 0 0 36px"
      },
      attrs: {
        "placement": "left-end",
        "content": "删除"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-close-circle",
        "size": "24",
        "color": "#ed4014"
      },
      on: {
        "click": function($event) {
          _vm.remove('borrower', item)
        }
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })] : [_c('div', {
      staticStyle: {
        "line-height": "120px",
        "width": "100%"
      }
    }, [(item.showProgress) ? _c('Progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()], 1)]], 2)
  }), _vm._v(" "), _c('Upload', {
    ref: "borrower",
    staticClass: "inline-block",
    attrs: {
      "show-upload-list": false,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "default-file-list": _vm.defaults.borrower,
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-format-error": _vm.formatError,
      "data": {
        projectFileGroup: '4'
      },
      "type": "drag",
      "multiple": "",
      "action": _vm.$config.uploadUrl
    }
  }, [_c('div', {
    staticClass: "upload"
  }, [_c('div', {
    staticClass: "child mask text-center"
  }, [_c('Icon', {
    attrs: {
      "type": "md-cloud-upload",
      "color": "#0071b9",
      "size": "40"
    }
  }), _vm._v(" "), _c('p', [_vm._v("上传文件")])], 1)])]), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 40
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("备注")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "maxlength": 500,
      "placeholder": "备注"
    },
    model: {
      value: (_vm.model.hmProjectClob.clientFileRemark),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "clientFileRemark", $$v)
      },
      expression: "model.hmProjectClob.clientFileRemark"
    }
  })], 1)], 2)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "occupation"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "occupation",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                借款人及配偶婚姻材料\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._l((_vm.uploads.occupation), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16 text-center"
    }, [(item.status === 'finished') ? [_c('Tooltip', {
      staticStyle: {
        "position": "absolute",
        "margin": "96px 0 0 36px"
      },
      attrs: {
        "placement": "left-end",
        "content": "删除"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-close-circle",
        "size": "24",
        "color": "#ed4014"
      },
      on: {
        "click": function($event) {
          _vm.remove('occupation', item)
        }
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })] : [_c('div', {
      staticStyle: {
        "line-height": "120px",
        "width": "100%"
      }
    }, [(item.showProgress) ? _c('Progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()], 1)]], 2)
  }), _vm._v(" "), _c('Upload', {
    ref: "occupation",
    staticClass: "inline-block",
    attrs: {
      "show-upload-list": false,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "default-file-list": _vm.defaults.occupation,
      "data": {
        projectFileGroup: '5'
      },
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-format-error": _vm.formatError,
      "type": "drag",
      "multiple": "",
      "action": _vm.$config.uploadUrl
    }
  }, [_c('div', {
    staticClass: "upload"
  }, [_c('div', {
    staticClass: "child mask text-center"
  }, [_c('Icon', {
    attrs: {
      "type": "md-cloud-upload",
      "color": "#0071b9",
      "size": "40"
    }
  }), _vm._v(" "), _c('p', [_vm._v("上传文件")])], 1)])]), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 40
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("备注")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "maxlength": 500,
      "placeholder": "备注"
    },
    model: {
      value: (_vm.model.hmProjectClob.marriageFileRemark),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "marriageFileRemark", $$v)
      },
      expression: "model.hmProjectClob.marriageFileRemark"
    }
  })], 1)], 2)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "credit"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "credit",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                借款人信用资料\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._l((_vm.uploads.credit), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16 text-center"
    }, [(item.status === 'finished') ? [_c('Tooltip', {
      staticStyle: {
        "position": "absolute",
        "margin": "96px 0 0 36px"
      },
      attrs: {
        "placement": "left-end",
        "content": "删除"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-close-circle",
        "size": "24",
        "color": "#ed4014"
      },
      on: {
        "click": function($event) {
          _vm.remove('credit', item)
        }
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })] : [_c('div', {
      staticStyle: {
        "line-height": "120px",
        "width": "100%"
      }
    }, [(item.showProgress) ? _c('Progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()], 1)]], 2)
  }), _vm._v(" "), _c('Upload', {
    ref: "credit",
    staticClass: "inline-block",
    attrs: {
      "show-upload-list": false,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "default-file-list": _vm.defaults.credit,
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-format-error": _vm.formatError,
      "data": {
        projectFileGroup: '6'
      },
      "type": "drag",
      "multiple": "",
      "action": _vm.$config.uploadUrl
    }
  }, [_c('div', {
    staticClass: "upload"
  }, [_c('div', {
    staticClass: "child mask text-center"
  }, [_c('Icon', {
    attrs: {
      "type": "md-cloud-upload",
      "color": "#0071b9",
      "size": "40"
    }
  }), _vm._v(" "), _c('p', [_vm._v("上传文件")])], 1)])]), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 40
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("备注")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "maxlength": 500,
      "placeholder": "备注"
    },
    model: {
      value: (_vm.model.hmProjectClob.creditFileRemark),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "creditFileRemark", $$v)
      },
      expression: "model.hmProjectClob.creditFileRemark"
    }
  })], 1)], 2)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "common"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "common",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                共借人或担保人资料\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._l((_vm.uploads.common), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16 text-center"
    }, [(item.status === 'finished') ? [_c('Tooltip', {
      staticStyle: {
        "position": "absolute",
        "margin": "96px 0 0 36px"
      },
      attrs: {
        "placement": "left-end",
        "content": "删除"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-close-circle",
        "size": "24",
        "color": "#ed4014"
      },
      on: {
        "click": function($event) {
          _vm.remove('common', item)
        }
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })] : [_c('div', {
      staticStyle: {
        "line-height": "120px",
        "width": "100%"
      }
    }, [(item.showProgress) ? _c('Progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()], 1)]], 2)
  }), _vm._v(" "), _c('Upload', {
    ref: "common",
    staticClass: "inline-block",
    attrs: {
      "show-upload-list": false,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "default-file-list": _vm.defaults.common,
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-format-error": _vm.formatError,
      "data": {
        projectFileGroup: '7'
      },
      "type": "drag",
      "multiple": "",
      "action": _vm.$config.uploadUrl
    }
  }, [_c('div', {
    staticClass: "upload"
  }, [_c('div', {
    staticClass: "child mask text-center"
  }, [_c('Icon', {
    attrs: {
      "type": "md-cloud-upload",
      "color": "#0071b9",
      "size": "40"
    }
  }), _vm._v(" "), _c('p', [_vm._v("上传文件")])], 1)])]), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 40
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("备注")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "maxlength": 500,
      "placeholder": "备注"
    },
    model: {
      value: (_vm.model.hmProjectClob.warrantorFileRemark),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "warrantorFileRemark", $$v)
      },
      expression: "model.hmProjectClob.warrantorFileRemark"
    }
  })], 1)], 2)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "mortgages"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "mortgages",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                抵押物资料\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_vm._l((_vm.uploads.mortgages), function(item) {
    return _c('div', {
      staticClass: "files inline-block mr16 mt16 text-center"
    }, [(item.status === 'finished') ? [_c('Tooltip', {
      staticStyle: {
        "position": "absolute",
        "margin": "96px 0 0 36px"
      },
      attrs: {
        "placement": "left-end",
        "content": "删除"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-close-circle",
        "size": "24",
        "color": "#ed4014"
      },
      on: {
        "click": function($event) {
          _vm.remove('mortgages', item)
        }
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "upload",
      style: ({
        backgroundImage: 'url(' + item.path + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })
    })] : [_c('div', {
      staticStyle: {
        "line-height": "120px",
        "width": "100%"
      }
    }, [(item.showProgress) ? _c('Progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()], 1)]], 2)
  }), _vm._v(" "), _c('Upload', {
    ref: "mortgages",
    staticClass: "inline-block",
    attrs: {
      "show-upload-list": false,
      "on-success": _vm.uploadSuccess,
      "on-error": _vm.uploadError,
      "default-file-list": _vm.defaults.mortgages,
      "format": ['gif', 'jpg', 'jpeg', 'png', 'pdf'],
      "on-format-error": _vm.formatError,
      "data": {
        projectFileGroup: '8'
      },
      "type": "drag",
      "multiple": "",
      "action": _vm.$config.uploadUrl
    }
  }, [_c('div', {
    staticClass: "upload"
  }, [_c('div', {
    staticClass: "child mask text-center"
  }, [_c('Icon', {
    attrs: {
      "type": "md-cloud-upload",
      "color": "#0071b9",
      "size": "40"
    }
  }), _vm._v(" "), _c('p', [_vm._v("上传文件")])], 1)])]), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label-width": 40
    }
  }, [_c('label', {
    staticClass: "grey-light-color",
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("备注")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "clearable": "",
      "maxlength": 500,
      "placeholder": "备注"
    },
    model: {
      value: (_vm.model.hmProjectClob.pawnFileRemark),
      callback: function($$v) {
        _vm.$set(_vm.model.hmProjectClob, "pawnFileRemark", $$v)
      },
      expression: "model.hmProjectClob.pawnFileRemark"
    }
  })], 1)], 2)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-7c387467", module.exports)
  }
}

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Collapse', {
    attrs: {
      "value": "cost"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "cost",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                下户费\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        下户费\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.fee + '元') + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        收费时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.chargeTime) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        确认时间\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.createTime) + "\n                    ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        收费方式\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.chargeType) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        收费账户\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.chargeAccount) + "\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        确认人\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.createBy) + "\n                            \n                        "), (_vm.model.cost.feeFile) ? _c('a', {
    attrs: {
      "href": _vm.model.cost.feeFile,
      "target": "_blank"
    }
  }, [_vm._v("\n                            查看凭证\n                        ")]) : _vm._e()])], 1)], 1)])], 1), _vm._v(" "), (_vm.model.estimate.chargeFlag === '1') ? _c('div', [_c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "estimate"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "estimate",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                    预估单费\n                ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            预估单费\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.fee + '元') + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            收费时间\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.chargeTime) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            确认时间\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.createTime) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            收费方式\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.chargeType) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            收费账户\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.chargeAccount) + "\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            评估机构\n                        ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.evalAgency) + "\n                        ")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                            确认人\n                        ")]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "5"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.model.estimate.createBy) + "\n                                \n                            "), (_vm.model.estimate.feeFile) ? _c('a', {
    attrs: {
      "href": _vm.model.estimate.feeFile,
      "target": "_blank"
    }
  }, [_vm._v("\n                                查看凭证\n                            ")]) : _vm._e()])], 1)], 1)])], 1)], 1) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('Collapse', {
    attrs: {
      "value": "policy"
    }
  }, [_c('Panel', {
    attrs: {
      "name": "policy",
      "hide-arrow": true
    }
  }, [_c('strong', [_vm._v("\n                优惠政策\n            ")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('Row', [_c('Col', {
    staticClass: "text-right grey-light-color",
    attrs: {
      "span": "3"
    }
  }, [_vm._v("\n                        下户费未收取原因\n                    ")]), _vm._v(" "), _c('Col', {
    staticClass: "pl10",
    attrs: {
      "span": "21"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.model.cost.chargeFreeReason) + "\n                    ")])], 1)], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(202).rerender("data-v-d6a2a418", module.exports)
  }
}

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(325)(
  /* script */
  __webpack_require__(1053),
  /* template */
  __webpack_require__(1175),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/joshua/Desktop/hm-UI/src/views/tabs/photo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] photo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(202)
  hotAPI.install(__webpack_require__(83), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c13d5964", Component.options)
  } else {
    hotAPI.reload("data-v-c13d5964", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});