---
layout: default
permalink: /nhiep-anh/
title: Nhiếp ảnh trong ta
---
<header class="header">
    <h1 style=" font-family: Satisfy;
  font-size:50px;
  text-align:center;
  color:black;
  padding:1%;">Nhiếp ảnh trong ta</h1>
</header>
<div class="gallery" id="gallery">
{% assign nhiepanhs = site.categories['Nhiếp ảnh'] %}
{% for post in nhiepanhs | sort  %}
    <figure class="img__item">
    <img src="../{{post.image}}" alt="img" class="img__img">
        <figcaption class="img__description">
            <div class="img__text">
                <p class="img__title"><a href="{{ site.baseurl }}{{ post.url }}">"{{post.title}}"</a></p>
                <p class="img__subtxt">{{ post.date | date: "%B %e, %Y" }}</p>
            </div>
            <i class="far fa-bookmark"></i>
        </figcaption>
    </figure>
{% endfor %}
</div>
<style>
    /* .header {
  text-align: center;
  text-transform: uppercase;
  padding: 32px;
  background-color: #0a0a23;
  color: #fff;
  border-bottom: 4px solid #fdb347;
}
    .gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 10px;

}

.gallery img {

  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
} */
</style>
<style>
    .img__item {
  position: relative;
  margin: 0;
  overflow: hidden;
}

.img__item img {
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.img__item:hover .img__description {
  -webkit-transform: translateY(0%);
          transform: translateY(0%);
  -webkit-transition: all ease-in-out 250ms;
  transition: all ease-in-out 250ms;
}

.img__description {
  position: absolute;
  padding: 0.7em;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  -webkit-transform: translateY(150%);
          transform: translateY(150%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.img__title {
  font-weight: 700;
  font-size: 0.8rem;
}

.img__subtxt {
  font-size: 0.7rem;
  font-weight: 300;
}

.fa-bookmark {
  display: -ms-grid;
  display: grid;
  place-items: center;
}
</style>

<style>
    #gallery{
  -webkit-column-count:4;
  -moz-column-count:4;
  column-count:4;

  -webkit-column-gap:20px;
  -moz-column-gap:20px;
  column-gap:20px;
}
@media (max-width:1200px){
  #gallery{
  -webkit-column-count:3;
  -moz-column-count:3;
  column-count:3;

  -webkit-column-gap:20px;
  -moz-column-gap:20px;
  column-gap:20px;
}
}
@media (max-width:800px){
  #gallery{
  -webkit-column-count:2;
  -moz-column-count:2;
  column-count:2;

  -webkit-column-gap:20px;
  -moz-column-gap:20px;
  column-gap:20px;
}
}
@media (max-width:600px){
  #gallery{
  -webkit-column-count:1;
  -moz-column-count:1;
  column-count:1;
}
}
#gallery img,#gallery video {
  width:100%;
  height:auto;
  margin: 4% auto;
  box-shadow:-3px 5px 15px #000;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.modal-img,.model-vid{
  width:100%;
  height:auto;
}
.modal-body{
  padding:0px;
}
</style>
<script>
    $(document).ready(function(){
  $("img").click(function(){
  var t = $(this).attr("src");
  $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
  $("#myModal").modal();
});

$("video").click(function(){
  var v = $("video > source");
  var t = v.attr("src");
  $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
  $("#myModal").modal();
});
});//EOF Document.ready
</script>
