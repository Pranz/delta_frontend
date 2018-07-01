
import axios from 'axios'

const apiBaseUrl = 'http://127.0.0.1:5000/'

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

export async function getLatest () {
  const time = new Date().toISOString().substring(0, 10)
  return getFeed(10, time, null)
}

export async function getFeed (limit, time, tags) {
  return axios.post(makeUrl('feed'), {
    'limit': limit,
    'time': time,
    'tags': tags
  })
}

export async function signIn (user, password) {
  return axios.post(makeUrl('profile/login'), {user, password})
}

export async function createUser (email, user, password) {
  return axios.post(makeUrl('profile/create'), {user, password, email})
}

export async function searchDocs (params) {
  params['utformat'] = 'json'
  return axios.get('http://data.riksdagen.se/dokumentlista/', {params})
}

export async function getLikes (id, type) {
  return axios.get(makeUrl('likes', {
    params: {
      id: id,
      type: type
    }
  }))
}

export async function getTags (postId) {
  return axios.get(makeUrl('tags/' + postId))
}

export async function getComments (postId) {
  return axios.get(makeUrl('comments/' + postId))
}
