function parseAndDisplayJson() {
    const jsonInput = document.getElementById('jsonInput').value;
    try {
        const jsonObj = JSON.parse(jsonInput);
        document.getElementById('jsonViewer').innerHTML = '';
        buildTree(jsonObj, document.getElementById('jsonViewer'), root);
    } catch (e) {
        document.getElementById('jsonViewer').innerHTML = '<p style="color: red;">Invalid JSON</p>'
    }
}