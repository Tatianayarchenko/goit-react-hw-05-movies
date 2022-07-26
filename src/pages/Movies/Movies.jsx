import { Formik, Field, Form } from 'formik';

import PropTypes from 'prop-types';
// import { Formik } from 'formik';
import { toast } from 'react-toastify';
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

export const Movies = () => {
  const handleSubmit = ({ searchQuery }, { resetForm }) => {
    if (searchQuery.trim() === '') {
      return toast.error('Please, enter a request.');
    }
    //onSubmit(searchQuery); //??? onSubmit приходит пропсом из АPP
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onClick={handleSubmit}>
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
  );
};

// export const Searchbar = ({ onSubmit }) => {

Movies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
