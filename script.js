document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById('content');
    const fileInput = document.getElementById('fileInput');

    function loadContent() {
        const hash = window.location.hash.substring(1) || 'home';
        console.log(`Loading document: ${hash}.md`);

        const filePath = `docs/${hash}.md`;
        const file = new File([filePath], filePath, { type: "text/markdown" });

        const reader = new FileReader();
        reader.onload = function(event) {
            contentDiv.innerHTML = marked(event.target.result);
        };
        reader.onerror = function() {
            console.error('Error reading file');
            contentDiv.innerHTML = '<h1>404 - Document Not Found</h1>';
        };

        reader.readAsText(file);
    }

    window.addEventListener('hashchange', loadContent);
    loadContent();
});
