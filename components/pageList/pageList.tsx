import Image from "next/image"
import './pageList.css'

export default function PageList(){

    const pageItems = [
        {
            image: '/logos/logo.png',
            name:  'Hi',
            link: '/animation-carousel'
        },
        {
            image: '/logos/logo.png',
            name:  'Hi',
            link: '/animation-carousel'
        },
        {
            image: '/logos/logo.png',
            name:  'Hi',
            link: '/animation-carousel'
        },
    ]

    return(
        <div className="card-container">
            {pageItems.map((item, index)=>{
                return(
                    <div className="card" key={index}>
                        <a href={item.link}>
                        <Image className="card-image" src={item.image} alt={item.name} width={200} height={144}/>
                        <p className="card-text">{item.name}</p>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}