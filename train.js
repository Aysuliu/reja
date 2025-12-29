// //MIT Problem #A task
// function countLetter(a, b) {
//     let cnt = 0;
//     for (let i = 0; i < b.length; i++) {
//         if (a == b[i]) {
//             cnt++;
//         }
//     }
//     return cnt;
// }
// console.log(countLetter('e', 'engineer'));
// console.log(countLetter('a', 'abrakadabra'));

// //MIT Problem #B task

function countDigits(a) {
    let cnt = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= "0" && a[i] <= "9") {
            cnt++;
        }
    }
    return cnt;
}
console.log(countDigits("ad2a54y79wet0sfgb9"));
console.log(countDigits("fbdh8d4hfj9sn2m5md00smn81"));


//EVENT LOOP & CALLBACK
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba boling", // 0-20
//     "tog'ri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsyia qiling", // 50-60
//     "dam oling, foydasi yoq endi", // 70-80
// ];

// function maslahatBering(a, callback) {
//     if (typeof a != 'number') callback('insert number', null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a <= 30) callback(null, list[1]);
//     else if (a <= 40) callback(null, list[2]);
//     else if (a <= 50) callback(null, list[3]);
//     else if (a <= 60) callback(null, list[4]);
//     else {
//         setTimeOut(function() {
//             callback(null, list[5]);
//         }, 5000);
//         setInterval(() => {
//             resolve(list[5]);
//         }, 1000);


//     }
// }

// console.log("passed here 0");
// maslahatBering(25, (err, data) => {
//     if (err) console.log('ERROR:', err);
//     console.log('javob:', data);

// });
// console.log("passed here 1");


// Asynchronous functions, event loop orqali thread poolga tashlaydi
// async function maslahatBering(a) {
//     if (typeof a != 'number') throw new Error('insert number');
//     else if (a <= 20) return list[0];
//     else if (a <= 30) return list[1];
//     else if (a <= 40) return list[2];
//     else if (a <= 50) return list[3];
//     else if (a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => { // async promise function
//             setTimeOut(() => {
//                 resolve(list[5]);
//             }, 5000);
//             // setInterval(() => {
//             //     resolve(list[5]);
//             // }, 1000);

//         });
//     }
// }

//call via then..catch method
// console.log("passed here 0");
// maslahatBering(25).then(data => {
//     console.log('javobi:', data);
// }).catch(err => {
//     console.log("ERROR:", err);
// });
// console.log("passed here: 1");



//avoiding promise hell => async..await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(34);
//     console.log(javob);

//     javob = await maslahatBering(45);
//     console.log(javob);
// }
// run();