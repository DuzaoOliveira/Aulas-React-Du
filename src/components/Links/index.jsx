export default function links({ link, link2 }) {
    return (


        <>
            {link && <> '<a href='#' >Primeiro link</a>'</>}
            {link2 && <> '<a href='#' >Segundo link</a>'</>}
        </>
    )
}
