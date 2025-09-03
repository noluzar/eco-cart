import Navbar from '../components/Navbar'
import ImageGrid from '../components/ImageGrid'
import ProductInfo from '../components/ProductInfo'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex gap-20 p-4'>
            <ImageGrid/>
            <ProductInfo/>
        </div>
    </div>
  )
}

export default MainLayout