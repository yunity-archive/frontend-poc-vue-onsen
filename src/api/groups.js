import axios from './axios'

export default {
  list () {
    return axios.get('/api/groups/').then(delay(2000)).then(({ data: groups }) => groups)
  }
}

function delay (ms) {
  return val => new Promise(resolve => setTimeout(() => resolve(val), ms))
}

/*
function delay(ms) {
  return val =>
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}

*/
