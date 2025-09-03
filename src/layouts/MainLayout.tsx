import Navbar from '../components/Navbar'
import ImageGrid from '../components/ImageGrid'
import ProductInfo from '../components/ProductInfo'

const MainLayout = () => {
  return (
    <div className='bg-white shadow-2xl'>
        <Navbar/>
        <div className='flex gap-10 p-4'>
            <ImageGrid/>
            <ProductInfo/>
        </div>
    </div>
  )
}

export default MainLayout