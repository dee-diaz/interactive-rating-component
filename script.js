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
                card.innerHTML = '';
                card.classList.add('card_submitted');
                
                const cardImg = document.createElement('div');
                cardImg.classList.add('card__img');
                const img = document.createElement('img');
                img.src = 'src/img/illustration-thank-you.svg';
                img.alt = 'Thank you';
                cardImg.appendChild(img);
                card.appendChild(cardImg);

                const yourRating = document.createElement('div');
                yourRating.classList.add('card__your-rating');
                yourRating.textContent = `You selected ${circle.textContent} out of ${cardCircles.length}`;
                card.appendChild(yourRating);

                const title = document.createElement('div');
                title.classList.add('card__title');
                title.textContent = 'Thank you!';
                card.appendChild(title);

                const text = document.createElement('div');
                text.classList.add('card__text', 'card__text2');
                text.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
                card.appendChild(text);
            }
        })
    })
})