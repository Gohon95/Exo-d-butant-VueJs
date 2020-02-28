var vm = new Vue({
    data() {
        return {
            todos: [{
                name: 'Tache de test',
                completed: false
            }],
            newTodo: ''
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                completed: false,
                name: this.newTodo
            })
            this.newTodo = ''
        }
    },
    computed: {
        remaining () {
            this.todos.filter(todo => !todo.completed).lenght
        }
    }
})