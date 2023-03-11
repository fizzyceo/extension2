chrome.tabs.onUpdated.addListener((tabId, tab) => {

    //the title or the subject

    let  theTitle = ''
    console.log(tab);
    if(tab.title){
        theTitle = tab.title.split("-")[0]
       console.log(theTitle);
       chrome.runtime.sendMessage({title:theTitle})
   console.log("title sent");
   
    };

   
    if(tab.url && tab.url.includes("#inbox/") && tabId  ){
        
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


