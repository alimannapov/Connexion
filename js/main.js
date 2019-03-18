var jqxhr = $.getJSON( "./MockedData/blogs.json", 
function(arraysOfBlogs) {
  console.log( "success" , arraysOfBlogs );
  arraysOfBlogs.map(blogDate =>{
    
  $('.contents').append(`  
  <section class="blog">
 <a href="" class="blog_date">${blogDate.createdDate}</a>
 <img class="blog_img" src="${blogDate.imageUrl}" alt="${blogDate.title}">
 <a href class="${blogDate.title}">Connexion—Example of Business Blog</a>
 <span class="blog_author">by &nbsp;<a href=""> ${blogDate.author}</a> &nbsp;/&nbsp;${blogDate.countVievs} vievs</span>
  <p class="blog_text">${blogDate.shortDescription}
 </p>
</section>`)
  })


})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
