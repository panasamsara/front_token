import {formatMoney} from "../../libs/util";

export default {
    props: {
        model: Object,
        dicts: Object
    },
    data() {
        return {
            files: [],
            interview: {}
        }
    },
    methods: {
        loadFiles(id) {
            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({data: {projectId: id, projectFileGroup: 24}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                if (response.data[0])
                    response.data[0].files[0].name = response.data[0].files[0].actualName;
                this.files = response.data[0] ? response.data[0].files : [];
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
                this.interview = response.data;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    mounted() {
        this.loadFiles(this.model.id);
        this.loadInterview(this.model.interviewId);
    }
}