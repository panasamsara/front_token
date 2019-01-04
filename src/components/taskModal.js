import auditInformation from '../views/tabs/auditInformation'
import householdData from '../views/tabs/householdData'
import borrowerInformationView from '../views/tabs/borrowerInformationView'
import mortgagesInformationView from '../views/tabs/mortgagesInformationView'
import projectInformationView from '../views/tabs/projectInformationView'
import chargeInformation from '../views/tabs/chargeInformation'
// import taskHistory from '../views/tabs/taskHistory'
// import supplementInformationView from '../views/tabs/supplementInformationView'
import internalAuditFormView from '../views/tabs/internalAuditFormView'
import {formatMoney} from "../libs/util";

export default {
    data() {
        return {
            model: {
                client: {},
                spouse: {},
                product_name: {},
                hmProjectClob: {},
                hmProjPlan: {},
                pawnList: [{}],
                stakeholderList: []
            },
            tabName: 'auditInformation',
            tabs: [{id: 'auditInformation', text: '申请信息', isShow: true},
                {id: 'householdData', text: '下户资料', isShow: true},
                {id: 'borrowerInformationView', text: '借款人信息', isShow: true},
                {id: 'mortgagesInformationView', text: '抵押物信息', isShow: true},
                {id: 'projectInformationView', text: '项目资料', isShow: true},
                {id: 'chargeInformation', text: '收费信息', isShow: true},
                // {id: 'taskHistory', text: '任务历史', isShow:true},
                // {id: 'supplementInformationView', text: '补充资料', isShow:true},
                {id: 'internalAuditFormView', text: '内审表', isShow: true}
            ],
        }
    },
    props: {
        project: Object
    },
    computed: {
        currentTabComponent() {
            return this.tabName;
        }
    },
    components: {
        'auditInformation': auditInformation,
        'householdData': householdData,
        'borrowerInformationView': borrowerInformationView,
        'mortgagesInformationView': mortgagesInformationView,
        'projectInformationView': projectInformationView,
        'chargeInformation': chargeInformation,
        // 'taskHistory': taskHistory,
        // 'supplementInformationView': supplementInformationView,
        'internalAuditFormView': internalAuditFormView
    },
    methods: {
        loadClient(id) {
            this.$axios.options.url = 'houseMortgage/hmClient/read/detail';
            this.$axios.request({data: {id: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                response.data.personalIncomeText = formatMoney(response.data.personalIncome);
                response.data.householdIncomeText = formatMoney(response.data.householdIncome);
                response.data.shareSavingText = formatMoney(response.data.shareSaving);
                response.data.spouse.personalIncomeText = formatMoney(response.data.spouse.personalIncome);
                response.data.spouse.householdIncomeText = formatMoney(response.data.spouse.householdIncome);
                this.model.spouse = response.data.spouse || {};
                this.model.client = response.data;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadClob(id) {
            this.$axios.options.url = 'houseMortgage/hmProjectClob/read/detail';
            this.$axios.request({data: {id: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.model.hmProjectClob = response.data || {};
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadPlan(id) {
            this.$axios.options.url = 'houseMortgage/hmProjPlan/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.model.hmProjPlan = response.data[0] || {};
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadStakeholder(id) {
            this.$axios.options.url = 'houseMortgage/hmProjStakeholder/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.model.stakeholderList = response.data;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadModel(id) {
            this.$axios.options.url = 'houseMortgage/hmProject/read/detail';
            this.$axios.request({data: {id: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                response.data.client = {};
                response.data.spouse = {};
                response.data.product_name = response.data.product_name || {};
                response.data.hmProjPlan = {};
                response.data.initLoanAmountText = formatMoney(response.data.initLoanAmount);
                response.data.firstEvalueText = formatMoney(response.data.firstEvalue);
                response.data.pawnList = [{}];
                response.data.stakeholderList = [];
                response.data.hmProjectClob = {};
                this.model = response.data;
                this.loadClient(response.data.clientId);
                this.loadClob(response.data.id);
                this.loadPlan(response.data.id);
                this.loadStakeholder(response.data.id);
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    created() {
        this.model.id = this.project.id;
        //this.tabs[8].isShow = this.project.router !== 'internalAudit';
    },
    mounted() {
        this.loadModel(this.project.id);
    }
}