const displayScores = () => {
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      const scoresList = document.getElementById('scores');

      data.forEach((scores) => {
        const listItem = document.createElement('div');
        listItem.classList.add('scores__item');

        const icon = document.createElement('img');
        icon.src = scores.icon;
        icon.classList.add('scores__icon');
        icon.alt = `icons for ${scores.category}`;

        const text = document.createElement('span');
        text.textContent = `${scores.category}`;
        text.classList.add('scores__text');

        const sp = document.createElement('span');
        sp.textContent = `${scores.score}/${100}`;
        sp.classList.add('scores__sp');

        listItem.appendChild(icon);
        listItem.appendChild(text);
        listItem.appendChild(sp);

        scoresList.appendChild(listItem);
      });
    })

    .catch((error) => console.error(error));
};

displayScores();

// learned how to manipulate the DOM with JS and how to use fetch to get data from a JSON file.
