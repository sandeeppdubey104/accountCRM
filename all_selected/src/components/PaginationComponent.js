import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import LinkComponent from './LinkComponent';

const PaginationComponent = React.memo(({
    recordsCount,
    recordsPerPage,
    onPageChange,
    activePage,
}) => {
    const pagesCount = Math.ceil(recordsCount / recordsPerPage);
    if (pagesCount === Infinity || Number.isNaN(pagesCount)) {
        return null;
    }

    const changePage = useCallback((pageIndex) => {
        onPageChange(Number(pageIndex));
    }, [
        onPageChange,
    ]);

    const pageClickHandler = (e) => {
        const { pageIndex } = e.currentTarget.dataset;
        if (pageIndex === activePage) {
            return;
        }
        changePage(pageIndex);
    };

    const onPreviousHandler = () => {
        if (activePage > 0) {
            changePage(activePage - 1);
        }
    };

    const onNextHandler = () => {
        if (activePage < (pagesCount - 1)) {
            changePage(activePage + 1);
        }
    };

    const pagesElement = [];
    for (let index = 0; index < pagesCount; index++) {
        const element = (
            <li
                key={`${index}`}
                className={`page-item ${Number(activePage) === index ? 'active' : ''}`}
            >
                <LinkComponent
                    onClick={pageClickHandler}
                    data-page-index={index}
                    className="page-link"
                >
                    {index + 1}
                </LinkComponent>
            </li>
        );
        pagesElement.push(element);
    }

    return (
        <nav
            className="mb-4"
            aria-label="Page navigation sample"
        >
            <ul
                className="pagination hideScrollBarX"
            >
                <li
                    key="previous"
                    className={`page-item ${activePage < 1 ? 'disabled' : ''}`}
                >
                    <LinkComponent
                        onClick={onPreviousHandler}
                        className="page-link"
                    >
                        Previous
                    </LinkComponent>
                </li>
                {pagesElement}
                <li
                    key="next"
                    className={`page-item ${activePage > pagesCount - 1 ? 'disabled' : ''}`}
                >
                    <LinkComponent
                        onClick={onNextHandler}
                        className="page-link"
                    >
                        Next
                    </LinkComponent>
                </li>
            </ul>
        </nav>
    );
});

PaginationComponent.propTypes = {
    recordsCount: PropTypes.number,
    recordsPerPage: PropTypes.number,
    onPageChange: PropTypes.func,
    activePage: PropTypes.number,
};

PaginationComponent.defaultProps = {
    recordsCount: 0,
    recordsPerPage: 0,
    onPageChange: () => { },
    activePage: 0,
};

export default PaginationComponent;
