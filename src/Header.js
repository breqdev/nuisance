import React, { useMemo } from "react"

const MOTDS = [
    "aoun's super students use nuisance",
    "did you know ctrl+alt+win+shift+Y opens yammer?",
    "is it just me or is ben lerner kinda cute",
    "your favorite niche internet microcelebrities use nuisance",
    "find someone who loves you like andrew van der poel loves reductions",
    "make a design decision and document it",
    "one weird trick to get to northeastern sites faster!",
    "change your major for the fifteenth time here",
    "big-O isn't real, it can't hurt you",
    "think these MOTDs are lame? suggest your own ↓"
]

export default function Header() {
    const motd = useMemo(() => MOTDS[Math.floor(Math.random() * MOTDS.length)], [])

    return (
        <div className="py-8 text-center">
            <h1 className="text-7xl">nuisance.</h1>
            <h2 className="text-xl mt-4">
                {motd}
            </h2>
        </div>
    )
}
