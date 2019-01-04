import {timeUtil} from "../../libs/util";

export default {
    props: {
        model: Object
    },
    data() {
        return {
            auditData: [],
            auditColumns: [{title: '审核项目', key: 'itemName'},
                {title: '提示建议', key: 'itemContent'}],
            localDate: timeUtil.getCurrentDate(new Date()),
            user: JSON.parse(this.$localStorage.get('user')),
            result: [{id: 1, text: '同意'},
                {id: 2, text: '不同意'},
                {id: 0, text: '退回'}],
            rules: {
                'riskAuditResult': [{required: true, message: '审核结论不能为空'}]
            },
            isSubmit: false,
            loading: false,
            nodes: []
        }
    },
    methods: {
        loadModel() {
            this.loading = true;
            this.$axios.options.url = 'houseMortgage/hmAuditTips/read/list';
            this.$axios.request({data: {pageSize: 100}}, 'json').then((response) => {
                this.loading = false;
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.auditData = response.data.list;
            }).catch((error) => {
                this.loading = false;
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadClob() {
            this.$axios.options.url = 'houseMortgage/hmProjectClob/read/detail';
            this.$axios.request({data: {id: this.$router.currentRoute.params.id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.model.hmProjectClob = response.data || {};
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        submit() {
            this.$refs.audit.validate((valid) => {
                if (valid) {
                    this.model.operation = 1;
                    this.model.taskId = this.$router.currentRoute.params.taskid;
                    this.$axios.options.url = 'houseMortgage/hmProject/shenhesubmit';
                    this.isSubmit = true;
                    this.$axios.request({data: JSON.stringify(this.model)}, 'json').then((response) => {
                        this.isSubmit = false;
                        if (response.httpCode != 200) {
                            this.$Message.error(response.msg || this.$config.ERROR);
                            return;
                        }
                        this.$router.push({name: 'backlog'});
                    }).catch((error) => {
                        this.isSubmit = false;
                        this.$Message.error(this.$config.ERROR);
                    });
                }
            });
        },
        cancel(){
            this.model.operation = 0;
            this.model.taskId = this.$router.currentRoute.params.taskid;
            this.$axios.options.url = 'houseMortgage/hmProject/shenhesubmit';
            this.isSubmit = true;
            this.$axios.request({data: JSON.stringify(this.model)}, 'json').then((response) => {
                this.isSubmit = false;
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.$router.push({name: 'backlog'});
            }).catch((error) => {
                this.isSubmit = false;
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    created() {
        this.$root.eventHub.$on('sure', (params) => {
            this.model.activityId = params;
            this.cancel();
        });
        this.model.hmProjectClob = {};
    },
    mounted(){
        this.loadClob();
        this.loadModel();
    },
    beforeDestroy() {
        this.$root.eventHub.$off('sure');
    }
}