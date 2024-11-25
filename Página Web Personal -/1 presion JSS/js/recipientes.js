function calcularepFcn() {
    presion = parseFloat(document.querySelector("#presion").value);
    diametro = parseFloat(document.querySelector("#diametro").value);
    longitud = parseFloat(document.querySelector("#Longitud").value);
       /* Materiales */
    material = document.querySelector('#Material').value;
    material = parseFloat(material);
    UTS = 0;
    Ys  = 0;
    rhoMaterial = 0;     
    switch(material) {
        case 1:
            UTS = 415;
            Ys  = 230;
            rhoMaterial = 7800;
        break;
        case 2:
            UTS = 450;
            Ys  = 275; 
            rhoMaterial = 7800; 
        break;
        case 3:
            UTS = 485;
            Ys  = 275; 
            rhoMaterial = 7800;  
        break;
        case 4:
            UTS = 415;
            Ys  = 220;
            rhoMaterial = 7860; 
        break;
        case 5:
            UTS = 485;
            Ys  = 260;
            rhoMaterial = 7850;   
        break;
    }

    /* Eficiencia de la junta */
    eficiencia = document.querySelector("#Eficiencia").value;
    eficiencia = parseFloat(eficiencia);
    eta = 0;
    switch(eficiencia) {
        case 1:
            eta = 1;
        break;
        case 2:
            eta = 0.85;
        break;
        case 3:
            eta = 0.75;
        break;
    }

    /* Nivel */
    nivel = document.querySelector("#Nivel").value;
    nivel = parseFloat(nivel);
    rho = document.querySelector("#Densidad").value;
    rho = parseFloat(rho);

    /* Calculos */

    S = Math.min(UTS/3.5,Ys*2/3);

    /* Calculo de las tapas */
    ttapas = (presion*diametro)/(2*S*eta - 0.2*presion);
    ttapas = ttapas/0.0254;
    document.querySelector("#espesortapas").value = ttapas.toFixed(4); 

    /* Calculo del cuerpo */

    tcuerpo = (presion*(diametro/2))/(S*eta - 0.6*presion);
    tcuerpo = tcuerpo /0.0254;
    
    document.querySelector("#espesorcuerpo").value = tcuerpo.toFixed(4);

    /* Volumne de las tapas */
    valoretc = document.querySelector('#espesorrealtapa').value;
    valoretc = parseFloat(valoretc);

    switch(valoretc) {
        case 1:
            espesortapareal = 1/8;
        break;
        case 2:
            espesortapareal = 1/4;
        break;
        case 3:
            espesortapareal = 1/3;
        break;
        case 4:
            espesortapareal = 3/8;
        break;
        case 5:
            espesortapareal = 1/2;
        break;
        case 6:
            espesortapareal = 5/8;
        break;
        case 7:
            espesortapareal = 3/4;
        break;
        case 8:
            espesortapareal = 7/8;
        break;
        case 9:
            espesortapareal = 1;
        break;
        case 10:
            espesortapareal = 1 + 1/4;
        break;
        case 11:
            espesortapareal = 1 + 3/8;
        break;
        case 12:
            espesortapareal = 1 + 1/2;
        break;
        case 13:
            espesortapareal = 1 + 5/8;
        break;
        case 14:
            espesortapareal = 1 + 3/4;
        break;
        case 15:
            espesortapareal = 2;
        break;
    }

    Vtapas = Math.PI/12*(Math.pow(diametro + 2*espesortapareal,3) - Math.pow(diametro,3));

        /* Volumne de las tapas */
        valoretb = document.querySelector('#espesorrealcuerpo').value;
        valoretb = parseFloat(valoretb);
    
        switch(valoretb) {
            case 1:
                espesorcuerporeal = 1/8;
            break;
            case 2:
                espesorcuerporeal = 1/4;
            break;
            case 3:
                espesorcuerporeal = 1/3;
            break;
            case 4:
                espesorcuerporeal = 3/8;
            break;
            case 5:
                espesorcuerporeal = 1/2;
            break;
            case 6:
                espesorcuerporeal = 5/8;
            break;
            case 7:
                espesorcuerporeal = 3/4;
            break;
            case 8:
                espesorcuerporeal = 7/8;
            break;
            case 9:
                espesorcuerporeal = 1;
            break;
            case 10:
                espesorcuerporeal = 1 + 1/4;
            break;
            case 11:
                espesorcuerporeal = 1 + 3/8;
            break;
            case 12:
                espesorcuerporeal = 1 + 1/2;
            break;
            case 13:
                espesorcuerporeal = 1 + 5/8;
            break;
            case 14:
                espesorcuerporeal = 1 + 3/4;
            break;
            case 15:
                espesorcuerporeal = 2;
            break;
        }
    
        Vcuerpo = Math.PI*longitud/12*(Math.pow(diametro + 2*espesorcuerporeal,2) - Math.pow(diametro,2));

        pesoequipo = (Vtapas + Vcuerpo)*rhoMaterial;
        document.querySelector('#pesoequipo').value = pesoequipo.toFixed(0);
        
        //Calculo del volumen y peso del liquído
        radio = diametro/2;
        theta = Math.acos((radio-nivel)/radio);
        Vliquido = Math.pow(radio,2) * longitud * (theta - (Math.sin(theta) * Math.cos(theta)));
        pesoliquido = Vliquido * rho;

        //Peso total
        Ptotal = pesoliquido + pesoequipo;
        document.querySelector('#pesoequipolleno').value = Ptotal.toFixed(0);

        if(espesortapareal < ttapas) {
            document.querySelector('#espesortapas').style.backgroundColor = 'rgb(255,199,206)';
            document.querySelector('#espesortapas').style.color = 'rgb(156,0,6)'; 
            /* window.alert('El espesor real debe de ser mayo que el espesor calculado'); */
        } else {
            document.querySelector('#espesortapas').style.backgroundColor = 'rgb(198,239,206)';
            document.querySelector('#espesortapas').style.color = 'rgb(0,97,0)';      
        }

        if(espesorcuerporeal < tcuerpo) {
            document.querySelector('#espesorcuerpo').style.backgroundColor = 'rgb(255,199,206)';
            document.querySelector('#espesorcuerpo').style.color = 'rgb(156,0,6)';
           /*  window.alert('El espesor real debe de ser mayo que el espesor calculado');  */
        } else {
            document.querySelector('#espesorcuerpo').style.backgroundColor = 'rgb(198,239,206)';
            document.querySelector('#espesorcuerpo').style.color = 'rgb(0,97,0)';      
        }
        
        

 
}