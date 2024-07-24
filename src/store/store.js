import { createStore } from "vuex";



export default createStore({
    //data
    state:{
        selectedFilter:"hello"
    },
    //watcher
    mutations:{
        setSelectedFilter(state,payload){
            state.selectedFilter=payload;
        }
    },
    //Methods
    actions:{
        
    },
    //computed(special methods)
    getters:{

    },
    
});