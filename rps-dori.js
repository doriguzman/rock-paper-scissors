var btn= document.querySelectorAll('button')

function reqListener () {
    console.log(this.responseText);
    var result= JSON.parse(this.responseText)
    var insideTextBox= document.querySelector('#name').value
    var userPick= document.querySelector('#user')
    var compPick= document.querySelector('#computer')
    var endResult=document.querySelector('#result')
    userPick.innerHTML= "User Chooses: " + result.user
    compPick.innerHTML="Computer Chooses: " + result.ai 
    endResult.innerHTML= "Result: " + result.result 

    if(insideTextBox){
        var tWin= document.querySelector('#tWin');
        var tLose= document.querySelector('#tLose');
        var tTie= document.querySelector('#tTie');

        tWin.innerHTML= "Total Wins:  " + result.stats.win
        tLose.innerHTML= "Total Losses:  " + result.stats.lose
        tTie.innerHTML= "Total Ties:  " + result.stats.tie
    }

  }



Array.from(document.querySelectorAll('button')).map(function(element){
    element.addEventListener('click', function(event){
        console.log(element.id)
        var insideTextBox= document.querySelector('#name').value
        console.log(insideTextBox)
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);  
        oReq.open("GET", "http://codyhess.com:9001/" +  element.id + "/" + insideTextBox);
        oReq.send();
    })
})


  
