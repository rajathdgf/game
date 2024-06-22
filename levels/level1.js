// Initialize the code editor
let editor = ace.edit("codeEditor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

// Default code
editor.setValue(`// Write your code here\nconsole.log("Hello, World!");`);

document.getElementById('runCode').addEventListener('click', () => {
  let code = editor.getValue();
  try {
    let result = eval(code);
    document.getElementById('output').innerText = result;
  } catch (error) {
    document.getElementById('output').innerText = error;
  }
});
