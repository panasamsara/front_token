import {timeUtil} from '../libs/util'

export default {
    data() {
        const _this = this;
        return {
            more: false,
            search: {
                total: 0,
                pageSize: this.$config.pageSize
            },
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
            data: [],
            columns: [
                {title: '用户名', key: 'name', align: 'center', width: 200},
                {title: '邮箱', key: 'email', align: 'center', },
                {title: '申请日期', key: 'created_at', align: 'center', },
                {
                    title: '操作', align: 'center', render: (h, params) => {
                        return h('div', [
                            h('a', {
                                style: {
                                    display: params.row.multiple ? 'none' : 'block'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({
                                            name: 'customerInfo',
                                            params: {id: params.row.id, pageNum: _this.search.pageNum}
                                        })
                                    }
                                }
                            }, [
                                h('Tooltip', {
                                    props: {
                                        content: '查看',
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
                                    display: params.row.multiple ? 'block' : 'none'
                                },
                                on: {
                                    click: () => {

                                    }
                                }
                            }, [
                                h('Tooltip', {
                                    props: {
                                        content: '接受',
                                        placement: 'top'
                                    }
                                }, [
                                    h('Icon', {
                                        props: {
                                            type: 'md-checkmark',
                                            size: 20,
                                            color: '#ff9900'
                                        }
                                    })
                                ])
                            ]),
                        ])
                    }
                }]
        }
    },
    methods: {
        changePage(pageNum) {
            this.loading = true;
            this.search.pageNum = pageNum;
            this.search.createTimeStart = timeUtil.getDateTime(this.search.createTimeStart);
            this.search.createTimeEnd = timeUtil.getDateTime(this.search.createTimeEnd);
            this.$axios.options.url = 'user_list';
            this.$axios.request({data: this.search}).then((response) => {
                this.loading = false;
                if (response.code !== 1) {
                    this.data = [];
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.data = response.data.data;
                this.search.total = response.data.total;
            }).catch((error) => {
                this.loading = false;
                this.data = [];
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    mounted() {
        this.$root.eventHub.$emit('breadcrumb');
        this.changePage(1);
    }
}