var content = [
  "![image](https://cloud.githubusercontent.com/assets/389021/16107646/9729e556-33d8-11e6-933f-5b09fa3a53bb.png)",
  "# Heading 1",
  "## Heading 2",
  "### Heading 3",
  "#### Heading 4",
  "##### Heading 5",
  "###### Heading 6",
  "    code block",
  "```js",
  'console.log("fenced code block");',
  "```",
  "<pre>**HTML block**</pre>",
  "* list",
  "    * list indented",
  "1. ordered",
  "2. list",
  "    1. ordered list",
  "    2. indented",
  "",
  "- [ ] task",
  "- [x] list completed",
  "",
  "[link](https://nhn.github.io/tui.editor/)",
  "> block quote",
  "---",
  "horizontal line",
  "***",
  '`code`, *italic*, **bold**, ~~strikethrough~~, <span style="color:#e11d21">Red color</span>',
  "|table|head|",
  "|---|---|",
  "|table|body|"
].join("\n");

$("#editSection").tuiEditor({
  height: "300px",
  initialValue: content
});
