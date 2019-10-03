var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var request = new XMLHttpRequest();
    request.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    request.onload = function(){
        if(request.status  >=200 && request.status < 400){
            console.log(request.status);
            console.log(typeof request.responseText)
            var data = JSON.parse(request.responseText);
            renderHTML(data);
        }else{
            console.log("error _");
        }
    };
    request.onerror = function(){
    
    }
    request.send();
    pageCounter++;
    if(pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

function renderHTML(data){
    var htmlString = "";
    for(i = 0;i<data.length;i++){
        htmlString += "<p>"+data[i].name + " is a "+data[i].species+" that likes to eat ";
        for(ii = 0;ii<data[i].foods.likes.length;ii++){
            if(ii == 0){
                htmlString += data[i].foods.likes[ii];
            }else{
                htmlString += " and "+data[i].foods.likes[ii];
            }
            
        }

        htmlString+=".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}