let api = "https://restcountries.com/v2/all";
let iframe = document.querySelector(".cards");
let body = document.getElementById('body')
async function fetch_data(){
  await axios.get(api).then((response) => reload_interface(response.data))
    .catch((erorr) => console.log(erorr));
};

fetch_data();

let reload_interface = (data) => {
  document.querySelector('.modes').classList.remove('toRight')
  document.querySelector('.name').classList.remove('toLeft')
  document.querySelector('.loader').style.display = 'none'
  document.querySelector('.ploader').style.display = 'none'
  document.querySelector('body').classList.remove('act')
  for (let i of data) {
    iframe.innerHTML += `<div class="card" data-name='${i.name}'>
        <div class="Bg_img"><img src='${i.flag}'></img></div>
        <div class="informations">
            <h3 class="country_name">${i.name}</h3>
            <span class="country_capital">${i.capital}</span>
            <button>Подробнее</button>
        </div>
        </div>`;
      }
    let block = document.querySelectorAll('.card')
    for(let o of block){

      o.onclick = () =>{
        for(let i of data){
          if(o.dataset.name == i.name){
            window.localStorage.country = JSON.stringify(i)
        window.location.pathname = 'country.html'
      }
    }
    }
  }
}