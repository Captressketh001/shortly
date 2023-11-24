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
            return await axios.post('https://cleanuri.com/api/v1/shorten', data , {

            })
                .then(res =>{
                    return res
                }).catch(err => {
                    
                    return err
                })
        },
    }

})
