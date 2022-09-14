import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    {/* For rendering portal in notifications */}
                    <div id="notifications"></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument