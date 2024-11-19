import { dcE } from '../helpers/utilities.js';

export function WhatsappLink (){
    let $a = dcE('a');
    let $img = dcE('img');
    let urlDesktop = 'https://web.whatsapp.com/send?phone=5492235068482';
    let urlMobile = 'https://wa.me/5492235068482';

    $a.classList.add('WhatsApp_Link');

    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        $a.href = urlMobile;
    }else{
        $a.href = urlDesktop;
    }
    $a.target = '_blank';
    $a.rel = 'noopener noreferrer';

    $img.src = 'app/assets/WhatsApp_Button.svg';
    $img.alt = 'WhatsApp Link';
    $a.appendChild($img);

    return $a;
}