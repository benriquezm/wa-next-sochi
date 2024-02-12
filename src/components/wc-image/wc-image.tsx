import Image from "next/image";

interface IWCImage {
    attrAlt: string,
    hasLink: boolean,
    imageHeight: number,
    imageUrl: string,
    imageWidth: number,
    linkUrl: string,
    styleForComponent: string,
};

const WCImage = (
    props: IWCImage,
) => {
    const {
        attrAlt,
        hasLink,
        imageHeight,
        imageUrl,
        imageWidth,
        linkUrl,
        styleForComponent,
    } = props;
    return(
        hasLink ? (
            <div className={styleForComponent}>
                <a href={linkUrl}>
                    <Image
                        src={imageUrl}
                        width={imageWidth}
                        height={imageHeight}
                        alt={attrAlt}
                    />
                </a>
            </div>
        ) : (
            <div className={styleForComponent}>
                <Image
                    src={imageUrl}
                    width={imageWidth}
                    height={imageHeight}
                    alt={attrAlt}
                />
            </div>
        )
    );
};

export default WCImage;
