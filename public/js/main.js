function refreshQuote() {
    // var host = "http://127.0.0.1:3000"
    var host = "https://parthiv-mangukiya-website-backend.vercel.app"
    $.get(`${host}/quote`, data => {
        $("#quoteSpan").html(data)
    });
}