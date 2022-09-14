import Image from 'next/image'

import classes from './hero.module.css'

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/developer.jpg" alt="An image showing me" height={300} width={300} />
            </div>
            <h1>Hi I am Edy</h1>
            <p>I blog about web development</p>
        </section>
    )
}

export default Hero