import React from "react"
import useLocalStorageState from "use-local-storage-state"

import Header from "./Header"
import Footer from "./Footer"
import LINKS from "./links"
import Settings from "./Settings"

function Button(props) {
    const className =
        "flex-1 border-2 border-gray-400 hover:bg-blue-300 dark:hover:bg-blue-600 transition-colors duration-300 rounded-xl p-2 text-center"

    if (props.newTab) {
        return (
            <a
                className={className}
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.text}
            </a>
        )
    } else {
        return (
            <a className={className} href={props.url}>
                {props.text}
            </a>
        )
    }
}

function Card(props) {
    return (
        <div className="bg-white dark:bg-black transition-colors duration-300 rounded-3xl p-8 flex flex-col gap-2">
            <a className="block flex-grow" href={props.options[0].url}>
                <h3 className="text-center text-2xl">{props.title}</h3>
                <p className="text-center">{props.description}</p>
            </a>
            {props.options && (
                <div className="flex gap-4 mt-4">
                    {props.options.map((option) => (
                        <Button
                            key={option.url}
                            newTab={props.newTab}
                            {...option}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

function useSystemTheme() {
    const [dark, setDark] = React.useState()

    React.useLayoutEffect(() => {
        setDark(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }, [])

    React.useLayoutEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const handler = () => setDark(mediaQuery.matches)
        mediaQuery.addEventListener("change", handler)
        return () => mediaQuery.removeEventListener("change", handler)
    })

    return dark
}

export default function Homepage() {
    const [theme, setTheme] = useLocalStorageState("nuisance-theme", "system")
    const [newTab, setNewTab] = useLocalStorageState(
        "nuisance-tab-behavior",
        false
    )

    const systemDark = useSystemTheme()
    const dark = theme === "dark" || (theme === "system" && systemDark)

    return (
        <div className={dark ? "dark" : ""}>
            <div className="bg-gray-200 dark:bg-gray-800 dark:text-white transition-colors duration-300 flex flex-col h-full">
                <div className="flex-grow mx-auto max-w-4xl w-full px-4">
                    <Header />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {LINKS.map((link, i) => (
                            <Card key={i} {...link} newTab={newTab} />
                        ))}
                    </div>
                    <Settings
                        theme={theme}
                        newTab={newTab}
                        setTheme={setTheme}
                        setNewTab={setNewTab}
                    />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
