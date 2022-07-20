import React from "react";

export default function links({ link, acesso1, texto }) {
    return (

        <>
            {link && <a href={acesso1} >{texto}</a>}
        </>
    )
}