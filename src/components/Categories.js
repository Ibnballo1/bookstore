import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoryReducer);
  const statusChecker = status.map((update) => update);

  return (
    <section>
      <p>{statusChecker}</p>
      <button
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
    </section>
  );
};

export default Categories;
