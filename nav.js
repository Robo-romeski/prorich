                   var scroll_start = 0;
                var startchange = $('#startchange');
                var offset = startchange.offset();
                    if (startchange.length){
                $(document).scroll(function() { 
                    scroll_start = $(this).scrollTop();
                    if(scroll_start > offset.top) {
                          //$(".navbar-default").css('background-color', '#000000');
                          $('.navbar-default').css('background-color', 'rgba(255,255,255,0.8)');
                       } else {
                          //$('.navbar-default').css('background-color', 'rgba(255,255,255,0.8)');
                          $('.navbar-default').css('font-color', '#ffffff');
                       }
                   });
                    }

                    function divScroll (id){
                      id = id.replace("link", "");

                      $('html , body').delay(200).animate({
                        scrollTop: $('#'+id).offset().top},
                         'slow');
                    }

                    $('#bs-example-navbar-collapse-1 > ul > li > a').click(function(event) {
                     event.preventDefault();

                     divScroll($(this).attr('id'));
                    });

                    $('#topper').click(function(event) {
                      $(window).scrollTop(0);
                    });
               