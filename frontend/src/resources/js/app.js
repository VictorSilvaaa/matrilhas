document.querySelectorAll('.arrows__arrow--back').forEach(button => {
    button.addEventListener('click', () => {
        window.history.back();
    });
});


