import React, { FC } from 'react';
import classNames from 'classnames';

import "./ProductImage.css";

type productImageProps = {
	imageUrl?: string;
	imageAlt?: string;
	className?: string;
}

const ProductImage: FC<productImageProps> = ({
	imageUrl = 'https://www.lukava.net/wp-content/uploads/2020/09/no-image.jpg',
	imageAlt = 'No Image was provided',
	className =''
}) => {

	return (
		<div className={classNames('product-image-wrapper', className)}>
			<img src={imageUrl} alt={imageAlt}/>
		</div>
	)
}

export default ProductImage;