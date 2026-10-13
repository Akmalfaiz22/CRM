const brandBtn = {
    Organization: "organization.html",
    Members: "members.html",
    Profile: "setting.html",
    Preferences: "settingPreference.html",
    Notifications: "settingNotification.html"

};
Object.entries(brandBtn).forEach(([id, page]) => {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("click", () => {
            window.location.href = page;
        });
    }
});

const currentpasswordIcon = document.getElementById("currentPasswordIcon")
const newPasswordIcon = document.getElementById("newPasswordIcon")
const confirmPasswordIcon = document.getElementById("confirmPasswordIcon")

function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    const icon = button.querySelector("i");
    if (input.type === "password") {
         input.type = "text";
         icon.classList.remove("ri-eye-off-line");
         icon.classList.add("ri-eye-line");
         button.setAttribute("aria-label", "Hide password");
    } else {
        input.type = "password";
        icon.classList.remove("ri-eye-line");
        icon.classList.add("ri-eye-off-line");
        button.setAttribute("aria-label", "Show password");
    }
}

currentpasswordIcon.addEventListener("click", (e) => {
     togglePassword("currentPassword", e.currentTarget);
})

newPasswordIcon.addEventListener("click", (e) => {
     togglePassword('newPassword', e.currentTarget)
})

confirmPasswordIcon.addEventListener("click", (e) => {
     togglePassword('confirmPassword', e.currentTarget)
})