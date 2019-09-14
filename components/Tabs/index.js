// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsContainer = document.querySelector('.topics');

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function(response) {
    console.log(response);
    response.data.topics.forEach((topic) => {
      topicsContainer.appendChild(TabFactory(topic));
    })
  })
  .catch(function(error) {
    console.log(error);
  })

  function TabFactory(obj) {
    // create elements
    const tab = document.createElement('div');

    // set the content
    tab.textContent = obj;

    // apply styles
    tab.classList.add('tab');

    return tab;
  }
