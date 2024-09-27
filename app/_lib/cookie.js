"use client"
const setCookie=(session)=>{
    document.cookie=`access_token=${session.access_token};max-age=${session.expires_in}`
    document.cookie=`refresh_token=${session.refresh_token};max-age=${ 30 * 24 * 60 * 60}`
}
const getCookie= (cookieName)=>{
    return document.cookie.split(";").find(i=>i.trim().split("=")[0]===cookieName)?.split("=")[1];
    
}



export{setCookie,getCookie}