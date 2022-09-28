
let counterValue = 0;
const addCounterValue = counter.querySelector('#value');



const handleClickOnIncrementBtn = () => {
   counterValue += 1;
    console.log("INcrement was pushed");
    addCounterValue.textContent = counterValue;
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', (handleClickOnIncrementBtn));




const handleClickOnDecrementBtn = () => {
   counterValue -= 1;
    console.log("DEcrement was pushed");
    addCounterValue.textContent = counterValue;
};
const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', handleClickOnDecrementBtn );





