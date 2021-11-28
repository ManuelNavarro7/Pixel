const products = [
    {
        id: '1',
        name: 'KiajuKing',
        numberOfColeccion: 1,
        price: 0.25,
        img: '/imgs/dino1.png'
    },
    {
        id: '2',
        name: 'KiajuKing',
        numberOfColeccion: 2,
        price: 0.10,
        img: '/imgs/dino2.png'
    },
    {
        id: '3',
        name: 'Shivoshy',
        numberOfColeccion: 1,
        price: 0.07,
        img: '/imgs/shiboshi.png'
    },
    {
        id: '4',
        name: 'Shivoshy',
        numberOfColeccion: 2,
        price: 0.30,
        img: '/imgs/shiboshi1.png'
    }, {
        id: '5',
        name: 'CryptooPunk',
        numberOfColeccion: 1,
        price: 0.10,
        img: '/imgs/cryptoPunk.png'
    },
    {
        id: '6',
        name: 'CryptooPunk',
        numberOfColeccion: 2,
        price: 0.07,
        img: '/imgs/cryptoPunk1.png'
    },
    {
        id: '7',
        name: 'CryptooPunk',
        numberOfColeccion: 3,
        price: 0.30,
        img: '/imgs/c.png'
    }

]

let cart1 = [];
let numCompras = [];

let acumulador = [];

let compraFinalizada = [];

let url = "https://api.coinstats.app/public/v1/markets?coinId=ethereum"

for (const productA of products) {


    $(".proDucts").append(`

            
        
            <div class="card article1 col-xxl-2 col-md-5 col-sm-6 d-flex flex-column justify-content-center align-content-center align-items-center mt-5 mx-3 mb-3" style="width: 18rem;">
            <img src=${productA.img} class="card-img-top" alt="...">
            <div class="card-body ">
            <section class=" d-flex flex-column justify-content-center align-content-center align-items-center ">
                <h5 class="">${productA.name}</h5>
                <h5 class="d-flex flex-wrap desCripcion">Numero de la coleccion:${productA.numberOfColeccion}</h5>
                <section class="d-flex flex-row justify-content-evenly mt-2">
                <img src="./imgs/eth.png" width="45px" height="30px" >
                <p class="card-text mx-3 ">${productA.price}</p>
                </section>
            </section>
            <section class=" d-flex flex-column justify-content-center align-content-center align-items-center " >
                <button type="button" class="btn btn-primary btn-comprar" id="BTnc" value="${productA.id}">Comprar</button>
            </section>
            </div>
            </div>
        
        
            `);

}



$('.btn-comprar').click(function () {
    
    let tt = this.value
    const item = products.filter(item => item.id === tt);
   

    item.map(function (pbusCado) {
        
        cart1.push(pbusCado)
    })

    localStorage.setItem("tiendaback", JSON.stringify(cart1));

    

    let numCompras1 = cart1.length

    


    numCompras.push(numCompras1)

    if (numCompras != null) {

        const getLastArrItem = (arr) => {
            let lastItem = arr[arr.length - 1];
            
            $(".carritox").prepend(`

            <li class="atTr mb-1 ms-3">${lastItem}</li>`)
        }

        $('.atTr').hide()
        $('.atTr1').hide()



        getLastArrItem(numCompras);
       
    }
})



$("#myInputElement").change(function () {
    
    var newvalue = this.value.toLowerCase()

    
    const item = products.filter(item => item.name.toLowerCase() === newvalue);

   

    for (const productB of item) {


        $(".searCh").append(`

           

            <li class="article2  dropdown-item col-xxl-2 col-md-5 col-sm-6 d-flex flex-column justify-content-center align-content-center">
            <div class="card article1 col-xxl-2 col-md-5 col-sm-6 d-flex flex-column justify-content-center align-content-center align-items-center mt-5 mx-3" style="width: 12rem;">
            <img src=${productB.img} class="card-img-top" alt="...">
            <div class="card-body ">
            <section class=" d-flex flex-column justify-content-center align-content-center align-items-center ">
                <h5 class="">${productB.name}</h5>
                <h5 class="flex-wrap desCripcion">Num coleccion:${productB.numberOfColeccion}</h5>
                <section class="d-flex flex-row justify-content-evenly mt-2">
                <img src="./imgs/eth.png" width="45px" height="30px" >
                <p class="card-text mx-3 ">${productB.price}</p>
                </section>
            </section>
            <section class=" d-flex flex-column justify-content-center align-content-center align-items-center " >
                <button type="button" class="btn btn-success btn-buscar mt-4" id="BTnc" value="${productB.id}">Comprar</button>
            </section>
            </div>
            </div>

             </li>
        `);


    }

    $('.btn-buscar').click(function () {
        
        let tt7 = this.value
        const item7 = products.filter(item7 => item7.id === tt7);
        

        item7.map(function (pbusCado7) {
            
            cart1.push(pbusCado7)
        })

        

        localStorage.setItem("tiendaback", JSON.stringify(cart1));

        

        let numCompras1 = cart1.length

        


        numCompras.push(numCompras1)

        if (numCompras != null) {

            const getLastArrItem = (arr) => {
                let lastItem = arr[arr.length - 1];
                
                $(".carritox").prepend(`

            <h2 class="atTr mb-1 ms-3">${lastItem}</h2>`)
            }

            $('.atTr').hide()
            $('.atTr1').hide()



            getLastArrItem(numCompras);
           
        }
    })



})

$(document).ready(function () {
    $("form").keypress(function (e) {
        if (e.which == 13) {
            return false;
        }
    });
});

$(".carritox").click(() => {

    

    const cartLocal = localStorage.getItem("tiendaback");

    const tiendaLocalobjeto = JSON.parse(cartLocal);



    if (tiendaLocalobjeto != null) {

        $('.article2').remove()


        for (let prod of tiendaLocalobjeto) {
           

            $(".dropdown-menu").append(`

            <li class="article2  dropdown-item col-xxl-2 col-md-5 col-sm-6 d-flex flex-column justify-content-center align-content-center">
            <div class="card article1 col-xxl-2 col-md-5 col-sm-6 d-flex flex-column justify-content-center align-content-center align-items-center mt-5 mx-3" style="width: 12rem;">
            <img src=${prod.img} class="card-img-top" alt="...">
            <div class="card-body ">
            <section class=" d-flex flex-column justify-content-center align-content-center align-items-center ">
                <h5 class="">${prod.name}</h5>
                <h5 class="flex-wrap desCripcion">Num coleccion:${prod.numberOfColeccion}</h5>
                <section class="d-flex flex-row justify-content-evenly mt-2">
               <img src="./imgs/eth.png" width="45px" height="30px" >
                <p class="card-text mx-3 ">${prod.price}</p>
                </section>
            </section>
            <section class=" d-flex flex-column justify-content-center align-content-center align-items-center " >
                <button type="button" class="btn btn-danger btn-delete" id="B" value="${prod.id}">Borrar</button>
            </section>
            </div>
            </div>

             </li>

        `)}

            $('.btn-delete').click(function () {


                
                let tt1 = this.value
                const item2 = cart1.filter(item2 => item2.id !== tt1);

                

                cart1 = item2

                localStorage.clear();

                localStorage.setItem("tiendaback", JSON.stringify(cart1));

                $('.article2').remove()
                $('.atTr').remove()
                $('.atTr1').remove()


                

                let nuMfinal = cart1.length

                $(".carritox").prepend(`

               <h2 class="atTr mb-1 ms-3">${nuMfinal}</h2>`)


            })


            var totalAges = tiendaLocalobjeto.reduce((sum, value) => (typeof value.price == "number" ? sum + value.price : sum), 0);
           

            let array = []
            
            $.get(url, function (eth) {

                for (const dato of eth) {
                    array.push(dato)
                }
                const item = array.filter(item => item.exchange === 'Binance');

                let intems = item[0]

                let suma = totalAges * intems.price

                

                function financial(x) {
                    return Number.parseFloat(x).toFixed(2);
                }

                let suma1 = financial(suma)
                

                acumulador.push(suma1)

                const getLastArrItem1 = (arr1) => {
                    let lastItem1 = arr1[arr1.length - 1];
                    
                    $(".fiNaltitulo").prepend(`
            <div class="d-flex flex-row justify-content-center align-content-center align-items-center mb-2">
            <h2 class="atTr">$${lastItem1} Total aproximado USDT</h2>
            <img src="./imgs/usdt.png" width="25px" height="25px" class="mb-1 ms-2 atTr1" >
            </div> `)
                }

                $('.atTr').hide()
                $('.atTr1').hide()
               
                getLastArrItem1(acumulador)

            })

            $(".imputs").change(function () {
                
                let InfoForm = this.value

                



            });

            $(".fiNalVaciar").click(() => {

                cart1 = []

                localStorage.clear();
                $('.article2').remove()
                $('.atTr').remove()
                $('.atTr1').remove()


            })


            $(".fiNAL").click(() => {


                compraFinalizada.push(tiendaLocalobjeto);

                cart1 = []




                localStorage.removeItem('tiendaback')
                $('.article2').remove()
                $('.atTr').remove()
                $('.atTr1').remove()


            })

        

    }

})

