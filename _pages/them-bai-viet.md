---
title: Thêm bài viết
permalink: /them-bai-viet
---

<html>

<head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
   <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css'>
   <link rel="stylesheet" href="./style_ti.css">
   <meta charset="utf-8">
   <title>Thêm bài viết mới</title>
   <script src="./ckeditor/ckeditor.js"></script>

</head>

<body>

   <div>
      <section class="grid extended-grid-18">
         <div class="container clearfix">
            <h4>Thêm bài viết mới</h4>

            <div class="row row-sm-sm sample-row">
               <div class="col-xs-12 col-md-8 gutter-sm-sm gutter-margin-xs-sm">
                  <div class="inner">
                     <form action="" method="post">

                        <!-- (2): textarea sẽ được thay thế bởi CKEditor -->
                        <textarea id="editor1" name="editor1" cols="80" rows="10">
                       <p>Hello <strong>CKEditor</strong></p>
                   </textarea>

                     </form>
                  </div>
               </div>
               <div class="col-xs-6 col-md-4 gutter-sm-sm gutter-margin-xs-sm">
                  <div class="inner"> <input type="text" id="myText" name="content-val" />
                     <button onclick="SetContents()">Click me</button>

                     <p id="demo">Click me to change my HTML content (innerHTML).</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</body>
<!-- (3): Code Javascript thay thế textarea có id='editor1' bởi CKEditor -->
<script>

   CKEDITOR.replace('editor1');
   CKEDITOR.config.height = 580;     // 500 pixels wide.
   CKEDITOR.instances.editor1.on("change", function () {
      console.log(this.getData());
      document.getElementById("myText").value = this.getData();
      document.getElementById("demo").innerHTML = this.getData();

   });
   function SetContents() {

      var oEditor = CKEDITOR.instances.editor1;
      var t = document.getElementById('myText').value;
      if (oEditor && t) {
         oEditor.setData(t);

      }

   }
</script>

</html>
