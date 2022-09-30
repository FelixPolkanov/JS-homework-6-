
const inputRefValidation = document.querySelector("#validation-input");
const dataLengthRef = document.querySelector('[data-length ="6"]');
const inputRef = document.querySelector("input");
let inputDataLength;


inputRefValidation.addEventListener("input", (event) => {
    inputRef.textContent = event.currentTarget.value
    inputDataLength = (inputRefValidation.textContent).length

});

inputRefValidation.addEventListener("blur", (event) => {
  console.log("entered symbol amount:", inputDataLength);
  console.log("required symbol amount:", dataLengthRef.dataset.length)
    
   if (inputDataLength == dataLengthRef.dataset.length) {
       inputRef.classList.remove('invalid');
       inputRef.classList.add('valid'); 
       console.log('valid');
        return 
    }
    inputRef.classList.remove('valid'); 
    inputRef.classList.add('invalid');
        console.log('invalid');
});