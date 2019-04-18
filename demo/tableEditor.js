var content = [
  '| @cols=2:merged |',
  '| --- | --- |',
  '| table | table |'
].join('\n');

var editor = new tui.Editor({
  el: document.querySelector('#editSection'),
  previewStyle: 'vertical',
  height: '400px',
  initialValue: content,
  exts: ['table']
});
