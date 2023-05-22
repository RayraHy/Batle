
new Vue({
    el: '#app',
   data: {
    inicio: false,
    life: 100,
    monster: 100,
    hel: 0,
    ataq: 0,
    

   },
   computed: {
    result(){
        return this.life === 0 || this.monster === 0;
    },

   },
   methods: {

    
    iniciar(){
        this.life = 100,
        this.monster = 100
        
    },
    Curar(){
        this.hel = 10, 15, 5;
        if(this.life > 0){
        this.life =  this.life + this.hel;
        
        }
     },
     Esp(){
        this.ataq = 30,10,15;
        if(this.monster > 0){
        this.monster = this.monster - this.ataq;
        
        }
     },
     Ta(){
        this.ataq = 5,10;
        if(this.monster > 0){
        this.monster = this.monster - this.ataq;
        
        }
         
     },
     Monster(){
         this.ataq = 5,10,20,30,15,25,40,35;
         if(this.life > 0){
         this.life = this.life - this.ataq;
         
         }
     }
   },

});