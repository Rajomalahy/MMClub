
import photo4 from '../../assets/photo4.jpg'
import photo1 from '../../assets/photo1.jpg'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'
import plus from '../../assets/plus.png'
import loader from '../../assets/loader.png'
import cart from '../../assets/cart.png'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/effect-cards"
import "swiper/css" // styles de base
import "swiper/css/navigation"// les flèches
import "swiper/css/pagination" //les bullets

import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules"

export default function Photo(){
    return(
        <>
                <section className='mt-16 m-8'>
                    <div className='flex items-center gap-3'>
                            <div>
                                <img src={loader} alt="" />
                            </div>
                            <div>
                                <h2 className='font-bold text-xl'>OFFRES DES PHOTOS</h2>
                                <p className='font-light'>Séjour de détente et de découverte sur l'île de Madagascar</p>
                            </div>
                    </div>

                    <div className='flex gap-6 mt-4'>
                        <div className=''>                       
                            <Swiper
                                modules={[EffectCards]}
                                effect='cards'
                                grabCursor={true}
                                cardsEffect={{
                                    perSlideOffset:30,
                                    perSlideRotate:0,
                                    slideShadows:false
                                }}
                                className='w-2xl h-96'
                            >
                                <SwiperSlide className='ml-16 mt-6 overflow-visible'>
                                    <img src={photo1} className='h-80 w-60 rounded-lg transform rotate-[-25deg]' alt="" />
                                </SwiperSlide>

                                <SwiperSlide className=''>
                                    <img src={photo2} className='h-80 w-60 rounded-lg ' alt="" />
                                </SwiperSlide>

                                <SwiperSlide className='ml-10 mt-6'>
                                    <img src={photo3} className='h-80 w-60 rounded-lg rotate-[45deg]' alt="" />
                                </SwiperSlide>
                            </Swiper>

                            <div className='flex justify-center m-2'> 
                                <button className='text-[#06668C] font-bold border-2 border-[#06668C] rounded-lg p-2 w-36 flex items-center justify-center gap-2'>
                                    VOIR PLUS
                                    <img src={plus} className='w-5 h-5' alt="" />
                                </button>
                            </div>
                        </div>

                        <div> 
                            <div className='bg-[#06668C] rounded-lg p-16'>
                                <h2 className='font-bold text-[#FBFBFB] text-xl'>MmCLUB</h2>

                                <img src={photo4} className='rounded-lg h-50 w-xl mt-4 object-cover' alt="" />

                                <p className='text-[#FBFBFB] text-sm mt-4'>Chaque photo proposée est une image unique, capturant un instant précis avec ses détails, ses couleurs et son atmosphère.</p>
                                
                                <button className='mt-2 float-right bg-[#FBFBFB] font-bold flex gap-2 items-center justify-center rounded-sm p-2'>
                                    Commander
                                    <img src={cart} className='w-5 h-5' alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}