function calcular(){
 peso=parseFloat(document.querySelector('#peso').value);
 estatura=parseFloat(document.querySelector('#estatura').value);
 imc= peso/(Math.pow(estatura,2));
document.querySelector('#imc').value=imc;

 if(imc<18.5)
    {
        document.querySelector('#imc').style.backgroundColor = '#99CCFF';
        document.querySelector('#criterio').value='Bajo de peso';
        document.querySelector('#criterio').style.backgroundColor = '#99CCFF';

    }
 else if(imc<24.9)
    {
        document.querySelector('#imc').style.backgroundColor = '#90EE90';
        document.querySelector('#criterio').value="Normal";
        document.querySelector('#criterio').style.backgroundColor = '#90EE90';


    }
else if(imc < 29.9)
    {
            document.querySelector('#imc').style.backgroundColor = '#FFFF99';
            document.querySelector('#criterio').value="Sobre peso";
            document.querySelector('#criterio').style.backgroundColor = '#FFFF99';
    
    }
else if(imc < 34.9)
    {
        document.querySelector('#imc').style.backgroundColor = '#FFC300';
        document.querySelector('#criterio').value="Obesidad I";
        document.querySelector('#criterio').style.backgroundColor = '#FFC300';

    }
else if(imc < 39.9)
    {
        document.querySelector('#imc').style.backgroundColor = '#FF8C00';
        document.querySelector('#criterio').value="Obesidad II";
        document.querySelector('#criterio').style.backgroundColor = '#FF8C00';

    }
    else
    {
            document.querySelector('#imc').style.backgroundColor = '#FF4500';
            document.querySelector('#criterio').value="Obesidad III";
            document.querySelector('#criterio').style.backgroundColor = '#FF4500';
    
    }




}