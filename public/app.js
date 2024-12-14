// Data you want to send to the backend
let  datatosend = {
    user:"",
    password:""
  };
  console.log(document.getElementById("username").innerHTML)
  function run(){
      datatosend.user=document.getElementById("username").value
      datatosend.password=document.getElementById("password").value
      fetch('https://first-vite-2.onrender.com/api/data', {
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
  