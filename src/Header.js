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
    "i am here. i am here. i am here",
    "because the student hub has no rizz",
    "tastier than a wollastons sandwich",
    "the fourth floor of snell library is a great place to scream!",
    "less confusing than the forsyth hall room numbering",
    "by the team that brought you femboy friday",
    "now that's the power of transgender engineering",
    "fun fact: charliecards are named after the charles river",
    "now with support for the atari 2600!",
    "northeastern university information, services and notifications considered essential",
    "contact your doctor to see if nuisance is right for you",
    "made possible by viewers like you",
    "should not be used while driving or intoxicated",
    "almost useful!",
    "nyaaa!",
    "i'm glad you're here!",
    "more interactive than Zombo.com!",
    "of course brooke broke it again",
    "sliding in their (yammer) DMs!",
    "powered by react, javascript, and a CPU someone built in minecraft",
    "warning: not guaranteed to work at altitudes above 12,000 feet",
    "hey guys would you join my minecraft server",
    "like and subscribe and hit the bell",
    "powered by el jefes burritos",
    "as rushed as your english final!",
    "often imitated, never duplicated",
    "forged in richard's basement!",
    "see someone with pink curly hair? floof it!",
    "think these MOTDs are lame? suggest your own ↓",
]

export default function Header() {
    const motd = useMemo(
        () => MOTDS[Math.floor(Math.random() * MOTDS.length)],
        []
    )

    return (
        <div className="py-8 text-center">
            <h1 className="text-7xl">nuisance.</h1>
            <h2 className="text-xl mt-4">{motd}</h2>
        </div>
    )
}
