import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import LINKS from "./links"

function Button(props) {
    return (
        <a
            className="flex-1 border-2 border-gray-400 hover:bg-blue-400 transition-colors duration-300 rounded-xl p-2 text-center"
            href={props.url}
        >
            {props.text}
        </a>
    )
}

function Card(props) {
    return (
        <div className="bg-white rounded-3xl p-8 flex flex-col gap-2">
            <a className="block flex-grow" href={props.options[0].url}>
                <h3 className="text-center text-2xl">{props.title}</h3>
                <p className="text-center">{props.description}</p>
            </a>
            {props.options && (
                <div className="flex gap-4 mt-4">
                    {props.options.map((option) => (
                        <Button key={option.url} {...option} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default function Homepage() {
    return (
        <div className="flex-grow mx-auto max-w-4xl w-full px-4">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {LINKS.map((link) => (
                    <Card key={link.url} {...link} />
                ))}
            </div>
            <Footer />
        </div>
    )
}
