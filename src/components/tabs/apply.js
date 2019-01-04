import mortgage from '../../views/tabs/mortgageInformation'

export default {
    data() {
        return {}
    },
    props: {
        model: Object,
        dicts: Object,
        step: Number
    },
    components: {
        'mortgage': mortgage
    }
}