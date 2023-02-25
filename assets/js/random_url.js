---
---
var allPosts;
function createrAllPosts() {
    if(!allPosts){
    var allPosts = [
        {% for post in site.posts %}
            {url: "{{ post.url }}", title:"{{ post.title }}"}{% unless post.previous == nil %},{% endunless %}
        {% endfor %}
        ];
    }
}
createrAllPosts();
