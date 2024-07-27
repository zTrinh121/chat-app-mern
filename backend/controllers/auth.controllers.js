export const login = async (req, res) => {
    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;
    } catch (error) {
        
    }
}

export const logout = (req, res) => {
    console.log("Logout route");
}

export const singup = (req, res) => {
    console.log("Singup route");
}