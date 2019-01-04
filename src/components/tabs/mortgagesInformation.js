import photo from '../../views/tabs/photo'
import {formatMoney, validation} from "../../libs/util";
import area from '../../libs/area'

export default {
    props: {
        model: Object,
        dicts: Object
    },
    data() {
        return {
            areas: area.map((item) => {
                return {value: item.value, label: item.label, children: [], loading: false}
            }),
            evaluationList: [],
            shareColumns: [{
                title: '关系', width: 200, render: (h, params) => {
                    this.model.stakeholderList[this.getIndex(params.row.guid)] = params.row;
                    return h('div', [
                        h('span', {
                            attrs: {
                                class: 'required',
                            }
                        }, '*'),
                        h('Select', {
                            style: {
                                width: '90%'
                            },
                            props: {
                                clearable: true,
                                placeholder: '选择关系 | 必填',
                                value: params.row.relationship
                            },
                            on: {
                                'on-change': (value) => {
                                    params.row.relationship = value;
                                }
                            }
                        }, this.dicts.RELATIONSHIP.map((item) => {
                            return h('Option', {props: {value: item.id, key: item.id, label: item.text}})
                        }))
                    ])
                }
            }, {
                title: '姓名', width: 220, render: (h, params) => {
                    return h('div', [
                        h('span', {
                            attrs: {
                                class: 'required',
                            }
                        }, '*'),
                        h('Input', {
                            style: {
                                width: '90%',
                                marginBottom: '1px'
                            },
                            props: {
                                maxlength: 20,
                                clearable: true,
                                placeholder: '姓名 | 必填',
                                value: params.row.name
                            },
                            on: {
                                'on-change': (event) => {
                                    params.row.name = event.target.value;
                                }
                            }
                        })
                    ])
                }
            }, {
                title: '证件类型', width: 200, render: (h, params) => {
                    return h('div', [
                        h('span', {
                            attrs: {
                                class: 'required',
                            }
                        }, '*'),
                        h('Select', {
                            style: {
                                width: '90%'
                            },
                            props: {
                                clearable: true,
                                placeholder: '选择证件类型 | 必填',
                                value: params.row.certificatesType
                            },
                            on: {
                                'on-change': (value) => {
                                    params.row.certificatesType = value;
                                }
                            }
                        }, this.dicts.CERTIFICATESTYPE.map((item) => {
                            return h('Option', {props: {value: item.id, key: item.id, label: item.text}})
                        }))
                    ])
                }
            }, {
                title: '证件号', width: 320, render: (h, params) => {
                    return h('div', [
                        h('span', {
                            attrs: {
                                class: 'required',
                            }
                        }, '*'),
                        h('Input', {
                            style: {
                                width: '90%',
                                marginBottom: '1px'
                            },
                            props: {
                                maxlength: 20,
                                clearable: true,
                                placeholder: '证件号 | 必填',
                                value: params.row.certificatesNumber
                            },
                            on: {
                                'on-change': (event) => {
                                    params.row.certificatesNumber = event.target.value;
                                }
                            }
                        })
                    ])
                }
            }, {
                title: '共有比例', width: 220, render: (h, params) => {
                    return h('div', [
                        h('span', {
                            attrs: {
                                class: 'required',
                            }
                        }, '*'),
                        h('Input', {
                            style: {
                                width: '90%',
                                marginBottom: '1px'
                            },
                            props: {
                                type: 'text',
                                maxlength: 10,
                                clearable: true,
                                placeholder: '共有比例 | 必填',
                                value: params.row.shareRatio
                            },
                            on: {
                                'on-change': (event) => {
                                    params.row.shareRatio = event.target.value;
                                },
                                'on-blur': () => {
                                    params.row.shareRatio = validation.testNumber(params.row.shareRatio);
                                }
                            }
                        })
                    ])

                }
            }, {
                title: '共有权证的号码', width: 320, render: (h, params) => {
                    return h('div', [
                        h('span', {
                            attrs: {
                                class: 'required',
                            }
                        }, '*'),
                        h('Input', {
                            style: {
                                width: '90%',
                                marginBottom: '1px'
                            },
                            props: {
                                type: 'text',
                                maxlength: 20,
                                clearable: true,
                                placeholder: '共有权证的号码 | 必填',
                                value: params.row.shareCertificate
                            },
                            on: {
                                'on-change': (event) => {
                                    params.row.shareCertificate = event.target.value;
                                }
                            }
                        })
                    ])
                }
            }, {
                title: '备注', width: 320, render: (h, params) => {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 500,
                            clearable: true,
                            placeholder: '其他说明',
                            value: params.row.otherDesc
                        },
                        on: {
                            'on-change': (event) => {
                                params.row.otherDesc = event.target.value;
                            }
                        }
                    })
                }
            }, {
                title: '操作', width: 60, align: 'center', fixed: 'right', render: (h, params) => {
                    return h('a', [h('Tooltip', {
                        props: {
                            content: '删除',
                            placement: 'top',
                            transfer: true
                        }
                    }, [
                        h('Icon', {
                            props: {
                                type: 'md-close',
                                size: 20,
                                color: '#ed4014'
                            },
                            on: {
                                click: () => {
                                    this.sub(params.row);
                                }
                            }
                        })
                    ])])
                }
            }]
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
                response.data.forEach((item) => {
                    item.houseAcreage = item.houseAcreage ? item.houseAcreage + '' : null;
                });
                this.model.pawnList = response.data[0] ? response.data : [{}];
                if (response.data[0])
                    this.model.local = [response.data[0].province, response.data[0].city, response.data[0].area];
                if (this.model.pawnList.length > 1)
                    this.model.local1 = [response.data[1].province, response.data[1].city, response.data[1].area];
                Object.assign(this.dicts, response.dicts);
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
        },
        plus() {
            this.model.stakeholderList.push({
                busiType: '5',
                income: null,
                guid: (new Date()).getTime()
            });
        },
        getIndex(guid) {
            let index = this.model.stakeholderList.findIndex((item) => {
                return item.guid === guid;
            });
            return index;
        },
        sub(item) {
            this.model.stakeholderList.splice(this.getIndex(item.guid), 1);
        },
        add() {
            this.model.pawnList.push({
                backupFlag: 1,
                propertyHolder: this.model.pawnList[0].propertyHolder,
                hall: null,
                room: null,
                toilet: null,
                totalFloor: null,
                onFloor: null
            })
        },
        del() {
            this.model.pawnList.pop();
        },
        loadData(it, callback) {
            it.loading = true;
            it.children = area.filter((item) => {
                return it.value === item.value;
            })[0].children;
            it.loading = false;
            callback();
        }
    },
    mounted() {
        this.loadMortgage(this.model.id);
        this.loadEvaluation(this.model.id);
        $('#content').width($(document).width() - 270);
    }
}