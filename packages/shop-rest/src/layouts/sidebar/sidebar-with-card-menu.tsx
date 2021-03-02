import React, { useState, useEffect } from 'react';
import { CardMenu } from 'components/card-menu';
import { useRouter } from 'next/router';
import ErrorMessage from 'components/error-message/error-message';
import styled from 'styled-components';
import Sticky from 'react-stickynode';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import CategoryWalker from 'components/category-walker/category-walker';
import useCategory from 'data/use-category';
import { get } from 'utils/api/callApi';
import { Loading, ButtonWrapper } from './sidebar.style';
import { FormattedMessage } from 'react-intl';
import { Button } from 'components/button/button';
const Aside = styled.aside({
  width: '300px',
  position: 'fixed',
  top: 110,
  left: 30,
  height: 'calc(100% - 110px)',
});

const CardMenuWrapper = styled.div({
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: '1fr 1fr',
  gridAutoRows: 'max-content',
  paddingBottom: 30,

  '@media (min-width: 550px) and (max-width: 990px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

const MobileOnly = styled.div({
  display: 'none',
  zIndex: 10,

  '@media (max-width: 990px)': {
    display: 'block',
  },
});

const DesktopOnly = styled.div({
  display: 'none',
  '@media (min-width: 991px)': {
    display: 'block',
  },
});

interface Props {
  type: string;
}

const per_page = 10;

export const SidebarWithCardMenu = ({ type }: Props) => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { pathname, query } = router;
  const selectedQueries = query.category;

  const initData = async () => {
    const { data: dataRes } = await get(`/products/categories?page=1&per_page=100&include=[0,1243,1244,1211,1252,1254,1265,1266]&orderby=name`);
    if (dataRes) setData(dataRes);
    setLoading(false);
  }

  useEffect(() => {
    initData();
  }, [])

  const onCategoryClick = (slug: string) => {
    router.push({
      pathname,
      query: { ...query, category: slug },
    });
  };

  const handleLoadMore = async () => {
    setLoading(true);
    const newPage = page + 1;
    const res = await get(`/products/categories?page=${newPage}&per_page=${per_page}`);
    if (res.data) {
      setData(data.concat(res.data));
      setPage(newPage);
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <MobileOnly>
        <Sticky top={67}>
          <CategoryWalker
            style={{
              backgroundColor: '#ffffff',
              paddingTop: '15px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
            }}
          >
            <CardMenuWrapper>
              <CardMenu
                data={data}
                onClick={onCategoryClick}
                active={selectedQueries}
              />
            </CardMenuWrapper>
          </CategoryWalker>
        </Sticky>
      </MobileOnly>

      <DesktopOnly>
        <Aside>
          <Scrollbar
            style={{ maxHeight: 'calc(100% - 70px)' }}
            options={{
              scrollbars: {
                visibility: 'hidden',
              },
            }}
          >
            {!data || loading && (
              <Loading />
            )}
            {data && data.length > 0 && <CardMenuWrapper>
              <CardMenu
                data={data}
                onClick={onCategoryClick}
                active={selectedQueries}
              />
            </CardMenuWrapper>}
          </Scrollbar>
          {/*<ButtonWrapper>
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
          </ButtonWrapper>*/}
        </Aside>
      </DesktopOnly>
    </React.Fragment>
  );
};
