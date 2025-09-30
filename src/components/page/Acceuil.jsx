import address from '../../assets/address.png'

export default function Acceuil(){
    return(
        <>
            <section>
                <div className='bg-[url(/section1.jpg)] w-full h-120 bg-cover bg-center'>
                     <div className="p-36 text-left text-[#FBFBFB]">

                        <h1 className='text-2xl font-bold'>MMClub</h1>
                        <p className="text-lg ">Decouvrez les plus pertinents voyages et 
                        des lieux paradisiaques en famille, amis...</p>

                        <div className="bg-[#FBFBFB] text-black shadow-2xl rounded-xl mt-44">
                            <div className="bg-[#82CEF9] p-4 rounded-tl-xl rounded-tr-xl">
                                <ul className="flex gap-6 text-sm text-[#FBFBFB] font-light">
                                    <li>TOLIARA</li>
                                    <li>ISALO</li>
                                    <li>RANOMAFANA</li>
                                    <li>SAINTE MARIE</li>
                                    <li>AMBALAVAO</li>
                                    <li>MANAKARA</li>
                                </ul>
                            </div>
                            <div className="p-6">
                                <div className="float-right gap-4 flex">
                                    <input type="date" name="" className="border-2 border-[#06668C] rounded-lg p-2" id="" />
                                    <input type="date" name="" className="border-2 border-[#06668C] rounded-lg p-2" id="" />
                                </div>
                                <div className='mt-8 flex gap-5'>

                                    <div className='flex items-center justify-center gap-3 border-2 border-[#06668C] rounded-lg p-2 w-56'>
                                        <img src={address} className='w-6 h-6' alt="" />
                                        <p className='font-bold text-sm'>FIANARANTSOA</p>
                                    </div>

                                    <div className='flex items-center justify-center gap-3 border-2 border-[#06668C] rounded-lg p-2 w-56'>
                                        <img src={address} className='w-6 h-6' alt="" />
                                        <p className='font-bold text-sm'>ANYWHERE</p>
                                    </div>

                                </div>
                                <div className='flex justify-end m-2'>
                                    <button className="bg-amber-600 text-[#FBFBFB] rounded-lg text-sm p-2 w-32 font-bold "><a href="">RESERVER</a></button>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>                
            </section>
        </>
    )
}