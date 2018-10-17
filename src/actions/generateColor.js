import hexToRgb from './hexToRgb';

export default function generateColor(dispatch) {
   
    new Promise ((resolve, reject)=>{
        fetch('http://www.colr.org/json/color/random', {method:'GET'}).then(response => {
            resolve(response);    
            return response.json();
        }).then(data => {
            let rgb = hexToRgb(data.colors[0].hex);
            let color = [rgb.r, rgb.g, rgb.b];
            (color.reduce((total,item) => total+item) > 580) && (color = color.map((x)=> x-70));
            let payload = 'rgb('+color.join(',')+')';
            console.log(payload);
            dispatch({type: 'NEW_COLOR', payload: 'rgb('+color.join(',')+')'});
            
        }).catch(function(err){
            console.log(err);
            console.log('ERROR GENERATING COLOR');
            dispatch({type: 'NEW_COLOR', payload: 'rgb(255,0,0)'});
            reject(new Error('error'));
        })
    })
    //PURE AJAX NON REDUX THUNK
    // return (dispatch) => {
    //     const xhr = new XMLHttpRequest();
    

    //     xhr.open('GET', 'http://www.colr.org/json/color/random');

    //     let color = [200,200,100]
    //     xhr.onload = function(){
    //         if(this.status === 200) {
    //             let response = JSON.parse(this.responseText);
    //             let rgb;
    //             if(!!response.colors[0].hex) {
    //                 rgb = hexToRgb(response.colors[0].hex);
    //             } else {
    //                 console.log('GENERATED EMPTY COLOR');
    //                 rgb = {r: 55, g: 55, b:55};
    //             }
                
    //             console.log(rgb);
    //             color = [rgb.r, rgb.g, rgb.b];
    //         } else {
    //             console.log('ERROR GENERATING COLOR');
    //         }

    //         if (color.reduce((total,item) => total+item) > 580) {
    //             color = color.map((x)=> x-70); 
    //         }
    //         // let payload = 'rgb('+color.join(',')+')';
    //         return {type: 'UPDATE_COLOR', payload: 'rgb('+color.join(',')+')'};
    //     }
    //     xhr.send();
    // }


    };
    