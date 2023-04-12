
new Vue({
    el: '#app',
   data: {
    inicio: false,
    life: 100,
    monster: 100,
    ataq: 0,
    aplicar: false,

   },
   computed: {
    Curar(){
       return this.life =  this.life + 10;
    },
    Esp(){
        this.ataq = 30
       return this.monster = this.monster - this.ataq;
    },
    Ta(){
       this.ataq = 10
       return this.monster = this.monster - this.ataq;
    },
    Monster(){
        this.ataq = 15
        return this.life = this.life - this.ataq;
    }

   },
   methods: {
    iniciar(){
        this.life = 100,
        this.monster = 100
    },
   },

});