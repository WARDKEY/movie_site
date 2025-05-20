document.addEventListener("DOMContentLoaded", function () {
  const $container = document.querySelector(".container");
  $container.innerHTML = "";

  const $link = document.getElementById("movie_link");

  const param = new URLSearchParams(window.location.search);
  const movieId = param.get("id");

  const movies = movieList.results;
  let selectedMovie;

  selectedMovie = movies.find((m) => String(m.id) === movieId);

  console.log(selectedMovie);

  $container.innerHTML = ` <div class="col mt-5" id="movie_image">
          <img
            src="https://image.tmdb.org/t/p/w440_and_h660_face/${selectedMovie.poster_path}"
            alt=""
          />
        </div>
        <div class="col mt-5">
          <div class="movie_info">
            <h1 class="text-light" id="movie_title">${selectedMovie.original_title}</h1>
            </br>
            <div class="text-warning mb-3" id="release_date">
              <h3>개봉일</h3>
                <p>${selectedMovie.release_date}</p>
            </div>
            </br>
            <div class="mb-3" id="popularity">
              <h3 class="text-light">관객 수</h3>
                <p>${selectedMovie.popularity}</p>
            </div>
            <div class="mb-3" id="overview">
            </br>
              <h3 class="text-light">설명</h3>
                <p>${selectedMovie.overview}</p>
            </div>
          </div>
        </div>`;

  // 선택된 영화 화면에서 Movie 탭 클릭 시 같은 영화 보이게 하는 함수
  $link.addEventListener("click", function () {
    $link.setAttribute("href", `/info.html?id=${movieId}`);
  });
});
