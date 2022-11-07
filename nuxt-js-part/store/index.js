export const state = () => ({
    tasks : []
})

export const mutations = {

    GET_TASK(state,task) {
        state.tasks = task
    },

    ADD_TASK(state,task) {
        state.tasks = [...state.tasks,{name:task.name, status:task.status}]
    },

    REMOVE_TASK(state,task) {
        state.tasks.splice(state.tasks.indexOf(task),1)
    },

    COMPLETED_TASK(state,task) {
        const found = state.tasks.find(element => element._id == task);
        found.status == 'completed'
    }
} 