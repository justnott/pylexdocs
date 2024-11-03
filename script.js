document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById('content');

    function loadContent() {
        const hash = window.location.hash.substring(1) || 'home';
        console.log(`Loading document: ${hash}.md`);
        
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `docs/${hash}.md`, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    contentDiv.innerHTML = marked(xhr.responseText);
                } else {
                    console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
                    contentDiv.innerHTML = '<h1>404 - Document Not Found</h1>';
                }
            }
        };
        xhr.onerror = function() {
            console.error('Network error');
            contentDiv.innerHTML = '<h1>404 - Document Not Found</h1>';
        };
        xhr.send();
    }

    window.addEventListener('hashchange', loadContent);
    loadContent();
});