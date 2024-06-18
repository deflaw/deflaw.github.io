function showCitation() {
    document.getElementById('citationPopup').style.display = 'block';
}

function closeCitation() {
    document.getElementById('citationPopup').style.display = 'none';
}

function copyCitation() {
    var citationText = document.getElementById('citationText').innerText;
    navigator.clipboard.writeText(citationText).then(function() {
        alert('引文已复制到剪贴板');
    }, function(err) {
        console.error('无法复制引文: ', err);
    });
}
