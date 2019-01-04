import {timeUtil, clearObject} from '../libs/util'

export default {
    data() {
        const _this = this;
        return {
            more: false,
            showModal: false,
            user: JSON.parse(this.$localStorage.get('user')),
            search: {
                total: 0,
                pageSize: this.$config.pageSize,
                pageNum: 1
            },
            totalPage: 0, //总页数
            status: [],
            handler: [],
            applicant: [],
            start: {
                disabledDate(date) {
                    return date && _this.search.createTimeEnd && date.valueOf() > _this.search.createTimeEnd.valueOf() - _this.$config.millseconds
                }
            },
            end: {
                disabledDate(date) {
                    return date && _this.search.createTimeStart && date.valueOf() < _this.search.createTimeStart.valueOf() + _this.$config.millseconds
                }
            },
            loading: false,
            listData: [],
            columns: [
                {title: '主题', key: 'title', width: 160},
                {title: '内容', key: 'content'},
                {title: '创建时间', key: 'created_at', width: 150},
                {title: '更新时间', key: 'updated_at', width: 150},
                {
                    title: '操作', align: 'center', render: (h, params) => {
                        return h('div', [
                            h('a', {
                                style: {
                                    // display: params.row.multiple ? 'none' : 'block'
                                },
                                on: {
                                    click: () => {
                                        // this.$router.push({
                                        //     name: 'customerInfo',
                                        //     params: {id: params.row.id, pageNum: _this.search.pageNum}
                                        // })
                                        this.openModal('edit' , params.row)
                                    }
                                }
                            }, [
                                h('Tooltip', {
                                    props: {
                                        content: '编辑',
                                        placement: 'top'
                                    }
                                }, [
                                    h('Icon', {
                                        props: {
                                            type: 'md-create',
                                            size: 20,
                                            color: '#ff9900'
                                        }
                                    })
                                ])
                            ]),
                            h('a', {
                                style: {
                                    // display: params.row.multiple ? 'block' : 'none'
                                },
                                on: {
                                    click: () => {
                                        this.$root.eventHub.$emit('delete', params.row.id);
                                    }
                                }
                            }, [
                                h('Tooltip', {
                                    props: {
                                        content: '删除',
                                        placement: 'top'
                                    }
                                }, [
                                    h('Icon', {
                                        props: {
                                            type: 'md-close',
                                            size: 20,
                                            color: '#ff3344'
                                        }
                                    })
                                ])
                            ]),
                        ])
                    }
                }
            ],
            formValidate: {
                // user_id: this.user.id,
                title: '', //信托计划名称
                content: '', //信托计划所属公司
            },
            ruleValidate: {
                title: [
                    { required: true, message: '文章标题不能为空', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '文章内容不能为空', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        this.$root.eventHub.$on('delConfirm', (params) => {
            this.delete(params);
        });
        this.changePage(1);
    },
    beforeDestroy() {
        this.$root.eventHub.$off('delConfirm');
    },
    methods: {
        changePage(pageNum) {
            this.loading = true;
            // this.search.keyword = keyword;
            this.search.pageNum = pageNum;
            this.search.createTimeStart = timeUtil.getDateTime(this.search.createTimeStart);
            this.search.createTimeEnd = timeUtil.getDateTime(this.search.createTimeEnd);
            this.$axios.options.url = 'articles?page='+pageNum ;
            this.$axios.request({data: this.search}).then((response) => {
                this.loading = false;
                if (response.code !== 1) {
                    this.listData = [];
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.listData = response.data.data;
                this.search.total = response.data.total;
                this.search.pageSize = response.data.per_page;
            }).catch((error) => {
                this.loading = false;
                this.listData = [];
                this.$Message.error('错误');
            });
             
        },
        closeModal(){ //关闭弹框
            this.showModal = false
        },
        openModal(flag, data){
            this.$refs['formValidate'].resetFields();
            clearObject(this.formValidate)  
            this.formValidate.user_id = JSON.parse(this.$localStorage.get('user')).id
            this.showModal = true
            this.modalType = flag
            if(flag == 'edit'){
                Object.assign(this.formValidate, data)
            }  
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    if(this.modalType == 'create'){
                        this.createData()
                    }else{
                        this.editData()
                    }
                } else {
                    this.$Message.error('请完善信息!');
                }
            })
        },
        createData(){ //创建文章
            this.$axios.options.url = 'create_article';
            this.$axios.request({data: this.formValidate}).then((res)=>{
                this.showModal = false
                this.changePage(1);
            })
        },
        editData(){ //编辑文章
            this.$axios.options.url = 'update_article/'+this.formValidate.id;
            this.$axios.request({data: this.formValidate}).then((res)=>{
                if (response.code != 1) {
                    this.$Message.error('修改失败');
                    return;
                }
                this.$Message.success('修改成功!');
                this.showModal = false
                this.changePage(1);
            })
        },
        delete(id) {
            this.$axios.options.url = 'delete_article/'+ id;
            this.$axios.request({
                data: {
                    id: id
                }
            }).then((response) => {
                if (response.code != 1) {
                    this.$Message.error('删除失败');
                    return;
                }
                this.changePage(1);
            }).catch((error) => {
                this.$Message.error(error);
            })
        },
    },
    
}