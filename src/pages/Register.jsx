import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearAllUserErrors, register } from "../store/slices/userSlice";
import { FaAddressBook, FaPencilAlt, FaRegUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdCategory, MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Register = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstNiche, setFirstNiche] = useState("");
  const [secondNiche, setSecondNiche] = useState("");
  const [thirdNiche, setThirdNiche] = useState("");
  const [coverLatter, setCoverLatter] = useState("");
  const [resume, setResume] = useState("");

  const nichesArray = [
    "Artificial Intelligence",
    "Junior Software Developer",
    "Junior Software Engineer",
    "Software Engineer",
    "Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "Data Science",
    "Web Development",
    "Mobile App Development",
    "Blockchain Technology",
    "Internet of Things (IoT)",
    "DevOps",
    "Big Data Analytics",
    "Augmented Reality (AR)",
    "Virtual Reality (VR)",
    "E-commerce Development",
    "Game Development",
    "Software Testing",
    "Database Management",
    "UI/UX Design",
    "IT Consulting",
    "Robotic Process Automation (RPA)",
  ];

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const { loading, isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Validation for required fields
    if (!role || !name || !email || !phone || !address || !password) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (role === "Job Seeker") {
      if (!firstNiche || !secondNiche || !thirdNiche || !coverLatter || !resume) {
        toast.error("Please fill out all Job Seeker-specific fields.");
        return;
      }
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("role", role);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("password", password);

    if (role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLatter", coverLatter);
      formData.append("resume", resume);
    }

    dispatch(register(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error); // Show error if any
      dispatch(clearAllUserErrors());
    }

    // Redirect only when authenticated
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, isAuthenticated]);

  return (
    <section className="authPage">
      <div className="container">
        <div className="header">
          <h3>Create A New Account</h3>
        </div>
        <form onSubmit={handleRegister}>
          <div className="wrapper">
            <div className="inputTag">
              <label>Register As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Register as an Employer</option>
                  <option value="Job Seeker">Register as a Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label>Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FaPencilAlt />
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Phone No</label>
              <div>
                <input
                  type="Number"
                  placeholder="111-222-333"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FaPhoneFlip />
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="inputTag">
              <label>Address</label>
              <div>
                <input
                  type="text"
                  placeholder="Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <FaAddressBook />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
          </div>
          {role === "Job Seeker" && (
            <>
              <div className="wrapper">
                <div className="inputTag">
                  <label>Your First Niche</label>
                  <div>
                    <select
                      value={firstNiche}
                      onChange={(e) => setFirstNiche(e.target.value)}
                    >
                      <option value="">Your Niche</option>
                      {nichesArray.map((niche, index) => (
                        <option key={index} value={niche}>
                          {niche}
                        </option>
                      ))}
                    </select>
                    <MdCategory />
                  </div>
                </div>
                <div className="inputTag">
                  <label>Your Second Niche</label>
                  <div>
                    <select
                      value={secondNiche}
                      onChange={(e) => setSecondNiche(e.target.value)}
                    >
                      <option value="">Your Niche</option>
                      {nichesArray.map((niche, index) => (
                        <option key={index} value={niche}>
                          {niche}
                        </option>
                      ))}
                    </select>
                    <MdCategory />
                  </div>
                </div>
                <div className="inputTag">
                  <label>Your Third Niche</label>
                  <div>
                    <select
                      value={thirdNiche}
                      onChange={(e) => setThirdNiche(e.target.value)}
                    >
                      <option value="">Your Niche</option>
                      {nichesArray.map((niche, index) => (
                        <option key={index} value={niche}>
                          {niche}
                        </option>
                      ))}
                    </select>
                    <MdCategory />
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <div className="inputTag">
                  <label>Cover Letter</label>
                  <div>
                    <textarea
                      value={coverLatter}
                      onChange={(e) => setCoverLatter(e.target.value)}
                      rows={10}
                    />
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <div className="inputTag">
                  <label>Resume</label>
                  <div>
                    <input
                      type="file"
                      onChange={resumeHandler}
                      style={{ border: "none" }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          <button type="submit" disabled={loading}>
            Register
          </button>
          <Link to={"/login"}>Login Now</Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
