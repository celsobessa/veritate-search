
const search = instantsearch({
  appId: 'H1N2UD238G',
  apiKey: '709235eadbf23a3d2f297ca22e205aed',
  indexName: 'veritate_poc_3posts_post',
  routing: true
});

// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-wrapper',
    placeholder: 'digite uma palavra-chave e ENTER',
    magnifier: false,
    searchOnEnterKeyPressOnly: true,
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    cssClasses: {
      root: 'mdl-grid',
      item: 'mdl-cell mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-cell--3-col mdl-card mdl-shadow--4dp portfolio-card'
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
            <a href="${param.original_url}" target="_blank"><img class="article-image" src="${param.images.thumbnail.url}" border="0" alt="${title}" srcset="${param.images.thumbnail.url} 256w, ${param.images.medium.url} 480w" sizes="(max-width: 512px) 256px, (min-width: 513px) 480px"></a>
          </div>
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text"><a href="${param.original_url}" target="_blank">${title}</a></h2>
          </div>
          <div class="mdl-card__supporting-text">
            <p>Por <strong>${param.original_authors}</strong> em <strong>${param.post_date_formatted}</strong> em <strong>${outlet}</strong></p>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="${param.original_url}">Leia a íntegra em ${outlet}</a>
          </div>`;
      }
    }
  })
);

// initialize pagination
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    padding: 2,
    showFirstLast: false,
    cssClasses: {
      item: 'mdl-button mdl-js-button mdl-button--raised',
      previous: 'mdl-button--colored mdl-js-ripple-effect',
      next: 'mdl-button--colored mdl-js-ripple-effect',
      disabled: 'disabled'
    },
    maxPages: 20,
    // default is to scroll to 'body', here we disable this behavior
    scrollTo: false
  })
);

search.start();