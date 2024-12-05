# How to Connect to SFTP
Last edited by notanerd31 on December 4, 2024

## So, when the servers are offline. You are going crazy because you can't access your folders, so what to do?

1. Install SFTP extension in VSCode
2. Enter this command in the search bar:
`> SFTP: Config` (you must be in a folder)
3. Go to your server's settings in the panel then copy all of this
4. Go to the `.vscode` folder then you can see the `sftp.json` file, enter the file in this format:
```json
{
    "name": "The name of the sftp folder, choose whatever you want.",
    "host": "[node name].pylex.software",
    "protocol": "sftp",
    "port": 2022,
    "username": "The username, you can copy it.",
    "password": "The password to access your panel.",
    "remotePath": "/",
    "uploadOnSave": false,
    "useTempFile": false,
    "openSsh": false
}
```
In `port`, put the last 4 numbers in the server address
It is recommended to put `uploadOnSave` to `true`, it will update the server automatically when you save a file.
5. Click the icon that has a cloud and a file in the sidebar, then enter your panel password to gain access to your server.
6. To edit a file in local, right click the file you want to edit then click `Edit in local`
7. Everytime you save the file, the file will be updated in your server.

Now you're done! Happy coding! 🔥
If you have any questions, feel free to ask around on the [support](https://discord.gg/xF7F7NJ7hY) Discord server!

**SFTP extension link: https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp**