const inputEls = document.querySelectorAll('input'),
    buttonEl = document.querySelector('button');

// console.log(buttonEl.innerText)

// iterate through the inputs
inputEls.forEach((input, index1) => {
    input.addEventListener('keyup', (e) => {
        const currentInput = input,
            nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;
        
        if(currentInput.value.length > 1) {
            currentInput.value = ''
            return
        }

        if(currentInput.value !== '' && nextInput && nextInput.hasAttribute('disabled')){
            nextInput.removeAttribute('disabled')
            nextInput.focus()
        }

        if(e.key === 'Backspace') {
            inputEls.forEach((input, index2) => {
                if(index1 <= index2 && prevInput) {
                    input.setAttribute('disabled', true);
                    currentInput.value = '';
                    prevInput.focus();
                }
            })
        }

        if(!inputEls[3].disabled && inputEls[3].value !== '') {
            buttonEl.classList.add('active')
            return
        }

        buttonEl.classList.remove('active')
    });
});

//focus on the first input when the page loads
window.addEventListener('load', () => {
    inputEls[0].focus()
})