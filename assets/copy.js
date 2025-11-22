// Simple copy button for code blocks
document.addEventListener('DOMContentLoaded', function () {
  // find all pre > code blocks
  document.querySelectorAll('pre').forEach(function(pre) {
    // don't add twice
    if (pre.querySelector('.copy-btn')) return;

    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.innerText = 'Copy';
    btn.addEventListener('click', function() {
      var code = pre.querySelector('code');
      if (!code) return;
      var text = code.innerText;
      navigator.clipboard.writeText(text).then(function() {
        btn.innerText = 'Copied!';
        setTimeout(function(){ btn.innerText = 'Copy'; }, 1500);
      });
    });

    // place button top-right of pre
    pre.style.position = 'relative';
    btn.style.position = 'absolute';
    btn.style.top = '8px';
    btn.style.right = '8px';
    btn.style.padding = '4px 8px';
    btn.style.fontSize = '13px';
    btn.style.cursor = 'pointer';

    pre.appendChild(btn);
  });
});
