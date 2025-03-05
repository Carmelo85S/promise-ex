const totalGoals = () => {
    return new Promise((resolve, reject) => {
        let result = Math.floor(Math.random() * 10 + 1);
        
        if (result > 5) {
            resolve(`Yoo man, what a game! ${result} goals were scored.`);
        } else {
            reject(`Only ${result} goals. Not so exciting`);
        }
    });
};

totalGoals()
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.error("Boring...", error)
    });
