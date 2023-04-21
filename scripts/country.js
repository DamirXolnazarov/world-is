let obj = JSON.parse(window.localStorage.country);
let iframe = document.querySelector(".country");
console.log(obj);
iframe.innerHTML += `
<div class="title"><h1>${obj.name}</h1></div>
    <div class="infos">
        <div class="img"><img src="${obj.flag}" alt=""></div>
        <div class="inform">
            <ul>
                <li>name: <span>${obj.name}</span></li>
                <li>capital: <span>${obj.capital}</span></li>
                <li>nativeName: <span>${obj.nativeName}</span></li>
                <li>region: <span>${obj.region}</span></li>
                <li>numericCode: <span>${obj.numbericCode}</span></li>
                <li>timezones: <span>[ "${obj.timezones[0]} "]</span></li>
                <li>population: <span>${obj.population}</span></li>
                <li>demonym: <span>${obj.demonym}</span></li>
                <li>topLevelDomain: <span>[ "${obj.topLevelDomain}" ]</span></li>
                <li>languages: <span>${obj.languages[0].name}</span></li>
                </ul>
                </div>
                
                </div>
    <div class="additional">
                <div class='td'><h3>alpha3Code:</h3><span class='ins'>${obj.alpha3Code}</span></div>
                <div class='td'><h3>alpha2Code:</h3><span class='ins'>${obj.alpha2Code}</span></div>
                <div class='td'><h3>territory, km:</h3><span class='ins'>${obj.area}</span></div>
                <div class='td'><h3>territory, km:</h3><span class='ins'>${obj.subregion}</span></div>
                <div class='td'><h3>independent:</h3><span class='in'></span></div>
                <div class='td'><h3>callingCodes:</h3><span class='ins'>+ [ "${obj.callingCodes}" ]</span></div>
    </div>
     <footer>
                <h3>&copy; All rights are reserved</h3> 
                <span>created by Damir_uzb</span>
        </footer>
`;

                if(obj.independent == false){
                   document.querySelector('.in').innerHTML = 'no'
                }
                else{
                    document.querySelector('.in').innerHTML = 'yes'
                }
let back = document.querySelector('.back')
back.onclick = () =>{
    window.location.pathname = 'index.html'
    event.preventDefault()
}