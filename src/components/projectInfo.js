import projectBasicInformation from '../views/tabs/projectBasicInformation'
import borrowerInfo from '../views/tabs/borrowerInfo'
import projectPawnInformation from '../views/tabs/projectPawnInformation'
import projectMaterial from '../views/tabs/projectMaterial'
import projectPlan from '../views/tabs/projectPlan'

export default {
    data() {
        return {
            tabName: 'projectBasicInformation',
            tabs: [{id: 'projectBasicInformation', text: '基本信息'},
                {id: 'borrowerInfo', text: '借款人信息'},
                {id: 'projectPawnInformation', text: '抵押物信息'},
                {id: 'projectMaterial', text: '项目资料'},
                {id: 'projectPlan', text: '项目决议'},
            ],
            clientId: ''
        }
    },
    computed: {
        currentTabComponent() {
            return this.tabName;
        }
    },
    components: {
        projectBasicInformation,
        borrowerInfo,
        projectPawnInformation,
        projectMaterial,
        projectPlan,
        //loanInfo,
        // taskHistory,
    },
    created(){
        
    },
    mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        this.getProjectById()
        this.getLoanApplyInfo()
    },
    methods: {
        getProjectById(){
            this.$axios.options.url = '/houseMortgage/hmProject/read/detail';
            this.$axios.request({
                data: {
                    id: this.$route.params.id,
                }
            }).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.clientId = response.data.clientId
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getLoanApplyInfo(){ //根据项目Id查询放款申请详情
            this.$axios.options.url = '/houseMortgage/hmLoanApply/read/queryByProjectId';
            this.$axios.request({data: {projectId: this.$router.currentRoute.params.id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                if(response.data.length>0){
                    this.tabs.push(
                        {id: 'loanInfo', text: '放款信息'},
                    )
                }
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
    },
   
}