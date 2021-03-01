import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from './product-list.style';
import { CURRENCY } from 'utils/constant';
import Placeholder from 'components/placeholder/placeholder';
import Fade from 'react-reveal/Fade';
import NoResultFound from 'components/no-result/no-result';
import { FormattedMessage } from 'react-intl';
import { Button } from 'components/button/button';
import useProducts from 'data/use-products';
import { get } from 'utils/api/callApi';
const ErrorMessage = dynamic(() =>
  import('components/error-message/error-message')
);
const GeneralCard = dynamic(
  import('components/product-card/product-card-one/product-card-one')
);
const BookCard = dynamic(
  import('components/product-card/product-card-two/product-card-two')
);
const FurnitureCard = dynamic(
  import('components/product-card/product-card-three/product-card-three')
);
const MedicineCard = dynamic(
  import('components/product-card/product-card-five/product-card-five')
);

type ProductsProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  fetchLimit?: number;
  loadMore?: boolean;
  type?: string;
};
const per_page = 20;
export const Products: React.FC<ProductsProps> = ({
  deviceType,
  fetchLimit = 20,
  loadMore = true,
  type,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const { category } = router.query;

  const initData = async () => {
    const { data: dataRes, error: errorRes } = await get(`/products?page=${page}&per_page=${per_page}`);
    if (dataRes) setData(dataRes);
    if (errorRes) setError(errorRes);
    setLoading(false);
  }
  useEffect(() => {
    initData();
  }, [])

  useEffect(() => {
    console.log(category)
  }, [category])

  const handleLoadMore = async () => {
    setLoading(true);
    const newPage = page + 1;
    const res = await get(`/products?page=${newPage}&per_page=${per_page}`);
    if (res.data) {
      setData(data.concat(res.data));
      setPage(newPage);
    }
    if (res.error) setError(res.error);
    setLoading(false);
  };

  const renderCard = (productType, props) => {
    props.image = props.images.length > 0 ? props.images[0].src : null;

    switch (productType) {
      case 'book':
        return (
          <BookCard
            title={props.title}
            image={props.image}
            name={props?.author?.name}
            data={props}
            deviceType={deviceType}
            onClick={() => {
              router.push('/product/[slug]', `/product/${props.slug}`);
              if (typeof window !== 'undefined') {
                window.scrollTo(0, 0);
              }
            }}
          />
        );
      case 'medicine':
        return (
          <MedicineCard
            title={props.title}
            currency={CURRENCY}
            image={props.image}
            price={props.price}
            weight={props.weight}
            data={props}
          />
        );
      case 'furniture':
        return (
          <FurnitureCard
            title={props.title}
            image={props.gallery[0].url}
            discountInPercent={props.discountInPercent}
            data={props}
            deviceType={deviceType}
          />
        );
      default:
        return (
          <GeneralCard
            title={props.name}
            description={props.description}
            image={props.image}
            weight={props.weight || "0"}
            currency={CURRENCY}
            price={props.price}
            salePrice={props.salePrice}
            discountInPercent={props.discountInPercent}
            data={props}
            deviceType={deviceType}
          />
        );
    }
  };
  return (
    <>
      <ProductsRow>
        {!data || loading && (
          <LoaderWrapper>
            <LoaderItem>
              <Placeholder uniqueKey="1" />
            </LoaderItem>
            <LoaderItem>
              <Placeholder uniqueKey="2" />
            </LoaderItem>
            <LoaderItem>
              <Placeholder uniqueKey="3" />
            </LoaderItem>
          </LoaderWrapper>
        )}
        {data?.filter(item => item.categories.find(cate => !category || cate.slug === category))?.length === 0 && <NoResultFound />}
        {data?.filter(item => item.categories.find(cate => !category || cate.slug === category)).map((item: any, index: number) => (
          <ProductsCol
            key={index}
            style={type === 'book' ? { paddingLeft: 0, paddingRight: 1 } : {}}
          >
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: '100%' }}
              >
                {renderCard(type, item)}
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
      {(
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            loading={loading}
            variant="secondary"
            style={{
              fontSize: 14,
            }}
            border="1px solid #f1f1f1"
          >
            <FormattedMessage id="loadMoreButton" defaultMessage="Load More" />
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
};
export default Products;
