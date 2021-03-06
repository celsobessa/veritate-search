# Veritate Fact Check Search

A search interface for fact checking articles using Veritate Initiative Public Index and API, parte of Veritate Initiative, an experimental project with the mission of strenghtening _fact checing_ in Brazil. Comprised by an [Crawler/Indexer](#crawler-indexer), [Public Index API](public-index-api) and **Fact Check** [Aggregator/Search](aggregator-search) for Brazilian news and politics.

<hr>

> **Para versão em português, [clique aqui](README.md).**

<hr>

> For more information, suggestions for fact check sites or to ask for removal of content violating copyright laws, please, send an email to veritate{at}wowperations[dot]com[dot]br
## About Veritate Fact Check Search

A search tool for people looking for fact checking. The idea is that people find all articles related to a keyword. For example, someone looking for facts about the term "Lava Jato" would find a list with several articles about Operation Lava Jato in all indexed media outlets and by clicking in the links, would read the content in the original websites

## About Veritate Initiative

Developed by [Celso Bessa](https://www.celsobessa.com.br) with infrastructure support from [WoWPerations](https://www.wowperations.com.br), Veritate Initiative is an experimental project with the mission of strenghtening _fact checing_ in Brazil. Comprised by an [Crawler/Indexer](#crawler-indexer), [Public Index API](public-index-api) and **Fact Check** [Aggregator/Search](aggregator-search) for Brazilian news and politics.

- Research, experiment, develop and spread technologies, algorithms, design patterns and best practices for the improvement of digital journalism.
- Improve access to high quality journalism
- Instigate fact checking sharing and critical thinking against _fake news_
- To offer tools for better decision making
- Instigate critical thinking and informed decisions about politics and votes

You can learn more about the initiative in the official repository at **[GitHub](https://github.com/celsobessa/veritate/)**.

### Veritate Overview

![A Diagram with Veritate Inatiative Overview 0.1.0](images/veritate-overview-diagram-0.1.0.png)

> If you understand brazilian portuguese, there is a *[Wiki](https://github.com/celsobessa/veritate/wiki)* with more in-depth information

### Crawler/Indexer

It will crawl, index, evaluate and organize fact check article published in specialized third party websites.

Right now we are using a SaaS provider for crawling and scrapping and a tool of our own for evaluation and organization. But we may move crawling/scrapping for our own infrastructure in the future and eventually we will make our own evaluation tools public.

### Public Index API

A public index with information about the index fact checking articles for consumption by third party systems through an REST API with information returned in JSON.

This is the API we are using for our aggregator/search and intended for use by third parties. As an example, a developer could create a WordPress plugin which suggested fact checking articles for certain keywords used by an blog editor.

### Aggregator

A search tool for people looking for fact checking. The idea is that people find all articles related to a keyword. For example, someone looking for facts about the term "Lava Jato" would find a list with several articles about Operation Lava Jato in all indexed media outlets and by clicking in the links, would read the content in the original websites

## FAQ - Frequently Asked Questions

### Which fact check outlets are indexed by this initiative?

Right now, just [Agência Lupa](http://piaui.folha.uol.com.br/lupa/), [Agência Pública](https://apublica.org/checagem/) and [Aos Fatos](https://aosfatos.org).

### How can my fact check outlet be indexed?

You must open an issue [at the project repository](https://github.com/celsobessa/veritate/issues) with the following information

- Outlet name
- Outlet URL
- Fact Checking section URL (if different from the main URL)
- You Relationship with the oulet (reader, author, editor, publisher, etc)

You can also send an email (the address is above) with the required information.  We will index only reputable and/or trustworth outlets according to our editorial. An editorial guideline is on roadmap , but we don't know when it will be published.

In the technological side, we give priority to websites using WordPress and using the Fact Check schema in a LD+JSON markup. Our crawler and algorithms also prefer faster, accessible and secure (HTTPS) websites, specially those easily accessible by mobile phones and screenreaders.

Also, if you give express permission for our system to present content snippets from your website, the faster we will index your website and it will prioritized when presenting results.

As a rule of thumb, **if it's good journalism and if is good for Google Page Speed Insights and pass the WCAG2.0 test*, is good for us.

### Does Veritate drive traffic away from fact checking websites?

No! On the contrary, its goals is drive MORE traffic and/or increase reach for such websites.

### Does it hurt the SEO of those sites?

No. As an API, it just makes data accessible, but it does not count as content for search engines. And we have plans for a plugin allowing embedding and linking to fact check articles from other websites, which can drive more traffic and help with SEO.

### Does this initiative have a commercial purpose?

No, this is a non-profit experiment. We want to make something bigger, but probably under a NGO or a Foundation like organization.

## Version History / Changelog

Check [CHANGELOG.md](CHANGELOG.md) for change of the iniatiave as a whole, from a global perspective, and for this repository. Each component -- and it's possible sub components -- will have their own Changelog with specific details.

## Contributing

Coding, doing a quality assurance, testing and writing documentation. More information soon.