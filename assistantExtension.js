
import mailController from './chatgpt/KYO-Mailer-Assistant/controllers/mail'
let textPlace = document.getElementsByTagName("p")[0]
let response;
console.log("this is the assistante");
//this is not working
const fetchingResults  = async (email,title)=>{
response = await fetch("./chatgpt/KYO-Mailer-Assistant/controllers/mail/mailController",{body:JSON.stringify({
    email:message.emailResponse,
    subject:message.title
})})
}
chrome.runtime.onMessage.addListener(
    
    function(message, sender, sendResponse) {
        console.log(" im in ");
            //  To do something
            console.log(message.title);
            if(message.to ==='popup'){
            console.log(message.emailResponse)
            fetchingResults(message.emailResponse,message.title)
            textPlace.textContent = response.reply            
            }
    }
);




