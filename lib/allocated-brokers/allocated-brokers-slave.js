export default {
    fetch: (insurerId) => {
      let url = `http://localhost:43872/AllocatedBrokers/${insurerId}`;
      return fetch(url).then(response => response.json());
  }
}
