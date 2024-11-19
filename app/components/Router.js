import {$,$$} from '/app/helpers/utilities.js';
import {Card} from '/app/components/Card.js';

export function Router(){
    let {hash} = window.location;
    let category = hash.slice(2).toUpperCase();
    let categoryDefault = 'ESCAPADAS';

    if(!hash || hash === "#/"){

        $$('.nav_links li a')[0].classList.add('clickeado');
        $('.root').appendChild(Card(categoryDefault));

    }else if(hash === "#/escapadas"){

        $$('.nav_links li a')[0].classList.add('clickeado');
        $('.root').appendChild(Card(category));

    }else if(hash === '#/argentina'){

        $$('.nav_links li a')[1].classList.add('clickeado');
        $('.root').appendChild(Card(category));

    }else if(hash === '#/elmundo'){

        $$('.nav_links li a')[2].classList.add('clickeado');
        $('.root').appendChild(Card(category));

    }else if(hash === '#/tuviaje'){

        $$('.nav_links li a')[3].classList.add('clickeado');
        $('.root').appendChild(Card(category));

    }else if(hash === '#/ofertas'){

        $$('.nav_links li a')[4].classList.add('clickeado');
        $('.root').appendChild(Card(category));

    }else if(hash === '#/nosotros'){

        $$('.nav_links li a')[5].classList.add('clickeado');
        $('.root').appendChild(Card(category));

    }else if(hash === '#/conocenos'){
        
        $$('.nav_links li a')[6].classList.add('clickeado');
        $('.root').appendChild(Card(category));
    }
}