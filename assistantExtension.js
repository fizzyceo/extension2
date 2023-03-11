

let textPlace = document.getElementsByTagName("p")[0]
console.log("this is the assistante");
document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getActiveTabURL();
    const currentEmail = tab.url.split("#inbox/")[1]

    if (activeTab.url.includes("#inbox/") && currentEmail) {
        chrome.storage.sync.get([currentEmail], (data) => {
          const currentEmailResponse = data[currentEmail] ? JSON.parse(data[currentEmail]) : [];
    
            console.log(currentEmailResponse);
        });
      } else {
        const container = document.getElementsByClassName("container-text")[0];
    
        container.innerHTML = '<div class="title">there is no response generated for this email</div>';
      }
})
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//         console.log("this is the assistante2");    
//             //  To do something
//             if(request.to ==='popup'){
//             console.log(request.gptResponse)
//             textPlace.textContent = request.gptResponse            
//             }
//     }
// );




