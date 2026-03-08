export function login() {
    return `
        <form action="submit" method="post">
            Name: <input type="text" name="name" /> <br/> <br/>
            Password: <input type="password" name="password" />  <br/> <br/>
            <button>Submit</button>
        </form>
        <a href="/">Go to home</a>
        `
}