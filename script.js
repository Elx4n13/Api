const btn = document.querySelector('.apiRequest')
const apiLists = document.querySelector('.items')
btn.addEventListener('click',gettingApi)
async function gettingApi(){
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    const data = (await response.json()).data
    loadApiUI(data)
}
function loadApiUI(data){
  let newData = data.sort((a,b)=>{
    return  b['ID Year'] - a['ID Year'] 
  })
    const items = newData.map(t=>{
      const item = document.createElement('div')
      const line = document.createElement('hr')
      const text = document.createElement('p')
      text.innerHTML = `ID Nation : ${t['ID Nation']} <br> ID Year:${t['ID Year']} <br> Nation: ${t['Nation']} <br> Population:${t['Population']} <br>Slug Nation:${t['Slug Nation']} <br> Year:${t['Year']}`
      item.append(line)
      item.append(text)
      return item
    })
    apiLists.innerHTML = ''
    apiLists.append(...items)
}