const axios = require("axios")
const urls = ["https://mashter.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("KONTOOOL" + Date.now())).catch(() => {});
        })
    }, 100 * 1000);
