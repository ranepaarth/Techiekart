import React from 'react'
import LoadingHeader from '../components/LoadingSkeleton/LoadingHeader'
import LoadingMain from '../components/LoadingSkeleton/LoadingMain'
import { useProductContext } from '../context/ProductContext'

const LoadingLayout = () => {
    const {isLoading}  = useProductContext()
  return (
    isLoading && <div className='h-screen'>
        <LoadingHeader />
        <LoadingMain />
    </div>
  )
}

export default LoadingLayout
