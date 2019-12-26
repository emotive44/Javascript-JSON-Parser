function solve() {
    document.getElementById("button").addEventListener("click", extract);

    function extract(event){
        event.preventDefault();
        let input = document.getElementById('input').value;
        let obj = JSON.parse(input);
        let objKey = Object.keys(obj);
        let objValue = Object.values(obj);
        let command = document.getElementById('command').value;
        let result = document.getElementById('result');

        for(let i = 0; i < objKey.length; i++) {
            if(command === `value of ${objKey[i]}`) {
                result.textContent = `Value of "${objKey[i]}" is ${objValue[i]}.`;
            } else if(command === `typeof ${objKey[i]}`) {
                let type = typeof(objValue[i]);
                result.textContent = `Type of "${objKey[i]}" is ${type}.`;
            }
        }
    }
}
