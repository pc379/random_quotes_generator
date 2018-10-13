import hexToRgb from './hexToRgb';

export default function generateColor() {
    const xhr = new XMLHttpRequest();
    const updateColor = this.updateColor;

    xhr.open('GET', 'http://www.colr.org/json/color/random');

    let color = [255,255,255]
    xhr.onload = function(){
        if(this.status === 200) {
            let response = JSON.parse(this.responseText);
            let rgb;
            if(!!response.colors[0].hex) {
                rgb = hexToRgb(response.colors[0].hex);
            } else {
                console.log('GENERATED EMPTY COLOR');
                rgb = {r: 55, g: 55, b:55};
            }
            
            console.log(rgb);
            color = [rgb.r, rgb.g, rgb.b];
        } else {
            console.log('ERROR GENERATING COLOR');
        }

        if (color.reduce((total,item) => total+item) > 580) {
            color = color.map((x)=> x-70); 
        }
        updateColor({color: 'rgb('+color.join(',')+')'});
    }
    xhr.send();
}