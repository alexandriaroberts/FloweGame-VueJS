const SwitchEmit = {
data() {
    return {
        msg: 'Switch',
        background: 'black'
    }
},
template: `<button :bind="msg" v-on:click="nightmode">{{ msg }}</button> `,
methods: {
    nightmode () {
        console.log('hey');
        return this.background;
    }
}

};



new Vue({
    el: '#app',
    components: {
        SwitchEmit
    },
    template: `<switch-emit></switch-emit/>` 
              
});