import { Formik, Field, Form } from 'formik';

// import PropTypes from 'prop-types';
// import { Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {
//   SearchFormButton,
//   HeaderSearchbar,
//   SearchForm,
//   Input,
//   SearchSvg,
// } from './Searchbar.styled';

const initialValues = {
  searchQuery: '',
};

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = ({ searchQuery }, { resetForm }) => {
    if (searchQuery.trim() === '') {
      return toast.error('Please, enter a request.');
    }
    onSubmit(searchQuery);
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            autoComplete="off"
            name="searchQuery"
            autoFocus
            placeholder="Search movie"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
};
