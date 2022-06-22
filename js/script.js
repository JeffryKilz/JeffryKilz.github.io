const APIKey = 'AIzaSyAeuclfhkdMDmj1Gozso6RRhGR-ft0JhpY'; // YouTube API Key
const Userid = 'UCEV3P2tsjyX4CXMk0b1P9_g'; // YouTube Channel ID
const subscriberCount= document.getElementById('subscriberCount'); // Subscriber Count

fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`) // Fetching the data from YouTube API
.then(response => { // Handling the response
    return response.json() // Parsing the data to JSON
})
.then(data => { // Handling the data
    console.log(data); // Logging the data
    subscriberCount.innerHTML = data["items"][0].statistics.subscriberCount + " Subscribers"; // Displaying the data
  })
    navigator.clipboard.writeText('Jeffry_Kilz_#1987') // Copying th
  function a() { // Function to copy the data to clipboard e data to clipboard
    window.alert("Copied 'Jeffry_Kilz_#1987' to Clipboard!"); // Alerting the user
  }
(window.onload = onLoad), (window.onresize = onResize); // Calling the functions on load and resize