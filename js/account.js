              function fetchAccount() {
                  var urlParams = new URLSearchParams(window.location.search);
                  var username = urlParams.getAll('username');
                  var request = new XMLHttpRequest();
                  var accountCode = "/getAccount/" + username;
//                  var account_array = [];
                  request.open('GET', accountCode, true);
                  request.onload = function() {
//                      console.log(JSON.parse(request.responseText));
                      account_array = JSON.parse(request.responseText);
//                      console.log(account_array[0].email)
//                      console.log(JSON.parse(request.responseText))
                  };
                  request.send();
//                  console.log(account_array)
                  document.getElementById("username2").value = urlParams.getAll('username')
//                  document.getElementById("email").value = account_array.email;
                  checkingUpdate();
              }
              
              function checkingUpdate(){
                  console.log(account_array)
              }
              
//              function update(){
//                  var updateComment = new XMLHttpRequest(); 
//
//                  commentModal.hide();
//                  updateComment.open("PUT", edit_comment_url, true); 
//                  updateComment.setRequestHeader("Content-Type", "application/json");
//                  comment_array[currentIndex].username = document.getElementById("editnickname").value;
//                  comment_array[currentIndex].review = document.getElementById("edituserComments").value;
//                  comment_array[currentIndex].rating = rating;
//                  updateComment.onload = function() {
//            fetchComments();
//            var thankyouModal = new Modal(document.getElementById("thankyouModal"));
//            thankyouModal.show();
//		};
//
//		updateComment.send(JSON.stringify(comment_array[currentIndex]));
//	}