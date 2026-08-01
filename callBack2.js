function getName(callBack){
    console.log("The name is Paramesh")
    callBack();
}

function getAge(){
    console.log("Age is 26")
}

function getNickname(){
    console.log("Nick name is Pradhee")
}

getName(getAge);
getName(getNickname);