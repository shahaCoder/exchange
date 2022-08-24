let API_KEY = "jGfq1wyYStsGw6fEko8xfAwmGIyHYoJQ"


let inp1 = document.querySelector('#inp1')
let inp2 = document.querySelector('#inp2')
let dataList = document.querySelector('#currency')
let dataList2 = document.querySelector('#currency2')

let currency1 = "USD" 
let currency2 = "UZS"
let amount1 = 0
let amount2 = 0

let rates = []


axios.get(`https://api.apilayer.com/fixer/latest?base=USD&apikey=${API_KEY}`)
    .then(res => {
        if(res.status === 200 || res.status === 201) {
            rates = res.data.rates

            startExchanging(Object.keys(rates), dataList)
            startExchanging(Object.keys(rates), dataList2)
            console.log('start');
        }
    })

const exchange = document.querySelector('.exchange-btn')
let smth = document.querySelector('.num')
let smth2 = document.querySelector('.num2')
function startExchanging (currencies, select) {
    for(let currency of currencies) {
        let opt = new Option(currency, currency)

        select.append(opt)
    }

    dataList.onchange = () => {
        currency1 = dataList.value
        console.log(currency1);
    }
    dataList2.onchange = () => {
        currency2 = dataList2.value
        console.log(currency2);
    }

    inp1.onkeyup = () => {
        amount1 = inp1.value
        smth.innerHTML = inp1.value
    }
    inp2.onkeyup = () => {
        amount2 = inp2.value
        smth2.innerHTML = inp2.value
    }

    if(dataList.Option === 'btc'){
        alert('smth')
    }

    exchange.onclick = () => {
            if(inp1.value > 0){
            amount2 = amount1 * rates[currency2] / rates[currency1]
            amount1 = amount1
            inp2.value = amount2
            smth2.innerHTML = inp2.value
            smth.innerHTML = inp1.value
        } else{
            inp1.value = 'Write something!'
            inp1.onfocus = () => {
                inp1.value = ''
            }
        }
        }

}

const menu = document.querySelector('.menu')
const aside = document.querySelector('.aside')
const menuBg = document.querySelector('.modal-bg')
const closeBg = document.querySelector('.close-aside')
menu.onclick = () => {
    aside.style.display = 'block'
    menuBg.style.display = 'block'
    aside.style.left = '0'
    
    aside.style.opacity = '1'
    setTimeout(() => {
        menuBg.style.opacity = '1'
    }, 100);
}

closeBg.onclick = () => {
    aside.style.left = '-500px'
    menuBg.style.opacity = '0'
    setTimeout(() => {
        aside.style.opacity = '0'
        aside.style.display = 'none'
        menuBg.style.display = 'none'
    }, 100);

}

const overview = document.querySelector('.over-click')
const exchange2 = document.querySelector('.ex')
const overStyle = document.querySelector('.over-style')
const active = document.querySelector('.active')
const main1 = document.querySelector('main')
const main2 = document.querySelector('.main-overview-page')
// background-color: #32395E;
//             border-bottom: 2px solid 
//             #1288E8;
//             border-radius: 5px;
overview.onclick = () => {
    overview.style.backgroundColor = '#32395E'
    overview.style.borderBottom = '2px solid #1288E8'
    overview.style.borderRadius = '5px'
    overStyle.style.color = 'white'
    // 
    exchange2.style.backgroundColor = 'transparent'
    exchange2.style.borderBottom = 'none'
    exchange2.style.borderRadius = '0px'
    active.style.color = '#616A8B'
    main1.style.display = 'none'
    main2.style.display = 'block'
}

exchange2.onclick = () => {
    overview.style.backgroundColor = 'transparent'
    overview.style.borderBottom = 'none'
    overview.style.borderRadius = '0px'
    overStyle.style.color = '#616A8B'
    // 
    exchange2.style.backgroundColor = '#32395E'
    exchange2.style.borderBottom = '2px solid #1288E8'
    exchange2.style.borderRadius = '5px'
    active.style.color = 'white'
    main2.style.display = 'none'
    main1.style.display = 'block'
}
const reg = document.querySelector('.modal-register-bg')
const wrapper = document.querySelector('.wrapper')
const form = document.forms.register
const email = document.querySelector('#email')
const pswrd = document.querySelector('#pswrd')
const sign = document.querySelector('.modal-sign-bg')
form.onsubmit = (e) =>{
    e.preventDefault()

    let dateBase = {}

    let fm = new FormData(form)

    fm.forEach((value, key)=> {
        dateBase[key] = value
    })
 
    localStorage.setItem('info', JSON.stringify(dateBase))
    console.log(dateBase);
    reg.style.display = 'none'
    wrapper.style.display = 'flex'
}

let localstrg = JSON.parse(localStorage.getItem('info')) 
if(localstrg === null){
   sign.style.display = 'none'
   reg.style.display = 'flex' 
} else{
   reg.style.display = 'none'
   sign.style.display = 'flex'
}

const form2 = document.forms.sign

form2.onsubmit = (event) => {
   event.preventDefault()

   if(email.value === localstrg.email && pswrd.value === localstrg.password){
    sign.style.display = 'none'
    wrapper.style.display = 'flex'
   } else{
    alert('error')
   }
}