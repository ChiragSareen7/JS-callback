const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies
function getCookies(){
  // Progression 2: using setTimeout()
  setTimeout(()=>{
    let show=''
    cookies.forEach((cookie)=>{
      show+=`<li>${cookie.name}</li>`
    });
    document.body.innerHTML=show;
  },1000); 
}
//Progression 3: Create a function to creat cookies
function createCookie(newCookie){
  setTimeout(()=>{
    cookies.push(newCookie);
  },2000)
}


// Progression 5: calling function
getCookies();
createCookie(newCookie);