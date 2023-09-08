document.addEventListener('DOMContentLoaded', function () {
    const questionInput = document.getElementById('question-input');
    const sendButton = document.getElementById('send-button');
    const questionList = document.getElementById('question-list');
    const answerHistory = document.getElementById('answer-history');

    sendButton.addEventListener('click', function () {
        const questionText = questionInput.value;
        if (questionText.trim() === '') {
            return;
        }

        // Savolni qo'shish
        const questionItem = document.createElement('li');
        questionItem.textContent = questionText;
        questionList.appendChild(questionItem);

        // Savolga javob olish
        const answerText = getAnswer(questionText);

        // Javobni istoriyaga qo'shish
        const answerItem = document.createElement('div');
        answerItem.classList.add('answer-item');
        answerItem.textContent = answerText;
        answerHistory.appendChild(answerItem);

        // Savolni tozalash
        questionInput.value = '';
    });

    // Savol uchun javoblar funksiyasi
    function getAnswer(questionText) {
        // Sizning savol javobi shu yerga qo'shiladi
        // Misol uchun:
        // if (questionText === 'Savol 1') {
        //     return 'Javob 1';
        // } else if (questionText === 'Savol 2') {
        //     return 'Javob 2';
        // } else {
        //     return 'Noma\'lum savol';
        // }
    }
});
