export default function generateQuote() {
    let xhr = new XMLHttpRequest();
    let qodText, qodAuthor, qodWork;
    let updateQuote = this.updateQuote;

    xhr.open('GET','quotes.json');
    xhr.onload = function() {
        if (this.status === 200){
          let response = JSON.parse(this.responseText);
          let randNum = Math.floor(Math.random()*response.quotes.length);
          qodText = response.quotes[randNum].quote;
          qodAuthor = response.quotes[randNum].author;
          qodWork = response.quotes[randNum].work;
          updateQuote({quote: qodText, author: qodAuthor, work: qodWork});
                
        } else {
            console.log('ERROR RETRIEVING QUOTE');
            updateQuote({quote:'ERROR RETRIEVING QUOTE', author:'', work:''});
        }   
    }
    xhr.send();
  }