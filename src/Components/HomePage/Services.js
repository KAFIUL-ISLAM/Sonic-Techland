import React from 'react';

const Services = () => {

    const services = [
        { id: 1, icon: 'fa-solid fa-truck', name: 'CARGO', details: 'We ensure the quality of products with diverse models for demand, which are imported from the original countries.', },
        { id: 2, icon: 'fa-solid fa-list-check', name: 'PACKAGING AND STORAGE', details: 'We know that almost of customers want to receive the products early so we are trying to provide destinations.', },
        { id: 3, icon: 'fa-solid fa-hourglass', name: 'DOOR-TO-DOOR DELIVERY', details: 'Transport offers complete, customized solutions for all of your business storage needs. It is not a problem.', },
        { id: 4, icon: 'fa-solid fa-house-circle-check', name: 'LOGISTICS', details: 'Logistics management involves identifying prospective distributors, and determining their accessibility.', },
        { id: 5, icon: 'fa-solid fa-dolly', name: 'WAREHOUSING', details: 'You are worried about the day to receive the goods. No doubt, we build several convenient storage rooms to restrict the distance.', },
        { id: 6, icon: 'fa-solid fa-earth-americas', name: 'WORLDWIDE TRANSPORT', details: 'Worldwide transport is available for use by the general public, as distinct from modes such as taxicab, or hired buses.', }
    ]
    return (
        <div className=' mx-8 mb-36'>
            <h1 className='text-4xl font-bold text-center mb-8'>Our Others Services</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                {
                    services.map(service =>
                        <div key={service.id}
                            className="flex p-6 border gap-8 shadow-lg">
                            <div className='text-2xl border text-slate-500 p-4 rounded-full h-fit bg-[#EEF2FF]'>
                                <i className={service.icon}></i>
                            </div>
                            <div>
                                <h1 className='text-slate-700 font-bold'>{service.name}</h1>
                                <p className='text-slate-400 font-serif mt-4'>{service.details}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Services;