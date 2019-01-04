import {formatMoney} from '../../libs/util'

export default {
    data() {
        return {
            pawnInfo: {},
            interviewInfo: {},
            standbyHoseInfo: {},
            modelStructureArray:[],
            primitiveTypeArray:[],
            ladderHouseholdsArray:[],
            files: []
        }
    },
    mounted() {
        this.getPawnInfo();
        this.getInterviewInfo();
        this.getStandbyHoseInfo();
        this.loadFiles();
    },
    methods: {
        getPawnInfo() { //获取房产信息
            this.$axios.options.url = '/houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$route.params.id,
                    backupFlag: 0
                }
            }).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.pawnInfo = response.data.length>0?response.data[0]:{};
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getInterviewInfo() { //获取下户信息
            this.$axios.options.url = '/houseMortgage/hmProjInterview/read/detail';
            this.$axios.request({
                data: {
                    id: this.$route.params.id,
                }
            }).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.modelStructureArray = response.data.modelStructure?response.data.modelStructure.split(','):[];
                this.primitiveTypeArray = response.data.primitiveType?response.data.primitiveType.split(','):[];
                this.ladderHouseholdsArray = response.data.ladderHouseholds?response.data.ladderHouseholds.split(','):[];
                this.interviewInfo = response.data?response.data:{};
                this.interviewInfo.yearlyRental = formatMoney(this.interviewInfo.yearlyRental, 2) 
                this.interviewInfo.aroundYearlyRental = formatMoney(this.interviewInfo.aroundYearlyRental, 2) 
                this.interviewInfo.aroundSellingPrice = formatMoney(this.interviewInfo.aroundSellingPrice, 2) ;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getStandbyHoseInfo() { //获取备用房产信息
            this.$axios.options.url = '/houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$route.params.id,
                    backupFlag: 1
                }
            }).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                if (response.data.length > 0) {
                    this.standbyHoseInfo = response.data[0];
                } else {
                    this.standbyHoseInfo = null;
                }

            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadFiles() {
            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({data: {projectId: this.$route.params.id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.files = response.data;
                this.$nextTick(()=>{
                    for (let i = 1; i < 10; i++) {
                        $('.fancy' + i).fancybox({
                            loop: false,
                    closeBtn: false,
                    helpers		: {
                        buttons	: {}
                    }
                });
                    }
                });
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getFiles(flag) {
            let array = this.files.filter((item) => {
                return item.projectFileGroup === flag;
            });
            return array[0] ? array[0].files : [];
        }
    }
}