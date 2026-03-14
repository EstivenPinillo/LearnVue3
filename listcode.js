	export default {

	data() {
		return{
			languages: [
				{name: "JavaScript", learn: false},
				{name: "Java", learn: false},
				{name: "PHP", learn: false},
				{name: "C++", learn: false},
				{name: "Python", learn: false},
			]
		}
	},

	template: 
		`<div>
			<ul>
				<li v-for="language in languages" :key="language.name">
					<input type="checkbox" v-model="language.learn">
					{{language.name}}
				</li>
			</ul>
		</div>
		<div>
			<ul>
				<li v-for="learnlanguage in learnlanguages" :key="learnlanguage.name">
					<input type="checkbox" v-model="learnlanguage.learn">
					{{learnlanguage.name}}
				</li>
			</ul>
		</div>
		`
	,
	computed: {
        learnlanguages() {
            return this.languages.filter(languages => languages.learn);
        }
    },
	methods: {
		
	},

}