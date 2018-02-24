import {observable, action, computed} from 'mobx'

class Store {
    @observable authenticated = true
    @observable favorites = []

    @action changeAuthenticated () {
        this.authenticated = !this.authenticated
    }

    @action addToFavorites (item) {
        this.favorites.push(item)
    }

    @action removeFavorite (item) {
        let _self = this;
        this.favorites.map((v, i) => {
            if (v.location === item.location) {
                _self.favorites.splice(i, 1)
            }
        })
    }

    // @computed get checkFavorite (item) {
    //     let _self = this;
    //     this.favorites.map((v, i) => {
    //         if (v.location === item.location) {
    //             return true
    //         }
    //         return false
    //     })
    // }
}

const store = new Store()

export default store