import jwt from "jsonwebtoken"


const example = () => {
    // const data = await fetch("http://localhost:3000/hello")

    return (
        <div>
            <form action="/api/login" method="post">
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="name" />
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="submit" />
            </form>
        </div>

    )
}


export default example