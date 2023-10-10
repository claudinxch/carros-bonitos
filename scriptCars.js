document.getElementById('ano').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        verificar();
        e.preventDefault(); 
    }
});

function verificar() {
    var ano = document.getElementById('ano').value
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'fotoCarro')
    switch(ano) {
        case '1990' :
            document.querySelector('div#res').innerHTML = 'Honda NSX'
            img.setAttribute('src', 'nsx1990.jpg')
            break;
         case '1991' :
            document.querySelector('div#res').innerHTML = 'Nissan 300ZX'
            img.setAttribute('src', 'nissan300zx.webp')
            break;
        case '1992' :
            document.querySelector('div#res').innerHTML = 'Mazda Rx7 FD'
            img.setAttribute('src', 'rx7fd.jpg')
            break;
        case '1993' :
                document.querySelector('div#res').innerHTML = 'Porsche 911'
                img.setAttribute('src', 'porsche911993.jpg')
                break;
        case '1994' :
            document.querySelector('div#res').innerHTML = 'Lamborghini Diablo VT'
            img.setAttribute('src', 'diablo.jpg')
            break;
        case '1995' :
            document.querySelector('div#res').innerHTML = 'BMW E36'
            img.setAttribute('src', 'bmwm31995.webp')
            break;
        case '1996' :
            document.querySelector('div#res').innerHTML = 'Dodge Viper GTS'
            img.setAttribute('src', 'vipergts1996.webp')
            break;
        case '1997' :
            document.querySelector('div#res').innerHTML = 'Toyota Supra MK4'
            img.setAttribute('src', 'supra.jpg')
            break;
        case '1998' :
            document.querySelector('div#res').innerHTML = 'Mercedes-Benz SL 500'
            img.setAttribute('src', 'meca500.jpg')
            break;
        case '1999' :
            document.querySelector('div#res').innerHTML = 'Nissan Skyline GT-R R34'
            img.setAttribute('src', 'gtr r34.jpg')
            break;
        case '2000' :
            document.querySelector('div#res').innerHTML = 'BMW Z8'
            img.setAttribute('src', 'bmwz8.jpg')
            break;
    }    
    res.appendChild(img)
}
