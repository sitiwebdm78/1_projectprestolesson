/* MODELLO DOM, CODICE POROGETTO PRESTO.IT */        
    
    /* ASSEGNAZIONE VARIABILI E CATTURA DEGLI ELEMENTI DELLA PAGINA HTML */
        let navbardom = document.querySelector('#navbardom');
        let linksnav = document.querySelectorAll('.nav-link');//Il selectoerAll inserisce tutto in una nodeliste che un arraylike (cioè come un Array) al quale non posso cambiare stile. Per questo per farlo dovremo utilizzare il forEach.
        let changeLogo = document.querySelector('#changeLogo');
        let spadaLaser = document.querySelector('#spadaLaser');
        let nvbrCollapse = document.querySelector('#nvbrCollapse');

        let incrementPV = document.querySelector('#incrementPV');// Variabile Per la Catturra del numero incrementale all'interno del tag <span> nel paragrafo Prodotti Venduti.
    
        let incrementCS = document.querySelector('#incrementCS');// Variabile Per la Catturra del numero incrementale all'interno del tag <span> nel paragrafo Clienti Soddisfatti.

        let incrementCG = document.querySelector('#incrementCG');// Variabile Per la Catturra del numero incrementale all'interno del tag <span> nel paragrafo Consegne Giornaliere.
    
    /* ----- VARIABILI E COSTANTI DI VERIFICA ----- */

        let verifica = false;

    /* ----- CHIAMATE ASINCRONE ----- */

    function  incrementInterval(n, element, time){ //Ci sono almeno tre parametri da passare, che sono n, element, time.
        let counter = 0;
        let asyncroncall = setInterval(()=>{
            if(counter < n){// 1* Parametro) Il numero al quale vogliamo arrivare
                counter++
                element.innerHTML = counter;// 2° Parametro)L'elemento in cui deve apparire il numero che ci serve
            }else{
                console.log('Adesso mi fermo!');
                clearInterval(asyncroncall);

            };
        },time);//3° Parametro) L'intervallo di tempo delle iterazioni.
    };

    /*----- FUNZIONI SUL DOM. ----- */

        window.addEventListener('scroll', ()=>{
            let scrolled = window.scrollY;
                if(scrolled > 250){
                    navbardom.classList.remove('bg_blk');
                    navbardom.classList.add('bg_ylw');
                    nvbrCollapse.classList.remove('bg_blk');
                    nvbrCollapse.classList.add('bg_ylw');
                    navbardom.style.height = '80px';
                    linksnav.forEach((link) =>{
                        link.style.color = 'var(--blk)';
                    });
                    changeLogo.src= 'http://127.0.0.1:5500/materialemedia/Logo_Navicella_StarWars_nero.png';
                    spadaLaser.src = 'http://127.0.0.1:5500/materialemedia/spadalaser_starwars_blk.png';
                }else{
                    navbardom.classList.add('bg_blk');
                    navbardom.classList.remove('bg_blu');
                    nvbrCollapse.classList.add('bg_blk');
                    nvbrCollapse.classList.remove('bg_ylw');
                    nvbrCollapse.classList.add('bg_blk');
                    navbardom.style.height = '120px';
                    linksnav.forEach((link) =>{
                        link.style.color = 'var(--ylw)';
                });

                changeLogo.src = 'http://127.0.0.1:5500/materialemedia/Logo_Navicella_StarWars_Giallo.png';
                spadaLaser.src = 'http://127.0.0.1:5500/materialemedia/spadalaser_starwars_ylw.png';           
                 
                };

        });
        spadaLaser.addEventListener('click', ()=> {
            if(verifica == false){
                spadaLaser.style.transform = `rotate(-90deg)`;
                verifica = true;
            }else{
                spadaLaser.style.transform = `rotate(0deg)`;
                verifica = false;
            };           
        });


incrementInterval(100, incrementPV, 100);
incrementInterval(200, incrementCS, 1000);
incrementInterval(300, incrementCG, 2000);