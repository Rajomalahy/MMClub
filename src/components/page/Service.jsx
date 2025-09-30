import car from '../../assets/car.png'
import message from '../../assets/message.png'
import globe from '../../assets/globe.png'

export default function Service(){
    return(
        <>
                <section className='m-10 mt-10'>
                    <h4 className='text-lg'>Voyages + Hotel : une vacance parfaite</h4>
                    <div className='flex gap-16 mt-10'>
                        <div className='border-2 border-[#06668C] p-6 w-lg'>
                            <div className='flex justify-center'>
                                <img src={car} className='' alt="" />
                            </div>
                            <p className='text-sm font-light text-center mt-2'>Etes vous un voyageur spontané? Trouvez des offres incroyables de bilets d'avion 
                                et des réductions sur les vols de dernières minute
                            </p>
                        </div>
                        <div className='border-2 border-[#06668C] p-6 w-lg'>
                            <div className='flex justify-center'>
                                <img src={car} className='' alt="" />
                            </div>
                            <p className='text-sm font-light text-center mt-2'>Etes vous un voyageur spontané? Trouvez des offres incroyables de bilets d'avion 
                                et des réductions sur les vols de dernières minute
                            </p>
                        </div>
                        <div className='border-2 border-[#06668C] p-6 w-lg'>
                            <div className='flex justify-center'>
                                <img src={car} className='' alt="" />
                            </div>
                            <p className='text-sm font-light text-center mt-2'>Etes vous un voyageur spontané? Trouvez des offres incroyables de bilets d'avion 
                                et des réductions sur les vols de dernières minute
                            </p>
                        </div>
                        <div className='border-2 border-[#06668C] p-6 w-lg'>
                            <div className='flex justify-center'>
                                <img src={car} className='' alt="" />
                            </div>
                            <p className='text-sm font-light text-center mt-2'>Etes vous un voyageur spontané? Trouvez des offres incroyables de bilets d'avion 
                                et des réductions sur les vols de dernières minute
                            </p>
                        </div>
                    </div>                   
                </section>

                <section className='flex justify-center'>
                    <div className=' bg-[#06668C] text-[#FBFBFB] w-xs p-2'>
                        <p className='text-center'>lorem ipum lorem ipsum lorem</p>
                    </div>  
                </section>

                <section className='m-10 '>
                    <div className='flex justify-around items-center bg-[#06668C] rounded-lg p-3'>
                        <div className='bg-[#FBFBFB] rounded-full'>
                            <img src={message} className='w-10 h-10 m-3' alt="" />
                        </div>

                        <div>
                            <p className='text-[#FBFBFB]'>Débloquez l'accès à : <br/> Des code promo exclusifs</p>
                        </div>

                        <div>
                            <p className='text-[#FBFBFB]'>Des baisses de prix et des <br/> conseils de voyage</p>
                        </div>

                        <div className='bg-[#FBFBFB] rounded-full'>
                            <img src={globe} className='w-16 h-16' alt="" />
                        </div>
                    </div>
                </section>
        </>
    )
}