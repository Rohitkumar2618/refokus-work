import React from 'react'
import Card from './Card'


const Cards = () => {
  return (
    <div className='w-full
    '>

    <div className='max-w-screen-xl mx-auto  py-20 flex gap-2'>

     {/* do blocks ko divide krne ke liye property lagayi width wali or vo pass kiya udr */}

              <Card width={"basis-1/3"} start={false} para={true}  />
              <Card width={"basis-2/3"} start={true} para={false} hover={"bg-violet-500"} />
    </div>
      
    </div>
  )
}

export default Cards