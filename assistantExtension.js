

    let textPlace = document.getElementsByTagName("p")[0]
    let response;
    console.log("this is the assistante");
    //this is not working
    const fetchingResults  = async (email,title)=>{
    response = await fetch("https://kyo-mail.onrender.com/mail",{
    method:'POST',    
    body:JSON.stringify({
        email:email,
        subject:title
    })
    })
    console.log(response);
    }
    chrome.runtime.onMessage.addListener(
        //the popup needs to be open for the script to run correctly 
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

document.querySelector(".copy-btn").addEventListener("click", copyToClipBoad);


async function copyToClipBoad(){
// Select the text field
// textPlace.select();
// textPlace.setSelectionRange(0, 99999); // For mobile devices

 // Copy the text inside the text field
 await navigator.clipboard.writeText(textPlace.textContent);
 


// Alert the copied text
alert("Copied!");

}