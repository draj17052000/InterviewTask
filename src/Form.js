import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    skills: '',
    yearsOfExp: '',
    mobile: '',
    email: '',
    noticePeriod: '',
    currentCTC: '',
    expectedCTC: '',
    resume: '' // This will store the resume file path or name if needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        resume: file.name // Store the resume file name or path
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5001/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Form submitted successfully');
        setFormData({
          fullName: '',
          skills: '',
          yearsOfExp: '',
          mobile: '',
          email: '',
          noticePeriod: '',
          currentCTC: '',
          expectedCTC: '',
          resume: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Form submission failed');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <input
        type="text"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        placeholder="Skills"
        required
      />
      <input
        type="text"
        name="yearsOfExp"
        value={formData.yearsOfExp}
        onChange={handleChange}
        placeholder="Years of Experience"
        required
      />
      <input
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="noticePeriod"
        value={formData.noticePeriod}
        onChange={handleChange}
        placeholder="Notice Period"
        required
      />
      <input
        type="text"
        name="currentCTC"
        value={formData.currentCTC}
        onChange={handleChange}
        placeholder="Current CTC"
        required
      />
      <input
        type="text"
        name="expectedCTC"
        value={formData.expectedCTC}
        onChange={handleChange}
        placeholder="Expected CTC"
        required
      />
      <label>
        Resume (PDF or Word only):
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;



