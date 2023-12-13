
const icons = document.querySelectorAll('.summary-icon');
const scores = document.querySelectorAll('.score');
const titles = document.querySelectorAll('.summary-title');

async function request(url){
    let response = await fetch(url);
    let json = await response.json();
    json.forEach((item, index) => {
        icons[index].src = item.icon;
        scores[index].innerHTML = `${item.score} / <span style="color:hsla(224, 30%, 27%, .5);">100<span>`;
        titles[index].innerHTML = item.category;
    });
}

 request('./data.json')
 .catch(alert);