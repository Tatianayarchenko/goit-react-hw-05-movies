import { Formik, Field, Form } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export const SearchForm = ({ value, onSubmit }) => {
  const handleSubmit = ({ searchQuery }, { resetForm }) => {
    if (searchQuery.trim() === '') {
      return toast.error('Please, enter a request.');
    }
    onSubmit(searchQuery);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ searchQuery: value ?? '' }}
        onSubmit={handleSubmit}
      >
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

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
