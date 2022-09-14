import Link from 'next/link'
import Logo from './logo'

import classes from './main-navigation.module.css'

const MainNavigation = () => {
    return <header className={classes.header}>
        <Link href="/">
            {/* We said to Link that this should be rendered as anchor tag , like this we can convert any element to anchor tag*/}
            <a>
                <Logo />
            </a>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation