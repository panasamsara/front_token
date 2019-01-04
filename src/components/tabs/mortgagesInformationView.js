import photo from '../../views/tabs/photo'
import {formatMoney} from "../../libs/util";

export default {
    props: {
        model: Object
    },
    data() {
        return {
            evaluationList: [],
            shareColumns: [{title: '关系', key: 'relationshipText'},
                {title: '姓名', key: 'name'},
                {title: '证件类型', key: 'certificatesTypeText'},
                {title: '证件号', key: 'certificatesNumber'},
                {
                    title: '共有比例', render: (h, params) => {
                        return h('span', params.row.shareRatio + '%')
                    }
                },
                {title: '共有权证的号码', key: 'shareCertificate'},
                {title: '备注', key: 'otherDesc'}]
        }
    },
    components: {
        'photo': photo
    },
    methods: {
        loadMortgage(id) {
            this.$axios.options.url = 'houseMortgage/hmPawn/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.model.pawnList = response.data[0] ? response.data : [{}];
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            })
        },
        loadEvaluation(id) {
            this.$axios.options.url = 'houseMortgage/hmProjEvaluation/read/queryByProjectId';
            this.$axios.request({data: {projectId: id, evalPeriod: 0}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                response.data.forEach((item) => {
                    item.evalValText = formatMoney(item.evalVal)
                });
                this.evaluationList = response.data;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    mounted() {
        this.loadMortgage(this.model.id);
        this.loadEvaluation(this.model.id);
    }
}