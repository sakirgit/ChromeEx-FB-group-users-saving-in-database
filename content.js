

$(document).ready(function () {
  $(".xamitd3.x1sy10c2.xieb3on.x193iq5w").prepend("<div id='addon_msg_div'></div>");
 // console.log("clicked on post 555");
  $(".x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.xl56j7k.x6s0dn4.xozqiw3.x1q0g3np.xi112ho.x17zwfj4.x585lrc.x1403ito.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.xn6708d.x1ye3gou.xtvsq51.x1r1pt67").on('click', function () {

 //   console.log("clicked on post 7777");
/*
    var the_cover_div = $(this).closest(".x1jx94hy.x30kzoy.x9jhf4c.xgqcy7u.x1lq5wgf.xev17xk.xktsk01.x1d52u69.x19i0xim.x6ikm8r.x10wlt62.x1n2onr6");
    var userLink = the_cover_div.find(".xu06os2.x1ok221b a.xt0psk2").attr("href");


    // Initialize an array to hold the question-answer pairs
    var qaPairs = [];

    // Iterate over each list item in the question list
    the_cover_div.find('.x1y1aw1k.x1pi30zi.x18d9i69.x1swvt13 > ul > li').each(function () {
      // Extract the question and answer text using jQuery
      var question = $(this).find('span.x193iq5w.xeuugli').text();
      var answer = $(this).find('.x1gslohp').text();

      // Push an object containing the question and answer into the qaPairs array
      qaPairs.push({
        question: question,
        answer: answer
      });
    });

    // Convert the qaPairs array into a JSON string
    var qaJSON = JSON.stringify(qaPairs);

    console.log("qaJSON:: ", qaJSON);
*/



      var thisApprBtn = $(this);
      // Find the nearest .cover_user_to_approval parent
      var coverDiv = thisApprBtn.closest(".x1jx94hy.x30kzoy.x9jhf4c.xgqcy7u.x1lq5wgf.xev17xk.xktsk01.x1d52u69.x19i0xim.x6ikm8r.x10wlt62.x1n2onr6");

      // Extract the user link
      var userFullName = coverDiv.find('.xt0psk2 a.xt0psk2').text() || '';
      var userLink = coverDiv.find('.xt0psk2 a.xt0psk2').attr('href') || '#';

      // Extract questions and answers
      var qusAns = [];
      coverDiv.find('.x1y1aw1k.x1pi30zi.x18d9i69.x1swvt13 > ul > li').each(function() {
          var question = $(this).find('span.x193iq5w.xeuugli.x1s688f').text() || '';
          var answer = $(this).find('.x1gslohp').text() || '';
          qusAns.push({
              question: question,
              answer: answer
          });
      });



    try {

      // Construct JSON data
      var jsonData = {
          user_full_name: userFullName,
          user_link: userLink,
          qus_ans: qusAns
      };

      console.log("jsonData::", jsonData);

      // Send data to API
      $.ajax({
          url: 'https://mohazon.com/wp-json/api/fb_group_1_users',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(jsonData),
          success: function(data) {
              // Display the message in the specific .cover_user_to_approval div
              var messageDiv = $('<div></div>').text( userFullName + ' | ' + data.message).css({
                'color': 'green', // Example: sets the text color to red
                'font-size': '18px', // Example: sets the font size to 16px
                // Add more CSS properties as needed
            });
            //  thisApprBtn.closest(".xamitd3.x1sy10c2.xieb3on.x193iq5w").prepend(messageDiv);
            $("#addon_msg_div").append(messageDiv);
          },
          error: function(xhr, status, error) {
              console.error('Error:', error);
          }
      });
    } catch (error) {
        console.error('Error:', error);
    }






  });

});