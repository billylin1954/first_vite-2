// Data you want to send to the backend
let  datatosend = {
    user:"",
    password:""
  };
let user_data={
  user:"",
  password:""
}
  function run(){
      datatosend.user=document.getElementById("username").value
      console.log( datatosend.user)
      datatosend.password="12"
      console.log( datatosend.password)
      var ul = document.getElementById("feed");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(datatosend.user+":"+datatosend.password));
      ul.appendChild(li);
      fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datatosend),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response from server:', data);
        })
        .catch(error => {
          console.error('Error sending data:', error);
        });
      
    
      }
      let chat=[]
      fetch('http://localhost:3005/api/data')
    .then((response) => response.json())
    .then((result) => {
      if (Array.isArray(result.response)) {
        console.log(result.response)
        chat=  result.response
        console.log(chat[0].user)
     
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
    function load(item){
      var ul = document.getElementById("feed");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(item));
      ul.appendChild(li);
    }
function load_one(){
console.log("working")
fetch('http://localhost:3005/api/data')
.then((response) => response.json())
.then((result) => {
  if (Array.isArray(result.response)) {
    console.log(result.response)
    chat=  result.response
    console.log(chat[0].user)
 
  }
})
.catch((error) => {
  console.error('Error fetching data:', error);
});
 for(var i=0;i<chat.length;i++){
  var ul = document.getElementById("feed");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(chat[i].user+":"+chat[i].password));
  ul.appendChild(li);
 }
}
  
function sign_up(){
  user_data.user=document.getElementById("user").value
  
  user_data.password=document.getElementById("password").value
  console.log( user_data.password)
  
  fetch('http://localhost:3005/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user_data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response from server:', data);
    })
    .catch(error => {
      console.error('Error sending data:', error);
    });
  }
  let compare_password={
     user:"",
  password:""
  }
  function login(){
   compare_password.name=document.getElementById("compare_user").value
    
    compare_password.password=document.getElementById("compare_password").value
    console.log( compare_password.password)
    
    fetch('http://localhost:3005/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(compare_password),
    })
      .then(response => response.json())
      .then(message => {
        console.log('Response from server:', message);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
    }
