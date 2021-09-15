export default function CreateForm(props) {
    return (
        <form className="w-3/4 p-5 mx-auto bg-green-300 rounded-lg m-9 my-7" onSubmit={props.onCreate}>
            <legend className="my-3 text-xl font-semibold text-center">Create Cookie Stand</legend>
            <label className="" >Location </label>
            <input name='location' className='w-11/12 ' required />
            <div class="grid grid-cols-4 my-5 text-center gap-2 ">
                <div class=" rounded-lg bg-green-100">
                    <label >Minimum Customer per Hour </label>
                    <input name="minimumCustomerperHour" className="" required />
                </div>
                <div class=" rounded-lg bg-green-100">
                    <label >Maximum Customer per Hour </label>
                    <input name='maximumCustomerperHour' className="" required />
                </div>
                <div class="rounded-lg bg-green-100">
                    <label >Average Cookies per sale </label>
                    <input name='averageCookiespersale' className="" required />
                </div>
                <div class=" ">
                    <button className="w-64 h-20 bg-green-500 rounded-lg text-black-50">Create</button>
                </div>
            </div>
        </form>

    )
}