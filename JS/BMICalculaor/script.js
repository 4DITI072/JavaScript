const form=document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if(height==='' || weight==='' || height<0 || weight<0 || isNaN(height) || isNaN(weight)){
        results.innerHTML=`please give a valid height ${height} and weight ${weight}`;
    }
    else{
        const res= (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML =`<span> ${res}</span>`;
    }
});