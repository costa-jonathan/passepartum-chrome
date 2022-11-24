document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.feedback').addEventListener('click', onclick, false)

    function onclick() {
        document.getElementById('bod').innerHTML = '' +
            '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe8gyaUI19rbe5wbrZtwNFUiYO3VcpebFK29huEK5V7L3rpCw/viewform?embedded=true" width="300" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>'
    }
})