(()=>{
  console.log("testing2content"); 
  let theEmail = ''
  
const GenerateNewResponse =async ()=>{
  //call the chatgpt function and get the results 

  //sent the results to the extension UI  ?? store the email id and its content in google storage and retreive them in the popup.js
  console.log("button clicked");
  
  if(theEmail.length>0){
   let message = {
    to:"popup",
    emailResponse:theEmail
   }
   chrome.runtime.sendMessage(message)
   console.log("message sent");
   
    };
    console.log(theEmail.length);
  }

  
const newEmailLoaded =async ()=>{
  let generateBtnExists = document.getElementsByClassName("generate-btn")[0];

 
 
 if(!generateBtnExists){

  let generateResBtn = document.createElement('button')

  generateResBtn.innerText= 'Generate Response...'

  generateResBtn.className = "ams " + "generate-btn";
  
  generateResBtn.title = "Click to generate a response to the email above";
  
  
  
  //now im gonna sent the email as a prompt to the chatgpt model
  actionSection = document.getElementsByClassName("amn")[0];
 
  console.log(actionSection);
 
  actionSection.appendChild(generateResBtn)
  //now we need to extract every line or paragraph from the email and we can do so with targeting elements that has stle = font*..
 
  paragraphs = document.getElementsByClassName("ii gt")
 
  
 
  for(const text of paragraphs){
           
      theEmail+=text.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()
  }
  console.log(theEmail);
  
  // the function will copy the text to the extension and 
  generateResBtn.addEventListener("click", GenerateNewResponse);    
} 
}
  //open the extension automaticly to show the response 
newEmailLoaded()

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, value, emaiId } = obj;
  console.log(obj);
  if(type==="NEW"){
      currentEmail = emaiId
      newEmailLoaded()
  }
})
})()