import { useEffect } from "react";
import styles from "./paginated.module.css";

const Paginated = ({ showPerPage, dogs, paginate, page }) => {
    useEffect(() => {
        if (page !== 1) {
            paginate(1);
        }
    }, [dogs]);

    const pageNumber = [];
    const total = Math.ceil(dogs / showPerPage);

    for (let i = 1; i <= total; i++) {
        pageNumber.push(i);
    }

    let startPage = page - 5;
    let endPage = page + 4;

    if (startPage < 1) {
        endPage += Math.abs(startPage) + 1;
        startPage = 1;
    }

    if (endPage > total) {
        startPage -= endPage - total;
        endPage = total;
    }

    const visiblePages = pageNumber.slice(startPage - 1, endPage);

    return (
        <>
            {total > 1 && (
                <div className={styles.paginate}>
                    <button
                        className={styles.prev}
                        onClick={page > 1 ? () => paginate(page - 1) : null}
                        disabled={page === 1 ? true : false}
                    >
                        &lt;
                    </button>

                    {visiblePages.length > 0 &&
                        visiblePages.map((number) => {
                            return (
                                <button
                                    className={styles.number}
                                    key={number}
                                    onClick={() => paginate(number)}
                                    disabled={page === number ? true : false}
                                >
                                    {number}
                                </button>
                            );
                        })}

                    <button
                        className={styles.prev}
                        onClick={page < total ? () => paginate(page + 1) : null}
                        disabled={page === total ? true : false}
                    >
                        &gt;
                    </button>
                </div>
            )}
        </>
    );
};

export default Paginated;
