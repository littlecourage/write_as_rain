const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://www.metaweather.com/api/location/2459115/';

fetch(proxyUrl + targetUrl)
.then(blob => blob.json())
.then((data) => {
  console.log(data);
  return data;
})
.catch(
  (err) => {
    console.log('Something went wrong', err)
  }
)

export default fetch;