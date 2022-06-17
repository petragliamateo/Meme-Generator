export default function App(){
    const [formData, setFormData] = React.useState({
        firstName : "", lastName : "", email : "", comments : "", 
        isFriendly : true, employment : "", favColor : ""
    })
    
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData( prevData => ({
            ...prevData, 
            [name] : type == "checkbox" ? checked : value
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
        //submitToAPI(formData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" placeholder="First Name" name="firstName"
            onChange={handleChange} value={formData.firstName} 
            />
            <input 
            type="text" placeholder="Last Name" name="lastName"           
            onChange={handleChange} value={formData.lastName} 
            />
            <input 
            type="email" placeholder="Email" name="email"
            onChange={handleChange} value={formData.email} 
            />
            <textarea   
            name="comments" onChange={handleChange}
            value={formData.comments} 
            />

            <br></br>


            <input 
            type="checkbox" name="isFriendly"
            onChange={handleChange} value={formData.isFriendly}
            id="isFriendly" 
            />
            <label htmlFor="isFriendly">Is friendly?</label>

            <br></br>

            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio" id="unemployed" name="employment"
                    value="unemployed" onChange={handleChange}
                    checked={formData.employment === "unemployed"} 
                /> <label htmlFor="unemployed">Unemployed</label>
                <input 
                    type="radio" id="fullTime" name="employment"
                    value="fullTime" onChange={handleChange}
                    checked={formData.employment === "fullTime"} 
                /> <label htmlFor="fullTime">Full Time</label>
                <input 
                    type="radio" id="partTime" name="employment"
                    value="partTime" onChange={handleChange}
                    checked={formData.employment === "partTime"} 
                /> <label htmlFor="partTime">Part Time</label>
            </fieldset>
            
            <br></br>

            <label id="favColor">Favorite Color?</label>
            <select
                id="favColor" value={formData.favColor}
                onChange={handleChange} name="favColor"
            >
                <option value="">-Choose color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>

            <br></br>

            <button>Submit</button>

        </form>
    )
}