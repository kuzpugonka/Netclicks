const cardWrapper = document.querySelector('.content__selection-list')

const film = [
  {
    id: 0,
    title: 'Марсианин 1',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.8,
    link: './pages/film.html',
    src: './images/img-film.png',
    srcset: './images/img-film@2x.png 2x'
  },
  {
    id: 1,
    title: 'Марсианин 2',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.8,
    link: './pages/film.html',
    src: './images/img-film.png',
    srcset: './images/img-film@2x.png 2x'
  },
  {
    id: 2,
    title: 'Марсианин 3',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.8,
    link: './pages/film.html',
    src: './images/img-film.png',
    srcset: './images/img-film@2x.png 2x'
  },
  {
    id: 3,
    title: 'Марсианин 4',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.8,
    link: './pages/film.html',
    src: './images/img-film.png',
    srcset: './images/img-film@2x.png 2x'
  },
  {
    id: 4,
    title: 'Марсианин 5',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.8,
    link: './pages/film.html',
    src: './images/img-film.png',
    srcset: './images/img-film@2x.png 2x'
  },
  {
    id: 5,
    title: 'Марсианин 6',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.8,
    link: './pages/film.html',
    src: './images/img-film.png',
    srcset: './images/img-film@2x.png 2x'
  }
]

const renderCard = () => {
  cardWrapper.innerHTML = ''

  film.forEach((item) => {
    cardWrapper.insertAdjacentHTML('beforeend', `
      <article class="content__selection card">
                  <a class="card__link" href=${item.link}>
                    <div class="card__img">
                      <img
                        class="card-img"
                        src=${item.src}
                        srcset=${item.srcset}
                        alt="баннер фильма ${item.title}"
                        aria-label="баннер фильма ${item.title}"
                      />
                    </div>

                    <div class="card__desc">
                      <h3 class="card__title">
                        <span class="card__title_bold">${item.title}</span>
                        <span>, ${item.original}</span>
                      </h3>
                      <p class="card__category">${item.category}</p>
                      <p class="card__rating">${item.rating}</p>
                    </div>
                  </a>
                </article>
      `)
  })
}
renderCard()