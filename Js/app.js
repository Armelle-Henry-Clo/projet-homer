    let image = document.getElementById('head');
    let img = image.getAttribute('src');

// ma fonction-------------  
        switch('src'){
            case 'img/simpson2.jpeg':
                img.setAttribute('src','img/simpson5.jpeg');
            break;
            case 'img/simpson5.jpeg':
                console.log(img);
                img.setAttribute('src','img/zapette.jpeg');
            break;
            case 'img/zapette.jpeg':
                img.setAttribute('src','img/simpson1.jpeg');
            break;
            case 'img/simpson1.jpeg':  
                img.setAttribute('src','img/simpson2.jpeg');
            break;   
        };