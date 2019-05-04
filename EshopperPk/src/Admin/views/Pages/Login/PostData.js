
export function PostData(type,userData){
  let headers = new Headers();

  let BaseUrl = 'http://localhost/API/UserController/'
  return new Promise((resolve,reject)=>{
    fetch(BaseUrl+type ,{
      method:'post',
      'Content_type':'application/json',
      body:JSON.stringify(userData),
      headers
    })
    .then((response)=>{
      response.json()
    })
    .then((responseJson)=>{
      resolve(responseJson)
    })
    .catch((error)=>{
      reject(error)
    })
  })
}
