export const isLoggedin=()=>{
let data=localStorage.getItem('token');
if (data != null) return true;
else return false;
};



export const doLogin=(token, next)=>{
    localStorage.setItem('token', JSON.stringify(token));
    next()
    
};

export const doLogout=(next)=>{
localStorage.removeItem("data");
next()
};

export const getCurrentUserDetail=()=>{
    if(isLoggedin){
        return JSON.parse(localStorage.getItem("data"));
    }
    else{
        return false;
    }
};