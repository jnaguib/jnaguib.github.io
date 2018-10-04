fun = () => {
      /// That code to generate random images /////////////////////
          var size = 12;
          var lst = [];

          for (var i = 0; i < size; i++){
              var k = i % 10;
              lst.push('https://picsum.photos/340/40' + k + '/?');
          }
      ////////////////////////////////////////////////////////////////


          // THIS IS THE MAIN CODE //
          // lst is the list of the image sources //
          for(i=0; i < lst.length; i++){
              var img = "<img src='" + lst[i] + "'>";
              $(".images").append(img);
          }

      }
      fun();
