import axios from 'axios'

const appClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

export default {
    getTarefas() {
        return appClient.get('/tarefas')
    },
    getTarefa(id) {
        return appClient.get(`/tarefas/${id}`)
    },
    postTarefas(tarefa){
        return appClient.post('tarefas', tarefa)
    },
    putTarefas(tarefa){
        return appClient.put(`/tarefas/${tarefa.id}`, tarefa)
    },
    deleteTarefa(id) {
        return appClient.delete(`/tarefas/${id}`)
    }
}