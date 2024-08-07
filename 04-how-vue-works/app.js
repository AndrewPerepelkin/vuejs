const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title: 'Template header'
        }
    },
    methods: {
        changeHeading() {
            this.title = 'Changed heading'
        }
    },
    // template: `
    // <div class="card center">
    //     <h1>{{title}}</h1>
    //     <button class="btn" @click="title='New title!'">Change heading</button>
    // </div>
    // `
    render() {
        return h(
            'div', {class: 'card center'},
            [
                h('h1', {}, this.title),
                h('button', {
                    class: 'btn',
                    onClick: this.changeHeading
                }, 'Изменить заголовок')

            ]
        )
    }
})

app.mount('#app')