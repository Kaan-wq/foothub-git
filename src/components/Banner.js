import '../styles/Banner.css'

function Banner({ children }) {
    return <div className='fh-banner'>
        <h1 className='fh-title'>{children}</h1>
    </div>
}

export default Banner