import {formatMoney} from "../../libs/util";

export default {
    data() {
        return {
            info: {
                cost: {},
                estimate: {},
                evalAgency: null
            }
        }
    },
    props: {
        model: Object
    },
    methods: {
        loadModel(id) {
            this.$axios.options.url = 'houseMortgage/hmProjFee/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.info.cost = response.data.find((item) => {
                    item.feeText = formatMoney(item.fee);
                    return item.feeType === '0';
                }) || {};
                this.info.estimate = response.data.find((item) => {
                    item.feeText = formatMoney(item.fee);
                    return item.feeType === '1';
                }) || {};
                this.$nextTick(() => {
                    for (let i = 1; i < 3; i++) {
                        $('.cfancy' + i).fancybox({
                            loop: false,
                            closeBtn: false,
                            helpers: {
                                buttons: {}
                            }
                        });
                    }
                });
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadEvaluation(id) {
            this.$axios.options.url = 'houseMortgage/hmProjEvaluation/read/queryByProjectId';
            this.$axios.request({data: {projectId: id, evalPeriod: 0, defaultFlag: 1}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.info.evalAgency = response.data[0] ? response.data[0].agencyText : null;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    mounted() {
        this.loadModel(this.model.id);
        this.loadEvaluation(this.model.id);
    }
}