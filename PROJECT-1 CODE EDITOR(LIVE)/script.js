function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}


// output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
// output.contentWindow.eval(jsCode);
// ```

// ### 1. `output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";`

// - `output`: This likely refers to an HTML element, such as an `<iframe>` or a `<div>`, stored in a variable named `output`.
// - `contentDocument`: This property is used to access the document inside the `output` element. For an `<iframe>`, it allows manipulation of the content inside the iframe.
// - `body`: This accesses the `<body>` element of the document inside `output`.
// - `innerHTML`: This property sets or gets the HTML content inside the element it's called on.

// So, `output.contentDocument.body.innerHTML` is setting the HTML content inside the `<body>` of the document inside `output`.

// - `htmlCode`: This variable presumably holds a string containing HTML code.
// - `"<style>"`: This is a string literal representing an opening `<style>` tag.
// - `cssCode`: This variable presumably holds a string containing CSS code.
// - `"</style>"`: This is a string literal representing a closing `</style>` tag.

// Therefore, the expression `htmlCode + "<style>" + cssCode + "</style>"` concatenates these strings together to form a complete HTML string that includes both the original `htmlCode`, the `<style>` tag, and `cssCode`. This effectively injects CSS styles into the HTML content.

// ### 2. `output.contentWindow.eval(jsCode);`

// - `contentWindow`: This property provides access to the `window` object of the document inside `output`. It allows execution of JavaScript code within that window context.
// - `eval(jsCode)`: The `eval()` function is used to evaluate or execute a string of JavaScript code passed to it as an argument (`jsCode` in this case).

// So, `output.contentWindow.eval(jsCode);` executes the JavaScript code contained in the `jsCode` variable within the context of the `output` element's embedded document.

// ### Summary:

// The entire sequence of code you provided accomplishes the following:

// 1. **HTML Injection**: Inserts the combined HTML (`htmlCode`) and CSS (`cssCode`) into the `<body>` of an element (`output`).
// 2. **JavaScript Execution**: Executes JavaScript (`jsCode`) within the context of the embedded document (`output`), allowing dynamic manipulation or functionality to be applied after the HTML and CSS have been rendered.

// This approach is often used in scenarios where you need to dynamically create, style, and manipulate content within an iframe or similar embedded document environment. However, using `eval()` for executing JavaScript should be done cautiously due to potential security risks if the `jsCode` originates from untrusted sources.