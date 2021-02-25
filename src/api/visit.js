import axios from '../core/axios'

export default {
    get: () => axios.get('/visit'),
    remove: id => axios.delete('/visit/' + id),
    add: values => axios.post('/visit', values),
    patch: (id, values) => axios.patch(`/visit/${id}`, values)
}