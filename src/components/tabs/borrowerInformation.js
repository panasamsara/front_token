import {localResizeIMG, validation} from "../../libs/util";

export default {
    data() {
        return {
            familyColumns: [{
                title: '关系', width: 200, render: (h, params) => {
                    this.model.stakeholderList[this.getIndex(params.row.guid)] = params.row;
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择关系',
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
                }
            }, {
                title: '姓名', width: 220, render: (h, params) => {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '姓名',
                            value: params.row.name
                        },
                        on: {
                            'on-change': (event) => {
                                params.row.name = event.target.value;
                            }
                        }
                    })
                }
            }, {
                title: '证件类型', width: 200, render: (h, params) => {
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择证件类型',
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
                }
            }, {
                title: '证件号', width: 320, render: (h, params) => {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '证件号',
                            value: params.row.certificatesNumber
                        },
                        on: {
                            'on-change': (event) => {
                                params.row.certificatesNumber = event.target.value;
                            }
                        }
                    })
                }
            }, {
                title: '职业', width: 200, render: (h, params) => {
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择职业',
                            value: params.row.occupation
                        },
                        on: {
                            'on-change': (value) => {
                                params.row.occupation = value;
                            }
                        }
                    }, this.dicts.OCCUPATION.map((item) => {
                        return h('Option', {props: {value: item.id, key: item.id, label: item.text}})
                    }))
                }
            }, {
                title: '年收入(元)', width: 220, render: (h, params) => {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            type: 'text',
                            maxlength: 10,
                            clearable: true,
                            placeholder: '年收入',
                            value: params.row.income
                        },
                        on: {
                            'on-change': (event) => {
                                params.row.income = event.target.value;
                            },
                            'on-blur': () => {
                                params.row.income = validation.testNumber(params.row.income);
                            }
                        }
                    })
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
                                    this.del(params.row);
                                }
                            }
                        })
                    ])])
                }
            }],
            legalColumns: [{
                title: '保证人类型', width: 200, render: (h, params) => {
                    this.model.stakeholderList[this.getIndex(params.row.guid)] = params.row;
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择保证人类型',
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
                }
            }, {
                title: '名称', width: 220, render: (h, params) => {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '姓名',
                            value: params.row.name
                        },
                        on: {
                            'on-change': (event) => {
                                params.row.name = event.target.value;
                            }
                        }
                    })
                }
            }, {
                title: '证件类型', width: 200, render: (h, params) => {
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择证件类型',
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
                }
            }, {
                title: '证件号', width: 320, render: (h, params) => {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '证件号',
                            value: params.row.certificatesNumber
                        },
                        on: {
                            'on-change': (event) => {
                                params.row.certificatesNumber = event.target.value;
                            }
                        }
                    })
                }
            }, {
                title: '营业额(元)', width: 220, render: (h, params) => {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            type: 'text',
                            maxlength: 10,
                            clearable: true,
                            placeholder: '年收入',
                            value: params.row.income
                        },
                        on: {
                            'on-change': (event) => {
                                params.row.income = event.target.value;
                            },
                            'on-blur': () => {
                                params.row.income = validation.testNumber(params.row.income);
                            }
                        }
                    })
                }
            }, {
                title: '为实际用款方', width: 120, render: (h, params) => {
                    return h('RadioGroup', {
                        props: {
                            value: params.row.actualUseFlag
                        },
                        on: {
                            'on-change': (value) => {
                                params.row.actualUseFlag = value;
                            }
                        }
                    }, this.dicts.ACTUALUSEFLAG.map((item) => {
                        return h('Radio', {
                            props: {
                                label: item.id,
                                key: item.id
                            }
                        }, item.text);
                    }))
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
                                    this.del(params.row);
                                }
                            }
                        })
                    ])])
                }
            }],
            commonColumns: [{
                title: '与借款主体关系', width: 200, render: (h, params) => {
                    this.model.stakeholderList[this.getIndex(params.row.guid)] = params.row;
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择与借款主体关系',
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
                }
            }, {
                title: '姓名', width: 220, render: (h, params) => {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '姓名',
                            value: params.row.name
                        },
                        on: {
                            'on-change': (event) => {
                                params.row.name = event.target.value;
                            }
                        }
                    })
                }
            }, {
                title: '证件类型', width: 200, render: (h, params) => {
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择证件类型',
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
                }
            }, {
                title: '证件号', width: 320, render: (h, params) => {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            maxlength: 20,
                            clearable: true,
                            placeholder: '证件号',
                            value: params.row.certificatesNumber
                        },
                        on: {
                            'on-change': (event) => {
                                params.row.certificatesNumber = event.target.value;
                            }
                        }
                    })
                }
            }, {
                title: '职业', width: 200, render: (h, params) => {
                    return h('Select', {
                        props: {
                            clearable: true,
                            placeholder: '选择职业',
                            value: params.row.occupation
                        },
                        on: {
                            'on-change': (value) => {
                                params.row.occupation = value;
                            }
                        }
                    }, this.dicts.OCCUPATION.map((item) => {
                        return h('Option', {props: {value: item.id, key: item.id, label: item.text}})
                    }))
                }
            }, {
                title: '年收入(元)', width: 220, render: (h, params) => {
                    return h('Input', {
                        style: {
                            width: '100%',
                            marginBottom: '1px'
                        },
                        props: {
                            type: 'text',
                            maxlength: 10,
                            clearable: true,
                            placeholder: '年收入',
                            value: params.row.income
                        },
                        on: {
                            'on-change': (event) => {
                                params.row.income = event.target.value;
                            },
                            'on-blur': () => {
                                params.row.income = validation.testNumber(params.row.income);
                            }
                        }
                    })
                }
            }, {
                title: '为实际用款人', width: 120, render: (h, params) => {
                    return h('RadioGroup', {
                        props: {
                            value: params.row.actualUseFlag
                        },
                        on: {
                            'on-change': (value) => {
                                params.row.actualUseFlag = value;
                            }
                        }
                    }, this.dicts.ACTUALUSEFLAG.map((item) => {
                        return h('Radio', {
                            props: {
                                label: item.id,
                                key: item.id
                            }
                        }, item.text);
                    }))
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
                                    this.del(params.row);
                                }
                            }
                        })
                    ])])
                }
            }],
            emergencyColumns: [{
                title: '关系', width: 200, render: (h, params) => {
                    this.model.stakeholderList[this.getIndex(params.row.guid)] = params.row;
                    return h('div', [
                        h('span', {
                            attrs: {
                                class: 'required',
                            },
                            style: {
                                display: this.step === 2 ? '' : 'none'
                            }
                        }, '*'),
                        h('Select', {
                            style: {
                                width: this.step === 2 ? '90%' : '100%'
                            },
                            props: {
                                clearable: true,
                                placeholder: '选择关系' + (this.step === 2 ? ' | 必填' : ''),
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
                            },
                            style: {
                                display: this.step === 2 ? '' : 'none'
                            }
                        }, '*'),
                        h('Input', {
                            style: {
                                width: this.step === 2 ? '90%' : '100%',
                                marginBottom: '1px'
                            },
                            props: {
                                maxlength: 20,
                                clearable: true,
                                placeholder: '姓名' + (this.step === 2 ? ' | 必填' : ''),
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
                            },
                            style: {
                                display: this.step === 2 ? '' : 'none'
                            }
                        }, '*'),
                        h('Select', {
                            style: {
                                width: this.step === 2 ? '90%' : '100%',
                            },
                            props: {
                                clearable: true,
                                placeholder: '选择证件类型' + (this.step === 2 ? ' | 必填' : ''),
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
                            },
                            style: {
                                display: this.step === 2 ? '' : 'none'
                            }
                        }, '*'),
                        h('Input', {
                            style: {
                                width: this.step === 2 ? '90%' : '100%',
                                marginBottom: '1px'
                            },
                            props: {
                                maxlength: 20,
                                clearable: true,
                                placeholder: '证件号' + (this.step === 2 ? ' | 必填' : ''),
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
                title: '联系方式', width: 200, render: (h, params) => {
                    return h('div', [
                        h('span', {
                            attrs: {
                                class: 'required',
                            },
                            style: {
                                display: this.step === 2 ? '' : 'none'
                            }
                        }, '*'),
                        h('Input', {
                            style: {
                                width: this.step === 2 ? '90%' : '100%',
                                marginBottom: '1px'
                            },
                            props: {
                                clearable: true,
                                placeholder: '联系方式' + (this.step === 2 ? ' | 必填' : ''),
                                maxlength: 20,
                                value: params.row.phoneNumber
                            },
                            on: {
                                'on-change': (event) => {
                                    params.row.phoneNumber = event.target.value;
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
                                    this.del(params.row);
                                }
                            }
                        })
                    ])])
                }
            }],
            sociologyColumns: [{title: '征信渠道', key: 'socialinfoTypeText'},
                {
                    title: '存在', render: (h, params) => {
                        this.model.socialInfoList[params.index] = params.row;
                        return h('div', [
                            h('span', {
                                attrs: {
                                    class: 'required',
                                },
                                style: {
                                    display: this.step === 1 ? '' : 'none'
                                }
                            }, '*'),
                            h('RadioGroup', {
                                props: {
                                    value: params.row.existsFlag
                                },
                                on: {
                                    'on-change': (value) => {
                                        params.row.existsFlag = value;
                                    }
                                }
                            }, this.dicts.EXISTSFLAG.map((item) => {
                                return h('Radio', {
                                    props: {
                                        label: item.id,
                                        key: item.id
                                    }
                                }, item.text)
                            }))
                        ])
                    }
                }, {
                    title: '负面信息说明', width: 500, render: (h, params) => {
                        return h('div', [
                            h('span', {
                                attrs: {
                                    class: 'required',
                                },
                                style: {
                                    display: this.step === 1 ? '' : 'none'
                                }
                            }, '*'),
                            h('Input', {
                                style: {
                                    width: this.step === 1 ? '90%' : '100%',
                                    marginBottom: '1px'
                                },
                                props: {
                                    placeholder: '负面信息说明' + (this.step === 1 ? ' | 必填' : ''),
                                    maxlength: 500,
                                    value: params.row.otherDesc
                                },
                                on: {
                                    'on-change': (event) => {
                                        params.row.otherDesc = event.target.value;
                                    }
                                }
                            })
                        ])
                    }
                }, {
                    title: '操作', width: 60, align: 'center', render: (h, params) => {
                        return h('a', {
                            style: {
                                display: params.row.socialinfoType === '4' ? 'block' : 'none'
                            },
                        }, [h('Tooltip', {
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
                                        this.model.socialInfoList.splice(params.index, 1);
                                    }
                                }
                            })
                        ])])
                    }
                }
            ],
            sociologyData: [{channel: '汇法网', existence: 0, default: true},
                {channel: '全国失信人名单', existence: 0, default: true},
                {channel: '被执行人查询', existence: 0, default: true},
                {channel: '人法网', existence: 0, default: true}],
            maxDate: {
                disabledDate(date) {
                    return date && date.valueOf() > Date.now();
                }
            },
            files: [],
            user: JSON.parse(this.$localStorage.get('user')),
            upload0List: [],
            upload1List: [],
            saving: false,
            _model: null
        }
    },
    props: {
        model: Object,
        dicts: Object,
        step: Number,
    },
    methods: {
        setClientWorkInfo(value) {
            if (value === '3')
                this.model.client.businessNature = this.model.client.companyName = this.model.client.occupation = this.model.client.enterpriseScale = this.model.client.industryType = this.model.client.job = this.model.client.companyAddress = this.model.client.companyPhone = null;
        },
        setSpouseWorkInfo(value) {
            if (value === '3')
                this.model.spouse.businessNature = this.model.spouse.companyName = this.model.spouse.occupation = this.model.spouse.enterpriseScale = this.model.client.industryType = this.model.spouse.job = this.model.spouse.companyAddress = this.model.spouse.companyPhone = null;
        },
        setAgeClient(value) {
            this.model.client.age = value ? (((new Date()).getFullYear() - parseInt(value.split('-')[0])) + '') : null;
        },
        setAgeSpouse(value) {
            this.model.spouse.age = value ? (((new Date()).getFullYear() - parseInt(value.split('-')[0])) + '') : null;
        },
        add(flag, natural) {
            this.model.stakeholderList.push({
                busiType: flag,
                naturalFlag: natural ? natural : null,
                income: null,
                guid: (new Date()).getTime()
            });
        },
        getIndex(guid) {
            return this.model.stakeholderList.findIndex((item) => {
                return item.guid === guid;
            });
        },
        del(item) {
            this.model.stakeholderList.splice(this.getIndex(item.guid), 1);
        },
        plus() {
            let index = this.dicts.SOCIALINFOTYPE.length - 1;
            this.model.socialInfoList.push({
                socialinfoType: this.dicts.SOCIALINFOTYPE[index].id,
                socialinfoTypeText: this.dicts.SOCIALINFOTYPE[index].text,
                clientId: this.model.client.id,
                existsFlag: null
            })
        },
        uploadSuccess0(response, file, fileList) {
            if (fileList.length > 1)
                fileList.shift();
            file.path = response.files[0].path;
            file.suffix = response.files[0].suffix;
            this.model.creditInvestList[0].creditFile = response.files[0].id;
            this.model.creditInvestList[0].creditFileGroup = 25;
            this.$nextTick(() => {
                $('.prefancy0').fancybox({
                    loop: false,
                    closeBtn: false,
                    helpers: {
                        buttons: {}
                    }
                });
            });
        },
        uploadSuccess1(response, file, fileList) {
            if (fileList.length > 1)
                fileList.shift();
            file.path = response.files[0].path;
            file.suffix = response.files[0].suffix;
            this.model.creditInvestList[1].creditFile = response.files[0].id;
            this.model.creditInvestList[1].creditFileGroup = 26;
            this.$nextTick(() => {
                $('.prefancy1').fancybox({
                    loop: false,
                    closeBtn: false,
                    helpers: {
                        buttons: {}
                    }
                });
            });
        },
        uploadError(error, file, fileList) {
            fileList.splice(fileList.indexOf(file), 1);
            this.$Message.error('上传失败');
        },
        formatError(file) {
            this.$Message.error('文件(' + file.name + ')类型错误，请选择图片或PDF文件。');
        },
        handleMaxSize(file) {
            this.$Message.error('文件(' + file.name + ')容量大小超出10M限制。');
        },
        beforeUpload(file) {
            this.upload0List = this.$refs.upload0 ? this.$refs.upload0.fileList : [];
            this.upload1List = this.$refs.upload1 ? this.$refs.upload1.fileList : [];
            if (file.size < 1024000 || file.type.indexOf('image') === -1)
                return true;
            localResizeIMG.photoCompres(file, {
                quality: 0.3
            }, function (base64Codes) {
                file.url = base64Codes;
            });
        },
        remove0(file) {
            this.upload0List.splice(this.upload0List.indexOf(file), 1);
            this.model.creditInvestList[0].creditFile = this.model.creditInvestList[0].creditFileGroup = null;
        },
        remove1(file) {
            this.upload1List.splice(this.upload1List.indexOf(file), 1);
            this.model.creditInvestList[1].creditFile = this.model.creditInvestList[1].creditFileGroup = null;
        },
        change(value) {
            if ((value === '1' || value === '2' || value === '3') && this.model.creditInvestList.length > 1)
                this.model.creditInvestList.pop();
        },
        addSpouse() {
            this.model.creditInvestList.push({
                continuousOverdue: null,
                accumulativeOverdue: null,
                latestQueryNum: null,
                totalLoanNum: null
            });
            this.$nextTick(() => {
                this.upload1List = this.$refs.upload1.fileList;
            });
        },
        loadFiles(id) {
            this.$axios.options.url = 'houseMortgage/hmProjFile/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                let files0 = response.data.find((item) => {
                    return item.projectFileGroup === '25'
                });
                let files1 = response.data.find((item) => {
                    return item.projectFileGroup === '26'
                });
                if (files0)
                    files0.files[0].name = files0.files[0].actualName;
                if (files1)
                    files1.files[0].name = files1.files[0].actualName;
                this.$set(this.files, 0, files0 ? files0.files : []);
                this.$set(this.files, 1, files1 ? files1.files : []);
                this.$nextTick(() => {
                    this.upload0List = this.$refs.upload0.fileList;
                    if (this.$refs.upload1)
                        this.upload1List = this.$refs.upload1.fileList;
                    this.$nextTick(() => {
                        $('.prefancy0').fancybox({
                            loop: false,
                            closeBtn: false,
                            helpers: {
                                buttons: {}
                            }
                        });
                        if (this.$refs.upload1)
                            $('.prefancy1').fancybox({
                                loop: false,
                                closeBtn: false,
                                helpers: {
                                    buttons: {}
                                }
                            });
                    });
                });
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadCredit(id) {
            this.$axios.options.url = 'houseMortgage/hmProjCreditinvest/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                response.data.forEach((item) => {
                    item.creditTypeList = item.creditType ? item.creditType.split(',') : [];
                    item.totalLoanNum = item.totalLoanNum ? item.totalLoanNum + '' : '0';
                });
                this.model.creditInvestList = response.data.length > 0 ? response.data : [{
                    clientId: this.model.client.id,
                    continuousOverdue: null,
                    accumulativeOverdue: null,
                    latestQueryNum: null,
                    totalLoanNum: null
                }];
                this.dicts.CREDITTYPE = response.dicts.CREDITTYPE;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadSocial(id) {
            this.$axios.options.url = 'houseMortgage/hmProjSocialinfo/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.dicts.EXISTSFLAG = response.dicts.EXISTSFLAG;
                this.dicts.SOCIALINFOTYPE = response.dicts.SOCIALINFOTYPE;
                if (response.data.length > 0)
                    this.model.socialInfoList = response.data;
                else {
                    this.model.socialInfoList = [];
                    this.dicts.SOCIALINFOTYPE.filter((item, index) => {
                        return index < this.dicts.SOCIALINFOTYPE.length - 1;
                    }).forEach((item) => {
                        this.model.socialInfoList.push({
                            socialinfoType: item.id,
                            socialinfoTypeText: item.text,
                            clientId: this.model.client.id,
                            existsFlag: null
                        })
                    });
                }
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadFacetalk(id) {
            this.$axios.options.url = 'houseMortgage/hmProjFacetalk/read/queryByProjectId';
            this.$axios.request({data: {projectId: id}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                response.data.forEach((item) => {
                    item.agencyNum = item.agencyNum ? parseInt(item.agencyNum) : null;
                    item.clientNum = item.clientNum ? parseInt(item.clientNum) : null;
                });
                response.data.forEach((item) => {
                    item.staffCompositionList = item.staffComposition ? item.staffComposition.split(',') : []
                });
                this.model.hmProjFacetalk = response.data[0] ? response.data[0] : {
                    agencyNum: null,
                    clientNum: null,
                    staffCompositionList: []
                };
                this.dicts.STAFFCOMPOSITION = response.dicts.STAFFCOMPOSITION;
                this.dicts.FLUENCY = response.dicts.FLUENCY;
                this.dicts.FEEENTANGLED = response.dicts.FEEENTANGLED;
                this.dicts.CERTFLAG = response.dicts.CERTFLAG;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadData(item, callback) {
            switch (item.value) {
                case '0':
                    item.children = [{
                        value: this.user.id,
                        label: this.user.userName
                    }];
                    callback();
                    break;
                case'1':
                    item.loading = true;
                    this.$axios.options.url = 'houseMortgage/hmConfigChannal/read/list';
                    this.$axios.request({data: {pageSize: 1000}}).then((response) => {
                        item.loading = false;
                        if (response.httpCode != 200) {
                            this.$Message.error(response.msg || this.$config.ERROR);
                            return;
                        }
                        item.children = response.data.list.map((item) => {
                            return {value: item.id, label: item.channalName}
                        });
                        callback();
                    }).catch((error) => {
                        item.loading = false;
                        this.$Message.error(this.$config.ERROR);
                    });
                    break;
                case '2':
                    item.loading = true;
                    this.$axios.options.url = 'sys/user/read/getAllUsers';
                    this.$axios.request({data: {}}).then((response) => {
                        item.loading = false;
                        if (response.httpCode != 200) {
                            this.$Message.error(response.msg || this.$config.ERROR);
                            return;
                        }
                        item.children = response.data.map((item) => {
                            return {value: item.id, label: item.userName}
                        });
                        callback();
                    }).catch((error) => {
                        item.loading = false;
                        this.$Message.error(this.$config.ERROR);
                    });
                    break;
            }
        },
        save() {
            this.saving = true;
            this.model.step = this.step;
            this.$localStorage.set('model', JSON.stringify(this.model));
            this.$localStorage.set('dicts', JSON.stringify(this.dicts));
            this.$localStorage.set('files', JSON.stringify(this.files));
            this.$localStorage.set('upload0List', JSON.stringify(this.upload0List));
            this.$localStorage.set('upload1List', JSON.stringify(this.upload1List));
            setTimeout(() => {
                this.saving = false;
            }, 500);
        }
    },
    created() {
        this._model = this.$localStorage.get('model') ? JSON.parse(this.$localStorage.get('model')) : {};
        if (this.model.id === this._model.id && this.step === this._model.step) {
            Object.assign(this.model, this._model);
            Object.assign(this.dicts, JSON.parse(this.$localStorage.get('dicts')));
            return;
        }
        this.dicts.EXISTSFLAG = [];
        this.model.hmProjFacetalk = {agencyNum: null, clientNum: null, staffCompositionList: []};
        this.model.socialInfoList = [{}];
        this.model.creditInvestList = [{}];
    },
    mounted() {
        if (this.model.id === this._model.id && this.step === this._model.step) {
            this.files = JSON.parse(this.$localStorage.get('files'));
            this.upload0List = JSON.parse(this.$localStorage.get('upload0List'));
            this.upload1List = JSON.parse(this.$localStorage.get('upload1List'));
            if (this.upload0List.length)
                this.files[0] = this.upload0List;
            if (this.upload1List.length)
                this.files[1] = this.upload1List;
            this.$nextTick(() => {
                this.upload0List = this.$refs.upload0.fileList;
                if (this.$refs.upload1)
                    this.upload1List = this.$refs.upload1.fileList;
                this.$nextTick(() => {
                    $('.prefancy0').fancybox({
                        loop: false,
                        closeBtn: false,
                        helpers: {
                            buttons: {}
                        }
                    });
                    if (this.$refs.upload1)
                        $('.prefancy1').fancybox({
                            loop: false,
                            closeBtn: false,
                            helpers: {
                                buttons: {}
                            }
                        });
                });
            });
        } else {
            this.loadCredit(this.model.id);
            this.loadSocial(this.model.id);
            this.loadFacetalk(this.model.id);
            this.loadFiles(this.model.id);
        }
        $('#content').width($(document).width() - 270);
    }
}