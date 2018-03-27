import axios from 'axios'
import qs from 'qs'

const methods = ['get', 'post', 'put', 'patch', 'delete']

class ApiClient {
  constructor () {
    this.instance = axios.create({
      timeout: 8000,
      headers: {
        Authorization: `Bearer ${this.token}`
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      },
    });

    methods.forEach(method => (this[method] = this.instance[method]));
  }
}

export default new ApiClient()
