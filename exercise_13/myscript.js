new Vue({
    el: '#app',
    data: {
      counter: 0,
      secondCounter: 0
    },
    computed:{
      output: function(){
          console.log('computed');
        return this.counter > 5 ? 'Greater then 5' : 'Smaller then 5' ;
      }
    },
    methods: {
      result: function(){
          console.log('Methods');
        return this.counter > 5 ? 'Greater then 5' : 'Smaller then 5' ;
      }
    }
  });
  