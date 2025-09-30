import Acceuil from './Acceuil'
import Voyages from './Voyages'
import Photo from './Photo'
import Service from './Service'
import About from './About'
import DetailVoyage from '../detailVoyage/DetailVoyage'

import footer1 from '../../assets/footer1.jpg'
import footer2 from '../../assets/footer2.jpg'
import footer3 from '../../assets/footer3.jpg'
import footer4 from '../../assets/footer4.jpg'
import f from '../../assets/f.png'
import g from '../../assets/g.png'
import l from '../../assets/l.png'
import t from '../../assets/t.png'


export default function Index(){
    return(
        <div>
            <header className="fixed bg-[#FBFBFB] w-full">
                <div className="flex justify-around items-center shadow-lg p-4 ">
                    <div><h1 className="text-[#06668C] font-bold text-2xl">MMCluB</h1></div>
                    <div className="flex gap-24">
                        <a href="#acceuil" className="hover:text-[#06668C] focus:text-[#06668C]">Acceuil</a>
                        <a href="#voyages" className="hover:text-[#06668C] focus:text-[#06668C]">Voyage</a>
                        <a href="#photo" className="hover:text-[#06668C] focus:text-[#06668C]">Photo</a>
                        <a href="#service" className="hover:text-[#06668C] focus:text-[#06668C]">Service</a>
                        <a href="#about" className="hover:text-[#06668C] focus:text-[#06668C]">A propos</a>
                    </div>
                    <div className="flex gap-8">
                        <button className="border-2 border-[#06668C] rounded-full text-[#06668C] font-bold p-1.5 w-32"><a href="/dashboard">Connexion</a></button>
                        <button className="bg-[#06668C] text-white font-bold rounded-full p-1.5 w-32"><a href="" >S'incrire</a></button>
                    </div>
                </div>
            </header>

            <main className="scroll-smooth">

                <section id="acceuil">
                    <DetailVoyage />
                </section>

                <section id="voyages">
                    <Voyages />
                </section>

                <section id="photo">
                    <Photo />
                </section>

                <section id="service">
                    <Service />
                </section>

                <section id="about">
                    <About />
                </section>

            </main>
            {/* <DetailVoyage/> */}
            
            <footer className='bg-neutral-800 mt-10'>

                <div className=" text-[#FBFBFB] flex gap-8 ">

                    <div className='m-10'>
                        <h4 className='font-bold'>ABOUT OUR MAX</h4>

                        <div className='border-b-2 border-[#06668C] w-10 mt-4'></div><br/>

                        <p className='text-sm w-xs leading-relaxed'>That this group would somehow form a family that's the way we all became the brady
                            Bunch.Doin'it our way.There's nothing we wont try never heard word.
                        </p><br/>

                        <div className='flex gap-2'>
                            <img src={f} className='w-8 h-8 bg-neutral-900 p-2' alt="" />
                            <img src={t} className='w-8 h-8 bg-neutral-900 p-2' alt="" />
                            <img src={g} className='w-8 h-8 bg-neutral-900 p-2' alt="" />
                            <img src={l} className='w-8 h-8 bg-neutral-900 p-2' alt="" />
                        </div>
                    </div>

                    <div className='m-10'>
                        <h4 className=' font-bold'>USEFUL LINKS</h4>

                        <div className='border-b-2 border-[#06668C] w-10 mt-4'></div><br/>

                        <ul className='text-sm leading-8'>
                            <li>About us</li>
                            <li>Our Packages</li>
                            <li>Popular Destination</li>
                            <li>Top Destination</li>
                            <li>Latest news</li>
                            <li>Our Galery</li>
                        </ul>
                    </div>

                    <div className='m-10'>
                        <h4 className=' font-bold'>OPENING HOURS</h4>

                        <div className='border-b-2 border-[#06668C] w-10 mt-4'></div><br/>

                        <ul className='text-sm leading-8'>
                            <li>Monday</li>
                            <li>Tuesday</li>
                            <li>Wednesday</li>
                            <li>Thursday</li>
                            <li>Friday</li>
                            <li>Saturday</li>
                        </ul>
                    </div>

                    <div className='m-10'>
                        <h4 className=' font-bold'>POPULAR DESTINATION</h4>

                        <div className='border-b-2 border-[#06668C] w-10 mt-4'></div><br/>

                        <div className='grid grid-cols-2 gap-2'>
                            <img src={footer1} className='w-24 h-24' alt="" />
                            <img src={footer2} className='w-24 h-24' alt="" />
                            <img src={footer3} className='w-24 h-24' alt="" />
                            <img src={footer4} className='w-24 h-24' alt="" />
                        </div>
                    </div>

                </div>

                <div className='text-[#FBFBFB] bg-black p-6 flex items-center justify-around gap-16'>
                    <div>
                        <small className=''>@ 2016 ALL RIGHTS RESERVED</small>
                    </div>
                    <div >
                        <ul className='flex gap-8 text-xs font-bold'>
                            <li>ACCEUIL</li>
                            <li>VOYAGE</li>
                            <li>PHOTO</li>
                            <li>SERVICE</li>
                            <li>A PROPOS</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}