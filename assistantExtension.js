

let textPlace = document.getElementsByTagName("p")[0]
console.log("this is the assistante");
//this is not working
chrome.runtime.onMessage.addListener(
    
    function(request, sender, sendResponse) {
        console.log(request);
            //  To do something
            if(request.to ==='popup'){
            console.log(request.gptResponse)
            textPlace.textContent = request.gptResponse            
            }
    }
);




