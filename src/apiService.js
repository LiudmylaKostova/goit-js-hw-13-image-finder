export default {
    apiKey: '19847070-2f6934a26cdc244bf33deaec0',
    searchQuery: '',
    page: 1,
    fetchImages() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.apiKey}`;
    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      })
      .catch(error => console.log(error));
    },
    get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
    },
    resetPage() {
        this.page = 1;
  }, 
}