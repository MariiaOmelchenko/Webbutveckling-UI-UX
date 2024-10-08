document.querySelectorAll('input, select').forEach((field) => {
    field.addEventListener('input', () => {
        if (field.value) {
            field.style.backgroundColor = '#e6f7e6'; // Grön ton när fältet är ifyllt
        } else {
            field.style.backgroundColor = ''; // Återställ till standardfärg
        }
    });
});
