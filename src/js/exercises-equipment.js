// Modules and params

import axios from 'axios';
const BASE_URL = 'https://energyflow.b.goit.study/api/exercises';
const searchCategoryMZ = document.querySelector('.placeholder-container');
searchCategoryMZ.addEventListener('click', showTrainingsMZ);
const placeholder = document.querySelector('.placeholder-container');
const searchForm = document.querySelector('.training-search-form');
searchForm.addEventListener('submit', searchByKeyWord);
const resList = document.createElement('ul');
resList.classList.add('search-result-list');
const searchParams = {
  group: '',
  item: '',
  keyWord: '',
};
//
//
export function formDisplayNone() {
  searchForm.classList.add('display-none');
}

// Search by keyWord
async function searchByKeyWord(event) {
  event.preventDefault();
  searchParams.keyWord = searchForm
    .querySelector('[name="exercise-name"]')
    .value.trim();
  searchForm.querySelector('[name="exercise-name"]').value = '';
  const { data: resultByKeyword } = await getExercisesMZ(searchParams, 1);
  if (resultByKeyword.results.length === 0) {
    placeholder.innerHTML =
      '<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>';
    return;
  }
  resList.innerHTML = resultSearchMakrUp(resultByKeyword);
  placeholder.innerHTML = '';
  placeholder.appendChild(resList);
  searchForm.classList.remove('display-none');
  pageConter(resList, resultByKeyword);
  if (resultByKeyword.totalPages > 1) {
    resList.classList.add('additional-margin');
  } else {
    resList.classList.remove('additional-margin');
  }
}
//
// Search by group
async function showTrainingsMZ(event) {
  searchParams.keyWord = '';
  if (event.target.nodeName === 'UL') return;
  let query;
  if (
    event.target.nodeName === 'DIV' &&
    (event.target.classList.value === '' ||
      event.target.classList.value === 'list-history')
  )
    query = event.target;
  if (
    event.target.nodeName === 'SPAN' &&
    (event.target.classList.value === '' ||
      event.target.classList.value === 'list-history')
  )
    query = event.target.parentNode;
  if (!query) return;

  searchParams.group = query.lastElementChild.textContent;
  searchParams.item = query.firstChild.textContent;
  const { data: resultExercises } = await getExercisesMZ(searchParams);
  if (!resultExercises.results) {
    placeholder.innerHTML =
      '<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>';
    return;
  }
  resList.innerHTML = resultSearchMakrUp(resultExercises);
  placeholder.innerHTML = '';
  placeholder.appendChild(resList);
  searchForm.classList.remove('display-none');
  pageConter(resList, resultExercises);
  if (resultExercises.totalPages > 1) {
    resList.classList.add('additional-margin');
  } else {
    resList.classList.remove('additional-margin');
  }
}
//
//
//GET to BACK

async function getExercisesMZ({ group, item, keyWord }, page = 1) {
  let limit = window.innerWidth <= 1439 ? 8 : 9;
  group = group.toLowerCase();
  if (group === 'body parts') {
    group = group.slice(0, group.length - 1).replace(/\s/g, '');
  }
  try {
    const exerciseSearchResult =
      keyWord === ''
        ? await axios.get(
            `${BASE_URL}?${group.toLowerCase()}=${item.toLowerCase()}&page=${page}&limit=${limit}`
          )
        : await axios.get(
            `${BASE_URL}?${group.toLowerCase()}=${item.toLowerCase()}&page=${page}&keyword=${keyWord}&limit=${limit}`
          );

    return exerciseSearchResult;
  } catch (error) {
    window.alert('something goes wrong');
    console.log(error);
  }
}
//
//MarkUp for results
//
function resultSearchMakrUp({ results }) {
  return results
    .map(({ bodyPart, rating, name, target, burnedCalories, time, _id }) => {
      return `<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
                <p class="rating-num">${rating.toFixed(1)}</p>
                <svg class="rating-star-svg" width="16" height="16">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#rating-star"></use>
                </svg>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${_id} data-exercise-modal-open>Start
                <svg class="start-svg" width="18" height="18">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-arrow-right"></use>
                </svg>
            </button>
        </div>
      </div>
      <div class="info-about-exercise">
        <div class="exercise-name">
            <svg class="runnig-svg" width="24" height="24">
                <use href="/project-dev-hunters/assets/sprite-f8222074.svg#running-man"></use>
            </svg>
            <h2>${name[0].toUpperCase() + name.slice(1)}</h2>
        </div>
        <div class="additional-information">
            <p class=>Burned calories: <span class="info-from-back">${burnedCalories} / ${time} min</span></p>
            <p class=>Body part: <span class="info-from-back">${
              bodyPart[0].toUpperCase() + bodyPart.slice(1)
            }</span></p>
            <p class=>Target: <span class="info-from-back">${
              target[0].toUpperCase() + target.slice(1)
            }</span></p>
        </div>
     
          </li>`;
    })
    .join('');
}

// pagination

function pageConter(
  resList,
  { totalPages },
  activePage = 0,
  maxQuerysOnPage = 7
) {
  if (totalPages === 1) return;
  const counter = document.createElement('ul');
  counter.classList.add('pagination-counter');
  counter.addEventListener('click', changePage);
  let costyl;
  if (activePage == 1) {
    costyl = Number(activePage) - 1;
  } else if (activePage == 2) {
    costyl = Number(activePage) - 2;
  } else if (Number(activePage) === 3) {
    costyl = Number(activePage) - 3;
  } else if (Number(activePage) > 3) {
    costyl = Number(activePage) - 4;
  } else {
    costyl = Number(activePage);
  }
  let costylYounger = 0;
  for (let i = costyl; i < maxQuerysOnPage + Number(activePage); i++) {
    costylYounger += 1;
    const oneCounter = document.createElement('li');
    oneCounter.textContent = i + 1;
    oneCounter.classList.add('one-count');
    counter.append(oneCounter);
    if (i + 1 == activePage) {
      oneCounter.classList.add('active-count');
    } else if (activePage === 0 && i === 0) {
      oneCounter.classList.add('active-count');
    }
    if (i + 1 === totalPages) {
      break;
    } else if (costylYounger === 7) {
      break;
    }
  }
  resList.after(counter);
  resList.classList.add('exercises-margin-for-pagin');
}

async function changePage(event) {
  if (event.target.nodeName === 'UL') return;

  const { data: newData } = await getExercisesMZ(
    searchParams,
    event.target.textContent
  );
  resList.innerHTML = resultSearchMakrUp(newData);
  placeholder.innerHTML = '';
  placeholder.appendChild(resList);
  pageConter(resList, newData, event.target.textContent);
}