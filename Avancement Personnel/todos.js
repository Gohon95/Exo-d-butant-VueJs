var todos = new Vue({
    el: "#todos",
    data: {
        todos: [],
        newTodo: ''
    },

    methods: {
        // Ajouter une tâche
        addTodo: function() {
            this.todos.push({
                completed: false,
                name: this.newTodo
            })
            this.newTodo = ''
            console.log(this.todos)
        },
        // Supprimer une tâche
        supTodo: function(todo) {
            let name = todo.name
            console.log(name)
            this.todos = this.todos.filter(function(set) {
                return set.name != name;
            })
        },
        // Supprimer toutes les tâches accomplis
        clearAccomplished: function() {
            this.todos = this.todos.filter(function(set) {
                return set.completed != true;
            })
        },
        // je sais plus
        allCompleted: function() {
            let checked = event.target.checked
            this.todos = this.todos.map(function(up) {
                if(checked) {
                    up.completed = true;
                } else {
                    up.completed = false;
                }
                return up;
            })
        }
    },
    computed: {
        // Compteur de tâche à faire
        remaining: function () {
            return this.todos.filter(todo => !todo.completed).length
        },
        // Compteur qui enlève une tâche à faire quand elle est complété
        completed: function () {
            return this.todos.filter(todo => todo.completed).length
        }
    }
})