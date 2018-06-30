
import axios from 'axios'

const apiBaseUrl = 'http://192.168.10.223:5000/'

function makeUrl (path) {
  return apiBaseUrl + path
}

export async function makePost (token, post) {
  return axios.post(makeUrl('posts/create'), {
    token, post
  })
}

export async function getPost (id) {
  return {
    title: 'Yeah boiiiiiii',
    body: 'lorem ipsum knas man.'
  }
}

export async function signIn (user, password) {
  return axios.post(makeUrl('profile/login'), {user, password})
}

export async function createUser (email, user, password) {
  return axios.post(makeUrl('profile/create'), {user, password, email})
}
