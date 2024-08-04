Vue.createApp({
    data() {
        return {
            title: 'Vuejs',
            html: '<h1>Vuejs 3 App</h1>',
            car: {
                title: 'VW',
                year: 2020
            },
            items: [1, 2, 3,],
        }
    },
    methods: {
        addItem() {
            if (this.$refs.addItemInput.value === '') return
            this.items.unshift(this.$refs.addItemInput.value)
            this.$refs.addItemInput.value = ''
        },
        deleteItem(index) {
            this.items.splice(index, 1)
        },
        log(item) {
            console.log('Log item: ', item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(item => item % 2 === 0)
        }
    }
}).mount('#app')