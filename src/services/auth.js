const SIGNINURL = 'api/auth/signin/';

export async function signIn(email, password) {
    return fetch(SIGNINURL, {
    method: "post",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(resp => {
  if(!resp.ok){
    if(resp.status >= 400 && resp.status < 500) {
      return resp.json().then(data => {
        let err = {errorMessage: data.message};
        throw err;
      });
    } else {
      let err = {errorMessage: 'Please try again later, server not responding.'};
      throw err;
    }
  }
  return resp.json();
    });
}