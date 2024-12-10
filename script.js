// Everything for conditions and activation of Alert message

let hasSubmitted = false;

function showForm() 
    {
        const square = document.getElementById('square');
        const formContainer = document.getElementById('formContainer');

    // Hide the square(first button) and show the form
        square.style.display = 'none';
        formContainer.style.display = 'block';
    }

function submitText() 
    {
        if (hasSubmitted) 
            {
            // Show custom alert instead of the native alert
            showCustomAlert("Noen har vært litt rampete, ja… Jeg sa jo, bare én gave! Ikke prøv deg!");
            return;
            }

            const input = document.getElementById('textInput');
            const textList = document.getElementById('textList');

        if (input.value.trim()) 
            {
            const listItem = document.createElement('li');
            listItem.textContent = input.value;
            textList.appendChild(listItem);
            input.value = '';
            hasSubmitted = true; // Set the flag to true after the first submission
            }
    }

function showCustomAlert(message) 
    { 
        const alertModal = document.getElementById('customAlert');
        const alertMessage = document.getElementById('alertMessage');
        alertMessage.textContent = message;
        alertModal.style.display = 'block';
    }

function closeAlert() 
    {
        const alertModal = document.getElementById('customAlert');
        alertModal.style.display = 'none';
    }
