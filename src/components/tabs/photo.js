export default {
    data() {
        return {
            files: []
        }
    },
    props: {
        model: Object
    },
    methods: {
        loadFiles(id) {
            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.files = response.data;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getFiles(flag) {
            let array = this.files.filter((item) => {
                return item.projectFileGroup === flag;
            });
            this.$nextTick(()=>{
                $('.pfancy' + flag).fancybox({
                    loop: false,
                    closeBtn: false,
                    helpers		: {
                        buttons	: {}
                    }
                });
            });
            return array[0] ? array[0].files : [];
        }
    },
    mounted() {
        this.loadFiles(this.model.id);
    }
}