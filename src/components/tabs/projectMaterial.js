export default {
    data() {
        return {
            comments: {},
            files: []
        }
    },
    methods: {
        loadFiles() {
            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({data: {projectId: this.$route.params.id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.files = response.data;
                this.$nextTick(()=>{
                    for (let i = 1; i < 6; i++) {
                        $('.fancy' + i).fancybox({
                            loop: false,
                    closeBtn: false,
                    helpers		: {
                        buttons	: {}
                    }
                });
                    }
                });
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getFiles(flag) {
            let array = this.files.filter((item) => {
                return item.projectFileGroup === flag;
            });
            return array[0] ? array[0].files : [];
        },
        getComments(){
            this.$axios.options.url = '/houseMortgage/hmProjectClob/read/detail';
            this.$axios.request({
                data: {
                    projectId: this.$route.params.id
                }
            }).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
            this.comments=response.data
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    mounted() {
        this.loadFiles();
        this.getComments();
    },
}