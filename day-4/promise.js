
const display =(response)=>{console.log(response)}


const myProposal = new Promise((accept,reject)=>{

    const love = true;
    
    if(love){

        setTimeout(()=>{accept("I love You")},3000)
        
    }
    else{

        setTimeout(()=>{ reject("I have you")},0000)
       
    }
})

myProposal
    .then(
           (scucess)=>{display(scucess)},
           (failed)=>{display(failed)}
         )
    