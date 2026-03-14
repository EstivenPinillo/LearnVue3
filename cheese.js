export default {
    data() {
        return {
            leche: true,
        };
    },
    template: `<button @click="guess">
        <slot></slot> {{typecheese}}
        <div v-show="yesbloque">En bloque</div>
    </button>`,
    props: {

        typecheese: {
            typecheese: String,
            default: 'Costeno'
        },
        yesbloque: {
            yesbloque: Boolean,
            default: false
        }
        
    },
    methods: {
        guess() {
            
            this.$emit('guess',"Mango ...");
        }
    },

};