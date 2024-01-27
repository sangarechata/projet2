const products = [
    {
        id: 1,
        designation: "Riz",
        prixUnitaire: 20000,
        uniteDeVente: "Kg/N",
        image: "https://media.istockphoto.com/id/827465154/photo/white-rice-in-burlap-sack-bag-isolated-on-white-background.webp?s=2048x2048&w=is&k=20&c=H1gqWUptAcTXBzf7gG6F1PisrX4bXQrcTZ_7iPdbvYo="
    },
    {
        id: 1,
        designation: "Hamburger",
        prixUnitaire: 20000,
        uniteDeVente: "Kg/N",
        image: "https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 1,
        designation: "Smart Phone",
        prixUnitaire: 20000,
        uniteDeVente: "Kg/N",
        image: "https://images.pexels.com/photos/6632995/pexels-photo-6632995.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
]

const displayProducts = () =>{
    return products.map(product => {
        return (`
        <div class="card-product">
            <div class="card-img">
                <img src="${product.image}"/>
            </div>
            <div class="card-desc">
                <h3>${product.designation}</h3>
                <p>Prix unitaire : ${product.prixUnitaire} FCFA / ${product.uniteDeVente}</p>
                <button onClick='increment()'>+</button>
                <span id="result">0</span>
                <button onClick="decrement()">-</button>
            </div>
        </div>
        `)
    })
}

document.getElementById('content').innerHTML = displayProducts()
 var buttons = document.getElementById("incremente");
 var btn = document.getElementById("decremente");
 let compteur = 0;

 function increment (){
    document.getElementById('result').textContent=compteur++;
}

function decrement (){
    document.getElementById('result').textContent=compteur--;
}
 

