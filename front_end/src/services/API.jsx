import instance from "../config/axiosConfig.jsx";

const getListEmployees = (keyword) => {
    return instance.get(`employees?keyword=${keyword}`)
}
const getEmployeeById = (id) => {
    return instance.get(`employees/${id}`)
}
const deleteEmployee = (id) => {
    return instance.delete(`employees/${id}`)
}
const postCreateEmployee = (name, wage, createdAt) => {
    return instance.post(`employees`, {
        "id": "",
        "name": name,
        "wage": wage,
        "createdAt": createdAt
    })
}
export {getListEmployees, getEmployeeById, deleteEmployee, postCreateEmployee}