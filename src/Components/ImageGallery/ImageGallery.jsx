import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery ({items, openModal}) {

    return (
        <>
           <ul>
            {items.map((item) => {
               return (
                    <li key={item.id}>
                        <ImageCard alt={item.alt_description}
                        urlSm={item.urls.small} urlReg={item.urls.regular} openModal={openModal}/>
                    </li>
                )
            })}
           </ul>
        </>
    )
}