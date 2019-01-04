import {timeUtil} from "../../libs/util";

export default {
    props: {
        model: Object,
        dicts: Object
    },
    data() {
        return {
            auditColumns: [{title: '审核项目', key: 'itemName'},
                {title: '提示建议', key: 'itemContent'}],
            localDate: timeUtil.getCurrentDate(new Date()),
            user: JSON.parse(this.$localStorage.get('user')),
            isSubmit: false,
            loading: false
        }
    },
    methods: {
        loadClob(id) {
            this.$axios.options.url = 'houseMortgage/hmProjectClob/read/detail';
            this.$axios.request({data: {id: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.model.hmProjectClob = response.data || {};
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    created() {
        this.model.hmProjectClob = {};
    },
    mounted(){
        this.loadClob(this.model.id);
    }
}