document.addEventListener('DOMContentLoaded', () => {
    const cardCircles = document.querySelectorAll('.card__circle');
    const card = document.querySelector('.card');
    const submitBtn = document.querySelector('.button');

    cardCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            cardCircles.forEach(circle => {
                circle.classList.remove('active');
            })

            circle.classList.add('active');
        })
    })


    submitBtn.addEventListener('click', () => {
        cardCircles.forEach(circle => {
            if(circle.classList.contains('active')) {
                card.innerHTML = `
                    <div class="card_submitted">
                        <div class="card__img">
                            <img src="src/img/illustration-thank-you.svg" alt="Illustration thank you">
                        </div>
                        <div class="card__your-rating">You selected ${circle.textContent} out of ${cardCircles.length}</div>
                        <div class="card__title">Thank you!</div>
                        <div class="card__text card__text2">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</div>
                    </div>`
            }
        })
    })
})