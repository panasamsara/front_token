import evaluation from '../../views/tabs/evaluation'

export default {
    data() {
        return {
            mortgage: {}
        }
    },
    props: {
        model: Object,
        step: Number
    },
    components: {
        'evaluation': evaluation
    },
    methods: {
        loadModel(id) {
            this.$axios.options.url = 'houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({data: {projectId: id, backupFlag: 0}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.mortgage = response.data[0] || {};
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            })
        }
    },
    mounted() {
        this.loadModel(this.model.id);
    }
}