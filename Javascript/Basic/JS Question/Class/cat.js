let cat = {
            name : "Fluffyy",
            activities : ["play", "eat cat food"],
            catFriends:[
                {
                    name : "bar",
                    activities : ["be grumpy", "eat bread omblet"],
                    weight : 8,

                },
                {
                    name : "foo",
                    activities : ["sleep", "pre-sleep naps"],
                    weight : 3,

                }

            ]
        }



let totalWeight=0;
cat.catFriends.forEach((item)=>{
    totalWeight+=item.weight;
    item.activities.forEach((data)=>{
        console.log(data);
    });
});
console.log(totalWeight);