   
    let image = document.getElementById('head');
    let img = image.getAttribute('src');
// ma fonction-------------  


// console.log(img);
    
    function carrousel(img){
        
        switch('src'){
            case 'img/simpson1.jpeg':
                img.setAttribute('src','img/simpson5.jpeg');
            break;
            case 'img/simpson5.jpeg':
                img.setAttribute('src','img/zapette.jpeg');
            break;
            case 'img/zapette.jpeg':
                img.setAttribute('src','img/simpson2.jpeg');
            break;
            case 'img/simpson2.jpeg':
                img.setAttribute('src','img/simpson1.jpeg');
            break;
        }
        
       
        // console.log(img); 
    }
    
    
//   console.log(carrousel);