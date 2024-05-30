document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm") as HTMLFormElement;

    registrationForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const userName = (document.getElementById("username") as HTMLInputElement).value.trim();
        const userEmail = (document.getElementById("email") as HTMLInputElement).value.trim();
        const userPassword = (document.getElementById("password") as HTMLInputElement).value.trim();

        // Validate input fields
        if (!userName || !userEmail || !userPassword) {
            alert("All fields are required");
            return;
        }

        if (userName.length < 3) {
            alert("Username must be at least 3 characters long.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(userEmail)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (userPassword.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        const user = {
            username: userName,
            email: userEmail,
            password: userPassword
        };

        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }

            const responseData = await response.json();
            console.log("User registered successfully:", responseData);
            alert("User registered successfully!");

        
            window.location.href = "./login.html";
        } catch (err) {
            console.error("Error registering user:", err);
            if (err instanceof Error) {
                alert("Error registering user: " + err.message);
            } else {
                alert("An unknown error occurred");
            }
        }
    });
});
