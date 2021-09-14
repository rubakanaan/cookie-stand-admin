export default function CreateForm(props) {
    return (
        <form className="m-9 p-5 mx-auto w-3/4 my-7  rounded-lg  bg-green-300" onSubmit={props.onCreate}>
            <legend className="text-center my-3 text-xl font-semibold">Create Cookie Stand</legend>
            <label className="" >Location </label>
            <input name='location' className='w-11/12 ' />
            <div class="grid grid-cols-4 my-5 text-center gap-2 ">
                <div class=" rounded-lg bg-green-100">
                    <label >Minimum Customer per Hour </label>
                    <input name="minimumCustomerperHour" className="" />
                </div>
                <div class=" rounded-lg bg-green-100">
                    <label >Maximum Customer per Hour </label>
                    <input name='maximumCustomerperHour' className="" />
                </div>
                <div class="rounded-lg bg-green-100">
                    <label >Average Cookies per sale </label>
                    <input name='averageCookiespersale' className="" />
                </div>
                <div class=" ">
                    <button className="w-64 h-20 bg-green-500 text-black-50 rounded-lg">Create</button>
                </div>
            </div>
        </form>

    )
}