import '../styles/Banner.css'

function BannerView({name}) {
    return <div className='fh-banner'>
        <h1 className='fh-title'>{name}</h1>
    </div>
}

export default BannerView;