const openIcon = document.querySelector('.icon-open');
const navMobile = document.querySelector('.menu-mobile')
const iconSearch = document.querySelector('#icon-search')
const openInput = document.querySelector('.input')

iconSearch.addEventListener('click', function showSearch() {
 openInput.classList.toggle('open-search')
 
})

openIcon.addEventListener('click', function showMenu(){
   navMobile.classList.toggle('show')

   
})

const API_KEY = 'api_key=4e477968b18c62c8aeae651019e5237c';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

   getMovies(API_URL);

   function getMovies(url) {
      fetch(url).then(res => res.json())
      .then(data => {
         console.log(data.results)
         showMovies(data.results);
      })
   }


      function showMovies(data) {
         const Banner = document.querySelector('.baner');

         data.forEach(movie => {
             const {title, poster_path, vote_average, overview} = movie;
             const movieElement = document.createElement('div');
             movieElement.classList.add('baner-single');
           
            

             movieElement.innerHTML = `
                        <div class="voted">  
                           <a class="${getColor(vote_average)}"><i class='bx bxs-star-half'></i>${vote_average}</a>
                        </div>
                        <img src="${IMG_URL+poster_path}" alt="${title}">
                          
                     <div class="title">
                           <span class="title-movie">${title}</span>
                     </div>
                                
            `;
            
               Banner.appendChild(movieElement)

             
           
         })
      }

   function getColor(vote) {
      if(vote < 8) {
         return 'green';
      } else if (vote >= 5 ) {
         return 'orange';
      }else {
         return 'red';
      }
   }

   







