var isloading=false;

const animation = document.querySelector(".loader");

const container = document.querySelector(".container");

let skip = 0;

let limit = 6;

let endproducts = limit;



function fetchData(){

    if(isloading == true || skip > endproducts) return;

    isloading = true;

    //animation.classList.add("show");

    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)

        .then(res => {

            res.json().then((data) =>{

            endproducts = data.total;

            data.products.map(item =>{

            var card =`

            <div class="card">

                 <div class="card-header">

                     <img src="${item.images[0]}" alt="" >

                 </div>

                 <div class="card-body">

                     <h4>${item.title}</h4>

                     <p>${item.description}</p>

                 </div>

             </div>`

             container.innerHTML += card;

            })

            skip = skip + limit;

            isloading = false;

            animation.classList.remove("show");

        }).catch(e => {

            console.log(e)

             isloading = false;

            animation.classList.remove("show");

 

        })

        }).catch(e => {

            console.log(e)

            alert("nous rencontrons un probléme de chargement svp Veillée vous connectez à internet")

           

            isloading = false;

            animation.classList.remove("show");

            

        })



}



fetchData();





window.addEventListener('scroll', () =>{

    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){

        fetchData();

    }

})
