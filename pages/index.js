import { useAuth } from "../auth"
import CookieStandAdmin from '../components/CookieStandAdmin'
import Header from "../components/Header"
import Head from 'next/head'
import LoginForm from "../components/LoginForm"
export default function Home() {
  const { user, login, logout } = useAuth();

  return (
    <div className="bg-green-50 ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Cookie Stand Admin" />

      {user ? (
        <>
          <CookieStandAdmin />
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}

    </div>
  )
}
