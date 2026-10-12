const countdowns = document.querySelectorAll('.countdown');

function atualizarContagens() {
    const now = Date.now();

    countdowns.forEach((countdown) => {
        const targetDate = new Date(
            countdown.dataset.date
        ).getTime();

        const distance = targetDate - now;

        const daysElement = countdown.querySelector('.days');
        const hoursElement = countdown.querySelector('.hours');
        const minutesElement = countdown.querySelector('.minutes');
        const secondsElement = countdown.querySelector('.seconds');
        const messageElement = countdown.querySelector('.message');

        if (distance <= 0) {
            daysElement.textContent = '0';
            hoursElement.textContent = '0';
            minutesElement.textContent = '0';
            secondsElement.textContent = '0';

            messageElement.textContent =
                'A data da prova já passou!';

            return;
        }

        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) / 1000
        );

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

        messageElement.textContent = '';
    });
}

atualizarContagens();
setInterval(atualizarContagens, 1000);