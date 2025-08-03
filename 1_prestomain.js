/* MODELLO DOM, CODICE POROGETTO PRESTO.IT */        
    
    /* ASSEGNAZIONE VARIABILI E CATTURA DEGLI ELEMENTI DELLA PAGINA HTML */
        let navbardom = document.querySelector('#navbardom');
        let linksnav = document.querySelectorAll('.nav-link');//Il selectoerAll inserisce tutto in una nodeliste che un arraylike (cioè come un Array) al quale non posso cambiare stile. Per questo per farlo dovremo utilizzare il forEach.
        let changeLogo = document.querySelector('#changeLogo');
            console.dir(changeLogo);


    /* VARIABILI E COSTANTI DI VERIFICA */
        

    /* FUNZIONI SUL DOM. */
        window.addEventListener('scroll', ()=>{
            let scrolled = window.scrollY;
                if(scrolled > 500){
                    navbardom.classList.remove('bg_blk');
                    navbardom.classList.add('bg_ylw');
                    navbardom.style.height = '70px';
                    linksnav.forEach((link) =>{
                        link.style.color = 'var(--blk)';
                    });
                    changeLogo.src = 'http://127.0.0.1:5500/prestoprojectcodelesson/materialemedia/Logo_Navicella_StarWars_nero.png';
                }else{
                    navbardom.classList.add('bg_blk');
                    navbardom.classList.remove('bg_ylw');
                    navbardom.style.height = '140px';
                    linksnav.forEach((link) =>{
                        link.style.color = 'var(--ylw)';
                });
                changeLogo.src = 'http://127.0.0.1:5500/prestoprojectcodelesson/materialemedia/Logo_Navicella_StarWars_Giallo.png';
                };

        });
        // console.log(window);
        console.log(window.scrollY);

