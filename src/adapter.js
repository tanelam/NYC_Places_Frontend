const baseUrl = 'http://localhost:8000'

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json"
}

const login = (username, password) => {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ username, password })
  })
  .then(resp => resp.json())
}
