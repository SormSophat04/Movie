AOS.init();

new Typed(".auto-type", {
  strings: ["Science", "Animation", "រឿងភាគ"],
  loop: true,
  typeSpeed: 120,
  backSpeed: 120,
});

const header = document.getElementById("nav");

header.style.padding = "35px 0";

window.onscroll = function () {
  const scrollvalue = window.scrollY;

  if (scrollvalue > 120) {
    header.style.padding = "16px 0";
    header.style.backgroundColor = "#c4dac0";
    header.style.transition = "0.3s ease-in";
  } else {
    header.style.padding = "35px 0";
    header.style.backgroundColor = "transparent";
    header.style.transition = "0.3s ease-out";
  }
};

var movieArr = [
  {
    title: "Avengers Infinity War",
    year: "២០១៨",
    duration: 120,
    rate: 4.3,
    category: "science",
    img: "./assets/images/poster-movie/avengers infinity war.jpg",
  },
  {
    title: "Avengers End Game",
    year: "២០២៤",
    duration: 160,
    rate: 4.5,
    category: "science",
    img: "./assets/images/poster-movie/avengers endgame.jpg",
  },
  {
    title: "Guardians Of The Galaxy",
    year: "២០២៣",
    duration: 123,
    rate: 4.8,
    category: "science",
    img: "./assets/images/poster-movie/guardians-of-the-galaxy.jpg",
  },
  {
    title: "Guardians Of The Galaxy 2",
    year: "២០២៥",
    duration: 123,
    rate: 4.6,
    category: "science",
    img: "./assets/images/poster-movie/guardians-of-the-galaxy-2.jpg",
  },
  {
    title: "Guardians of the Galaxy 3",
    year: 2023,
    duration: 150,
    rate: 4.5,
    category: "science",
    img: "./assets/images/poster-movie/guardians-of-the-galaxy-3.jpg",
  },
  {
    title: "Age of Ultron",
    year: 2015,
    duration: 141,
    rate: 4.2,
    category: "science",
    img: "./assets/images/poster-movie/age of ultron.webp",
  },
  // {
  //   title: "Alien Romulus",
  //   year: 2024,
  //   duration: 120,
  //   rate: 4.0,
  //   category: "science",
  //   img: "./assets/images/poster-movie/AlienRomulus.avif",
  // },
  {
    title: "Ant-Man",
    year: 2015,
    duration: 117,
    rate: 4.1,
    category: "science",
    img: "./assets/images/poster-movie/ant-man.jpg",
  },
  {
    title: "Ant-Man and the Wasp Quantumania",
    year: 2023,
    duration: 124,
    rate: 3.9,
    category: "science",
    img: "./assets/images/poster-movie/Ant-Man_and_the_Wasp_Quantumania.jpg",
  },
  {
    title: "Black Panther",
    year: 2018,
    duration: 134,
    rate: 4.4,
    category: "science",
    img: "./assets/images/poster-movie/black-panther.jpg",
  },
  {
    title: "Black Panther Wakanda Forever",
    year: 2022,
    duration: 161,
    rate: 4.2,
    category: "science",
    img: "./assets/images/poster-movie/black-panther-wakanda-forever.jpg",
  },
  {
    title: "Black Widow",
    year: 2021,
    duration: 134,
    rate: 4.0,
    category: "science",
    img: "./assets/images/poster-movie/black-widow.jpg",
  },
  {
    title: "Captain America The First Avenger",
    year: 2011,
    duration: 124,
    rate: 4.2,
    category: "science",
    img: "./assets/images/poster-movie/captain-america-the-first-avenger.jpeg",
  },
  {
    title: "Captain Marvel",
    year: 2019,
    duration: 123,
    rate: 4.1,
    category: "science",
    img: "./assets/images/poster-movie/captain-marvel.jpg",
  },
  {
    title: "Doctor Strange",
    year: 2016,
    duration: 115,
    rate: 4.3,
    category: "science",
    img: "./assets/images/poster-movie/doctor-strange.jpg",
  },
  {
    title: "Doctor Strange in the Multiverse of Madness",
    year: 2022,
    duration: 126,
    rate: 4.0,
    category: "science",
    img: "./assets/images/poster-movie/doctor-strange-in-the-multiverse-of-madness.jpg",
  },
  {
    title: "Iron Man",
    year: 2008,
    duration: 126,
    rate: 4.5,
    category: "science",
    img: "./assets/images/poster-movie/iron-man.jpg",
  },
  {
    title: "Iron Man 2",
    year: 2010,
    duration: 124,
    rate: 4.2,
    category: "science",
    img: "./assets/images/poster-movie/iron-man-2.jpg",
  },
  {
    title: "Iron Man 3",
    year: 2013,
    duration: 130,
    rate: 4.1,
    category: "science",
    img: "./assets/images/poster-movie/iron-man-3.jpg",
  },
  {
    title: "Shang-Chi",
    year: 2021,
    duration: 132,
    rate: 4.3,
    category: "science",
    img: "./assets/images/poster-movie/shang-chi-and-the-legend-of-the-ten-rings.jpg",
  },
  {
    title: "Spider-Man Far From Home",
    year: 2019,
    duration: 129,
    rate: 4.3,
    category: "science",
    img: "./assets/images/poster-movie/spiderman-far-from-home.jpg",
  },
  {
    title: "Spider-Man Homecoming",
    year: 2017,
    duration: 133,
    rate: 4.2,
    category: "science",
    img: "./assets/images/poster-movie/spiderman-homecoming.jpg",
  },
  {
    title: "Spider-Man No Way Home",
    year: 2021,
    duration: 148,
    rate: 4.6,
    category: "science",
    img: "./assets/images/poster-movie/spiderman-no-way-home.jpg",
  },
  {
    title: "Thor",
    year: 2011,
    duration: 115,
    rate: 4.1,
    category: "science",
    img: "./assets/images/poster-movie/thor.jpg",
  },
  {
    title: "Thor The Dark World",
    year: 2013,
    duration: 112,
    rate: 3.9,
    category: "science",
    img: "./assets/images/poster-movie/thor-dark-world.jpg",
  },
  {
    title: "Thor Love and Thunder",
    year: 2022,
    duration: 119,
    rate: 3.8,
    category: "science",
    img: "./assets/images/poster-movie/thor-love-and-thunder.jpg",
  },
  {
    title: "Thor Ragnarok",
    year: 2017,
    duration: 130,
    rate: 4.5,
    category: "science",
    img: "./assets/images/poster-movie/thor-ragnarok.jpg",
  },
];

var scienceMovie = document.getElementById("scienceMovie");
scienceMovie.innerHTML = "";
movieArr.forEach((e) => {
  scienceMovie.innerHTML += `
    <div  data-aos="fade-up" data-aos-duration="1000" class="col-12 col-md-6 col-lg-3">
                      <div class="px-2">
                        <div style="height: 450px;" class="bg-green-100 overflow-hidden hover-image rounded-2">
                          <img src="${e.img}" alt=""
                          class="w-100 h-100 object-fit-cover">
                        </div>
  
                        <div class="d-flex justify-content-between mt-3 mb-2">
                          <h3 class="text-light font-en fw-bold">${e.title}</h3>
                          <h2 class="text-green-400 fw-bold">${e.year}</h2>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                          <p class="border border-2 text-light px-2 fw-bold m-0 text-light">4K</p>
                          <div class="ps-5 pe-md-2 pe-lg-0 d-flex  align-items-center">
                            <i class="bi bi-alarm me-2 fw-bolder text-light"></i>
                            <p class="text-light m-0 fw-bolder">${e.duration}min</p>
                            &ensp;&ensp;
                            <i class="bi bi-star-fill me-2 fw-bolder text-light"></i>
                            <p class="text-light m-0 fw-bolder">${e.rate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
  `;
});

var movie = document.getElementById("movie");
movie.innerHTML = "";
movieArr.forEach((e) => {
  movie.innerHTML += `
    <div class="col-12 col-md-6 col-lg-3 pb-5" data-aos="fade-up" data-aos-duration="1000">
                      <div class="px-2">
                        <div style="height: 450px;" class="bg-green-100 overflow-hidden hover-image rounded-2">
                          <img src="${e.img}" alt=""
                          class="w-100 h-100 object-fit-cover">
                        </div>
  
                        <div class="d-flex justify-content-between mt-3 mb-2">
                          <h3 class="text-light font-en fw-bold text-start">${e.title}</h3>
                          <h2 class="text-green-400 fw-bold">${e.year}</h2>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                          <p class="border border-2 text-light px-2 fw-bold m-0 text-light">4K</p>
                          <div class="ps-5 pe-md-2 pe-lg-0 d-flex  align-items-center">
                            <i class="bi bi-alarm me-2 fw-bolder text-light"></i>
                            <p class="text-light m-0 fw-bolder">${e.duration}min</p>
                            &ensp;&ensp;
                            <i class="bi bi-star-fill me-2 fw-bolder text-light"></i>
                            <p class="text-light m-0 fw-bolder">${e.rate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
  `;
});

var movie2 = document.getElementById("movie2");
movie2.innerHTML = "";
movieArr.forEach((e) => {
  movie2.innerHTML += `
    <div class="col-12 col-md-6 col-lg-3 pb-5" data-aos="fade-up" data-aos-duration="1000">
                      <div class="px-2">
                        <div style="height: 450px;" class="bg-green-100 overflow-hidden hover-image rounded-2">
                          <img src="${e.img}" alt=""
                          class="w-100 h-100 object-fit-cover">
                        </div>
  
                        <div class="d-flex justify-content-between mt-3 mb-2">
                          <h3 class="text-light font-en fw-bold text-start">${e.title}</h3>
                          <h2 class="text-green-400 fw-bold">${e.year}</h2>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                          <p class="border border-2 text-light px-2 fw-bold m-0 text-light">4K</p>
                          <div class="ps-5 pe-md-2 pe-lg-0 d-flex  align-items-center">
                            <i class="bi bi-alarm me-2 fw-bolder text-light"></i>
                            <p class="text-light m-0 fw-bolder">${e.duration}min</p>
                            &ensp;&ensp;
                            <i class="bi bi-star-fill me-2 fw-bolder text-light"></i>
                            <p class="text-light m-0 fw-bolder">${e.rate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
  `;
});
