import {
    formatMoney
} from "../../libs/util";

export default {
    data() {
        return {
            borrowerInfoModel: {},
            socialInfoRemark:'',
            customerSource:{},
            spouseId:'',
            projectId:'',
            mateInfoModel:{},
            familyColumns:[{title: '关系',key: 'relationshipText'},
            {title: '姓名',key: 'name'},
            {title: '证件类型', key: 'certificatesTypeText'},
            {title: '证件号码', key: 'certificatesNumber'},
            {title: '职业',key: 'occupationText'},
            {title: '收入水平(元)',key: 'income'},
            {title: '其他说明', key: 'otherDesc'}],
            familyItems: [],
            guarantorColumns1:[{title: '关系',key: 'relationshipText'},
            {title: '姓名',key: 'name'},
            {title: '证件类型', key: 'certificatesTypeText'},
            {title: '证件号码', key: 'certificatesNumber'},
            {title: '职业',key: 'occupationText'},
            {title: '收入水平(元)',key: 'income'},
            {title: '是否为实际用款人',key: 'naturalFlagText'},
            {title: '其他说明',key: 'remark'}],
            guarantorColumns0:[{title: '关系',key: 'relationshipText'},
            {title: '姓名',key: 'name'},
            {title: '证件类型', key: 'certificatesTypeText'},
            {title: '证件号码', key: 'certificatesNumber'},
            {title: '营业额(元)',key: 'income'},
            {title: '是否为实际用款人',key: 'naturalFlagText'},
            {title: '其他说明',key: 'remark'}],
            guarantorItems1: [],  //担保人自然人
            guarantorItems0: [],  //担保人法人
            shareLoanHolderColumns1:[{title: '关系',key: 'relationshipText'},
            {title: '姓名',key: 'name'},
            {title: '证件类型', key: 'certificatesTypeText'},
            {title: '证件号码', key: 'certificatesNumber'},
            {title: '职业',key: 'occupationText'},
            {title: '收入水平(元)',key: 'income'},
            {title: '是否为实际用款人',key: 'naturalFlagText'},
            {title: '其他说明',key: 'remark'}],
            shareLoanHolderColumns0:[{title: '关系',key: 'relationshipText'},
            {title: '姓名',key: 'name'},
            {title: '证件类型', key: 'certificatesTypeText'},
            {title: '证件号码', key: 'certificatesNumber'},
            {title: '营业额(元)',key: 'income'},
            {title: '是否为实际用款人',key: 'naturalFlagText'},
            {title: '其他说明',key: 'remark'}],
            shareLoanHolderItems1: [],  //共借人自然人
            shareLoanHolderItems0: [],  //共借人法人
            shareLoanHolderItems2: [],  //紧急联系人
            practicalColumns:[{title: '关系',key: 'relationshipText'},
            {title: '姓名',key: 'name'},
            {title: '证件类型', key: 'certificatesTypeText'},
            {title: '证件号码', key: 'certificatesNumber'},
            {title: '职业',key: 'occupationText'},
            {title: '收入水平(元)',key: 'income'},
            {title: '其他说明',key: 'remark'}],
            emergencyColumns:[{title: '关系',key: 'relationshipText'},
            {title: '姓名',key: 'name'},
            {title: '证件类型', key: 'certificatesTypeText'},
            {title: '证件号码', key: 'certificatesNumber'},
            {title: '联系方式',key: 'phoneNumber'},
            {title: '其他说明',key: 'remark'}],
            practicalItems: [],
            creditInfo:{},
            creditSocietyColumns:[{title: '征信渠道',key: 'socialinfoTypeText'},
            {title: '是否存在',key: 'existsFlagText'},
            {title: '负面信息说明',key: 'otherDesc'}],
            creditSocietyItems: [],
            mateCreditInfo:{},
            isShow:false,
            mateCreditColumns: [{title: '征信渠道',key: 'socialinfoTypeText'},
            {title: '是否存在',key: 'existsFlagText'},
            {title: '负面信息说明',key: 'otherDesc'}],
            mateCreditItems: [],
            FacetalkData:{},
        }
    },
    props: ['clientId'],
    created() {
        this.getBorrowerInfo();
        this.getTabledata();
        this.getProInfo()
        this.getCreditinvest()
        this.getSocialInfo();
        this.getFacetalkInfo();
        this.getSocialRemark();
    },
    methods: {
        getBorrowerInfo(){ //查询客户信息
            this.$axios.options.url = '/houseMortgage/hmClient/read/detail';
            this.$axios.request({data: {id: this.clientId}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.borrowerInfoModel = response.data;
                this.spouseId = response.data.spouseId;
                this.projectId = response.data.projectId;
                if(this.spouseId){
                    this.isShow = true
                    this.getMateInfo(this.spouseId);
                    this.getSpouseCreditinvest(this.spouseId);
                }else{
                    this.isShow = false;
                }
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getMateInfo(spouseId){ //查询客户配偶信息
            this.$axios.options.url = '/houseMortgage/hmClient/read/detail';
            this.$axios.request({data: {id:spouseId}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.mateInfoModel = response.data;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getProInfo(){ 
            this.$axios.options.url = '/houseMortgage/hmProject/read/detail';
            this.$axios.request({data: {id:this.$route.params.id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.customerSource = response.data;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getTabledata(){
            this.$axios.options.url = '/houseMortgage/hmProjStakeholder/read/queryByProjectId';
            this.$axios.request({data: {projectId: this.$route.params.id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                let tempItems = response.data;
                tempItems.forEach((item)=>{
                    item.income = formatMoney(item.income,2)
                })
                if(tempItems.length>0){
                    this.familyItems = tempItems.filter((item) => {
                        return item.busiType =='0'
                    });
                    this.guarantorItems0 = tempItems.filter((item) => {
                        return item.busiType =='1'&& item.naturalFlag=='0'
                    });
                    this.guarantorItems1 = tempItems.filter((item) => {
                        return item.busiType =='1'&& item.naturalFlag=='1'
                    });
                    this.shareLoanHolderItems0 = tempItems.filter((item) => {
                        return item.busiType =='2'&& item.naturalFlag=='0'
                    });
                    this.shareLoanHolderItems1 = tempItems.filter((item) => {
                        return item.busiType =='2'&& item.naturalFlag=='1'
                    });
                    this.shareLoanHolderItems2 = tempItems.filter((item) => {
                        return item.busiType =='4'
                    });
                    this.practicalItems = tempItems.filter((item) => {
                        return item.busiType =='3'
                    });
                }
                
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getCreditinvest(){ //查询征信信息
            this.$axios.options.url = '/houseMortgage/hmProjCreditinvest/read/queryByProjectId';
            this.$axios.request({data: {projectId: this.$route.params.id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.creditInfo = response.data.length !=0? response.data[0] : {};
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getSocialInfo(){ //社会信息查询
            this.$axios.options.url = '/houseMortgage/hmProjSocialinfo/read/queryByProjectId';
            this.$axios.request({data: {projectId: this.$route.params.id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.creditSocietyItems = response.data; 
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getSocialRemark(){ //社会信息汇总查询
            this.$axios.options.url = '/houseMortgage/hmProjectClob/read/detail';
            this.$axios.request({data: {projectId: this.$route.params.id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.socialInfoRemark = response.data.socialInfoRemark; 
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getSpouseCreditinvest(spouseId){ //查询配偶征信信息
            this.$axios.options.url = '/houseMortgage/hmProjCreditinvest/read/queryByProjectId';
            this.$axios.request({data: {projectId:spouseId}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.mateCreditInfo = response.data.length !=0 ? response.data[0] : {};
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getSpouseSocialInfo(spouseId){ //配偶社会信息查询
            this.$axios.options.url = '/houseMortgage/hmProjSocialinfo/read/queryByProjectId';
            this.$axios.request({data: {projectId:spouseId}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.mateCreditItems = response.data; 
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getFacetalkInfo(){ //查询面谈情况
            this.$axios.options.url = '/houseMortgage/hmProjFacetalk/read/queryByProjectId';
            this.$axios.request({data: {projectId: this.$route.params.id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.FacetalkData = response.data[0]?response.data[0]:{}; 
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
    }
}