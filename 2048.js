  function slide(event) {
    var rowcount = $(".grid tr").length;
    var cellcount = $(".grid tr:first td").length;
    var arr = [2, 4];
    var i,j,k,m,x,y;
    var colorarray = ["darkgrey", "#ffd899", "#ffbf80", "#ffa54d", "#ff7e00", "#ff6600", "#ffe066", "#ffdb4d", "#ffd633", "#ffcc00"];
    if((event.which || event.keycode) === 37) { //keycode for left arrow
      for (i = 1; i <= rowcount; i++) { //rowindex
        for (j=1; j < cellcount; j++) { //colindex
          /*to shift the cell values if the previous cell is empty*/
          if ($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text() === "") {
              k = j + 1;
              while ($('.grid tr:nth-child(' + i + ') td:nth-child(' + k + ')').text() === "") {
                if (k !== cellcount) {
                  k++;
                } else {
                  break;
                }
              }
              if (k <= cellcount) {
                $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').html($('.grid tr:nth-child(' + i + ') td:nth-child(' + k + ')').text());
                $('.grid tr:nth-child(' + i + ') td:nth-child(' + k + ')').html("");
              }
          }
          /*add the adjacent cell values*/
          k = j + 1;
          while($('.grid tr:nth-child(' + i + ') td:nth-child(' + k + ')').text() === "") {
            if (k != cellcount) {
              k++;
            } else {
                break;
              }
          }
          if (k <= cellcount) {
            if ($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text() === $('.grid tr:nth-child(' + i + ') td:nth-child(' + k + ')').text()) {
              $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').html(parseInt($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text()) + parseInt($('.grid tr:nth-child(' + i + ') td:nth-child(' + k + ')').text()));
            //  $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').animate({0% {margin: 0%};100% {margin: 100%}; });
              $('.grid tr:nth-child(' + i + ') td:nth-child(' + k + ')').html("");
            }
          }
        }
      }
    generateRandomCells();
  }
    if ((event.which || event.keycode) === 38) { //keycode for up arrow
      for (j = 1; j <= cellcount; j++) { //column index
        for (i=1; i < rowcount; i++) { //row index
          /*to shift the cell values if the previous cell is empty*/
          if ($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text() === "") {
              x = i + 1;
              while ($('.grid tr:nth-child(' + x + ') td:nth-child(' + j + ')').text() === "") {
                if (x !== rowcount) {
                  x++;
                } else {
                  break;
                }
              }
              if (x <= rowcount) {
                $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').html($('.grid tr:nth-child(' + x + ') td:nth-child(' + j + ')').text());
                $('.grid tr:nth-child(' + x + ') td:nth-child(' + j + ')').html("");
              }
          }
          /*add the adjacent cell values*/
          x = i + 1;
          while($('.grid tr:nth-child(' + x + ') td:nth-child(' + j + ')').text() === "") {
            if (x !== rowcount) {
              x++;
            } else {
                break;
              }
          }
          if (x <= rowcount) {
            if ($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text() === $('.grid tr:nth-child(' + x + ') td:nth-child(' + j + ')').text()) {
              $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').html(parseInt($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text()) + parseInt($('.grid tr:nth-child(' + x + ') td:nth-child(' + j + ')').text()));
              $('.grid tr:nth-child(' + x + ') td:nth-child(' + j + ')').html("");
            }
          }
        }
      }
      generateRandomCells();
    }
    if((event.which || event.keycode) === 39) { //keycode for right arrow
      for (i = 1; i <= rowcount; i++) {
        for (j = cellcount; j > 1; j--) {
          if ($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text() === "") {
              m = j-1;
              while ($('.grid tr:nth-child(' + i + ') td:nth-child(' + m + ')').text() === "") {
                if (m !== 1) {
                  m--;
                } else {
                    break;
                }
              }
              if (m !== 0) {
                $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').html($('.grid tr:nth-child(' + i + ') td:nth-child(' + m + ')').text());
                $('.grid tr:nth-child(' + i + ') td:nth-child(' + m + ')').html("");
              }
          }
          m = j - 1;
          while($('.grid tr:nth-child(' + i + ') td:nth-child(' + m + ')').text() === "") {
            if (m !== 1) {
              m--;
            } else {
                break;
              }
          }
          if (m !== 0) {
            if ($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text() === $('.grid tr:nth-child(' + i + ') td:nth-child(' + m + ')').text()) {
              $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').html(parseInt($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text()) + parseInt($('.grid tr:nth-child(' + i + ') td:nth-child(' + m + ')').text()));
              $('.grid tr:nth-child(' + i + ') td:nth-child(' + m + ')').html("");
            }
          }
        }
      }
      generateRandomCells();
    }
    if((event.which || event.keycode) === 40) { //keycode for down arrow
      for (j = 1; j <= cellcount; j++) {
        for (i = rowcount; i > 1; i--) {
          if ($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text() === "") {
              y = i - 1;
              while ($('.grid tr:nth-child(' + y + ') td:nth-child(' + j + ')').text() === "") {
                if (y !== 1) {
                  y--;
                } else {
                    break;
                }
              }
              if (y !== 0) {
                $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').html($('.grid tr:nth-child(' + y + ') td:nth-child(' + j + ')').text());
                $('.grid tr:nth-child(' + y + ') td:nth-child(' + j + ')').html("");
              }
          }
          y = i - 1;
          while($('.grid tr:nth-child(' + y + ') td:nth-child(' + j + ')').text() === "") {
            if (y !== 1) {
              y--;
            } else {
                break;
              }
          }
          if (y !== 0) {
            if ($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text() === $('.grid tr:nth-child(' + y + ') td:nth-child(' + j + ')').text()) {
              $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').html(parseInt($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text()) + parseInt($('.grid tr:nth-child(' + y + ') td:nth-child(' + j + ')').text()));
              $('.grid tr:nth-child(' + y + ') td:nth-child(' + j + ')').html("");
            }
          }
        }
      }
      generateRandomCells();
    }
    function generateRandomCells() {
      var cellmin = 1;
      var cellmax = 16;
      var min = 0;
      var max = 1;
      var randomcell = Math.floor(Math.random() * (cellmax - cellmin + 1)) + cellmin;
      if ($('#cell' + randomcell + '').text() === "") {
        var cellvalue =  arr[Math.floor(Math.random() * (max - min + 1)) + min];
        $('#cell' + randomcell + '').html(cellvalue);
      }
      else {
        generateRandomCells();
      }
    }
    addcolor();
    function addcolor() {
      for (var i = 1; i <= rowcount; i++) {
        for (var j = 1; j <= cellcount; j++) {
          for (var p = 1; p <= 11; p++) {
            if (parseInt($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text()) === Math.pow(2,p)) {
              $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').css('backgroundColor', '' + colorarray[p-1] + '');
              $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').animate("slow");
            }
            if ($('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').text() === "") {
              $('.grid tr:nth-child(' + i + ') td:nth-child(' + j + ')').css('backgroundColor', 'lightgrey');
            }
          }
        }
      }
    }
  }
