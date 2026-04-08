const template = document.getElementById("alert-card-template");

async function fetchServiceAlerts() {
    const response = await fetch('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fmnr-alerts.json');
    const data = await response.json();
    
    for (const item of data.entity) {
        console.log(`Alert: ${item.alert.header_text.translation[0].text}`);

        const clone = template.content.cloneNode(true);
        clone.querySelector(".alert-content").textContent = item.alert.header_text.translation[0].text;
        document.querySelector(".alert-container").appendChild(clone);
    }
}
fetchServiceAlerts();