// async function sendHru(){
//   const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };
//   console.log(validateEmail);
//   if (validateEmail){
//     let form = {
//       name: document.getElementById('name').value,
//       phone: document.getElementById('phone').value,
//       email: document.getElementById('email').value,
//       comment: document.getElementById('comment').value,
//       };
//     let response = await fetch('/contactForm', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//       },
//       body: JSON.stringify(form)
//     });
//     let result = await response.text();
//     console.log(result);
//   }
// }
  
  