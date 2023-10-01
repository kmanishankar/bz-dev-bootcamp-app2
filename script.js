
async function getData(url)
{
    try{
        let data=await fetch(url);

        let s="";

        data = await data.json();

        for(let i=0;i<data.products.length;i++){

            s = s + `<tr> <td> ${data.products[i].brand} </td>  <td>${data.products[i].category} </td> <td>${data.products[i].description}</td> </tr>`;

        }

        document.getElementById("schlor").innerHTML = s;

        console.log(data);

    }catch(error){
       console.log(error);
    }
}

getData("https://dummyjson.com/products")