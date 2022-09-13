function refreshQuote() {
    // var host = "http://127.0.0.1:3000"
    var host = "https://parthiv-mangukiya-website-backend.vercel.app"
    $("#refresh").disabled = true
    $("#refresh").removeClass("fa-refresh")
    $("#refresh").addClass("fa-spinner")
    $.get(`${host}/quote`, data => {
        $("#refresh").removeClass("fa-spinner")
        $("#refresh").addClass("fa-refresh")
        $("#quoteSpan").html(data)
        $("#refresh").disabled = false
    });
}