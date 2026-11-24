[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/zeromix555/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270-entry/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/zeromix555/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270-entry/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

# Loading Screen Gold: A Tip in 200 Characters

An entry for the [make.fun bounty "Loading Screen Gold: A Tip in 200 Characters"](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270) ($2 in USDC).

## The tip

> Tip: while this loads, your agent is quietly Googling the error you just pasted. So are you. The difference is it won't admit it.

129 characters. A loading-screen tip for stressed developers and AI coding
agents at once: the build is stalled, the agent is secretly searching the
very error the developer just pasted, and the developer is doing exactly
the same thing — the only difference is who admits it. No coffee, no
deadline, no compile joke: the laugh is the shared, unspoken habit.

## How it is made

`main.ts` (Node 22, standard library only) writes the single line to
`/output/entry.txt`. No network, no clock, no randomness — two runs write
the same bytes.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
