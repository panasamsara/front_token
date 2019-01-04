import {setToken} from "../libs/util";

export default {
    data() {
        return {
            dataList: [
                {number: 0, title: '最新文章', background: 'bg1'},
                {number: 0, title: '全部文章', background: 'bg2'},
                {number: 0, title: '全部用户', background: 'bg3'},
                {number: 0, title: '热门文章', background: 'bg4'},
                {number: 0, title: '跟多文章', background: 'bg5'},
                // {number: 0, title: '当期还款', background: 'bg6'},
                // {number: 0, title: '在贷业务', background: 'bg7'},
                // {number: 0, title: '风险业务', background: 'bg8'},
                // {number: 0, title: '不良业务', background: 'bg9'},
                // {number: 0, title: '续贷机会', background: 'bg10'},
                // {number: 0, title: '管理资料', background: 'bg11'}
            ],
            option: {
                title: {
                    text: '访问量'
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '访问量',
                        type: 'line',
                        data: [10, 20, 12, 30]
                    },
                    {
                        name: '阅读量',
                        type: 'line',
                        data: [8, 12, 10, 20]
                    }]
            },
            chart: null,
        }
    },
    methods: {
        loadReport() {
            this.$axios.options.url = 'houseMortgage/appApi/v1/read/getHome';
            this.$axios.request({data: {}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.dataList[0].number = 10;
                this.dataList[1].number = response.data.totalProjectNum;
                this.dataList[2].number = response.data.totalClientNum;
                this.dataList[3].number = response.data.totalProjectNumInProgress;
                this.dataList[4].number = response.data.totalLoanNumInProgress;
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        loadChart(){
            this.chart.showLoading();
            this.$axios.options.url = 'houseMortgage/appApi/v1/read/getHomeWeb';
            this.$axios.request({data: {}}).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.chart.hideLoading();
                this.option.xAxis.data= Object.keys(response.data.amountMonthlyData);
                this.option.series[0].data=Object.values(response.data.amountMonthlyData);
                this.option.series[1].data=Object.values(response.data.balanceMonthlyData);
                this.chart.setOption(this.option);
            }).catch((error) => {
                this.chart.hideLoading();
                this.$Message.error(this.$config.ERROR);
            });
        }
    },
    mounted() {
        this.chart = this.$echarts.init(document.getElementById('charts'));
        this.chart.setOption(this.option);
        // this.loadReport();
        // this.loadChart();
        this.$root.eventHub.$emit('breadcrumb');
    }
}