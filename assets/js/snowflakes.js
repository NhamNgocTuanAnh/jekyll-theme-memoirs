// tuyết mùa đông
document.addEventListener("DOMContentLoaded", function () {
    var currentMonth = new Date().getMonth();

    if (currentMonth === 11 || currentMonth === 0) {
        // Create a link element for the snowfall stylesheet
        var snowStylesheet = document.createElement("link");
        snowStylesheet.rel = "stylesheet";
        snowStylesheet.type = "text/css";
        snowStylesheet.href = "./assets/css/snow.css";
        document.head.appendChild(snowStylesheet);

        // Create a container for snowflakes
        var snowContainer = document.createElement("div");
        snowContainer.className = "snowflakes";
        snowContainer.setAttribute("aria-hidden", "true");

        // Generate 12 snowflakes
        for (var i = 0; i < 12; i++) {
            var snowflake = document.createElement("div");
            snowflake.className = "snowflake";

            var innerDiv = document.createElement("div");
            innerDiv.className = "inner";
            innerDiv.textContent = "❅";

            snowflake.appendChild(innerDiv);
            snowContainer.appendChild(snowflake);
        }

        // Append the snowflakes container to the body
        // document.body.appendChild(snowContainer);
        var snowCallElement = document.getElementById("snowCall");
        snowCallElement.innerHTML = snowContainer.outerHTML || document.body.appendChild(snowContainer);
    }
});

