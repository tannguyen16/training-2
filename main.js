$(function() {
  const prevBtn = $('#prev-btn');
  const nextBtn = $('#next-btn');
  const carousel = $('#carousel-container');
  let leftItemIndex;
  let rightItemIndex;
  const items = carousel.find('.item');
  console.log("TCL: items", items)

  items.each(function(index, item) {
    if(index < 2 ) {
      $(item).css('left', '-360px');
    } else if(index > 4 ) {
      $(item).css('left', '1080px');
    } else {
      $(item).css('left', 360 * (index - 2));
    }

    leftItemIndex = 2;
    rightItemIndex = 4;
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

    console.log(itemsToAnimate);

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
    const itemsToAnimate = [];
    const indices = [];

    let startPoint = rightItemIndex;
    itemsToAnimate.push(items[startPoint]);
    indices.push(startPoint);
    for(let i = 0; i < 3; i++) {
      startPoint = (startPoint - 1) % items.length;
      if (startPoint === -1) startPoint = items.length - 1;
      itemsToAnimate.push(items[startPoint]);
      indices.push(startPoint); 
    }

    $(itemsToAnimate[itemsToAnimate.length - 1]).css('left', '-360px');

    $(itemsToAnimate).animate({
      left: '+=360',
    }, 250, function() {
      // do something at the end here

    });

    rightItemIndex = indices[1];
    leftItemIndex = indices[indices.length - 1];
  });
});