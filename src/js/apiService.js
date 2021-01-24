const baseUrl =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';

export default {
  page: 1,
  query: '',
  fetchImg() {
    const requestParam = `q=${this.query}&page=${this.page}&per_page=12&key=20009108-bdf79e6f97d61b00b15ecd86a`;

    return fetch(baseUrl + requestParam)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();
        return parsedResponse.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(input) {
    this.query = input;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
