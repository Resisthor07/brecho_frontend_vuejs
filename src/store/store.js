import {defineStore} from 'pinia'

export const useFavoritosStore = defineStore('favoritos', {

    state: () => ({
        favoritos: [],
    }),
    getters: {
        isFavorite: (state) => (id) => {
            return state.favoritos.indexOf(id) > -1
        }
    },

    actions: {

        adionarFavoritos(id) {

            if (this.favoritos.indexOf(id) === -1) {
                this.favoritos.push(id)
                console.log("adicionado", this.favoritos)
                this.persistState()
            }
        },

        removerFavoritos(id) {
            const index = this.favoritos.indexOf(id)
            if ( index> -1) {

                this.favoritos.splice(index, 1)
                console.log("removido", this.favoritos)
                this.persistState()
            }
        },

        persistState() {
            localStorage.setItem('favoritos', JSON.stringify(this.favoritos))
        },
        restoreState() {
            const state = localStorage.getItem('favoritos')
            if (state) {
                this.favoritos = JSON.parse(state)
            }
        }
    }
})