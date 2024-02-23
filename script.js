const ul = document.querySelector('#morse-list');
const shuffledChildren = Array.from(ul.children).sort(() => Math.random() - 0.5);

shuffledChildren.forEach((item, index) => {
    const input = item.querySelector('input');
    const nextInput = shuffledChildren[index + 1]?.querySelector('input');

    input.addEventListener('input', function() {
        const userAnswer = input.value.toUpperCase();
        const correctAnswer = input.dataset.answer;

        if (userAnswer === correctAnswer) {
            input.readOnly = true;
            nextInput && nextInput.focus(); // If nextInput is not null/undefined, nextInput.focus() is evaluated. Else, focus is not evaluated.
            console.log('Correct!');
        } else {
            input.value = '';
            console.log('Incorrect.');
        }
    });

    ul.appendChild(item);
});