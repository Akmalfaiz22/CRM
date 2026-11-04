
    const githubTabs = document.querySelectorAll(".github-tab");

    githubTabs.forEach((tab) => {
        tab.addEventListener("click", () => {

            githubTabs.forEach((item) => {
                item.classList.remove(
                    "border-[#6D28D9]",
                    "bg-[#3B0764]",
                    "text-purple-200",
                    "shadow-[inset_0_0_12px_rgba(109,40,217,0.2)]"
                );

                item.classList.add(
                    "border-transparent",
                    "text-gray-300"
                );
            });

            tab.classList.remove(
                "border-transparent",
                "text-gray-300"
            );

            tab.classList.add(
                "border-[#6D28D9]",
                "bg-[#3B0764]",
                "text-purple-200",
                "shadow-[inset_0_0_12px_rgba(109,40,217,0.2)]"
            );

        });
    });

    
