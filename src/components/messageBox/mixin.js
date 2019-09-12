export default {
    data () {
        return {
            visible: false,
            message: '内容',
            interval: 3000
        }
    },
    methods: {
        show (options) {
            let _o = {};
            if (typeof options === "string" || !options) {
                _o.message = options || '输入提示内容';
            } else {
                _o = options;
            }
            Object.assign(this, _o);
            this.visible = true;

            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.visible = false;
            }, this.interval);

        },
        hide () {
            console.log(123);
            this.visible = false;
        }
    },
    mounted () {
        this.wrap = this.$refs.wrap;
    }
}
