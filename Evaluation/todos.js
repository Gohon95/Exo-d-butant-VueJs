var vm = new Vue({
    el: '#todos',
    data: {
        newTodo: "",
        message: 'String',
        newquantity: null,
        newId: 5,
        newtext: '',
        tab: [{
                "id": 1,
                "quantity": 1,
                "name": "compasse"
            },
            {
                "id": 2,
                "quantity": 2,
                "name": "jacket"
            },
            {
                "id": 3,
                "quantity": 3,
                "name": "hicking socks"
            },
            {
                "id": 4,
                "quantity": 4,
                "name": "suntan lotion"
            }
        ],
    methods: {
        addTodo: function () {
                this.tab.push({
                  "id": this.newId++,
                  "name": this.newtext,
                  "quantity":this.newquantity,
                })
        }
    }
  }})