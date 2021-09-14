import Link from 'next/link'
export default function Header(props) {
    return (
        <header  className="p-4   grid grid-cols-2 bg-green-500 text-black-50">  
        <div className="font-semibold text-3xl">   
        {props.title}
        </div>  
        <Link href= "/Overview" >
              <a className="justify-self-end w-20 h-6 text-center  rounded bg-green-100 ">Overview</a>
        </Link>
        </header>
    )
}