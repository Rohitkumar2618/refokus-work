

const Footer = () => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl  mx-auto py-10 flex gap-32">
                <div className="basis-1/2">
                    <h1
                        className="text-[11.5rem]  
                    font-semibold 
                    leading-none tracking-tight"
                    >
                        refokus.
                    </h1>
                </div>

                <div className="basis-1/2 flex gap-4 " >
                    <div className="basis-1/3">
                        <h4 className="mb-8 text-zinc-500"> Socials</h4>
                        {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
                            <a
                                className="block mt-2
                         captalize    text-zinc-600"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="basis-1/3">
                        <h4 className="mb-8 text-zinc-500"> Socials</h4>
                        {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
                            <a
                                className="block mt-2
                         captalize    text-zinc-600"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="basis-1/2 flex flex-col  items-end">
                    <p className="text-right">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <button className="rounded-full mt-5 py-2 px-5 border-b-[1px] border-zinc-50 ">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
