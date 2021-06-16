
let user_signed_in = false;

function is_user_signed_in(){
  return user_signed_in;
}



chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{

  if(request.message === "login"){
    
    if(is_user_signed_in()){
      console.log("User is already Signed in");
    }
    else{
      console.log(is_user_signed_in());
      //API call to backend server
      //...

    }

  }
  else if(request.message === "logout"){

  }
  else if (request.message === "isUserSignedIn"){

  }

});