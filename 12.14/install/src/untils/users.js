import http from './httpRequest'

function users(params) {
  return http({ url: http.addorUrl('/users'), method: 'get', params })
}

function addUsers(data) {
  return http({ url: http.addorUrl('/users'), method: 'post', data })
}

function editUser(data) {
  return http({
    url: http.addorUrl(`/users/${data.id}`),
    method: 'put',
    data: { email: data.email, mobile: data.mobile }
  })
}

function deleteUser(id) {
  return http({
    url: http.addorUrl(`/users/${id}`),
    method: 'delete'
  })
}

function typeUser(data) {
  return http({
    url: http.addorUrl(`/users/${data.uid}/state/${data.type}`),
    method: 'put'
  })
}

function roleList() {
  return http({
    url: http.addorUrl('/roles'),
    method: 'get'
  })
}

function role(data) {
  return http({
    url: http.addorUrl(`users/${data.id}/role`),
    method: 'put',
    data: { rid: data.rid }
  })
}

export { users, addUsers, editUser, deleteUser, typeUser, roleList, role }
