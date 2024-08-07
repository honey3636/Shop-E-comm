import { createStore } from "vuex";



export default createStore({
    //data
    state:{
        selectedAccount:"switchToSeller"
    },
    //watcher
    mutations:{
        setSelectedAccount(state,payload){
            state.selectedAccount=payload;
        }
    },
    //Methods
    actions:{
        
    },
    //computed(special methods)
    getters:{
        getSelectedAccount(state){
            return state.selectedAccount
        },
    },
    
});