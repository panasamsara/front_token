import {
    localResizeIMG
} from "../../libs/util";

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
            },
            uploads: {
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
            this.$axios.request({
                data: {
                    projectId: id
                }
            }).then((response) => {
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
                    this.uploads.occupation = this.$refs.occupation.fileList;
                    this.uploads.borrower = this.$refs.borrower.fileList;
                    this.uploads.credit = this.$refs.credit.fileList;
                    this.uploads.common = this.$refs.common.fileList;
                    this.uploads.mortgages = this.$refs.mortgages.fileList;
                    this.$nextTick(() => {
                        for (let i = 1; i < 6; i++) {
                            $('.mfancy' + i).fancybox({
                                loop: false,
                                closeBtn: false,
                                helpers: {
                                    buttons: {}
                                }
                            });
                        }
                    });
                });
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        uploadSuccess(response, file, fileList) {
            response.files[0].fileId = response.files[0].id;
            response.files[0].projectFileGroup = response.projectFileGroup;
            file.path = response.files[0].path;
            file.suffix = response.files[0].suffix;
            this.model.fileList.push(response.files[0]);
            this.$nextTick(() => {
                for (let i = 1; i < 6; i++) {
                    $('.mfancy' + i).fancybox({
                        loop: false,
                        closeBtn: false,
                        helpers: {
                            buttons: {}
                        }
                    });
                }
            });
        },
        uploadError(error, file, fileList) {
            fileList.splice(fileList.indexOf(file), 1);
            this.$Message.error('上传失败');
        },
        remove(name, file) {
            this.$refs[name].fileList.splice(this.$refs[name].fileList.indexOf(file), 1);
            this.model.fileList.splice(this.model.fileList.indexOf(file.response.files[0]), 1);
        },
        formatError(file) {
            this.$Message.error('文件(' + file.name + ')类型错误，请选择图片或PDF文件。');
        },
        handleMaxSize(file) {
            this.$Message.error('文件(' + file.name + ')容量大小超出10M限制。');
        },
        beforeUpload(file) {
            if (file.size < 1024000 || file.type.indexOf('image') === -1)
                return true;
            localResizeIMG.photoCompres(file, {
                quality: 0.3
            }, function (base64Codes) {
                file.url = base64Codes;
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