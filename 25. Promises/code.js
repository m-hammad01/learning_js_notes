let p = new Promise((resolve, reject)=>{
    let a = 1+11
    if(a==2)
    {
        resolve('Sucess')
    }
    else{
        reject('failed')
    }
    })
    
    p.then((message) => {
        console.log("This is the then "+ message)
    }).catch((message)=> {
    console.log("this is the catch "+ message)
    })
    