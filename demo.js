'use strict';
/*global $: false, document: false */

function loadTable() {
  var bodyRow, col, colCount = 20, row, rowCount = 40;
  var headRow = $('#t1 > thead > tr');
  var body = $('#t2 > tbody');

  for (col = 0; col < colCount; col++) {
    headRow.append('<th><div>column ' + col + '</div></th>');
  }

  for (row = 0; row < rowCount; row++) {
    bodyRow = body.append('<tr>');
    for (col = 0; col < colCount; col++) {
      bodyRow.append('<td><div>cell ' + row + ', ' + col + '</div></td>');
    }
  }
}

$(function () {
  loadTable();

  var t1 = document.getElementById('t1');
  var t2 = document.getElementById('t2');
  t2.addEventListener('scroll', function () {
    t1.scrollLeft = t2.scrollLeft;
  });
});
