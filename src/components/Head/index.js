import Head from 'next/head'
import Image from 'next/image'

function Meta(){
    return(
        <div>
            <Head>
                <title>Megaman X Quiz</title>
                <meta property="og:image" content="https://alura-megamanxquiz.lucassousa09.vercel.app/megaman.jpg"/>
            </Head>
        </div>
    )
}

export default Meta;
