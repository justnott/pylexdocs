# How do I know when I'm Rate Limited?
Last edited by mynameisbob1928 on November 10, 2024

Rate limits occur when people on your node have exhausted Discord's API server. This typically occurs most with nodes that have other people using Self Bots.

## How do I know if my bot is on a rate limited node?
If your bot is not showing as ready in the console (NodeJS), or you are getting an error that mentions error 429, *or* the bot is not responding to commands or other events it should be then this is likely a rate limit.
There is also a Cloudflare rate limit which looks like a bunch of HTML code but we still cannot do anything about that either.

## What can I do about it?
There isn’t much you can do. All you can really do is buy a Premium plan (they’re very cheap 😉). Other than that, you’ll just have to wait for it to be over.

## When will the rate limit be over?
Rate limits can last from minutes to hours and rarely a few days. If it is over a day we will usually do something to mitigate it but it is not guaranteed.

## What caused the rate limit?
Rate limits on Pylex are usually caused by other users who make some sort of bot or selfbot which makes many requests to discord and Discord’s API blocks the node's IP as a whole which then blocks any connections/requests from the node. 
