import Avatar from '@mui/material/Avatar';
import { useContext, useState } from "react"
import { Context } from "../pages/_app"
import Link from "next/link"
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';
import Tooltip from '@mui/material/Tooltip';

export default function Menuu(props) {
    const { value } = useContext(Context);
    const router = useRouter()
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
                    <Link href="/login" >
                        <Tooltip title="logout">
                            <LogoutIcon onClick={() => {
                                document.cookie = "token=";
                                props.dispatch({ type: "clear" });
                                router.push("/login");
                            }} />
                        </Tooltip>
                    </Link>
                </div>
            </header>
        </>
    )
}