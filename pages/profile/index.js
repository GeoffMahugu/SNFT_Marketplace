import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useWeb3React } from "@web3-react/core";
import { createUser, updateUser } from "../../components/apis/awsPostAPIs";

function Profile() {
    const { account } = useWeb3React();
    let profileSchema = yup.object({
        username: yup.string().required("Username is required"),
        bio: yup.string(),
        email: yup
            .string()
            .required("Email is required")
            .email("Invalid email format"),
        website: yup.string().url("Please Enter URL Format"),
        twitter: yup.string(),
        instagram: yup.string(),
    });

    return (
        <div>
            <Navbar />
            <section className="profile-edit-section">
                <div className="profile-content">
                    <div className="profile-cover">
                        <label htmlFor="cover" className="edit-image">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M4 2L4 22L12.683594 22C12.387594 21.378 12.181078 20.707 12.080078 20L6 20L6 16L8 14L12 18L12.09375 17.90625C12.61975 14.56125 15.507 12 19 12C19.34 12 19.673 12.033078 20 12.080078L20 8L14 2L4 2 z M 13 3.4550781L18.5 9L13 9L13 3.4550781 z M 12 11C12.552 11 13 11.448 13 12C13 12.552 12.552 13 12 13C11.448 13 11 12.552 11 12C11 11.448 11.448 11 12 11 z M 19 14C16.239 14 14 16.239 14 19C14 21.761 16.239 24 19 24C21.761 24 24 21.761 24 19C24 16.239 21.761 14 19 14 z M 18 16L20 16L20 18L22 18L22 20L20 20L20 22L18 22L18 20L16 20L16 18L18 18L18 16 z"
                                    fill="#fff"
                                />
                            </svg>
                        </label>
                        <div className="container">
                            <div className="artist-img next-img">
                                <Image
                                    src={`https://inf4mation-inf4-snft.s3.eu-west-2.amazonaws.com/NKF7axIMgvH62uol.png`}
                                    alt="Profile Image"
                                    layout="fill"
                                />
                                <label htmlFor="avatar" className="edit-image">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M4 2L4 22L12.683594 22C12.387594 21.378 12.181078 20.707 12.080078 20L6 20L6 16L8 14L12 18L12.09375 17.90625C12.61975 14.56125 15.507 12 19 12C19.34 12 19.673 12.033078 20 12.080078L20 8L14 2L4 2 z M 13 3.4550781L18.5 9L13 9L13 3.4550781 z M 12 11C12.552 11 13 11.448 13 12C13 12.552 12.552 13 12 13C11.448 13 11 12.552 11 12C11 11.448 11.448 11 12 11 z M 19 14C16.239 14 14 16.239 14 19C14 21.761 16.239 24 19 24C21.761 24 24 21.761 24 19C24 16.239 21.761 14 19 14 z M 18 16L20 16L20 18L22 18L22 20L20 20L20 22L18 22L18 20L16 20L16 18L18 18L18 16 z"
                                            fill="#fff"
                                        />
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="profile-form-content">
                        <Formik
                            initialValues={{}}
                            validationSchema={profileSchema}
                            onSubmit={async (values, { setSubmitting }) => {
                                const body = {
                                    WalletUID: account,
                                    // profileImage: profileImage,
                                    // profileBanner: bannerImage,
                                    Username: values.username,
                                    Bio: values.bio,
                                    Email: values.email,
                                    Website: values.website,
                                    InstagramHandle: values.instagram,
                                    TwitterHandle: values.twitter,
                                };
                                await updateUser(body);
                                setSubmitting(false);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="profile-edit-form">
                                    <Field
                                        type="file"
                                        name="cover"
                                        id="cover"
                                    />
                                    <Field
                                        type="file"
                                        name="avatar"
                                        id="avatar"
                                    />
                                    <label htmlFor="username">Username</label>
                                    <Field
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Enter Username"
                                    />
                                    <ErrorMessage
                                        name="username"
                                        component="div"
                                    />

                                    <label htmlFor="bio">Bio</label>
                                    <Field
                                        type="text"
                                        name="bio"
                                        id="bio"
                                        placeholder="Tell the world who you are!"
                                    />
                                    <ErrorMessage name="bio" component="div" />

                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter email"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                    />

                                    <label htmlFor="website">Your site</label>
                                    <Field
                                        type="url"
                                        name="website"
                                        id="website"
                                        placeholder="Enter Website URL"
                                    />
                                    <ErrorMessage
                                        name="website"
                                        component="div"
                                    />

                                    <label htmlFor="twitter">
                                        Twitter username
                                    </label>
                                    <Field
                                        type="text"
                                        name="twitter"
                                        id="twitter"
                                        placeholder="Enter Twitter uername"
                                    />
                                    <ErrorMessage
                                        name="twitter"
                                        component="div"
                                    />

                                    <label htmlFor="instagram">
                                        Instagram username
                                    </label>
                                    <Field
                                        type="text"
                                        name="instagram"
                                        id="instagram"
                                        placeholder="Enter Instagram uername"
                                    />
                                    <ErrorMessage
                                        name="instagram"
                                        component="div"
                                    />

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn blue"
                                    >
                                        Update Profile
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
export default Profile;
