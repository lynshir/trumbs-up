SystemJS.import('./bulid/compile.js').then(function (m) {
  console.log(m);
  var thumb = new m.Thumb()
  thumb.uploadJquery()
  $('#praise').clickThumb()
});
