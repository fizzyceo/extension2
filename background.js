chrome.tabs.onUpdated.addListener((tabId, tab) => {


    console.log(tab.url);
    if(tab.url && tab.url.includes("#inbox/") && tabId ){
        console.log("testing");    

    const queryParams = tab.url.split("#inbox/")[1]
    console.log(queryParams);
    console.log(tabId);
   
        chrome.tabs.sendMessage(tabId,
            {
                type:"NEW",
                emaiId:queryParams
            }
        )
        
}

})
var gptResponse = ''
chrome.runtime.onMessage.addListener((obj,sender,sendResponse)=>{
    const {response} = obj
    gptResponse = response
    console.log(response);
   
    
})

if(gptResponse.length>0){
    chrome.runtime.sendMessage({
        to:"popup",
       gptResponse:gptResponse
    });
    

}