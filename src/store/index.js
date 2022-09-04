import { createStore } from "vuex";
import axios from 'axios'
export default createStore({
    state:{
        links:[]
    },
    getters:{

    },
    mutations:{
        set_Link(state, links){
            state.links = links
        }
    },
    actions:{
        setLink(context, data){
            context.commit('set_Link', data)
        },
        async getLink(context, data) {
            return await axios.get('https://api.shrtco.de/v2/shorten?url=' + data.url + '&domain=' + data.domain, {

            })
                .then(res =>{
                    return res
                }).catch(err => {
                    
                    return err
                })
        },
    }

})