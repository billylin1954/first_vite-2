// Data you want to send to the backend
let  datatosend = {
    user:"",
    password:""
  };
  console.log(document.getElementById("username").innerHTML)
  function run(){
      datatosend.user=document.getElementById("username").value
      console.log( datatosend.user)
      datatosend.password=document.getElementById("password").value
      console.log( datatosend.password)
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
  
