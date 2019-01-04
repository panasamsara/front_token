import {formatMoney} from "../../libs/util";

export default {
    data(){
        return{
            repaymentData:[],
            repaymentColumns:[{title:'期数',key:'currPeriod',align:'center'},
                {title:'还款日期',key:'repayDate',align:'center'},
                {title:'应还本金(元)',key:'repayPrincipal',align:'right'},
                {title:'应还利息(元)',key:'repayInterest',align:'right'},
                {title:'其他利息(元)',key:'ownRepayInterest',align:'right'},
                {title:'本息合计(元)',key:'totalRepayAmount',align:'right'},
                {title:'剩余本金(元)',key:'leftPrincipal',align:'right'}],
            totalrepayPrincipal:0,
            totalrepayInterest:0,
            totalownRepayInterest:0,
            repayAmount:0
        }
    },
    created(){
        this.getLoanInfo(this.$router.currentRoute.params.id)
    },
    methods: {
        getLoanInfo() { //获取放款信息
            this.$axios.options.url = 'houseMortgage/hmLoanApply/read/queryByProjectId';
            this.$axios.request({
                data: {
                    projectId: this.$router.currentRoute.params.id
                }
            }).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.loanInfo = response.data[0]?response.data[0]:{};
                if(this.loanInfo.id){
                    this.getLoanPlan(this.loanInfo.id)
                }else{
                    this.repaymentData = []
                }
                
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        },
        getLoanPlan(id){
            this.$axios.options.url = 'houseMortgage/hmLoanApply/read/previewLoanPlan';
            this.$axios.request({
                data: {
                    loanApplyId: id,
                    previewType:1
                }
            }).then((response) => {
                if (response.httpCode != 200) {
                    this.$Message.error(response.msg || this.$config.ERROR);
                    return;
                }
                this.repaymentData = response.data; 
                this.repaymentData.forEach((item)=>{
                    this.totalrepayPrincipal += parseInt(item.repayPrincipal);
                    item.repayPrincipal=formatMoney(item.repayPrincipal,2);
                    this.totalrepayInterest += parseInt(item.repayInterest);
                    item.repayInterest=formatMoney(item.repayInterest,2)
                    this.totalownRepayInterest += parseInt(item.ownRepayInterest);
                    item.ownRepayInterest=formatMoney(item.ownRepayInterest,2)
                    item.leftPrincipal=formatMoney(item.leftPrincipal,2)
                    this.repayAmount += parseInt(item.totalRepayAmount);
                    item.totalRepayAmount=formatMoney(item.totalRepayAmount,2)
                })
                this.totalrepayPrincipal = this.totalrepayPrincipal.toFixed(2)
                this.totalrepayInterest = this.totalrepayInterest.toFixed(2)
                this.totalownRepayInterest = this.totalownRepayInterest.toFixed(2)
                this.repayAmount = this.repayAmount.toFixed(2)
            }).catch((error) => {
                this.$Message.error(this.$config.ERROR);
            });
        }
    }
}