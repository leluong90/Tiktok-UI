import Avatar from "../../asset/images/avatar.jpg";

import { forwardRef, useState } from "react";

type ImageProps = {
  className?: string;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  fallBack?:string;
};
const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, alt, width, height , fallBack: customFallBack = Avatar }, ref) => {
    const [fallBack, setFallBack] = useState<string>("");
    const handleError = () => {
      setFallBack(customFallBack);
    };

    return (
      <img
        ref={ref}
        className={   className}
        src={fallBack || src}
        alt={alt}
        width={width}
        height={height}
        onError={handleError}
      />
    );
  }
);
export default Image;
