import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>

                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}