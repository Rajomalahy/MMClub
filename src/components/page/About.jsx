import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import x from '../../assets/x.png'
import googleplay from '../../assets/googleplay.png'
import mac from '../../assets/mac.png'

export default function About(){
    return(
        <>
            <section className='bg-[#09445c]'>
                <div className='text-[#FBFBFB] text-center p-10 '>
                    <h4 className='text-xl p-4'>MmCLUB</h4>
                    <p className='text-sm'>
                        Quand renonceras-tu à ces folles cupidités et à ces vains désirs qui 
                        te font souhaiter des créatures animées ou inanimées pour <br/> contenter tes 
                        passions,du temps pour en jouir davantage, des lieux et des pays mieux 
                        situés, un air plus pur,et des hommes plus sociables ?<br/>  Quand seras-tu 
                        pleinement satisfaite de ton état ? Quand trouveras-tu ton plaisir dans toutes 
                        les choses qui t’arrivent ?<br/> Quand seras-tu persuadée que tu as tout en toi ? » 
                        Ces lignes sont issues des Pensées de Marc Aurèle qui ont été écrites entre 
                        170 et 180 de notre ère.<br/> Ne sont-elles pas d’actualité ? En effet, nous nous 
                        posons toujours aujourd’hui les mêmes questions sur nos capacités à nous 
                        comprendre, nous faire évoluer et nous changer. 
                    </p>
                </div>

                <div className='flex items-center justify-around gap-6 p-10'>
                    <div>
                        <p className='text-[#FBFBFB] text-sm text-center'>posons toujours aujourd’hui les mêmes questions sur <br/>nos capacités à nous 
                        comprendre</p>

                        <div className='flex gap-6 m-6'>

                            <div className='bg-[#FBFBFB] p-2 w-40 flex justify-center'>
                                <div className='flex items-center justify-center rounded-sm w-36 bg-black'>
                                    <img src={googleplay} className='w-10 h-10' alt="" />
                                    <div className='text-[#FBFBFB]'>
                                        <small className='font-light'>toujours</small>
                                        <p className='font-bold'>Google Play</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-center gap-2 rounded-sm w-44 bg-black border-1 border-white'>
                                <img src={mac} className='w-14 h-14' alt="" />
                                <div className='text-[#FBFBFB]'>
                                    <small className='font-light'>Download on the</small>
                                    <p className='font-bold'>App Store</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className=''>
                        <p className='text-[#FBFBFB] text-sm text-center'>À côté de ces racines grecques et latines on retrouve</p>
                        <div className='flex justify-center m-6'>
                            <div className='flex bg-[#FBFBFB] p-2 w-44'>
                                <img src={instagram} className='w-10 h-10' alt="" />
                                <img src={facebook} className='w-10 h-10' alt="" />
                                <img src={x} className='w-10 h-10' alt="" />
                                <img src={twitter} className='w-10 h-10' alt="" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='text-[#FBFBFB] text-sm text-center'> La méditation 
                        bouddhiste encourage à s'entraîner <br/> inlassablement à cultiver deux pratiques
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}