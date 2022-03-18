function viewcoub(coub_permalink) {
    $("#coubViewer").html("<iframe src='/embed/" + coub_permalink + "' width='98%' height='98%'>")
    $("#exampleModalCenter").modal("show")
}

function closeViewer() {
    $("#exampleModalCenter").modal("hide")
}

$("#exampleModalCenter").on('hidden.bs.modal', function () {
    $("#coubViewer").html("")
});