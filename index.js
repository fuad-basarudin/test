const axios = require("axios")
const urls = ["https://rhina18.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 100 * 1000);
