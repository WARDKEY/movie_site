// 페이지 로딩 시 전체 영화 로딩
document.addEventListener("DOMContentLoaded", function () {
  const $cardList = document.getElementById("cardList");
  $cardList.innerHTML = "";
  $cardList.classList.add("row", "row-cols-1", "row-cols-5", "g-4", "mt-3");

  const movies = movieList.results;

  let index = 0;
  for (let result of movies) {
    const $col = document.createElement("div");
    $col.classList.add("col");
    $col.innerHTML = ` <div class="col">
            <a class="movieInfo" href="info.html?index=${index++}" style="text-decoration: none">
              <div
                id="movie_card"
                class="card h-100 text-white text-center bg-primary mb-3 animate__animated animate__fadeInUp"
                style="max-width: 18rem"
              >
                <img
                  src="https://image.tmdb.org/t/p/w440_and_h660_face/${
                    result.poster_path
                  }"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="movie_year text-warning">${result.release_date.substring(0, 4)}</p>
                  <p class="movie_title fs-bold">${result.original_title}</p>
                </div>
              </div>
            </a>
          </div>`;
    $cardList.appendChild($col);
  }
});

// 검색 창
function searchMovie() {
  const movie = movieList.results;

  const $cardList = document.getElementById("cardList");
  $cardList.innerHTML = "";
  $cardList.classList.add("row", "row-cols-1", "row-cols-5", "g-4", "mt-3");

  const searchMovies = [];
  const num = [];
  $search = document.getElementById("search").value;

  // 검색한 영화 이름이 들어있으면 배열 저장
  let index1 = 0;
  for (let name of movie) {
    if (
      String(name.original_title)
        .toLowerCase()
        .trim()
        .includes(String($search).toLowerCase().trim())
    ) {
      searchMovies.push(name);
      num.push(index1++);
      console.log(name);
    }
  }

  let index2 = 0;
  for (let result of searchMovies) {
    const $col = document.createElement("div");
    $col.classList.add("col");
    $col.innerHTML = ` <div class="col">
            <a class="movieInfo" href="info.html?index=${
              num[index2++]
            }" style="text-decoration: none">
              <div
                id="movie_card"
                class="card h-100 text-white text-center bg-primary mb-3 animate__animated animate__fadeInUp"
                style="max-width: 18rem"
              >
                <img
                  src="https://image.tmdb.org/t/p/w440_and_h660_face/${
                    result.poster_path
                  }"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="movie_year text-warning">${result.release_date.substring(0,4)}</p>
                  <p class="movie_title fs-bold">${result.original_title}</p>
                </div>
              </div>
            </a>
          </div>`;
    $cardList.appendChild($col);
  }
}
