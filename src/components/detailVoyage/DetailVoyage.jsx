import key from '../../assets/key.png'
import email from '../../assets/email.png'
import user from '../../assets/user.png'
import phone from '../../assets/phone.png'
import calendar from '../../assets/calendar.png'
import localisation from '../../assets/localisation.png'

export default function DetailVoyage(){
    return(
        <>
            <section className="">
                <div className="bg-[url(/detail.jpg)] bg-cover bg-center w-full h-120 text-[#FBFBFB] text-center p-28">
                    <h1 className="text-3xl">Discover Top Hotels, Compare Deals, and Book Your Perfect Stay</h1>
                    <p className="font-light p-8">Navigation sur le Tsiribihina Tsingy au Bemaraha</p>
                </div>
            </section>

            <section>
                <div className="bg-black p-16 ">
                    <div className="flex gap-3 items-center ml-32">
                        <img src={calendar} className='w-6 h-6' alt="" />
                        <p className="text-[#FBFBFB]">Disponibilité : toute l'année</p>
                    </div><br/>

                    <div className="flex gap-3 items-center ml-32">
                        <img src={localisation} className='w-6 h-6' alt="" />
                        <p className="text-[#FBFBFB]">Fianarantsoa - Toliara</p>
                    </div>
                </div>
            </section>

            <section className=''>
                    <div className="bg-[#FBFBFB] shadow-xl w-sm -mt-96 float-right m-10">
                        <div className="bg-orange-700 text-center p-4">
                            <h1 className="text-[#FBFBFB] text-XL font-bold">PRIX</h1>
                        </div>

                        <div className='flex justify-center gap-3 bg-blue-200 p-6'>
                            <small>A partir de</small>
                            <p className='font-bold text-lg'>20.00$</p>
                        </div>

                        <div className='p-6'>
                            <label htmlFor="" className='flex gap-6 items-center justify-center p-2'>
                                <img src={user} className='w-6 h-6' alt="" />
                                <input type="text" className='border-2 border-orange-700 rounded-sm p-1' placeholder="Nom" name="" id="" />
                            </label>
                            
                            <label htmlFor="" className='flex gap-6 items-center justify-center  p-2'>
                                <img src={phone} className='w-6 h-6' alt="" />
                                <input type="number" className='border-2 border-orange-700 rounded-sm p-1' name="" id="" />
                            </label>

                            <label htmlFor="" className='flex gap-6 items-center justify-center  p-2'>
                                <img src={email} className='w-6 h-6' alt="" />
                                <input type="email" className='border-2 border-orange-700 rounded-sm p-1' placeholder="Email" name="" id="" />
                            </label>

                            <label htmlFor="" className='flex gap-6 items-center justify-center  p-2'>
                                <img src={key} className='w-6 h-6' alt="" />
                                <input type="password" className='border-2 border-orange-700 rounded-sm p-1' placeholder="Mot de passe" name="" id="" />
                            </label><br/>

                            <div className='flex justify-center'>
                                <button type="submit" className='bg-black text-[#FBFBFB] rounded-sm p-2 w-32'>S'inscrire</button>
                            </div>
                        </div>
                    </div>
            </section>

            <section className='mt-28'>
                <div>
                    <ul className='flex justify-around'>
                        <li><a href="" className='font-bold'>Itinéraire</a></li>
                        <li><a href="" className='font-bold'>Informations complémentaire</a></li>
                        <li><a href="" className='font-bold'>Bon à savoir</a></li>
                    </ul>
                </div>

                <div>
                    
                </div>
            </section>
        </>
    )
}