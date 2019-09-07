export default function({ $axios, redirect, store }) {
  $axios.interceptors.request.use(request => {
    if (store.state.auth.token && !request.headers.common['Authorization']) {
      const token = store.state.auth.token
      request.headers.common['Authorization'] = `Bearer ${token}`
    }
    return request
  })

  $axios.onError(error => {
    if (error.response) {
      if (error.response.status === 401) {
        redirect('/login?message=session')
        store.dispatch('auth/logout')
      }

      if (error.response.status === 500) {
        console.log('Server 500 error')
      }
    }
  })
}
