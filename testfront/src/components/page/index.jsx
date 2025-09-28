import address from '../../assets/address.png'
import rhombus from '../../assets/rhombus.png'
import photo4 from '../../assets/photo4.jpg'
import photo1 from '../../assets/photo1.jpg'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'
import plus from '../../assets/plus.png'
import loader from '../../assets/loader.png'
import cart from '../../assets/cart.png'
import mer from '../../assets/mer.jpg'
import soleil from '../../assets/soleil.jpg'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import x from '../../assets/x.png'
import car from '../../assets/car.png'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/effect-cards"
import "swiper/css" // styles de base
import "swiper/css/navigation"// les flèches
import "swiper/css/pagination" //les bullets

import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules"

export default function Index(){
    return(
        <div>
            <header className="">
                <div className="flex justify-around items-center shadow-lg p-4 ">
                    <div><h1 className="text-[#06668C] font-bold text-2xl">MMCluB</h1></div>
                    <div className="flex gap-24">
                        <a href="#" className="hover:text-[#06668C] focus:text-[#06668C]">Acceuil</a>
                        <a href="#" className="hover:text-[#06668C] focus:text-[#06668C]">Service</a>
                        <a href="#" className="hover:text-[#06668C] focus:text-[#06668C]">Photos</a>
                    </div>
                    <div className="flex gap-8">
                        <button className="border-2 border-[#06668C] rounded-full text-[#06668C] font-bold p-1.5 w-32"><a href="/app">Connexion</a></button>
                        <button className="bg-[#06668C] text-white font-bold rounded-full p-1.5 w-32"><a href="" >S'incrire</a></button>
                    </div>
                </div>
            </header>
            <main>
                <section>
                   <div className='bg-[url(/section1.jpg)] w-full h-120 bg-cover bg-center'>
                        {/* <h1 className='text-center p-8 text-[#FBFBFB] text-lg'>MMClub</h1> */}
                   </div>
                </section>

                <section className='mt-10'>
                    <div className='p-8'>
                        <h2 className='text-[#06668C] font-bold text-xl'>VOYAGES LES PLUS PRISES</h2>
                        <p className='font-light'>Séjour de détente et de découverte sur l'île de Madagascar</p>
                    </div>

                    <div className="w-full max-w-7xl mx-auto">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={5}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2000 }}
                            loop={true}
                            className="rounded-lg"
                        >
                            <SwiperSlide>
                            <div className="bg-[url(/voyage1.jpg)] bg-cover bg-center h-80 w-60 rounded-lg">
                                <div className="p-4">
                                    <h3 className="text-sm text-white ">Voyage à</h3>
                                    <p className="text-white text-xl font-bold">Dubaï</p>
                                </div>
                                <div className='mt-32 float-right p-4 text-right'>
                                    <button className='bg-[#FF5A26] rounded-full text-white font-bold w-16'>-37%</button>
                                    <p className='text-white font-bold text-xl'>100 000 Ar</p>
                                    <div className='flex items-center gap-1'>
                                        <img src={rhombus} className='w-3 h-3' alt="" />
                                        <small className='text-white'>Prix prime par nuit</small>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className="bg-[url(/voyage2.jpg)] bg-cover bg-center h-80 w-60 rounded-lg">

                                <div className="p-4">
                                    <h3 className="text-sm text-white">Voyage à</h3>
                                    <p className="text-white text-xl font-bold">Francfort</p>
                                </div>
                                <div className='mt-32 float-right p-4 text-right'>
                                    <button className='bg-[#FF5A26] rounded-full text-white font-bold w-16'>-37%</button>
                                    <p className='text-white font-bold text-xl'>100 000 Ar</p>
                                    <div className='flex items-center gap-1'>
                                        <img src={rhombus} className='w-3 h-3' alt="" />
                                        <small className='text-white'>Prix prime par nuit</small>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-[url(/voyage3.jpg)] bg-cover bg-center h-80 w-60 rounded-lg">

                                    <div className="p-4">
                                        <h3 className="text-sm text-white">Voyage à</h3>
                                        <p className="text-white text-xl font-bold">Rome</p>
                                    </div>
                                    <div className='mt-32 float-right p-4 text-right'>
                                        <button className='bg-[#FF5A26] rounded-full text-white font-bold w-16'>-37%</button>
                                        <p className='text-white font-bold text-xl'>100 000 Ar</p>
                                        <div className='flex items-center gap-1'>
                                            <img src={rhombus} className='w-3 h-3' alt="" />
                                            <small className='text-white'>Prix prime par nuit</small>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-[url(/voyage4.jpg)] bg-cover bg-center h-80 w-60 rounded-lg">

                                    <div className="p-4">
                                        <h3 className="text-sm text-white">Voyage à</h3>
                                        <p className="text-white text-xl font-bold">Londres</p>
                                    </div>
                                    <div className='mt-32 float-right p-4 text-right'>
                                        <button className='bg-[#FF5A26] rounded-full text-white font-bold w-16'>-37%</button>
                                        <p className='text-white font-bold text-xl'>100 000 Ar</p>
                                        <div className='flex items-center gap-1'>
                                            <img src={rhombus} className='w-3 h-3' alt="" />
                                            <small className='text-white'>Prix prime par nuit</small>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-[url(/voyage5.jpg)] bg-cover bg-center h-80 w-60 rounded-lg">

                                    <div className="p-4">
                                        <h3 className="text-sm text-white">Voyage à</h3>
                                        <p className="text-white text-xl font-bold">Allemagne</p>
                                    </div>
                                    <div className='mt-32 float-right p-4 text-right'>
                                        <button className='bg-[#FF5A26] rounded-full text-white font-bold w-16'>-37%</button>
                                        <p className='text-white font-bold text-xl'>100 000 Ar</p>
                                        <div className='flex items-center gap-1'>
                                            <img src={rhombus} className='w-3 h-3' alt="" />
                                            <small className='text-white'>Prix prime par nuit</small>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-[url(/test.jpg)] bg-cover bg-center h-80 w-60 rounded-lg">

                                    <div className="p-4">
                                        <h3 className="text-sm text-white">Voyage à</h3>
                                        <p className="text-white text-xl font-bold">Paris</p>
                                    </div>
                                    <div className='mt-32 float-right p-4 text-right'>
                                        <button className='bg-[#FF5A26] rounded-full text-white font-bold w-16'>-37%</button>
                                        <p className='text-white font-bold text-xl'>100 000 Ar</p>
                                        <div className='flex items-center gap-1'>
                                            <img src={rhombus} className='w-3 h-3' alt="" />
                                            <small className='text-white'>Prix prime par nuit</small>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </section>

                <section className='m-16'>
                    <div className='flex gap-16'>

                        <div className='bg-[#D4F0FF]'>
                            <img src={mer} className='h-55 w-lg object-cover' alt="" />
                            <div className='m-6'>
                                <p className='font-bold text-center'>Partez à la découverte de l'inattendu</p>
                                <p className='font-bold text-center'>Veuillez vous inscrire pour reserver</p>
                                <button className='mt-2 ml-40 bg-[#06668C] text-[#FBFBFB] p-1 w-32 rounded-lg font-bold'>S'inscrire</button>
                            </div>
                        </div>

                        <div className='bg-[#D4F0FF]'>
                            <img src={soleil} className='h-50 w-2xl object-cover' alt="" />
                            <div className='m-4'>
                                <p className='font-bold text-center'>Etes vous un voyageur spontané? Trouvez des offres incroyables <br/> de bilets d'avion et des réductions sur les vols de dernières <br/> minute</p>
                                <div className='flex bg-[#FBFBFB] float-right p-1'>
                                    <img src={instagram} className='w-8 h-8' alt="" />
                                    <img src={facebook} className='w-8 h-8' alt="" />
                                    <img src={x} className='w-8 h-8' alt="" />
                                    <img src={twitter} className='w-8 h-8' alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

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

                <section className='m-10 mt-10'>
                    <h4 className='text-lg'>Voyages + Hotel : une vacance parfaite</h4>
                    <div className='flex gap-14 mt-10'>
                        <div className='border-2 border-[#06668C] p-6 w-lg'>
                            <img src={car} className='' alt="" />
                            <p className='text-sm font-light text-center'>Etes vous un voyageur spontané? Trouvez des offres incroyables de bilets d'avion 
                                et des réductions sur les vols de dernières minute
                            </p>
                        </div>
                        <div className='border-2 border-[#06668C] p-6 w-lg'>
                            <img src={car} alt="" />
                            <p className='text-sm font-light text-center'>Etes vous un voyageur spontané? Trouvez des offres incroyables de bilets d'avion 
                                et des réductions sur les vols de dernières minute
                            </p>
                        </div>
                        <div className='border-2 border-[#06668C] p-6 w-lg'>
                            <img src={car} alt="" />
                            <p className='text-sm font-light text-center'>Etes vous un voyageur spontané? Trouvez des offres incroyables de bilets d'avion 
                                et des réductions sur les vols de dernières minute
                            </p>
                        </div>
                        <div className='border-2 border-[#06668C] p-6 w-lg'>
                            <img src={car} alt="" />
                            <p className='text-sm font-light text-center'>Etes vous un voyageur spontané? Trouvez des offres incroyables de bilets d'avion 
                                et des réductions sur les vols de dernières minute
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer></footer>
        </div>
    )
}