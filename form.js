class Form{

constructor(){

    this. input=createInput('Name')
    this.button=createButton("Play")
    this. greeting=createElement("h3")

}

hide(){

    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}



display(){
var title=createElement("h2")
title.html("MULTIPLAYER CAR RACING")
title.position(100,50)


this.input.position(150,100)

this.button.position(200,150)

this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    playerCount=playerCount+1
    player.index=playerCount
    player.update()
    player.updateCount(playerCount)
   this. greeting.html("Welcome to car racing game ,"+ player.name)
   this. greeting.position(150,150)
})

}



}