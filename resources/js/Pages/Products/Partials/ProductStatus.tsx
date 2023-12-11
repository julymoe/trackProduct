import React from 'react';

interface ProductStatusProps {
    currentStatus: string;
}

const ProductStatus: React.FC<ProductStatusProps> = ({ currentStatus }) => {
    const statuses = ['Ordered', 'Preparing', 'Packaging', 'Delivering', 'Ready'];

    const statusImages: Record<string, string> = {
        'Ordered': '/src/phone-call.gif',
        'Preparing': '/src/volunteering.gif',
        'Packaging': '/src/charity.gif',
        'Delivering': '/src/delivery-scooter.gif',
        'Ready': '/src/in-love.gif',
    };

    const getClass = (status: string, index: number) => {
        let baseClasses = 'w-1/5 bg-gradient-to-b flex items-center justify-center h-20 border-r-2 transition-all';

        if (index === 0) {
            baseClasses += ' rounded-l-full';
        }

        if (index === (statuses.length - 1)) {
            baseClasses = baseClasses.replace('border-r-2', 'rounded-r-full');
        }

        if (status === currentStatus) {
            baseClasses = baseClasses.replace('border-r-2', '');

            return `${baseClasses} from-amber-500 to-amber-600 scale-110 rounded shadow-lg`;
        }

        if (statuses.indexOf(currentStatus) > index) {
            return `${baseClasses} from-lime-500 to-lime-600 border-lime-700`;
        }

        return `${baseClasses} from-lime-300 to-lime-400 border-lime-500`;
    };

    const getClassTwo = (status: string, index: number) => {
        let baseClasses = 'absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 bg-gradient-to-b';

        if (index === 0) {
            baseClasses += ' rounded-l-full';
        }

        if (index === (statuses.length - 1)) {
            baseClasses = baseClasses.replace('border-r-2', 'rounded-r-full');
        }

        if (status === currentStatus) {
            baseClasses = baseClasses.replace('border-r-2', '');

            return `${baseClasses} from-amber-700 to-amber-900 scale-110 rounded shadow-lg`;
        }

        if (statuses.indexOf(currentStatus) > index) {
            return `${baseClasses} from-gray-500 to-gray-600 border-gray-700`;
        }

        return `${baseClasses} from-gray-300 to-gray-400 border-gray-500`;
    };

    return (
        <div className="grid grid-cols-4 gap-x-20">
            <div className="col-span-3 hidden md:block">
                <div className="flex border-4 border-lime-200 rounded-full mb-20">
                    {statuses.map((status, index) => (
                        <div key={index} className={getClass(status, index)}>
                            <p className="uppercase font-medium italic text-white drop-shadow text-center">
                                <span className="block text-3xl font-bold not-italic leading-none">{index + 1}</span>
                                {status}
                            </p>
                            {status === currentStatus && (
                                <img src={statusImages[status]} alt={`Status ${index + 1}`} className="mx-auto mt-2 absolute top-[100px]" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                {statuses.map((status, index) => (
                    <li key={index} className="mb-10 ms-6">
                        <span className={getClassTwo(status, index)}>
                            <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </span>
                        <h3 className="text-3xl font-bold not-italic leading-none">{index + 1}</h3>
                        <p className="uppercase font-medium">{status}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ProductStatus;
