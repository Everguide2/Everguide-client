import Pagination from "react-js-pagination";
import {styled} from "styled-components";
import PagingButton from "@components/button/PagingButton.jsx";
import {useSelector, useDispatch} from "react-redux";
import {setPage} from "@stores/slices/pagingSlice.js";

const Paginations = () => {
  const pagingInfo = useSelector((state) => state.paging);
  const dispatch = useDispatch();

  return (
      <Container>
        <Pagination
            activePage={pagingInfo.activePage}
            onChange={(page) => dispatch(setPage({...pagingInfo, activePage: page}))}
            itemsCountPerPage={pagingInfo.itemsCount}
            totalItemsCount={pagingInfo.totalItems}
            pageRangeDisplayed={pagingInfo.pageRange}
            hideFirstLastPages={true}
            prevPageText={pagingInfo.activePage > 1 ? <PagingButton direction={"left"}/> : null}
            nextPageText={<PagingButton direction={"right"}/>}
        />
      </Container>
  );
};

export default Paginations;

const Container = styled.div`
  .pagination {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 14px;

    li.active a {
      color: ${({theme}) => theme.colors.state.red};
    }

    li {
      box-sizing: border-box;
      padding: 0 7px;
    }

    a {
      ${({theme}) => theme.fonts.body2};
      color: ${({theme}) => theme.colors.gray[900]};
      text-decoration: none;
    }
  }
`