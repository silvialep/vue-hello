const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Esercizio!',
            source: 'ciao.gif'
        }
    }
}).mount('#app')