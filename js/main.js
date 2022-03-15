
const uno = document.querySelector("#uno")
const dos = document.querySelector("#dos")
const butt = document.querySelector("#dice")


function eventListeners(){
    butt.addEventListener("click", mostrarMensajes)
}
eventListeners()

//con async
async function mostrarMensajes(){
    try {
        let arr = []
        const url2 = await fetch('https://api.adviceslip.com/advice')
        const json = await url2.json()
        arr.push(json)
        arr.map(item=>{
            let arr2 = []
            console.log(item.slip)
            arr2.push(item.slip)
            arr2.map(item2=>{
                console.log(item2)
                document.querySelector("#uno").innerHTML = `Advice #${item2.id}`
                document.querySelector("#dos").innerHTML = `"${item2.advice}"`
            })
        })
        console.log(arr)
        
          
    } catch (error) {
        console.log(error)
    }
}




    

