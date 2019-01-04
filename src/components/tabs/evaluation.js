import {formatMoney} from "../../libs/util";

export default {
    data() {
        return {
            evaluationList: []
        }
    },
    props: {
        model: Object,
        step: Number
    },
    methods: {
        loadModel(id) {
            this.$axios.options.url = 'houseMortgage/hmProjEvaluation/read/queryByProjectId';
            this.$axios.request({data: {projectId: id, evalPeriod: 0}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                response.data.forEach((item) => {
                    item.evalVal = formatMoney(item.evalVal)
                });
                this.evaluationList = response.data;
                this.$nextTick(() => {
                    $('.prefancy').fancybox({
                        loop: false,
                    closeBtn: false,
                    helpers		: {
                        buttons	: {}
                    }
                });
                });
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    created() {
        this.loadModel(this.model.id);
    }
}