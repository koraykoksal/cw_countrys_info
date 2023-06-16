



const api=`https://restcountries.com/v3.1/all`

const card = document.querySelector('.countries_info')


let countries =""

window.addEventListener('load',()=>{


    getData()

})



const getData=async ()=>{


    try {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        if (!res.ok) {
          renderError(`Something went wrong:${res.status}`);
          throw new Error();
        }
        const data = await res.json();
        getCountryNames(data);
      } catch (error) {
        console.log(error);
      }


}





const getCountryNames=(data)=>{

    countries = data
    
    countries.forEach(element => {

        const countiresName = document.getElementById('input')
        
        countiresName.innerHTML +=`
    
        <option value="${element.name.common}">${element.name.common}</option>
        
        `

    });
    

}


document.querySelector('.select').addEventListener('change',()=>{

    const countryName=document.querySelector('.select').value

    if(countryName){

        const selectedName = countries.filter((country) => country.name.common === countryName)

        renderCountry(selectedName[0])
    }
})




const renderCountry=(country)=>{


    const {

        name,
        capital,
        region,
        flags,
        languages,
        currencies,
        population,
        borders,
        maps,

    } = country


    card.innerHTML = `
    
    
    <div class="card text-center m-auto w-25" style="width: 22rem;">

        <img class="card-img-top" src="${flags.svg}" alt="Card image cap">

        <div class="card-body">
        <h5 class="card-title">${name.common}</h5>
        </div>

        <ul class="list-group text-left w-100">
    
        <li class="list-group-item"><i class="fa-solid fa-globe"> ${region}</i></li>
        
        <li class="list-group-item"><i class="fa-solid fa-building-columns"> ${capital}</i></li>
        
        <li class="list-group-item"><i class="fa-solid fa-language"> ${Object.values(languages)}</i></li>

        
        <li class="list-group-item"><i class="fa-solid fa-money-bill"> ${Object.values(currencies)[0].name}</i></li>

        
        <li class="list-group-item"><i class="fa-solid fa-person"> ${population.toLocaleString("es-US")}</i></li>

        
        <a href="${maps.googleMaps}" target="blank_"><li class="list-group-item"><i class="fa-solid fa-map"> ${maps.googleMaps}</i></li></a>

      </ul>
    </div>
    
    `

    
}

















