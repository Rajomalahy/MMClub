import rhombus from '../../assets/rhombus.png'
import mer from '../../assets/mer.jpg'
import soleil from '../../assets/soleil.jpg'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import x from '../../assets/x.png'

import {Link} from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/effect-cards"
import "swiper/css" // styles de base
import "swiper/css/navigation"// les flèches
import "swiper/css/pagination" //les bullets

import { Navigation, Pagination, Autoplay} from "swiper/modules"

export default function Voyages(){
    return(
            <>
                <section className='mt-32'>
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
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            className="rounded-lg"
                        >
                            <SwiperSlide>
                                <a href='/detailvoyage'>
                                    <div className=" bg-[url(/voyage1.jpg)] bg-cover bg-center h-80 w-60 rounded-lg">
                                        <div className="p-4">
                                            <p className="text-white">Voyage à</p>
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
                                </a>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-[url(/voyage2.jpg)] bg-cover bg-center h-80 w-60 rounded-lg">

                                    <div className="p-4">
                                        <p className="text-sm text-white">Voyage à</p>
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
                                        <p className="text-sm text-white">Voyage à</p>
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
                                        <p className="text-sm text-white">Voyage à</p>
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
                                        <p className="text-sm text-white">Voyage à</p>
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
                                        <p className="text-sm text-white">Voyage à</p>
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
            </>
    )
}