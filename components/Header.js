import Link from 'next/link'
import { useAuth } from "../auth"
export default function Header(props) {
    const { user, logout } = useAuth();
    return (
        <header className="grid grid-cols-2 p-4 bg-green-500 text-black-50">
            <div className="text-3xl font-semibold">
                {props.title}
            </div>

            <div className="flex justify-end gap-2">
                {user && (
                    <>
                        <button onClick={logout} className="w-20 h-6 text-center bg-green-700 rounded ">{user.username }Logout</button>
                    </>
               )}
            <Link href="/Overview" >
                <a className="w-20 h-6 text-center bg-green-100 rounded ">Overview</a>
            </Link>
            </div>
        </header>
    )
}