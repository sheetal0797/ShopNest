import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
      <MainCrosel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's shoes"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's shirt"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"women's saree"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"women's dress"} />
      </div>
    </div>
  )
}

export default HomePage