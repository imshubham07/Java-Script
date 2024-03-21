const form = document.querySelector('form')

//this usecase will give your empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height==='' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give Correct Hight ${height}`;
    }
    else if (weight==='' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give Correct Weight ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show the Results
        result.innerHTML = `<span>${bmi}</span>`
    }
})