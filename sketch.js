detectollision(stone,mango1);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);


mango1.display();
mango3.display();
mango4.display();
mango5.display();

function keyPressed(){
    if(keyCode===32){
    matter.body.setposition(stoneObj.body,{x:235,y:420})
    layncherObject.attach(stoneObj.body);
    }
}

function detectollision(lstone,lmango){

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

    var distance=dist(stoneBodyposition.X,stoneBodyposition.y,mangoBodyposition.x,mangoBodyposition.y)
if(distance<-lmango.r+lstone.r){
    matter.Body.setStatic(lmango.body,false);
}
}