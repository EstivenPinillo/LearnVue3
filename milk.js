import cheese from "./cheese.js"

export default {

    data() {
        return {
            yesbloque: false
        }
    },

    components: {
        'cheese': cheese
    },

    template: `
        <cheese @guess="guessdata" :yesbloque="yesbloque" typecheese="Mozzarella">Marlon-Milk</cheese>
    `,

    methods: {
        guessdata(guess){
            console.log(guess);
            this.yesbloque = !this.yesbloque;
        }    
    },

}