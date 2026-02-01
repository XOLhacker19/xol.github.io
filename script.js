document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#f4f4f4', '#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
