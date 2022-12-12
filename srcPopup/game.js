document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game').addEventListener('click', onclick, false)

    function onclick() {
        document.getElementById('bod').innerHTML = '' +
            '<h1>Pacman</h1>' +
            '<iframe src = "https://bward2.github.io/pacman-js/" width="320" height="480"></iframe>'
    }
})