import Head from 'next/head'
import Image from 'next/image'

function Meta(){
    return(
        <div>
            <Head>
                <title>Qualquer coisa</title>
                <meta property="og:image" content="/megaman.jpg"/>
            </Head>
        </div>
    )
}

export default Meta;
