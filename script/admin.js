//  const postBtn = document.querySelector('#postbtn')
//  const message = document.querySelector('#message')
//  const author = document.querySelector('#author')
//  const result = document.querySelector('#')

 // Function to post the blog message
function postBlogMessage() {
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let author = document.getElementById('author').value;
    let image = document.getElementById('image').value;
    let currentDate = new Date();
  
    let postData = {
      title: title,
      content: content,
      author: author,
      image: image,
      date: currentDate.toISOString() // Convert date to ISO string format
    };
  
    // Make an HTTP POST request to the server
    fetch('https://example.com/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(function(response) {
      if (response.ok) {
        // Successful post
        console.log('Blog message posted successfully!');
        // Reset the form
        document.getElementById('postForm').reset();
      } else {
        // Error in posting
        console.log('Error posting the blog message.');
      }
    })
    .catch(function(error) {
      // Error in making the request
      console.log('Error:', error);
    });
  }
  
  // Event listener for form submission
  let postForm = document.getElementById('postForm');
  postForm.addEventListener('submit', function(event) {
    event.preventDefault();
    postBlogMessage();
  });
  
