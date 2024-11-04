# How do I know when I'm Rate Limited?
Last edited by justnott on November 4, 2024

Rate limits occur when people on your node have exhausted Discord's API server. This typically occurs most with nodes that have other people using Self Bots.

## How can I fix a Rate Limit?

Short answer; you can't

Typically you must wait 2-12 hours for a Pylex server admin to change the IP address of a node. To reduce rate limits, don't break the rules!

## How do I know when I'm Rate Limited?

The easy answer, when you see an error along the lines of:

```discord.errors.HTTPException: 429 Too Many Requests (error code: 0): You are being blocked from accessing our API temporarily due to exceeding our rate limits frequently. Please read our docs at https://discord.com/developers/docs/topics/rate-limits to prevent this moving forward.```

If you see this, that's it!
Your node has been rate limited, and can take up to 12 hours to fix.
