async function initGroups() {
    try {
        // Запрос к API для получения списка групп
        const response = await fetch('http://178.209.126.70:8000/grope');
        const data = await response.json();
        mass_groupe = data[Object.keys(data)[0]];
        
        // Находим select в DOM
        const groupSelect = document.getElementById("gr");
        
        // Заполняем select вариантами
        mass_groupe.forEach((element)=>{
            groupSelect.innerHTML=groupSelect.innerHTML+`<option value=${element}>${element}</option>`
        });
        // 2. Обработчик выбора группы
        sel=groupSelect.value
        loadSchedule(sel)

        
        groupSelect.addEventListener('change', async (event) => {
            const selectedGroupId = event.target.value;
            await loadSchedule(selectedGroupId); // Загружаем расписание
        });
        
    } catch (error) {
        console.log('Ошибка при загрузке групп:', error);
    }
}

async function loadSchedule(groupe) {
    try {
        // Запрос к API для получения расписания
        const response = await fetch(`http://178.209.126.70:8000/raspis/${groupe}`);
        jsonData = await response.json();
        console.log(jsonData)
        // Заполняем таблицу новыми данными
        getpara_po_nedel(teknedel)
        startUpdatingSchedule();
    } catch (error) {
        console.log('Ошибка при загрузке расписания:', error);
        
    }
}

initGroups()