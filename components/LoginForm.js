import { useAuth } from "../auth"

export default function LoginForm(props) {
    const { login } = useAuth();
    function onLogin(event) {
        event.preventDefault();
        let username = event.target.username.value
        let password = event.target.password.value
        login(username, password)
    }

    return (

        <form onSubmit={onLogin} className="grid justify-center w-1/2 grid-rows-3 p-5 mx-auto font-semibold text-center bg-green-300 rounded-lg m-9 my-7">
            <div className="grid grid-rows-2 ">
                <label >Username</label>
                <input type="text" name="username"  required />
            </div>
            <div className="grid grid-rows-2 ">
                <label >Password</label>
                <input type="password" name="password" required />
            </div>
            <div>
                <button className="p-2 text-white bg-green-700 rounded ">Login</button>
            </div>



        </form>
    )
}
