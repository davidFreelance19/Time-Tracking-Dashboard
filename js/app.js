const divInfo =  document.querySelector('.perfil__routine');
const hrs = document.querySelectorAll('.work-horas');
const last =  document.querySelectorAll('.card__info p');

divInfo.addEventListener('click', e => {
    let parametro;
    if(e.target && e.target.tagName === 'A'){
        switch( e.target.textContent ){
            case 'Daily':
                parametro = 'Daily';
                break
            case 'Weekly': 
                parametro = 'Weekly';
                break
            case 'Monthly':
                parametro = 'Monthly';
                break
        };
    }
    fetch('../data.json')
        .then( respuesta =>{
            return respuesta.json();
        })
        .then( resultado =>{
            mapeo(resultado, parametro)
        })
});

function mapeo(resultado, parametro){
    if(parametro === 'Daily'){
        let array = resultado.map((datos) =>{
        return datos.timeframes.daily 
      });
      generarHTML(array, parametro)

   }else if(parametro === 'Weekly'){
    let array = resultado.map((datos) =>{
        return datos.timeframes.weekly
      });
      generarHTML(array, parametro)
      
   }else{
    let array = resultado.map((datos) =>{
        return datos.timeframes.monthly
      });
      generarHTML(array, parametro)
   }
}

function generarHTML(array,parametro){
    for(let i = 0; i< 6; i++){
         hrs[i].textContent = `${array[i].current}hrs`;
         last[i].textContent = `Last ${parametro}- ${array[i].previous}hrs`;
    }
} 