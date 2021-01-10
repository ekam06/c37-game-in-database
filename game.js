class Game {


constructor(){

}

getState(){
var gm=database.ref("gameState")
gm.on("value",function(data){gameState=data.val()})

}
update(state){
database.ref("/").update({gameState:state})
}
 async start(){
if(gameState===0){
    player=new Player()
    var playercountref=await database.ref("playerCount").once("value")
    if(playercountref.exists()){
        playerCount=playercountref.val()
        player.getCount()
    }
    
    form=new Form ()
    form.display()
}
}

play(){
form.hide()
textSize(40)
text ("Game begins !!",200,120)
Player.getPlayerInfo()
if(allPlayers!==undefined){
    var displayPosition=150
    for (var plr in allPlayers){
        if (plr==="player"+player.index)
            fill ("red")
            
        
        else 
            fill ("black")
        
    
    displayPosition=displayPosition+30
    textSize (25)
    text (allPlayers[plr].name + ":" + allPlayers[plr].distance,250,displayPosition)
}
}
if(keyIsDown(UP_ARROW)&& player.index!==null){

    player.distance=player.distance+100
    player.update()
}
}

}



