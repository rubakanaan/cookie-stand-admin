import React, { useState, useEffect } from 'react';
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'
import useResource from '../hooks/useResource'
import Footer from './Footer'
import { hours } from "../data";
export default function CookieStandAdmin() {
  const { resources, loading, createResource, deleteResource } = useResource();

  const [reports, setCookieData] = useState([]);
  const [totals, setTotals] = useState()
  const [hourlyTotals, SetHourlyTotal] = useState()
 

  function onCreate(event) {
    event.preventDefault();
    let numberOfCookie = []
    let total = 0
    for (let i = 0; i < 14; i++) {
      let customer = getRandomInt(parseInt(event.target.minimumCustomerperHour.value), parseInt(event.target.maximumCustomerperHour.value));
      let cookie = Math.ceil(customer * parseInt(event.target.averageCookiespersale.value));
      numberOfCookie.push(cookie);
      total = total + cookie;
    }

    const reports = {
      location: event.target.location.value,
      minCustomerPerHour: event.target.minimumCustomerperHour.value,
      maxCustomerPerHour: event.target.maximumCustomerperHour.value,
      avgCookiePerSale: event.target.averageCookiespersale.value,
      hourly_sales: numberOfCookie,
      total: total
    }
    createResource(reports);
    setCookieData(data => [...data, reports]);

  }


  const sumtotals = () => {
    let sumtotal = 0
    reports.map(report => {
      report.hourly_sales.map(sale => {
        sumtotal += sale
      })
    })
    setTotals(sumtotal)
  }


  useEffect(() => {
    sumtotals()
  }, [reports])


  function hourlyTotal() {
    let hourly_totals = [];
    for (let i = 0; i < 14; i++) {
      let hour_totals = 0;
      for (let j = 0; j < reports.length; j++) {
        hour_totals += reports[j].hourly_sales[i];
      }
      hourly_totals.push(hour_totals);
    }
    SetHourlyTotal(hourly_totals)
  }

  useEffect(() => {
    hourlyTotal()
  }, [reports])

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };



  return (
    <div className="bg-green-50 ">

      <main className="">
        <CreateForm onCreate={onCreate}
        />

        <ReportTable
          hours={hours}
          reports={reports}
          totals={totals}
          hourlyTotals={hourlyTotals}
          onDelete={deleteResource}
          stands={resources} 
          loading={loading} 
        />
        <Footer
          reports={reports}
        />
      </main>

    </div>
  )




}