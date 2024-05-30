document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm") as HTMLFormElement;
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const userName = (document.getElementById("username") as HTMLInputElement).value;
        const userPassword = (document.getElementById("password") as HTMLInputElement).value;
        const user = {
            username: userName,
            password: 123
        };
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        console.log(data);
        if (data) {
            window.location.href = "http://localhost:5500/agri.html";
        } else {
            alert("Invalid username or password");
        }
        
        
    });
});
