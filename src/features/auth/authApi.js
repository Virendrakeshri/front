export function createuser(userData){
  return new Promise(async(resolve)=>{
    const response=await fetch('http://localhost:8080/users',{
      method:'POST',
      body:JSON.stringify(userData),
      headers:{'content-type':'application/JSON'}
      
    })
    const data=await response.json();
    // todo:on server we will return some info of user (not password);
    
    resolve({data});
  })
}
export function checkUser(logininfo){
  return new Promise(async(resolve,reject)=>{
    const email=logininfo.email;
    const password=logininfo.password;
    const response=await fetch('http://localhost:8080/users?email='+email);
    const data=await response.json();
    console.log(data);
    if(data.length){
      if(password===data[0].password){
        resolve({data:data[0]});
      }
      else{
        reject({message:'wrong credentials'});
      }
     
    }
    else{
      reject({message:'user not found'});
    }
    // todo:on server we will return some info of user (not password);
    
    resolve({data});
  })
}
export function signOut(userId){
  return new Promise((resolve, reject) => {
    //  todo:on server we will remove user session info;
    resolve({data:'success'});
  })
}