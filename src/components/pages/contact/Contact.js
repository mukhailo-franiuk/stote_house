
export const Contact = () => {
    document.title = `Contact page Store App`;
    return (
        <div className="mt-20">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <section className="bg-emerald-700 rounded-xl shadow-2xl" >
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-50">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-50 sm:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem, ipsa corporis ratione eaque non tempora
                            dolorem omnis? Ducimus odio illum voluptate, dolor aperiam asperiores molestias veritatis eum tenetur corrupti!
                        </p>
                        <form className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-50">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-emerald-700 border border-gray-50 outline-none text-gray-50 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-50 ">You name</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-50 bg-emerald-700 rounded-lg border outline-none border-gray-50 shadow-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="You name" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-50">Your message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-50 bg-emerald-700 rounded-lg shadow-sm border outline-none border-gray-50 focus:ring-emerald-500 focus:border-emerald-500 " placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-emerald-900 sm:w-fit hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300">Send message</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}