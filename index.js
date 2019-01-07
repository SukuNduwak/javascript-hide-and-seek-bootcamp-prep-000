function getFirstSelector(selector) {
  var selectorSelected = document.querySelectorAll(selector)[0];
  return selectorSelected;
}

function nestedTarget() {
  var elem = document.querySelector('#nested .target');
  return elem;
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < rankedList.length; i++) {
    linkValue = parseInt(rankedList[i], 10);
    linkValue += n;
    rankedList[i].innerHTML = linkValue;
  }
}

function deepestChild() {
  var deepestChild = document.querySelector('div#grand-node');
  
}
