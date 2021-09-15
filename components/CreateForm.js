export default function CreateForm(props) {
    return (
        <form className="w-3/4 p-5 mx-auto bg-green-200 border-2 border-green-500 border-solid rounded-lg m-9 my-7" onSubmit={props.onCreate}>
            <div className="grid grid-cols-2 gap-10 ">
                <div className="grid grid-rows-2 font-semibold text-center">
                    <label className="" >ADD LOCATION </label>
                    <input name='location' className='w-full ' required />
                </div>
                <button className="w-full bg-green-500 rounded-sm h-15 text-black-50">CREATE STAND</button>
            </div>
            <div class="grid grid-cols-3 my-5 text-center font-semibold gap-2 ">
                <div class=" rounded-lg ">
                    <label >MINIMUN CUSTOMERS PER HOUR </label>
                    <input name="minimumCustomerperHour" className="w-10/12" required />
                </div>
                <div class=" rounded-lg ">
                    <label >MAXIMUM COSTOMERS PER HOUR </label>
                    <input name='maximumCustomerperHour' className="w-10/12" required />
                </div>
                <div class="rounded-lg ">
                    <label >AVERAGE COOKIES PER SALE </label>
                    <input name='averageCookiespersale' className="w-10/12" required />
                </div>

            </div>
        </form>

    )
}