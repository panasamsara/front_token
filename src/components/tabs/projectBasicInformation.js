import {clearObject} from "../../libs/util";

export default {
    data() {
        return {
            model: {
                client: {},
                pawnList: []
            } 
        }
    },
    mounted(){
        
    },
    created() {
        this.getProjectInfo()
    },
    methods: {
        getProjectInfo (){
            var projectId = this.$route.params.id
            this.$axios.options.url = '/houseMortgage/hmProject/read/detail';
            this.$axios.request({data: {id: projectId}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                response.data.pawnList = []
                this.model = response.data; 
                this.getClient(response.data.clientId)
                this.getPawnInfo()
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getClient(clientId){
            this.$axios.options.url = '/houseMortgage/hmClient/read/detail';
            this.$axios.request({data: {id: clientId}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.model.client = response.data;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getPawnInfo() {  //获取房产信息
            this.$axios.options.url = '/houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$route.params.id,
                    backupFlag:0
                }
            }).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.model.pawnList = response.data
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
    }

}