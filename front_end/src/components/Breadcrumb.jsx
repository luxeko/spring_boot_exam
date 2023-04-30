import React from 'react';
import {AiFillHome} from "react-icons/ai";
import {RiArrowRightSLine} from "react-icons/ri"
import {Link} from "react-router-dom";

const Breadcrumb = ({data}) => {
    return (
        <>
            <nav className="flex py-3 text-gray-700 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                 aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    {
                        data.map((item, index) => {
                            return (
                                <li key={`breadcrumb-${index}`} className={`${index === 0 ? 'inline-flex' : 'flex'} items-center`}>
                                    {
                                        index === 0
                                            ? <Link to={item.path}
                                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                                <AiFillHome className="w-4 h-4 mr-2"/> {item.name}
                                            </Link>
                                            : <div className="flex items-center">
                                                <RiArrowRightSLine className="w-6 h-6 text-gray-400"/>
                                                {
                                                    index + 1 === data.length
                                                        ? <span
                                                            className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{item.name}</span>
                                                        : <Link to={item.path}
                                                                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{item.name}</Link>
                                                }

                                            </div>
                                    }
                                </li>
                            )
                        })
                    }
                </ol>
            </nav>
        </>
    )
};

export default Breadcrumb;