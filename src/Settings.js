import React from "react"

function ToggleOptions(props) {
    return (
        <div className="flex gap-1">
            {props.options.map((option) => (
                <button
                    className={
                        "border-2 border-gray-400 hover:bg-blue-300 dark:hover:bg-blue-600 transition-colors duration-300 rounded-lg py-1 px-2 " +
                        (props.selected === option
                            ? "bg-blue-200 dark:bg-blue-900"
                            : "bg-transparent")
                    }
                    onClick={() => props.setSelected(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    )
}

export default function Settings(props) {
    return (
        <div className="flex-shrink-0 bg-white dark:bg-black transition-colors duration-300 rounded-3xl p-8 pt-6 flex flex-col gap-2">
            <h2 className="text-xl text-center">settings</h2>
            <div className="flex gap-4 items-center">
                <span className="flex-grow">theme</span>
                <ToggleOptions
                    options={["light", "dark", "system"]}
                    selected={props.theme}
                    setSelected={props.setTheme}
                />
            </div>
            <div className="flex gap-4 items-center">
                <span className="flex-grow">open links in</span>
                <ToggleOptions
                    options={["new tab", "current tab"]}
                    selected={props.newTab ? "new tab" : "current tab"}
                    setSelected={(option) =>
                        props.setNewTab(option === "new tab")
                    }
                />
            </div>
        </div>
    )
}
