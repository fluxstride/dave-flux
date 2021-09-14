// import fetch from "node-fetch"
export default function hello({ article }) {
    return (
        <div>
            {article.name}
        </div>

    )
}

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/login")
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}


