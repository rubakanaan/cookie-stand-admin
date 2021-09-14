import Head from 'next/head'
import React, {useState} from 'react';

export default function Home() {
  const [cookieData, setCookieData] = useState([]);
  function formHandler(event){
    event.preventDefault();
    
    const cookieData = {
      location: event.target.location.value,
      minCustomerPerHour: event.target.minimumCustomerperHour.value,
      maxCustomerPerHour: event.target.maximumCustomerperHour.value,
      avgCookiePerSale: event.target.averageCookiespersale.value
    }

    setCookieData(data => [...data, cookieData])


  }



  return (
    <div className="bg-green-50 ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header title="Cookie Stand Admin" className="p-4 mt-8 text-3xl	font-semibold	bg-green-500 text-black-50">       
      Cookie Stand Admin
      </header>
   
      <main className=""> 

      
      <form className="mx-auto w-3/4 my-7  rounded-lg  bg-green-300" onSubmit={formHandler}>
      <legend className="text-center text-xl font-semibold	 	">Create Cookie Stand</legend>
        <label className="" >Location </label>
        <input name='location' className='w-11/12	'/>
        <div class="grid grid-cols-4 my-3">
        <label >Minimum Customer per Hour </label>
        <label >Maximum Customer per Hour </label>
        <label >Average Cookies per sale </label>
        
        </div>
        <div class="grid grid-cols-4 ">
        <input name="minimumCustomerperHour" className="w-48 h-5		" />
        <input name='maximumCustomerperHour' className="w-48 h-5		"/>  
        <input name='averageCookiespersale' className="w-48	h-5			"/> 
        <button className="px-10 py-5 mb-5 mr-8 bg-green-500 text-black-50">Create</button>    
        </div> 
      </form>
       <p className="mx-auto text-center	 text-gray-700">Report Table Coming Soon...</p>
       {cookieData && cookieData.map(cookieData => (        
                <p className="mx-auto text-center	my-4 text-gray-700">{`{"Location":"${cookieData.location}","minCustomers":"${cookieData.minCustomerPerHour}" ,"maxCustomers":"${cookieData.maxCustomerPerHour}","avgCookies":"${cookieData.avgCookiePerSale}"}`}</p>
              ))}
        </main>
        
      <footer className="p-4 mt-8 bg-green-500 text-black-50" >
        @2021
      </footer>
    </div>
  )
}
