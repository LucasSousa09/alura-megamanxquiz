import Head from 'next/head'

function NextHead(){
    return(
        <div>
            <Head>
                <title>Megaman X Quiz</title>
                <meta property="og:image" content="https://alura-megamanxquiz.lucassousa09.vercel.app/megaman.jpg"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>
        </div>
    )
}

export default NextHead;
