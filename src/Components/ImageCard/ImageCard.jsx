export default function ImageCard({alt, urlSm, urlReg, openModal}) {
    return (
        <>
            <div onClick={() => openModal(alt, urlReg)} >
                <img src={urlSm} alt={alt}/>
            </div>
        </>
    )
}