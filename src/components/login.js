import {setToken, removeToken} from '../libs/util'

export default {
    data() {
        const request = {
            name: '',
            password: '',
            // remember: false
        };
        const validateCheck = (rule, value, callback) => {
            removeToken();
            this.$localStorage.remove('user');
            this.$localStorage.remove('menus');
            this.$axios.options.url = 'login';
            this.$axios.request({data: request}).then((response) => {
                if (!response.token) {
                    callback(new Error(response.result || this.$config.ERROR));
                    return;
                }
                setToken(response.token);
                this.$localStorage.set('user', JSON.stringify(response.user));
                this.$router.push({
                    name: 'home',
                    // params: {id: params.row.id}
                })
            }).catch((error) => {
                callback(new Error(this.$config.ERROR));
            });
        };
        return {
            requestData: request,
            loading: false,
            rule: {
                login: [
                    {validator: validateCheck}
                ]
            }
        }
    },
    methods: {
        submit(name) {
            this.loading = true;
            this.$refs[name].validate((valid) => {
                this.loading = false;
                if (valid) {
                    this.$router.push({name: 'master'});
                }
            })
        }
    }
}