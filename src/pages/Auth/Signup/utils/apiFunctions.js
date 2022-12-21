import api from '../../../../services/api'

export async function getUserByCpf(arg){
    let {cpf} = arg 
    const user = await api.get(`/getcpf/${cpf}`)

    return user
}

export async function getUserByEmail(arg){
    let {email} = arg 
    const user = await api.get(`/getemail/${email}`)

    return user
}

export async function getUserByLogin(arg){
    let {login} = arg 
    const user = await api.get(`/getlogin/${login}`)

    return user
}

export async function createAccount(arg){
    let {data} = arg;

    const create = await api.post(`/register`, data)

    return create
}