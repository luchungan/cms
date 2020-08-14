import axios from 'axios'

const service = new axios.create({
    timeout:5000
})

export default service