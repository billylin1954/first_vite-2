// Data you want to send to the backend
let  datatosend = {
    user:"",
    password:""
  };
  console.log(document.getElementById("username").innerHTML)
  function send(){
      datatosend.user=document.getElementById("username").value
      datatosend.password=document.getElementById("password").value
      fetch('http://localhost:3005/api/data', {
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
  