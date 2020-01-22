$(function() {
  const prevBtn = $('#prev-btn');
  const nextBtn = $('#next-btn');
  const carousel = $('#carousel-container');
  let leftItemIndex;
  let rightItemIndex;
  const items = carousel.find('.item');
  console.log("TCL: items", items)

  items.each(function(index, item) {
    if(index < 3) {
      $(item).css('left', 360 * index);
    } else {
      $(item).css('left', '1080px');
    }

    leftItemIndex = 0;
    rightItemIndex = 2;
  });

  nextBtn.on('click', function(event) {
    const itemsToAnimate = [];
    const indices = [];

    let startPoint = leftItemIndex;
    itemsToAnimate.push(items[startPoint]);
    indices.push(startPoint);
    for(let i = 0; i < 3; i++) {
      startPoint = (startPoint + 1) % items.length;
      itemsToAnimate.push(items[startPoint]);
      indices.push(startPoint);
    }

    $(itemsToAnimate[itemsToAnimate.length - 1]).css('left', '1080px');

    $(itemsToAnimate).animate({
      left: '-=360',
    }, 250, function() {
      // do something at the end here

    });

    leftItemIndex = indices[1];
    rightItemIndex = indices[indices.length - 1];
  });

  prevBtn.on('click', function(event) {
    carousel.find('.item').animate({
      left: '+=360',
    }, 1000, function() {
      // do something at the end here
    });
  });
});