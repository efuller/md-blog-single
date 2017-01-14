(function() {
  var data = {
        		"title": "Blog Modern Developer",
        		"description": "This is Blog for Modern Developer",
            "postComments":[

            ]
  };

  var postComment= document.getElementById("postComment");
 
  function addComment (){
    console.log("we are in addComment");
    var comment_author='Natalie Vaslavsky';
    var numberOfComments = data.postComments.length;
    var comment = document.getElementById("comment");
    var comment_content = comment.value;
    data.postComments.push ({
      "comment_id": numberOfComments+1,
      "comment_author": comment_author,
      "comment_date": new Date(),
      "comment_content": comment_content
    });
  }

   comment.addEventListener('change', addComment, false);
  
   postComment.addEventListener('submit', function(event) {
     event.preventDefault();
    
     console.log("Get object " + data.postComments.length);
     console.log("Before display contents");
     console.log("title " + data.title);
     console.log("description " + data.description);
     for (var i = 0; i < data.postComments.length; i++) {
       console.log("comment_id = " + data.postComments[i].comment_id);
       console.log("comment_author = " + data.postComments[i].comment_author);
       console.log("comment_date = " + data.postComments[i].comment_date);
       console.log("comment_content = " + data.postComments[i].comment_content);
     }  
  } )  
}())