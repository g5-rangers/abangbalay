import ROUTER from 'router'

export default {
    user: null,
    RegisteredUser: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        return user
    },
    register(email, password) {
        if (email == '' || password == '') {
            ROUTER.push("/createaccount")
            alert("Please fill up the input field")
        } else {
            this.RegisteredUser.push({
                Password: password,
                Email: email
            });
            // this.$swal.fire("Welcome, you are now registered", "success");
            ROUTER.push("/dashboard");
            alert("You are now registered")
            localStorage.setItem("Email", email);
            localStorage.setItem("Password", password);
        }
    },
    login(email, password) {
        if (email != "" || password != "") {
            for (let i = 0; i < this.RegisteredUser.length; i++) {
                if (this.RegisteredUser[i].Email === email && this.RegisteredUser[i].Password === password) {
                    // localStorage.setItem("Email", email);
                    // localStorage.setItem("Password", password);
                    // this.$swal.fire("Welcome, You are now Logged in", "success");
                    alert("You are now logged in")
                    ROUTER.push('/dashboard')
                    console.log(this.RegisteredUser[i]);
                    return this.RegisteredUser[i]
                } else {
                    // this.$swal.fire("Incorrect username or password!", "Please try again", "error");
                    alert("Incorrect username or password!")
                    ROUTER.push('/login')
                }
            }
        } else {
            // this.$swal.fire("Please fill up the input field", " ", "warning");
            alert("Please fill up the input field")
            ROUTER.push('/login')
        }

    },
    logout() {
        alert("You are now logged out.")
        this.user = null,
            localStorage.clear("Email");
        localStorage.clear("Password");
        ROUTER.push('/login')
    }
}