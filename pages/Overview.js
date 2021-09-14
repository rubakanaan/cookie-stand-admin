import Link from 'next/link'

export default function Overview(props) {
    return (
        <div  className="p-4 mt-8 text-3xl rounded-lg 	bg-green-500 text-black-50">       
        <Link href="/"><a>Return to Main page</a></Link>

        </div>
    )
}