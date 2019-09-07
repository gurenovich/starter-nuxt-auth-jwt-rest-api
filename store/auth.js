import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

export const state = () => ({
  token: null
})

export const actions = {
  async login({ dispatch, commit }, formData) {
    try {
      const token = await this.$axios.$post('/api/auth/login', formData)
      dispatch('setToken', token)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  setToken({ commit }, token) {
    this.$axios.setToken(token, 'Bearer')
    commit('setToken', token)
    Cookies.set('jwt', token)
  },
  logout({ commit }) {
    this.$axios.setToken(false)
    commit('clearToken')
    Cookies.remove('jwt')
  },
  async registration({ commit }, formData) {
    try {
      await this.$axios.$post('/api/auth/registration', formData)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  async autoLogin({ dispatch }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie
    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt']

    if (isJwtValid(token)) dispatch('setToken', token)
    else dispatch('logout')
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

function isJwtValid(token) {
  if (!token) return

  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0

  return new Date().getTime() / 1000 < expires
}
