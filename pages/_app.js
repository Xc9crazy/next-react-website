import Layout from  '@/styles/globals.css'

function Myapp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
      </Layout>
  )
}  
export default Myapp
