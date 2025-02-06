do_end_pari=document.getElementById('do_end_pari')
do_next_pari=document.getElementById('do_next_pari')
       
// Функция для вычисления времени до конца текущей пары или до начала следующей
function calculateTimeUntilNextPair(pairs, currentTime) {
    const pairStartTimes = [8 * 60 + 0, 9 * 60 + 35, 11 * 60 + 10, 13 * 60 + 30, 15 * 60 + 5];
    const pairDuration = 80;

    const [currentHours, currentMinutes] = currentTime.split(':').map(Number);
    const currentTimeInMinutes = currentHours * 60 + currentMinutes;

    let currentPair = null;
    let nextPair = null;
    let timeUntilEndOfCurrentPair = null;
    let timeUntilNextPair = null;

    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i] !== ' ') {
            const pairStartTime = pairStartTimes[i];
            const pairEndTime = pairStartTime + pairDuration;

            if (currentTimeInMinutes >= pairStartTime && currentTimeInMinutes < pairEndTime) {
                currentPair = pairs[i];
                timeUntilEndOfCurrentPair = pairEndTime - currentTimeInMinutes;
            }

            if (currentTimeInMinutes < pairStartTime) {
                if (nextPair === null) {
                    nextPair = pairs[i];
                    timeUntilNextPair = pairStartTime - currentTimeInMinutes;
                }
            }
        }
    }

    if (currentPair === null && nextPair === null) {
        for (let i = 0; i < pairs.length; i++) {
            if (pairs[i] !== ' ') {
                const pairStartTime = pairStartTimes[i];
                if (currentTimeInMinutes < pairStartTime) {
                    nextPair = pairs[i];
                    timeUntilNextPair = pairStartTime - currentTimeInMinutes;
                    break;
                }
            }
        }
    }

    if (currentPair === null && nextPair === null) {
        return {
            currentPair: "Пар нет.",
            nextPair: "Пар нет.",
            timeUntilEndOfCurrentPair:"Текущей пары нет",
            timeUntilNextPair: "Пар больше нет",
            message: "Пар нет."
        };
    }

    function formatTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}ч. ${mins < 10 ? '0' : ''}${mins}мин.`;
    }

    return {
        currentPair: currentPair,
        nextPair: nextPair,
        timeUntilEndOfCurrentPair: timeUntilEndOfCurrentPair !== null ? formatTime(timeUntilEndOfCurrentPair) : null,
        timeUntilNextPair: timeUntilNextPair !== null ? formatTime(timeUntilNextPair) : null
    };
}

// Функция для обновления времени каждые 30 секунд
function startUpdatingSchedule(pairs) {
    let now = new Date();
    let currentTime = `9:10`;
        const result = calculateTimeUntilNextPair(pairs, currentTime);
        do_next_pari.textContent=`до начала следующей пары: ${result.timeUntilNextPair}`
        do_end_pari.textContent=`до конца текущей пары: ${result.timeUntilEndOfCurrentPair}`
        
    // Запускаем интервал каждые 30 секунд
    setInterval(() => {
        // Получаем текущее время
        let now = new Date();
        let currentTime = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;

        // Вычисляем время до конца текущей пары или до начала следующей
        const result = calculateTimeUntilNextPair(pairs, currentTime);
        do_next_pari.textContent=`до начала следующей пары: ${result.timeUntilNextPair}`
        do_end_pari.textContent=`до конца текущей пары: ${result.timeUntilEndOfCurrentPair}`
    }, 10000); // 30000 мс = 30 секунд
}
    ungrope = jsonData[Object.keys(jsonData)[0]][teknedel]
    pairs=ungrope[Object.keys(ungrope).at(Dayofnedel%6)]//измени

    // используем
    startUpdatingSchedule(pairs);
