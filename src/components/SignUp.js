import React from "react";

function SignUp(){
    const [form, setForm] = React.useState({
        email: "", password: "", confirmPassword: "", news: false
    });

    function handleChange(event){
        const {name, value, type, checked} = event.target;
        setForm( prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        
        if(form.password !== form.confirmPassword){
            window.alert("passwords not match");
            return
        }
        
        console.log("succesfull sign up");

        if(form.news) console.log("Thx for suscribing");
    }

    

    return(
        <form className="SignUp" onSubmit={handleSubmit}>
            <input 
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
            />
            <input 
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={form.password}
            />
            <input 
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={form.confirmPassword}
            />
            <div>
                <input 
                    type="checkbox"
                    name="news"
                    onChange={handleChange}
                    value={form.news}
                    id="news"
                />
                <label htmlFor="news">I want to join the newsletter</label>
            </div>

            <button>Submit</button>
        </form>
    );
}


export default SignUp;