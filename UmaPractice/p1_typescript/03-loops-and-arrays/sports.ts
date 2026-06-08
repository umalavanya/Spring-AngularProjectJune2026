let sportsOne: string[] = ["Golf","Cricket","Tennis","Swimming"] ;

for (let i = 0 ; i < sportsOne.length; i++){
    console.log(sportsOne[i]) ;
}


// Lets use the simplified for loop

for(let tempSport of sportsOne) {
    console.log(tempSport) ;
}