import {defineStore} from 'pinia'

export const useFavoritosStore = defineStore('sacola', {

    state: () => ({
        sacola: [],
    }),
    getters: {
        isSacola: (state) => (id) => {
            return state.sacola.indexOf(id) > -1
        },

        listaSacola: (state) => {
            return state.sacola

        }
    },

    actions: {

        adionarSacola(id) {

            if (this.sacola.indexOf(id) === -1) {
                this.sacola.push(id)
                console.log("adicionado", this.sacola)
                this.persistState()
            }
        },

        removerSacola(id) {
            const index = this.sacola.indexOf(id)
            if ( index> -1) {

                this.sacola.splice(index, 1)
                console.log("removido", this.sacola)
                this.persistState()
            }
        },

        persistState() {
            localStorage.setItem('sacola', JSON.stringify(this.sacola))
        },
        restoreState() {
            const state = localStorage.getItem('sacola')
            if (state) {
                this.sacola = JSON.parse(state)
            }
        }
    }
})