import React from 'react'
import {Cog6ToothIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function SideBar({navigations}) {
    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                    <img
                        alt="Your Company"
                        src="https://placehold.co/32x32"
                        className="h-8 w-auto"
                    />
                </div>
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {navigations.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-gray-800 text-white'
                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                            )}
                                        >
                                            <item.icon aria-hidden="true" className="h-6 w-6 shrink-0"/>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="mt-auto">
                            <a
                                href="#"
                                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                            >
                                <Cog6ToothIcon aria-hidden="true" className="h-6 w-6 shrink-0"/>
                                تنظیمات
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SideBar
