import {
    clearObject
} from "../../libs/util";

export default {
    data() {
        return {
            model: {},
            projectInfo:{},
            iOrgValue:[],
            iAgencyValue:[],
            iNetValue:[],
            fOrgValue:[],
            fAgencyValue:[],
            fNetValue:[],
        }
    },
    created() {
        
    },
    mounted() {
        this.getDecision();
        this.getInitialEvaluate();
        this.getFinalEvaluate();
        this.getProjectInfo();
    },
    methods: {
        getDecision() {
            clearObject(this.model);
            this.$axios.options.url = '/houseMortgage/hmProjPlan/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$route.params.id,
                }
            }).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.model = response.data.length>0?response.data[0]:{};
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getInitialEvaluate(){
            this.$axios.options.url = '/houseMortgage/hmProjEvaluation/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$route.params.id,
                    evalPeriod:0
                }
            }).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                };
                let tempItems = response.data;
                if(tempItems.length>0){
                    this.iAgencyValue = tempItems.filter((item) => {
                        return item.evalType =='0'
                    });
                    this.iNetValue = tempItems.filter((item) => {
                        return item.evalType =='1'
                    });
                    this.iOrgValue = tempItems.filter((item) => {
                        return item.evalType =='2'
                    });
                }
                
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getFinalEvaluate(){
            this.$axios.options.url = '/houseMortgage/hmProjEvaluation/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$route.params.id,
                    evalPeriod:1
                }
            }).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                };
                let tempList = response.data;
                if(tempList.length>0){
                    this.fAgencyValue = tempList.filter((item) => {
                        return item.evalType =='0'
                    });
                    this.fNetValue = tempList.filter((item) => {
                        return item.evalType =='1'
                    });
                    this.fOrgValue = tempList.filter((item) => {
                        return item.evalType =='2'
                    });
                }
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getProjectInfo (){
            this.$axios.options.url = '/houseMortgage/hmProject/read/detail';
            this.$axios.request({data: {id: this.$route.params.id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.projectInfo = response.data?response.data:{}; 
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
    }

}