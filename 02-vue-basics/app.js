const App = {
    data() {
        return {
            title: 'Список дел',
            addPlaceholder: "Введите название",
            inputValue: '',
            todos: []
        }
    },
    methods: {
        inputChangeHandler (event) {
            this.inputValue = event.target.value
            console.log(event.target)
        },
        addTodoHandler () {
            if (this.inputValue === '') return
            this.todos.push(this.inputValue)
            this.inputValue = ''
        },
        toUpperCaseTodo (todo) {
            return todo.toUpperCase();
        },
        deleteTodoHandler (index) {
            this.todos.splice(index, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            return this.todos.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ""
            }
        }
    }
}

Vue.createApp(App).mount('#app')