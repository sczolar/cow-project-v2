import Avatar from '@mui/material/Avatar';
import { useContext } from "react"
import { Context } from "../pages/_app"
import Link from "next/link"

export default function menu() {
    const { value } = useContext(Context);
    return (
        <>
            <header className="menu-header">
                <div className="menu-user">
                    <Avatar alt="user" src="/cow6.jpg" />
                    <span>{value.username}</span>
                </div>
                <div className="menu-menu">
                    <Link href="/home">home</Link>
                    <Link href="/buy">buy</Link>
                    <Link href="/sell">sell</Link>
                    <Link href="/map">map</Link>
                </div>
            </header>
        </>
    )
}