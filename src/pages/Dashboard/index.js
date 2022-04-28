import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

export default function Dashboard(){
    const {signout } = useContext(AuthContext);

    return(
        <div>
            <h1>DashBoard</h1>
            <button onClick={()=> signout()}>Logout</button>
        </div>
    )

}