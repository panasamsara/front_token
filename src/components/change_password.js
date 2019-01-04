import {ERROR, removeToken} from '../libs/util'

export default {
    data() {
        return {
            passwordInfo: {
                oldPassword: '',
                password: '',
                passwordConfirm: ''
            },
            passwordRules: {
                oldPassword: [
                    {required: true, message: '旧密码不能为空', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '密码不能为空', trigger: 'blur'},
                    {type: 'string', pattern: /^[a-zA-Z0-9]{1,20}$/, message: '密码不能包含特殊字符', trigger: 'blur'}
                ],
                passwordConfirm: [
                    {required: true, message: '确认密码不能为空', trigger: 'blur'},
                ]
            },
            loading: false,
            user: JSON.parse(this.$localStorage.get('user'))
        }
    },
    methods: {
        submit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$axios.options.url = 'sys/user/update/password';
                    this.passwordInfo.id = this.user.id;
                    this.loading = true;
                    this.$axios.request({data: this.passwordInfo}).then((response) => {
                        this.loading = false;
                        if (response.httpCode !== 200) {
                            this.$Message.error(response.msg || this.$config.ERROR);
                            return;
                        }
                        this.$Message.success('修改成功');
                        removeToken();
                        this.$router.push({name: 'login'});
                    }).catch((error) => {
                        this.loading = false;
                        this.$Message.error(error);
                    })
                }
            })
        },
        reset() {
            this.$refs['pwdForm'].resetFields();
        },
        pwConfirm() {
            if (this.passwordInfo.passwordConfirm != this.passwordInfo.password) {
                this.passwordInfo.passwordConfirm = null;
                this.$Message.error({
                    content: '确认密码不一致，请重新输入',
                    duration: 3
                });
            }
        }
    },
    mounted() {
        this.$root.eventHub.$emit('breadcrumb');
    }
}