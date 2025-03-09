var xhr = new XMLHttpRequest();

var url = './health_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

}

  articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Moyens d\'atteindre :';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Avantages :';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
      var articleDiv = document.createElement('div');
      var articleH2 = document.createElement('h2');
      var articleP = document.createElement('p');
      var articleH3 = document.createElement('h3');
      var articleUl = document.createElement('ul');
      var articleLI = document.createElement('li');
      articleDiv.classList.add('article');
      articleH2.classList.add('article')
      articleP.classList.add('article')
      articleH3.classList.add('article')
      articleUl.classList.add('article')
      articleLI.classList.add('article')
      articleDiv.appendChild(title);
    });

xhr.send();
