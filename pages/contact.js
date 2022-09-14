import ContactForm from "../components/contact/contact-form"
import Head from 'next/head'

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Send me your message" />
            </Head>
            <ContactForm />
        </>
    )
}

export default ContactPage