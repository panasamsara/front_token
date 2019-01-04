import {formatMoney} from '../../libs/util'
import photo from '../../views/tabs/photo'

export default {
    props: {
        model: Object
    },
    data() {
        return {
            interview: {modelStructureArray: [], primitiveTypeArray: [], ladderHouseholdsArray: []},
            evaluationList:[]
        }
    },
    components: {
        'photo': photo
    },
    methods: {
        loadEvaluation(id) {
            this.$axios.options.url = 'houseMortgage/hmProjEvaluation/read/queryByProjectId';
            this.$axios.request({data: {projectId: id, evalPeriod: 2}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                response.data.forEach((item) => {
                    item.evalVal = formatMoney(item.evalVal)
                });
                this.evaluationList = response.data;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadInterview(id) {
            this.$axios.options.url = 'houseMortgage/hmProjInterview/read/detail';
            this.$axios.request({data: {id: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                response.data.yearlyRental = formatMoney(response.data.yearlyRental);
                response.data.aroundYearlyRental = formatMoney(response.data.aroundYearlyRental);
                response.data.aroundSellingPrice = formatMoney(response.data.aroundSellingPrice);
                response.data.taxTotal = formatMoney(response.data.taxTotal);
                response.data.modelStructureArray = response.data.modelStructure.split(',');
                response.data.primitiveTypeArray = response.data.primitiveType.split(',');
                response.data.ladderHouseholdsArray = response.data.ladderHouseholds.split(',');
                this.interview = response.data;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    mounted() {
        this.loadInterview(this.model.interviewId);
        this.loadEvaluation(this.model.id);
    }
}
