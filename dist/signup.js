"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const userName = document.getElementById("username").value.trim();
        const userEmail = document.getElementById("email").value.trim();
        const userPassword = document.getElementById("password").value.trim();
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
            const response = yield fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            const responseData = yield response.json();
            console.log("User registered successfully:", responseData);
            alert("User registered successfully!");
            window.location.href = "./login.html";
        }
        catch (err) {
            console.error("Error registering user:", err);
            if (err instanceof Error) {
                alert("Error registering user: " + err.message);
            }
            else {
                alert("An unknown error occurred");
            }
        }
    }));
});
