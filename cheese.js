export default {
    data() {
        return {
            leche: true
        };
    },
    template: `<button>
        <slot></slot> {{typecheese}}
    </button>`,
    props: {

        typecheese: {
            typecheese: String,
            default: 'Costeno'
        },

    },

};