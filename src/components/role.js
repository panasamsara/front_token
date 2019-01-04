import {timeUtil, 
    clearObject, 
    getSysMenuTreeData, 
    setChildrenNode,
    setParentNode} from '../libs/util'

export default {
    data() {
        return {
            searchModel: {
                keyword: '',
                pageNum: 1,
                pageSize: this.$config.pageSize,
            },
            sysMenuModel: {
                roleId: '',
                menu: []
            },
            loading: true,
            sysRoleModal: false,
            sysMenuModal: false,
            sysMenuList: [],
            total: 0,
            columns: [{
                    title: '名称',
                    key: 'role_name'
                },
                {
                    title: '等级',
                    key: 'role_level'
                },
                {
                    title: '操作',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('a', {
                                style: {
                                    color: '#860C14',
                                    margin: '0 3px'
                                },
                                on: {
                                    click: () => {
                                        this.showRole(true);
                                        Object.assign(this.roleInfo, params.row);
                                    }
                                }
                            }, '编辑'),
                            h('a', {
                                style: {
                                    color: '#860C14',
                                    margin: '0 3px'
                                },
                                on: {
                                    click: () => {
                                        this.sysMenuModel.roleId = params.row.id;
                                        this.sysMenuList = [];
                                        this.$axios.options.url = 'sys/role/read/menu';
                                        this.$axios.request({
                                            data: {
                                                id: params.row.id,
                                            }
                                        }).then((response) => {
                                            if (response.code != 1) {
                                                this.$Message.error(response.msg ? response.msg : '错误');
                                                return;
                                            }
                                            let root = response.data.filter((value) => {
                                                return value.parentId === '0';
                                            });
                                            getSysMenuTreeData(root[0], response.data);
                                            this.sysMenuList = root;
                                        }).catch((error) => {
                                            this.$Message.error(error);
                                        });
                                        this.sysMenuModal = true;
                                    }
                                }
                            }, '菜单'),
                            h('a', {
                                style: {
                                    color: '#860C14',
                                    margin: '0 3px'
                                },
                                on: {
                                    click: () => {
                                        this.$root.eventHub.$emit('delete', params.row.id);
                                    }
                                }
                            }, '删除')
                        ])
                    }
                }
            ],
            items: [],
            roleInfo: {
                role_name: '',
                role_level: ''
            },
            roleRules: {
                role_name: [{
                    required: true,
                    message: '必填项',
                    trigger: 'blur'
                }],
                role_level: [{
                        required: true,
                        message: '必填项',
                        trigger: 'blur'
                    },
                    {
                        type: 'string',
                        pattern: /^[0-9A-Za-z_]{0,20}$/,
                        message: '格式错误',
                        trigger: 'blur'
                    }
                ]
            },
            isEdit: false
        }
    },
    methods: {
        delete(id) {
            this.$axios.options.url = 'role_delete/'+ id;
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
        renderContent(h, {
            root,
            node,
            data
        }) {
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [
                h('span', [
                    h('Checkbox', {
                        props: {
                            value: data.selected
                        },
                        style: {
                            marginRight: '8px'
                        },
                        on: {
                            'on-change': (flag) => {
                                setChildrenNode(data,flag);
                                setParentNode(root,data,flag)
                            }
                        }
                    }),
                    h('span', data.title)
                ])
            ]);
        },
        load() {
            this.loading = true;
            this.$axios.options.url = 'role_list';
            this.$axios.request({
                data: this.searchModel
            }).then((response) => {
                this.loading = false;
                if (response.code != 1) {
                    this.items = [];
                    this.$Message.error('获取失败');
                    return;
                }
                this.total = response.data.total;
                this.items = response.data.data;
            }).catch((error) => {
                this.loading = false;
                this.items = [];
                this.$Message.error(error);
            });
        },
        changePage(pageNum) {
            this.searchModel.pageNum = pageNum;
            this.load();
        },
        confirm() {
            this.sysMenuModel.menu.length = 0;
            this.$refs['sysMenuTree'].getSelectedNodes().forEach((value) => {
                this.sysMenuModel.menu.push(value.id);
            });
            this.$axios.options.url = 'role_update';
            this.$axios.request({
                data: this.sysMenuModel
            }).then((response) => {
                if (response.code != 1) {
                    this.$Message.error('提交失败');
                    return;
                }
                this.sysMenuModal = false;
            }).catch((error) => {
                this.$Message.error(error);
            })
        },
        showRole(flag) {
            this.$refs['roleForm'].resetFields();
            this.isEdit = flag;
            if (!flag)
                clearObject(this.roleInfo);
            this.sysRoleModal = true;
        },
        submit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.loading = true;
                    this.$axios.options.url = this.isEdit ? 'role_update' : 'role_add';
                    this.$axios.request({
                        data: this.roleInfo
                    }).then((response) => {
                        this.loading = false;
                        if (response.code != 1) {
                            this.$Message.error(response.msg);
                            return;
                        }
                        this.changePage(this.isEdit ? this.searchModel.pageNum : 1);
                        this.sysRoleModal = false;
                    }).catch((error) => {
                        this.loading = false;
                        this.$Message.error(error);
                    })
                }
            })
        }
    },
    mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        this.$root.eventHub.$on('delConfirm', (params) => {
            this.delete(params);
        });
        this.load();
    },
    beforeDestroy() {
        this.$root.eventHub.$off('delConfirm');
    }
}