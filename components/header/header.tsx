import './header.css'


export default function Header(){
    return(
        <header>
            <h2>Animated components</h2>
            <nav>
                <ul className='link-container'>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Github</a></li>
                </ul>
            </nav>
        </header>
    )
}