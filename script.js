function calculateScore() {
    const exam1 = parseFloat(document.getElementById('exam1').value) || 0;
    const exam2 = parseFloat(document.getElementById('exam2').value) || 0;
    const exam3 = parseFloat(document.getElementById('exam3').value) || 0;
    const exam4 = parseFloat(document.getElementById('exam4').value) || 0;
    const encouragement = parseFloat(document.getElementById('encouragement').value) || 0;
    const average12 = parseFloat(document.getElementById('average12').value) || 0;
    const priority = parseFloat(document.getElementById('priority').value) || 0;

    const totalExamScore = exam1 + exam2 + exam3 + exam4;
    const averageExamScore = (totalExamScore + encouragement) / 4;

    const finalScore = ((averageExamScore * 7) + (average12 * 3)) / 10 + priority;

    document.getElementById('result').textContent = finalScore.toFixed(2);
}

function startCountdown(examDate) {
    const countdownElement = document.getElementById('timer');
    const examTime = new Date(examDate).getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = examTime - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Đã đến ngày thi! Chúc các em thi tốt";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    const examDate = '2024-06-26T00:00:00';
    startCountdown(examDate);
});
