import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';

export function StudentFormDetails({ addStudent, updateStudent, selectedStudent, setSelectedStudent }) {
    const initialValues = {
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        studentClass: '',
        address: '',
        email: '',
        mobileNumber: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        dob: Yup.date()
            .required('Date of birth is required')
            .test('age', 'Age must be between 18 and 21', function (value) {
                const age = Math.abs(new Date(Date.now() - new Date(value).getTime()).getUTCFullYear() - 1970);
                return age >= 18 && age <= 21;
            }),
        gender: Yup.string().required('Gender is required'),
        studentClass: Yup.string().required('Class is required'),
        address: Yup.string().required('Address is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        mobileNumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
            .required('Mobile number is required'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            if (selectedStudent) {
                updateStudent({ ...selectedStudent, ...values });
                setSelectedStudent(null);
            } else {
                addStudent({ id: Date.now(), ...values });
            }
            resetForm();
        },
    });

    useEffect(() => {
        if (selectedStudent) {
            formik.setValues(selectedStudent);
        }
    }, [selectedStudent]);

    return (
        <div className="mt-4">
            <h4>{selectedStudent ? 'Edit Student' : 'Add Student'}</h4>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-2">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="text-danger">{formik.errors.firstName}</div>
                    ) : null}
                </div>

                <div className="form-group mb-2">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="text-danger">{formik.errors.lastName}</div>
                    ) : null}
                </div>

                <div className="form-group mb-2">
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        className="form-control"
                        value={formik.values.dob}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.dob && formik.errors.dob ? (
                        <div className="text-danger">{formik.errors.dob}</div>
                    ) : null}
                </div>

                <div className="form-group mb-2 me-2">
                    <label>Gender</label>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formik.values.gender === 'Male'}
                            onChange={formik.handleChange}
                        /> Male
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formik.values.gender === 'Female'}
                            onChange={formik.handleChange}
                        /> Female
                    </div>
                    {formik.touched.gender && formik.errors.gender ? (
                        <div className="text-danger">{formik.errors.gender}</div>
                    ) : null}
                </div>

                <div className="form-group mb-2">
                    <label>Class</label>
                    <select
                        name="studentClass"
                        className="form-control"
                        value={formik.values.studentClass}
                        onChange={formik.handleChange}
                    >
                        <option value="">Select Class</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                    {formik.touched.studentClass && formik.errors.studentClass ? (
                        <div className="text-danger">{formik.errors.studentClass}</div>
                    ) : null}
                </div>

                <div className="form-group mb-2">
                    <label>Address</label>
                    <textarea
                        name="address"
                        className="form-control"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.address && formik.errors.address ? (
                        <div className="text-danger">{formik.errors.address}</div>
                    ) : null}
                </div>

                <div className="form-group mb-2">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className="form-group mb-2">
                    <label>Mobile Number</label>
                    <input
                        type="text"
                        name="mobileNumber"
                        className="form-control"
                        value={formik.values.mobileNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                        <div className="text-danger">{formik.errors.mobileNumber}</div>
                    ) : null}
                </div>

                <button type="submit" className="btn btn-primary me-2">
                    {selectedStudent ? 'Update' : 'Add'}
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={formik.resetForm}
                >
                    Reset
                </button>
            </form>
        </div>
    );
};
