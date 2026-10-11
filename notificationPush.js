const deviceTabs = document.querySelectorAll(".device-tab");

    const devicePreviews = {
        browser: document.getElementById("browserPreview"),
        android: document.getElementById("androidPreview"),
        ios: document.getElementById("iosPreview")
    };

    deviceTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const selectedDevice = tab.dataset.device;

            deviceTabs.forEach((item) => {
                item.classList.remove("bg-[#4F00E8]", "text-white");
                item.classList.add("bg-[#071A25]", "text-gray-300");
            });

            tab.classList.remove("bg-[#071A25]", "text-gray-300");
            tab.classList.add("bg-[#4F00E8]", "text-white");

            Object.entries(devicePreviews).forEach(([device, preview]) => {
                preview.classList.toggle("hidden", device !== selectedDevice);
            });
        });
    });