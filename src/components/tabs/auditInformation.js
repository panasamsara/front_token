import apply from '../../views/tabs/apply'
import files from "../../views/tabs/files";

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
        'apply': apply,
        'files': files
    }
}