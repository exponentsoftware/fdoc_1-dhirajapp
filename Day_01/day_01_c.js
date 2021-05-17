/*
.c. After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter.

```js
const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWords(sentence));
31

*/


const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?` ;

function countWords(sentence) {
    var res = [];
    var res1=sentence.split(' ');
    for(let i=0;i<res1.length;i++) {
        if(res1[i].length > 1) {
            res.push(res1[i]);
        }
    }
    return res.length;
 };
 console.log(countWords(sentence));