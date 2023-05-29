async function handleCredentialResponse(response) {
  const url = "http://localhost:8089/api";
  const params = { id_token: response.credential };

  axios.post(`${url}/auth/google`, params).then(({ data }) => {
    localStorage.setItem("correo", data.usuario.correo);
  });
}

document.getElementById("google_singout").onclick = () => {
  google.accounts.id.disableAutoSelect();
  google.accounts.id.revoke(localStorage.getItem("email"), (done) => {
    localStorage.clear();
    location.reload();
  });
};
