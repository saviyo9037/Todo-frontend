export const getUserData = ()=>{
    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null 
}
 
export const getToken = ()=>{
    return localStorage.getItem("token")
}

export const getHeader = ()=>{
    const token = getToken()
    return ({
        headers:{
            Authorization:`Bearer ${token}`
        }
})
}