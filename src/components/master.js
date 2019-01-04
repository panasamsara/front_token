import {getToken, removeToken, timeUtil, clearObject} from '../libs/util'
import TaskModal from "../views/taskModal";

var tempParams = '';
export default {
    data() {
        const currentDate = new Date();
        const dayOfWeek = (day) => {
            let week_day;
            switch (day) {
                case 0 :
                    week_day = '日';
                    break;
                case 1 :
                    week_day = '一';
                    break;
                case 2 :
                    week_day = '二';
                    break;
                case 3 :
                    week_day = '三';
                    break;
                case 4 :
                    week_day = '四';
                    break;
                case 5 :
                    week_day = '五';
                    break;
                case 6 :
                    week_day = '六';
                    break;
            }
            return '星期' + week_day;
        };
        return {
            menus: JSON.parse(this.$localStorage.get('menus')) || [],
            user: JSON.parse(this.$localStorage.get('user')),
            breadcrumbs: [],
            date: timeUtil.getCurrentDate(currentDate) + ' ' + dayOfWeek(currentDate.getDay()),
            delModal: false,
            model: {activityId: null},
            project: {id: '', router: ''},
            component: ''
        }
    },
    computed: {
        currentTabComponent() {
            return this.component;
        }
    },
    components: {'taskModal': TaskModal},
    methods: {
        sys_click(name) {
            switch (name) {
                case 'password':
                    this.$router.push({name: 'change_password'});
                    break;
                case 'logout':
                    this.$axios.options.url = 'quitLogin';
                    this.$axios.request().then((response) => {
                        removeToken();
                    }).catch((error) => {

                    });
                    this.$localStorage.remove('user');
                    this.$localStorage.remove('menus');
                    this.$router.push({name: 'login'});
                    break;
            }
        },
        confirm() {
            this.delModal = false;
            this.$root.eventHub.$emit('delConfirm', tempParams);
        },
        loadMenus() {
            if (this.$localStorage.get('menus')) {
                return;
            }
            this.$axios.options.url = 'menu_list';
            this.$axios.request({data: {}}).then((response) => {
                if (response.code != 1) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.menus = response.data;
                this.$localStorage.set('menus', JSON.stringify(this.menus));
                this.$router.push({name: this.user.needChangePwd === 1 ? 'change_password' : 'home'});
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        display(flag) {
            if (!flag)
                this.component = '';
        }
    },
    created() {
        this.$root.eventHub.$on('breadcrumb', () => {
            this.breadcrumbs = this.$router.currentRoute.meta.breadcrumb === '' 
                ? [] 
                : this.$router.currentRoute.meta.breadcrumb.split('/');
            this.$nextTick(() => {
                if (this.$refs['side_menu']) {
                    this.$refs['side_menu'].updateOpened();
                    this.$refs['side_menu'].updateActiveName();
                }
            });
        });
        this.$root.eventHub.$on('delete', (params) => {
            this.delModal = true;
            tempParams = params;
        });
    },
    mounted() {
        this.loadMenus();
    /*    this.menus = [
            {   
                id: '01',
                menuName: '首页',
                request: 'home'
            },
            {
                id: '02',
                menuName: '文章',
                request: 'articles'
            },
            {
                id: '03',
                menuName: '设置',
                // request: 'articles',
                menuBeans: [
                    {
                        id: '0301',
                        menuName: '用户',
                        request: 'users',
                    },
                    {
                        id: '0302',
                        menuName: '角色',
                        request: 'role',
                    }
                ]
            },
        ]*/
    },
    beforeDestroy() {
        this.$root.eventHub.$off('breadcrumb');
        this.$root.eventHub.$off('delete');
    }
}