import * as tokenService from '../services/tokenService'


const BASE_URL = '/api/profiles'

async function getProfileById() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  const data = await res.json()
  return data
}

export { getProfileById }
