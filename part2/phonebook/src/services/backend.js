import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data )
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deleteObject = id => {
    console.log("deleting", id)
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
      .catch(error => {
        console.error('Error deleting object:', error)
      })
}

const updateObject = update => {
  console.log("Updating", update)
  const request = axios.put(`${baseUrl}/${update.id}`, update)
  return request.then(response => response.data)
}

export default { getAll, create, deleteObject, updateObject };