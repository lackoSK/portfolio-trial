import React from 'react'

export default function Footer() {
    return (
        <nav className="container mx-auto px-8 xl:px-0 py-10">
            <div className="md:flex justify-between items-center text-center ">
                <a href="#" className="text-white text-2xl font-normal font-primary items-start">Ryan
                    Devoe</a>
                <a href="#" className="block text-mediumgray text-base font-normal font-secondary items-center">©
                    Copyright
                    Syncore. All Rights Reserved</a>
                <div className="flex justify-center items-center md:block">
                    <div className="mt-6 md:mt-0 md:items-end grid grid-cols-3 gap-8">
                        <a href="#" className="inline-block text-white hover:text-primary transition">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.0006 0C7.62503 0.00165209 5.32754 0.848394 3.51907 2.38877C1.7106 3.92914 0.509123 6.06267 0.129556 8.40772C-0.250011 10.7528 0.217088 13.1564 1.4473 15.1886C2.67752 17.2208 4.5906 18.7491 6.84435 19.5C7.34435 19.5938 7.53185 19.2813 7.53185 19.0313V17.1563C4.7506 17.75 4.15685 15.9688 4.15685 15.9688C3.6881 14.8125 3.03185 14.5 3.03185 14.5C2.1256 13.875 3.09435 13.9063 3.09435 13.9063C4.09435 13.9688 4.6256 14.9375 4.6256 14.9375C5.53185 16.4688 6.96935 16.0313 7.53185 15.7813C7.57567 15.2738 7.79697 14.798 8.15685 14.4375C5.9381 14.1875 3.59435 13.3125 3.59435 9.5C3.57603 8.50424 3.94587 7.54041 4.6256 6.8125C4.33048 5.94548 4.36384 5.0003 4.71935 4.15625C4.71935 4.15625 5.5631 3.875 7.46935 5.1875C8.28404 4.96396 9.12456 4.84838 9.96935 4.84375C10.8143 4.84625 11.6551 4.96186 12.4694 5.1875C14.3756 3.90625 15.2194 4.15625 15.2194 4.15625C15.5749 5.0003 15.6082 5.94548 15.3131 6.8125C15.9977 7.53734 16.3684 8.50324 16.3444 9.5C16.3444 13.3438 14.0006 14.1875 11.7819 14.4375C12.0192 14.6796 12.203 14.9688 12.3214 15.2864C12.4398 15.604 12.4902 15.9429 12.4694 16.2813V19.0313C12.4694 19.3125 12.6569 19.5938 13.1569 19.5C15.4106 18.7491 17.3237 17.2208 18.5539 15.1886C19.7841 13.1564 20.2512 10.7528 19.8716 8.40772C19.4921 6.06267 18.2906 3.92914 16.4821 2.38877C14.6737 0.848394 12.3762 0.00165209 10.0006 0V0Z"
                                    fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="#" className="inline-block text-white hover:text-primary transition">
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 2.12305C19.281 2.46618 18.5102 2.68793 17.7188 2.7793C18.5233 2.23848 19.1273 1.44775 19.4375 0.529299C18.8438 0.904299 17.5312 1.43555 16.875 1.43555C16.0766 0.643089 14.9999 0.194445 13.875 0.185549C13.3331 0.185014 12.7965 0.291346 12.2958 0.498457C11.7951 0.705569 11.3401 1.00939 10.957 1.39254C10.5738 1.77569 10.27 2.23064 10.0629 2.73135C9.8558 3.23206 9.74947 3.7687 9.75 4.31055C9.74863 4.61512 9.78006 4.91896 9.84375 5.2168C6.75 5.12305 3.125 3.5918 1.09375 0.935549C0.583772 1.83388 0.429236 2.8908 0.660669 3.89754C0.892102 4.90427 1.49267 5.7876 2.34375 6.37305C1.875 6.43555 0.96875 6.3418 0.5625 5.93555C0.53125 7.37305 1.21875 9.2793 3.75 9.9668C3.25 10.2168 2.40625 10.1543 2.03125 10.0918C2.15625 11.3105 3.875 12.9043 5.71875 12.9043C5.0625 13.6543 2.8125 15.0605 0 14.623C1.94934 15.8088 4.18712 16.4358 6.46875 16.4355C8.03272 16.4459 9.58238 16.1372 11.0229 15.5282C12.4635 14.9192 13.7647 14.0227 14.847 12.8936C15.9293 11.7646 16.7699 10.4266 17.3174 8.96156C17.8649 7.49651 18.1078 5.93518 18.0312 4.37305V4.2168C18.8226 3.65945 19.4924 2.94712 20 2.12305Z"
                                    fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="#" className="inline-block text-white hover:text-primary transition">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.359375 6.78125H4.42188V19.0625H0.359375V6.78125ZM14.9062 6.375C13.125 6.375 12.0625 7.03125 10.9375 8.46875V6.78125H6.875V19.0625H10.9688V12.4063C10.9688 11 11.6875 9.625 13.3125 9.625C14.9375 9.625 15.9062 11 15.9062 12.375V19.0625H20V12.0938C20 7.25 16.7188 6.375 14.9062 6.375ZM2.40625 0.8125C1.0625 0.8125 0 1.78125 0 2.96875C0 4.15625 1.0625 5.125 2.40625 5.125C3.75 5.125 4.8125 4.15625 4.8125 2.96875C4.8125 1.78125 3.75 0.8125 2.40625 0.8125Z"
                                    fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}