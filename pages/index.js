import Head from 'next/head'
import React, { useState } from 'react';
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import Footer from '../components/Footer'
import { hours } from "../data";
export default function Home() {

  const [reports, setCookieData] = useState([]);
  function onCreate(event) {
    event.preventDefault();

    const reports = {
      location: event.target.location.value,
      minCustomerPerHour: event.target.minimumCustomerperHour.value,
      maxCustomerPerHour: event.target.maximumCustomerperHour.value,
      avgCookiePerSale: event.target.averageCookiespersale.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    }

    setCookieData(data => [...data, reports])


  }


  return (
    <div className="bg-green-50 ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Cookie Stand Admin" />
      <main className="">
        <CreateForm onCreate={onCreate}
        />
        <ReportTable
          hours={hours}
          reports={reports}
        />
        <Footer
          reports={reports}
        />
      </main>

    </div>
  )
}
