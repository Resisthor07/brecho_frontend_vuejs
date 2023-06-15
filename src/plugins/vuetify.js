import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#FF7272', // #E53935
                secondary: 'rgba(255,114,114,0.7)', // #FFCDD2
                
            },
        },
    },
})
