export default {
    props: {
        model: Object
    },
    data() {
        return {
            defaults: {
                borrower: [],
                occupation: [],
                credit: [],
                common: [],
                mortgages: []
            }
        }
    },
    methods: {
        getFiles(list, flag) {
            let array = list.filter((item) => {
                return item.projectFileGroup === flag;
            });
            if (array[0])
                this.model.fileList = this.model.fileList.concat(array[0].files);
            return array[0] ? array[0].files : [];
        },
        loadModel(id) {
            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.defaults.borrower = this.getFiles(response.data, '4');
                this.defaults.occupation = this.getFiles(response.data, '5');
                this.defaults.credit = this.getFiles(response.data, '6');
                this.defaults.common = this.getFiles(response.data, '7');
                this.defaults.mortgages = this.getFiles(response.data, '8');
                this.$nextTick(() => {
                    for(let i=1; i<6; i++) {
                        $('.mfancy' + i).fancybox({
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
        }
    },
    created() {
        if (!this.model.fileList)
            this.model.fileList = [];
    },
    mounted() {
        this.loadModel(this.model.id);
    }
}