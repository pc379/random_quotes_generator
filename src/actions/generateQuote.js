export default function generateQuote(dispatch) {
    new Promise((resolve, reject)=>{
        fetch('quotes.json', {method:'GET'}).then(response => {
            resolve(response);
            return response.json();
        }).then(data => {
            let randNum = Math.floor(Math.random()*data.quotes.length);
            dispatch({type: 'NEW_QUOTE', payload: {
                quote:data.quotes[randNum].quote,
                author: data.quotes[randNum].author,
                work: data.quotes[randNum].work
            }});
        }).catch(function(err){
            reject(new Error(err));
            dispatch({type: 'NEW_QUOTE', payload: {quote:'ERROR RETRIEVING QUOTE', author:'', work:''}});
        })
    });

//PURE AJAX - NON REDUX/REDUXTHUNK IMPLEMENTATION
    // let xhr = new XMLHttpRequest();
    // let qodText, qodAuthor, qodWork;
   

    // xhr.open('GET','quotes.json');
    // xhr.onload = function() {
    //     if (this.status === 200){
    //       let response = JSON.parse(this.responseText);
    //       let randNum = Math.floor(Math.random()*response.quotes.length);
    //       qodText = response.quotes[randNum].quote;
    //       qodAuthor = response.quotes[randNum].author;
    //       qodWork = response.quotes[randNum].work;
    //       return {type: 'NEW_QUOTE', payload:{quote: qodText, author: qodAuthor, work: qodWork}};
                
    //     } else {
    //         console.log('ERROR RETRIEVING QUOTE');
    //         return {type: 'NEW_QUOTE', payload: {quote:'ERROR RETRIEVING QUOTE', author:'', work:''}};
    //     }   
    // }
    // xhr.send();
    
  }