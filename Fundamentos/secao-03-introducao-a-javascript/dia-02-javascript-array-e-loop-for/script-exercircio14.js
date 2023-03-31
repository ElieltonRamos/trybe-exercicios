let word = 'Ana'
let wordContry = ''
for(let index = 0; index < word.length; index +=1){
wordContry += word[word.length - 1 - index];
}
console.log(wordContry)