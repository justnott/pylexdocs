## How to Fix "MODULE_NOT_FOUND"
Last edited by justnott on November 3, 2024

You are getting an error with the code `MODULE_NOT_FOUND`. Here are some ways to troubleshoot this error!

## Tip 1

Restart your server.

The basic, yet somewhat working method. Sometimes, packages didn't load correctly or didn't install yet. Restarting your server may fix this issue.

## Tip 2

Check the [installed packages](https://docs.coopr.tech/docs/Packages).

Ensure that you have the correct packages installed in your container. If it is missing, your server will run into this error.

e.g. Your script requires `express` but you see an error:

```Error: Cannot find module 'express'```

The solution for this is to add the `express` package to your additional node packages in the startup tab. For more help, check out [Packages](https://docs.coopr.tech/docs/Packages).

## Tip 3

Change the startup file.

Sometimes, you may have renamed your main file. Maybe you missed a letter, maybe you completely forgot you changed it. It happens!

Locate the startup tab, and look for `JS File` or `Startup File`. Ensure the value is set correctly to the main file you want to run when your server starts. If this is set incorrectly, your scripts will not be able to work at all!
