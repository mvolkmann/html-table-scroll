'use strict';
/*global $: false */

function loadTable() {
  var col, colCount = 20, row, rowCount = 40;
  var headRow = $('#t1 > thead > tr');
  var body = $('#t2 > tbody');

  for (col = 0; col < colCount; col++) {
    var th = headRow.append('<th><div>column ' + col + '</div></th>');
  }

  for (row = 0; row < rowCount; row++) {
    var bodyRow = body.append('<tr>');
    for (col = 0; col < colCount; col++) {
      var td = bodyRow.append(
        '<td><div>cell ' + row + ', ' + col + '</div></td>');
    }
  }
}

$(function () {
  loadTable();

  var t1 = $('#t1');
  var t2 = $('#t2');
  t2.on('scroll', function () {
    t1[0].scrollLeft = t2[0].scrollLeft;
  });
});
