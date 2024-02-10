import Image from "next/image";

interface IWCImage {
    styleForComponent: string,
    imageUrl: string,
    imageWidth: number,
    imageHeight: number,
    attrAlt: string,
};

const WCImage = (
    props: IWCImage,
) => {
    const {
        styleForComponent,
        imageUrl,
        imageWidth,
        imageHeight,
        attrAlt,
    } = props;
    return(
        <div className={styleForComponent}>
          <Image
            src={imageUrl}
            width={imageWidth}
            height={imageHeight}
            alt={attrAlt}
          />
        </div>
    );
};

export default WCImage;
