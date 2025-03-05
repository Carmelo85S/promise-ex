let result = Math.floor(Math.random() * 10 + 1);

const totalGoals = (result) => {
    return new Promise((resolve, reject) => {
        
        if (result > 5) {
            resolve(`Yoo man, what a game! ${result} goals were scored.`);
        } else {
            reject(`Only ${result} goals. Not so exciting`);
        }
    });
};

totalGoals(result)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.error("Boring...", error)
    });


const fetchAdviceById = (result) => {
    //logic
    fetch(`https://api.adviceslip.com/advice/${result}`)
    .then((response)=> {
        if(!response.ok){
            throw new Error("Network response not ok")
        }
        return response.json();
    })
    .then(data => {
        const advice = data.slip.advice;
        console.log(`Advice (ID: ${result}): ${advice}`)
    })
    .catch((error) => {
        console.error("Error fetching advice", error)
    });
}

fetchAdviceById(result)

