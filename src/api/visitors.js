import axios from '../core/axios'

export default {
    get: () => axios.get('/visitors'),
    add: values => axios.post('/visitors', values),
    show: id => axios.get('/visitors/' + id)
}