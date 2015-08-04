export default {
    fetch: (insurerId, brokerId) => {
      let url = `http://localhost:43872/Agencies/${insurerId}/${brokerId}`;
      return fetch(url).then(response => response.json());
  }
}
