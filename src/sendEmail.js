// Send Email using HTML + JavaScript (EmailJs Tutorial)
// https://www.youtube.com/watch?v=dgcYOm8n8ME&ab_channel=CodewithVoran
export default function sendMail(message) {
    var params = {
      to_name: 'capo',
      from_name: 'alguien buscando propiedades...',
      message: message
    };
  
    const serviceID = "service_i34cbc6";
    const templateID = "template_wpyvihu";
  
      emailjs.send(serviceID, templateID, params)
      .catch(err=>console.log(err));
  
  }