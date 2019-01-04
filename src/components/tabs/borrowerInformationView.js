import {formatMoney} from "../../libs/util";

export default {
    data() {
        return {
            familyColumns: [{title: '关系', key: 'relationshipText'}, {
                title: '姓名', key: 'name'
            },
                {title: '证件类型', key: 'certificatesTypeText'},
                {title: '证件号', key: 'certificatesNumber'},
                {title: '职业', key: 'occupationText'},
                {title: '年收入(元)', align: 'right', key: 'incomeText'},
                {title: '其他说明', key: 'otherDesc'}],
            legalColumns: [{title: '保证人类型', key: 'relationshipText'},
                {title: '名称', key: 'name'},
                {title: '证件类型', key: 'certificatesTypeText'},
                {title: '证件号', key: 'certificatesNumber'},
                {title: '营业额(元)', align: 'right', key: 'incomeText'},
                {title: '为实际用款方', key: 'actualUseFlagText'},
                {title: '其他说明', key: 'otherDesc'}],
            commonColumns: [{title: '与借款主体关系', key: 'relationshipText'},
                {title: '姓名', key: 'name'},
                {title: '证件类型', key: 'certificatesTypeText'},
                {title: '证件号', key: 'certificatesNumber'},
                {title: '职业', key: 'occupationText'},
                {title: '年收入(元)', align: 'right', key: 'incomeText'},
                {title: '为实际用款人', key: 'actualUseFlagText'},
                {title: '其他说明', key: 'otherDesc'}],
            sociologyColumns: [{title: '征信渠道', key: 'socialinfoTypeText'},
                {title: '存在', key: 'existsFlagText'},
                {title: '负面信息说明', key: 'otherDesc'}],
            sociologyData: [{channel: '汇法网', existence: 0, default: true},
                {channel: '全国失信人名单', existence: 0, default: true},
                {channel: '被执行人查询', existence: 0, default: true},
                {channel: '人法网', existence: 0, default: true}],
            emergencyColumns: [{title: '关系', key: 'relationshipText'},
                {title: '姓名', key: 'name'},
                {title: '证件类型', key: 'certificatesTypeText'},
                {title: '证件号', key: 'certificatesNumber'},
                {title: '联系方式', key: 'phoneNumber'},
                {title: '备注', key: 'otherDesc'}],
            files: [],
            user: JSON.parse(this.$localStorage.get('user'))
        }
    },
    props: {
        model: Object
    },
    methods: {
        loadFiles(id) {
            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                let files0 = response.data.find((item) => {
                    return item.projectFileGroup === '25'
                });
                let files1 = response.data.find((item) => {
                    return item.projectFileGroup === '26'
                });
                if (files0)
                    files0.files[0].name = files0.files[0].actualName;
                if (files1)
                    files1.files[0].name = files1.files[0].actualName;
                this.$set(this.files, 0, files0 ? files0.files : []);
                this.$set(this.files, 1, files1 ? files1.files : []);
                this.$nextTick(() => {
                    $('.prefancy0').fancybox({
                        loop: false,
                        closeBtn: false,
                        helpers: {
                            buttons: {}
                        }
                    });
                    $('.prefancy1').fancybox({
                        loop: false,
                        closeBtn: false,
                        helpers: {
                            buttons: {}
                        }
                    });
                });
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadModel(id) {
            this.$axios.options.url = 'houseMortgage/hmProjStakeholder/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                response.data.forEach((item) => {
                    item.incomeText = formatMoney(item.income);
                });
                this.model.stakeholderList = response.data;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadCredit(id) {
            this.$axios.options.url = 'houseMortgage/hmProjCreditinvest/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                response.data.forEach((item) => {
                    item.totalLoanNumText = formatMoney(item.totalLoanNum);
                });
                this.model.creditInvestList = response.data.length > 0 ? response.data : [{
                    clientId: this.model.client.id,
                    continuousOverdue: null,
                    accumulativeOverdue: null,
                    latestQueryNum: null,
                    totalLoanNumText: 0.00
                }];
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadSocial(id) {
            this.$axios.options.url = 'houseMortgage/hmProjSocialinfo/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.model.socialInfoList = response.data[0] ? response.data : [];
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadFacetalk(id) {
            this.$axios.options.url = 'houseMortgage/hmProjFacetalk/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.model.hmProjFacetalk = response.data[0] ? response.data[0] : {agencyNum: null, clientNum: null};
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    created() {
        this.model.hmProjFacetalk = {};
        this.model.stakeholderList = [];
        this.model.socialInfoList = [{}];
        this.model.creditInvestList = [{}];
    },
    mounted() {
        this.loadModel(this.model.id);
        this.loadCredit(this.model.id);
        this.loadSocial(this.model.id);
        this.loadFacetalk(this.model.id);
        this.loadFiles(this.model.id);
    }
}