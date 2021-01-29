import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
    return (
        <div className="bg-dark min-h-screen">
            <Head>
                <title>Page</title>
            </Head>

            <section className="relative min-h-screen border-b border-darkgray">
                <svg className="absolute right-0  h-1/4 xl:h-1/2" viewBox="0 0 187 510" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 358L89.5 -23.5H110L39 349.5L256.5 489.5V510L0 358Z" fill="#3D61E1"/>
                    <path d="M76 329.5L131.5 -11.5H152L120 329.5L214.5 376.5V405.5L76 329.5Z" fill="#3D61E1"/>
                </svg>
                <svg className="absolute bottom-0.5 h-1/4 md:h-1/2" viewBox="0 0 421 586" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M296.5 311L-18 132.5V96.5L327.5 311L142 586H123L296.5 311Z" fill="#3D61E1"/>
                    <path d="M-3 55.5V76.5L352.5 309L173.5 586H202.5L375.5 301.5L-3 55.5Z" fill="#3D61E1"/>
                    <path d="M399 285.5L-9.5 27.5V0L420.5 276.5L258 586H242.5L399 285.5Z" fill="#3D61E1"/>
                </svg>

                <div className="container mx-auto z-40">
                    <Navbar/>
                    <header className="mt-20 md:mt-24 2xl:mt-36 text-center">
                        <p className="font-primary font-normal text-white tracking-huge text-xl">RYAN DEVOE</p>
                        <h1 className="mt-6 md:mt-8 xl:mt-14 font-primary font-bold text-white text-6xl lg:text-7xl tracking-tight">I
                            Create Software That Helps You <span className="block mt-4 text-primary">Stand Out.</span>
                        </h1>
                        <a href="#"
                           className="mt-16 xl:mt-24 inline-block py-4 px-16 rounded-full text-white hover:text-primary bg-primary transition hover:bg-transparent ring-4 ring-primary">
                            <svg className="inline-block" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="3"/>
                            </svg>
                            <span className="ml-4 font-semibold text-xl relative top-0.5">Contact</span>
                        </a>
                    </header>
                </div>
            </section>

            <section className="mt-16 md:mt-20 xl:mt-24 relative">
                <svg className="absolute right-0 top-36 hidden 2xl:block" width="409" height="370" viewBox="0 0 409 370"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M186.735 20.7779L586.437 337.257L547.525 334.645L185.094 45.2229L36.4632 325.899L20.603 315.814L186.735 20.7779Z"
                        fill="#3D61E1"/>
                    <path
                        d="M70.018 333.664L53.555 332.559L188.873 71.034L527.934 335.335L513.128 346.869L192.955 92.3552L70.018 333.664Z"
                        fill="#3D61E1"/>
                    <path
                        d="M108.007 320.178L93.6735 317.211L193.906 122.988L461.681 336.901L446.309 349.4L197.488 144.275L108.007 320.178Z"
                        fill="#3D61E1"/>
                </svg>
                <div className="container px-8 xl:px-0 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-5/12 lg:px-4">
                            <h2 className="text-4xl font-primary font-bold text-white">Turning Your Ideas Into Reality
                                Is <span
                                    className="text-primary mt-4">What I Do.</span></h2>

                            <svg className="hidden lg:block mt-16" width="308" height="98" viewBox="0 0 308 98"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#3D61E1"/>
                                <circle cx="4" cy="34" r="4" fill="#3D61E1"/>
                                <circle cx="34" cy="34" r="4" fill="#3D61E1"/>
                                <circle cx="34" cy="4" r="4" fill="#3D61E1"/>
                                <circle cx="64" cy="4" r="4" fill="#3D61E1"/>
                                <circle cx="64" cy="34" r="4" fill="#3D61E1"/>
                                <circle cx="94" cy="34" r="4" fill="#3D61E1"/>
                                <circle cx="94" cy="4" r="4" fill="#3D61E1"/>
                                <circle cx="124" cy="4" r="4" fill="#3D61E1"/>
                                <circle cx="124" cy="34" r="4" fill="#3D61E1"/>
                                <circle cx="154" cy="34" r="4" fill="#3D61E1"/>
                                <circle cx="154" cy="4" r="4" fill="#3D61E1"/>
                                <circle cx="184" cy="4" r="4" fill="#3D61E1"/>
                                <circle cx="184" cy="34" r="4" fill="#3D61E1"/>
                                <circle cx="214" cy="34" r="4" fill="#3D61E1"/>
                                <circle cx="214" cy="4" r="4" fill="#3D61E1"/>
                                <circle cx="244" cy="4" r="4" fill="#3D61E1"/>
                                <circle cx="244" cy="34" r="4" fill="#3D61E1"/>
                                <circle cx="274" cy="34" r="4" fill="#3D61E1"/>
                                <circle cx="274" cy="4" r="4" fill="#3D61E1"/>
                                <circle cx="304" cy="4" r="4" fill="#3D61E1"/>
                                <circle cx="304" cy="34" r="4" fill="#3D61E1"/>
                                <circle cx="4" cy="64" r="4" fill="#3D61E1"/>
                                <circle cx="4" cy="94" r="4" fill="#3D61E1"/>
                                <circle cx="34" cy="94" r="4" fill="#3D61E1"/>
                                <circle cx="34" cy="64" r="4" fill="#3D61E1"/>
                                <circle cx="64" cy="64" r="4" fill="#3D61E1"/>
                                <circle cx="64" cy="94" r="4" fill="#3D61E1"/>
                                <circle cx="94" cy="94" r="4" fill="#3D61E1"/>
                                <circle cx="94" cy="64" r="4" fill="#3D61E1"/>
                                <circle cx="124" cy="64" r="4" fill="#3D61E1"/>
                                <circle cx="124" cy="94" r="4" fill="#3D61E1"/>
                                <circle cx="154" cy="94" r="4" fill="#3D61E1"/>
                                <circle cx="154" cy="64" r="4" fill="#3D61E1"/>
                                <circle cx="184" cy="64" r="4" fill="#3D61E1"/>
                                <circle cx="184" cy="94" r="4" fill="#3D61E1"/>
                                <circle cx="214" cy="94" r="4" fill="#3D61E1"/>
                                <circle cx="214" cy="64" r="4" fill="#3D61E1"/>
                                <circle cx="244" cy="64" r="4" fill="#3D61E1"/>
                                <circle cx="244" cy="94" r="4" fill="#3D61E1"/>
                                <circle cx="274" cy="94" r="4" fill="#3D61E1"/>
                                <circle cx="274" cy="64" r="4" fill="#3D61E1"/>
                                <circle cx="304" cy="64" r="4" fill="#3D61E1"/>
                                <circle cx="304" cy="94" r="4" fill="#3D61E1"/>
                            </svg>

                        </div>
                        <div className="mt-8 lg:mt-0 w-full lg:w-7/12 lg:px-4 xl:w-1/2 xl:ml-auto">
                            <p className=" font-secondary font-normal text-lightgray leading-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate.
                            </p>
                            <p className="mt-8 font-secondary font-normal text-lightgray leading-10">
                                Donec tristique sed lacus sit amet porttitor. Nunc viverra pulvinar arcu vitae mollis.
                                Donec ac porttitor lectus. Praesent consectetur tortor sed dolor mattis blandit.
                                Suspendisse ac aliquet magna. Donec blandit felis metus, in tincidunt nulla mollis quis.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus scelerisque
                                interdum. Suspendisse.
                            </p>
                        </div>
                    </div>
                    <main className="mt-14 md:mt-20 xl:mt-28 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
                            <div className="ring-12 ring-semigray">
                                <div className="relative">
                                    <a href="#" onMouseOver={
                                        event => {
                                            const element = document.getElementById("img-desc-1")
                                            element.classList.remove("hidden");
                                        }
                                    } onMouseLeave={
                                        event => {
                                            const element = document.getElementById("img-desc-1")
                                            element.classList.add("hidden");
                                        }
                                    }>
                                        <img src="https://via.placeholder.com/250x150" alt="?" width="100%"
                                             height="auto"/>
                                        <div id="img-desc-1"
                                             className="hidden absolute bottom-0 w-full h-24 text-center bg-black opacity-50 pt-4">
                                            <h2 className="text-white font-secondary text-sm">HTML, CSS, JS</h2>
                                            <h1 className="mt-1 text-white font-secondary font-medium text-base">Dashboard
                                                for digital agency</h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ring-12 ring-semigray">
                                <div className="relative">
                                    <a href="#" onMouseOver={
                                        event => {
                                            const element = document.getElementById("img-desc-2")
                                            element.classList.remove("hidden");
                                        }
                                    } onMouseLeave={
                                        event => {
                                            const element = document.getElementById("img-desc-2")
                                            element.classList.add("hidden");
                                        }
                                    }>
                                        <img src="https://via.placeholder.com/250x150" alt="?" width="100%"
                                             height="auto"/>
                                        <div id="img-desc-2"
                                             className="hidden absolute bottom-0 w-full h-24 text-center bg-black opacity-50 pt-4">
                                            <h2 className="text-white font-secondary text-sm">HTML, CSS, JS</h2>
                                            <h1 className="mt-1 text-white font-secondary font-medium text-base">Dashboard
                                                for digital agency</h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ring-12 ring-semigray">
                                <div className="relative">
                                    <a href="#" onMouseOver={
                                        event => {
                                            const element = document.getElementById("img-desc-3")
                                            element.classList.remove("hidden");
                                        }
                                    } onMouseLeave={
                                        event => {
                                            const element = document.getElementById("img-desc-3")
                                            element.classList.add("hidden");
                                        }
                                    }>
                                        <img src="https://via.placeholder.com/250x150" alt="?" width="100%"
                                             height="auto"/>
                                        <div id="img-desc-3"
                                             className="hidden absolute bottom-0 w-full h-24 text-center bg-black opacity-50 pt-4">
                                            <h2 className="text-white font-secondary text-sm">HTML, CSS, JS</h2>
                                            <h1 className="mt-1 text-white font-secondary font-medium text-base">Dashboard
                                                for digital agency</h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
