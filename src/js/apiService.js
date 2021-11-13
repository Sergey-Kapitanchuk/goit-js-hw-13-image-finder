export default class PicturesService {
  constructor() {
    this.pageNumber = 1;
    this.searchQuery = '';

    this.KEY = '24313425-113bae226a9d0d3fda52b5004';
    this.BASE_URL = 'https://pixabay.com/api';
  }

  fetchImages() {
    return fetch(
      `${this.BASE_URL}/?q=${this.searchQuery}&image_type=photo&page=${this.pageNumber}&per_page=12&key=${this.KEY}`,
    )
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  }

  incrementPage() {
    this.pageNumber += 1;
  }

  resetPage() {
    this.pageNumber = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(value) {
    this.searchQuery = value;
  }
}
