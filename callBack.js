function getUserData(callBack){
    setTimeout(function() {
        const user = {
            name :"Paramesh",
            age : 26
        };
        callBack(user);
    },2000);


}

getUserData(function(user){

    console.log(user.name);
    console.log(user.age);

});