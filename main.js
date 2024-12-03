function analyzeArray(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const avg = arr.reduce((sum, val) => sum + val, 0) / arr.length;

    return { min, max, avg };
}

function toAbsolute(arr) {
    return arr.map(Math.abs);
}

function handleArray() {
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(",").map(Number); 

    const { min, max, avg } = analyzeArray(arr);
    const absArray = toAbsolute(arr);

    document.getElementById("results").innerHTML = `
        <p>минимальное значение: ${min}</p>
        <p>максимальное значение: ${max}</p>
        <p>среднее значение: ${avg.toFixed(2)}</p>
        <p>массив в абсолютных значениях: [${absArray.join(", ")}]</p>
    `;
}