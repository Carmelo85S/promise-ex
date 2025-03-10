let goalsScored = Math.floor(Math.random() * 10 + 1);

const totalGoals = (goalsScored) => {
    return new Promise((resolve, reject) => {
        
        if (goalsScored > 5) {
            resolve(`Yoo man, what a game! ${goalsScored} goals were scored.`);
        } else {
            reject(`Only ${goalsScored} goals. Not so exciting`);
        }
    });
};



//With promises

// totalGoals(goalsScored)
//     .then((message) => {
//         console.log(message)
//     })
//     .catch((error) => {
//         console.error("Boring...", error)
//     });


// const fetchAdviceById = (goalsScored) => {
//     //logic
//     fetch(`https://api.adviceslip.com/advice/${result}`)
//     .then((response)=> {
//         if(!response.ok){
//             throw new Error("Network response not ok")
//         }
//         return response.json();
//     })
//     .then(data => {
//         const advice = data.slip.advice;
//         console.log(`Advice (ID: ${goalsScored}): ${advice}`)
//     })
//     .catch((error) => {
//         console.error("Error fetching advice", error)
//     });
// }

// fetchAdviceById(goalsScored)


//with Async await
const tot = async() => {
    try {
        const value = await totalGoals(goalsScored);
        console.log(value)

    } catch (error) {
        console.error("Boring...", error)
    }
}
tot(goalsScored)

const fetchAdviceById = async() => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${goalsScored}`)
        if(!response.ok){
            throw new Error("Network response not ok")
        }
        const data = await response.json();
        console.log(data)
        const advice = data.slip.advice;
        console.log(`Advice (ID: ${goalsScored}): ${advice}`)
    } catch (error) {
        console.log(error);
    }
}

fetchAdviceById(goalsScored)