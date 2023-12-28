// import React, { useState, useEffect, useCallback } from 'react';
// import { useSelector } from 'react-redux';
// import { useTranslation } from 'react-i18next';
// import clsx from 'clsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faChevronLeft,
//   faChevronRight,
//   faShoppingBasket,
//   faExchangeAlt,
//   faEye,
//   faStar,
// } from '@fortawesome/free-solid-svg-icons';
// import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

// import { getAll } from '../../../redux/productsRedux';
// import Button from '../../common/Button/Button';
// import Swipeable from '../../common/Swipeable/Swipeable';
// import imagesByCategory from './GallerySliderFoto';
// import styles from './GallerySlider.module.scss';

// const ANIMATION_DURATION = 500;
// const MOBILE_SCREEN_WIDTH = 768;
// const TABLET_SCREEN_WIDTH = 1024;

// const GallerySlider = () => {
//   const { t } = useTranslation();

//   const topSellers = useSelector(getAll);

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [activeCategory, setActiveCategory] = useState('featured');

//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   const selectedImages = imagesByCategory[activeCategory];

//   const [isVisible, setIsVisible] = useState(true);
//   const [isFading, setIsFading] = useState(false);

//   const getProductByImage = useCallback(
//     image => {
//       return topSellers.find(product => product.image === image) || null;
//     },
//     [topSellers]
//   );

//   useEffect(() => {
//     setSelectedProduct(getProductByImage(selectedImages[activeSlide]));
//   }, [activeSlide, selectedImages, topSellers, getProductByImage]);

//   useEffect(() => {
//     setSelectedProduct(getProductByImage(selectedImages[0]));
//     setActiveSlide(0);
//   }, [activeCategory, selectedImages, topSellers, getProductByImage]);

//   if (!selectedProduct) {
//     return null;
//   }

//   const handleCategoryClick = (category, e) => {
//     if (e) {
//       e.preventDefault();
//     }
//     setIsVisible(false);

//     setTimeout(() => {
//       setActiveCategory(category);
//       setSelectedProduct(null);
//       setActiveSlide(0);
//       setIsVisible(true);
//     }, ANIMATION_DURATION);
//   };

//   const handleImageClick = index => {
//     setActiveSlide(index);
//     setActiveImageIndex(index);
//     setIsFading(true);
//     setTimeout(() => {
//       setActiveSlide(index);
//       setActiveImageIndex(index);
//       setIsFading(false);
//     }, ANIMATION_DURATION);
//   };

//   const onGalleryLeftSwipe = () => {
//     if (activeSlide > 0) {
//       setActiveSlide(activeSlide - 1);
//     }
//   };

//   const onGalleryRightSwipe = () => {
//     if (activeSlide < selectedImages.length - 1) {
//       setActiveSlide(activeSlide + 1);
//     }
//   };

//   const handlePrevThumbnail = () => {
//     const newIndex = activeSlide === 0 ? selectedImages.length - 1 : activeSlide - 1;
//     setActiveSlide(newIndex);
//   };

//   const handleNextThumbnail = () => {
//     const newIndex = activeSlide === selectedImages.length - 1 ? 0 : activeSlide + 1;
//     setActiveSlide(newIndex);
//   };

//   let numSlidesToDisplay;

//   if (window.innerWidth < MOBILE_SCREEN_WIDTH) {
//     numSlidesToDisplay = 2;
//   } else if (
//     window.innerWidth >= MOBILE_SCREEN_WIDTH &&
//     window.innerWidth < TABLET_SCREEN_WIDTH
//   ) {
//     numSlidesToDisplay = 4;
//   } else {
//     numSlidesToDisplay = 6;
//   }

//   return (
//     <div className={`${styles.root} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
//       <div className={'row no-gutters ' + styles.categories}>
//         <div className={'col'}>
//           <a
//             className={activeCategory === 'featured' ? styles.active : ''}
//             onClick={() => handleCategoryClick('featured')}
//           >
//             {t('gallerySlider.featured')}
//           </a>
//         </div>
//         <div className='col'>
//           <a
//             className={activeCategory === 'top' ? styles.active : ''}
//             onClick={() => handleCategoryClick('top')}
//           >
//             {t('gallerySlider.top')}
//           </a>
//         </div>
//         <div className='col'>
//           <a
//             className={activeCategory === 'sale' ? styles.active : ''}
//             onClick={() => handleCategoryClick('sale')}
//           >
//             {t('gallerySlider.sale')}
//           </a>
//         </div>
//         <div className='col'>
//           <a
//             className={activeCategory === 'topRated' ? styles.active : ''}
//             onClick={() => handleCategoryClick('topRated')}
//           >
//             {t('gallerySlider.topRated')}
//           </a>
//         </div>
//       </div>
//       <div
//         className={`${styles.photo} ${isFading ? styles.fadeOut : styles.fadeIn}`}
//         style={{
//           backgroundImage: `url(${process.env.PUBLIC_URL}${selectedImages[activeSlide]})`,
//           backgroundSize: 'cover',
//         }}
//       >
//         <div className={clsx(styles.buttons, styles.tooltip)}>
//           <Button variant='outline'>
//             <FontAwesomeIcon icon={faHeart} className={styles.icon}></FontAwesomeIcon>
//           </Button>
//           <span className={styles.tooltiptext}>{t('gallerySlider.favourite')}</span>
//           <Button variant='outline'>
//             <FontAwesomeIcon
//               icon={faExchangeAlt}
//               className={styles.icon}
//             ></FontAwesomeIcon>
//           </Button>
//           <span className={styles.tooltiptext}>{t('gallerySlider.compare')}</span>
//           <Button variant='outline'>
//             <FontAwesomeIcon icon={faEye} className={styles.icon}></FontAwesomeIcon>
//           </Button>
//           <span className={styles.tooltiptext}>{t('gallerySlider.quickView')}</span>
//           <Button variant='outline'>
//             <FontAwesomeIcon
//               icon={faShoppingBasket}
//               className={styles.icon}
//             ></FontAwesomeIcon>
//           </Button>
//           <span className={styles.tooltiptext}>{t('gallerySlider.cart')}</span>
//         </div>
//         <div className={styles.badge}>
//           <div className={styles.price}>
//             {selectedProduct.oldPrice ? (
//               <>
//                 <h6 className={styles.newPrice}>$ {selectedProduct.price}</h6>
//                 <h6 className={styles.oldPrice}>$ {selectedProduct.oldPrice}</h6>
//               </>
//             ) : (
//               <h6 className={styles.centeredPrice}>$ {selectedProduct.price}</h6>
//             )}
//           </div>
//           <div className={styles.nameBadge}>
//             <h4>{selectedProduct.name}</h4>
//             <div>
//               {[1, 2, 3, 4, 5].map(i => (
//                 <span key={i} href='#'>
//                   {i <= selectedProduct.stars ? (
//                     <FontAwesomeIcon className={styles.stars} icon={faStar} />
//                   ) : (
//                     <FontAwesomeIcon className={styles.stars} icon={farStar} />
//                   )}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Swipeable onLeftSwipe={onGalleryLeftSwipe} onRightSwipe={onGalleryRightSwipe}>
//         <div className={'row no-gutters ' + styles.sliderList}>
//           <div
//             className={'col-auto ' + styles.sliderArrow}
//             onClick={handlePrevThumbnail}
//           >
//             <FontAwesomeIcon
//               icon={faChevronLeft}
//               onClick={onGalleryLeftSwipe}
//             ></FontAwesomeIcon>
//           </div>
//           {selectedImages
//             .slice(activeSlide, activeSlide + numSlidesToDisplay)
//             .map((image, index) => (
//               <div
//                 className={`col ${styles.product} ${
//                   activeImageIndex === index ? styles.active : ''
//                 }`}
//                 key={index}
//                 style={{
//                   backgroundImage: `url(${process.env.PUBLIC_URL}${image})`,
//                   backgroundSize: 'cover',
//                 }}
//                 onClick={() => handleImageClick(activeSlide + index)}
//               ></div>
//             ))}
//           <div
//             className={'col-auto ' + styles.sliderArrow}
//             onClick={handleNextThumbnail}
//           >
//             <FontAwesomeIcon
//               icon={faChevronRight}
//               onClick={onGalleryRightSwipe}
//             ></FontAwesomeIcon>
//           </div>
//         </div>
//       </Swipeable>
//     </div>
//   );
// };

// export default GallerySlider;
