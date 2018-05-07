
const search = instantsearch({
  appId: 'H1N2UD238G',
  apiKey: '709235eadbf23a3d2f297ca22e205aed',
  indexName: 'veritate_poc_1posts_post'
});

// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-wrapper',
    placeholder: 'digite uma palavra-chave ou nome',
    magnifier: false,
    searchOnEnterKeyPressOnly: true,
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    cssClasses: {
      root: 'mdl-grid',
      item: 'mdl-cell mdl-card mdl-shadow--4dp portfolio-card'
    },
    templates: {
      empty: 'No results',
      item: function (param) {
        //console.log('param =');
        //console.log(param);
        const title = param._highlightResult.post_title.value;
        const outlet = param.taxonomies_hierarchical.category.lvl0[0];
        return `
          <div class="mdl-card__media">
            <img class="article-image" src="${param.images.thumbnail.url}" border="0" alt="${title}">
          </div>
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">${title}</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <p>Por <strong>Autores</strong> em <strong>${param.post_date_formatted}</strong> em <strong>${outlet}</strong></p>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="${param.permalink}">Leia a íntegra em ${outlet}</a>
          </div>`;
      }
    }
  })
);

// initialize pagination
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 20,
    // default is to scroll to 'body', here we disable this behavior
    scrollTo: false
  })
);

search.start();