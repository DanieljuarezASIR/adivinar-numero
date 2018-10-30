  // generamos un numero aleatorio entre 1 y 100
        var numeroAdivinar=Math.floor((Math.random()*100)+1);
        var contadorRespuestas=0;
 
        function adivinar()
        {    /* Funcion de adivinar */
            
            
        var value = document.getElementById("text");
        var intentos = value.options[value.selectedIndex].value;
        intentos = parseInt(intentos);    
        
         /* Obtencion de la variable numero para poder mostrar los mensajes y obtener el valor del usuario*/
        var input = document.getElementById("numero").value;     
        
        console.log("aleatorio: " + numeroAdivinar);
        console.log("entrada: " + input);
            
            
        if(contadorRespuestas == intentos){
 
      document.getElementById("respuestas").innerHTML = "Agotaste el numero de intentos";
  /* Cuando el numero de intentos se agota se mostrara este mensaje*/
     
 }else if(contadorRespuestas <= intentos){
     
      
      if(input < numeroAdivinar){
           
      
      document.getElementById("respuestas").innerHTML = "El número introducido es muy pequeño ";
          /* Si el numero introducido es mas pequeño  se mostrara este mensaje como pista*/
      }else if(input > numeroAdivinar){
          
        
      document.getElementById("respuestas").innerHTML = "El número introducido es muy grande ";   
          /* Si el numero introducido es grande saltara este mensaje como pista*/
      }else if(numeroAdivinar == input){
          
      
      
      document.getElementById("respuestas").innerHTML = "¡HAS ACERTADO!";
         
            /*Mensaje si el usuario acierta*/
      }  
    
      contadorRespuestas++;
       
        
    }    
            
            
        
            
        }
 
        /*Al finalizar bloqueamos el juego*/
        function fin()
        {
            // deshabilitamos el casilla de entrar el numero, y el
            // boton de enviar
            document.getElementById("numero").disabled=true;
            document.getElementById("btnEnviar").disabled=true;
        }
 
        /*  validar  numero*/
        function isNumber(n)
        {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }