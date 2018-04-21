---
---
window.store = {
{% for item in site.faq %}
"{{ item.title | slugify }}": {
    "title": "{{ item.title | xml_escape }}",
    "url": "{{ item.url | xml_escape }}",
    "content": {{ item.content | strip_newlines | jsonify}},
    "type": "{{ item.type }}",
    "categories": [{% for category in item.categories %}"{{ category }}"{% unless forloop.last %},{% endunless %}{% endfor %}],
}{%- unless forloop.last -%},{%- endunless -%}
{% endfor %}
};

function search() {


    searchTerm = document.getElementById('search-box').value;
    console.log(searchTerm);
    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('categories', { boost: 5 });
        this.field('content');
        this.field('type');
        this.field('url');
    });

    for (var key in window.store) { // Add the data to lunr
        idx.add({
            'id': key,
            'title': window.store[key].title,
            'categories': window.store[key].categories,
            'content': window.store[key].content,
            'type': window.store[key].type,
            'url': window.store[key].url
        });

        var results = idx.search(searchTerm); // Get lunr to perform a search
        displaySearchResults(results); // We'll write this in the next section
    }

}

function displaySearchResults(results) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
        var ret = '';

        for (var i = 0; i < results.length; i++) {  // Iterate over the results
            var item = window.store[results[i].ref];
            ret += '<article class="col-md-8 col-md-offset-2 tile">\n'
                + '<header class="tile-head">\n'
                + '<i class="fa fa-';
            switch (item.type) {
                case 'info':
                    ret += "info-circle";
                    break;
                case 'tutorial':
                    ret += "graduation-cap";
                    break;
            }
            ret += '"></i>'
                + '<strong>' + item.title + '</strong>'
            ret += '<div class="border-box anchor-right-full-parent">'
                + '<h4><a href="' + item.url + '">' + item.title + '</a></h4>'
                + '<p><span>' + item.date+ ', by ' + item.author + '</span></p><br>'
                + '</header>'
                + '<div class="tile-body">' + item.content + '</div>'
                + '</article>';
        }

        searchResults.innerHTML = ret;
    } else {
        searchResults.innerHTML = '<div id="no-search-results"><br><p class="text-center"><i class="fa fa-3x fa-meh-o" aria-hidden="true"></i><br><br>No results found</p><br></div>';
    }
}
