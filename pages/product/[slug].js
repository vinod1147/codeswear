import { useRouter } from 'next/router'
import { useState } from 'react';

const Post = ({ addToCart }) => {
    const router = useRouter()
    const { slug } = router.query

    const [pin, setPin] = useState()
    const [service, setService] = useState()

    const checkServiceability = async () => {
        let pins = await fetch('http://localhost:3000/api/pincode')
        let pinJson = await pins.json()
        if (pinJson.includes(parseInt(pin))) {
            setService(true)
        }
        else {
            setService(false)
        }
    }

    const onChangePin = (e) => {
        setPin(e.target.value)
    }

    return <>
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-16 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded" src="https://m.media-amazon.com/images/I/61v2O-ttpdL._UL1300_.jpg" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Wear The Code (SM/Blue)</h1>
                        <p className="leading-relaxed">First rule of Programming: Premium 100% cotton fabric which is breathable and comfortable is a great go-to in summer. CodesWear is the perfect platform as here you will get high quality t shirts.</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">₹499</span>
                            <button className="flex ml-8 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded">Buy Now</button>
                            <button onClick={() => { addToCart(slug, 1, 499, 'Wear the code(XL, Red)', 'XL', "Red") }} className="flex ml-4 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded">Add to Cart</button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="pin mt-6 flex space-x-2">
                            <input onChange={onChangePin} placeholder='Enter Your Pincode' className='px-2 border-2 border-gray-400 rounded-md' type="text" name="" id="" />
                            <button onClick={checkServiceability} className='flex ml-14 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded'>Check</button>
                        </div>
                        {(!service && service != null) && <div className="text-red-700 text-sm mt-3">Sorry! We do not deliver to this pincode yet.</div>}
                        {(service && service != null) && <div className="text-green-700 text-sm mt-3">Yay! This pincode is serviceable</div>}
                    </div>
                </div>
            </div>
        </section></>
}

export default Post